import {UIWindowNames} from "./UIWindowNames";
import {EUILayer} from "./UILayers";
import {EUIType} from "./EUIType";
import {IUIBaseCtrlCtor} from "../base/UIBaseCtrl";
import {IUIBaseModelCtor} from "../base/UIBaseModel";
import {IUIBaseViewCtor} from "../base/UIBaseView";
import {UIHomeConfig} from "../../../game/ui/uiHome/UIHomeConfig";
import {UIBattleConfig} from "../../../game/ui/uiBattle/UIBattleConfig";
import {UILoadingConfig} from "../../../game/ui/uiLoading/UILoadingConfig";

/**
 * 所有模块
 */
let UIModule = {
    UIHome: UIHomeConfig,
    UIBattle: UIBattleConfig,
    UILoading: UILoadingConfig,
};

/**
 * ui配置结构体
 */
export class UIConfigInfo {
    /**
     * ui名
     */
    name: UIWindowNames;
    /**
     * 层级
     */
    layer: EUILayer;
    /**
     * 数据类
     */
    model: IUIBaseModelCtor;
    /**
     * 控制器类
     */
    ctrl: IUIBaseCtrlCtor;
    /**
     * 视图类
     */
    view: IUIBaseViewCtor;
    /**
     * prefab路径集合
     */
    prefabPath: string;
    /**
     * 预加载prefabs路径
     */
    components: Array<string>;
    /**
     * ui类型
     */
    type: EUIType;
}

let UIConfigs: Map<UIWindowNames, UIConfigInfo> = new Map<UIWindowNames, UIConfigInfo>();
for (let moduleName in UIModule) {
    let module = UIModule[moduleName];
    for (let cfgName in module) {
        let config: UIConfigInfo = module[cfgName];
        if (UIConfigs.has(config.name)) {
            console.error("Already exist ::" + cfgName);
        }
        UIConfigs.set(config.name, config);
    }
}

export {UIConfigs}