/*
* 
* 时钟管理器 使用Utf.timer访问
* */
import UnityTs from "../../UnityTs";
import CallLater from './CallLater';

class InnerTimer {
    /*timer入口*/
    static gSysTimer: InnerTimer = null;

    /*对象池*/
    private static _pool: any[] = [];
    private static _mid: number = 1;

    scale: number = 1;
    currTimer: number = Date.now();
    currFrame: number = 0;
    /*两帧之间的时间间隔，单位：毫秒*/
    _delta: number = 0;
    _lastTimer: number = Date.now();

    private _map: any[] = [];
    private _handlers: any[] = [];
    private _temp: any[] = [];
    private _count: number = 0;

    constructor(autoActive: boolean = true) {
        autoActive && InnerTimer.gSysTimer && InnerTimer.gSysTimer.frameLoop(1, this, this._update);
    }

    /* 获取两帧之间的时间间隔，单位毫秒*/
    get delta(): number {
        return this._delta;
    }

    /* 帧循环*/
    _update(): void {
        if (this.scale <= 0) {
            this._lastTimer = Date.now();
            this._delta = 0;
            return;
        }
        let frame: number = this.currFrame = this.currFrame + this.scale;
        let now: number = Date.now();
        let awake: boolean = (now - this._lastTimer) > 30000;
        this._delta = (now - this._lastTimer) * this.scale;
        let timer: number = this.currTimer = this.currTimer + this._delta;
        this._lastTimer = now;

        let handlers: any[] = this._handlers;
        this._count = 0;
        for (let i: number = 0, n: number = handlers.length; i < n; i++) {
            let handler: TimerHandler = handlers[i];
            if (handler.method !== null) {
                let t: number = handler.useFrame ? frame : timer;
                if (t >= handler.exeTime) {
                    if (handler.repeat) {
                        if (!handler.jumpFrame || awake) {
                            handler.exeTime += handler.delay;
                            handler.run(false);
                            if (t > handler.exeTime) {
                                handler.exeTime += Math.ceil((t - handler.exeTime) / handler.delay) * handler.delay;
                            }
                        } else {
                            // 一帧可多次执行的情况。
                            while (t >= handler.exeTime) {
                                handler.exeTime += handler.delay;
                                handler.run(false)
                            }
                        }
                    } else {
                        handler.run(true);
                    }
                }
            } else {
                this._count++;
            }
        }

        if (this._count > 30 || frame % 200 === 0) this._clearHandlers();
    }

    /*整理handlers数组*/
    _clearHandlers(): void {
        let handlers: any[] = this._handlers;
        for (let i: number = 0, n: number = handlers.length; i < n; i++) {
            let handler: TimerHandler = handlers[i];
            if (handler.method !== null) this._temp.push(handler);
            else this._recoverHandler(handler);
        }
        this._handlers = this._temp;
        handlers.length = 0;
        this._temp = handlers;
    }

    /*回收handler*/
    _recoverHandler(handler: TimerHandler): void {
        if (this._map[handler.key] == handler) this._map[handler.key] = null;
        handler.clear();
        InnerTimer._pool.push(handler);
    }

    /* 创建TimerHandler实例*/
    _create(useFrame: boolean, repeat: boolean, delay: number, caller: any, method: Function, args: any[], coverBefore: boolean): TimerHandler {
        if (!delay) {
            method.apply(caller, args);
            return null;
        }
        let handler: TimerHandler;
        if (coverBefore) {
            handler = this._getHandler(caller, method);
            if (handler) {
                handler.repeat = repeat;
                handler.useFrame = useFrame;
                handler.delay = delay;
                handler.caller = caller;
                handler.method = method;
                handler.args = args;
                handler.exeTime = delay + (useFrame ? this.currFrame : this.currTimer + Date.now() - this._lastTimer);
                return handler;
            }
        }
        handler = InnerTimer._pool.length > 0 ? InnerTimer._pool.pop() : new TimerHandler();
        handler.repeat = repeat;
        handler.useFrame = useFrame;
        handler.delay = delay;
        handler.caller = caller;
        handler.method = method;
        handler.args = args;
        handler.exeTime = delay + (useFrame ? this.currFrame : this.currTimer + Date.now() - this._lastTimer);

        this._indexHandler(handler);
        this._handlers.push(handler);
        return handler;
    }

    /*获取handler*/
    _getHandler(caller: any, method: any): TimerHandler {
        let cid: number = caller ? caller.$_GID || (caller.$_GID = UnityTs.utils.getGID()) : 0;
        let mid: number = method.$_TID || (method.$_TID = (InnerTimer._mid++) * 100000);
        return this._map[cid + mid];
    }

    /*
    * 索引handler
    * */
    _indexHandler(handler: TimerHandler) {
        let caller: any = handler.caller;
        let method: any = handler.method;
        let cid: number = caller ? caller.$_GID || (caller.$_GID = UnityTs.utils.getGID()) : 0;
        let mid: number = method.$_TID || (method.$_TID = (InnerTimer._mid++) * 100000);
        handler.key = cid + mid;
        this._map[handler.key] = handler;
    }

    /**
     * 等待毫秒
     * @param delay
     */
    async wait(delay: number) {
        return new Promise<void>(resolve => {
            this.once(delay, this, () => {
                resolve();
            }, null, true);
        });
    }

    /**
     * 等待帧
     * @param delay
     */
    async waitFrame(delay: number) {
        return new Promise<void>(resolve => {
            this.frameOnce(delay, this, () => {
                resolve();
            }, null, true);
        });
    }

    /**
     * 定时执行一次。
     * @param    delay    延迟时间(单位为毫秒)。
     * @param    caller    执行域(this)。
     * @param    method    定时器回调函数。
     * @param    args    回调参数。
     * @param    coverBefore    是否覆盖之前的延迟执行，默认为 true 。
     */
    once(delay: number, caller: any, method: Function, args: any[] = null, coverBefore: boolean = true): void {
        this._create(false, false, delay, caller, method, args, coverBefore);
    }

    /**
     * 定时重复执行。
     * @param    delay    间隔时间(单位毫秒)。
     * @param    caller    执行域(this)。
     * @param    method    定时器回调函数。
     * @param    args    回调参数。
     * @param    coverBefore    是否覆盖之前的延迟执行，默认为 true 。
     * @param    jumpFrame 时钟是否跳帧。基于时间的循环回调，单位时间间隔内，如能执行多次回调，出于性能考虑，引擎默认只执行一次，设置jumpFrame=true后，则回调会连续执行多次
     */
    loop(delay: number, caller: any, method: Function, args: any[] = null, coverBefore: boolean = true, jumpFrame: boolean = false): void {
        const handler: TimerHandler = this._create(false, true, delay, caller, method, args, coverBefore);
        if (handler) handler.jumpFrame = jumpFrame;
    }

    /**
     * 定时执行一次(基于帧率)。
     * @param    delay    延迟几帧(单位为帧)。
     * @param    caller    执行域(this)。
     * @param    method    定时器回调函数。
     * @param    args    回调参数。
     * @param    coverBefore    是否覆盖之前的延迟执行，默认为 true 。
     */
    frameOnce(delay: number, caller: any, method: Function, args: any[] = null, coverBefore: boolean = true): void {
        this._create(true, false, delay, caller, method, args, coverBefore);
    }

    /**
     * 定时重复执行(基于帧率)。
     * @param    delay    间隔几帧(单位为帧)。
     * @param    caller    执行域(this)。
     * @param    method    定时器回调函数。
     * @param    args    回调参数。
     * @param    coverBefore    是否覆盖之前的延迟执行，默认为 true 。
     */
    frameLoop(delay: number, caller: any, method: Function, args: any[] = null, coverBefore: boolean = true): void {
        this._create(true, true, delay, caller, method, args, coverBefore);
    }

    /** 返回统计信息。*/
    toString(): string {
        return " handlers:" + this._handlers.length + " pool:" + InnerTimer._pool.length;
    }

    /**
     * 清理定时器。
     * @param    caller 执行域(this)。
     * @param    method 定时器回调函数。
     */
    clear(caller: any, method: Function): void {
        let handler: TimerHandler = this._getHandler(caller, method);
        if (handler) {
            this._map[handler.key] = null;
            handler.key = 0;
            handler.clear();
        }
    }

    /**
     * 清理对象身上的所有定时器。
     * @param    caller 执行域(this)。
     */
    clearAll(caller: any): void {
        if (!caller) return;
        let i: number = 0;
        const n: number = this._handlers.length;
        for (; i < n; i++) {
            const handler: TimerHandler = this._handlers[i];
            if (handler.caller === caller) {
                this._map[handler.key] = null;
                handler.key = 0;
                handler.clear();
            }
        }
    }

    /**
     * 立即提前执行定时器，执行之后从队列中删除
     * @param    caller 执行域(this)。
     * @param    method 定时器回调函数。
     */
    runTimer(caller: any, method: Function): void {
        const handler: TimerHandler = this._getHandler(caller, method);
        if (handler && handler.method != null) {
            this._map[handler.key] = null;
            handler.run(true);
        }
    }

    /**
     * 暂停时钟
     */
    pause(): void {
        this.scale = 0;
    }

    /**
     * 恢复时钟
     */
    resume(): void {
        this.scale = 1;
    }

    //-----------延迟执行

    /**
     * 延迟执行。
     * @param    caller 执行域(this)。
     * @param    method 定时器回调函数。
     * @param    args 回调参数。
     */
    callLater(caller: any, method: Function, args?: any[]): void {
        CallLater.I.callLater(caller, method, args);
    }

    /**
     * 立即执行 callLater 。
     * @param    caller 执行域(this)。
     * @param    method 定时器回调函数。
     */
    runCallLater(caller: any, method: Function): void {
        CallLater.I.runCallLater(caller, method);
    }
}

/* 私有timer函数类*/
class TimerHandler {
    key: number;
    repeat: boolean;
    delay: number;
    useFrame: boolean;
    exeTime: number;
    caller: any;
    method: Function;
    args: any[];
    jumpFrame: boolean;

    clear(): void {
        this.caller = null;
        this.method = null;
        this.args = null;
    }

    run(withClear: boolean): void {
        let caller: any = this.caller;
        if (caller && caller.destroyed) return this.clear();
        let method: Function = this.method;
        let args: any[] = this.args;
        withClear && this.clear();
        if (method == null) return;
        args ? method.apply(caller, args) : method.call(caller);
    }
}

/*
* 
* timer管理器 如果需要新增timer，在这里新建实例，一般一个就够用了。
* */
export class Timer {
    /**
     * 帧更新前的timer
     */
    static _timer: InnerTimer;
    /**
     * 帧更新后的timer
     */
    static _lateTimer: InnerTimer;
    private static _inited: boolean = false;

    //私有构造函数
    private constructor() {
    }

    /**
     * 普通timer
     */
    public static get timer() {
        return this._timer;
    }

    /**
     * 后置timer
     */
    public static get lateTimer() {
        return this._lateTimer;
    }

    public static init() {
        if (this._inited) {
            return;
        }
        this._inited = true;
        this._timer = new InnerTimer();
        this._lateTimer = new InnerTimer();
        // @ts-ignore
        global.__tgjsRegisterTickHandler(uts_timerUpdate);
        // @ts-ignore
        delete global.__tgjsRegisterTickHandler;
    }
}

/**
 * cs侧来更新ts的timer
 */
function uts_timerUpdate() {
    Timer._timer._update();
    Timer._lateTimer._update();
}