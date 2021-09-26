import {UIWindowNames} from "../../../framework/ui/config/UIWindowNames";
import {EUILayer} from "../../../framework/ui/config/UILayers";
import {EUIType} from "../../../framework/ui/config/EUIType";
import {UIConfigInfo} from "../../../framework/ui/config/UIConfigs";
import {UIHomeCtrl} from "./uiHome/UIHomeCtrl";
import {UIHomeView} from "./uiHome/UIHomeView";
import {UIHomeModel} from "./uiHome/UIHomeModel";

/**
 * home场景界面配置
 * @author by passion 
 * @create time 2021/6/9 14:06
**/

/**
 * 这里定义所有Home场景中使用的UI配置，
 */

let UIHome: UIConfigInfo = {
    name: UIWindowNames.UIHome,
    layer: EUILayer.NormalLayer,
    model: UIHomeModel,
    ctrl: UIHomeCtrl,
    view: UIHomeView,
    prefabPath: "",
    components: [],
    type: EUIType.View,
};

/**
 * 配置导出
 */
let UIHomeConfig = {
    UIHome:UIHome
};

export {
    UIHomeConfig
};