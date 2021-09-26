/**
 * 数据基类
 * @author by passion
 * @create time 2021/6/9 14:45
 **/

export class BaseData {
    public onCreate() {
        console.error(this.constructor.name + "::must override this function=>onCreate()");
    }
}

/**
 * 类型接口
 */
export interface IBaseDataCtor {
    new(): BaseData;
}