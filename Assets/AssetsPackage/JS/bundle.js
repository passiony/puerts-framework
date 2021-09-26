/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/GameMain.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/GameMain.ts":
/*!*************************!*\
  !*** ./src/GameMain.ts ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _framework_scene_SceneManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./framework/scene/SceneManager */ "./src/framework/scene/SceneManager.ts");
/* harmony import */ var _game_scenes_config_SceneConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game/scenes/config/SceneConfig */ "./src/game/scenes/config/SceneConfig.ts");
/* harmony import */ var _framework_UnityTs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./framework/UnityTs */ "./src/framework/UnityTs.ts");
/* harmony import */ var _UnitTest_MainTest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UnitTest/MainTest */ "./src/UnitTest/MainTest.ts");
//部署:npm run build
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




/**
 * 游戏入口
 * @author by passion
 **/
class GameMain {
    constructor() {
        console.log("JavaScript start running!!");
        //初始化框架
        _framework_UnityTs__WEBPACK_IMPORTED_MODULE_2__["default"].init();
        this.StartGame().then(() => {
            console.log("game start!!");
        });
    }
    /**
     * 游戏启动
     * @constructor
     */
    StartGame() {
        return __awaiter(this, void 0, void 0, function* () {
            //启动游戏
            _framework_scene_SceneManager__WEBPACK_IMPORTED_MODULE_0__["SceneManager"].Instance.switchScene(_game_scenes_config_SceneConfig__WEBPACK_IMPORTED_MODULE_1__["SceneConfigs"].HomeScene);
            _UnitTest_MainTest__WEBPACK_IMPORTED_MODULE_3__["MainTest"].Run();
        });
    }
}
new GameMain();


/***/ }),

/***/ "./src/UnitTest/ExtensionDeclTest.ts":
/*!*******************************************!*\
  !*** ./src/UnitTest/ExtensionDeclTest.ts ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var puerts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! puerts */ "puerts");
/* harmony import */ var puerts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(puerts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var csharp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! csharp */ "csharp");
/* harmony import */ var csharp__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(csharp__WEBPACK_IMPORTED_MODULE_1__);


//要手动声明一下，否则通过obj.func引用扩展方法会失败
Object(puerts__WEBPACK_IMPORTED_MODULE_0__["$extension"])(csharp__WEBPACK_IMPORTED_MODULE_1__["PuertsTest"].BaseClass, csharp__WEBPACK_IMPORTED_MODULE_1__["PuertsTest"].BaseClassExtension);


/***/ }),

/***/ "./src/UnitTest/MainTest.ts":
/*!**********************************!*\
  !*** ./src/UnitTest/MainTest.ts ***!
  \**********************************/
/*! exports provided: MainTest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainTest", function() { return MainTest; });
/* harmony import */ var _TsQuickStart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TsQuickStart */ "./src/UnitTest/TsQuickStart.ts");

class MainTest {
    /**
     * 运行ts-cs用例，单纯的ts测试写到.test.ts里面
     * @constructor
     */
    static Run() {
        // AlgorithmTest.Run()
        // ContrastLuaTest.Run()
    }
}


/***/ }),

/***/ "./src/UnitTest/TsQuickStart.ts":
/*!**************************************!*\
  !*** ./src/UnitTest/TsQuickStart.ts ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var csharp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! csharp */ "csharp");
/* harmony import */ var csharp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(csharp__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var puerts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! puerts */ "puerts");
/* harmony import */ var puerts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(puerts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ExtensionDeclTest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ExtensionDeclTest */ "./src/UnitTest/ExtensionDeclTest.ts");
//部署:npm run build



//静态函数
csharp__WEBPACK_IMPORTED_MODULE_0__["UnityEngine"].Debug.Log('hello world');
//对象构造
let obj = new csharp__WEBPACK_IMPORTED_MODULE_0__["PuertsTest"].DerivedClass();
//实例成员访问
obj.BMFunc(); //父类方法
obj.DMFunc(csharp__WEBPACK_IMPORTED_MODULE_0__["PuertsTest"].MyEnum.E1); //子类方法
console.log(obj.BMF, obj.DMF);
obj.BMF = 10; //父类属性
obj.DMF = 30; //子类属性
console.log(obj.BMF, obj.DMF);
//静态成员
console.log(csharp__WEBPACK_IMPORTED_MODULE_0__["PuertsTest"].BaseClass.BSF, csharp__WEBPACK_IMPORTED_MODULE_0__["PuertsTest"].DerivedClass.DSF, csharp__WEBPACK_IMPORTED_MODULE_0__["PuertsTest"].DerivedClass.BSF);
//委托，事件
//如果你后续不需要-=，可以像这样直接传函数当delegate
obj.MyCallback = msg => console.log("do not need remove, msg=" + msg);
//通过new构建的delegate，后续可以拿这个引用去-=
let delegate = new csharp__WEBPACK_IMPORTED_MODULE_0__["PuertsTest"].MyCallback(msg => console.log('can be removed, msg=' + msg));
//由于ts不支持操作符重载，Delegate.Combine相当于C#里头的obj.myCallback += delegate;
obj.MyCallback = csharp__WEBPACK_IMPORTED_MODULE_0__["System"].Delegate.Combine(obj.MyCallback, delegate);
obj.Trigger();
//Delegate.Remove相当于C#里头的obj.myCallback -= delegate;
obj.MyCallback = csharp__WEBPACK_IMPORTED_MODULE_0__["System"].Delegate.Remove(obj.MyCallback, delegate);
obj.Trigger();
//事件
obj.add_MyEvent(delegate);
obj.Trigger();
obj.remove_MyEvent(delegate);
obj.Trigger();
//静态事件
csharp__WEBPACK_IMPORTED_MODULE_0__["PuertsTest"].DerivedClass.add_MyStaticEvent(delegate);
obj.Trigger();
csharp__WEBPACK_IMPORTED_MODULE_0__["PuertsTest"].DerivedClass.remove_MyStaticEvent(delegate);
obj.Trigger();
//可变参数
obj.ParamsFunc(1024, 'haha', 'hehe', 'heihei');
//in out 参数
let p1 = Object(puerts__WEBPACK_IMPORTED_MODULE_1__["$ref"])(1);
let p2 = Object(puerts__WEBPACK_IMPORTED_MODULE_1__["$ref"])(10);
let ret = obj.InOutArgFunc(100, p1, p2);
console.log('ret=' + ret + ', out=' + Object(puerts__WEBPACK_IMPORTED_MODULE_1__["$unref"])(p1) + ', ref=' + Object(puerts__WEBPACK_IMPORTED_MODULE_1__["$unref"])(p2));
//泛型
//先通过$generic实例化泛型参数
let List = Object(puerts__WEBPACK_IMPORTED_MODULE_1__["$generic"])(csharp__WEBPACK_IMPORTED_MODULE_0__["System"].Collections.Generic.List$1, csharp__WEBPACK_IMPORTED_MODULE_0__["System"].Int32); //$generic调用性能不会太好，同样泛型参数建议整个工程，至少一个文件内只做一次
let Dictionary = Object(puerts__WEBPACK_IMPORTED_MODULE_1__["$generic"])(csharp__WEBPACK_IMPORTED_MODULE_0__["System"].Collections.Generic.Dictionary$2, csharp__WEBPACK_IMPORTED_MODULE_0__["System"].String, List);
let lst = new List();
lst.Add(1);
lst.Add(0);
lst.Add(2);
lst.Add(4);
obj.PrintList(lst);
let dic = new Dictionary();
dic.Add("aaa", lst);
obj.PrintList(dic.get_Item("aaa"));
//arraybuffer
let ab = obj.GetAb(5);
let u8a0 = new Uint8Array(ab);
console.log(obj.SumOfAb(u8a0));
let u8a1 = new Uint8Array(2);
u8a1[0] = 123;
u8a1[1] = 101;
console.log(obj.SumOfAb(u8a1));
//引擎api
let go = new csharp__WEBPACK_IMPORTED_MODULE_0__["UnityEngine"].GameObject("testObject");
go.AddComponent(Object(puerts__WEBPACK_IMPORTED_MODULE_1__["$typeof"])(csharp__WEBPACK_IMPORTED_MODULE_0__["UnityEngine"].ParticleSystem));
go.transform.position = new csharp__WEBPACK_IMPORTED_MODULE_0__["UnityEngine"].Vector3(7, 8, 9);
//extension methods
obj.PlainExtension();
obj.Extension1();
obj.Extension2(go);
let obj1 = new csharp__WEBPACK_IMPORTED_MODULE_0__["PuertsTest"].BaseClass1();
obj.Extension2(obj1);
//typescript和c#的async，await联动，为了不在低版本的Unity下报错，先注释，c#7.3以上版本可以打开这些注释
/*async function asyncCall() {
    let task = obj.GetFileLength("Assets/Examples/05_Typescript/TsQuickStart.cs");
    let result = await $promise(task);
    console.log('file length is ' + result);
    let task2 = obj.GetFileLength("notexistedfile");//这个会抛文件找不到异常，被catch
    let result2 = await $promise(task2);
    console.log('file length is ,' + result2);
}
asyncCall().catch(e => console.error("catch:" + e));*/


/***/ }),

/***/ "./src/framework/UnityTs.ts":
/*!**********************************!*\
  !*** ./src/framework/UnityTs.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UnityTs; });
/* harmony import */ var _utils_timer_Timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/timer/Timer */ "./src/framework/utils/timer/Timer.ts");
/* harmony import */ var _resource_GameObjectPool__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resource/GameObjectPool */ "./src/framework/resource/GameObjectPool.ts");
/* harmony import */ var _ui_UIManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui/UIManager */ "./src/framework/ui/UIManager.ts");
/* harmony import */ var _scene_SceneManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scene/SceneManager */ "./src/framework/scene/SceneManager.ts");
/* harmony import */ var _module_ModuleCenter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./module/ModuleCenter */ "./src/framework/module/ModuleCenter.ts");
/* harmony import */ var _resource_ResourceManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./resource/ResourceManager */ "./src/framework/resource/ResourceManager.ts");
/* harmony import */ var _game_language_LanguageManager__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../game/language/LanguageManager */ "./src/game/language/LanguageManager.ts");
/* 全局类入口*/







class Utils {
    /*
    * 角度转弧度
    * */
    static toRadian(angle) {
        return angle * Utils._pi2;
    }
    /*
    * 弧度转角度
    * */
    static toAngle(radian) {
        return radian * Utils._pi;
    }
    /*
    * 获取唯一id
    * */
    static getGID() {
        return Utils._gid++;
    }
    /**
     * @private
     * <p>连接数组。和array的concat相比，此方法不创建新对象</p>
     * <b>注意：</b>若 参数 a 不为空，则会改变参数 source 的值为连接后的数组。
     * @param    source 待连接的数组目标对象。
     * @param    array 待连接的数组对象。
     * @return 连接后的数组。
     */
    static concatArray(source, array) {
        if (!array)
            return source;
        if (!source)
            return array;
        let i, len = array.length;
        for (i = 0; i < len; i++) {
            source.push(array[i]);
        }
        return source;
    }
}
/*id*/
Utils._gid = 1;
Utils._pi = 180 / Math.PI;
Utils._pi2 = Math.PI / 180;
Utils._extReg = /\.(\w+)\??/g;
/**
 * 全局初始化入口
 * @author by passion
 * @create time 2021/6/9 11:38
**/
class UnityTs {
    static init() {
        _utils_timer_Timer__WEBPACK_IMPORTED_MODULE_0__["Timer"].init();
        _resource_ResourceManager__WEBPACK_IMPORTED_MODULE_5__["ResourceManager"].Instance.initialize();
        _resource_GameObjectPool__WEBPACK_IMPORTED_MODULE_1__["GameObjectPool"].Instance.initialize();
        _ui_UIManager__WEBPACK_IMPORTED_MODULE_2__["default"].Instance.initialize();
        _scene_SceneManager__WEBPACK_IMPORTED_MODULE_3__["SceneManager"].Instance.initialize();
        _module_ModuleCenter__WEBPACK_IMPORTED_MODULE_4__["ModuleCenter"].Instance.initialize();
        _game_language_LanguageManager__WEBPACK_IMPORTED_MODULE_6__["LanguageManager"].Instance.initialize();
    }
}
/* 工具类*/
UnityTs.utils = Utils;


/***/ }),

/***/ "./src/framework/module/BaseModule.ts":
/*!********************************************!*\
  !*** ./src/framework/module/BaseModule.ts ***!
  \********************************************/
/*! exports provided: BaseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseModule", function() { return BaseModule; });
/* harmony import */ var _utils_EventDispatcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/EventDispatcher */ "./src/framework/utils/EventDispatcher.ts");

/**
 * 模块基类
 * @author by passion
 * @create time 2021/6/9 11:38
**/
class BaseModule extends _utils_EventDispatcher__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super(...arguments);
        /**
         * 是否可更新
         * 默认模块不可更新，如果存在模块需要被更新，设置可更新
         */
        this._updatable = false;
    }
    onAdd() {
        this.onAddListener();
    }
    onRemove() {
        this.onRemoveListener();
    }
    onAddListener() {
    }
    onRemoveListener() {
    }
    setUpdatable(value) {
    }
    /**
     * 获取是否可更新
     */
    getUpdatable() {
        return this._updatable;
    }
    onUpdate() {
        console.error("please override BaseModule::update function");
    }
}


/***/ }),

/***/ "./src/framework/module/ModuleCenter.ts":
/*!**********************************************!*\
  !*** ./src/framework/module/ModuleCenter.ts ***!
  \**********************************************/
/*! exports provided: ModuleCenter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleCenter", function() { return ModuleCenter; });
/* harmony import */ var _utils_timer_Timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/timer/Timer */ "./src/framework/utils/timer/Timer.ts");

/**
 * 模块中心
 * @author by passion
 * @create time 2021/6/9 11:39
**/
class ModuleCenter {
    /**
     * 初始化
     */
    initialize() {
        this._moduleMap = new Map();
        _utils_timer_Timer__WEBPACK_IMPORTED_MODULE_0__["Timer"].timer.frameLoop(1, this, this._update, null, true);
    }
    /**
     * 添加模块
     * @param moduleClass
     */
    add(moduleClass) {
        if (this._moduleMap.has(moduleClass)) {
            console.error("Cannot add modules repeatedly,module name:" + moduleClass.name);
            return;
        }
        let inst = new moduleClass();
        this._moduleMap.set(moduleClass, inst);
        inst.onAdd();
        return inst;
    }
    /**
     * 移除模块
     * @param moduleClass
     */
    remove(moduleClass) {
        if (!this._moduleMap.has(moduleClass)) {
            return false;
        }
        let module = this._moduleMap.get(moduleClass);
        module.onRemove();
        this._moduleMap.delete(moduleClass);
        return true;
    }
    /**
     * 获取模块实例
     * @param moduleClass
     */
    get(moduleClass) {
        return this._moduleMap.get(moduleClass);
    }
    //----------------private------------------
    /**
     * 更新
     * @private
     */
    _update() {
        this._moduleMap.forEach((module, _) => {
            module && module.getUpdatable() && module.onUpdate();
        });
    }
}
//实例
ModuleCenter.Instance = new ModuleCenter();


/***/ }),

/***/ "./src/framework/resource/GameObjectPool.ts":
/*!**************************************************!*\
  !*** ./src/framework/resource/GameObjectPool.ts ***!
  \**************************************************/
/*! exports provided: GameObjectPool */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameObjectPool", function() { return GameObjectPool; });
/* harmony import */ var csharp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! csharp */ "csharp");
/* harmony import */ var csharp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(csharp__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_StringUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/StringUtil */ "./src/framework/utils/StringUtil.ts");
/* harmony import */ var _ResourceManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ResourceManager */ "./src/framework/resource/ResourceManager.ts");
/* harmony import */ var puerts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! puerts */ "puerts");
/* harmony import */ var puerts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(puerts__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_Handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/Handler */ "./src/framework/utils/Handler.ts");





/*
* GameObject资源池
* */
class GameObjectPool {
    /**
     * 密封构造函数
     */
    constructor() {
        this._cacheTransRoot = null;
        this._goPool = new Map();
        this._instCache = new Map();
    }
    /**
     * 从缓存获取对象
     * @param path
     */
    tryGetFromCache(path) {
        if (!this.checkHasCached(path)) {
            return null;
        }
        let cachedInst = this._instCache.get(path);
        if (cachedInst != null && cachedInst.length > 0) {
            return cachedInst.pop();
        }
        let pooledGo = this._goPool.get(path);
        if (pooledGo != null) {
            return csharp__WEBPACK_IMPORTED_MODULE_0__["UnityEngine"].GameObject.Instantiate(pooledGo);
        }
        return null;
    }
    /**
     * 启用gameObject
     * @param gameObject
     */
    activeGO(gameObject) {
        gameObject && gameObject.SetActive(true);
    }
    /**
     *
     * @param path
     * @returns bool
     */
    checkHasCached(path) {
        let cachedInst = this._instCache.get(path);
        if (cachedInst && cachedInst.length > 0) {
            return true;
        }
        let pooledGo = this._goPool.get(path);
        return pooledGo != null;
    }
    /**
     * 缓存并实例化GameObject
     * @param path
     * @param go
     * @param inst_count
     */
    cacheAndInstGameObject(path, go, inst_count = 1) {
        this._goPool.set(path, go);
        if (inst_count > 0) {
            let cachedInst = this._instCache.get(path) || [];
            for (let i = 0; i < inst_count; i++) {
                let inst = csharp__WEBPACK_IMPORTED_MODULE_0__["UnityEngine"].GameObject.Instantiate(go);
                inst.transform.SetParent(this._cacheTransRoot);
                inst.SetActive(false);
                cachedInst.push(inst);
            }
            this._instCache.set(path, cachedInst);
        }
    }
    //----------------------------------public function ------------------------
    /**
     * 初始化
     */
    initialize() {
        let go = csharp__WEBPACK_IMPORTED_MODULE_0__["UnityEngine"].GameObject.Find("GameObjectCacheRoot");
        if (go == (void 0)) {
            go = new csharp__WEBPACK_IMPORTED_MODULE_0__["UnityEngine"].GameObject("GameObjectCacheRoot");
            csharp__WEBPACK_IMPORTED_MODULE_0__["UnityEngine"].Object.DontDestroyOnLoad(go);
        }
        this._cacheTransRoot = go.transform;
        this._typeGameObject = Object(puerts__WEBPACK_IMPORTED_MODULE_3__["$typeof"])(csharp__WEBPACK_IMPORTED_MODULE_0__["UnityEngine"].GameObject);
    }
    /**
     * 预加载资源，回调里面不返回加载的资源
     * @param pathArray
     * @param callback
     * @param instCount
     */
    preLoadGameObjectAsync(pathArray, callback, instCount = 1) {
        let len = pathArray.length;
        let loadCount = len;
        for (let i = 0; i < len; i++) {
            let path = pathArray[i];
            _ResourceManager__WEBPACK_IMPORTED_MODULE_2__["ResourceManager"].Instance.loadAssetAsync(path, this._typeGameObject, _utils_Handler__WEBPACK_IMPORTED_MODULE_4__["default"].create(this, (p, gameObject) => {
                if (gameObject != null) {
                    this.cacheAndInstGameObject(p, gameObject, instCount);
                }
                if (--loadCount <= 0) {
                    callback && callback.run();
                }
            }, [path], true));
        }
    }
    /**
     * 异步加载GameObject，会把加载好的GameObject传给回调
     * @param path
     * @param callback
     */
    loadGameObjectAsync(path, callback) {
        let inst = this.tryGetFromCache(path);
        if (inst != null) {
            this.activeGO(inst);
            return;
        }
        this.preLoadGameObjectAsync([path], _utils_Handler__WEBPACK_IMPORTED_MODULE_4__["default"].create(this, () => {
            let inst = this.tryGetFromCache(path);
            this.activeGO(inst);
            callback && callback.runWith(inst);
        }));
    }
    /**
     * 获取已经加载好的GameObject对象
     * @param path
     * @param active
     */
    getLoadedGameObject(path, active = true) {
        let inst = this.tryGetFromCache(path);
        if (inst == null) {
            console.error(`GameObjectPool=>getLoadedGameObject which is not loaded:${path}`);
        }
        active && this.activeGO(inst);
        return inst;
    }
    /**
     * 回收GameObject
     * @param path
     * @param inst
     * @returns
     */
    recycleGameObject(path, inst) {
        if (inst == null || _utils_StringUtil__WEBPACK_IMPORTED_MODULE_1__["string"].IsNullOrEmpty(path)) {
            console.error("GameObjectPool::recycleGameObject params error,path or game object inst is null or empty");
            return;
        }
        inst.transform.SetParent(this._cacheTransRoot);
        inst.SetActive(false);
        let cachedInst = this._instCache.get(path) || [];
        cachedInst.push(inst);
        this._instCache.set(path, cachedInst);
    }
    /**
     * 清理
     */
    cleanup() {
        this._instCache.forEach((arr, path) => {
            if (arr.length) {
                let len = arr.length;
                for (let i = 0; i < len; i++) {
                    let go = arr[i];
                    if (go != null) {
                        csharp__WEBPACK_IMPORTED_MODULE_0__["UnityEngine"].GameObject.Destroy(go);
                    }
                }
            }
        });
        this._instCache.clear();
        this._goPool.clear();
    }
}
GameObjectPool.Instance = new GameObjectPool();


/***/ }),

/***/ "./src/framework/resource/ResourceManager.ts":
/*!***************************************************!*\
  !*** ./src/framework/resource/ResourceManager.ts ***!
  \***************************************************/
/*! exports provided: ResourceManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResourceManager", function() { return ResourceManager; });
/* harmony import */ var csharp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! csharp */ "csharp");
/* harmony import */ var csharp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(csharp__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_timer_Timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/timer/Timer */ "./src/framework/utils/timer/Timer.ts");
/* harmony import */ var _utils_StringUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/StringUtil */ "./src/framework/utils/StringUtil.ts");
/* harmony import */ var puerts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! puerts */ "puerts");
/* harmony import */ var puerts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(puerts__WEBPACK_IMPORTED_MODULE_3__);
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




class ResourceManager {
    constructor() {
    }
    onUpdate() {
        if (this._requestAssetsHandler.size > 0) {
            this._requestAssetsHandler.forEach((handler, loader) => {
                if (loader.isDone) {
                    handler && handler.runWith(loader.asset);
                    loader.Dispose();
                    this._requestAssetsHandler.delete(loader);
                }
            });
        }
        if (this._requestABHandler.size > 0) {
            this._requestABHandler.forEach((handler, loader) => {
                if (loader.isDone) {
                    handler && handler.runWith(true);
                    loader.Dispose();
                    this._requestABHandler.delete(loader);
                }
            });
        }
    }
    initialize() {
        this._spriteType = Object(puerts__WEBPACK_IMPORTED_MODULE_3__["$typeof"])(csharp__WEBPACK_IMPORTED_MODULE_0__["UnityEngine"].Sprite);
        this._api = csharp__WEBPACK_IMPORTED_MODULE_0__["AssetBundles"].AssetBundleManager.Instance;
        this._requestAssetsHandler = new Map();
        this._requestABHandler = new Map();
        _utils_timer_Timer__WEBPACK_IMPORTED_MODULE_1__["Timer"].timer.frameLoop(2, this, this.onUpdate, null, true);
    }
    /**
     * 异步加载资源
     * @param path
     * @param res_type
     * @param callback
     */
    loadAssetAsync(path, res_type, callback) {
        if (_utils_StringUtil__WEBPACK_IMPORTED_MODULE_2__["string"].IsNullOrEmpty(path)) {
            console.error("ResourceManager::loadAssetAsync params error,path is empty");
            return false;
        }
        let request = this._api.LoadAssetAsync(path, res_type);
        this._requestAssetsHandler.set(request, callback);
        return true;
    }
    /**
     * 协程方式加载资源
     * @param path
     * @param res_type
     */
    loadAssetAwait(path, res_type) {
        return __awaiter(this, void 0, void 0, function* () {
            let request = yield this._api.LoadAssetAsync(path, res_type);
            let asset = request.asset;
            request.Dispose();
            return asset;
        });
    }
    /**
     * 异步加载AB包
     * @param path
     * @param callBack
     */
    loadAssetBundleAsync(path, callBack) {
        if (_utils_StringUtil__WEBPACK_IMPORTED_MODULE_2__["string"].IsNullOrEmpty(path)) {
            console.error("ResourceManager::loadAssetBundleAsync params error,path is empty");
            return;
        }
        let request = this._api.LoadAssetBundleAsync(path);
        this._requestABHandler.set(request, callBack);
        return true;
    }
    cleanup() {
        this._api.ClearAssetsCache();
        this._api.UnloadAllUnusedResidentAssetBundles();
    }
    /**
     * 等待正在加载中的完成
     */
    waitProcessRunningOver() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(resolve => {
                let caller = {};
                _utils_timer_Timer__WEBPACK_IMPORTED_MODULE_1__["Timer"].timer.frameLoop(1, caller, () => {
                    if (!this._api.IsProsessRunning) {
                        _utils_timer_Timer__WEBPACK_IMPORTED_MODULE_1__["Timer"].timer.clearAll(caller);
                        resolve();
                    }
                }, null, true);
            });
        });
    }
    //-------------其他类型加载--------------------------
    /**
     * 协程方式加载图片
     * @param spriteName
     * @param atlas
     * @constructor
     */
    loadImageAwait(spriteName, atlas) {
        return __awaiter(this, void 0, void 0, function* () {
            let path = atlas.atlasPath + spriteName;
            let request = yield this._api.LoadAssetAsync(path, this._spriteType);
            let sprite = request.asset;
            request.Dispose();
            return sprite;
        });
    }
    /**
     * 异步加载图片
     * @param spriteName
     * @param atlas
     * @param callback
     */
    loadImageAsync(spriteName, atlas, callback) {
        let path = atlas.atlasPath + spriteName;
        this.loadAssetAsync(path, this._spriteType, callback);
    }
}
ResourceManager.Instance = new ResourceManager();


/***/ }),

/***/ "./src/framework/scene/SceneManager.ts":
/*!*********************************************!*\
  !*** ./src/framework/scene/SceneManager.ts ***!
  \*********************************************/
/*! exports provided: SceneManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SceneManager", function() { return SceneManager; });
/* harmony import */ var _ui_UIManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/UIManager */ "./src/framework/ui/UIManager.ts");
/* harmony import */ var _utils_timer_Timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/timer/Timer */ "./src/framework/utils/timer/Timer.ts");
/* harmony import */ var csharp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! csharp */ "csharp");
/* harmony import */ var csharp__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(csharp__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _game_scenes_config_SceneConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../game/scenes/config/SceneConfig */ "./src/game/scenes/config/SceneConfig.ts");
/* harmony import */ var _resource_ResourceManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../resource/ResourceManager */ "./src/framework/resource/ResourceManager.ts");
/* harmony import */ var _ui_config_UILayers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/config/UILayers */ "./src/framework/ui/config/UILayers.ts");
/* harmony import */ var _resource_GameObjectPool__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../resource/GameObjectPool */ "./src/framework/resource/GameObjectPool.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};







class SceneManager {
    constructor() {
    }
    initialize() {
        this._sceneMap = new Map();
        this._busing = false;
        this._currentScene = null;
    }
    destroy() {
        this._currentScene = null;
        if (this._sceneMap) {
            this._sceneMap.forEach((scene, name) => {
                scene && scene.destroy();
            });
            this._sceneMap = null;
        }
    }
    /**
     * 切换场景
     * @param sceneConfig
     */
    switchScene(sceneConfig) {
        if (this._busing) {
            return;
        }
        if (this._currentScene && this._currentScene.config == sceneConfig) {
            return;
        }
        this._busing = true;
        this._innerSwitchScene(sceneConfig).then(() => {
            this._busing = false;
            console.log("switch scene complete!!");
        });
    }
    /**
     * 等待一帧
     * @private
     */
    _waitFrame() {
        return __awaiter(this, void 0, void 0, function* () {
            return _utils_timer_Timer__WEBPACK_IMPORTED_MODULE_1__["Timer"].timer.waitFrame(1);
        });
    }
    //切换场景
    _innerSwitchScene(config) {
        return __awaiter(this, void 0, void 0, function* () {
            _ui_UIManager__WEBPACK_IMPORTED_MODULE_0__["default"].Instance.openWindow(config.Loading);
            let window = _ui_UIManager__WEBPACK_IMPORTED_MODULE_0__["default"].Instance.getWindow(config.Loading);
            let model = window.model;
            model.setValue(0);
            yield this._waitFrame();
            yield _resource_ResourceManager__WEBPACK_IMPORTED_MODULE_4__["ResourceManager"].Instance.waitProcessRunningOver();
            //清理旧场景
            this._currentScene && this._currentScene.OnLeave();
            model.setValue(model.getValue() + 0.01);
            yield this._waitFrame();
            //清理ui
            _ui_UIManager__WEBPACK_IMPORTED_MODULE_0__["default"].Instance.destroyWindowExceptLayer(_ui_config_UILayers__WEBPACK_IMPORTED_MODULE_5__["EUILayer"].TopLayer);
            model.setValue(model.getValue() + 0.01);
            yield this._waitFrame();
            //清理资源缓存
            _resource_GameObjectPool__WEBPACK_IMPORTED_MODULE_6__["GameObjectPool"].Instance.cleanup();
            model.setValue(model.getValue() + 0.01);
            yield this._waitFrame();
            _resource_ResourceManager__WEBPACK_IMPORTED_MODULE_4__["ResourceManager"].Instance.cleanup();
            model.setValue(model.getValue() + 0.01);
            yield this._waitFrame();
            let sceneMgr = csharp__WEBPACK_IMPORTED_MODULE_2__["UnityEngine"].SceneManagement.SceneManager;
            let resources = csharp__WEBPACK_IMPORTED_MODULE_2__["UnityEngine"].Resources;
            sceneMgr.LoadScene(_game_scenes_config_SceneConfig__WEBPACK_IMPORTED_MODULE_3__["SceneConfigs"].LoadingScene.Level);
            model.setValue(model.getValue() + 0.01);
            yield this._waitFrame();
            yield resources.UnloadUnusedAssets();
            model.setValue(model.getValue() + 0.1);
            yield this._waitFrame();
            let logicScene = this._sceneMap.get(config.Name);
            if (logicScene == null) {
                logicScene = new config.Class(config);
                this._sceneMap.set(config.Name, logicScene);
            }
            logicScene.OnEnter();
            model.setValue(model.getValue() + 0.02);
            yield this._waitFrame();
            //加载场景
            yield sceneMgr.LoadSceneAsync(config.Level);
            model.setValue(model.getValue() + 0.15);
            yield this._waitFrame();
            let curProgress = model.getValue();
            //预加载场景资源
            yield logicScene.preloadAsync(model, 0.65);
            model.setValue(curProgress + 0.65);
            yield this._waitFrame();
            logicScene.OnComplete();
            model.setValue(1);
            yield this._waitFrame();
            this._currentScene = logicScene;
            //释放loading
            _ui_UIManager__WEBPACK_IMPORTED_MODULE_0__["default"].Instance.destroyWindow(config.Loading);
            yield this._waitFrame();
            resources.UnloadUnusedAssets();
        });
    }
}
/**
 * 实例
 */
SceneManager.Instance = new SceneManager();


/***/ }),

/***/ "./src/framework/scene/base/BaseScene.ts":
/*!***********************************************!*\
  !*** ./src/framework/scene/base/BaseScene.ts ***!
  \***********************************************/
/*! exports provided: BaseScene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseScene", function() { return BaseScene; });
/* harmony import */ var _utils_StringUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/StringUtil */ "./src/framework/utils/StringUtil.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

/**
 * 场景基类
 * @author by passion
 * @create time 2021/6/9 13:52
**/
class BaseScene {
    /**
     * 构造函数
     * @param config
     */
    constructor(config) {
        this._config = config;
        this._preloadResources = new Map();
        this._preloadPrefab = new Array();
        this.OnCreate();
    }
    destroy() {
        this.OnDestroy();
    }
    /**
     * 创建时
     * @constructor
     */
    OnCreate() {
    }
    /**
     * 释放时
     * @constructor
     */
    OnDestroy() {
        this._config = null;
        this._preloadPrefab = null;
        this._preloadResources = null;
    }
    /**
     * 进入时
     * @constructor
     */
    OnEnter() {
    }
    /**
     * 离开时
     * @constructor
     */
    OnLeave() {
        this._preloadResources.clear();
        this._preloadPrefab.length = 0;
    }
    /**
     * 加载完成时
     * @constructor
     */
    OnComplete() {
    }
    /**
     * 预加载场景资源
     * @param model
     * @param maxProgress
     */
    preloadAsync(model, maxProgress) {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    /**
     * 添加预加载prefab
     * @param path
     */
    addPreloadPrefab(path) {
        if (_utils_StringUtil__WEBPACK_IMPORTED_MODULE_0__["string"].IsNullOrEmpty(path) || !path.endsWith(".prefab")) {
            console.error("scene preload prefab path must end with .prefab");
            return;
        }
        this._preloadPrefab.push(path);
    }
    /**
     * 添加预加载资源类型
     * @param path
     * @param resType
     */
    addPreloadResource(path, resType) {
        if (_utils_StringUtil__WEBPACK_IMPORTED_MODULE_0__["string"].IsNullOrEmpty(path)) {
            return;
        }
        if (this._preloadResources.has(path)) {
            console.log("repeat add preload resource,path:" + path);
            return;
        }
        this._preloadResources.set(path, resType);
    }
    /**
     * get config
     */
    get config() {
        return this._config;
    }
}


/***/ }),

/***/ "./src/framework/ui/UIManager.ts":
/*!***************************************!*\
  !*** ./src/framework/ui/UIManager.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UIManager; });
/* harmony import */ var _utils_EventDispatcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/EventDispatcher */ "./src/framework/utils/EventDispatcher.ts");
/* harmony import */ var csharp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! csharp */ "csharp");
/* harmony import */ var csharp__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(csharp__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _config_UILayers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./config/UILayers */ "./src/framework/ui/config/UILayers.ts");
/* harmony import */ var _UIWindow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UIWindow */ "./src/framework/ui/UIWindow.ts");
/* harmony import */ var _component_UILayer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/UILayer */ "./src/framework/ui/component/UILayer.ts");
/* harmony import */ var puerts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! puerts */ "puerts");
/* harmony import */ var puerts__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(puerts__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_Handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/Handler */ "./src/framework/utils/Handler.ts");
/* harmony import */ var _config_UIWindowNames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./config/UIWindowNames */ "./src/framework/ui/config/UIWindowNames.ts");
/* harmony import */ var _config_UIConfigs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./config/UIConfigs */ "./src/framework/ui/config/UIConfigs.ts");
/* harmony import */ var _config_UIMessageNames__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./config/UIMessageNames */ "./src/framework/ui/config/UIMessageNames.ts");
/* harmony import */ var _config_EUIAction__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./config/EUIAction */ "./src/framework/ui/config/EUIAction.ts");
/* harmony import */ var _resource_GameObjectPool__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../resource/GameObjectPool */ "./src/framework/resource/GameObjectPool.ts");












/**
 * @author by passion
 * @create time 2021/6/1 10:25
 *
 * UI管理器
 **/
class UIManager extends _utils_EventDispatcher__WEBPACK_IMPORTED_MODULE_0__["default"] {
    /**
     * 密封构造函数
     */
    constructor() {
        super();
    }
    get uiCamera() {
        return this._uiCamera;
    }
    /**
     * 初始化
     */
    initialize() {
        _config_UILayers__WEBPACK_IMPORTED_MODULE_2__["UILayers"].set();
        this._loadHandlerMap = new Map();
        this._windowMap = new Map();
        this._openingDialogs = new Map();
        this._layerMap = new Map();
        this._gameObject = csharp__WEBPACK_IMPORTED_MODULE_1__["UnityEngine"].GameObject.Find(UIManager.UIRootPath);
        this._transform = this._gameObject.transform;
        let cameraRoot = csharp__WEBPACK_IMPORTED_MODULE_1__["UnityEngine"].GameObject.Find(UIManager.UICameraPath);
        this._uiCamera = cameraRoot.GetComponent(Object(puerts__WEBPACK_IMPORTED_MODULE_5__["$typeof"])(csharp__WEBPACK_IMPORTED_MODULE_1__["UnityEngine"].Camera));
        csharp__WEBPACK_IMPORTED_MODULE_1__["UnityEngine"].Object.DontDestroyOnLoad(this._gameObject);
        let eventSys = csharp__WEBPACK_IMPORTED_MODULE_1__["UnityEngine"].GameObject.Find(UIManager.EventSystemPath);
        csharp__WEBPACK_IMPORTED_MODULE_1__["UnityEngine"].Object.DontDestroyOnLoad(eventSys);
        _config_UILayers__WEBPACK_IMPORTED_MODULE_2__["UILayers"].walk(_utils_Handler__WEBPACK_IMPORTED_MODULE_6__["default"].create(this, (layer_info) => {
            let go = new csharp__WEBPACK_IMPORTED_MODULE_1__["UnityEngine"].GameObject(layer_info.name);
            let trans = go.transform;
            trans.SetParent(this._transform);
            let newLayer = new _component_UILayer__WEBPACK_IMPORTED_MODULE_4__["UILayer"](this._transform, layer_info.name);
            newLayer.onCreate(layer_info);
            this._layerMap.set(layer_info.type, newLayer);
        }, null, false));
    }
    /**
     * 打开界面
     * @param uiName 界面名
     * @param args 参数列表
     */
    openWindow(uiName, ...args) {
        let window = this._windowMap.get(uiName);
        //不存在ui，先初始化
        if (window == null) {
            window = new _UIWindow__WEBPACK_IMPORTED_MODULE_3__["UIWindow"]();
            this._windowMap.set(uiName, window);
            this.initWindow(uiName, window);
        }
        else {
            if (window.action == _config_EUIAction__WEBPACK_IMPORTED_MODULE_10__["EUIAction"].Loading || window.action == _config_EUIAction__WEBPACK_IMPORTED_MODULE_10__["EUIAction"].Opening) {
                //TODO 目前打开中，或者在加载中就直接返回，之后按需求修改。
                return true;
            }
        }
        this.innerOpenWindow(window, args);
        return true;
    }
    /**
     * 关闭界面
     * @param uiName 界面名
     */
    closeWindow(uiName) {
        let window = this._windowMap.get(uiName);
        if (window == null) {
            return false;
        }
        this.innerCloseWindow(window);
    }
    /**
     * 释放除去某一层的ui
     * @param layer
     */
    destroyWindowExceptLayer(layer) {
        this._windowMap.forEach((window, name) => {
            if (window.layer != layer) {
                this.innerCloseWindow(window);
                this.innerDestroyWindow(window);
            }
        });
    }
    /**
     * 释放窗口
     * @param uiName
     */
    destroyWindow(uiName) {
        let window = this._windowMap.get(uiName);
        if (window == null) {
            return;
        }
        this.innerCloseWindow(window);
        this.innerDestroyWindow(window);
    }
    /**
     * 获取界面
     * @param uiName
     */
    getWindow(uiName) {
        return this._windowMap.get(uiName);
    }
    //-------------------------------private----------------------
    /**
     * 初始化界面
     * @param uiName
     * @param window
     */
    initWindow(uiName, window) {
        window.action = _config_EUIAction__WEBPACK_IMPORTED_MODULE_10__["EUIAction"].Initing;
        let config = _config_UIConfigs__WEBPACK_IMPORTED_MODULE_8__["UIConfigs"].get(uiName);
        if (config == null) {
            console.error("UIWindowNames not exist in UIConfigs,name index is:" + _config_UIWindowNames__WEBPACK_IMPORTED_MODULE_7__["UIWindowNames"][uiName]);
            return;
        }
        let layer = this._layerMap.get(config.layer);
        if (layer == null) {
            console.error(`No layer named:${_config_UILayers__WEBPACK_IMPORTED_MODULE_2__["EUILayer"][config.layer]}`);
            return;
        }
        window.name = uiName;
        let eventDispatcher = new _utils_EventDispatcher__WEBPACK_IMPORTED_MODULE_0__["default"]();
        if (config.model != null) {
            window.model = new config.model(eventDispatcher, uiName);
        }
        if (config.ctrl != null) {
            window.ctrl = new config.ctrl(eventDispatcher, window.model);
        }
        if (config.view != null) {
            window.view = new config.view(layer, _config_UIWindowNames__WEBPACK_IMPORTED_MODULE_7__["UIWindowNames"][config.name], eventDispatcher, window.model, window.ctrl);
        }
        window.layer = config.layer;
        window.prefabPath = config.prefabPath;
        window.components = config.components;
        window.type = config.type;
        window.action = _config_EUIAction__WEBPACK_IMPORTED_MODULE_10__["EUIAction"].None;
        this.event(_config_UIMessageNames__WEBPACK_IMPORTED_MODULE_9__["UIMessageNames"].UIFRAME_ON_WINDOW_CREATE, window);
        return window;
    }
    /**
     * 关闭界面，会处理可能在加载的情况，然后再禁用界面
     * @param window
     */
    innerCloseWindow(window) {
        let deactivate = true;
        //还在加载中就要关闭界面把加载回调给清除,加载中view还没拉起来就没必要去禁用view也不能去禁用会报错
        if (window.action == _config_EUIAction__WEBPACK_IMPORTED_MODULE_10__["EUIAction"].Loading) {
            let handler = this._loadHandlerMap.get(window.name);
            handler && handler.clear();
            this._loadHandlerMap.delete(window.name);
            window.action = _config_EUIAction__WEBPACK_IMPORTED_MODULE_10__["EUIAction"].None;
            deactivate = false;
        }
        deactivate && this.deactivateWindow(window);
    }
    /**
     * 内部打开窗口，处理加载
     * @param window
     * @param args
     */
    innerOpenWindow(window, ...args) {
        if (window.action == _config_EUIAction__WEBPACK_IMPORTED_MODULE_10__["EUIAction"].Opening || window.isOpened) {
            console.error(`you should close window first,window name: ${_config_UIWindowNames__WEBPACK_IMPORTED_MODULE_7__["UIWindowNames"][window.name]}`);
            return;
        }
        if (window.isLoaded) {
            this.activateWindow(window);
        }
        else {
            window.action = _config_EUIAction__WEBPACK_IMPORTED_MODULE_10__["EUIAction"].Loading;
            let loadCB = _utils_Handler__WEBPACK_IMPORTED_MODULE_6__["default"].create(this, (window, args) => {
                window.isLoaded = true;
                let go = _resource_GameObjectPool__WEBPACK_IMPORTED_MODULE_11__["GameObjectPool"].Instance.getLoadedGameObject(window.prefabPath, true);
                let layer = this._layerMap.get(window.layer);
                let trans = go.transform;
                trans.SetParent(layer.transform);
                trans.name = _config_UIWindowNames__WEBPACK_IMPORTED_MODULE_7__["UIWindowNames"][window.name];
                window.action = _config_EUIAction__WEBPACK_IMPORTED_MODULE_10__["EUIAction"].None;
                window.view.onCreate();
                this.activateWindow(window, args);
            }, [window, args], true);
            this._loadHandlerMap.set(window.name, loadCB);
            let loadArray = window.components && window.components.concat([window.prefabPath]) || [window.prefabPath];
            _resource_GameObjectPool__WEBPACK_IMPORTED_MODULE_11__["GameObjectPool"].Instance.preLoadGameObjectAsync(loadArray, loadCB);
        }
    }
    /**
     * 激活界面
     * @param window
     * @param args
     */
    activateWindow(window, ...args) {
        if (window.isOpened) {
            return;
        }
        window.action = _config_EUIAction__WEBPACK_IMPORTED_MODULE_10__["EUIAction"].Opening;
        window === null || window === void 0 ? void 0 : window.model.activate(args);
        window === null || window === void 0 ? void 0 : window.ctrl.activate(args);
        window.view.setActive(true);
        window.action = _config_EUIAction__WEBPACK_IMPORTED_MODULE_10__["EUIAction"].None;
        window.isOpened = true;
        this.event(_config_UIMessageNames__WEBPACK_IMPORTED_MODULE_9__["UIMessageNames"].UIFRAME_ON_WINDOW_OPEN, window);
    }
    /**
     * 禁用界面
     * @param window
     */
    deactivateWindow(window) {
        if (!window.isOpened) {
            return;
        }
        window.action = _config_EUIAction__WEBPACK_IMPORTED_MODULE_10__["EUIAction"].Closing;
        window === null || window === void 0 ? void 0 : window.model.deactivate();
        window === null || window === void 0 ? void 0 : window.ctrl.deactivate();
        window.view.setActive(false);
        window.action = _config_EUIAction__WEBPACK_IMPORTED_MODULE_10__["EUIAction"].None;
        window.isOpened = false;
        this.event(_config_UIMessageNames__WEBPACK_IMPORTED_MODULE_9__["UIMessageNames"].UIFRAME_ON_WINDOW_CLOSE, window);
    }
    innerDestroyWindow(window) {
        var _a, _b, _c;
        if (window.isLoaded) {
            _resource_GameObjectPool__WEBPACK_IMPORTED_MODULE_11__["GameObjectPool"].Instance.recycleGameObject(window.prefabPath, window.view.gameObject);
        }
        (_a = window.model) === null || _a === void 0 ? void 0 : _a.destroy();
        (_b = window.ctrl) === null || _b === void 0 ? void 0 : _b.destroy();
        (_c = window.view) === null || _c === void 0 ? void 0 : _c.destroy();
        this._windowMap.delete(window.name);
    }
}
UIManager.Instance = new UIManager();
//ui场景根目录
UIManager.UIRootPath = "UIRoot";
//事件路径
UIManager.EventSystemPath = "EventSystem";
//camera路径
UIManager.UICameraPath = UIManager.UIRootPath + "/UICamera";
//分辨率
UIManager.Resolution = new csharp__WEBPACK_IMPORTED_MODULE_1__["UnityEngine"].Vector2(750, 1334);
//窗口最大可使用的相对order_in_layer
UIManager.MaxOrderPerWindow = 10;


/***/ }),

/***/ "./src/framework/ui/UIWindow.ts":
/*!**************************************!*\
  !*** ./src/framework/ui/UIWindow.ts ***!
  \**************************************/
/*! exports provided: UIWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIWindow", function() { return UIWindow; });
/* harmony import */ var _config_UILayers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config/UILayers */ "./src/framework/ui/config/UILayers.ts");
/* harmony import */ var _config_EUIAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config/EUIAction */ "./src/framework/ui/config/EUIAction.ts");


/**
 * @author by passion
 * @create time 2021/6/1 10:26
 * 窗口包装器
**/
class UIWindow {
    constructor() {
        /**
         * 层级
         */
        this.layer = _config_UILayers__WEBPACK_IMPORTED_MODULE_0__["EUILayer"].BackgroundLayer;
        /**
         * 预设路径
         */
        this.prefabPath = "";
        /**
         * 预加载组件prefab
         */
        this.components = [];
        /**
         * ui当前进行中的行为，行为完成置为none
         */
        this.action = _config_EUIAction__WEBPACK_IMPORTED_MODULE_1__["EUIAction"].None;
        /**
         * 是否加载完成
         */
        this.isLoaded = false;
        /**
         * 是否打开
         */
        this.isOpened = false;
    }
}


/***/ }),

/***/ "./src/framework/ui/base/UIBaseCtrl.ts":
/*!*********************************************!*\
  !*** ./src/framework/ui/base/UIBaseCtrl.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UIBaseCtrl; });
class UIBaseCtrl {
    constructor(eventDispatcher, model) {
        this._eventHandle = eventDispatcher;
        this._model = model;
        this.onCreate();
    }
    destroy() {
        this.onDestroy();
        this._eventHandle = null;
        this._model = null;
    }
    onCreate() {
    }
    onDestroy() {
    }
    onEnable(...args) {
    }
    onDisable() {
    }
    onAddListener() {
    }
    onRemoveListener() {
    }
    deactivate() {
        this.onRemoveListener();
        this.onDisable();
    }
    activate(...args) {
        this.onAddListener();
        this.onEnable(args);
    }
}


/***/ }),

/***/ "./src/framework/ui/base/UIBaseModel.ts":
/*!**********************************************!*\
  !*** ./src/framework/ui/base/UIBaseModel.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UIBaseModel; });
class UIBaseModel {
    constructor(eventDispatcher, uiName) {
        this._eventHandle = eventDispatcher;
        this._uiName = uiName;
        this.onCreate();
    }
    destroy() {
        this.onDestroy();
        this._eventHandle.offAllCaller(this);
        this._eventHandle = null;
        this._uiName = null;
    }
    onCreate() {
    }
    onDestroy() {
    }
    onEnable(...args) {
    }
    onDisable() {
    }
    onAddListener() {
    }
    onRemoveListener() {
    }
    deactivate() {
        this.onRemoveListener();
        this.onDisable();
    }
    activate(...args) {
        this.onAddListener();
        this.onEnable(args);
    }
}


/***/ }),

/***/ "./src/framework/ui/base/UIBaseView.ts":
/*!*********************************************!*\
  !*** ./src/framework/ui/base/UIBaseView.ts ***!
  \*********************************************/
/*! exports provided: UIBaseView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIBaseView", function() { return UIBaseView; });
/* harmony import */ var _component_UIBaseContainer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../component/UIBaseContainer */ "./src/framework/ui/component/UIBaseContainer.ts");
/* harmony import */ var _component_UICanvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../component/UICanvas */ "./src/framework/ui/component/UICanvas.ts");
/* harmony import */ var csharp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! csharp */ "csharp");
/* harmony import */ var csharp__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(csharp__WEBPACK_IMPORTED_MODULE_2__);



/**
 * ui基类
 */
class UIBaseView extends _component_UIBaseContainer__WEBPACK_IMPORTED_MODULE_0__["UIBaseContainer"] {
    constructor(layer, relativePath, eventDispatcher, model, ctrl) {
        super(layer.transform, relativePath);
        this._layer = layer;
        this._baseOrder = 0;
        this._model = model;
        this._ctrl = ctrl;
        this._eventHandle = eventDispatcher;
    }
    onCreate() {
        super.onCreate();
        this._canvas = this.addComponent(_component_UICanvas__WEBPACK_IMPORTED_MODULE_1__["UICanvas"], "", [0, this]);
        this._rectTransform.offsetMax = csharp__WEBPACK_IMPORTED_MODULE_2__["UnityEngine"].Vector2.zero;
        this._rectTransform.offsetMin = csharp__WEBPACK_IMPORTED_MODULE_2__["UnityEngine"].Vector2.zero;
        this._rectTransform.localScale = csharp__WEBPACK_IMPORTED_MODULE_2__["UnityEngine"].Vector3.zero;
        this._rectTransform.localPosition = csharp__WEBPACK_IMPORTED_MODULE_2__["UnityEngine"].Vector3.zero;
    }
    onDestroy() {
        this._model = null;
        this._ctrl = null;
        this._canvas = null;
        this._eventHandle = null;
        super.onDestroy();
    }
    onEnable(...arg) {
        this._baseOrder = this._layer.popWindowOrder();
        super.onEnable();
        this.onAddListener();
    }
    onDisable() {
        this.onRemoveListener();
        super.onDisable();
        this._layer.pushWindowOrder();
    }
    onAddListener() {
    }
    onRemoveListener() {
    }
    /**
     * 基础层级
     */
    get baseOrder() {
        return this._baseOrder;
    }
    /**
     * 获取控制器
     */
    get ctrl() {
        return this._ctrl;
    }
    /**
     * 获取数据
     */
    get model() {
        return this._model;
    }
}


/***/ }),

/***/ "./src/framework/ui/component/UIBaseComponent.ts":
/*!*******************************************************!*\
  !*** ./src/framework/ui/component/UIBaseComponent.ts ***!
  \*******************************************************/
/*! exports provided: UIBaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIBaseComponent", function() { return UIBaseComponent; });
/* harmony import */ var csharp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! csharp */ "csharp");
/* harmony import */ var csharp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(csharp__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_UIUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/UIUtil */ "./src/framework/ui/util/UIUtil.ts");
/* harmony import */ var puerts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! puerts */ "puerts");
/* harmony import */ var puerts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(puerts__WEBPACK_IMPORTED_MODULE_2__);
/**
 * ui基类
 */



class UIBaseComponent {
    /**
     * 添加组件
     * @param holder
     * @param relativePath 相对holder的路径
     */
    constructor(holder, relativePath) {
        this._holder = holder;
        this._relativePath = relativePath;
    }
    destroy() {
        this.onDestroy();
    }
    onDestroy() {
        this._holder = null;
        this._gameObject = null;
        this._name = null;
        this._transform = null;
    }
    onCreate() {
        this._transform = _util_UIUtil__WEBPACK_IMPORTED_MODULE_1__["UIUtil"].findTrans(this._holder, this._relativePath);
        this._gameObject = this._transform.gameObject;
        this._name = this._gameObject.name;
        this._rectTransform = _util_UIUtil__WEBPACK_IMPORTED_MODULE_1__["UIUtil"].findComponent(this._transform, Object(puerts__WEBPACK_IMPORTED_MODULE_2__["$typeof"])(csharp__WEBPACK_IMPORTED_MODULE_0__["UnityEngine"].RectTransform));
    }
    onDisable() {
    }
    onEnable() {
    }
    /**
     * 设置激活与反激活
     * @param active
     */
    setActive(active) {
        if (this._active == active) {
            return;
        }
        this._active = active;
        if (active) {
            this._gameObject.SetActive(active);
            this.onEnable();
        }
        else {
            this.onDisable();
            this._gameObject.SetActive(active);
        }
    }
    /**
     * 获取是否激活
     * @return boolean 是否激活
     */
    getActive() {
        return this._active;
    }
    /**
     * 获取组件名字
     */
    getName() {
        return this._name;
    }
    /**
     * 相对路径
     */
    getRelativePath() {
        return this._relativePath;
    }
    /**
     * 获取transform节点
     */
    get transform() {
        return this._transform;
    }
    /**
     * 获取holder
     */
    get holder() {
        return this._holder;
    }
    /**
     * 获取游戏对象
     */
    get gameObject() {
        return this._gameObject;
    }
}


/***/ }),

/***/ "./src/framework/ui/component/UIBaseContainer.ts":
/*!*******************************************************!*\
  !*** ./src/framework/ui/component/UIBaseContainer.ts ***!
  \*******************************************************/
/*! exports provided: UIBaseContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIBaseContainer", function() { return UIBaseContainer; });
/* harmony import */ var _UIBaseComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UIBaseComponent */ "./src/framework/ui/component/UIBaseComponent.ts");
/* harmony import */ var _utils_Handler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/Handler */ "./src/framework/utils/Handler.ts");
/**
 * 基础组件容器
 */


class UIBaseContainer extends _UIBaseComponent__WEBPACK_IMPORTED_MODULE_0__["UIBaseComponent"] {
    onCreate() {
        super.onCreate();
        this._components = new Map();
        this._length = 0;
    }
    onDestroy() {
        let handler = _utils_Handler__WEBPACK_IMPORTED_MODULE_1__["default"].create(this, (component) => {
            component.destroy();
        }, null, false);
        this.walk(handler);
        handler.recover();
        this._components = null;
        super.onDestroy();
    }
    onEnable() {
        super.onEnable();
        let handler = _utils_Handler__WEBPACK_IMPORTED_MODULE_1__["default"].create(this, (component) => {
            component.onEnable();
        }, null, false);
        this.walk(handler);
        handler.recover();
    }
    onDisable() {
        super.onDisable();
        let handler = _utils_Handler__WEBPACK_IMPORTED_MODULE_1__["default"].create(this, (component) => {
            component.onDisable();
        }, null, false);
        this.walk(handler);
        handler.recover();
    }
    /**
     * 遍历所有组件：component_class参数不传，遍历某个Container下指定组件传入对应类型
     * @param callback
     * @param component_class
     */
    walk(callback, component_class) {
        this._components.forEach((component_map) => {
            if (component_map != null) {
                component_map.forEach((component, cmp_class) => {
                    if (component_class == null) {
                        callback.runWith(component);
                    }
                    else if (cmp_class == component_class) {
                        callback.runWith(component);
                    }
                });
            }
        });
    }
    /**
     * 添加组件
     * @param component_class
     * @param relativePath
     * @param params
     */
    addComponent(component_class, relativePath, params) {
        let component_inst = new component_class(this._transform, relativePath);
        component_inst.onCreate.apply(component_inst, params);
        this.recordComponent(relativePath, component_class, component_inst);
        this._length++;
        return component_inst;
    }
    /**
     * 获取单个组件，如果没有传入类类型，返回这个名字的第一个组件
     * @param relativePath
     * @param component_class
     */
    getComponent(relativePath, component_class) {
        if (relativePath == null || component_class == null) {
            console.error(this.constructor.name + "::getComponent function args error");
            return null;
        }
        if (!this._components.has(relativePath)) {
            return null;
        }
        let cMap = this._components.get(relativePath);
        return cMap.get(component_class);
    }
    /**
     * 获取所有类型组件
     * @param component_class
     */
    getComponents(component_class) {
        let components = new Array();
        this.walk(_utils_Handler__WEBPACK_IMPORTED_MODULE_1__["default"].create(this, (component) => {
            components.push(component);
        }, null, false), component_class);
        return components;
    }
    /**
     * 移除组件
     * @param relativePath 相对路径
     * @param component_class 类型
     */
    removeComponent(relativePath, component_class) {
        let component = this.getComponent(relativePath, component_class);
        if (component != null) {
            this._components.get(relativePath).delete(component_class);
            component.destroy();
            this._length--;
        }
        return component;
    }
    /**
     * 移除组件
     * @param component_class
     */
    removeComponents(component_class) {
        let components = this.getComponents(component_class);
        for (let i = 0; i < components.length; i++) {
            let component = components[i];
            this._components.get(component.getRelativePath()).delete(component_class);
            component.destroy();
            this._length--;
        }
        return components;
    }
    /**
     * 记录组件
     * @param relativePath
     * @param component_class
     * @param component
     */
    recordComponent(relativePath, component_class, component) {
        let componentsMap = this._components.get(relativePath);
        if (componentsMap == null) {
            componentsMap = new Map();
            componentsMap.set(component_class, component);
            this._components.set(relativePath, componentsMap);
            return;
        }
        if (componentsMap.has(component_class)) {
            console.error(`can not repeat add component,name:【${component_class.name}】 ,relativePath:【${relativePath}】`);
            return;
        }
        componentsMap.set(component_class, component);
    }
}


/***/ }),

/***/ "./src/framework/ui/component/UICanvas.ts":
/*!************************************************!*\
  !*** ./src/framework/ui/component/UICanvas.ts ***!
  \************************************************/
/*! exports provided: UICanvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UICanvas", function() { return UICanvas; });
/* harmony import */ var _UIBaseComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UIBaseComponent */ "./src/framework/ui/component/UIBaseComponent.ts");
/* harmony import */ var csharp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! csharp */ "csharp");
/* harmony import */ var csharp__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(csharp__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _util_UIUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/UIUtil */ "./src/framework/ui/util/UIUtil.ts");
/* harmony import */ var puerts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! puerts */ "puerts");
/* harmony import */ var puerts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(puerts__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _unity_UnityTagsAndLayers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../unity/UnityTagsAndLayers */ "./src/framework/unity/UnityTagsAndLayers.ts");
/* harmony import */ var _UIManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../UIManager */ "./src/framework/ui/UIManager.ts");






/**
 * ts侧canvas组件
 * -- 1、为了调整UI层级，所以这里的overrideSorting设置为true
 -- 2、如果只是类似NGUI的Panel那样划分drawcall管理，直接在预设上添加Canvas，并设置overrideSorting为false
 -- 3、这里的order是相对于window.view中base_order的差量，窗口内的order最多为10个---UIManager中配置
 -- 4、旧窗口内所有canvas的real_order都应该在新窗口之下，即保证旧窗口内包括UI特效在内的所有组件，不会跑到新窗口之上
 -- 5、UI逻辑代码禁止手动直接设置Unity侧Cavans组件的orderInLayer，全部使用本脚本接口调整层级，避免层级混乱
 */
class UICanvas extends _UIBaseComponent__WEBPACK_IMPORTED_MODULE_0__["UIBaseComponent"] {
    onCreate(...args) {
        super.onCreate();
        let relative_order = args[0];
        let view = args[1];
        if (relative_order == null || view == null) {
            console.error("UICanvas::arguments error,require relative order and view arg");
            return;
        }
        let canvas;
        canvas = _util_UIUtil__WEBPACK_IMPORTED_MODULE_2__["UIUtil"].findComponent(this._transform, Object(puerts__WEBPACK_IMPORTED_MODULE_3__["$typeof"])(csharp__WEBPACK_IMPORTED_MODULE_1__["UnityEngine"].Canvas));
        if (canvas == null) {
            canvas = this._gameObject.AddComponent(Object(puerts__WEBPACK_IMPORTED_MODULE_3__["$typeof"])(csharp__WEBPACK_IMPORTED_MODULE_1__["UnityEngine"].Canvas));
        }
        canvas.overrideSorting = true;
        canvas.sortingLayerName = _unity_UnityTagsAndLayers__WEBPACK_IMPORTED_MODULE_4__["EUnitySortingLayers"].UI;
        this._canvas = canvas;
        this._graphicRaycaster = _util_UIUtil__WEBPACK_IMPORTED_MODULE_2__["UIUtil"].findComponent(this._transform, Object(puerts__WEBPACK_IMPORTED_MODULE_3__["$typeof"])(csharp__WEBPACK_IMPORTED_MODULE_1__["UnityEngine"].UI.GraphicRaycaster));
        if (this._graphicRaycaster == null) {
            this._graphicRaycaster = this._gameObject.AddComponent(Object(puerts__WEBPACK_IMPORTED_MODULE_3__["$typeof"])(csharp__WEBPACK_IMPORTED_MODULE_1__["UnityEngine"].UI.GraphicRaycaster));
        }
        this._relativeOrder = relative_order;
        this._view = view;
    }
    onDestroy() {
        this._canvas = null;
        this._graphicRaycaster = null;
        super.onDestroy();
    }
    onEnable() {
        super.onEnable();
        this.setOrder(this._relativeOrder);
    }
    setOrder(relativeOrder) {
        if (relativeOrder > _UIManager__WEBPACK_IMPORTED_MODULE_5__["default"].MaxOrderPerWindow) {
            console.error("relative order is larger than ui manager define max order in per window!!!");
        }
        this._relativeOrder = relativeOrder;
        this._canvas.sortingOrder = this._view.baseOrder + relativeOrder;
    }
    /**
     * 获取canvas对象
     */
    get canvas() {
        return this._canvas;
    }
    /**
     * 获取层级
     */
    get order() {
        return this._relativeOrder;
    }
}


/***/ }),

/***/ "./src/framework/ui/component/UIImage.ts":
/*!***********************************************!*\
  !*** ./src/framework/ui/component/UIImage.ts ***!
  \***********************************************/
/*! exports provided: UIImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIImage", function() { return UIImage; });
/* harmony import */ var _UIBaseComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UIBaseComponent */ "./src/framework/ui/component/UIBaseComponent.ts");
/* harmony import */ var _util_UIUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/UIUtil */ "./src/framework/ui/util/UIUtil.ts");
/* harmony import */ var _resource_ResourceManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../resource/ResourceManager */ "./src/framework/resource/ResourceManager.ts");
/* harmony import */ var _utils_Handler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/Handler */ "./src/framework/utils/Handler.ts");




/**
 * image组件
 * @author by passion
 * @create time 2021/6/9 16:12
 **/
class UIImage extends _UIBaseComponent__WEBPACK_IMPORTED_MODULE_0__["UIBaseComponent"] {
    /**
     * 创建时
     * @param args
     * @param[0] 图集IAtlasConfig
     */
    onCreate(...args) {
        super.onCreate();
        this._atlas = args[0];
        this._unityImage = _util_UIUtil__WEBPACK_IMPORTED_MODULE_1__["UIUtil"].findImage(this._transform);
        this._spriteName = this._unityImage.sprite.name;
        this._innerActive = true;
    }
    onDestroy() {
        this._atlas = null;
        this._unityImage = null;
        this._spriteName = null;
        super.onDestroy();
    }
    setActive(active) {
        super.setActive(active);
        this._innerActive = active;
    }
    /**
     * 设置填充
     * @param fillAmount
     */
    setFillAmount(fillAmount) {
        this._unityImage.fillAmount = fillAmount;
    }
    /**
     * 缓动填充
     * @param fillAmount
     * @param duration
     */
    doFillAmount(fillAmount, duration) {
        this._unityImage.DOFillAmount(fillAmount, duration);
    }
    /**
     * 设置图片
     * @param spriteName 图片名
     * @param hideAtLoad 加载中是否隐藏
     * @param atlas 图集配置
     */
    setSprite(spriteName, hideAtLoad = true, atlas) {
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
        _resource_ResourceManager__WEBPACK_IMPORTED_MODULE_2__["ResourceManager"].Instance.loadImageAsync(spriteName, useAtlas, _utils_Handler__WEBPACK_IMPORTED_MODULE_3__["default"].create(this, (n, sprite) => {
            if (this._unityImage == null || sprite == null) {
                return;
            }
            if (this._spriteName != n) {
                return;
            }
            this._unityImage.sprite = sprite;
            if (this._innerActive)
                this._unityImage.gameObject.SetActive(true);
        }, [spriteName]));
    }
    /**
     * 获取当前图片名
     */
    get spriteName() {
        return this._spriteName;
    }
}


/***/ }),

/***/ "./src/framework/ui/component/UILayer.ts":
/*!***********************************************!*\
  !*** ./src/framework/ui/component/UILayer.ts ***!
  \***********************************************/
/*! exports provided: UILayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UILayer", function() { return UILayer; });
/* harmony import */ var _UIBaseComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UIBaseComponent */ "./src/framework/ui/component/UIBaseComponent.ts");
/* harmony import */ var csharp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! csharp */ "csharp");
/* harmony import */ var csharp__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(csharp__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _unity_UnityTagsAndLayers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../unity/UnityTagsAndLayers */ "./src/framework/unity/UnityTagsAndLayers.ts");
/* harmony import */ var _util_UIUtil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/UIUtil */ "./src/framework/ui/util/UIUtil.ts");
/* harmony import */ var puerts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! puerts */ "puerts");
/* harmony import */ var puerts__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(puerts__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _UIManager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../UIManager */ "./src/framework/ui/UIManager.ts");






/**
 * ts侧layer层级管理器
 */
class UILayer extends _UIBaseComponent__WEBPACK_IMPORTED_MODULE_0__["UIBaseComponent"] {
    onCreate(...args) {
        super.onCreate();
        this._gameObject.layer = _unity_UnityTagsAndLayers__WEBPACK_IMPORTED_MODULE_2__["EUnityLayers"].UI;
        this._canvas = this._gameObject.AddComponent(Object(puerts__WEBPACK_IMPORTED_MODULE_4__["$typeof"])(csharp__WEBPACK_IMPORTED_MODULE_1__["UnityEngine"].Canvas));
        this._transform = this._canvas.transform;
        this._gameObject = this._canvas.gameObject;
        let layer = args[0];
        let canvas = this._canvas;
        canvas.renderMode = csharp__WEBPACK_IMPORTED_MODULE_1__["UnityEngine"].RenderMode.ScreenSpaceCamera;
        canvas.worldCamera = _UIManager__WEBPACK_IMPORTED_MODULE_5__["default"].Instance.uiCamera;
        canvas.planeDistance = layer.planeDistance;
        canvas.sortingLayerName = _unity_UnityTagsAndLayers__WEBPACK_IMPORTED_MODULE_2__["EUnitySortingLayers"].UI;
        canvas.sortingOrder = layer.orderInLayer;
        canvas.pixelPerfect = true;
        //scaler
        this._canvasScaler = _util_UIUtil__WEBPACK_IMPORTED_MODULE_3__["UIUtil"].findComponent(this._transform, Object(puerts__WEBPACK_IMPORTED_MODULE_4__["$typeof"])(csharp__WEBPACK_IMPORTED_MODULE_1__["UnityEngine"].UI.CanvasScaler));
        if (this._canvasScaler == null) {
            this._canvasScaler = this._gameObject.AddComponent(Object(puerts__WEBPACK_IMPORTED_MODULE_4__["$typeof"])(csharp__WEBPACK_IMPORTED_MODULE_1__["UnityEngine"].UI.CanvasScaler));
        }
        let canvasScaler = this._canvasScaler;
        canvasScaler.uiScaleMode = csharp__WEBPACK_IMPORTED_MODULE_1__["UnityEngine"].UI.CanvasScaler.ScaleMode.ScaleWithScreenSize;
        canvasScaler.referenceResolution = _UIManager__WEBPACK_IMPORTED_MODULE_5__["default"].Resolution;
        canvasScaler.screenMatchMode = csharp__WEBPACK_IMPORTED_MODULE_1__["UnityEngine"].UI.CanvasScaler.ScreenMatchMode.MatchWidthOrHeight;
        //raycater
        this._graphicRaycater = _util_UIUtil__WEBPACK_IMPORTED_MODULE_3__["UIUtil"].findComponent(this._transform, Object(puerts__WEBPACK_IMPORTED_MODULE_4__["$typeof"])(csharp__WEBPACK_IMPORTED_MODULE_1__["UnityEngine"].UI.GraphicRaycaster));
        if (this._graphicRaycater == null) {
            this._graphicRaycater = this._gameObject.AddComponent(Object(puerts__WEBPACK_IMPORTED_MODULE_4__["$typeof"])(csharp__WEBPACK_IMPORTED_MODULE_1__["UnityEngine"].UI.GraphicRaycaster));
        }
        this._topWindowOrder = layer.orderInLayer;
        this._minWindowOrder = layer.orderInLayer;
    }
    onDestroy() {
        this._canvas = null;
        this._canvasScaler = null;
        this._graphicRaycater = null;
        super.onDestroy();
    }
    pushWindowOrder() {
        this._topWindowOrder -= _UIManager__WEBPACK_IMPORTED_MODULE_5__["default"].MaxOrderPerWindow;
    }
    popWindowOrder() {
        let c = this._topWindowOrder;
        this._topWindowOrder += _UIManager__WEBPACK_IMPORTED_MODULE_5__["default"].MaxOrderPerWindow;
        return c;
    }
}


/***/ }),

/***/ "./src/framework/ui/component/UIText.ts":
/*!**********************************************!*\
  !*** ./src/framework/ui/component/UIText.ts ***!
  \**********************************************/
/*! exports provided: UIText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIText", function() { return UIText; });
/* harmony import */ var _UIBaseComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UIBaseComponent */ "./src/framework/ui/component/UIBaseComponent.ts");
/* harmony import */ var _util_UIUtil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/UIUtil */ "./src/framework/ui/util/UIUtil.ts");


/**
 * ui文本
 * @author by passion
 * @create time 2021/6/9 15:56
 **/
class UIText extends _UIBaseComponent__WEBPACK_IMPORTED_MODULE_0__["UIBaseComponent"] {
    onCreate() {
        super.onCreate();
        this._unityText = _util_UIUtil__WEBPACK_IMPORTED_MODULE_1__["UIUtil"].findText(this._transform);
        this._content = this._unityText.text;
    }
    onDestroy() {
        this._unityText = null;
        super.onDestroy();
    }
    /**
     * 获取文本内容
     */
    get text() {
        return this._content;
    }
    /**
     * 设置文本
     * @param content
     */
    set text(content) {
        if (this._content == content) {
            return;
        }
        if (this._unityText != null)
            this._unityText.text = content;
        this._content = content;
    }
}


/***/ }),

/***/ "./src/framework/ui/config/EUIAction.ts":
/*!**********************************************!*\
  !*** ./src/framework/ui/config/EUIAction.ts ***!
  \**********************************************/
/*! exports provided: EUIAction */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EUIAction", function() { return EUIAction; });
/**
 * @author by passion
 * @create time 2021/6/1 11:01
 * ui当前的行为
**/
var EUIAction;
(function (EUIAction) {
    /**
     * 当前没有任何行为
     */
    EUIAction[EUIAction["None"] = 0] = "None";
    /**
     * 初始化中
     */
    EUIAction[EUIAction["Initing"] = 1] = "Initing";
    /**
     * 加载中
     */
    EUIAction[EUIAction["Loading"] = 2] = "Loading";
    /**
     * 打开中
     */
    EUIAction[EUIAction["Opening"] = 3] = "Opening";
    /**
     * 关闭中
     */
    EUIAction[EUIAction["Closing"] = 4] = "Closing";
})(EUIAction || (EUIAction = {}));


/***/ }),

/***/ "./src/framework/ui/config/EUIType.ts":
/*!********************************************!*\
  !*** ./src/framework/ui/config/EUIType.ts ***!
  \********************************************/
/*! exports provided: EUIType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EUIType", function() { return EUIType; });
/**
 * ui类型
 */
var EUIType;
(function (EUIType) {
    /**
     * 普通ui
     */
    EUIType[EUIType["View"] = 0] = "View";
    /**
     * 弹窗
     */
    EUIType[EUIType["Dialog"] = 1] = "Dialog";
})(EUIType || (EUIType = {}));


/***/ }),

/***/ "./src/framework/ui/config/UIConfigs.ts":
/*!**********************************************!*\
  !*** ./src/framework/ui/config/UIConfigs.ts ***!
  \**********************************************/
/*! exports provided: UIConfigInfo, UIConfigs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIConfigInfo", function() { return UIConfigInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIConfigs", function() { return UIConfigs; });
/* harmony import */ var _game_ui_uiHome_UIHomeConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../game/ui/uiHome/UIHomeConfig */ "./src/game/ui/uiHome/UIHomeConfig.ts");
/* harmony import */ var _game_ui_uiBattle_UIBattleConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../game/ui/uiBattle/UIBattleConfig */ "./src/game/ui/uiBattle/UIBattleConfig.ts");
/* harmony import */ var _game_ui_uiLoading_UILoadingConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../game/ui/uiLoading/UILoadingConfig */ "./src/game/ui/uiLoading/UILoadingConfig.ts");



/**
 * 所有模块
 */
let UIModule = {
    UIHome: _game_ui_uiHome_UIHomeConfig__WEBPACK_IMPORTED_MODULE_0__["UIHomeConfig"],
    UIBattle: _game_ui_uiBattle_UIBattleConfig__WEBPACK_IMPORTED_MODULE_1__["UIBattleConfig"],
    UILoading: _game_ui_uiLoading_UILoadingConfig__WEBPACK_IMPORTED_MODULE_2__["UILoadingConfig"],
};
/**
 * ui配置结构体
 */
class UIConfigInfo {
}
let UIConfigs = new Map();
for (let moduleName in UIModule) {
    let module = UIModule[moduleName];
    for (let cfgName in module) {
        let config = module[cfgName];
        if (UIConfigs.has(config.name)) {
            console.error("Already exist ::" + cfgName);
        }
        UIConfigs.set(config.name, config);
    }
}



/***/ }),

/***/ "./src/framework/ui/config/UILayers.ts":
/*!*********************************************!*\
  !*** ./src/framework/ui/config/UILayers.ts ***!
  \*********************************************/
/*! exports provided: UILayerInfo, EUILayer, UILayers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UILayerInfo", function() { return UILayerInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EUILayer", function() { return EUILayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UILayers", function() { return UILayers; });
class UILayerInfo {
    constructor() {
    }
}
var EUILayer;
(function (EUILayer) {
    //场景UI
    EUILayer[EUILayer["SceneLayer"] = 0] = "SceneLayer";
    //背景UI
    EUILayer[EUILayer["BackgroundLayer"] = 1] = "BackgroundLayer";
    //普通ui，多级窗口等
    EUILayer[EUILayer["NormalLayer"] = 2] = "NormalLayer";
    //信息ui
    EUILayer[EUILayer["InfoLayer"] = 3] = "InfoLayer";
    //弹窗提示
    EUILayer[EUILayer["TipLayer"] = 4] = "TipLayer";
    //顶层ui，场景加载
    EUILayer[EUILayer["TopLayer"] = 5] = "TopLayer";
})(EUILayer || (EUILayer = {}));
/**
 * 层级数据
 */
class UILayers {
    constructor() {
    }
    static set() {
        this._layers.set(EUILayer.SceneLayer, {
            type: EUILayer.SceneLayer,
            name: "SceneLayer",
            planeDistance: 1000,
            orderInLayer: 0
        });
        this._layers.set(EUILayer.BackgroundLayer, {
            type: EUILayer.BackgroundLayer,
            name: "BackgroundLayer",
            planeDistance: 900,
            orderInLayer: 1000
        });
        this._layers.set(EUILayer.NormalLayer, {
            type: EUILayer.NormalLayer,
            name: "NormalLayer",
            planeDistance: 800,
            orderInLayer: 2000
        });
        this._layers.set(EUILayer.InfoLayer, {
            type: EUILayer.NormalLayer,
            name: "InfoLayer",
            planeDistance: 700,
            orderInLayer: 3000
        });
        this._layers.set(EUILayer.TipLayer, {
            type: EUILayer.TipLayer,
            name: "TipLayer",
            planeDistance: 600,
            orderInLayer: 4000
        });
        this._layers.set(EUILayer.TopLayer, {
            type: EUILayer.TopLayer,
            name: "TopLayer",
            planeDistance: 500,
            orderInLayer: 5000
        });
    }
    /**
     * 获取层级数据
     * @param layer_type 层级定义
     */
    static get(layer_type) {
        return UILayers._layers.get(layer_type);
    }
    /**
     * 遍历
     * @param callback
     */
    static walk(callback) {
        this._layers.forEach((v) => {
            callback.runWith(v);
        });
    }
}
UILayers._layers = new Map();


/***/ }),

/***/ "./src/framework/ui/config/UIMessageNames.ts":
/*!***************************************************!*\
  !*** ./src/framework/ui/config/UIMessageNames.ts ***!
  \***************************************************/
/*! exports provided: UIMessageNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIMessageNames", function() { return UIMessageNames; });
class UIMessageNames {
}
//ui创建
UIMessageNames.UIFRAME_ON_WINDOW_CREATE = "UIFRAME_ON_WINDOW_CREATE";
//ui打开
UIMessageNames.UIFRAME_ON_WINDOW_OPEN = "UIFRAME_ON_WINDOW_OPEN";
//ui关闭
UIMessageNames.UIFRAME_ON_WINDOW_CLOSE = "UIFRAME_ON_WINDOW_CLOSE";
//ui销毁
UIMessageNames.UIFRAME_ON_WINDOW_DESTROY = "UIFRAME_ON_WINDOW_DESTROY";


/***/ }),

/***/ "./src/framework/ui/config/UIWindowNames.ts":
/*!**************************************************!*\
  !*** ./src/framework/ui/config/UIWindowNames.ts ***!
  \**************************************************/
/*! exports provided: UIWindowNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIWindowNames", function() { return UIWindowNames; });
var UIWindowNames;
(function (UIWindowNames) {
    /**
     * 加载界面
     */
    UIWindowNames[UIWindowNames["UILoading"] = 0] = "UILoading";
    /**
     * 登录
     */
    UIWindowNames[UIWindowNames["UILogin"] = 1] = "UILogin";
    /**
     * 主界面
     */
    UIWindowNames[UIWindowNames["UIHome"] = 2] = "UIHome";
    /**
     * 战斗主界面
     */
    UIWindowNames[UIWindowNames["UIBattleMain"] = 3] = "UIBattleMain";
})(UIWindowNames || (UIWindowNames = {}));


/***/ }),

/***/ "./src/framework/ui/util/UIUtil.ts":
/*!*****************************************!*\
  !*** ./src/framework/ui/util/UIUtil.ts ***!
  \*****************************************/
/*! exports provided: UIUtil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIUtil", function() { return UIUtil; });
/* harmony import */ var csharp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! csharp */ "csharp");
/* harmony import */ var csharp__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(csharp__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var puerts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! puerts */ "puerts");
/* harmony import */ var puerts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(puerts__WEBPACK_IMPORTED_MODULE_1__);


/**
 * ui查询工具
 */
class UIUtil {
    /**
     * 获取子节点
     * @param trans
     * @param index
     */
    static getChild(trans, index) {
        return trans.GetChild(index);
    }
    /**
     * 查组件
     * @param trans
     * @param ctype
     * @param path
     */
    static findComponent(trans, ctype, path) {
        let targetTrans = trans;
        if (path != null) {
            targetTrans = trans.Find(path);
        }
        if (targetTrans == null) {
            return null;
        }
        let cmp = targetTrans.GetComponent(ctype);
        if (cmp != null) {
            return cmp;
        }
        return targetTrans.GetComponentInChildren(ctype);
    }
    /**
     * 获取transform
     * @param trans
     * @param path
     */
    static findTrans(trans, path) {
        return trans.Find(path);
    }
    /**
     * 查询文本
     * @param trans
     * @param path
     */
    static findText(trans, path) {
        return this.findComponent(trans, Object(puerts__WEBPACK_IMPORTED_MODULE_1__["$typeof"])(csharp__WEBPACK_IMPORTED_MODULE_0__["UnityEngine"].UI.Text), path);
    }
    /**
     * 查询tmp文本
     * @param trans
     * @param path
     */
    static findTmpText(trans, path) {
        return this.findComponent(trans, Object(puerts__WEBPACK_IMPORTED_MODULE_1__["$typeof"])(csharp__WEBPACK_IMPORTED_MODULE_0__["TMPro"].TMP_Text), path);
    }
    /**
     * 查询图片
     * @param trans
     * @param path
     */
    static findImage(trans, path) {
        return this.findComponent(trans, Object(puerts__WEBPACK_IMPORTED_MODULE_1__["$typeof"])(csharp__WEBPACK_IMPORTED_MODULE_0__["UnityEngine"].UI.Image), path);
    }
    /**
     * 查需按钮
     * @param trans
     * @param path
     */
    static findButton(trans, path) {
        return this.findComponent(trans, Object(puerts__WEBPACK_IMPORTED_MODULE_1__["$typeof"])(csharp__WEBPACK_IMPORTED_MODULE_0__["UnityEngine"].UI.Button), path);
    }
    /**
     * 查询input
     * @param trans
     * @param path
     */
    static findInput(trans, path) {
        return this.findComponent(trans, Object(puerts__WEBPACK_IMPORTED_MODULE_1__["$typeof"])(csharp__WEBPACK_IMPORTED_MODULE_0__["UnityEngine"].UI.InputField), path);
    }
    /**
     * 查询slider
     * @param trans
     * @param path
     */
    static findSlider(trans, path) {
        return this.findComponent(trans, Object(puerts__WEBPACK_IMPORTED_MODULE_1__["$typeof"])(csharp__WEBPACK_IMPORTED_MODULE_0__["UnityEngine"].UI.Slider), path);
    }
    /**
     * 查询scrollRect
     * @param trans
     * @param path
     */
    static findScrollRect(trans, path) {
        return this.findComponent(trans, Object(puerts__WEBPACK_IMPORTED_MODULE_1__["$typeof"])(csharp__WEBPACK_IMPORTED_MODULE_0__["UnityEngine"].UI.ScrollRect), path);
    }
    /**
     * 获取toggle
     * @param trans
     * @param path
     */
    static findToggle(trans, path) {
        return this.findComponent(trans, Object(puerts__WEBPACK_IMPORTED_MODULE_1__["$typeof"])(csharp__WEBPACK_IMPORTED_MODULE_0__["UnityEngine"].UI.Toggle), path);
    }
    /**
     * 查询canvasGroup
     * @param trans
     * @param path
     */
    static findCanvasGroup(trans, path) {
        return this.findComponent(trans, Object(puerts__WEBPACK_IMPORTED_MODULE_1__["$typeof"])(csharp__WEBPACK_IMPORTED_MODULE_0__["UnityEngine"].CanvasGroup), path);
    }
}


/***/ }),

/***/ "./src/framework/unity/UnityTagsAndLayers.ts":
/*!***************************************************!*\
  !*** ./src/framework/unity/UnityTagsAndLayers.ts ***!
  \***************************************************/
/*! exports provided: EUnityLayers, EUnitySortingLayers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EUnityLayers", function() { return EUnityLayers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EUnitySortingLayers", function() { return EUnitySortingLayers; });
/**
 * unity侧layer定义映射到ts侧
 */
var EUnityLayers;
(function (EUnityLayers) {
    EUnityLayers[EUnityLayers["Default"] = 0] = "Default";
    /**
     * 透明特效
     */
    EUnityLayers[EUnityLayers["TransparentFX"] = 1] = "TransparentFX";
    /**
     * 忽略射线检测层
     */
    EUnityLayers[EUnityLayers["IgnoreRaycast"] = 2] = "IgnoreRaycast";
    /**
     * 水
     */
    EUnityLayers[EUnityLayers["Water"] = 4] = "Water";
    /**
     * ui层
     */
    EUnityLayers[EUnityLayers["UI"] = 5] = "UI";
})(EUnityLayers || (EUnityLayers = {}));
/**
 * unity侧sortingLayers定义
 */
var EUnitySortingLayers;
(function (EUnitySortingLayers) {
    /**
     * 默认层
     */
    EUnitySortingLayers["Default"] = "Default";
    /**
     * ui层
     */
    EUnitySortingLayers["UI"] = "UI";
})(EUnitySortingLayers || (EUnitySortingLayers = {}));


/***/ }),

/***/ "./src/framework/utils/EventDispatcher.ts":
/*!************************************************!*\
  !*** ./src/framework/utils/EventDispatcher.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventDispatcher; });
/* harmony import */ var _Handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Handler */ "./src/framework/utils/Handler.ts");

/*
* 可派发事件基类
* */
class EventDispatcher {
    hasListener(type) {
        let listener = this._events && this._events[type];
        return !!listener;
    }
    /**
     * 派发事件。
     * @param type    事件类型。
     * @param data    （可选）回调数据。<b>注意：</b>如果是需要传递多个参数 p1,p2,p3,...可以使用数组结构如：[p1,p2,p3,...] ；如果需要回调单个参数 p ，且 p 是一个数组，则需要使用结构如：[p]，其他的单个参数 p ，可以直接传入参数 p。
     * @return 此事件类型是否有侦听者，如果有侦听者则值为 true，否则值为 false。
     */
    event(type, data = null) {
        if (!this._events || !this._events[type])
            return false;
        let listeners = this._events[type];
        if (listeners.run) {
            if (listeners.once)
                delete this._events[type];
            data != null ? listeners.runWith(data) : listeners.run();
        }
        else {
            for (let i = 0, n = listeners.length; i < n; i++) {
                let listener = listeners[i];
                if (listener) {
                    (data != null) ? listener.runWith(data) : listener.run();
                }
                if (!listener || listener.once) {
                    listeners.splice(i, 1);
                    i--;
                    n--;
                }
            }
            if (listeners.length === 0 && this._events)
                delete this._events[type];
        }
        return true;
    }
    /**
     * 使用 EventDispatcher 对象注册指定类型的事件侦听器对象，以使侦听器能够接收事件通知。
     * @param type        事件的类型。
     * @param caller    事件侦听函数的执行域。
     * @param listener    事件侦听函数。
     * @param args        （可选）事件侦听函数的回调参数。
     * @return 此 EventDispatcher 对象。
     */
    on(type, caller, listener, args = null) {
        return this._createListener(type, caller, listener, args, false);
    }
    /**
     * 使用 EventDispatcher 对象注册指定类型的事件侦听器对象，以使侦听器能够接收事件通知，此侦听事件响应一次后自动移除。
     * @param type        事件的类型。
     * @param caller    事件侦听函数的执行域。
     * @param listener    事件侦听函数。
     * @param args        （可选）事件侦听函数的回调参数。
     * @return 此 EventDispatcher 对象。
     */
    once(type, caller, listener, args = null) {
        return this._createListener(type, caller, listener, args, true);
    }
    /**@internal */
    _createListener(type, caller, listener, args, once, offBefore = true) {
        //移除之前相同的监听
        offBefore && this.off(type, caller, listener, once);
        //使用对象池进行创建回收
        let handler = EventHandler.create(caller || this, listener, args, once);
        this._events || (this._events = {});
        let events = this._events;
        //默认单个，每个对象只有多个监听才用数组，节省一个数组的消耗
        if (!events[type])
            events[type] = handler;
        else {
            if (!events[type].run)
                events[type].push(handler);
            else
                events[type] = [events[type], handler];
        }
        return this;
    }
    /**
     * 从 EventDispatcher 对象中删除侦听器。
     * @param type        事件的类型。
     * @param caller    事件侦听函数的执行域。
     * @param listener    事件侦听函数。
     * @param onceOnly    （可选）如果值为 true ,则只移除通过 once 方法添加的侦听器。
     * @return 此 EventDispatcher 对象。
     */
    off(type, caller, listener, onceOnly = false) {
        if (!this._events || !this._events[type])
            return this;
        let listeners = this._events[type];
        if (listeners != null) {
            if (listeners.run) {
                if ((!caller || listeners.caller === caller) && (listener == null || listeners.method === listener) && (!onceOnly || listeners.once)) {
                    delete this._events[type];
                    listeners.recover();
                }
            }
            else {
                let count = 0;
                let n = listeners.length;
                for (let i = 0; i < n; i++) {
                    let item = listeners[i];
                    if (!item) {
                        count++;
                        continue;
                    }
                    if (item && (!caller || item.caller === caller) && (listener == null || item.method === listener) && (!onceOnly || item.once)) {
                        count++;
                        listeners[i] = null;
                        item.recover();
                    }
                }
                //如果全部移除，则删除索引
                if (count === n)
                    delete this._events[type];
            }
        }
        return this;
    }
    /**
     * 从 EventDispatcher 对象中删除指定事件类型的所有侦听器。
     * @param type    （可选）事件类型，如果值为 null，则移除本对象所有类型的侦听器。
     * @return 此 EventDispatcher 对象。
     */
    offAll(type = null) {
        let events = this._events;
        if (!events)
            return this;
        if (type) {
            this._recoverHandlers(events[type]);
            delete events[type];
        }
        else {
            for (let name in events) {
                this._recoverHandlers(events[name]);
            }
            this._events = null;
        }
        return this;
    }
    /**
     * 移除caller为target的所有事件监听
     * @param    caller caller对象
     */
    offAllCaller(caller) {
        if (caller && this._events) {
            for (let name in this._events) {
                this.off(name, caller, null);
            }
        }
        return this;
    }
    _recoverHandlers(arr) {
        if (!arr)
            return;
        if (arr.run) {
            arr.recover();
        }
        else {
            for (let i = arr.length - 1; i > -1; i--) {
                if (arr[i]) {
                    arr[i].recover();
                    arr[i] = null;
                }
            }
        }
    }
}
/**@private */
class EventHandler extends _Handler__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(caller, method, args, once) {
        super(caller, method, args, once);
    }
    /**
     * @override
     */
    recover() {
        if (this._id > 0) {
            this._id = 0;
            EventHandler._pool.push(this.clear());
        }
    }
    /**
     * 从对象池内创建一个Handler，默认会执行一次回收，如果不需要自动回收，设置once参数为false。
     * @param caller    执行域(this)。
     * @param method    回调方法。
     * @param args        （可选）携带的参数。
     * @param once        （可选）是否只执行一次，如果为true，回调后执行recover()进行回收，默认为true。
     * @return 返回创建的handler实例。
     */
    static create(caller, method, args = null, once = true) {
        if (EventHandler._pool.length)
            return EventHandler._pool.pop().setTo(caller, method, args, once);
        return new EventHandler(caller, method, args, once);
    }
}
/**@private handler对象池*/
EventHandler._pool = [];


/***/ }),

/***/ "./src/framework/utils/Handler.ts":
/*!****************************************!*\
  !*** ./src/framework/utils/Handler.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Handler; });
class Handler {
    /**
     * 根据指定的属性值，创建一个 <code>Handler</code> 类的实例。
     * @param    caller 执行域。
     * @param    method 处理函数。
     * @param    args 函数参数。
     * @param    once 是否只执行一次。
     */
    constructor(caller = null, method = null, args, once = false) {
        this.once = false;
        this._id = 0;
        this.set(caller, method, args, once);
    }
    /*
    * @return 返回Handler实例
    * */
    set(caller, method, args, once = false) {
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
    run() {
        if (this.method == null)
            return null;
        let id = this._id;
        let result = this.method.apply(this.caller, this.args);
        this._id === id && this.once && this.recover();
        return result;
    }
    /*
    * 带参数的执行 自定义参数在后
    * */
    runWith(data) {
        if (this.method == null)
            return null;
        let id = this._id;
        let result;
        if (data == null) {
            result = this.method.apply(this.caller, this.args);
        }
        else if (!this.args && !data.unshift) {
            result = this.method.call(this.caller, data);
        }
        else if (this.args) {
            result = this.method.apply(this.caller, this.args.concat(data));
        }
        else {
            result = this.method.apply(this.caller, data);
        }
        this._id === id && this.once && this.recover();
        return result;
    }
    /*
    * 清理对象
    * */
    clear() {
        this.caller = null;
        this.method = null;
        this.args = null;
        return this;
    }
    /*
    * 回收对象
    * */
    recover() {
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
    static create(caller, method, args = null, once = true) {
        if (Handler._pool.length)
            return Handler._pool.pop().set(caller, method, args, once);
        return new Handler(caller, method, args, once);
    }
}
/*资源池*/
Handler._pool = [];
Handler._guid = 1;


/***/ }),

/***/ "./src/framework/utils/StringUtil.ts":
/*!*******************************************!*\
  !*** ./src/framework/utils/StringUtil.ts ***!
  \*******************************************/
/*! exports provided: string */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "string", function() { return string; });
/**
* @author by passion
* @create time 2021/6/1
**/
//空字符串
const empty = "";
let string = {
    /**
     * 字符串是否是null或者空字符串
     * @param s
     * @constructor
     */
    IsNullOrEmpty: function (s) {
        return s == null || s == empty;
    },
    /**
     * 空字符串
     */
    get empty() {
        return empty;
    }
};



/***/ }),

/***/ "./src/framework/utils/timer/CallLater.ts":
/*!************************************************!*\
  !*** ./src/framework/utils/timer/CallLater.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CallLater; });
/* harmony import */ var _UnityTs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../UnityTs */ "./src/framework/UnityTs.ts");

/**
 * 延迟一帧执行
 */
class CallLater {
    constructor() {
        this._pool = [];
        this._map = {};
        this._laters = [];
    }
    /**
     * @internal
     * 帧循环处理函数。
     */
    _update() {
        let laters = this._laters;
        let len = laters.length;
        if (len > 0) {
            for (let i = 0, n = len - 1; i <= n; i++) {
                let handler = laters[i];
                this._map[handler.key] = null;
                if (handler.method !== null) {
                    handler.run();
                    handler.clear();
                }
                this._pool.push(handler);
                i === n && (n = laters.length - 1);
            }
            laters.length = 0;
        }
    }
    /** @private */
    _getHandler(caller, method) {
        var cid = caller ? caller.$_GID || (caller.$_GID = _UnityTs__WEBPACK_IMPORTED_MODULE_0__["default"].utils.getGID()) : 0;
        var mid = method.$_TID || (method.$_TID = (CallLater._mid++));
        return this._map[cid + '.' + mid];
    }
    /**
     * 延迟执行。
     * @param	caller 执行域(this)。
     * @param	method 定时器回调函数。
     * @param	args 回调参数。
     */
    callLater(caller, method, args = null) {
        if (this._getHandler(caller, method) == null) {
            let handler;
            if (this._pool.length)
                handler = this._pool.pop();
            else
                handler = new LaterHandler();
            //设置属性
            handler.caller = caller;
            handler.method = method;
            handler.args = args;
            //索引handler
            var cid = caller ? caller.$_GID : 0;
            var mid = method["$_TID"];
            handler.key = cid + '.' + mid;
            this._map[handler.key] = handler;
            //插入队列
            this._laters.push(handler);
        }
    }
    /**
     * 立即执行 callLater 。
     * @param	caller 执行域(this)。
     * @param	method 定时器回调函数。
     */
    runCallLater(caller, method) {
        var handler = this._getHandler(caller, method);
        if (handler && handler.method != null) {
            this._map[handler.key] = null;
            handler.run();
            handler.clear();
        }
    }
}
CallLater.I = new CallLater();
CallLater._mid = 1;
/** @private */
class LaterHandler {
    clear() {
        this.caller = null;
        this.method = null;
        this.args = null;
    }
    run() {
        var caller = this.caller;
        if (caller && caller.destroyed)
            return this.clear();
        var method = this.method;
        var args = this.args;
        if (method == null)
            return;
        args ? method.apply(caller, args) : method.call(caller);
    }
}


/***/ }),

/***/ "./src/framework/utils/timer/Timer.ts":
/*!********************************************!*\
  !*** ./src/framework/utils/timer/Timer.ts ***!
  \********************************************/
/*! exports provided: Timer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Timer", function() { return Timer; });
/* harmony import */ var _UnityTs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../UnityTs */ "./src/framework/UnityTs.ts");
/* harmony import */ var _CallLater__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CallLater */ "./src/framework/utils/timer/CallLater.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/*
*
* 时钟管理器 使用Utf.timer访问
* */


class InnerTimer {
    constructor(autoActive = true) {
        this.scale = 1;
        this.currTimer = Date.now();
        this.currFrame = 0;
        /*两帧之间的时间间隔，单位：毫秒*/
        this._delta = 0;
        this._lastTimer = Date.now();
        this._map = [];
        this._handlers = [];
        this._temp = [];
        this._count = 0;
        autoActive && InnerTimer.gSysTimer && InnerTimer.gSysTimer.frameLoop(1, this, this._update);
    }
    /* 获取两帧之间的时间间隔，单位毫秒*/
    get delta() {
        return this._delta;
    }
    /* 帧循环*/
    _update() {
        if (this.scale <= 0) {
            this._lastTimer = Date.now();
            this._delta = 0;
            return;
        }
        let frame = this.currFrame = this.currFrame + this.scale;
        let now = Date.now();
        let awake = (now - this._lastTimer) > 30000;
        this._delta = (now - this._lastTimer) * this.scale;
        let timer = this.currTimer = this.currTimer + this._delta;
        this._lastTimer = now;
        let handlers = this._handlers;
        this._count = 0;
        for (let i = 0, n = handlers.length; i < n; i++) {
            let handler = handlers[i];
            if (handler.method !== null) {
                let t = handler.useFrame ? frame : timer;
                if (t >= handler.exeTime) {
                    if (handler.repeat) {
                        if (!handler.jumpFrame || awake) {
                            handler.exeTime += handler.delay;
                            handler.run(false);
                            if (t > handler.exeTime) {
                                handler.exeTime += Math.ceil((t - handler.exeTime) / handler.delay) * handler.delay;
                            }
                        }
                        else {
                            // 一帧可多次执行的情况。
                            while (t >= handler.exeTime) {
                                handler.exeTime += handler.delay;
                                handler.run(false);
                            }
                        }
                    }
                    else {
                        handler.run(true);
                    }
                }
            }
            else {
                this._count++;
            }
        }
        if (this._count > 30 || frame % 200 === 0)
            this._clearHandlers();
    }
    /*整理handlers数组*/
    _clearHandlers() {
        let handlers = this._handlers;
        for (let i = 0, n = handlers.length; i < n; i++) {
            let handler = handlers[i];
            if (handler.method !== null)
                this._temp.push(handler);
            else
                this._recoverHandler(handler);
        }
        this._handlers = this._temp;
        handlers.length = 0;
        this._temp = handlers;
    }
    /*回收handler*/
    _recoverHandler(handler) {
        if (this._map[handler.key] == handler)
            this._map[handler.key] = null;
        handler.clear();
        InnerTimer._pool.push(handler);
    }
    /* 创建TimerHandler实例*/
    _create(useFrame, repeat, delay, caller, method, args, coverBefore) {
        if (!delay) {
            method.apply(caller, args);
            return null;
        }
        let handler;
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
    _getHandler(caller, method) {
        let cid = caller ? caller.$_GID || (caller.$_GID = _UnityTs__WEBPACK_IMPORTED_MODULE_0__["default"].utils.getGID()) : 0;
        let mid = method.$_TID || (method.$_TID = (InnerTimer._mid++) * 100000);
        return this._map[cid + mid];
    }
    /*
    * 索引handler
    * */
    _indexHandler(handler) {
        let caller = handler.caller;
        let method = handler.method;
        let cid = caller ? caller.$_GID || (caller.$_GID = _UnityTs__WEBPACK_IMPORTED_MODULE_0__["default"].utils.getGID()) : 0;
        let mid = method.$_TID || (method.$_TID = (InnerTimer._mid++) * 100000);
        handler.key = cid + mid;
        this._map[handler.key] = handler;
    }
    /**
     * 等待毫秒
     * @param delay
     */
    wait(delay) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(resolve => {
                this.once(delay, this, () => {
                    resolve();
                }, null, true);
            });
        });
    }
    /**
     * 等待帧
     * @param delay
     */
    waitFrame(delay) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(resolve => {
                this.frameOnce(delay, this, () => {
                    resolve();
                }, null, true);
            });
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
    once(delay, caller, method, args = null, coverBefore = true) {
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
    loop(delay, caller, method, args = null, coverBefore = true, jumpFrame = false) {
        const handler = this._create(false, true, delay, caller, method, args, coverBefore);
        if (handler)
            handler.jumpFrame = jumpFrame;
    }
    /**
     * 定时执行一次(基于帧率)。
     * @param    delay    延迟几帧(单位为帧)。
     * @param    caller    执行域(this)。
     * @param    method    定时器回调函数。
     * @param    args    回调参数。
     * @param    coverBefore    是否覆盖之前的延迟执行，默认为 true 。
     */
    frameOnce(delay, caller, method, args = null, coverBefore = true) {
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
    frameLoop(delay, caller, method, args = null, coverBefore = true) {
        this._create(true, true, delay, caller, method, args, coverBefore);
    }
    /** 返回统计信息。*/
    toString() {
        return " handlers:" + this._handlers.length + " pool:" + InnerTimer._pool.length;
    }
    /**
     * 清理定时器。
     * @param    caller 执行域(this)。
     * @param    method 定时器回调函数。
     */
    clear(caller, method) {
        let handler = this._getHandler(caller, method);
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
    clearAll(caller) {
        if (!caller)
            return;
        let i = 0;
        const n = this._handlers.length;
        for (; i < n; i++) {
            const handler = this._handlers[i];
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
    runTimer(caller, method) {
        const handler = this._getHandler(caller, method);
        if (handler && handler.method != null) {
            this._map[handler.key] = null;
            handler.run(true);
        }
    }
    /**
     * 暂停时钟
     */
    pause() {
        this.scale = 0;
    }
    /**
     * 恢复时钟
     */
    resume() {
        this.scale = 1;
    }
    //-----------延迟执行
    /**
     * 延迟执行。
     * @param    caller 执行域(this)。
     * @param    method 定时器回调函数。
     * @param    args 回调参数。
     */
    callLater(caller, method, args) {
        _CallLater__WEBPACK_IMPORTED_MODULE_1__["default"].I.callLater(caller, method, args);
    }
    /**
     * 立即执行 callLater 。
     * @param    caller 执行域(this)。
     * @param    method 定时器回调函数。
     */
    runCallLater(caller, method) {
        _CallLater__WEBPACK_IMPORTED_MODULE_1__["default"].I.runCallLater(caller, method);
    }
}
/*timer入口*/
InnerTimer.gSysTimer = null;
/*对象池*/
InnerTimer._pool = [];
InnerTimer._mid = 1;
/* 私有timer函数类*/
class TimerHandler {
    clear() {
        this.caller = null;
        this.method = null;
        this.args = null;
    }
    run(withClear) {
        let caller = this.caller;
        if (caller && caller.destroyed)
            return this.clear();
        let method = this.method;
        let args = this.args;
        withClear && this.clear();
        if (method == null)
            return;
        args ? method.apply(caller, args) : method.call(caller);
    }
}
/*
*
* timer管理器 如果需要新增timer，在这里新建实例，一般一个就够用了。
* */
class Timer {
    //私有构造函数
    constructor() {
    }
    /**
     * 普通timer
     */
    static get timer() {
        return this._timer;
    }
    /**
     * 后置timer
     */
    static get lateTimer() {
        return this._lateTimer;
    }
    static init() {
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
Timer._inited = false;
/**
 * cs侧来更新ts的timer
 */
function uts_timerUpdate() {
    Timer._timer._update();
    Timer._lateTimer._update();
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./src/game/language/LanguageEvents.ts":
/*!*********************************************!*\
  !*** ./src/game/language/LanguageEvents.ts ***!
  \*********************************************/
/*! exports provided: LanguageEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageEvents", function() { return LanguageEvents; });
let LanguageEvents = {
    //多语言更新完成
    ON_LANGUAGE_UPDATE_COMPLETE: "ON_LANGUAGE_UPDATE_COMPLETE",
};



/***/ }),

/***/ "./src/game/language/LanguageManager.ts":
/*!**********************************************!*\
  !*** ./src/game/language/LanguageManager.ts ***!
  \**********************************************/
/*! exports provided: LanguageManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageManager", function() { return LanguageManager; });
/* harmony import */ var _framework_utils_StringUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../framework/utils/StringUtil */ "./src/framework/utils/StringUtil.ts");
/* harmony import */ var csharp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! csharp */ "csharp");
/* harmony import */ var csharp__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(csharp__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _framework_resource_ResourceManager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../framework/resource/ResourceManager */ "./src/framework/resource/ResourceManager.ts");
/* harmony import */ var puerts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! puerts */ "puerts");
/* harmony import */ var puerts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(puerts__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _framework_utils_EventDispatcher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../framework/utils/EventDispatcher */ "./src/framework/utils/EventDispatcher.ts");
/* harmony import */ var _LanguageEvents__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./LanguageEvents */ "./src/game/language/LanguageEvents.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};






/**
 * 多语言组件
 */
class LanguageManager extends _framework_utils_EventDispatcher__WEBPACK_IMPORTED_MODULE_4__["default"] {
    initialize() {
        this._contentMap = new Map();
        this._updating = false;
        this._languageConfig = null;
    }
    /**
     * 通过配置档字段获取字符串
     * @param key
     */
    getStringByConfig(key) {
        let newKey = `AllConfLanguage_mKeyValue_${key}`;
        return this.getStringByFullKey(newKey);
    }
    /**
     * 通过自定义id获取字符串
     * @param key
     */
    getStringByShowID(key) {
        let newKey = `ShowMessage_mMessage_${key}`;
        return this.getStringByFullKey(newKey);
    }
    /**
     * 通过全量key获取字符串
     * @param key
     */
    getStringByFullKey(key) {
        let value = this._contentMap.get(key);
        if (_framework_utils_StringUtil__WEBPACK_IMPORTED_MODULE_0__["string"].IsNullOrEmpty(value)) {
            console.error(`LanguageManager::获取字符串错误,key->${key}`);
            return _framework_utils_StringUtil__WEBPACK_IMPORTED_MODULE_0__["string"].empty;
        }
        else {
            return value;
        }
    }
    /**
     * 协程更新
     * @param config
     */
    updateAwait(config) {
        return __awaiter(this, void 0, void 0, function* () {
            this._updating = true;
            this._languageConfig = config;
            let path = `config/language/AllLanguage${config.fileSuffix}.csv`;
            let asset = yield _framework_resource_ResourceManager__WEBPACK_IMPORTED_MODULE_2__["ResourceManager"].Instance.loadAssetAwait(path, Object(puerts__WEBPACK_IMPORTED_MODULE_3__["$typeof"])(csharp__WEBPACK_IMPORTED_MODULE_1__["UnityEngine"].TextAsset));
            this._parseCSV(asset);
            this._updating = false;
            this.event(_LanguageEvents__WEBPACK_IMPORTED_MODULE_5__["LanguageEvents"].ON_LANGUAGE_UPDATE_COMPLETE);
        });
    }
    /**
     * 解析字符串
     * @param asset
     * @private
     */
    _parseCSV(asset) {
        if (asset == null) {
            console.error("update language fail,text asset is null");
            return;
        }
        this._contentMap.clear();
        let array = asset.text.split("\n\r");
        let len = array.length;
        for (let i = 0; i < len; i++) {
            let kv = array[i].split("\t");
            if (kv.length != 2) {
                console.error(`language asset parse error,len not equal 2,kv:${array[i]}`);
                continue;
            }
            this._contentMap.set(kv[0], kv[1]);
        }
    }
}
LanguageManager.Instance = new LanguageManager();


/***/ }),

/***/ "./src/game/module/home/HomeModule.ts":
/*!********************************************!*\
  !*** ./src/game/module/home/HomeModule.ts ***!
  \********************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _framework_module_BaseModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../framework/module/BaseModule */ "./src/framework/module/BaseModule.ts");

/**
 * 主界面模块
 * @author by passion
 * @create time 2021/6/9 12:05
**/
class HomeModule extends _framework_module_BaseModule__WEBPACK_IMPORTED_MODULE_0__["BaseModule"] {
}


/***/ }),

/***/ "./src/game/scenes/config/SceneConfig.ts":
/*!***********************************************!*\
  !*** ./src/game/scenes/config/SceneConfig.ts ***!
  \***********************************************/
/*! exports provided: SceneConfig, SceneConfigs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SceneConfig", function() { return SceneConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SceneConfigs", function() { return SceneConfigs; });
/* harmony import */ var _framework_ui_config_UIWindowNames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../framework/ui/config/UIWindowNames */ "./src/framework/ui/config/UIWindowNames.ts");
/* harmony import */ var _home_HomeScene__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../home/HomeScene */ "./src/game/scenes/home/HomeScene.ts");


/**
 * 场景配置
 */
class SceneConfig {
}
/**
 * 启动场景
 */
let launch = {
    Level: 0,
    Name: "LaunchScene",
    Class: null,
    Loading: _framework_ui_config_UIWindowNames__WEBPACK_IMPORTED_MODULE_0__["UIWindowNames"].UILoading,
};
/**
 * 加载场景
 */
let loading = {
    Level: 1,
    Name: "LoadingScene",
    Class: null,
    Loading: _framework_ui_config_UIWindowNames__WEBPACK_IMPORTED_MODULE_0__["UIWindowNames"].UILoading,
};
/**
 * 加载场景
 */
let login = {
    Level: 1,
    Name: "LoginScene",
    Class: null,
    Loading: _framework_ui_config_UIWindowNames__WEBPACK_IMPORTED_MODULE_0__["UIWindowNames"].UILoading,
};
/**
 * 主界场景
 */
let home = {
    Level: 2,
    Name: "HomeScene",
    Class: _home_HomeScene__WEBPACK_IMPORTED_MODULE_1__["HomeScene"],
    Loading: _framework_ui_config_UIWindowNames__WEBPACK_IMPORTED_MODULE_0__["UIWindowNames"].UILoading,
};
/**
 * 战斗场景
 */
let battle = {
    Level: 3,
    Name: "BattleScene",
    Class: null,
    Loading: _framework_ui_config_UIWindowNames__WEBPACK_IMPORTED_MODULE_0__["UIWindowNames"].UILoading,
};
let SceneConfigs = {
    //加载场景 通用
    LoadingScene: loading,
    LaunchScene: launch,
    HomeScene: home,
    BattleScene: battle,
};



/***/ }),

/***/ "./src/game/scenes/home/HomeScene.ts":
/*!*******************************************!*\
  !*** ./src/game/scenes/home/HomeScene.ts ***!
  \*******************************************/
/*! exports provided: HomeScene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeScene", function() { return HomeScene; });
/* harmony import */ var _framework_scene_base_BaseScene__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../framework/scene/base/BaseScene */ "./src/framework/scene/base/BaseScene.ts");
/* harmony import */ var _framework_module_ModuleCenter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../framework/module/ModuleCenter */ "./src/framework/module/ModuleCenter.ts");
/* harmony import */ var _module_home_HomeModule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../module/home/HomeModule */ "./src/game/module/home/HomeModule.ts");



/**
 * 主界面场景
 * @author by passion
 * @create time 2021/6/9 12:00
 **/
class HomeScene extends _framework_scene_base_BaseScene__WEBPACK_IMPORTED_MODULE_0__["BaseScene"] {
    OnEnter() {
        super.OnEnter();
        _framework_module_ModuleCenter__WEBPACK_IMPORTED_MODULE_1__["ModuleCenter"].Instance.add(_module_home_HomeModule__WEBPACK_IMPORTED_MODULE_2__["HomeModule"]);
    }
    OnLeave() {
        _framework_module_ModuleCenter__WEBPACK_IMPORTED_MODULE_1__["ModuleCenter"].Instance.remove(_module_home_HomeModule__WEBPACK_IMPORTED_MODULE_2__["HomeModule"]);
        super.OnLeave();
    }
}


/***/ }),

/***/ "./src/game/ui/uiBattle/UIBattleConfig.ts":
/*!************************************************!*\
  !*** ./src/game/ui/uiBattle/UIBattleConfig.ts ***!
  \************************************************/
/*! exports provided: UIBattleConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIBattleConfig", function() { return UIBattleConfig; });
/* harmony import */ var _framework_ui_config_UIWindowNames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../framework/ui/config/UIWindowNames */ "./src/framework/ui/config/UIWindowNames.ts");
/* harmony import */ var _framework_ui_config_UILayers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../framework/ui/config/UILayers */ "./src/framework/ui/config/UILayers.ts");
/* harmony import */ var _framework_ui_config_EUIType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/ui/config/EUIType */ "./src/framework/ui/config/EUIType.ts");
/* harmony import */ var _uiBattle_UIBattleModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./uiBattle/UIBattleModel */ "./src/game/ui/uiBattle/uiBattle/UIBattleModel.ts");
/* harmony import */ var _uiBattle_UIBattleCtrl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./uiBattle/UIBattleCtrl */ "./src/game/ui/uiBattle/uiBattle/UIBattleCtrl.ts");
/* harmony import */ var _uiBattle_UIBattleView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./uiBattle/UIBattleView */ "./src/game/ui/uiBattle/uiBattle/UIBattleView.ts");






/**
 * battle场景ui配置
 * @author by passion
 * @create time 2021/6/9 14:06
**/
let UIBattleMain = {
    name: _framework_ui_config_UIWindowNames__WEBPACK_IMPORTED_MODULE_0__["UIWindowNames"].UIBattleMain,
    layer: _framework_ui_config_UILayers__WEBPACK_IMPORTED_MODULE_1__["EUILayer"].NormalLayer,
    model: _uiBattle_UIBattleModel__WEBPACK_IMPORTED_MODULE_3__["UIBattleModel"],
    ctrl: _uiBattle_UIBattleCtrl__WEBPACK_IMPORTED_MODULE_4__["UIBattleCtrl"],
    view: _uiBattle_UIBattleView__WEBPACK_IMPORTED_MODULE_5__["UIBattleView"],
    prefabPath: "",
    components: [],
    type: _framework_ui_config_EUIType__WEBPACK_IMPORTED_MODULE_2__["EUIType"].View,
};
/**
 * 配置导出
 */
let UIBattleConfig = {
    UIBattleMain: UIBattleMain
};



/***/ }),

/***/ "./src/game/ui/uiBattle/uiBattle/UIBattleCtrl.ts":
/*!*******************************************************!*\
  !*** ./src/game/ui/uiBattle/uiBattle/UIBattleCtrl.ts ***!
  \*******************************************************/
/*! exports provided: UIBattleCtrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIBattleCtrl", function() { return UIBattleCtrl; });
/* harmony import */ var _framework_ui_base_UIBaseCtrl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../framework/ui/base/UIBaseCtrl */ "./src/framework/ui/base/UIBaseCtrl.ts");

class UIBattleCtrl extends _framework_ui_base_UIBaseCtrl__WEBPACK_IMPORTED_MODULE_0__["default"] {
    onCreate() {
        super.onCreate();
    }
    onDestroy() {
        super.onDestroy();
    }
}


/***/ }),

/***/ "./src/game/ui/uiBattle/uiBattle/UIBattleModel.ts":
/*!********************************************************!*\
  !*** ./src/game/ui/uiBattle/uiBattle/UIBattleModel.ts ***!
  \********************************************************/
/*! exports provided: UIBattleModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIBattleModel", function() { return UIBattleModel; });
/* harmony import */ var _framework_ui_base_UIBaseModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../framework/ui/base/UIBaseModel */ "./src/framework/ui/base/UIBaseModel.ts");

class UIBattleModel extends _framework_ui_base_UIBaseModel__WEBPACK_IMPORTED_MODULE_0__["default"] {
    onCreate() {
        super.onCreate();
    }
    onDestroy() {
        super.onDestroy();
    }
}


/***/ }),

/***/ "./src/game/ui/uiBattle/uiBattle/UIBattleView.ts":
/*!*******************************************************!*\
  !*** ./src/game/ui/uiBattle/uiBattle/UIBattleView.ts ***!
  \*******************************************************/
/*! exports provided: UIBattleView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIBattleView", function() { return UIBattleView; });
/* harmony import */ var _framework_ui_base_UIBaseView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../framework/ui/base/UIBaseView */ "./src/framework/ui/base/UIBaseView.ts");

class UIBattleView extends _framework_ui_base_UIBaseView__WEBPACK_IMPORTED_MODULE_0__["UIBaseView"] {
    onCreate() {
        super.onCreate();
    }
    onDestroy() {
        super.onDestroy();
    }
}


/***/ }),

/***/ "./src/game/ui/uiHome/UIHomeConfig.ts":
/*!********************************************!*\
  !*** ./src/game/ui/uiHome/UIHomeConfig.ts ***!
  \********************************************/
/*! exports provided: UIHomeConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIHomeConfig", function() { return UIHomeConfig; });
/* harmony import */ var _framework_ui_config_UIWindowNames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../framework/ui/config/UIWindowNames */ "./src/framework/ui/config/UIWindowNames.ts");
/* harmony import */ var _framework_ui_config_UILayers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../framework/ui/config/UILayers */ "./src/framework/ui/config/UILayers.ts");
/* harmony import */ var _framework_ui_config_EUIType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../framework/ui/config/EUIType */ "./src/framework/ui/config/EUIType.ts");
/* harmony import */ var _uiHome_UIHomeCtrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./uiHome/UIHomeCtrl */ "./src/game/ui/uiHome/uiHome/UIHomeCtrl.ts");
/* harmony import */ var _uiHome_UIHomeView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./uiHome/UIHomeView */ "./src/game/ui/uiHome/uiHome/UIHomeView.ts");
/* harmony import */ var _uiHome_UIHomeModel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./uiHome/UIHomeModel */ "./src/game/ui/uiHome/uiHome/UIHomeModel.ts");






/**
 * home场景界面配置
 * @author by passion
 * @create time 2021/6/9 14:06
**/
/**
 * 这里定义所有Home场景中使用的UI配置，
 */
let UIHome = {
    name: _framework_ui_config_UIWindowNames__WEBPACK_IMPORTED_MODULE_0__["UIWindowNames"].UIHome,
    layer: _framework_ui_config_UILayers__WEBPACK_IMPORTED_MODULE_1__["EUILayer"].NormalLayer,
    model: _uiHome_UIHomeModel__WEBPACK_IMPORTED_MODULE_5__["UIHomeModel"],
    ctrl: _uiHome_UIHomeCtrl__WEBPACK_IMPORTED_MODULE_3__["UIHomeCtrl"],
    view: _uiHome_UIHomeView__WEBPACK_IMPORTED_MODULE_4__["UIHomeView"],
    prefabPath: "",
    components: [],
    type: _framework_ui_config_EUIType__WEBPACK_IMPORTED_MODULE_2__["EUIType"].View,
};
/**
 * 配置导出
 */
let UIHomeConfig = {
    UIHome: UIHome
};



/***/ }),

/***/ "./src/game/ui/uiHome/uiHome/UIHomeCtrl.ts":
/*!*************************************************!*\
  !*** ./src/game/ui/uiHome/uiHome/UIHomeCtrl.ts ***!
  \*************************************************/
/*! exports provided: UIHomeCtrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIHomeCtrl", function() { return UIHomeCtrl; });
/* harmony import */ var _framework_ui_base_UIBaseCtrl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../framework/ui/base/UIBaseCtrl */ "./src/framework/ui/base/UIBaseCtrl.ts");

/**
 * 测试主场景界面
 */
class UIHomeCtrl extends _framework_ui_base_UIBaseCtrl__WEBPACK_IMPORTED_MODULE_0__["default"] {
    onCreate() {
        super.onCreate();
    }
    onDestroy() {
        super.onDestroy();
    }
}


/***/ }),

/***/ "./src/game/ui/uiHome/uiHome/UIHomeModel.ts":
/*!**************************************************!*\
  !*** ./src/game/ui/uiHome/uiHome/UIHomeModel.ts ***!
  \**************************************************/
/*! exports provided: UIHomeModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIHomeModel", function() { return UIHomeModel; });
/* harmony import */ var _framework_ui_base_UIBaseModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../framework/ui/base/UIBaseModel */ "./src/framework/ui/base/UIBaseModel.ts");

class UIHomeModel extends _framework_ui_base_UIBaseModel__WEBPACK_IMPORTED_MODULE_0__["default"] {
    onCreate() {
        super.onCreate();
    }
    onDestroy() {
        super.onDestroy();
    }
}


/***/ }),

/***/ "./src/game/ui/uiHome/uiHome/UIHomeView.ts":
/*!*************************************************!*\
  !*** ./src/game/ui/uiHome/uiHome/UIHomeView.ts ***!
  \*************************************************/
/*! exports provided: UIHomeView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIHomeView", function() { return UIHomeView; });
/* harmony import */ var _framework_ui_base_UIBaseView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../framework/ui/base/UIBaseView */ "./src/framework/ui/base/UIBaseView.ts");

class UIHomeView extends _framework_ui_base_UIBaseView__WEBPACK_IMPORTED_MODULE_0__["UIBaseView"] {
    onCreate() {
        super.onCreate();
    }
    onDestroy() {
        super.onDestroy();
    }
}


/***/ }),

/***/ "./src/game/ui/uiLoading/UILoadingConfig.ts":
/*!**************************************************!*\
  !*** ./src/game/ui/uiLoading/UILoadingConfig.ts ***!
  \**************************************************/
/*! exports provided: UILoadingConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UILoadingConfig", function() { return UILoadingConfig; });
/* harmony import */ var _framework_ui_config_UIWindowNames__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../framework/ui/config/UIWindowNames */ "./src/framework/ui/config/UIWindowNames.ts");
/* harmony import */ var _framework_ui_config_UILayers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../framework/ui/config/UILayers */ "./src/framework/ui/config/UILayers.ts");
/* harmony import */ var _uiLoading_UILoadingModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./uiLoading/UILoadingModel */ "./src/game/ui/uiLoading/uiLoading/UILoadingModel.ts");
/* harmony import */ var _uiLoading_UILoadingCtrl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./uiLoading/UILoadingCtrl */ "./src/game/ui/uiLoading/uiLoading/UILoadingCtrl.ts");
/* harmony import */ var _uiLoading_UILoadingView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./uiLoading/UILoadingView */ "./src/game/ui/uiLoading/uiLoading/UILoadingView.ts");
/* harmony import */ var _framework_ui_config_EUIType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../framework/ui/config/EUIType */ "./src/framework/ui/config/EUIType.ts");






/**
 * loading场景ui配置
 * @author by passion
 * @create time 2021/6/9 14:07
 **/
/**
 * 通用加载界面
 */
let UILoading = {
    name: _framework_ui_config_UIWindowNames__WEBPACK_IMPORTED_MODULE_0__["UIWindowNames"].UILoading,
    layer: _framework_ui_config_UILayers__WEBPACK_IMPORTED_MODULE_1__["EUILayer"].TopLayer,
    model: _uiLoading_UILoadingModel__WEBPACK_IMPORTED_MODULE_2__["UILoadingModel"],
    ctrl: _uiLoading_UILoadingCtrl__WEBPACK_IMPORTED_MODULE_3__["UILoadingCtrl"],
    view: _uiLoading_UILoadingView__WEBPACK_IMPORTED_MODULE_4__["UILoadingView"],
    prefabPath: "ui/prefabs/view/loading/ui_loading.prefab",
    components: [],
    type: _framework_ui_config_EUIType__WEBPACK_IMPORTED_MODULE_5__["EUIType"].View
};
/**
 * 配置导出
 */
let UILoadingConfig = {
    UILoading: UILoading
};



/***/ }),

/***/ "./src/game/ui/uiLoading/uiLoading/UILoadingCtrl.ts":
/*!**********************************************************!*\
  !*** ./src/game/ui/uiLoading/uiLoading/UILoadingCtrl.ts ***!
  \**********************************************************/
/*! exports provided: UILoadingCtrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UILoadingCtrl", function() { return UILoadingCtrl; });
/* harmony import */ var _framework_ui_base_UIBaseCtrl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../framework/ui/base/UIBaseCtrl */ "./src/framework/ui/base/UIBaseCtrl.ts");

/**
 * 通用loading控制器
 */
class UILoadingCtrl extends _framework_ui_base_UIBaseCtrl__WEBPACK_IMPORTED_MODULE_0__["default"] {
}


/***/ }),

/***/ "./src/game/ui/uiLoading/uiLoading/UILoadingModel.ts":
/*!***********************************************************!*\
  !*** ./src/game/ui/uiLoading/uiLoading/UILoadingModel.ts ***!
  \***********************************************************/
/*! exports provided: UILoadingModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UILoadingModel", function() { return UILoadingModel; });
/* harmony import */ var _framework_ui_base_UIBaseModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../framework/ui/base/UIBaseModel */ "./src/framework/ui/base/UIBaseModel.ts");

/**
 * 通用loading数据
 */
class UILoadingModel extends _framework_ui_base_UIBaseModel__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super(...arguments);
        /**
         * 进度值
         */
        this._value = 0;
    }
    onEnable(...args) {
        super.onEnable(...args);
        this._value = 0;
    }
    onDisable() {
        super.onDisable();
        this._value = 0;
    }
    getValue() {
        return this._value;
    }
    setValue(val) {
        if (val > 1 || val < 0) {
            return;
        }
        this._value = val;
    }
}


/***/ }),

/***/ "./src/game/ui/uiLoading/uiLoading/UILoadingView.ts":
/*!**********************************************************!*\
  !*** ./src/game/ui/uiLoading/uiLoading/UILoadingView.ts ***!
  \**********************************************************/
/*! exports provided: UILoadingView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UILoadingView", function() { return UILoadingView; });
/* harmony import */ var _framework_ui_base_UIBaseView__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../framework/ui/base/UIBaseView */ "./src/framework/ui/base/UIBaseView.ts");
/* harmony import */ var _framework_ui_component_UIText__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../framework/ui/component/UIText */ "./src/framework/ui/component/UIText.ts");
/* harmony import */ var _framework_ui_component_UIImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../framework/ui/component/UIImage */ "./src/framework/ui/component/UIImage.ts");
/* harmony import */ var _framework_utils_timer_Timer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../framework/utils/timer/Timer */ "./src/framework/utils/timer/Timer.ts");




/**
 * 通用loading界面
 */
class UILoadingView extends _framework_ui_base_UIBaseView__WEBPACK_IMPORTED_MODULE_0__["UIBaseView"] {
    onCreate() {
        super.onCreate();
        this._txtLoading = this.addComponent(_framework_ui_component_UIText__WEBPACK_IMPORTED_MODULE_1__["UIText"], "content/m_desc");
        this._imgProgress = this.addComponent(_framework_ui_component_UIImage__WEBPACK_IMPORTED_MODULE_2__["UIImage"], "content/progress_cur");
    }
    onDestroy() {
        this._txtLoading = null;
        this._imgProgress = null;
        super.onDestroy();
    }
    onEnable(...arg) {
        super.onEnable(...arg);
        this._updateProgress();
        _framework_utils_timer_Timer__WEBPACK_IMPORTED_MODULE_3__["Timer"].timer.frameLoop(1, this, this._updateProgress);
    }
    onDisable() {
        _framework_utils_timer_Timer__WEBPACK_IMPORTED_MODULE_3__["Timer"].timer.clearAll(this);
        super.onDisable();
    }
    _updateProgress() {
        let cur = this.model._value;
        this._imgProgress.setFillAmount(cur);
        this._txtLoading.text = `加载中 ${Math.round(cur * 100)}%`;
    }
}


/***/ }),

/***/ "csharp":
/*!*************************!*\
  !*** external "csharp" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("csharp");

/***/ }),

/***/ "puerts":
/*!*************************!*\
  !*** external "puerts" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("puerts");

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map