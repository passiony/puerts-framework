import {UIBaseComponent} from "./UIBaseComponent";
import {UnityEngine} from "csharp";
import {UIUtil} from "../util/UIUtil";

/**
 * ui文本
 * @author by passion
 * @create time 2021/6/9 15:56
 **/
export class UIText extends UIBaseComponent {
    //unity侧文本引用
    private _unityText: UnityEngine.UI.Text;
    //当前内容
    private _content: string;

    onCreate(): void {
        super.onCreate();
        this._unityText = UIUtil.findText(this._transform);
        this._content = this._unityText.text;
    }

    onDestroy(): void {
        this._unityText = null;
        super.onDestroy();
    }

    /**
     * 获取文本内容
     */
    public get text(): string {
        return this._content;
    }

    /**
     * 设置文本
     * @param content
     */
    public set text(content: string) {
        if (this._content == content) {
            return;
        }
        if (this._unityText != null) this._unityText.text = content;
        this._content = content;
    }
}