/**
 * 配置管理器
 */
import {IConfig} from "../../interface/IConfig";

export class ConfigManager {
    private static _configMap: Map<IConfig, any>;

    public static read<T extends IConfig>(component_class: T) {
        let datas = this._configMap.get(component_class);
    }

    public static walk<T>() {
    }

    public static register<T>() {
    }

    public static unregister<T>() {
    }
}