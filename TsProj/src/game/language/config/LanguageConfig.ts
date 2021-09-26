import {UnityEngine} from "csharp";

/**
 * 语言信息
 */
export class Language {
    id: UnityEngine.SystemLanguage;
    name: string;
    fileSuffix: string;
    showName: string;
}

/**
 * 简体中文
 */
let chineseSimplified: Language = {
    id: UnityEngine.SystemLanguage.ChineseSimplified,
    name: "ChineseSimplified",
    fileSuffix: "CN",
    showName: "简体中文",
};

/**
 * 繁体中文
 */
let chineseTraditional: Language = {
    id: UnityEngine.SystemLanguage.ChineseTraditional,
    name: "ChineseTraditional",
    fileSuffix: "CNTraditional",
    showName: "繁體中文",
};

/**
 * 英语
 */
let english: Language = {
    id: UnityEngine.SystemLanguage.English,
    name: "English",
    fileSuffix: "EN",
    showName: "English",
};

/**
 * 日语
 */
let japanese: Language = {
    id: UnityEngine.SystemLanguage.Japanese,
    name: "Japanese",
    fileSuffix: "Japan",
    showName: "日本語",
};

/**
 * 多语言配置
 */
let LanguageConfig = {
    Japanese: japanese,
    English: english,
    ChineseSimplified: chineseSimplified,
    ChineseTraditional: chineseTraditional
};

export {LanguageConfig}