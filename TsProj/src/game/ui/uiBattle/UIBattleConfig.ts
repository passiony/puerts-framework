import {UIConfigInfo} from "../../../framework/ui/config/UIConfigs";
import {UIWindowNames} from "../../../framework/ui/config/UIWindowNames";
import {EUILayer} from "../../../framework/ui/config/UILayers";
import {EUIType} from "../../../framework/ui/config/EUIType";
import {UIBattleModel} from "./uiBattle/UIBattleModel";
import {UIBattleCtrl} from "./uiBattle/UIBattleCtrl";
import {UIBattleView} from "./uiBattle/UIBattleView";

/**
 * battle场景ui配置
 * @author by passion 
 * @create time 2021/6/9 14:06
**/

let UIBattleMain: UIConfigInfo = {
    name: UIWindowNames.UIBattleMain,
    layer: EUILayer.NormalLayer,
    model: UIBattleModel,
    ctrl: UIBattleCtrl,
    view: UIBattleView,
    prefabPath: "",
    components: [],
    type: EUIType.View,
};

/**
 * 配置导出
 */
let UIBattleConfig = {
    UIBattleMain:UIBattleMain
};

export {
    UIBattleConfig
};