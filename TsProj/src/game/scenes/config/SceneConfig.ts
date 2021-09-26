import {UIWindowNames} from "../../../framework/ui/config/UIWindowNames";
import {BaseScene} from "../../../framework/scene/base/BaseScene";
import {HomeScene} from "../home/HomeScene";

/**
 * 场景配置
 */
export class SceneConfig {
    Level: number;
    Name: string;
    Class: IBaseSceneCtor;
    Loading: UIWindowNames;
}

/**
 * 构造函数配置接口
 */
interface IBaseSceneCtor {
    new(sceneConfig: SceneConfig): BaseScene;
}

/**
 * 启动场景
 */
let launch: SceneConfig = {
    Level: 0,
    Name: "LaunchScene",
    Class: null,
    Loading: UIWindowNames.UILoading,
};

/**
 * 加载场景
 */
let loading: SceneConfig = {
    Level: 1,
    Name: "LoadingScene",
    Class: null,
    Loading: UIWindowNames.UILoading,
};

/**
 * 加载场景
 */
 let login: SceneConfig = {
    Level: 1,
    Name: "LoginScene",
    Class: null,
    Loading: UIWindowNames.UILoading,
};

/**
 * 主界场景
 */
let home: SceneConfig = {
    Level: 2,
    Name: "HomeScene",
    Class: HomeScene,
    Loading: UIWindowNames.UILoading,
};

/**
 * 战斗场景
 */
let battle: SceneConfig = {
    Level: 3,
    Name: "BattleScene",
    Class: null,
    Loading: UIWindowNames.UILoading,
};

let SceneConfigs = {
    //加载场景 通用
    LoadingScene: loading,
    LaunchScene: launch,
    HomeScene: home,
    BattleScene: battle,
};

export {
    SceneConfigs
}