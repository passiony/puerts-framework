/**
* @author by passion
* @create time 2021/6/1
**/

//空字符串
const empty:string = "";
let string = {
    /**
     * 字符串是否是null或者空字符串
     * @param s
     * @constructor
     */
    IsNullOrEmpty: function (s: string) {
        return s == null || s == empty;
    },

    /**
     * 空字符串
     */
    get empty():string{
        return empty;
    }
};

export {string}