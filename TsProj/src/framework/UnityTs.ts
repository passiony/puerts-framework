/* 全局类入口*/

import {Timer} from "./utils/timer/Timer";
import {GameObjectPool} from './resource/GameObjectPool';
import UIManager from "./ui/UIManager";
import {SceneManager} from "./scene/SceneManager";
import {ModuleCenter} from "./module/ModuleCenter";
import {ResourceManager} from "./resource/ResourceManager";
import {LanguageManager} from "../game/language/LanguageManager";

class Utils {
    /*id*/
    static _gid: number = 1;
    static _pi: number = 180 / Math.PI;
    static _pi2: number = Math.PI / 180;
    static _extReg: RegExp = /\.(\w+)\??/g;

    /*
    * 角度转弧度
    * */
    public static toRadian(angle: number): number {
        return angle * Utils._pi2;
    }

    /* 
    * 弧度转角度
    * */
    public static toAngle(radian: number): number {
        return radian * Utils._pi;
    }

    /*
    * 获取唯一id
    * */
    public static getGID(): number {
        return Utils._gid++;
    }

    /**
     * @private
     * <p>连接数组。和array的concat相比，此方法不创建新对象</p>
     * <b>注意：</b>若 参数 a 不为空，则会改变参数 source 的值为连接后的数组。
     * @param    source 待连接的数组目标对象。
     * @param    array 待连接的数组对象。
     * @return 连接后的数组。
     */
    public static concatArray(source: any[], array: any[]): any[] {
        if (!array) return source;
        if (!source) return array;
        let i: number, len: number = array.length;
        for (i = 0; i < len; i++) {
            source.push(array[i]);
        }
        return source;
    }
}

/**
 * 全局初始化入口
 * @author by passion 
 * @create time 2021/6/9 11:38
**/
export default class UnityTs {
    /* 工具类*/
    static utils: typeof Utils = Utils;

    static init() {
        Timer.init();
        ResourceManager.Instance.initialize();
        GameObjectPool.Instance.initialize();
        UIManager.Instance.initialize();
        SceneManager.Instance.initialize();
        ModuleCenter.Instance.initialize();
        LanguageManager.Instance.initialize();
    }
}
