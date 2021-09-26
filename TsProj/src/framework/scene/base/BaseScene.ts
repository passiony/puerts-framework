import IDestroyable from "../../interface/IDestroyable";
import {SceneConfig} from "../../../game/scenes/config/SceneConfig";
import {System} from "csharp";
import {IUILoadingModel} from "../../../game/ui/uiLoading/IUILoading";
import {string} from "../../utils/StringUtil";

/**
 * 场景基类
 * @author by passion 
 * @create time 2021/6/9 13:52
**/
export class BaseScene implements IDestroyable {
    /**
     * 场景配置
     */
    protected _config: SceneConfig;
    /**
     * 预加载的资源
     */
    protected _preloadResources: Map<string, System.Type>;
    /**
     * 预加载的prefab
     */
    protected _preloadPrefab: Array<string>;

    /**
     * 构造函数
     * @param config
     */
    constructor(config: SceneConfig) {
        this._config = config;
        this._preloadResources = new Map<string, System.Type>();
        this._preloadPrefab = new Array<string>();
        this.OnCreate();
    }

    public destroy(): void {
        this.OnDestroy();
    }

    /**
     * 创建时
     * @constructor
     */
    protected OnCreate() {

    }

    /**
     * 释放时
     * @constructor
     */
    protected OnDestroy() {
        this._config = null;
        this._preloadPrefab = null;
        this._preloadResources = null;
    }

    /**
     * 进入时
     * @constructor
     */
    public OnEnter() {

    }

    /**
     * 离开时
     * @constructor
     */
    public OnLeave() {
        this._preloadResources.clear();
        this._preloadPrefab.length = 0;
    }

    /**
     * 加载完成时
     * @constructor
     */
    public OnComplete() {

    }

    /**
     * 预加载场景资源
     * @param model
     * @param maxProgress
     */
    public async preloadAsync(model?: IUILoadingModel, maxProgress?: number) {

    }

    /**
     * 添加预加载prefab
     * @param path
     */
    public addPreloadPrefab(path: string) {
        if (string.IsNullOrEmpty(path) || !path.endsWith(".prefab")) {
            console.error("scene preload prefab path must end with .prefab");
            return;
        }
        this._preloadPrefab.push(path);
    }

    /**
     * 添加预加载资源类型
     * @param path
     * @param resType
     */
    public addPreloadResource(path: string, resType: System.Type) {
        if(string.IsNullOrEmpty(path)){
            return;
        }
        if (this._preloadResources.has(path)) {
            console.log("repeat add preload resource,path:" + path);
            return;
        }
        this._preloadResources.set(path, resType);
    }

    /**
     * get config
     */
    public get config(): SceneConfig {
        return this._config;
    }
}