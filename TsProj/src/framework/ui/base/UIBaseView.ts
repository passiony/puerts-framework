import {UIBaseContainer} from "../component/UIBaseContainer";
import EventDispatcher from "../../utils/EventDispatcher";
import UIBaseModel from "./UIBaseModel";
import UIBaseCtrl from "./UIBaseCtrl";
import {UICanvas} from "../component/UICanvas";
import {UILayer} from "../component/UILayer";
import {UnityEngine} from "csharp";

/**
 * ui基类
 */
export class UIBaseView extends UIBaseContainer {
    private _eventHandle: EventDispatcher;
    private _canvas: UICanvas;
    private _model: UIBaseModel;
    private _ctrl: UIBaseCtrl;
    private _baseOrder: number;
    //layer引用
    private _layer: UILayer;

    constructor(layer: UILayer, relativePath: string, eventDispatcher: EventDispatcher, model: UIBaseModel, ctrl: UIBaseCtrl) {
        super(layer.transform, relativePath);
        this._layer = layer;
        this._baseOrder = 0;
        this._model = model;
        this._ctrl = ctrl;
        this._eventHandle = eventDispatcher;
    }

    onCreate(): void {
        super.onCreate();
        this._canvas = this.addComponent(UICanvas, "", [0, this]);
        this._rectTransform.offsetMax = UnityEngine.Vector2.zero;
        this._rectTransform.offsetMin = UnityEngine.Vector2.zero;
        this._rectTransform.localScale = UnityEngine.Vector3.zero;
        this._rectTransform.localPosition = UnityEngine.Vector3.zero;
    }

    onDestroy(): void {
        this._model = null;
        this._ctrl = null;
        this._canvas = null;
        this._eventHandle = null;
        super.onDestroy();
    }

    onEnable(...arg: any[]): void {
        this._baseOrder = this._layer.popWindowOrder();
        super.onEnable();
        this.onAddListener();
    }

    onDisable(): void {
        this.onRemoveListener();
        super.onDisable();
        this._layer.pushWindowOrder();
    }

    onAddListener(): void {

    }

    onRemoveListener(): void {

    }

    /**
     * 基础层级
     */
    public get baseOrder(): number {
        return this._baseOrder;
    }

    /**
     * 获取控制器
     */
    public get ctrl(): UIBaseCtrl {
        return this._ctrl;
    }

    /**
     * 获取数据
     */
    public get model(): UIBaseModel {
        return this._model;
    }
}

/**
 * 类类型限定
 */
export interface IUIBaseViewCtor {
    new(layer: UILayer, relativePath: string, eventDispatcher: EventDispatcher, model: UIBaseModel, ctrl: UIBaseCtrl): UIBaseView;
}