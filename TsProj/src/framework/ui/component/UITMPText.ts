import {UIBaseComponent} from "./UIBaseComponent";
import {TMPro} from "csharp";
import {UIUtil} from "../util/UIUtil";

/**
 * ts侧Unity TMP_Text实现
 * @author by passion
 * @create time 2021/6/9 16:04
 **/
export class UITMPText extends UIBaseComponent {
    //unity侧tmp引用
    private _unityText: TMPro.TMP_Text;
    //当前内容
    private _content: string;

    onCreate(): void {
        super.onCreate();
        this._unityText = UIUtil.findTmpText(this._transform);
        this._content = this._unityText.text;
    }

    onDestroy(): void {
        this._unityText = null;
        this._content = null;
        super.onDestroy();
    }

    /**
     * 获取当前内容
     */
    public get text(): string {
        return this._content;
    }

    /**
     * 设置当前文本
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