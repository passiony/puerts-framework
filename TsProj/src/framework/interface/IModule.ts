/**
 * 模块接口
 * @author by passion 
 * @create time 2021/6/9 11:38
**/
export interface IModule {
    /**
     * 添加时
     */
    onAdd():void;

    /**
     * 移除时
     */
    onRemove():void;

    /**
     * 注册事件
     */
    onAddListener():void;

    /**
     * 移除事件
     */
    onRemoveListener():void;

    /**
     * 更新
     */
    onUpdate():void;

    /**
     * 设置是否可更新
     * @param value
     */
    setUpdatable(value:boolean):void;

    /**
     * 获取是否可更新
     */
    getUpdatable():boolean;
}