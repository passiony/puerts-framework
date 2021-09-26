/**
 * ui数据基类
 */
import EventDispatcher from "../../utils/EventDispatcher";
import {UIWindowNames} from "../config/UIWindowNames";
import IDestroyable from "../../interface/IDestroyable";
import {IComponent} from "../../interface/IComponent";
import UIBaseCtrl from "./UIBaseCtrl";

export default class UIBaseModel implements IDestroyable, IComponent {
    /**
     * ui内部之间的事件传递
     */
    _eventHandle: EventDispatcher;
    /**
     * ui名字
     */
    _uiName: UIWindowNames;

    constructor(eventDispatcher: EventDispatcher, uiName: UIWindowNames) {
        this._eventHandle = eventDispatcher;
        this._uiName = uiName;
        this.onCreate();
    }

    destroy(): void {
        this.onDestroy();
        this._eventHandle.offAllCaller(this);
        this._eventHandle = null;
        this._uiName = null;
    }

    onCreate() {
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
export interface IUIBaseModelCtor {
    new(eventDispatcher: EventDispatcher, uiName: UIWindowNames): UIBaseModel;
}