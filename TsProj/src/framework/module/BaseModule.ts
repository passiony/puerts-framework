import {IModule} from "../interface/IModule";
import EventDispatcher from "../utils/EventDispatcher";

/**
 * 模块基类
 * @author by passion 
 * @create time 2021/6/9 11:38
**/
export class BaseModule extends EventDispatcher implements IModule {
    /**
     * 是否可更新
     * 默认模块不可更新，如果存在模块需要被更新，设置可更新
     */
    protected _updatable:boolean = false;
    
    public onAdd(): void {
        this.onAddListener();
    }

    public onRemove(): void {
        this.onRemoveListener();
    }

    public onAddListener(): void {

    }

    public onRemoveListener(): void {
        
    }
    
    public setUpdatable(value: boolean): void {
        
    }

    /**
     * 获取是否可更新
     */
    public getUpdatable(): boolean {
        return this._updatable;
    }

    public onUpdate(): void {
        console.error("please override BaseModule::update function");
    }
}

/**
 * 类型构造器
 */
export interface IBaseModuleCtor {
    new():IModule;
}