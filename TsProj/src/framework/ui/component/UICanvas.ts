import {UIBaseComponent} from "./UIBaseComponent";
import {UnityEngine} from "csharp";
import {UIUtil} from "../util/UIUtil";
import {$typeof} from "puerts";
import {EUnitySortingLayers} from "../../unity/UnityTagsAndLayers";
import UIManager from "../UIManager";
import {UIBaseView} from "../base/UIBaseView";

/**
 * ts侧canvas组件
 * -- 1、为了调整UI层级，所以这里的overrideSorting设置为true
 -- 2、如果只是类似NGUI的Panel那样划分drawcall管理，直接在预设上添加Canvas，并设置overrideSorting为false
 -- 3、这里的order是相对于window.view中base_order的差量，窗口内的order最多为10个---UIManager中配置
 -- 4、旧窗口内所有canvas的real_order都应该在新窗口之下，即保证旧窗口内包括UI特效在内的所有组件，不会跑到新窗口之上
 -- 5、UI逻辑代码禁止手动直接设置Unity侧Cavans组件的orderInLayer，全部使用本脚本接口调整层级，避免层级混乱
 */
export class UICanvas extends UIBaseComponent {
    private _view: UIBaseView;
    private _canvas: UnityEngine.Canvas;
    private _graphicRaycaster: UnityEngine.UI.GraphicRaycaster;
    private _relativeOrder: number;

    onCreate(...args: any[]): void {
        super.onCreate();
        let relative_order = args[0] as number;
        let view = args[1] as UIBaseView; 
        if (relative_order == null || view == null) {
            console.error("UICanvas::arguments error,require relative order and view arg");
            return;
        }
        let canvas: UnityEngine.Canvas;
        canvas = UIUtil.findComponent(this._transform, $typeof(UnityEngine.Canvas));
        if (canvas == null) {
            canvas = this._gameObject.AddComponent($typeof(UnityEngine.Canvas)) as UnityEngine.Canvas;
        }
        canvas.overrideSorting = true;
        canvas.sortingLayerName = EUnitySortingLayers.UI;
        this._canvas = canvas;

        this._graphicRaycaster = UIUtil.findComponent(this._transform, $typeof(UnityEngine.UI.GraphicRaycaster));
        if (this._graphicRaycaster == null) {
            this._graphicRaycaster = this._gameObject.AddComponent($typeof(UnityEngine.UI.GraphicRaycaster)) as UnityEngine.UI.GraphicRaycaster;
        }

        this._relativeOrder = relative_order;
        this._view = view;
    }

    onDestroy(): void {
        this._canvas = null;
        this._graphicRaycaster = null;
        super.onDestroy();
    }

    onEnable(): void {
        super.onEnable();
        this.setOrder(this._relativeOrder);
    }

    public setOrder(relativeOrder: number) {
        if (relativeOrder > UIManager.MaxOrderPerWindow) {
            console.error("relative order is larger than ui manager define max order in per window!!!");
        }
        this._relativeOrder = relativeOrder;
        this._canvas.sortingOrder = (this._view as UIBaseView).baseOrder + relativeOrder;
    }

    /**
     * 获取canvas对象
     */
    public get canvas(): UnityEngine.Canvas {
        return this._canvas;
    }

    /**
     * 获取层级
     */
    public get order(): number {
        return this._relativeOrder;
    }
}