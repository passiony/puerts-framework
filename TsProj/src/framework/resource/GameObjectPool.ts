import {System, UnityEngine} from "csharp";
import {ISingleton} from '../interface/ISingleton';
import {string} from "../utils/StringUtil";
import {ResourceManager} from "./ResourceManager";
import {$typeof} from "puerts";
import Handler from "../utils/Handler";

/*
* GameObject资源池
* */
export class GameObjectPool implements ISingleton {
    public static Instance: GameObjectPool = new GameObjectPool();

    private _cacheTransRoot = null;
    private _goPool: Map<string, UnityEngine.GameObject> = new Map<string, UnityEngine.GameObject>();
    private _instCache: Map<string, Array<any>> = new Map<string, Array<any>>();
    private _typeGameObject: System.Type;

    /**
     * 密封构造函数
     */
    private constructor() {
    }

    /**
     * 从缓存获取对象
     * @param path
     */
    private tryGetFromCache(path: string): UnityEngine.GameObject {
        if (!this.checkHasCached(path)) {
            return null;
        }
        let cachedInst: Array<any> = this._instCache.get(path);
        if (cachedInst != null && cachedInst.length > 0) {
            return cachedInst.pop();
        }
        let pooledGo = this._goPool.get(path);
        if (pooledGo != null) {
            return UnityEngine.GameObject.Instantiate(pooledGo) as UnityEngine.GameObject;
        }
        return null;
    }

    /**
     * 启用gameObject
     * @param gameObject
     */
    private activeGO(gameObject: UnityEngine.GameObject) {
        gameObject && gameObject.SetActive(true);
    }

    /**
     *
     * @param path
     * @returns bool
     */
    private checkHasCached(path: string): boolean {
        let cachedInst: Array<any> = this._instCache.get(path);
        if (cachedInst && cachedInst.length > 0) {
            return true;
        }
        let pooledGo = this._goPool.get(path);
        return pooledGo != null;
    }

    /**
     * 缓存并实例化GameObject
     * @param path
     * @param go
     * @param inst_count
     */
    private cacheAndInstGameObject(path: string, go: any, inst_count: number = 1) {
        this._goPool.set(path, go);
        if (inst_count > 0) {
            let cachedInst: Array<any> = this._instCache.get(path) || [];
            for (let i: number = 0; i < inst_count; i++) {
                let inst = UnityEngine.GameObject.Instantiate(go) as UnityEngine.GameObject;
                inst.transform.SetParent(this._cacheTransRoot);
                inst.SetActive(false);
                cachedInst.push(inst);
            }
            this._instCache.set(path, cachedInst);
        }
    }

    //----------------------------------public function ------------------------

    /**
     * 初始化
     */
    public initialize(): void {
        let go = UnityEngine.GameObject.Find("GameObjectCacheRoot");
        if (go == (void 0)) {
            go = new UnityEngine.GameObject("GameObjectCacheRoot");
            UnityEngine.Object.DontDestroyOnLoad(go);
        }
        this._cacheTransRoot = go.transform;
        this._typeGameObject = $typeof(UnityEngine.GameObject);
    }

    /**
     * 预加载资源，回调里面不返回加载的资源
     * @param pathArray
     * @param callback
     * @param instCount
     */
    public preLoadGameObjectAsync(pathArray: Array<string>, callback: Handler, instCount: number = 1) {
        let len: number = pathArray.length;
        let loadCount = len;
        for (let i = 0; i < len; i++) {
            let path = pathArray[i];
            ResourceManager.Instance.loadAssetAsync(path, this._typeGameObject, Handler.create(this, (p: string, gameObject) => {
                if (gameObject != null) {
                    this.cacheAndInstGameObject(p, gameObject, instCount)
                }
                if (--loadCount <= 0) {
                    callback && callback.run();
                }
            }, [path], true));
        }
    }

    /**
     * 异步加载GameObject，会把加载好的GameObject传给回调
     * @param path
     * @param callback
     */
    public loadGameObjectAsync(path: string, callback: Handler) {
        let inst = this.tryGetFromCache(path);
        if (inst != null) {
            this.activeGO(inst);
            return
        }
        this.preLoadGameObjectAsync([path], Handler.create(this, () => {
            let inst = this.tryGetFromCache(path);
            this.activeGO(inst);
            callback && callback.runWith(inst);
        }))
    }

    /**
     * 获取已经加载好的GameObject对象
     * @param path
     * @param active
     */
    public getLoadedGameObject(path: string, active: boolean = true): UnityEngine.GameObject {
        let inst = this.tryGetFromCache(path) as UnityEngine.GameObject;
        if (inst == null) {
            console.error(`GameObjectPool=>getLoadedGameObject which is not loaded:${path}`);
        }
        active && this.activeGO(inst);
        return inst;
    }

    /**
     * 回收GameObject
     * @param path
     * @param inst
     * @returns
     */
    public recycleGameObject(path: string, inst: UnityEngine.GameObject) {
        if (inst == null || string.IsNullOrEmpty(path)) {
            console.error("GameObjectPool::recycleGameObject params error,path or game object inst is null or empty");
            return;
        }
        inst.transform.SetParent(this._cacheTransRoot);
        inst.SetActive(false);
        let cachedInst = this._instCache.get(path) || [];
        cachedInst.push(inst);
        this._instCache.set(path, cachedInst);
    }

    /**
     * 清理
     */
    public cleanup() {
        this._instCache.forEach((arr: Array<UnityEngine.GameObject>, path: string) => {
            if (arr.length) {
                let len = arr.length;
                for (let i = 0; i < len; i++) {
                    let go = arr[i];
                    if (go != null) {
                        UnityEngine.GameObject.Destroy(go);
                    }
                }
            }
        });
        this._instCache.clear();
        this._goPool.clear();
    }
}