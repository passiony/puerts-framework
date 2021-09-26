/**
 * ui基类
 */
import {UnityEngine} from "csharp";
import {UIUtil} from "../util/UIUtil";
import {$typeof} from "puerts";
import {IUIComponent} from "../../interface/IUIComponent";

export class UIBaseComponent implements IUIComponent {
    /**
     * 持有者:间接持有或直接持有【子节点或孙子节点】
     */
    protected _holder: UnityEngine.Transform;
    /**
     * transform对应的gameObject
     */
    protected _gameObject: UnityEngine.GameObject;
    /**
     * transform组件
     */
    protected _transform: UnityEngine.Transform;
    /**
     * ui rectTrans组件
     */
    protected _rectTransform: UnityEngine.RectTransform;
    /**
     * 组件名字
     */
    protected _name: string;
    /**
     * 是否激活
     */
    protected _active: boolean;
    /**
     * 相对路径
     */
    protected _relativePath: string;

    /**
     * 添加组件
     * @param holder
     * @param relativePath 相对holder的路径
     */
    constructor(holder: UnityEngine.Transform, relativePath: string) {
        this._holder = holder;
        this._relativePath = relativePath;
    }

    destroy(): void {
        this.onDestroy();
    }

    onDestroy(): void {
        this._holder = null;
        this._gameObject = null;
        this._name = null;
        this._transform = null;
    }

    onCreate(): void {
        this._transform = UIUtil.findTrans(this._holder, this._relativePath);
        this._gameObject = this._transform.gameObject;
        this._name = this._gameObject.name;
        this._rectTransform = UIUtil.findComponent(this._transform, $typeof(UnityEngine.RectTransform));
    }

    onDisable(): void {
    }

    onEnable(): void {
    }

    /**
     * 设置激活与反激活
     * @param active
     */
    public setActive(active: boolean) {
        if (this._active == active) {
            return;
        }
        this._active = active;
        if (active) {
            this._gameObject.SetActive(active);
            this.onEnable();
        } else {
            this.onDisable();
            this._gameObject.SetActive(active);
        }
    }

    /**
     * 获取是否激活
     * @return boolean 是否激活
     */
    public getActive(): boolean {
        return this._active;
    }

    /**
     * 获取组件名字
     */
    public getName(): string {
        return this._name;
    }

    /**
     * 相对路径
     */
    public getRelativePath(): string {
        return this._relativePath;
    }

    /**
     * 获取transform节点
     */
    public get transform(): UnityEngine.Transform {
        return this._transform;
    }

    /**
     * 获取holder
     */
    public get holder(): UnityEngine.Transform {
        return this._holder;
    }

    /**
     * 获取游戏对象
     */
    public get gameObject(): UnityEngine.GameObject {
        return this._gameObject;
    }
}

/**
 * 类型限定
 */
export interface IUIBaseComponentCtor {
    new(holder: UnityEngine.Transform, relativePath: string): IUIComponent;
}