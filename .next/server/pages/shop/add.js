module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/shop/add.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/shop/add.js":
/*!***************************!*\
  !*** ./pages/shop/add.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _add_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add.module.css */ \"./pages/shop/add.module.css\");\n/* harmony import */ var _add_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_add_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"/Users/teerapat/Documents/project/ecommerce/client/pages/shop/add.js\";\n\n\n\n\n\n\nconst AddShop = props => {\n  const {\n    0: shopName,\n    1: setShopName\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\");\n  const {\n    0: errName,\n    1: setErrName\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false);\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"])();\n\n  const createShop = () => {\n    if (shopName !== \"\") {\n      axios__WEBPACK_IMPORTED_MODULE_3___default()({\n        url: `http://localhost:8000/api/shop/addShop`,\n        method: \"post\",\n        data: {\n          shopName: shopName,\n          id: props.user.id\n        },\n        headers: {\n          \"Content-Type\": \"application/json\"\n        }\n      }).then(res => {\n        if (res.data === true) {\n          router.push(\"/\");\n        } else {\n          setErrName(true);\n        }\n      });\n    }\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"container container  shadow  bg-body rounded\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _add_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.contianer__add,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        className: _add_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.title__add,\n        children: \"Add shop\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        className: _add_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.text__add,\n        children: \"Shop name:\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        type: \"text\",\n        value: shopName,\n        className: _add_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.input__add,\n        placeholder: \"type your shop name\",\n        onChange: e => {\n          setShopName(e.target.value);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        type: \"submit\",\n        className: _add_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.submit__add,\n        value: \"create\",\n        onClick: createShop\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 9\n      }, undefined), errName ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _add_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.error__add,\n        children: \"Cannot use this shop name\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 11\n      }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {}, void 0, false)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 5\n  }, undefined);\n};\n\nconst MapStatetoProps = state => ({\n  user: state.user\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__[\"connect\"])(MapStatetoProps)(AddShop));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zaG9wL2FkZC5qcz9mMWYwIl0sIm5hbWVzIjpbIkFkZFNob3AiLCJwcm9wcyIsInNob3BOYW1lIiwic2V0U2hvcE5hbWUiLCJ1c2VTdGF0ZSIsImVyck5hbWUiLCJzZXRFcnJOYW1lIiwicm91dGVyIiwidXNlUm91dGVyIiwiY3JlYXRlU2hvcCIsImF4aW9zIiwidXJsIiwibWV0aG9kIiwiZGF0YSIsImlkIiwidXNlciIsImhlYWRlcnMiLCJ0aGVuIiwicmVzIiwicHVzaCIsImNsYXNzZXMiLCJjb250aWFuZXJfX2FkZCIsInRpdGxlX19hZGQiLCJ0ZXh0X19hZGQiLCJpbnB1dF9fYWRkIiwiZSIsInRhcmdldCIsInZhbHVlIiwic3VibWl0X19hZGQiLCJlcnJvcl9fYWRkIiwiTWFwU3RhdGV0b1Byb3BzIiwic3RhdGUiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxNQUFNQSxPQUFPLEdBQUlDLEtBQUQsSUFBVztBQUN6QixRQUFNO0FBQUEsT0FBQ0MsUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJDLHNEQUFRLENBQUMsRUFBRCxDQUF4QztBQUNBLFFBQU07QUFBQSxPQUFDQyxPQUFEO0FBQUEsT0FBVUM7QUFBVixNQUF3QkYsc0RBQVEsQ0FBQyxLQUFELENBQXRDO0FBQ0EsUUFBTUcsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFDQSxRQUFNQyxVQUFVLEdBQUcsTUFBTTtBQUN2QixRQUFJUCxRQUFRLEtBQUssRUFBakIsRUFBcUI7QUFDbkJRLGtEQUFLLENBQUM7QUFDSkMsV0FBRyxFQUFHLHdDQURGO0FBRUpDLGNBQU0sRUFBRSxNQUZKO0FBR0pDLFlBQUksRUFBRTtBQUFFWCxrQkFBUSxFQUFFQSxRQUFaO0FBQXNCWSxZQUFFLEVBQUViLEtBQUssQ0FBQ2MsSUFBTixDQUFXRDtBQUFyQyxTQUhGO0FBSUpFLGVBQU8sRUFBRTtBQUNQLDBCQUFnQjtBQURUO0FBSkwsT0FBRCxDQUFMLENBT0dDLElBUEgsQ0FPU0MsR0FBRCxJQUFTO0FBQ2YsWUFBSUEsR0FBRyxDQUFDTCxJQUFKLEtBQWEsSUFBakIsRUFBdUI7QUFDckJOLGdCQUFNLENBQUNZLElBQVAsQ0FBWSxHQUFaO0FBQ0QsU0FGRCxNQUVPO0FBQ0xiLG9CQUFVLENBQUMsSUFBRCxDQUFWO0FBQ0Q7QUFDRixPQWJEO0FBY0Q7QUFDRixHQWpCRDs7QUFtQkEsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsOENBQWY7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBRWMsc0RBQU8sQ0FBQ0MsY0FBeEI7QUFBQSw4QkFDRTtBQUFPLGlCQUFTLEVBQUVELHNEQUFPLENBQUNFLFVBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBTyxpQkFBUyxFQUFFRixzREFBTyxDQUFDRyxTQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRixlQUdFO0FBQ0UsWUFBSSxFQUFDLE1BRFA7QUFFRSxhQUFLLEVBQUVyQixRQUZUO0FBR0UsaUJBQVMsRUFBRWtCLHNEQUFPLENBQUNJLFVBSHJCO0FBSUUsbUJBQVcsRUFBQyxxQkFKZDtBQUtFLGdCQUFRLEVBQUdDLENBQUQsSUFBTztBQUNmdEIscUJBQVcsQ0FBQ3NCLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQVg7QUFDRDtBQVBIO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSEYsZUFZRTtBQUNFLFlBQUksRUFBQyxRQURQO0FBRUUsaUJBQVMsRUFBRVAsc0RBQU8sQ0FBQ1EsV0FGckI7QUFHRSxhQUFLLEVBQUMsUUFIUjtBQUlFLGVBQU8sRUFBRW5CO0FBSlg7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFaRixFQWtCR0osT0FBTyxnQkFDTjtBQUFLLGlCQUFTLEVBQUVlLHNEQUFPLENBQUNTLFVBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURNLGdCQUdOLHVKQXJCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUE0QkQsQ0FuREQ7O0FBb0RBLE1BQU1DLGVBQWUsR0FBSUMsS0FBRCxLQUFZO0FBQ2xDaEIsTUFBSSxFQUFFZ0IsS0FBSyxDQUFDaEI7QUFEc0IsQ0FBWixDQUF4Qjs7QUFHZWlCLDBIQUFPLENBQUNGLGVBQUQsQ0FBUCxDQUF5QjlCLE9BQXpCLENBQWYiLCJmaWxlIjoiLi9wYWdlcy9zaG9wL2FkZC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9hZGQubW9kdWxlLmNzc1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5jb25zdCBBZGRTaG9wID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IFtzaG9wTmFtZSwgc2V0U2hvcE5hbWVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtlcnJOYW1lLCBzZXRFcnJOYW1lXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IGNyZWF0ZVNob3AgPSAoKSA9PiB7XG4gICAgaWYgKHNob3BOYW1lICE9PSBcIlwiKSB7XG4gICAgICBheGlvcyh7XG4gICAgICAgIHVybDogYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvc2hvcC9hZGRTaG9wYCxcbiAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgICAgZGF0YTogeyBzaG9wTmFtZTogc2hvcE5hbWUsIGlkOiBwcm9wcy51c2VyLmlkIH0sXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICAgIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBpZiAocmVzLmRhdGEgPT09IHRydWUpIHtcbiAgICAgICAgICByb3V0ZXIucHVzaChcIi9cIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2V0RXJyTmFtZSh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY29udGFpbmVyICBzaGFkb3cgIGJnLWJvZHkgcm91bmRlZFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGlhbmVyX19hZGR9PlxuICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlX19hZGR9PkFkZCBzaG9wPC9sYWJlbD5cbiAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17Y2xhc3Nlcy50ZXh0X19hZGR9PlNob3AgbmFtZTo8L2xhYmVsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgdmFsdWU9e3Nob3BOYW1lfVxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnB1dF9fYWRkfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwidHlwZSB5b3VyIHNob3AgbmFtZVwiXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICBzZXRTaG9wTmFtZShlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnN1Ym1pdF9fYWRkfVxuICAgICAgICAgIHZhbHVlPVwiY3JlYXRlXCJcbiAgICAgICAgICBvbkNsaWNrPXtjcmVhdGVTaG9wfVxuICAgICAgICAvPlxuICAgICAgICB7ZXJyTmFtZSA/IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5lcnJvcl9fYWRkfT5DYW5ub3QgdXNlIHRoaXMgc2hvcCBuYW1lPC9kaXY+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPD48Lz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbmNvbnN0IE1hcFN0YXRldG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcbiAgdXNlcjogc3RhdGUudXNlcixcbn0pO1xuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChNYXBTdGF0ZXRvUHJvcHMpKEFkZFNob3ApO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/shop/add.js\n");

/***/ }),

/***/ "./pages/shop/add.module.css":
/*!***********************************!*\
  !*** ./pages/shop/add.module.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"contianer__add\": \"add_contianer__add__1SW9e\",\n\t\"text__add\": \"add_text__add__5dB_Y\",\n\t\"title__add\": \"add_title__add__28Y91\",\n\t\"input__add\": \"add_input__add__1N_Op\",\n\t\"submit__add\": \"add_submit__add__gMKUh\",\n\t\"error__add\": \"add_error__add__gC8Uo\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zaG9wL2FkZC5tb2R1bGUuY3NzP2QwNTYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Ii4vcGFnZXMvc2hvcC9hZGQubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRpYW5lcl9fYWRkXCI6IFwiYWRkX2NvbnRpYW5lcl9fYWRkX18xU1c5ZVwiLFxuXHRcInRleHRfX2FkZFwiOiBcImFkZF90ZXh0X19hZGRfXzVkQl9ZXCIsXG5cdFwidGl0bGVfX2FkZFwiOiBcImFkZF90aXRsZV9fYWRkX18yOFk5MVwiLFxuXHRcImlucHV0X19hZGRcIjogXCJhZGRfaW5wdXRfX2FkZF9fMU5fT3BcIixcblx0XCJzdWJtaXRfX2FkZFwiOiBcImFkZF9zdWJtaXRfX2FkZF9fZ01LVWhcIixcblx0XCJlcnJvcl9fYWRkXCI6IFwiYWRkX2Vycm9yX19hZGRfX2dDOFVvXCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/shop/add.module.css\n");

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