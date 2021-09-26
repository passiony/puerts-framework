import {ISingleton} from "../../framework/interface/ISingleton";
import {string} from "../../framework/utils/StringUtil";
import {UnityEngine} from "csharp";
import {Language} from "./config/LanguageConfig";
import {ResourceManager} from "../../framework/resource/ResourceManager";
import {$typeof} from "puerts";
import EventDispatcher from "../../framework/utils/EventDispatcher";
import {LanguageEvents} from "./LanguageEvents";
import {util} from "protobufjs";
import key2Re = util.key2Re;

/**
 * 多语言组件
 */
export class LanguageManager extends EventDispatcher implements ISingleton {
    public static Instance: LanguageManager = new LanguageManager();
    /**
     * 当前多语言map
     */
    private _contentMap: Map<string, string>;
    /**
     * 语言配置
     */
    private _languageConfig: Language;
    /**
     * 更新中
     */
    private _updating: boolean;

    initialize(): void {
        this._contentMap = new Map<string, string>();
        this._updating = false;
        this._languageConfig = null;
    }

    /**
     * 通过配置档字段获取字符串
     * @param key
     */
    public getStringByConfig(key: string): string {
        let newKey = `AllConfLanguage_mKeyValue_${key}`;
        return this.getStringByFullKey(newKey);
    }

    /**
     * 通过自定义id获取字符串
     * @param key
     */
    public getStringByShowID(key: string): string {
        let newKey: string = `ShowMessage_mMessage_${key}`;
        return this.getStringByFullKey(newKey);
    }

    /**
     * 通过全量key获取字符串
     * @param key
     */
    public getStringByFullKey(key: string): string {
        let value: string = this._contentMap.get(key);
        if (string.IsNullOrEmpty(value)) {
            console.error(`LanguageManager::获取字符串错误,key->${key}`);
            return string.empty;
        } else {
            return value;
        }
    }

    /**
     * 协程更新
     * @param config
     */
    public async updateAwait(config: Language) {
        this._updating = true;
        this._languageConfig = config;
        let path: string = `config/language/AllLanguage${config.fileSuffix}.csv`;
        let asset: UnityEngine.TextAsset = await ResourceManager.Instance.loadAssetAwait(path, $typeof(UnityEngine.TextAsset)) as UnityEngine.TextAsset;
        this._parseCSV(asset);
        this._updating = false;
        this.event(LanguageEvents.ON_LANGUAGE_UPDATE_COMPLETE);
    }

    /**
     * 解析字符串
     * @param asset
     * @private
     */
    private _parseCSV(asset: UnityEngine.TextAsset) {
        if (asset == null) {
            console.error("update language fail,text asset is null");
            return;
        }
        this._contentMap.clear();
        let array = asset.text.split("\n\r");
        let len = array.length;
        for (let i = 0; i < len; i++) {
            let kv = array[i].split("\t");
            if (kv.length != 2) {
                console.error(`language asset parse error,len not equal 2,kv:${array[i]}`);
                continue;
            }
            this._contentMap.set(kv[0], kv[1]);
        }
    }
}