import {UIWindowNames} from "../../../framework/ui/config/UIWindowNames";
import {EUILayer} from "../../../framework/ui/config/UILayers";
import {EUIType} from "../../../framework/ui/config/EUIType";
import {UIConfigInfo} from "../../../framework/ui/config/UIConfigs";
import {UILoginCtrl} from "./uiLogin/UILoginCtrl";
import {UILoginView} from "./uiLogin/UILoginView";
import {UILoginModel} from "./uiLogin/UILoginModel";

/**
 * home场景界面配置
 * @author by passion 
 * @create time 2021/6/9 14:06
**/

/**
 * 这里定义所有Home场景中使用的UI配置，
 */

let UILogin: UIConfigInfo = {
    name: UIWindowNames.UILogin,
    layer: EUILayer.NormalLayer,
    model: UILoginModel,
    ctrl: UILoginCtrl,
    view: UILoginView,
    prefabPath: "",
    components: [],
    type: EUIType.View,
};

/**
 * 配置导出
 */
let UILoginConfig = {
    UILogin:UILogin
};

export {
    UILoginConfig
};