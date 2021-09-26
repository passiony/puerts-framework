import {UIBaseComponent} from "./UIBaseComponent";
import {UnityEngine} from "csharp";
import {IAtlasConfig} from "../../resource/config/AtlasConfig";
import {UIUtil} from "../util/UIUtil";
import {ResourceManager} from "../../resource/ResourceManager";
import Handler from "../../utils/Handler";

/**
 * image组件
 * @author by passion
 * @create time 2021/6/9 16:12
 **/
export class UIImage extends UIBaseComponent {
    //unity侧image组件
    private _unityImage: UnityEngine.UI.Image;
    //图集数据
    private _atlas: IAtlasConfig;
    //当前图片名
    private _spriteName: string;
    //image专用active
    private _innerActive: boolean;

    /**
     * 创建时
     * @param args
     * @param[0] 图集IAtlasConfig
     */
    onCreate(...args: any[]): void {
        super.onCreate();
        this._atlas = args[0];
        this._unityImage = UIUtil.findImage(this._transform);
        this._spriteName = this._unityImage.sprite.name;
        this._innerActive = true;
    }

    onDestroy(): void {
        this._atlas = null;
        this._unityImage = null;
        this._spriteName = null;
        super.onDestroy();
    }

    setActive(active: boolean) {
        super.setActive(active);
        this._innerActive = active;
    }

    /**
     * 设置填充
     * @param fillAmount
     */
    public setFillAmount(fillAmount: number) {
        this._unityImage.fillAmount = fillAmount;
    }

    /**
     * 缓动填充
     * @param fillAmount
     * @param duration
     */
    public doFillAmount(fillAmount: number, duration: number) {
        this._unityImage.DOFillAmount(fillAmount, duration);
    }

    /**
     * 设置图片
     * @param spriteName 图片名
     * @param hideAtLoad 加载中是否隐藏
     * @param atlas 图集配置
     */
    public setSprite(spriteName: string, hideAtLoad: boolean = true, atlas?: IAtlasConfig) {
        if (this._spriteName == spriteName) {
            return;
        }
        this._spriteName = spriteName;
        if (this._unityImage == null) {
            return;
        }
        if (this._innerActive && hideAtLoad) {
            this._unityImage.gameObject.SetActive(false);
        }
        let useAtlas = atlas || this._atlas;
        ResourceManager.Instance.loadImageAsync(spriteName, useAtlas, Handler.create(this, (n: string, sprite: UnityEngine.Sprite) => {
            if (this._unityImage == null || sprite == null) {
                return;
            }
            if (this._spriteName != n) {
                return;
            }
            this._unityImage.sprite = sprite;
            if (this._innerActive) this._unityImage.gameObject.SetActive(true);
        }, [spriteName]));
    }

    /**
     * 获取当前图片名
     */
    public get spriteName(): string {
        return this._spriteName;
    }

    //----------------------private--------------
}