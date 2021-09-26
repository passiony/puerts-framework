//部署:npm run build

import {UnityEngine} from 'csharp'
import { SceneManager } from './framework/scene/SceneManager';
import { SceneConfigs } from './game/scenes/config/SceneConfig';
import UnityTs from './framework/UnityTs';
import { MainTest } from './UnitTest/MainTest';

/**
 * 游戏入口
 * @author by passion
 **/
 class GameMain {
    constructor() {
        console.log("JavaScript start running!!");
        //初始化框架
        UnityTs.init()
        this.StartGame().then(() => {
            console.log("game start!!");
        });
    }

    /**
     * 游戏启动
     * @constructor
     */
    async StartGame() {
        //启动游戏
        SceneManager.Instance.switchScene(SceneConfigs.HomeScene)
        MainTest.Run();
    }
}

new GameMain();