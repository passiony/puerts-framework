import EventDispatcher from "../utils/EventDispatcher";
import {ISingleton} from "../interface/ISingleton";
import {UnityEngine} from "csharp";
import {EUILayer, UILayerInfo, UILayers} from "./config/UILayers";
import {UIWindow} from "./UIWindow";
import {UILayer} from "./component/UILayer";
import {$typeof} from "puerts";
import Handler from "../utils/Handler";
import {UIWindowNames} from "./config/UIWindowNames";
import {UIConfigs} from "./config/UIConfigs";
import {UIMessageNames} from "./config/UIMessageNames";
import {EUIAction} from "./config/EUIAction";
import {GameObjectPool} from "../resource/GameObjectPool";

/**
 * @author by passion
 * @create time 2021/6/1 10:25
 *
 * UI管理器
 **/
export default class UIManager extends EventDispatcher implements ISingleton {
    get uiCamera(): UnityEngine.Camera {
        return this._uiCamera;
    }

    public static Instance: UIManager = new UIManager();
    //ui场景根目录
    static UIRootPath: string = "UIRoot";
    //事件路径
    static EventSystemPath: string = "EventSystem";
    //camera路径
    static UICameraPath = UIManager.UIRootPath + "/UICamera";
    //分辨率
    static Resolution = new UnityEngine.Vector2(750, 1334);
    //窗口最大可使用的相对order_in_layer
    static MaxOrderPerWindow: number = 10;

    //所有窗口记录
    private _windowMap: Map<UIWindowNames, UIWindow>;
    //加载回调
    private _loadHandlerMap: Map<UIWindowNames, Handler>;
    //打开中的弹窗
    private _openingDialogs: Map<UIWindowNames, UIWindow>;
    //ui摄像机
    private _uiCamera: UnityEngine.Camera;
    //层级map
    private _layerMap: Map<EUILayer, UILayer>;
    //根节点obj
    private _gameObject: UnityEngine.GameObject;
    //根节点trans
    private _transform: UnityEngine.Transform;

    /**
     * 密封构造函数
     */
    private constructor() {
        super();
    }

    /**
     * 初始化
     */
    public initialize(): void {
        UILayers.set();
        this._loadHandlerMap = new Map<UIWindowNames, Handler>();
        this._windowMap = new Map<UIWindowNames, UIWindow>();
        this._openingDialogs = new Map<UIWindowNames, UIWindow>();
        this._layerMap = new Map<EUILayer, UILayer>();
        this._gameObject = UnityEngine.GameObject.Find(UIManager.UIRootPath);
        this._transform = this._gameObject.transform;
        let cameraRoot = UnityEngine.GameObject.Find(UIManager.UICameraPath);
        this._uiCamera = cameraRoot.GetComponent($typeof(UnityEngine.Camera)) as UnityEngine.Camera;
        UnityEngine.Object.DontDestroyOnLoad(this._gameObject);
        let eventSys = UnityEngine.GameObject.Find(UIManager.EventSystemPath);
        UnityEngine.Object.DontDestroyOnLoad(eventSys);
        UILayers.walk(Handler.create(this, (layer_info: UILayerInfo) => {
            let go = new UnityEngine.GameObject(layer_info.name);
            let trans = go.transform;
            trans.SetParent(this._transform);
            let newLayer = new UILayer(this._transform, layer_info.name);
            newLayer.onCreate(layer_info);
            this._layerMap.set(layer_info.type, newLayer);
        }, null, false));
    }

    /**
     * 打开界面
     * @param uiName 界面名
     * @param args 参数列表
     */
    public openWindow(uiName: UIWindowNames, ...args: any[]): boolean {
        let window = this._windowMap.get(uiName);
        //不存在ui，先初始化
        if (window == null) {
            window = new UIWindow();
            this._windowMap.set(uiName, window);
            this.initWindow(uiName, window);
        } else {
            if (window.action == EUIAction.Loading || window.action == EUIAction.Opening) {
                //TODO 目前打开中，或者在加载中就直接返回，之后按需求修改。
                return true;
            }
        }
        this.innerOpenWindow(window, args);
        return true;
    }

    /**
     * 关闭界面
     * @param uiName 界面名
     */
    public closeWindow(uiName: UIWindowNames): boolean {
        let window = this._windowMap.get(uiName);
        if (window == null) {
            return false;
        }
        this.innerCloseWindow(window);
    }

    /**
     * 释放除去某一层的ui
     * @param layer
     */
    public destroyWindowExceptLayer(layer: EUILayer) {
        this._windowMap.forEach((window, name) => {
            if (window.layer != layer) {
                this.innerCloseWindow(window);
                this.innerDestroyWindow(window);
            }
        });
    }

    /**
     * 释放窗口
     * @param uiName
     */
    public destroyWindow(uiName: UIWindowNames) {
        let window = this._windowMap.get(uiName);
        if (window == null) {
            return;
        }
        this.innerCloseWindow(window);
        this.innerDestroyWindow(window);
    }

    /**
     * 获取界面
     * @param uiName
     */
    public getWindow(uiName: UIWindowNames): UIWindow {
        return this._windowMap.get(uiName);
    }

    //-------------------------------private----------------------

    /**
     * 初始化界面
     * @param uiName
     * @param window
     */
    private initWindow(uiName: UIWindowNames, window: UIWindow): UIWindow {
        window.action = EUIAction.Initing;
        let config = UIConfigs.get(uiName);
        if (config == null) {
            console.error("UIWindowNames not exist in UIConfigs,name index is:" + UIWindowNames[uiName]);
            return;
        }
        let layer = this._layerMap.get(config.layer);
        if (layer == null) {
            console.error(`No layer named:${EUILayer[config.layer]}`);
            return;
        }
        window.name = uiName;
        let eventDispatcher = new EventDispatcher();
        if (config.model != null) {
            window.model = new config.model(eventDispatcher, uiName);
        }
        if (config.ctrl != null) {
            window.ctrl = new config.ctrl(eventDispatcher, window.model);
        }
        if (config.view != null) {
            window.view = new config.view(layer, UIWindowNames[config.name], eventDispatcher, window.model, window.ctrl);
        }
        window.layer = config.layer;
        window.prefabPath = config.prefabPath;
        window.components = config.components;
        window.type = config.type;
        window.action = EUIAction.None;
        this.event(UIMessageNames.UIFRAME_ON_WINDOW_CREATE, window);
        return window;
    }

    /**
     * 关闭界面，会处理可能在加载的情况，然后再禁用界面
     * @param window
     */
    private innerCloseWindow(window: UIWindow) {
        let deactivate: boolean = true;
        //还在加载中就要关闭界面把加载回调给清除,加载中view还没拉起来就没必要去禁用view也不能去禁用会报错
        if (window.action == EUIAction.Loading) {
            let handler = this._loadHandlerMap.get(window.name);
            handler && handler.clear();
            this._loadHandlerMap.delete(window.name);
            window.action = EUIAction.None;
            deactivate = false;
        }
        deactivate && this.deactivateWindow(window);
    }

    /**
     * 内部打开窗口，处理加载
     * @param window
     * @param args
     */
    private innerOpenWindow(window: UIWindow, ...args: any[]) {
        if (window.action == EUIAction.Opening || window.isOpened) {
            console.error(`you should close window first,window name: ${UIWindowNames[window.name]}`);
            return;
        }
        if (window.isLoaded) {
            this.activateWindow(window);
        } else {
            window.action = EUIAction.Loading;
            let loadCB: Handler = Handler.create(this, (window: UIWindow, args: any[]) => {
                window.isLoaded = true;
                let go = GameObjectPool.Instance.getLoadedGameObject(window.prefabPath, true);
                let layer: UILayer = this._layerMap.get(window.layer);
                let trans = go.transform;
                trans.SetParent(layer.transform);
                trans.name = UIWindowNames[window.name];
                window.action = EUIAction.None;
                window.view.onCreate();
                this.activateWindow(window, args);
            }, [window, args], true);
            this._loadHandlerMap.set(window.name, loadCB);
            let loadArray: Array<string> = window.components && window.components.concat([window.prefabPath]) || [window.prefabPath];
            GameObjectPool.Instance.preLoadGameObjectAsync(loadArray, loadCB);
        }
    }

    /**
     * 激活界面
     * @param window
     * @param args
     */
    private activateWindow(window: UIWindow, ...args: any[]) {
        if (window.isOpened) {
            return
        }
        window.action = EUIAction.Opening;
        window?.model.activate(args);
        window?.ctrl.activate(args);
        window.view.setActive(true);
        window.action = EUIAction.None;
        window.isOpened = true;
        this.event(UIMessageNames.UIFRAME_ON_WINDOW_OPEN, window);
    }

    /**
     * 禁用界面
     * @param window
     */
    private deactivateWindow(window: UIWindow) {
        if (!window.isOpened) {
            return
        }
        window.action = EUIAction.Closing;
        window?.model.deactivate();
        window?.ctrl.deactivate();
        window.view.setActive(false);
        window.action = EUIAction.None;
        window.isOpened = false;
        this.event(UIMessageNames.UIFRAME_ON_WINDOW_CLOSE, window);
    }

    private innerDestroyWindow(window: UIWindow) {
        if (window.isLoaded) {
            GameObjectPool.Instance.recycleGameObject(window.prefabPath, window.view.gameObject);
        }
        window.model?.destroy();
        window.ctrl?.destroy();
        window.view?.destroy();
        this._windowMap.delete(window.name);
    }
}