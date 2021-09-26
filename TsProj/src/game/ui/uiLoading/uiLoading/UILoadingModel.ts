import UIBaseModel from "../../../../framework/ui/base/UIBaseModel";
import {IUILoadingModel} from "../IUILoading";

/**
 * 通用loading数据
 */
export class UILoadingModel extends UIBaseModel implements IUILoadingModel{
    /**
     * 进度值
     */
    _value:number = 0;
    
    onEnable(...args): void {
        super.onEnable(...args);
        this._value = 0;
    }
    
    onDisable(): void {
        super.onDisable();
        this._value = 0;
    }
    
    public getValue(): number {
        return this._value;
    }
    
    public setValue(val: number): void {
        if(val > 1 || val < 0){
            return;
        }
        this._value = val;
    }
}