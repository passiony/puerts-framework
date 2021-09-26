import {BaseScene} from "../../../framework/scene/base/BaseScene";
import {ModuleCenter} from "../../../framework/module/ModuleCenter";
import {HomeModule} from "../../module/home/HomeModule";

/**
 * 主界面场景
 * @author by passion
 * @create time 2021/6/9 12:00
 **/
export class HomeScene extends BaseScene {

    OnEnter() {
        super.OnEnter();
        ModuleCenter.Instance.add(HomeModule);
    }

    OnLeave() {
        ModuleCenter.Instance.remove(HomeModule);
        super.OnLeave();
    }
}