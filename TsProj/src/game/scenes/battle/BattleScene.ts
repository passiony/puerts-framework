import {BaseScene} from "../../../framework/scene/base/BaseScene";
import {ModuleCenter} from "../../../framework/module/ModuleCenter";
import {BattleModule} from "../../module/battle/BattleModule";

/**
 * 战斗场景
 * @author by passion 
 * @create time 2021/6/9 12:00
**/
export class BattleScene extends BaseScene{
    OnEnter() {
        super.OnEnter();
        ModuleCenter.Instance.add(BattleModule);
    }
    
    OnLeave() {
        super.OnLeave();
        ModuleCenter.Instance.remove(BattleModule);
    }
}