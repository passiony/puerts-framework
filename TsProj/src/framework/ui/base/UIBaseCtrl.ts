import IDestroyable from "../../interface/IDestroyable";
import {IComponent} from "../../interface/IComponent";
import EventDispatcher from "../../utils/EventDispatcher";
import UIBaseModel from "./UIBaseModel";

export default class UIBaseCtrl implements IDestroyable, IComponent {
    /**
     * 数据基类
     */
    _eventHandle: EventDispatcher;
    /**
     * 数据
     */
    _model: UIBaseModel;

    constructor(eventDispatcher: EventDispatcher, model: UIBaseModel) {
        this._eventHandle = eventDispatcher;
        this._model = model;
        this.onCreate();
    }

    destroy(): void {
        this.onDestroy();
        this._eventHandle = null;
        this._model = null;
    }

    onCreate(): void {
    }

    onDestroy(): void {
    }

    onEnable(...args: any[]): void {
    }

    onDisable(): void {
    }

    onAddListener(): void {

    }

    onRemoveListener(): void {

    }

    public deactivate(): void {
        this.onRemoveListener();
        this.onDisable();
    }

    public activate(...args: any[]) {
        this.onAddListener();
        this.onEnable(args);
    }
}

/**
 * 类构造函数接口，用于类型限定
 */
export interface IUIBaseCtrlCtor {
    new(eventDispatcher: EventDispatcher, model: UIBaseModel): UIBaseCtrl;
}