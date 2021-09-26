import {UIBaseView} from "../../../../framework/ui/base/UIBaseView";
import {UIText} from "../../../../framework/ui/component/UIText";
import {UIImage} from "../../../../framework/ui/component/UIImage";
import {Timer} from "../../../../framework/utils/timer/Timer";
import {UILoadingModel} from "./UILoadingModel";

/**
 * 通用loading界面
 */
export class UILoadingView extends UIBaseView {
    //加载文本
    private _txtLoading: UIText;
    //加载进度条
    private _imgProgress: UIImage;

    onCreate(): void {
        super.onCreate();
        this._txtLoading = this.addComponent(UIText, "content/m_desc") as UIText;
        this._imgProgress = this.addComponent(UIImage, "content/progress_cur");
    }

    onDestroy(): void {
        this._txtLoading = null;
        this._imgProgress = null;
        super.onDestroy();
    }

    onEnable(...arg): void {
        super.onEnable(...arg);
        this._updateProgress();
        Timer.timer.frameLoop(1, this, this._updateProgress);
    }
    
    onDisable(): void {
        Timer.timer.clearAll(this);
        super.onDisable();
    }

    _updateProgress() {
        let cur = (this.model as UILoadingModel)._value;
        this._imgProgress.setFillAmount(cur);
        this._txtLoading.text = `加载中 ${Math.round(cur * 100)}%`;
    }
}