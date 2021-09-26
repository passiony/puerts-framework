/**
 * UI层级信息数据
 */
import Handler from "../../utils/Handler";

export class UILayerInfo {
    private constructor() {
    }

    /**
     * 类型
     */
    type: EUILayer;
    /**
     * 名字 对应到Unity场景中的对象名
     */
    name: string;
    planeDistance: number;
    orderInLayer: number;
}

export enum EUILayer {
    //场景UI
    SceneLayer,
    //背景UI
    BackgroundLayer,
    //普通ui，多级窗口等
    NormalLayer,
    //信息ui
    InfoLayer,
    //弹窗提示
    TipLayer,
    //顶层ui，场景加载
    TopLayer,
}

/**
 * 层级数据
 */
export class UILayers {
    private constructor() {
    }

    static _layers: Map<EUILayer, UILayerInfo> = new Map<EUILayer, UILayerInfo>();

    public static set() {
        this._layers.set(EUILayer.SceneLayer, {
            type: EUILayer.SceneLayer,
            name: "SceneLayer",
            planeDistance: 1000,
            orderInLayer: 0
        });
        this._layers.set(EUILayer.BackgroundLayer, {
            type: EUILayer.BackgroundLayer,
            name: "BackgroundLayer",
            planeDistance: 900,
            orderInLayer: 1000
        });
        this._layers.set(EUILayer.NormalLayer, {
            type: EUILayer.NormalLayer,
            name: "NormalLayer",
            planeDistance: 800,
            orderInLayer: 2000
        });
        this._layers.set(EUILayer.InfoLayer, {
            type: EUILayer.NormalLayer,
            name: "InfoLayer",
            planeDistance: 700,
            orderInLayer: 3000
        });
        this._layers.set(EUILayer.TipLayer, {
            type: EUILayer.TipLayer,
            name: "TipLayer",
            planeDistance: 600,
            orderInLayer: 4000
        });
        this._layers.set(EUILayer.TopLayer, {
            type: EUILayer.TopLayer,
            name: "TopLayer",
            planeDistance: 500,
            orderInLayer: 5000
        });
    }

    /**
     * 获取层级数据
     * @param layer_type 层级定义
     */
    public static get(layer_type: EUILayer): UILayerInfo {
        return UILayers._layers.get(layer_type);
    }

    /**
     * 遍历
     * @param callback
     */
    public static walk(callback: Handler) {
        this._layers.forEach((v: UILayerInfo) => {
            callback.runWith(v);
        });
    }
}