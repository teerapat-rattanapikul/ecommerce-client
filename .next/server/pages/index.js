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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Addshop_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Addshop.module.css */ \"./components/Addshop.module.css\");\n/* harmony import */ var _Addshop_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Addshop_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/teerapat/Documents/project/ecommerce/client/components/Addshop.js\";\n\n\nconst styles = {\n  boostrap: \"btn btn-outline-light\",\n  \"addshop.module\": _Addshop_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.button__addshop\n};\n\nconst Addshop = props => {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n\n  const addShop = () => {\n    router.push(`/shop/add/${props.token}`);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n    className: styles[\"boostrap\"] + \" \" + styles[\"addshop.module\"],\n    onClick: addShop,\n    children: \"+\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Addshop);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FkZHNob3AuanM/MDg0ZSJdLCJuYW1lcyI6WyJzdHlsZXMiLCJib29zdHJhcCIsImNsYXNzZXMiLCJidXR0b25fX2FkZHNob3AiLCJBZGRzaG9wIiwicHJvcHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJhZGRTaG9wIiwicHVzaCIsInRva2VuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0EsTUFBTUEsTUFBTSxHQUFHO0FBQ2JDLFVBQVEsRUFBRSx1QkFERztBQUViLG9CQUFrQkMsMERBQU8sQ0FBQ0M7QUFGYixDQUFmOztBQUlBLE1BQU1DLE9BQU8sR0FBSUMsS0FBRCxJQUFXO0FBQ3pCLFFBQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBQ0EsUUFBTUMsT0FBTyxHQUFHLE1BQU07QUFDcEJGLFVBQU0sQ0FBQ0csSUFBUCxDQUFhLGFBQVlKLEtBQUssQ0FBQ0ssS0FBTSxFQUFyQztBQUNELEdBRkQ7O0FBR0Esc0JBQ0U7QUFDRSxhQUFTLEVBQUVWLE1BQU0sQ0FBQyxVQUFELENBQU4sR0FBcUIsR0FBckIsR0FBMkJBLE1BQU0sQ0FBQyxnQkFBRCxDQUQ5QztBQUVFLFdBQU8sRUFBRVEsT0FGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBUUQsQ0FiRDs7QUFlZUosc0VBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0FkZHNob3AuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9BZGRzaG9wLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuY29uc3Qgc3R5bGVzID0ge1xuICBib29zdHJhcDogXCJidG4gYnRuLW91dGxpbmUtbGlnaHRcIixcbiAgXCJhZGRzaG9wLm1vZHVsZVwiOiBjbGFzc2VzLmJ1dHRvbl9fYWRkc2hvcCxcbn07XG5jb25zdCBBZGRzaG9wID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBhZGRTaG9wID0gKCkgPT4ge1xuICAgIHJvdXRlci5wdXNoKGAvc2hvcC9hZGQvJHtwcm9wcy50b2tlbn1gKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8YnV0dG9uXG4gICAgICBjbGFzc05hbWU9e3N0eWxlc1tcImJvb3N0cmFwXCJdICsgXCIgXCIgKyBzdHlsZXNbXCJhZGRzaG9wLm1vZHVsZVwiXX1cbiAgICAgIG9uQ2xpY2s9e2FkZFNob3B9XG4gICAgPlxuICAgICAgK1xuICAgIDwvYnV0dG9uPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWRkc2hvcDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Addshop.js\n");

/***/ }),

/***/ "./components/Addshop.module.css":
/*!***************************************!*\
  !*** ./components/Addshop.module.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"container__addshop\": \"Addshop_container__addshop__3Wyb4\",\n\t\"button__addshop\": \"Addshop_button__addshop__3aX_i\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FkZHNob3AubW9kdWxlLmNzcz9hZjAzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9jb21wb25lbnRzL0FkZHNob3AubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lcl9fYWRkc2hvcFwiOiBcIkFkZHNob3BfY29udGFpbmVyX19hZGRzaG9wX18zV3liNFwiLFxuXHRcImJ1dHRvbl9fYWRkc2hvcFwiOiBcIkFkZHNob3BfYnV0dG9uX19hZGRzaG9wX18zYVhfaVwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Addshop.module.css\n");

/***/ }),

/***/ "./components/layout/Menu.js":
/*!***********************************!*\
  !*** ./components/layout/Menu.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Menu_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Menu.module.css */ \"./components/layout/Menu.module.css\");\n/* harmony import */ var _Menu_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Menu_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Addshop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Addshop */ \"./components/Addshop.js\");\n/* harmony import */ var _ui_Loading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ui/Loading */ \"./components/ui/Loading.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/Users/teerapat/Documents/project/ecommerce/client/components/layout/Menu.js\";\n\n\n\n\nconst styles = {\n  boostrap: \"btn btn-outline-secondary\",\n  \"menu.module\": _Menu_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.block__item\n};\n\nconst Menu = props => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _Menu_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.container__menu,\n    children: [props.shopList.length === 0 || props.addNewShop ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Addshop__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      token: props.token\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 9\n    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {}, void 0, false), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_4__[\"Fragment\"], {\n      children: props.shopList.map(shop => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        className: styles[\"boostrap\"] + \" \" + styles[\"menu.module\"],\n        onClick: () => {\n          props.onSelect(shop.shopId, shop.shop.name);\n        },\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          children: [\" \", shop.shop.name]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 13\n        }, undefined), shop.role === \"admin\" ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          className: _Menu_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.adminshop,\n          children: \"\\u0E23\\u0E49\\u0E32\\u0E19\\u0E02\\u0E2D\\u0E07\\u0E04\\u0E38\\u0E13\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 15\n        }, undefined) : null]\n      }, shop.id, true, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 11\n      }, undefined))\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Menu);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9NZW51LmpzPzIwZjMiXSwibmFtZXMiOlsic3R5bGVzIiwiYm9vc3RyYXAiLCJjbGFzc2VzIiwiYmxvY2tfX2l0ZW0iLCJNZW51IiwicHJvcHMiLCJjb250YWluZXJfX21lbnUiLCJzaG9wTGlzdCIsImxlbmd0aCIsImFkZE5ld1Nob3AiLCJ0b2tlbiIsIm1hcCIsInNob3AiLCJvblNlbGVjdCIsInNob3BJZCIsIm5hbWUiLCJyb2xlIiwiYWRtaW5zaG9wIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTUEsTUFBTSxHQUFHO0FBQ2JDLFVBQVEsRUFBRSwyQkFERztBQUViLGlCQUFlQyx1REFBTyxDQUFDQztBQUZWLENBQWY7O0FBSUEsTUFBTUMsSUFBSSxHQUFJQyxLQUFELElBQVc7QUFDdEIsc0JBQ0U7QUFBSyxhQUFTLEVBQUVILHVEQUFPLENBQUNJLGVBQXhCO0FBQUEsZUFDR0QsS0FBSyxDQUFDRSxRQUFOLENBQWVDLE1BQWYsS0FBMEIsQ0FBMUIsSUFBK0JILEtBQUssQ0FBQ0ksVUFBckMsZ0JBQ0MscUVBQUMsZ0RBQUQ7QUFBUyxXQUFLLEVBQUVKLEtBQUssQ0FBQ0s7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERCxnQkFHQyx1SkFKSixlQU1FLHFFQUFDLDhDQUFEO0FBQUEsZ0JBQ0dMLEtBQUssQ0FBQ0UsUUFBTixDQUFlSSxHQUFmLENBQW9CQyxJQUFELGlCQUNsQjtBQUNFLGlCQUFTLEVBQUVaLE1BQU0sQ0FBQyxVQUFELENBQU4sR0FBcUIsR0FBckIsR0FBMkJBLE1BQU0sQ0FBQyxhQUFELENBRDlDO0FBR0UsZUFBTyxFQUFFLE1BQU07QUFDYkssZUFBSyxDQUFDUSxRQUFOLENBQWVELElBQUksQ0FBQ0UsTUFBcEIsRUFBNEJGLElBQUksQ0FBQ0EsSUFBTCxDQUFVRyxJQUF0QztBQUNELFNBTEg7QUFBQSxnQ0FPRTtBQUFBLDBCQUFTSCxJQUFJLENBQUNBLElBQUwsQ0FBVUcsSUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVBGLEVBUUdILElBQUksQ0FBQ0ksSUFBTCxLQUFjLE9BQWQsZ0JBQ0M7QUFBTyxtQkFBUyxFQUFFZCx1REFBTyxDQUFDZSxTQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERCxHQUVHLElBVk47QUFBQSxTQUVPTCxJQUFJLENBQUNNLEVBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUF5QkQsQ0ExQkQ7O0FBNEJlZCxtRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvbGF5b3V0L01lbnUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9NZW51Lm1vZHVsZS5jc3NcIjtcbmltcG9ydCBBZGRzaG9wIGZyb20gXCIuLi9BZGRzaG9wXCI7XG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi4vdWkvTG9hZGluZ1wiO1xuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmNvbnN0IHN0eWxlcyA9IHtcbiAgYm9vc3RyYXA6IFwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiLFxuICBcIm1lbnUubW9kdWxlXCI6IGNsYXNzZXMuYmxvY2tfX2l0ZW0sXG59O1xuY29uc3QgTWVudSA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcl9fbWVudX0+XG4gICAgICB7cHJvcHMuc2hvcExpc3QubGVuZ3RoID09PSAwIHx8IHByb3BzLmFkZE5ld1Nob3AgPyAoXG4gICAgICAgIDxBZGRzaG9wIHRva2VuPXtwcm9wcy50b2tlbn0gLz5cbiAgICAgICkgOiAoXG4gICAgICAgIDw+PC8+XG4gICAgICApfVxuICAgICAgPEZyYWdtZW50PlxuICAgICAgICB7cHJvcHMuc2hvcExpc3QubWFwKChzaG9wKSA9PiAoXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNbXCJib29zdHJhcFwiXSArIFwiIFwiICsgc3R5bGVzW1wibWVudS5tb2R1bGVcIl19XG4gICAgICAgICAgICBrZXk9e3Nob3AuaWR9XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgIHByb3BzLm9uU2VsZWN0KHNob3Auc2hvcElkLCBzaG9wLnNob3AubmFtZSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxsYWJlbD4ge3Nob3Auc2hvcC5uYW1lfTwvbGFiZWw+XG4gICAgICAgICAgICB7c2hvcC5yb2xlID09PSBcImFkbWluXCIgPyAoXG4gICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e2NsYXNzZXMuYWRtaW5zaG9wfT7guKPguYnguLLguJnguILguK3guIfguITguLjguJM8L2xhYmVsPlxuICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICkpfVxuICAgICAgPC9GcmFnbWVudD5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/layout/Menu.js\n");

/***/ }),

/***/ "./components/layout/Menu.module.css":
/*!*******************************************!*\
  !*** ./components/layout/Menu.module.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"container__menu\": \"Menu_container__menu__2_BC1\",\n\t\"block__item\": \"Menu_block__item__2DXIe\",\n\t\"adminshop\": \"Menu_adminshop__2wplr\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL2xheW91dC9NZW51Lm1vZHVsZS5jc3M/N2QzZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC9NZW51Lm1vZHVsZS5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJfX21lbnVcIjogXCJNZW51X2NvbnRhaW5lcl9fbWVudV9fMl9CQzFcIixcblx0XCJibG9ja19faXRlbVwiOiBcIk1lbnVfYmxvY2tfX2l0ZW1fXzJEWEllXCIsXG5cdFwiYWRtaW5zaG9wXCI6IFwiTWVudV9hZG1pbnNob3BfXzJ3cGxyXCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/layout/Menu.module.css\n");

/***/ }),

/***/ "./components/ui/Loading.js":
/*!**********************************!*\
  !*** ./components/ui/Loading.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-loader-spinner */ \"react-loader-spinner\");\n/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/teerapat/Documents/project/ecommerce/client/components/ui/Loading.js\";\n\n\nconst Loading = props => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_loader_spinner__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    type: \"ThreeDots\",\n    color: \"#8a9bae\",\n    height: 100,\n    width: 100,\n    visible: props.loading,\n    className: \"loading\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 5,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Loading);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL3VpL0xvYWRpbmcuanM/YmExMCJdLCJuYW1lcyI6WyJMb2FkaW5nIiwicHJvcHMiLCJsb2FkaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsT0FBTyxHQUFJQyxLQUFELElBQVc7QUFDekIsc0JBQ0UscUVBQUMsMkRBQUQ7QUFDRSxRQUFJLEVBQUMsV0FEUDtBQUVFLFNBQUssRUFBQyxTQUZSO0FBR0UsVUFBTSxFQUFFLEdBSFY7QUFJRSxTQUFLLEVBQUUsR0FKVDtBQUtFLFdBQU8sRUFBRUEsS0FBSyxDQUFDQyxPQUxqQjtBQU1FLGFBQVMsRUFBQztBQU5aO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQVVELENBWEQ7O0FBYWVGLHNFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy91aS9Mb2FkaW5nLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExvYWRlciBmcm9tIFwicmVhY3QtbG9hZGVyLXNwaW5uZXJcIjtcblxuY29uc3QgTG9hZGluZyA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxMb2FkZXJcbiAgICAgIHR5cGU9XCJUaHJlZURvdHNcIlxuICAgICAgY29sb3I9XCIjOGE5YmFlXCJcbiAgICAgIGhlaWdodD17MTAwfVxuICAgICAgd2lkdGg9ezEwMH1cbiAgICAgIHZpc2libGU9e3Byb3BzLmxvYWRpbmd9XG4gICAgICBjbGFzc05hbWU9XCJsb2FkaW5nXCJcbiAgICAvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9hZGluZztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ui/Loading.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: getServerSideProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getServerSideProps\", function() { return getServerSideProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_layout_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout/Menu */ \"./components/layout/Menu.js\");\n/* harmony import */ var _components_ui_Loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ui/Loading */ \"./components/ui/Loading.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jwt-decode */ \"jwt-decode\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _jsxFileName = \"/Users/teerapat/Documents/project/ecommerce/client/pages/index.js\";\n\n\n\n\n\n\n\nfunction Home(props) {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"])();\n  const {\n    0: shopList,\n    1: setShopList\n  } = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(props.data);\n  const {\n    0: token,\n    1: setToken\n  } = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])();\n  const {\n    0: loading,\n    1: setLoading\n  } = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(true);\n  const {\n    0: addNewShop,\n    1: setAddNewShop\n  } = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(true);\n  const {\n    0: time,\n    1: setTime\n  } = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false);\n\n  const onSelect = (shopId, shopName) => {\n    router.push({\n      pathname: `/shop/manage/${token}/${shopName}/${shopId}`\n    }, undefined, {\n      scroll: false\n    });\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(() => {\n    setToken(localStorage.getItem(\"token\"));\n    const timeoutId = setTimeout(() => setTime(!time), 3000);\n    return function cleanup() {\n      clearTimeout(timeoutId);\n    };\n  }, []);\n\n  if (time) {\n    if (props.data.status === false) {\n      alert(\"กรุณาเข้าสู่ระบบก่อนใช้งาน\");\n      router.replace(\"/login\");\n    }\n  }\n\n  if (props.data.status !== false && loading) {\n    props.data.map(shop => {\n      if (shop.role === \"admin\") {\n        setAddNewShop(false);\n      }\n    });\n    setLoading(false);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"container\",\n    children: loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_ui_Loading__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      loading: loading\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 9\n    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_layout_Menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      shopList: shopList,\n      addNewShop: addNewShop,\n      onSelect: onSelect,\n      token: token\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 9\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 47,\n    columnNumber: 5\n  }, this);\n}\n\nconst getServerSideProps = async context => {\n  const {\n    cookie\n  } = context.req.headers;\n  if (cookie === undefined) return {\n    props: {\n      data: {\n        status: false\n      }\n    }\n  };\n  const token = cookie.replace(\"token=\", \"\");\n  const data = await axios__WEBPACK_IMPORTED_MODULE_1___default()({\n    url: `http://localhost:8000/api/shop/getShop`,\n    method: \"get\",\n    headers: {\n      \"Content-Type\": \"application/json\",\n      Authorization: token\n    }\n  });\n  return {\n    props: {\n      data: data.data\n    } // will be passed to the page component as props\n\n  };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcz80NGQ4Il0sIm5hbWVzIjpbIkhvbWUiLCJwcm9wcyIsInJvdXRlciIsInVzZVJvdXRlciIsInNob3BMaXN0Iiwic2V0U2hvcExpc3QiLCJ1c2VTdGF0ZSIsImRhdGEiLCJ0b2tlbiIsInNldFRva2VuIiwibG9hZGluZyIsInNldExvYWRpbmciLCJhZGROZXdTaG9wIiwic2V0QWRkTmV3U2hvcCIsInRpbWUiLCJzZXRUaW1lIiwib25TZWxlY3QiLCJzaG9wSWQiLCJzaG9wTmFtZSIsInB1c2giLCJwYXRobmFtZSIsInVuZGVmaW5lZCIsInNjcm9sbCIsInVzZUVmZmVjdCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ0aW1lb3V0SWQiLCJzZXRUaW1lb3V0IiwiY2xlYW51cCIsImNsZWFyVGltZW91dCIsInN0YXR1cyIsImFsZXJ0IiwicmVwbGFjZSIsIm1hcCIsInNob3AiLCJyb2xlIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsImNvb2tpZSIsInJlcSIsImhlYWRlcnMiLCJheGlvcyIsInVybCIsIm1ldGhvZCIsIkF1dGhvcml6YXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBU0EsSUFBVCxDQUFjQyxLQUFkLEVBQXFCO0FBQ25CLFFBQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJDLHNEQUFRLENBQUNMLEtBQUssQ0FBQ00sSUFBUCxDQUF4QztBQUNBLFFBQU07QUFBQSxPQUFDQyxLQUFEO0FBQUEsT0FBUUM7QUFBUixNQUFvQkgsc0RBQVEsRUFBbEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0ksT0FBRDtBQUFBLE9BQVVDO0FBQVYsTUFBd0JMLHNEQUFRLENBQUMsSUFBRCxDQUF0QztBQUNBLFFBQU07QUFBQSxPQUFDTSxV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Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE1lbnUgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0L01lbnVcIjtcbmltcG9ydCBMb2FkaW5nIGZyb20gXCIuLi9jb21wb25lbnRzL3VpL0xvYWRpbmdcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IGp3dF9kZWNvZGUgZnJvbSBcImp3dC1kZWNvZGVcIjtcbmZ1bmN0aW9uIEhvbWUocHJvcHMpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFtzaG9wTGlzdCwgc2V0U2hvcExpc3RdID0gdXNlU3RhdGUocHJvcHMuZGF0YSk7XG4gIGNvbnN0IFt0b2tlbiwgc2V0VG9rZW5dID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFthZGROZXdTaG9wLCBzZXRBZGROZXdTaG9wXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbdGltZSwgc2V0VGltZV0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgb25TZWxlY3QgPSAoc2hvcElkLCBzaG9wTmFtZSkgPT4ge1xuICAgIHJvdXRlci5wdXNoKFxuICAgICAgeyBwYXRobmFtZTogYC9zaG9wL21hbmFnZS8ke3Rva2VufS8ke3Nob3BOYW1lfS8ke3Nob3BJZH1gIH0sXG4gICAgICB1bmRlZmluZWQsXG4gICAgICB7XG4gICAgICAgIHNjcm9sbDogZmFsc2UsXG4gICAgICB9XG4gICAgKTtcbiAgfTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRUb2tlbihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpKTtcbiAgICBjb25zdCB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KCgpID0+IHNldFRpbWUoIXRpbWUpLCAzMDAwKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gY2xlYW51cCgpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xuICAgIH07XG4gIH0sIFtdKTtcbiAgaWYgKHRpbWUpIHtcbiAgICBpZiAocHJvcHMuZGF0YS5zdGF0dXMgPT09IGZhbHNlKSB7XG4gICAgICBhbGVydChcIuC4geC4o+C4uOC4k+C4suC5gOC4guC5ieC4suC4quC4ueC5iOC4o+C4sOC4muC4muC4geC5iOC4reC4meC5g+C4iuC5ieC4h+C4suC4mVwiKTtcbiAgICAgIHJvdXRlci5yZXBsYWNlKFwiL2xvZ2luXCIpO1xuICAgIH1cbiAgfVxuICBpZiAocHJvcHMuZGF0YS5zdGF0dXMgIT09IGZhbHNlICYmIGxvYWRpbmcpIHtcbiAgICBwcm9wcy5kYXRhLm1hcCgoc2hvcCkgPT4ge1xuICAgICAgaWYgKHNob3Aucm9sZSA9PT0gXCJhZG1pblwiKSB7XG4gICAgICAgIHNldEFkZE5ld1Nob3AoZmFsc2UpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAge2xvYWRpbmcgPyAoXG4gICAgICAgIDxMb2FkaW5nIGxvYWRpbmc9e2xvYWRpbmd9IC8+XG4gICAgICApIDogKFxuICAgICAgICA8TWVudVxuICAgICAgICAgIHNob3BMaXN0PXtzaG9wTGlzdH1cbiAgICAgICAgICBhZGROZXdTaG9wPXthZGROZXdTaG9wfVxuICAgICAgICAgIG9uU2VsZWN0PXtvblNlbGVjdH1cbiAgICAgICAgICB0b2tlbj17dG9rZW59XG4gICAgICAgIC8+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgY29uc3QgZ2V0U2VydmVyU2lkZVByb3BzID0gYXN5bmMgKGNvbnRleHQpID0+IHtcbiAgY29uc3QgeyBjb29raWUgfSA9IGNvbnRleHQucmVxLmhlYWRlcnM7XG4gIGlmIChjb29raWUgPT09IHVuZGVmaW5lZCkgcmV0dXJuIHsgcHJvcHM6IHsgZGF0YTogeyBzdGF0dXM6IGZhbHNlIH0gfSB9O1xuICBjb25zdCB0b2tlbiA9IGNvb2tpZS5yZXBsYWNlKFwidG9rZW49XCIsIFwiXCIpO1xuICBjb25zdCBkYXRhID0gYXdhaXQgYXhpb3Moe1xuICAgIHVybDogYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvc2hvcC9nZXRTaG9wYCxcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXG4gICAgaGVhZGVyczoge1xuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICBBdXRob3JpemF0aW9uOiB0b2tlbixcbiAgICB9LFxuICB9KTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyBkYXRhOiBkYXRhLmRhdGEgfSwgLy8gd2lsbCBiZSBwYXNzZWQgdG8gdGhlIHBhZ2UgY29tcG9uZW50IGFzIHByb3BzXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "jwt-decode":
/*!*****************************!*\
  !*** external "jwt-decode" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jwt-decode\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqd3QtZGVjb2RlXCI/M2U5OSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJqd3QtZGVjb2RlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiand0LWRlY29kZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///jwt-decode\n");

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

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });