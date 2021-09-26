import {UnityEngine} from "csharp";
import {Language, LanguageConfig} from "./config/LanguageConfig";
import {ModuleCenter} from "../../framework/module/ModuleCenter";
import {CommonModule} from "../module/common/CommonModule";
import {CommonModuleEvents} from "../module/common/event/CommonModuleEvents";

/**
 * 语言工具
 * @author by passion
 * @create time 2021/6/9 11:39
 **/
export class LanguageDataTool {
    //玩家语言设置key
    static UserLanguageSaveKey: string = "Game_Language";
    static UnknownLanguage: string = "Unknown";

    /**
     * 获取玩家语言设置
     */
    public static getUserLanguage(): Language {
        let name = UnityEngine.PlayerPrefs.GetString(this.UserLanguageSaveKey, this.UnknownLanguage);
        let language: Language = LanguageConfig[name];
        if (language == null) {
            let sysLanguage = UnityEngine.Application.systemLanguage;
            if (sysLanguage == UnityEngine.SystemLanguage.Chinese) {
                sysLanguage = UnityEngine.SystemLanguage.ChineseSimplified;
            }
            for (let x in LanguageConfig) {
                let config: Language = LanguageConfig[x];
                if (config.id == sysLanguage) {
                    language = config;
                    break;
                }
            }
            if (language == null) {
                language = LanguageConfig.English;
            }
            UnityEngine.PlayerPrefs.SetString(this.UserLanguageSaveKey, language.name);
        }
        return language;
    }

    /**
     * 设置用于语言，目前是基于单机本地的做法来做的，所以直接存储到Unity PlayerPrefs中
     * @param language
     */
    public static setUserLanguage(language: Language) {
        if (language == null) {
            return;
        }
        let curName = UnityEngine.PlayerPrefs.GetString(this.UserLanguageSaveKey, this.UnknownLanguage);
        if (curName == language.name) {
            return;
        }
        UnityEngine.PlayerPrefs.SetString(this.UserLanguageSaveKey, language.name);
        ModuleCenter.Instance.get(CommonModule).event(CommonModuleEvents.ON_USER_LANGUAGE_CHANGE);
    }
}