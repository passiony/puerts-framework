import {ISingleton} from "../interface/ISingleton";
import {BaseScene} from "./base/BaseScene";
import UIManager from "../ui/UIManager";
import IDestroyable from "../interface/IDestroyable";
import {Timer} from "../utils/timer/Timer";
import {UnityEngine} from "csharp";
import {SceneConfig, SceneConfigs} from "../../game/scenes/config/SceneConfig";
import {ResourceManager} from "../resource/ResourceManager";
import {IUILoadingModel} from "../../game/ui/uiLoading/IUILoading";
import {EUILayer} from "../ui/config/UILayers";
import {GameObjectPool} from "../resource/GameObjectPool";

export class SceneManager implements ISingleton, IDestroyable {
    /**
     * 实例
     */
    public static Instance: SceneManager = new SceneManager();
    /**
     * 当前场景
     */
    private _currentScene: BaseScene;
    /**
     * 是否加载中
     */
    private _busing: boolean;
    /**
     * 场景map
     */
    private _sceneMap: Map<string, BaseScene>;

    private constructor() {
    }

    public initialize(): void {
        this._sceneMap = new Map<string, BaseScene>();
        this._busing = false;
        this._currentScene = null;
    }

    public destroy(): void {
        this._currentScene = null;
        if (this._sceneMap) {
            this._sceneMap.forEach((scene, name) => {
                scene && scene.destroy();
            });
            this._sceneMap = null;
        }
    }

    /**
     * 切换场景
     * @param sceneConfig
     */
    public switchScene(sceneConfig) {
        if (this._busing) {
            return;
        }
        if (this._currentScene && this._currentScene.config == sceneConfig) {
            return;
        }
        this._busing = true;
        this._innerSwitchScene(sceneConfig).then(() => {
            this._busing = false;
            console.log("switch scene complete!!")
        })
    }

    /**
     * 等待一帧
     * @private
     */
    async _waitFrame() {
        return Timer.timer.waitFrame(1);
    }

    //切换场景
    async _innerSwitchScene(config: SceneConfig) {
        UIManager.Instance.openWindow(config.Loading);
        let window = UIManager.Instance.getWindow(config.Loading);
        let model: IUILoadingModel = window.model as any as IUILoadingModel;
        model.setValue(0);
        await this._waitFrame();
        await ResourceManager.Instance.waitProcessRunningOver();
        //清理旧场景
        this._currentScene && this._currentScene.OnLeave();
        model.setValue(model.getValue() + 0.01);
        await this._waitFrame();
        //清理ui
        UIManager.Instance.destroyWindowExceptLayer(EUILayer.TopLayer);
        model.setValue(model.getValue() + 0.01);
        await this._waitFrame();
        //清理资源缓存
        GameObjectPool.Instance.cleanup();
        model.setValue(model.getValue() + 0.01);
        await this._waitFrame();
        ResourceManager.Instance.cleanup();
        model.setValue(model.getValue() + 0.01);
        await this._waitFrame();
        let sceneMgr = UnityEngine.SceneManagement.SceneManager;
        let resources = UnityEngine.Resources;
        sceneMgr.LoadScene(SceneConfigs.LoadingScene.Level);
        model.setValue(model.getValue() + 0.01);
        await this._waitFrame();
        await resources.UnloadUnusedAssets();
        model.setValue(model.getValue() + 0.1);
        await this._waitFrame();
        let logicScene = this._sceneMap.get(config.Name);
        if (logicScene == null) {
            logicScene = new config.Class(config);
            this._sceneMap.set(config.Name, logicScene);
        }
        logicScene.OnEnter();
        model.setValue(model.getValue() + 0.02);
        await this._waitFrame();
        //加载场景
        await sceneMgr.LoadSceneAsync(config.Level);
        model.setValue(model.getValue() + 0.15);
        await this._waitFrame();
        let curProgress: number = model.getValue();
        //预加载场景资源
        await logicScene.preloadAsync(model, 0.65);
        model.setValue(curProgress + 0.65);
        await this._waitFrame();
        logicScene.OnComplete();
        model.setValue(1);
        await this._waitFrame();
        this._currentScene = logicScene;
        //释放loading
        UIManager.Instance.destroyWindow(config.Loading);
        await this._waitFrame();
        resources.UnloadUnusedAssets();
    }
}