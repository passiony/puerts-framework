import {System, TMPro, UnityEngine} from "csharp";
import {$typeof} from "puerts";

/**
 * ui查询工具
 */
export class UIUtil {

    /**
     * 获取子节点
     * @param trans
     * @param index
     */
    public static getChild(trans: UnityEngine.Transform, index: number) {
        return trans.GetChild(index);
    }

    /**
     * 查组件
     * @param trans
     * @param ctype
     * @param path
     */
    public static findComponent(trans: UnityEngine.Transform, ctype: System.Type, path?: string): any {
        let targetTrans = trans;
        if (path != null) {
            targetTrans = trans.Find(path);
        }
        if (targetTrans == null) {
            return null;
        }
        let cmp = targetTrans.GetComponent(ctype);
        if (cmp != null) {
            return cmp;
        }
        return targetTrans.GetComponentInChildren(ctype);
    }

    /**
     * 获取transform
     * @param trans
     * @param path
     */
    public static findTrans(trans: UnityEngine.Transform, path: string): UnityEngine.Transform {
        return trans.Find(path);
    }

    /**
     * 查询文本
     * @param trans
     * @param path
     */
    public static findText(trans: UnityEngine.Transform, path?: string): UnityEngine.UI.Text {
        return this.findComponent(trans, $typeof(UnityEngine.UI.Text), path);
    }

    /**
     * 查询tmp文本
     * @param trans
     * @param path
     */
    public static findTmpText(trans: UnityEngine.Transform, path?: string): TMPro.TMP_Text {
        return this.findComponent(trans, $typeof(TMPro.TMP_Text), path);
    }

    /**
     * 查询图片
     * @param trans
     * @param path
     */
    public static findImage(trans: UnityEngine.Transform, path?: string): UnityEngine.UI.Image {
        return this.findComponent(trans, $typeof(UnityEngine.UI.Image), path);
    }

    /**
     * 查需按钮
     * @param trans
     * @param path
     */
    public static findButton(trans: UnityEngine.Transform, path?: string): UnityEngine.UI.Button {
        return this.findComponent(trans, $typeof(UnityEngine.UI.Button), path);
    }

    /**
     * 查询input
     * @param trans
     * @param path
     */
    public static findInput(trans: UnityEngine.Transform, path?: string): UnityEngine.UI.InputField {
        return this.findComponent(trans, $typeof(UnityEngine.UI.InputField), path);
    }

    /**
     * 查询slider
     * @param trans
     * @param path
     */
    public static findSlider(trans: UnityEngine.Transform, path?: string): UnityEngine.UI.Slider {
        return this.findComponent(trans, $typeof(UnityEngine.UI.Slider), path);
    }

    /**
     * 查询scrollRect
     * @param trans
     * @param path
     */
    public static findScrollRect(trans: UnityEngine.Transform, path?: string): UnityEngine.UI.ScrollRect {
        return this.findComponent(trans, $typeof(UnityEngine.UI.ScrollRect), path);
    }

    /**
     * 获取toggle
     * @param trans
     * @param path
     */
    public static findToggle(trans: UnityEngine.Transform, path?: string): UnityEngine.UI.Toggle {
        return this.findComponent(trans, $typeof(UnityEngine.UI.Toggle), path);
    }

    /**
     * 查询canvasGroup
     * @param trans
     * @param path
     */
    public static findCanvasGroup(trans: UnityEngine.Transform, path?: string): UnityEngine.CanvasGroup {
        return this.findComponent(trans, $typeof(UnityEngine.CanvasGroup), path);
    }
}