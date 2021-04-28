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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Addshop_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Addshop.module.css */ \"./components/Addshop.module.css\");\n/* harmony import */ var _Addshop_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Addshop_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/Users/teerapat/Documents/project/ecommerce/client/components/Addshop.js\";\n\n\n\n\nconst Addshop = () => {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n\n  const addShop = () => {\n    router.push(\"/shop/add\");\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _Addshop_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.container__addshop,\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n      className: _Addshop_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.button__addshop,\n      onClick: addShop,\n      children: \"Add your shop\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 5\n  }, undefined);\n};\n\nconst MapStateToProps = state => ({\n  user: state.user\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(MapStateToProps)(Addshop));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FkZHNob3AuanM/MDg0ZSJdLCJuYW1lcyI6WyJBZGRzaG9wIiwicm91dGVyIiwidXNlUm91dGVyIiwiYWRkU2hvcCIsInB1c2giLCJjbGFzc2VzIiwiY29udGFpbmVyX19hZGRzaG9wIiwiYnV0dG9uX19hZGRzaG9wIiwiTWFwU3RhdGVUb1Byb3BzIiwic3RhdGUiLCJ1c2VyIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsT0FBTyxHQUFHLE1BQU07QUFDcEIsUUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFFQSxRQUFNQyxPQUFPLEdBQUcsTUFBTTtBQUNwQkYsVUFBTSxDQUFDRyxJQUFQLENBQVksV0FBWjtBQUNELEdBRkQ7O0FBR0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUVDLDBEQUFPLENBQUNDLGtCQUF4QjtBQUFBLDJCQUNFO0FBQVEsZUFBUyxFQUFFRCwwREFBTyxDQUFDRSxlQUEzQjtBQUE0QyxhQUFPLEVBQUVKLE9BQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBT0QsQ0FiRDs7QUFlQSxNQUFNSyxlQUFlLEdBQUlDLEtBQUQsS0FBWTtBQUNsQ0MsTUFBSSxFQUFFRCxLQUFLLENBQUNDO0FBRHNCLENBQVosQ0FBeEI7O0FBSWVDLDBIQUFPLENBQUNILGVBQUQsQ0FBUCxDQUF5QlIsT0FBekIsQ0FBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvQWRkc2hvcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGFzc2VzIGZyb20gXCIuL0FkZHNob3AubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5cbmNvbnN0IEFkZHNob3AgPSAoKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IGFkZFNob3AgPSAoKSA9PiB7XG4gICAgcm91dGVyLnB1c2goXCIvc2hvcC9hZGRcIik7XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyX19hZGRzaG9wfT5cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbl9fYWRkc2hvcH0gb25DbGljaz17YWRkU2hvcH0+XG4gICAgICAgIEFkZCB5b3VyIHNob3BcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgTWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xuICB1c2VyOiBzdGF0ZS51c2VyLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoTWFwU3RhdGVUb1Byb3BzKShBZGRzaG9wKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Addshop.js\n");

/***/ }),

/***/ "./components/Addshop.module.css":
/*!***************************************!*\
  !*** ./components/Addshop.module.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"container__addshop\": \"Addshop_container__addshop__3Wyb4\",\n\t\"button__addshop\": \"Addshop_button__addshop__3aX_i\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FkZHNob3AubW9kdWxlLmNzcz9hZjAzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9jb21wb25lbnRzL0FkZHNob3AubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lcl9fYWRkc2hvcFwiOiBcIkFkZHNob3BfY29udGFpbmVyX19hZGRzaG9wX18zV3liNFwiLFxuXHRcImJ1dHRvbl9fYWRkc2hvcFwiOiBcIkFkZHNob3BfYnV0dG9uX19hZGRzaG9wX18zYVhfaVwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Addshop.module.css\n");

/***/ }),

/***/ "./components/layout/Sidebar.js":
/*!**************************************!*\
  !*** ./components/layout/Sidebar.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Sidebar_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sidebar.module.css */ \"./components/layout/Sidebar.module.css\");\n/* harmony import */ var _Sidebar_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Sidebar_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Addshop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Addshop */ \"./components/Addshop.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/Users/teerapat/Documents/project/ecommerce/client/components/layout/Sidebar.js\";\n\n\n\n\nconst Sidebar = props => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _Sidebar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.container__sidebar,\n    children: [props.shopList.length === 0 || props.addNewShop ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Addshop__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 58\n    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {}, void 0, false), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_3__[\"Fragment\"], {\n      children: props.shopList.map(shop => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        className: _Sidebar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.content__shop,\n        onClick: () => {\n          props.onSelectSidebar(shop.shopId, shop.shop.name);\n        },\n        children: shop.shop.name\n      }, shop.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 11\n      }, undefined))\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Sidebar);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9TaWRlYmFyLmpzPzJkZTIiXSwibmFtZXMiOlsiU2lkZWJhciIsInByb3BzIiwiY2xhc3NlcyIsImNvbnRhaW5lcl9fc2lkZWJhciIsInNob3BMaXN0IiwibGVuZ3RoIiwiYWRkTmV3U2hvcCIsIm1hcCIsInNob3AiLCJjb250ZW50X19zaG9wIiwib25TZWxlY3RTaWRlYmFyIiwic2hvcElkIiwibmFtZSIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxPQUFPLEdBQUlDLEtBQUQsSUFBVztBQUN6QixzQkFDRTtBQUFLLGFBQVMsRUFBRUMsMERBQU8sQ0FBQ0Msa0JBQXhCO0FBQUEsZUFDR0YsS0FBSyxDQUFDRyxRQUFOLENBQWVDLE1BQWYsS0FBMEIsQ0FBMUIsSUFBK0JKLEtBQUssQ0FBQ0ssVUFBckMsZ0JBQWtELHFFQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQWxELGdCQUFnRSx1SkFEbkUsZUFFRSxxRUFBQyw4Q0FBRDtBQUFBLGdCQUNHTCxLQUFLLENBQUNHLFFBQU4sQ0FBZUcsR0FBZixDQUFvQkMsSUFBRCxpQkFDbEI7QUFDRSxpQkFBUyxFQUFFTiwwREFBTyxDQUFDTyxhQURyQjtBQUdFLGVBQU8sRUFBRSxNQUFNO0FBQ2JSLGVBQUssQ0FBQ1MsZUFBTixDQUFzQkYsSUFBSSxDQUFDRyxNQUEzQixFQUFtQ0gsSUFBSSxDQUFDQSxJQUFMLENBQVVJLElBQTdDO0FBQ0QsU0FMSDtBQUFBLGtCQU9HSixJQUFJLENBQUNBLElBQUwsQ0FBVUk7QUFQYixTQUVPSixJQUFJLENBQUNLLEVBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFrQkQsQ0FuQkQ7O0FBcUJlYixzRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvbGF5b3V0L1NpZGViYXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9TaWRlYmFyLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBBZGRzaG9wIGZyb20gXCIuLi9BZGRzaG9wXCI7XG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBTaWRlYmFyID0gKHByb3BzKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyX19zaWRlYmFyfT5cbiAgICAgIHtwcm9wcy5zaG9wTGlzdC5sZW5ndGggPT09IDAgfHwgcHJvcHMuYWRkTmV3U2hvcCA/IDxBZGRzaG9wIC8+IDogPD48Lz59XG4gICAgICA8RnJhZ21lbnQ+XG4gICAgICAgIHtwcm9wcy5zaG9wTGlzdC5tYXAoKHNob3ApID0+IChcbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuY29udGVudF9fc2hvcH1cbiAgICAgICAgICAgIGtleT17c2hvcC5pZH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgcHJvcHMub25TZWxlY3RTaWRlYmFyKHNob3Auc2hvcElkLCBzaG9wLnNob3AubmFtZSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtzaG9wLnNob3AubmFtZX1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgKSl9XG4gICAgICA8L0ZyYWdtZW50PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2lkZWJhcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layout/Sidebar.js\n");

/***/ }),

/***/ "./components/layout/Sidebar.module.css":
/*!**********************************************!*\
  !*** ./components/layout/Sidebar.module.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"container__sidebar\": \"Sidebar_container__sidebar__a7jlz\",\n\t\"content__shop\": \"Sidebar_content__shop__3ZFhm\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9TaWRlYmFyLm1vZHVsZS5jc3M/NmExYSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9sYXlvdXQvU2lkZWJhci5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyX19zaWRlYmFyXCI6IFwiU2lkZWJhcl9jb250YWluZXJfX3NpZGViYXJfX2E3amx6XCIsXG5cdFwiY29udGVudF9fc2hvcFwiOiBcIlNpZGViYXJfY29udGVudF9fc2hvcF9fM1pGaG1cIlxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layout/Sidebar.module.css\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _redux_actions_shop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/actions/shop */ \"./redux/actions/shop.js\");\n/* harmony import */ var _components_layout_Sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout/Sidebar */ \"./components/layout/Sidebar.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _jsxFileName = \"/Users/teerapat/Documents/project/ecommerce/client/pages/index.js\";\n\n\n\n\n\n\n\nfunction Home(props) {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_6__[\"useRouter\"])();\n  const {\n    0: shopList,\n    1: setShopList\n  } = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]);\n  const {\n    0: addNewShop,\n    1: setAddNewShop\n  } = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(true);\n\n  const onSelectSidebar = (shopId, shopName) => {\n    router.push(`/shop/manage/${shopName}/${shopId}`);\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(() => {\n    axios__WEBPACK_IMPORTED_MODULE_1___default()({\n      url: `http://localhost:8000/api/shop/getShop`,\n      method: \"post\",\n      data: {\n        id: props.user.id\n      },\n      headers: {\n        \"Content-Type\": \"application/json\"\n      }\n    }).then(res => {\n      setShopList(res.data);\n      res.data.map(shop => {\n        if (shop.role === \"admin\") setAddNewShop(false);\n        props.addshop(shop);\n      });\n    });\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"container\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_layout_Sidebar__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      shopList: shopList,\n      addNewShop: addNewShop,\n      onSelectSidebar: onSelectSidebar\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 32,\n    columnNumber: 5\n  }, this);\n}\n\nconst MapStatetoProps = state => ({\n  user: state.user,\n  shop: state.shop\n});\n\nconst MapDispatchToProps = {\n  addshop: _redux_actions_shop__WEBPACK_IMPORTED_MODULE_3__[\"addshop\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__[\"connect\"])(MapStatetoProps, MapDispatchToProps)(Home));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiLCJwcm9wcyIsInJvdXRlciIsInVzZVJvdXRlciIsInNob3BMaXN0Iiwic2V0U2hvcExpc3QiLCJ1c2VTdGF0ZSIsImFkZE5ld1Nob3AiLCJzZXRBZGROZXdTaG9wIiwib25TZWxlY3RTaWRlYmFyIiwic2hvcElkIiwic2hvcE5hbWUiLCJwdXNoIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJ1cmwiLCJtZXRob2QiLCJkYXRhIiwiaWQiLCJ1c2VyIiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJtYXAiLCJzaG9wIiwicm9sZSIsImFkZHNob3AiLCJNYXBTdGF0ZXRvUHJvcHMiLCJzdGF0ZSIsIk1hcERpc3BhdGNoVG9Qcm9wcyIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxTQUFTQSxJQUFULENBQWNDLEtBQWQsRUFBcUI7QUFDbkIsUUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLFFBQU07QUFBQSxPQUFDQyxRQUFEO0FBQUEsT0FBV0M7QUFBWCxNQUEwQkMsc0RBQVEsQ0FBQyxFQUFELENBQXhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLFVBQUQ7QUFBQSxPQUFhQztBQUFiLE1BQThCRixzREFBUSxDQUFDLElBQUQsQ0FBNUM7O0FBQ0EsUUFBTUcsZUFBZSxHQUFHLENBQUNDLE1BQUQsRUFBU0MsUUFBVCxLQUFzQjtBQUM1Q1QsVUFBTSxDQUFDVSxJQUFQLENBQWEsZ0JBQWVELFFBQVMsSUFBR0QsTUFBTyxFQUEvQztBQUNELEdBRkQ7O0FBR0FHLHlEQUFTLENBQUMsTUFBTTtBQUNkQyxnREFBSyxDQUFDO0FBQ0pDLFNBQUcsRUFBRyx3Q0FERjtBQUVKQyxZQUFNLEVBQUUsTUFGSjtBQUdKQyxVQUFJLEVBQUU7QUFBRUMsVUFBRSxFQUFFakIsS0FBSyxDQUFDa0IsSUFBTixDQUFXRDtBQUFqQixPQUhGO0FBSUpFLGFBQU8sRUFBRTtBQUNQLHdCQUFnQjtBQURUO0FBSkwsS0FBRCxDQUFMLENBT0dDLElBUEgsQ0FPU0MsR0FBRCxJQUFTO0FBQ2ZqQixpQkFBVyxDQUFDaUIsR0FBRyxDQUFDTCxJQUFMLENBQVg7QUFDQUssU0FBRyxDQUFDTCxJQUFKLENBQVNNLEdBQVQsQ0FBY0MsSUFBRCxJQUFVO0FBQ3JCLFlBQUlBLElBQUksQ0FBQ0MsSUFBTCxLQUFjLE9BQWxCLEVBQTJCakIsYUFBYSxDQUFDLEtBQUQsQ0FBYjtBQUMzQlAsYUFBSyxDQUFDeUIsT0FBTixDQUFjRixJQUFkO0FBQ0QsT0FIRDtBQUlELEtBYkQ7QUFjRCxHQWZRLEVBZU4sRUFmTSxDQUFUO0FBaUJBLHNCQUNFO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQSwyQkFDRSxxRUFBQyxrRUFBRDtBQUNFLGNBQVEsRUFBRXBCLFFBRFo7QUFFRSxnQkFBVSxFQUFFRyxVQUZkO0FBR0UscUJBQWUsRUFBRUU7QUFIbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVNEOztBQUVELE1BQU1rQixlQUFlLEdBQUlDLEtBQUQsS0FBWTtBQUNsQ1QsTUFBSSxFQUFFUyxLQUFLLENBQUNULElBRHNCO0FBRWxDSyxNQUFJLEVBQUVJLEtBQUssQ0FBQ0o7QUFGc0IsQ0FBWixDQUF4Qjs7QUFLQSxNQUFNSyxrQkFBa0IsR0FBRztBQUN6QkgsU0FBTyxFQUFFQSwyREFBT0E7QUFEUyxDQUEzQjtBQUllSSwwSEFBTyxDQUFDSCxlQUFELEVBQWtCRSxrQkFBbEIsQ0FBUCxDQUE2QzdCLElBQTdDLENBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGFkZHNob3AgfSBmcm9tIFwiLi4vcmVkdXgvYWN0aW9ucy9zaG9wXCI7XG5pbXBvcnQgU2lkZWJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXQvU2lkZWJhclwiO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5mdW5jdGlvbiBIb21lKHByb3BzKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbc2hvcExpc3QsIHNldFNob3BMaXN0XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2FkZE5ld1Nob3AsIHNldEFkZE5ld1Nob3BdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IG9uU2VsZWN0U2lkZWJhciA9IChzaG9wSWQsIHNob3BOYW1lKSA9PiB7XG4gICAgcm91dGVyLnB1c2goYC9zaG9wL21hbmFnZS8ke3Nob3BOYW1lfS8ke3Nob3BJZH1gKTtcbiAgfTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBheGlvcyh7XG4gICAgICB1cmw6IGBodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3Nob3AvZ2V0U2hvcGAsXG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgZGF0YTogeyBpZDogcHJvcHMudXNlci5pZCB9LFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgICBzZXRTaG9wTGlzdChyZXMuZGF0YSk7XG4gICAgICByZXMuZGF0YS5tYXAoKHNob3ApID0+IHtcbiAgICAgICAgaWYgKHNob3Aucm9sZSA9PT0gXCJhZG1pblwiKSBzZXRBZGROZXdTaG9wKGZhbHNlKTtcbiAgICAgICAgcHJvcHMuYWRkc2hvcChzaG9wKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPFNpZGViYXJcbiAgICAgICAgc2hvcExpc3Q9e3Nob3BMaXN0fVxuICAgICAgICBhZGROZXdTaG9wPXthZGROZXdTaG9wfVxuICAgICAgICBvblNlbGVjdFNpZGViYXI9e29uU2VsZWN0U2lkZWJhcn1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmNvbnN0IE1hcFN0YXRldG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcbiAgdXNlcjogc3RhdGUudXNlcixcbiAgc2hvcDogc3RhdGUuc2hvcCxcbn0pO1xuXG5jb25zdCBNYXBEaXNwYXRjaFRvUHJvcHMgPSB7XG4gIGFkZHNob3A6IGFkZHNob3AsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KE1hcFN0YXRldG9Qcm9wcywgTWFwRGlzcGF0Y2hUb1Byb3BzKShIb21lKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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