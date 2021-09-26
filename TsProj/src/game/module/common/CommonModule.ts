import {BaseModule} from "../../../framework/module/BaseModule";
import {ConfigManager} from "../../../framework/config/ConfigManager";
import {Residents} from "../../../interface/Residents";

/**
 * 通用逻辑模块
 * @author by passion 
 * @create time 2021/6/9 11:37
**/
export class CommonModule extends BaseModule {
    onAdd(): void {
        super.onAdd();
        ConfigManager.register<Residents>();
    }
    
    onRemove(): void {
        super.onRemove();
    }
    
    onUpdate(): void {
        
    }
    
    onAddListener(): void {
        super.onAddListener();
    }
    
    onRemoveListener(): void {
        super.onRemoveListener();
    }
}