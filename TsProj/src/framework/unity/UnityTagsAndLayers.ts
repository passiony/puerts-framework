/**
 * unity侧layer定义映射到ts侧
 */
export enum EUnityLayers {
    Default,
    /**
     * 透明特效
     */
    TransparentFX,
    /**
     * 忽略射线检测层
     */
    IgnoreRaycast,
    /**
     * 水
     */
    Water = 4,
    /**
     * ui层
     */
    UI,
}

/**
 * unity侧sortingLayers定义
 */
export enum EUnitySortingLayers {
    /**
     * 默认层
     */
    Default = "Default",
    /**
     * ui层
     */
    UI = "UI",
}