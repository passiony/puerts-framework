import {ISingleton} from "../interface/ISingleton";
import {AssetBundles, System, UnityEngine} from "csharp";
import Handler from "../utils/Handler";
import {Timer} from "../utils/timer/Timer";
import {string} from "../utils/StringUtil";
import {$typeof} from "puerts";
import {IAtlasConfig} from "./config/AtlasConfig";

export class ResourceManager implements ISingleton {
    public static Instance: ResourceManager = new ResourceManager();
    //cs侧资源接口
    private _api: AssetBundles.AssetBundleManager;
    private _requestAssetsHandler: Map<AssetBundles.BaseAssetAsyncLoader, Handler>;
    private _requestABHandler: Map<AssetBundles.BaseAssetBundleAsyncLoader, Handler>;
    //sprite类型
    private _spriteType: System.Type;

    private constructor() {
    }

    private onUpdate() {
        if (this._requestAssetsHandler.size > 0) {
            this._requestAssetsHandler.forEach((handler, loader) => {
                if (loader.isDone) {
                    handler && handler.runWith(loader.asset);
                    loader.Dispose();
                    this._requestAssetsHandler.delete(loader);
                }
            });
        }

        if (this._requestABHandler.size > 0) {
            this._requestABHandler.forEach((handler, loader) => {
                if (loader.isDone) {
                    handler && handler.runWith(true);
                    loader.Dispose();
                    this._requestABHandler.delete(loader);
                }
            });
        }
    }

    public initialize(): void {
        this._spriteType = $typeof(UnityEngine.Sprite);
        this._api = AssetBundles.AssetBundleManager.Instance;
        this._requestAssetsHandler = new Map<AssetBundles.BaseAssetAsyncLoader, Handler>();
        this._requestABHandler = new Map<AssetBundles.BaseAssetBundleAsyncLoader, Handler>();
        Timer.timer.frameLoop(2, this, this.onUpdate, null, true);
    }

    /**
     * 异步加载资源
     * @param path
     * @param res_type
     * @param callback
     */
    public loadAssetAsync(path: string, res_type: System.Type, callback: Handler): boolean {
        if (string.IsNullOrEmpty(path)) {
            console.error("ResourceManager::loadAssetAsync params error,path is empty");
            return false;
        }
        let request = this._api.LoadAssetAsync(path, res_type);
        this._requestAssetsHandler.set(request, callback);
        return true;
    }

    /**
     * 协程方式加载资源
     * @param path
     * @param res_type
     */
    public async loadAssetAwait(path: string, res_type: System.Type) {
        let request = await this._api.LoadAssetAsync(path, res_type);
        let asset = request.asset;
        request.Dispose();
        return asset;
    }

    /**
     * 异步加载AB包
     * @param path
     * @param callBack
     */
    public loadAssetBundleAsync(path: string, callBack: Handler) {
        if (string.IsNullOrEmpty(path)) {
            console.error("ResourceManager::loadAssetBundleAsync params error,path is empty");
            return;
        }
        let request = this._api.LoadAssetBundleAsync(path);
        this._requestABHandler.set(request, callBack);
        return true;
    }

    public cleanup() {
        this._api.ClearAssetsCache();
        this._api.UnloadAllUnusedResidentAssetBundles();
    }

    /**
     * 等待正在加载中的完成
     */
    async waitProcessRunningOver() {
        return new Promise<void>(resolve => {
            let caller = {};
            Timer.timer.frameLoop(1, caller, () => {
                if (!this._api.IsProsessRunning) {
                    Timer.timer.clearAll(caller);
                    resolve();
                }
            }, null, true);
        });
    }

    //-------------其他类型加载--------------------------

    /**
     * 协程方式加载图片
     * @param spriteName
     * @param atlas
     * @constructor
     */
    public async loadImageAwait(spriteName: string, atlas: IAtlasConfig) {
        let path = atlas.atlasPath + spriteName;
        let request = await this._api.LoadAssetAsync(path, this._spriteType);
        let sprite = request.asset;
        request.Dispose();
        return sprite;
    }

    /**
     * 异步加载图片
     * @param spriteName
     * @param atlas
     * @param callback
     */
    public loadImageAsync(spriteName: string, atlas: IAtlasConfig, callback: Handler) {
        let path = atlas.atlasPath + spriteName;
        this.loadAssetAsync(path, this._spriteType, callback);
    }
}