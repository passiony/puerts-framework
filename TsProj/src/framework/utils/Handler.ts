export default class Handler {
    /*资源池*/
    protected static _pool: Handler[] = [];
    private static _guid: number = 1;

    caller: object | null;
    method: Function | null;
    args: any[] | null;
    once: boolean = false;
    protected _id = 0;


    /**
     * 根据指定的属性值，创建一个 <code>Handler</code> 类的实例。
     * @param    caller 执行域。
     * @param    method 处理函数。
     * @param    args 函数参数。
     * @param    once 是否只执行一次。
     */
    constructor(caller: object | null = null, method: Function | null = null, args: any[] | null, once: boolean = false) {
        this.set(caller, method, args, once);
    }

    /*
    * @return 返回Handler实例
    * */
    private set(caller: any, method: Function | null, args: any[] | null, once = false): Handler {
        this._id = Handler._guid++;
        this.caller = caller;
        this.method = method;
        this.args = args;
        this.once = once;
        return this;
    }

    /*
    * 直接执行
    * */
    run(): any {
        if (this.method == null) return null;
        let id: number = this._id;
        let result: any = this.method.apply(this.caller, this.args);
        this._id === id && this.once && this.recover();
        return result;
    }

    /*
    * 带参数的执行 自定义参数在后
    * */
    runWith(data: any): any {
        if (this.method == null) return null;
        let id: number = this._id;
        let result: any;
        if (data == null) {
            result = this.method.apply(this.caller, this.args);
        } else if (!this.args && !data.unshift) {
            result = this.method.call(this.caller, data);
        } else if (this.args) {
            result = this.method.apply(this.caller, this.args.concat(data));
        } else {
            result = this.method.apply(this.caller, data)
        }
        this._id === id && this.once && this.recover();
        return result;
    }

    /*
    * 清理对象
    * */
    clear(): Handler {
        this.caller = null;
        this.method = null;
        this.args = null;
        return this;
    }

    /*
    * 回收对象
    * */
    recover(): void {
        if (this._id > 0) {
            this._id = 0;
            Handler._pool.push(this.clear());
        }
    }

    /**
     * 从对象池内创建一个Handler，默认会执行一次并立即回收，如果不需要自动回收，设置once参数为false。
     * @param    caller 执行域(this)。
     * @param    method 回调方法。
     * @param    args 携带的参数。
     * @param    once 是否只执行一次，如果为true，回调后执行recover()进行回收，默认为true。
     * @return  返回创建的handler实例。
     */
    static create(caller: any, method: Function | null, args: any[] | null = null, once: boolean = true): Handler {
        if (Handler._pool.length)
            return (Handler._pool.pop() as Handler).set(caller, method, args, once);
        return new Handler(caller, method, args, once);
    }
}