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

/***/ "./src/GameMain.ts":
/*!*************************!*\
  !*** ./src/GameMain.ts ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UnitTest_MainTest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UnitTest/MainTest */ "./src/UnitTest/MainTest.ts");
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
            _UnitTest_MainTest__WEBPACK_IMPORTED_MODULE_0__["MainTest"].Run();
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