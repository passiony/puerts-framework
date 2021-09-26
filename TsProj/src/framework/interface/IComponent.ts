import IDestroyable from "./IDestroyable";

export interface IComponent extends IDestroyable {
    /**
     * 创建
     */
    onCreate(...args: any[]): void;

    /**
     * 销毁
     */
    onDestroy(): void;

    /**
     * 启用
     */
    onEnable(): void;

    /**
     * 禁用
     */
    onDisable(): void;
}