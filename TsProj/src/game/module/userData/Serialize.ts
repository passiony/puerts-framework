/**
 * 序列化数据
 * @author by passion
 * @create time 2021/6/9 14:52
 **/

export class Serialize {
    /**
     * 解析json数据
     * @param data
     */
    public decodeData(data: any) {
        console.error(this.constructor.name + "::must override this function=>decodeData()");
    }

    /**
     * 打包数据
     * @param data
     */
    public encodeData(data: any) {
        console.error(this.constructor.name + "::must override this function=>encodeData()");
    }
}