import {UIWindowNames} from "./config/UIWindowNames";
import UIBaseModel from "./base/UIBaseModel";
import UIBaseCtrl from "./base/UIBaseCtrl";
import {EUIType} from "./config/EUIType";
import {EUILayer} from "./config/UILayers";
import {UIBaseView} from "./base/UIBaseView";
import {EUIAction} from "./config/EUIAction";

/**
 * @author by passion 
 * @create time 2021/6/1 10:26
 * 窗口包装器
**/
export class UIWindow {
    /**
     * ui名
     */
    name:UIWindowNames;
    /**
     * 层级
     */
    layer:EUILayer = EUILayer.BackgroundLayer;
    /**
     * 数据
     */
    model:UIBaseModel;
    /**
     * 控制器
     */
    ctrl:UIBaseCtrl;
    /**
     * 界面
     */
    view:UIBaseView;
    /**
     * 预设路径
     */
    prefabPath:string = "";
    /**
     * 预加载组件prefab
     */
    components:Array<string> = [];
    /**
     * ui类型
     */
    type:EUIType;
    /**
     * ui当前进行中的行为，行为完成置为none
     */
    action:EUIAction = EUIAction.None;
    /**
     * 是否加载完成
     */
    isLoaded:boolean = false;
    /**
     * 是否打开
     */
    isOpened:boolean = false;
}