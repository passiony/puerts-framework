import {UIConfigInfo} from "../../../framework/ui/config/UIConfigs";
import {UIWindowNames} from "../../../framework/ui/config/UIWindowNames";
import {EUILayer} from "../../../framework/ui/config/UILayers";
import {UILoadingModel} from "./uiLoading/UILoadingModel";
import {UILoadingCtrl} from "./uiLoading/UILoadingCtrl";
import {UILoadingView} from "./uiLoading/UILoadingView";
import {EUIType} from "../../../framework/ui/config/EUIType";

/**
 * loading场景ui配置
 * @author by passion
 * @create time 2021/6/9 14:07
 **/

/**
 * 通用加载界面
 */
let UILoading: UIConfigInfo = {
    name: UIWindowNames.UILoading,
    layer: EUILayer.TopLayer,
    model: UILoadingModel,
    ctrl: UILoadingCtrl,
    view: UILoadingView,
    prefabPath: "ui/prefabs/view/loading/ui_loading.prefab",
    components: [],
    type: EUIType.View
};

/**
 * 配置导出
 */
let UILoadingConfig = {
    UILoading: UILoading
};

export {UILoadingConfig}