import {UIBaseComponent} from "./UIBaseComponent";
import {UnityEngine} from "csharp";
import {EUnityLayers, EUnitySortingLayers} from "../../unity/UnityTagsAndLayers";
import {UIUtil} from "../util/UIUtil";
import {$typeof} from "puerts";
import UIManager from "../UIManager";
import {IUIComponent} from "../../interface/IUIComponent";
import {UILayerInfo} from "../config/UILayers";

/**
 * ts侧layer层级管理器
 */
export class UILayer extends UIBaseComponent implements IUIComponent {
    //canvas组件
    private _canvas: UnityEngine.Canvas;
    //canvas缩放
    private _canvasScaler: UnityEngine.UI.CanvasScaler;
    //图形射线检测
    private _graphicRaycater: UnityEngine.UI.GraphicRaycaster;
    private _topWindowOrder: number;
    private _minWindowOrder: number;

    onCreate(...args: any[]): void {
        super.onCreate();
        this._gameObject.layer = EUnityLayers.UI;
        this._canvas = this._gameObject.AddComponent($typeof(UnityEngine.Canvas)) as UnityEngine.Canvas;
        this._transform = this._canvas.transform;
        this._gameObject = this._canvas.gameObject;
        let layer: UILayerInfo = args[0];
        let canvas = this._canvas;
        canvas.renderMode = UnityEngine.RenderMode.ScreenSpaceCamera;
        canvas.worldCamera = UIManager.Instance.uiCamera;
        canvas.planeDistance = layer.planeDistance;
        canvas.sortingLayerName = EUnitySortingLayers.UI;
        canvas.sortingOrder = layer.orderInLayer;
        canvas.pixelPerfect = true;
        //scaler
        this._canvasScaler = UIUtil.findComponent(this._transform, $typeof(UnityEngine.UI.CanvasScaler));
        if (this._canvasScaler == null) {
            this._canvasScaler = this._gameObject.AddComponent($typeof(UnityEngine.UI.CanvasScaler)) as UnityEngine.UI.CanvasScaler;
        }
        let canvasScaler = this._canvasScaler;
        canvasScaler.uiScaleMode = UnityEngine.UI.CanvasScaler.ScaleMode.ScaleWithScreenSize;
        canvasScaler.referenceResolution = UIManager.Resolution;
        canvasScaler.screenMatchMode = UnityEngine.UI.CanvasScaler.ScreenMatchMode.MatchWidthOrHeight;

        //raycater
        this._graphicRaycater = UIUtil.findComponent(this._transform, $typeof(UnityEngine.UI.GraphicRaycaster));
        if (this._graphicRaycater == null) {
            this._graphicRaycater = this._gameObject.AddComponent($typeof(UnityEngine.UI.GraphicRaycaster)) as UnityEngine.UI.GraphicRaycaster;
        }

        this._topWindowOrder = layer.orderInLayer;
        this._minWindowOrder = layer.orderInLayer;
    }

    onDestroy(): void {
        this._canvas = null;
        this._canvasScaler = null;
        this._graphicRaycater = null;
        super.onDestroy();
    }

    public pushWindowOrder() {
        this._topWindowOrder -= UIManager.MaxOrderPerWindow;
    }

    public popWindowOrder(): number {
        let c = this._topWindowOrder;
        this._topWindowOrder += UIManager.MaxOrderPerWindow;
        return c;
    }
}