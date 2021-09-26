export interface IUILoadingModel {
    /**
     * 当前进度值
     */
    _value:number;

    /**
     * 设置当前进度值
     * @param val
     */
    setValue(val:number):void;

    /**
     * 获取当前进度值
     */
    getValue():number;
}