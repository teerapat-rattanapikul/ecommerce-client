module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Addshop.js":
/*!*******************************!*\
  !*** ./components/Addshop.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Addshop_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Addshop.module.css */ \"./components/Addshop.module.css\");\n/* harmony import */ var _Addshop_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Addshop_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/Users/teerapat/Documents/project/ecommerce/client/components/Addshop.js\";\n\n\n\nconst styles = {\n  boostrap: \"btn btn-outline-light\",\n  \"addshop.module\": _Addshop_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.button__addshop\n};\n\nconst Addshop = () => {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n\n  const addShop = () => {\n    router.push(\"/shop/add\");\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n    className: styles[\"boostrap\"] + \" \" + styles[\"addshop.module\"],\n    onClick: addShop,\n    children: \"+\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 16,\n    columnNumber: 5\n  }, undefined);\n};\n\nconst MapStateToProps = state => ({\n  user: state.user\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(MapStateToProps)(Addshop));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FkZHNob3AuanM/MDg0ZSJdLCJuYW1lcyI6WyJzdHlsZXMiLCJib29zdHJhcCIsImNsYXNzZXMiLCJidXR0b25fX2FkZHNob3AiLCJBZGRzaG9wIiwicm91dGVyIiwidXNlUm91dGVyIiwiYWRkU2hvcCIsInB1c2giLCJNYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsInVzZXIiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLE1BQU1BLE1BQU0sR0FBRztBQUNiQyxVQUFRLEVBQUUsdUJBREc7QUFFYixvQkFBa0JDLDBEQUFPLENBQUNDO0FBRmIsQ0FBZjs7QUFJQSxNQUFNQyxPQUFPLEdBQUcsTUFBTTtBQUNwQixRQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUVBLFFBQU1DLE9BQU8sR0FBRyxNQUFNO0FBQ3BCRixVQUFNLENBQUNHLElBQVAsQ0FBWSxXQUFaO0FBQ0QsR0FGRDs7QUFHQSxzQkFDRTtBQUNFLGFBQVMsRUFBRVIsTUFBTSxDQUFDLFVBQUQsQ0FBTixHQUFxQixHQUFyQixHQUEyQkEsTUFBTSxDQUFDLGdCQUFELENBRDlDO0FBRUUsV0FBTyxFQUFFTyxPQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFRRCxDQWREOztBQWdCQSxNQUFNRSxlQUFlLEdBQUlDLEtBQUQsS0FBWTtBQUNsQ0MsTUFBSSxFQUFFRCxLQUFLLENBQUNDO0FBRHNCLENBQVosQ0FBeEI7O0FBSWVDLDBIQUFPLENBQUNILGVBQUQsQ0FBUCxDQUF5QkwsT0FBekIsQ0FBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQWRkc2hvcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGFzc2VzIGZyb20gXCIuL0FkZHNob3AubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgYm9vc3RyYXA6IFwiYnRuIGJ0bi1vdXRsaW5lLWxpZ2h0XCIsXG4gIFwiYWRkc2hvcC5tb2R1bGVcIjogY2xhc3Nlcy5idXR0b25fX2FkZHNob3AsXG59O1xuY29uc3QgQWRkc2hvcCA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgYWRkU2hvcCA9ICgpID0+IHtcbiAgICByb3V0ZXIucHVzaChcIi9zaG9wL2FkZFwiKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uXG4gICAgICBjbGFzc05hbWU9e3N0eWxlc1tcImJvb3N0cmFwXCJdICsgXCIgXCIgKyBzdHlsZXNbXCJhZGRzaG9wLm1vZHVsZVwiXX1cbiAgICAgIG9uQ2xpY2s9e2FkZFNob3B9XG4gICAgPlxuICAgICAgK1xuICAgIDwvYnV0dG9uPlxuICApO1xufTtcblxuY29uc3QgTWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xuICB1c2VyOiBzdGF0ZS51c2VyLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoTWFwU3RhdGVUb1Byb3BzKShBZGRzaG9wKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Addshop.js\n");

/***/ }),

/***/ "./components/Addshop.module.css":
/*!***************************************!*\
  !*** ./components/Addshop.module.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"container__addshop\": \"Addshop_container__addshop__3Wyb4\",\n\t\"button__addshop\": \"Addshop_button__addshop__3aX_i\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FkZHNob3AubW9kdWxlLmNzcz9hZjAzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9jb21wb25lbnRzL0FkZHNob3AubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lcl9fYWRkc2hvcFwiOiBcIkFkZHNob3BfY29udGFpbmVyX19hZGRzaG9wX18zV3liNFwiLFxuXHRcImJ1dHRvbl9fYWRkc2hvcFwiOiBcIkFkZHNob3BfYnV0dG9uX19hZGRzaG9wX18zYVhfaVwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Addshop.module.css\n");

/***/ }),

/***/ "./components/Redirect.js":
/*!********************************!*\
  !*** ./components/Redirect.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst Redirect = ({\n  to\n}) => {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_0__[\"useRouter\"])();\n  console.log(\"router: \", router.query);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    router.push(to);\n  }, [to]);\n  return null;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Redirect);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1JlZGlyZWN0LmpzP2VhOTciXSwibmFtZXMiOlsiUmVkaXJlY3QiLCJ0byIsInJvdXRlciIsInVzZVJvdXRlciIsImNvbnNvbGUiLCJsb2ciLCJxdWVyeSIsInVzZUVmZmVjdCIsInB1c2giXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUVBLE1BQU1BLFFBQVEsR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFZO0FBQzNCLFFBQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVksVUFBWixFQUF3QkgsTUFBTSxDQUFDSSxLQUEvQjtBQUNBQyx5REFBUyxDQUFDLE1BQU07QUFDZEwsVUFBTSxDQUFDTSxJQUFQLENBQVlQLEVBQVo7QUFDRCxHQUZRLEVBRU4sQ0FBQ0EsRUFBRCxDQUZNLENBQVQ7QUFJQSxTQUFPLElBQVA7QUFDRCxDQVJEOztBQVVlRCx1RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvUmVkaXJlY3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBSZWRpcmVjdCA9ICh7IHRvIH0pID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnNvbGUubG9nKFwicm91dGVyOiBcIiwgcm91dGVyLnF1ZXJ5KTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICByb3V0ZXIucHVzaCh0byk7XG4gIH0sIFt0b10pO1xuXG4gIHJldHVybiBudWxsO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUmVkaXJlY3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Redirect.js\n");

/***/ }),

/***/ "./components/layout/Menu.js":
/*!***********************************!*\
  !*** ./components/layout/Menu.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Menu_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Menu.module.css */ \"./components/layout/Menu.module.css\");\n/* harmony import */ var _Menu_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Menu_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Addshop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Addshop */ \"./components/Addshop.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/Users/teerapat/Documents/project/ecommerce/client/components/layout/Menu.js\";\n\n\n\nconst styles = {\n  boostrap: \"btn btn-outline-secondary\",\n  \"menu.module\": _Menu_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.block__item\n};\n\nconst Menu = props => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _Menu_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.container__menu,\n    children: [props.shopList.length === 0 || props.addNewShop ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Addshop__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 58\n    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {}, void 0, false), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_3__[\"Fragment\"], {\n      children: props.shopList.map(shop => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        className: styles[\"boostrap\"] + \" \" + styles[\"menu.module\"],\n        onClick: () => {\n          props.onSelect(shop.shopId, shop.shop.name);\n        },\n        children: shop.shop.name\n      }, shop.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 11\n      }, undefined))\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Menu);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9NZW51LmpzPzIwZjMiXSwibmFtZXMiOlsic3R5bGVzIiwiYm9vc3RyYXAiLCJjbGFzc2VzIiwiYmxvY2tfX2l0ZW0iLCJNZW51IiwicHJvcHMiLCJjb250YWluZXJfX21lbnUiLCJzaG9wTGlzdCIsImxlbmd0aCIsImFkZE5ld1Nob3AiLCJtYXAiLCJzaG9wIiwib25TZWxlY3QiLCJzaG9wSWQiLCJuYW1lIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0EsTUFBTUEsTUFBTSxHQUFHO0FBQ2JDLFVBQVEsRUFBRSwyQkFERztBQUViLGlCQUFlQyx1REFBTyxDQUFDQztBQUZWLENBQWY7O0FBSUEsTUFBTUMsSUFBSSxHQUFJQyxLQUFELElBQVc7QUFDdEIsc0JBQ0U7QUFBSyxhQUFTLEVBQUVILHVEQUFPLENBQUNJLGVBQXhCO0FBQUEsZUFDR0QsS0FBSyxDQUFDRSxRQUFOLENBQWVDLE1BQWYsS0FBMEIsQ0FBMUIsSUFBK0JILEtBQUssQ0FBQ0ksVUFBckMsZ0JBQWtELHFFQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQWxELGdCQUFnRSx1SkFEbkUsZUFFRSxxRUFBQyw4Q0FBRDtBQUFBLGdCQUNHSixLQUFLLENBQUNFLFFBQU4sQ0FBZUcsR0FBZixDQUFvQkMsSUFBRCxpQkFDbEI7QUFDRSxpQkFBUyxFQUFFWCxNQUFNLENBQUMsVUFBRCxDQUFOLEdBQXFCLEdBQXJCLEdBQTJCQSxNQUFNLENBQUMsYUFBRCxDQUQ5QztBQUdFLGVBQU8sRUFBRSxNQUFNO0FBQ2JLLGVBQUssQ0FBQ08sUUFBTixDQUFlRCxJQUFJLENBQUNFLE1BQXBCLEVBQTRCRixJQUFJLENBQUNBLElBQUwsQ0FBVUcsSUFBdEM7QUFDRCxTQUxIO0FBQUEsa0JBT0dILElBQUksQ0FBQ0EsSUFBTCxDQUFVRztBQVBiLFNBRU9ILElBQUksQ0FBQ0ksRUFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUREO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQWtCRCxDQW5CRDs7QUFxQmVYLG1FQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9sYXlvdXQvTWVudS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGFzc2VzIGZyb20gXCIuL01lbnUubW9kdWxlLmNzc1wiO1xuaW1wb3J0IEFkZHNob3AgZnJvbSBcIi4uL0FkZHNob3BcIjtcbmltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XG5jb25zdCBzdHlsZXMgPSB7XG4gIGJvb3N0cmFwOiBcImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnlcIixcbiAgXCJtZW51Lm1vZHVsZVwiOiBjbGFzc2VzLmJsb2NrX19pdGVtLFxufTtcbmNvbnN0IE1lbnUgPSAocHJvcHMpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJfX21lbnV9PlxuICAgICAge3Byb3BzLnNob3BMaXN0Lmxlbmd0aCA9PT0gMCB8fCBwcm9wcy5hZGROZXdTaG9wID8gPEFkZHNob3AgLz4gOiA8PjwvPn1cbiAgICAgIDxGcmFnbWVudD5cbiAgICAgICAge3Byb3BzLnNob3BMaXN0Lm1hcCgoc2hvcCkgPT4gKFxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzW1wiYm9vc3RyYXBcIl0gKyBcIiBcIiArIHN0eWxlc1tcIm1lbnUubW9kdWxlXCJdfVxuICAgICAgICAgICAga2V5PXtzaG9wLmlkfVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBwcm9wcy5vblNlbGVjdChzaG9wLnNob3BJZCwgc2hvcC5zaG9wLm5hbWUpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7c2hvcC5zaG9wLm5hbWV9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICkpfVxuICAgICAgPC9GcmFnbWVudD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/layout/Menu.js\n");

/***/ }),

/***/ "./components/layout/Menu.module.css":
/*!*******************************************!*\
  !*** ./components/layout/Menu.module.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"container__menu\": \"Menu_container__menu__2_BC1\",\n\t\"block__item\": \"Menu_block__item__2DXIe\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9NZW51Lm1vZHVsZS5jc3M/N2QzZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9sYXlvdXQvTWVudS5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyX19tZW51XCI6IFwiTWVudV9jb250YWluZXJfX21lbnVfXzJfQkMxXCIsXG5cdFwiYmxvY2tfX2l0ZW1cIjogXCJNZW51X2Jsb2NrX19pdGVtX18yRFhJZVwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/layout/Menu.module.css\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _redux_actions_shop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/actions/shop */ \"./redux/actions/shop.js\");\n/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-loader-spinner */ \"react-loader-spinner\");\n/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_layout_Menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/layout/Menu */ \"./components/layout/Menu.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_Redirect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Redirect */ \"./components/Redirect.js\");\n\nvar _jsxFileName = \"/Users/teerapat/Documents/project/ecommerce/client/pages/index.js\";\n\n\n\n\n\n\n\n\n\nfunction Home(props) {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__[\"useRouter\"])();\n  const {\n    0: shopList,\n    1: setShopList\n  } = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]);\n  const {\n    0: loading,\n    1: setLoading\n  } = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(true);\n  const {\n    0: addNewShop,\n    1: setAddNewShop\n  } = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(true);\n  const {\n    0: time,\n    1: setTime\n  } = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false);\n\n  const onSelect = (shopId, shopName) => {\n    router.push(`/shop/manage/${shopName}/${shopId}`);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(() => {\n    setTimeout(() => {\n      setTime(!time);\n    }, 3000);\n  }, []);\n\n  if (time) {\n    if (loading) {\n      alert(\"กรุณาเข้าสู่ระบบก่อนใช้งาน\");\n      router.replace(\"/login\");\n    }\n  }\n\n  if (props.user.status && loading) {\n    axios__WEBPACK_IMPORTED_MODULE_1___default()({\n      url: `http://localhost:8000/api/shop/getShop`,\n      method: \"post\",\n      data: {\n        id: props.user.id\n      },\n      headers: {\n        \"Content-Type\": \"application/json\"\n      }\n    }).then(res => {\n      setShopList(res.data);\n      res.data.map(shop => {\n        if (shop.role === \"admin\") setAddNewShop(false);\n        props.addshop(shop);\n        setLoading(false);\n      });\n    });\n  } // useEffect(() => {\n  //   if (!props.user.status) setLoad(!load);\n  //   axios({\n  //     url: `http://localhost:8000/api/shop/getShop`,\n  //     method: \"post\",\n  //     data: { id: props.user.id },\n  //     headers: {\n  //       \"Content-Type\": \"application/json\",\n  //     },\n  //   }).then((res) => {\n  //     setShopList(res.data);\n  //     res.data.map((shop) => {\n  //       if (shop.role === \"admin\") setAddNewShop(false);\n  //       props.addshop(shop);\n  //     });\n  //   });\n  // }, []);\n\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"container  shadow  bg-body rounded\",\n    children: loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_loader_spinner__WEBPACK_IMPORTED_MODULE_4___default.a, {\n      type: \"ThreeDots\",\n      color: \"#8a9bae\",\n      height: 100,\n      width: 100,\n      visible: loading,\n      className: \"loading\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 9\n    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_layout_Menu__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      shopList: shopList,\n      addNewShop: addNewShop,\n      onSelect: onSelect\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 9\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 66,\n    columnNumber: 5\n  }, this);\n}\n\nconst MapStatetoProps = state => ({\n  user: state.user,\n  shop: state.shop\n});\n\nconst MapDispatchToProps = {\n  addshop: _redux_actions_shop__WEBPACK_IMPORTED_MODULE_3__[\"addshop\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__[\"connect\"])(MapStatetoProps, MapDispatchToProps)(Home));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiLCJwcm9wcyIsInJvdXRlciIsInVzZVJvdXRlciIsInNob3BMaXN0Iiwic2V0U2hvcExpc3QiLCJ1c2VTdGF0ZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiYWRkTmV3U2hvcCIsInNldEFkZE5ld1Nob3AiLCJ0aW1lIiwic2V0VGltZSIsIm9uU2VsZWN0Iiwic2hvcElkIiwic2hvcE5hbWUiLCJwdXNoIiwidXNlRWZmZWN0Iiwic2V0VGltZW91dCIsImFsZXJ0IiwicmVwbGFjZSIsInVzZXIiLCJzdGF0dXMiLCJheGlvcyIsInVybCIsIm1ldGhvZCIsImRhdGEiLCJpZCIsImhlYWRlcnMiLCJ0aGVuIiwicmVzIiwibWFwIiwic2hvcCIsInJvbGUiLCJhZGRzaG9wIiwiTWFwU3RhdGV0b1Byb3BzIiwic3RhdGUiLCJNYXBEaXNwYXRjaFRvUHJvcHMiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQVNBLElBQVQsQ0FBY0MsS0FBZCxFQUFxQjtBQUNuQixRQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCQyxzREFBUSxDQUFDLEVBQUQsQ0FBeEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JGLHNEQUFRLENBQUMsSUFBRCxDQUF0QztBQUNBLFFBQU07QUFBQSxPQUFDRyxVQUFEO0FBQUEsT0FBYUM7QUFBYixNQUE4Qkosc0RBQVEsQ0FBQyxJQUFELENBQTVDO0FBQ0EsUUFBTTtBQUFBLE9BQUNLLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCTixzREFBUSxDQUFDLEtBQUQsQ0FBaEM7O0FBQ0EsUUFBTU8sUUFBUSxHQUFHLENBQUNDLE1BQUQsRUFBU0MsUUFBVCxLQUFzQjtBQUNyQ2IsVUFBTSxDQUFDYyxJQUFQLENBQWEsZ0JBQWVELFFBQVMsSUFBR0QsTUFBTyxFQUEvQztBQUNELEdBRkQ7O0FBR0FHLHlEQUFTLENBQUMsTUFBTTtBQUNkQyxjQUFVLENBQUMsTUFBTTtBQUNmTixhQUFPLENBQUMsQ0FBQ0QsSUFBRixDQUFQO0FBQ0QsS0FGUyxFQUVQLElBRk8sQ0FBVjtBQUdELEdBSlEsRUFJTixFQUpNLENBQVQ7O0FBTUEsTUFBSUEsSUFBSixFQUFVO0FBQ1IsUUFBSUosT0FBSixFQUFhO0FBQ1hZLFdBQUssQ0FBQyw0QkFBRCxDQUFMO0FBQ0FqQixZQUFNLENBQUNrQixPQUFQLENBQWUsUUFBZjtBQUNEO0FBQ0Y7O0FBQ0QsTUFBSW5CLEtBQUssQ0FBQ29CLElBQU4sQ0FBV0MsTUFBWCxJQUFxQmYsT0FBekIsRUFBa0M7QUFDaENnQixnREFBSyxDQUFDO0FBQ0pDLFNBQUcsRUFBRyx3Q0FERjtBQUVKQyxZQUFNLEVBQUUsTUFGSjtBQUdKQyxVQUFJLEVBQUU7QUFBRUMsVUFBRSxFQUFFMUIsS0FBSyxDQUFDb0IsSUFBTixDQUFXTTtBQUFqQixPQUhGO0FBSUpDLGFBQU8sRUFBRTtBQUNQLHdCQUFnQjtBQURUO0FBSkwsS0FBRCxDQUFMLENBT0dDLElBUEgsQ0FPU0MsR0FBRCxJQUFTO0FBQ2Z6QixpQkFBVyxDQUFDeUIsR0FBRyxDQUFDSixJQUFMLENBQVg7QUFDQUksU0FBRyxDQUFDSixJQUFKLENBQVNLLEdBQVQsQ0FBY0MsSUFBRCxJQUFVO0FBQ3JCLFlBQUlBLElBQUksQ0FBQ0MsSUFBTCxLQUFjLE9BQWxCLEVBQTJCdkIsYUFBYSxDQUFDLEtBQUQsQ0FBYjtBQUMzQlQsYUFBSyxDQUFDaUMsT0FBTixDQUFjRixJQUFkO0FBQ0F4QixrQkFBVSxDQUFDLEtBQUQsQ0FBVjtBQUNELE9BSkQ7QUFLRCxLQWREO0FBZUQsR0FyQ2tCLENBc0NuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxvQ0FBZjtBQUFBLGNBQ0dELE9BQU8sZ0JBQ04scUVBQUMsMkRBQUQ7QUFDRSxVQUFJLEVBQUMsV0FEUDtBQUVFLFdBQUssRUFBQyxTQUZSO0FBR0UsWUFBTSxFQUFFLEdBSFY7QUFJRSxXQUFLLEVBQUUsR0FKVDtBQUtFLGFBQU8sRUFBRUEsT0FMWDtBQU1FLGVBQVMsRUFBQztBQU5aO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFETSxnQkFVTixxRUFBQywrREFBRDtBQUFNLGNBQVEsRUFBRUgsUUFBaEI7QUFBMEIsZ0JBQVUsRUFBRUssVUFBdEM7QUFBa0QsY0FBUSxFQUFFSTtBQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWEo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBZ0JEOztBQUVELE1BQU1zQixlQUFlLEdBQUlDLEtBQUQsS0FBWTtBQUNsQ2YsTUFBSSxFQUFFZSxLQUFLLENBQUNmLElBRHNCO0FBRWxDVyxNQUFJLEVBQUVJLEtBQUssQ0FBQ0o7QUFGc0IsQ0FBWixDQUF4Qjs7QUFLQSxNQUFNSyxrQkFBa0IsR0FBRztBQUN6QkgsU0FBTyxFQUFFQSwyREFBT0E7QUFEUyxDQUEzQjtBQUllSSwwSEFBTyxDQUFDSCxlQUFELEVBQWtCRSxrQkFBbEIsQ0FBUCxDQUE2Q3JDLElBQTdDLENBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGFkZHNob3AgfSBmcm9tIFwiLi4vcmVkdXgvYWN0aW9ucy9zaG9wXCI7XG5pbXBvcnQgTG9hZGVyIGZyb20gXCJyZWFjdC1sb2FkZXItc3Bpbm5lclwiO1xuaW1wb3J0IE1lbnUgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0L01lbnVcIjtcbmltcG9ydCB7IGNvbm5lY3QgfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IFJlZGlyZWN0IGZyb20gXCIuLi9jb21wb25lbnRzL1JlZGlyZWN0XCI7XG5mdW5jdGlvbiBIb21lKHByb3BzKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbc2hvcExpc3QsIHNldFNob3BMaXN0XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFthZGROZXdTaG9wLCBzZXRBZGROZXdTaG9wXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbdGltZSwgc2V0VGltZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IG9uU2VsZWN0ID0gKHNob3BJZCwgc2hvcE5hbWUpID0+IHtcbiAgICByb3V0ZXIucHVzaChgL3Nob3AvbWFuYWdlLyR7c2hvcE5hbWV9LyR7c2hvcElkfWApO1xuICB9O1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0VGltZSghdGltZSk7XG4gICAgfSwgMzAwMCk7XG4gIH0sIFtdKTtcblxuICBpZiAodGltZSkge1xuICAgIGlmIChsb2FkaW5nKSB7XG4gICAgICBhbGVydChcIuC4geC4o+C4uOC4k+C4suC5gOC4guC5ieC4suC4quC4ueC5iOC4o+C4sOC4muC4muC4geC5iOC4reC4meC5g+C4iuC5ieC4h+C4suC4mVwiKTtcbiAgICAgIHJvdXRlci5yZXBsYWNlKFwiL2xvZ2luXCIpO1xuICAgIH1cbiAgfVxuICBpZiAocHJvcHMudXNlci5zdGF0dXMgJiYgbG9hZGluZykge1xuICAgIGF4aW9zKHtcbiAgICAgIHVybDogYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvc2hvcC9nZXRTaG9wYCxcbiAgICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgICBkYXRhOiB7IGlkOiBwcm9wcy51c2VyLmlkIH0sXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSxcbiAgICB9KS50aGVuKChyZXMpID0+IHtcbiAgICAgIHNldFNob3BMaXN0KHJlcy5kYXRhKTtcbiAgICAgIHJlcy5kYXRhLm1hcCgoc2hvcCkgPT4ge1xuICAgICAgICBpZiAoc2hvcC5yb2xlID09PSBcImFkbWluXCIpIHNldEFkZE5ld1Nob3AoZmFsc2UpO1xuICAgICAgICBwcm9wcy5hZGRzaG9wKHNob3ApO1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XG4gIC8vICAgaWYgKCFwcm9wcy51c2VyLnN0YXR1cykgc2V0TG9hZCghbG9hZCk7XG4gIC8vICAgYXhpb3Moe1xuICAvLyAgICAgdXJsOiBgaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9zaG9wL2dldFNob3BgLFxuICAvLyAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgLy8gICAgIGRhdGE6IHsgaWQ6IHByb3BzLnVzZXIuaWQgfSxcbiAgLy8gICAgIGhlYWRlcnM6IHtcbiAgLy8gICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gIC8vICAgICB9LFxuICAvLyAgIH0pLnRoZW4oKHJlcykgPT4ge1xuICAvLyAgICAgc2V0U2hvcExpc3QocmVzLmRhdGEpO1xuICAvLyAgICAgcmVzLmRhdGEubWFwKChzaG9wKSA9PiB7XG4gIC8vICAgICAgIGlmIChzaG9wLnJvbGUgPT09IFwiYWRtaW5cIikgc2V0QWRkTmV3U2hvcChmYWxzZSk7XG4gIC8vICAgICAgIHByb3BzLmFkZHNob3Aoc2hvcCk7XG4gIC8vICAgICB9KTtcbiAgLy8gICB9KTtcbiAgLy8gfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgIHNoYWRvdyAgYmctYm9keSByb3VuZGVkXCI+XG4gICAgICB7bG9hZGluZyA/IChcbiAgICAgICAgPExvYWRlclxuICAgICAgICAgIHR5cGU9XCJUaHJlZURvdHNcIlxuICAgICAgICAgIGNvbG9yPVwiIzhhOWJhZVwiXG4gICAgICAgICAgaGVpZ2h0PXsxMDB9XG4gICAgICAgICAgd2lkdGg9ezEwMH1cbiAgICAgICAgICB2aXNpYmxlPXtsb2FkaW5nfVxuICAgICAgICAgIGNsYXNzTmFtZT1cImxvYWRpbmdcIlxuICAgICAgICAvPlxuICAgICAgKSA6IChcbiAgICAgICAgPE1lbnUgc2hvcExpc3Q9e3Nob3BMaXN0fSBhZGROZXdTaG9wPXthZGROZXdTaG9wfSBvblNlbGVjdD17b25TZWxlY3R9IC8+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5jb25zdCBNYXBTdGF0ZXRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XG4gIHVzZXI6IHN0YXRlLnVzZXIsXG4gIHNob3A6IHN0YXRlLnNob3AsXG59KTtcblxuY29uc3QgTWFwRGlzcGF0Y2hUb1Byb3BzID0ge1xuICBhZGRzaG9wOiBhZGRzaG9wLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChNYXBTdGF0ZXRvUHJvcHMsIE1hcERpc3BhdGNoVG9Qcm9wcykoSG9tZSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "./redux/actions/shop.js":
/*!*******************************!*\
  !*** ./redux/actions/shop.js ***!
  \*******************************/
/*! exports provided: ADDSHOP, addshop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADDSHOP\", function() { return ADDSHOP; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addshop\", function() { return addshop; });\nconst ADDSHOP = \"ADDSHOP\";\nconst addshop = shopList => ({\n  type: ADDSHOP,\n  payload: shopList\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb25zL3Nob3AuanM/ZTQ4OSJdLCJuYW1lcyI6WyJBRERTSE9QIiwiYWRkc2hvcCIsInNob3BMaXN0IiwidHlwZSIsInBheWxvYWQiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFPLE1BQU1BLE9BQU8sR0FBRyxTQUFoQjtBQUVBLE1BQU1DLE9BQU8sR0FBSUMsUUFBRCxLQUFlO0FBQ3BDQyxNQUFJLEVBQUVILE9BRDhCO0FBRXBDSSxTQUFPLEVBQUVGO0FBRjJCLENBQWYsQ0FBaEIiLCJmaWxlIjoiLi9yZWR1eC9hY3Rpb25zL3Nob3AuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgQUREU0hPUCA9IFwiQUREU0hPUFwiO1xuXG5leHBvcnQgY29uc3QgYWRkc2hvcCA9IChzaG9wTGlzdCkgPT4gKHtcbiAgdHlwZTogQUREU0hPUCxcbiAgcGF5bG9hZDogc2hvcExpc3QsXG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./redux/actions/shop.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-loader-spinner":
/*!***************************************!*\
  !*** external "react-loader-spinner" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-loader-spinner\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1sb2FkZXItc3Bpbm5lclwiPzQ3N2EiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtbG9hZGVyLXNwaW5uZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1sb2FkZXItc3Bpbm5lclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-loader-spinner\n");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiPzc4Y2QiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtcmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-redux\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });