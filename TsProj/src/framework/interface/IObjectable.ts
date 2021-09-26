import IDestroyable from "./IDestroyable";

/* 资源池对象 */
export default interface IObjectable extends IDestroyable{
    /**
     * 清理
     */
    clear():void;
}
