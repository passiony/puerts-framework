import {BaseModule} from "../../../framework/module/BaseModule";
import {ModuleCenter} from "../../../framework/module/ModuleCenter";
import {BaseData, IBaseDataCtor} from "./BaseData";
import {UserBaseData} from "./baseData/UserBaseData";

/**
 * 玩家数据模块
 * @author by passion
 * @create time 2021/6/9 13:58
 **/
export class UserDataModule extends BaseModule {

    /**
     * 数据map
     */
    private _dataMap: Map<IBaseDataCtor, BaseData>;

    /**
     * 获取实例
     * @constructor
     */
    public static get Instance(): UserDataModule {
        return ModuleCenter.Instance.get(UserDataModule) as UserDataModule;
    }

    /**
     * 添加数据
     * @param dataClass
     */
    public addData(dataClass: IBaseDataCtor) {
        if (this._dataMap.has(dataClass)) {
            console.log("can not add data repeat,data class is:" + dataClass.name);
            return;
        }
        let inst = new dataClass();
        inst.onCreate();
        this._dataMap.set(dataClass, inst);
    }

    /**
     * 获取数据
     * @param dataClass
     */
    public getData(dataClass: IBaseDataCtor): BaseData {
        if (!this._dataMap.has(dataClass)) {
            console.error("not exist data instance,please add before,class is:" + dataClass.name);
            return;
        }
        return this._dataMap.get(dataClass);
    }

    public onAdd(): void {
        super.onAdd();
        this._dataMap = new Map<IBaseDataCtor, BaseData>();
        this.addData(UserBaseData);
    }

    public onRemove(): void {
        super.onRemove();
    }

    public onAddListener(): void {
        super.onAddListener();
    }

    public onRemoveListener(): void {
        super.onRemoveListener();
    }
}