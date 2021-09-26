import {ISingleton} from "../interface/ISingleton";
import {BaseModule, IBaseModuleCtor} from "./BaseModule";
import {IModule} from "../interface/IModule";
import {Timer} from "../utils/timer/Timer";

/**
 * 模块中心
 * @author by passion 
 * @create time 2021/6/9 11:39
**/
export class ModuleCenter implements ISingleton {
    //实例
    public static Instance: ModuleCenter = new ModuleCenter();
    /**
     * 模块map
     */
    private _moduleMap: Map<IBaseModuleCtor, BaseModule>;

    /**
     * 初始化
     */
    public initialize(): void {
        this._moduleMap = new Map<IBaseModuleCtor, BaseModule>();
        Timer.timer.frameLoop(1, this, this._update, null, true);
    }

    /**
     * 添加模块
     * @param moduleClass
     */
    public add(moduleClass: IBaseModuleCtor): IModule {
        if (this._moduleMap.has(moduleClass)) {
            console.error("Cannot add modules repeatedly,module name:" + moduleClass.name);
            return;
        }
        let inst = new moduleClass() as BaseModule;
        this._moduleMap.set(moduleClass, inst);
        inst.onAdd();
        return inst;
    }

    /**
     * 移除模块
     * @param moduleClass
     */
    public remove(moduleClass: IBaseModuleCtor): boolean {
        if (!this._moduleMap.has(moduleClass)) {
            return false;
        }
        let module: IModule = this._moduleMap.get(moduleClass);
        module.onRemove();
        this._moduleMap.delete(moduleClass);
        return true;
    }

    /**
     * 获取模块实例
     * @param moduleClass
     */
    public get(moduleClass: IBaseModuleCtor): BaseModule {
        return this._moduleMap.get(moduleClass);
    }

    //----------------private------------------

    /**
     * 更新
     * @private
     */
    private _update() {
        this._moduleMap.forEach((module, _) => {
            module && module.getUpdatable() && module.onUpdate();
        });
    }
}