module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/shop/product/detail/[productid].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/shop/product/detail/[productid].js":
/*!**************************************************!*\
  !*** ./pages/shop/product/detail/[productid].js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _detail_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./detail.module.css */ \"./pages/shop/product/detail/detail.module.css\");\n/* harmony import */ var _detail_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_detail_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _redux_actions_product__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../redux/actions/product */ \"./redux/actions/product.js\");\n\nvar _jsxFileName = \"/Users/teerapat/Documents/project/ecommerce/client/pages/shop/product/detail/[productid].js\";\n\n\n\n\n\n\n\nconst styles = \"input-group-text fw-normal mb-2 d-inline-block text-truncate\";\n\nconst ProductDetail = props => {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  const {\n    productid\n  } = router.query;\n  const {\n    0: product,\n    1: setProduct\n  } = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(() => {\n    window.scrollTo(0, 250);\n\n    if (productid) {\n      axios__WEBPACK_IMPORTED_MODULE_1___default()({\n        url: `http://localhost:8000/api/product/getDetail`,\n        method: \"post\",\n        data: {\n          productId: productid\n        },\n        headers: {\n          \"Content-Type\": \"application/json\"\n        }\n      }).then(res => {\n        console.log(res.data);\n        setProduct(res.data);\n        props.currentProduct(res.data);\n      });\n    }\n  }, []);\n  if (!product) return null;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"container container  shadow  bg-body rounded\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _detail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.contianer__productdetail,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        className: _detail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.detail__image,\n        src: `http://localhost:8000/${product.image}`\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _detail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.detail__content,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          className: _detail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.detail__text,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n            className: styles,\n            children: \"\\u0E0A\\u0E37\\u0E48\\u0E2D\\u0E1C\\u0E25\\u0E34\\u0E15\\u0E20\\u0E31\\u0E13\\u0E11\\u0E4C\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 40,\n            columnNumber: 13\n          }, undefined), product.name]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          className: _detail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.detail__text,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n            className: styles,\n            children: \"\\u0E23\\u0E32\\u0E22\\u0E25\\u0E30\\u0E40\\u0E2D\\u0E35\\u0E22\\u0E14\\u0E2A\\u0E34\\u0E19\\u0E04\\u0E49\\u0E32\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 13\n          }, undefined), product.detail]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          className: _detail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.detail__text,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n            className: styles,\n            children: \"\\u0E23\\u0E32\\u0E04\\u0E32\\u0E15\\u0E48\\u0E2D\\u0E0A\\u0E34\\u0E49\\u0E19\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 48,\n            columnNumber: 13\n          }, undefined), product.price]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 47,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          className: _detail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.detail__text,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n            className: styles,\n            children: \"\\u0E08\\u0E33\\u0E19\\u0E27\\u0E19\\u0E0A\\u0E34\\u0E49\\u0E19\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 52,\n            columnNumber: 13\n          }, undefined), \" \", product.amount]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 51,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          className: _detail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.detail__text,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n            className: styles,\n            style: {\n              maxWidth: \"200px\"\n            },\n            children: \"\\u0E2A\\u0E16\\u0E32\\u0E19\\u0E30\\u0E1C\\u0E25\\u0E34\\u0E15\\u0E20\\u0E31\\u0E13\\u0E11\\u0E4C\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 55,\n            columnNumber: 13\n          }, undefined), product.status ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n            className: \"text-success\",\n            children: \"\\u0E27\\u0E32\\u0E07\\u0E08\\u0E33\\u0E2B\\u0E19\\u0E48\\u0E32\\u0E22\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 59,\n            columnNumber: 15\n          }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n            className: \"text-danger\",\n            children: \"\\u0E22\\u0E31\\u0E07\\u0E44\\u0E21\\u0E48\\u0E44\\u0E14\\u0E49\\u0E27\\u0E32\\u0E07\\u0E08\\u0E33\\u0E2B\\u0E19\\u0E48\\u0E32\\u0E22\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 61,\n            columnNumber: 15\n          }, undefined)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 54,\n          columnNumber: 11\n        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          onClick: () => {\n            router.push(\"/shop/product/edit\");\n          },\n          className: \"btn btn-secondary\",\n          children: \"edit\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 65,\n          columnNumber: 11\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 32,\n    columnNumber: 5\n  }, undefined);\n};\n\nconst MapStateToProps = state => ({\n  product: state.product\n});\n\nconst MapDispatchToProps = {\n  currentProduct: _redux_actions_product__WEBPACK_IMPORTED_MODULE_6__[\"currentProduct\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__[\"connect\"])(MapStateToProps, MapDispatchToProps)(ProductDetail));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zaG9wL3Byb2R1Y3QvZGV0YWlsL1twcm9kdWN0aWRdLmpzPzlkNGIiXSwibmFtZXMiOlsic3R5bGVzIiwiUHJvZHVjdERldGFpbCIsInByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwicHJvZHVjdGlkIiwicXVlcnkiLCJwcm9kdWN0Iiwic2V0UHJvZHVjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwid2luZG93Iiwic2Nyb2xsVG8iLCJheGlvcyIsInVybCIsIm1ldGhvZCIsImRhdGEiLCJwcm9kdWN0SWQiLCJoZWFkZXJzIiwidGhlbiIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50UHJvZHVjdCIsImNsYXNzZXMiLCJjb250aWFuZXJfX3Byb2R1Y3RkZXRhaWwiLCJkZXRhaWxfX2ltYWdlIiwiaW1hZ2UiLCJkZXRhaWxfX2NvbnRlbnQiLCJkZXRhaWxfX3RleHQiLCJuYW1lIiwiZGV0YWlsIiwicHJpY2UiLCJhbW91bnQiLCJtYXhXaWR0aCIsInN0YXR1cyIsInB1c2giLCJNYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsIk1hcERpc3BhdGNoVG9Qcm9wcyIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU1BLE1BQU0sR0FBRyw4REFBZjs7QUFDQSxNQUFNQyxhQUFhLEdBQUlDLEtBQUQsSUFBVztBQUMvQixRQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsUUFBTTtBQUFFQztBQUFGLE1BQWdCRixNQUFNLENBQUNHLEtBQTdCO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCQyxzREFBUSxFQUF0QztBQUNBQyx5REFBUyxDQUFDLE1BQU07QUFDZEMsVUFBTSxDQUFDQyxRQUFQLENBQWdCLENBQWhCLEVBQW1CLEdBQW5COztBQUNBLFFBQUlQLFNBQUosRUFBZTtB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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBOENELENBcEVEOztBQXNFQSxNQUFNQyxlQUFlLEdBQUlDLEtBQUQsS0FBWTtBQUNsQy9CLFNBQU8sRUFBRStCLEtBQUssQ0FBQy9CO0FBRG1CLENBQVosQ0FBeEI7O0FBSUEsTUFBTWdDLGtCQUFrQixHQUFHO0FBQ3pCaEIsZ0JBQWMsRUFBRUEscUVBQWNBO0FBREwsQ0FBM0I7QUFJZWlCLDBIQUFPLENBQUNILGVBQUQsRUFBa0JFLGtCQUFsQixDQUFQLENBQTZDdEMsYUFBN0MsQ0FBZiIsImZpbGUiOiIuL3BhZ2VzL3Nob3AvcHJvZHVjdC9kZXRhaWwvW3Byb2R1Y3RpZF0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL2RldGFpbC5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyBjdXJyZW50UHJvZHVjdCB9IGZyb20gXCIuLi8uLi8uLi8uLi9yZWR1eC9hY3Rpb25zL3Byb2R1Y3RcIjtcbmltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XG5jb25zdCBzdHlsZXMgPSBcImlucHV0LWdyb3VwLXRleHQgZnctbm9ybWFsIG1iLTIgZC1pbmxpbmUtYmxvY2sgdGV4dC10cnVuY2F0ZVwiO1xuY29uc3QgUHJvZHVjdERldGFpbCA9IChwcm9wcykgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBwcm9kdWN0aWQgfSA9IHJvdXRlci5xdWVyeTtcbiAgY29uc3QgW3Byb2R1Y3QsIHNldFByb2R1Y3RdID0gdXNlU3RhdGUoKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMjUwKTtcbiAgICBpZiAocHJvZHVjdGlkKSB7XG4gICAgICBheGlvcyh7XG4gICAgICAgIHVybDogYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvcHJvZHVjdC9nZXREZXRhaWxgLFxuICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgICBkYXRhOiB7IHByb2R1Y3RJZDogcHJvZHVjdGlkIH0sXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICAgIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XG4gICAgICAgIHNldFByb2R1Y3QocmVzLmRhdGEpO1xuICAgICAgICBwcm9wcy5jdXJyZW50UHJvZHVjdChyZXMuZGF0YSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFtdKTtcbiAgaWYgKCFwcm9kdWN0KSByZXR1cm4gbnVsbDtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjb250YWluZXIgIHNoYWRvdyAgYmctYm9keSByb3VuZGVkXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250aWFuZXJfX3Byb2R1Y3RkZXRhaWx9PlxuICAgICAgICA8aW1nXG4gICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmRldGFpbF9faW1hZ2V9XG4gICAgICAgICAgc3JjPXtgaHR0cDovL2xvY2FsaG9zdDo4MDAwLyR7cHJvZHVjdC5pbWFnZX1gfVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXRhaWxfX2NvbnRlbnR9PlxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e2NsYXNzZXMuZGV0YWlsX190ZXh0fT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzfT7guIrguLfguYjguK3guJzguKXguLTguJXguKDguLHguJPguJHguYw8L3NwYW4+XG4gICAgICAgICAgICB7cHJvZHVjdC5uYW1lfVxuICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXRhaWxfX3RleHR9PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXN9PuC4o+C4suC4ouC4peC4sOC5gOC4reC4teC4ouC4lOC4quC4tOC4meC4hOC5ieC4sjwvc3Bhbj5cbiAgICAgICAgICAgIHtwcm9kdWN0LmRldGFpbH1cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e2NsYXNzZXMuZGV0YWlsX190ZXh0fT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzfT7guKPguLLguITguLLguJXguYjguK3guIrguLTguYnguJk8L3NwYW4+XG4gICAgICAgICAgICB7cHJvZHVjdC5wcmljZX1cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e2NsYXNzZXMuZGV0YWlsX190ZXh0fT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzfT7guIjguLPguJnguKfguJnguIrguLTguYnguJk8L3NwYW4+IHtwcm9kdWN0LmFtb3VudH1cbiAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e2NsYXNzZXMuZGV0YWlsX190ZXh0fT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzfSBzdHlsZT17eyBtYXhXaWR0aDogXCIyMDBweFwiIH19PlxuICAgICAgICAgICAgICDguKrguJbguLLguJnguLDguJzguKXguLTguJXguKDguLHguJPguJHguYxcbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIHtwcm9kdWN0LnN0YXR1cyA/IChcbiAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cInRleHQtc3VjY2Vzc1wiPuC4p+C4suC4h+C4iOC4s+C4q+C4meC5iOC4suC4ojwvbGFiZWw+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj7guKLguLHguIfguYTguKHguYjguYTguJTguYnguKfguLLguIfguIjguLPguKvguJnguYjguLLguKI8L2xhYmVsPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2xhYmVsPlxuXG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICByb3V0ZXIucHVzaChcIi9zaG9wL3Byb2R1Y3QvZWRpdFwiKTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgZWRpdFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgTWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xuICBwcm9kdWN0OiBzdGF0ZS5wcm9kdWN0LFxufSk7XG5cbmNvbnN0IE1hcERpc3BhdGNoVG9Qcm9wcyA9IHtcbiAgY3VycmVudFByb2R1Y3Q6IGN1cnJlbnRQcm9kdWN0LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChNYXBTdGF0ZVRvUHJvcHMsIE1hcERpc3BhdGNoVG9Qcm9wcykoUHJvZHVjdERldGFpbCk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/shop/product/detail/[productid].js\n");

/***/ }),

/***/ "./pages/shop/product/detail/detail.module.css":
/*!*****************************************************!*\
  !*** ./pages/shop/product/detail/detail.module.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"contianer__productdetail\": \"detail_contianer__productdetail__13wVE\",\n\t\"detail__image\": \"detail_detail__image__3pI1P\",\n\t\"detail__content\": \"detail_detail__content__2ps_z\",\n\t\"detail__text\": \"detail_detail__text__1C2g5\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zaG9wL3Byb2R1Y3QvZGV0YWlsL2RldGFpbC5tb2R1bGUuY3NzP2ZiNzEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9wYWdlcy9zaG9wL3Byb2R1Y3QvZGV0YWlsL2RldGFpbC5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGlhbmVyX19wcm9kdWN0ZGV0YWlsXCI6IFwiZGV0YWlsX2NvbnRpYW5lcl9fcHJvZHVjdGRldGFpbF9fMTN3VkVcIixcblx0XCJkZXRhaWxfX2ltYWdlXCI6IFwiZGV0YWlsX2RldGFpbF9faW1hZ2VfXzNwSTFQXCIsXG5cdFwiZGV0YWlsX19jb250ZW50XCI6IFwiZGV0YWlsX2RldGFpbF9fY29udGVudF9fMnBzX3pcIixcblx0XCJkZXRhaWxfX3RleHRcIjogXCJkZXRhaWxfZGV0YWlsX190ZXh0X18xQzJnNVwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/shop/product/detail/detail.module.css\n");

/***/ }),

/***/ "./redux/actions/product.js":
/*!**********************************!*\
  !*** ./redux/actions/product.js ***!
  \**********************************/
/*! exports provided: CURRENTPRODUCT, currentProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CURRENTPRODUCT\", function() { return CURRENTPRODUCT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"currentProduct\", function() { return currentProduct; });\nconst CURRENTPRODUCT = \"CURRENTPRODUCT\";\nconst currentProduct = product => ({\n  type: CURRENTPRODUCT,\n  payload: product\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9hY3Rpb25zL3Byb2R1Y3QuanM/YmY0NyJdLCJuYW1lcyI6WyJDVVJSRU5UUFJPRFVDVCIsImN1cnJlbnRQcm9kdWN0IiwicHJvZHVjdCIsInR5cGUiLCJwYXlsb2FkIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBTyxNQUFNQSxjQUFjLEdBQUcsZ0JBQXZCO0FBRUEsTUFBTUMsY0FBYyxHQUFJQyxPQUFELEtBQWM7QUFDMUNDLE1BQUksRUFBRUgsY0FEb0M7QUFFMUNJLFNBQU8sRUFBRUY7QUFGaUMsQ0FBZCxDQUF2QiIsImZpbGUiOiIuL3JlZHV4L2FjdGlvbnMvcHJvZHVjdC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBDVVJSRU5UUFJPRFVDVCA9IFwiQ1VSUkVOVFBST0RVQ1RcIjtcblxuZXhwb3J0IGNvbnN0IGN1cnJlbnRQcm9kdWN0ID0gKHByb2R1Y3QpID0+ICh7XG4gIHR5cGU6IENVUlJFTlRQUk9EVUNULFxuICBwYXlsb2FkOiBwcm9kdWN0LFxufSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./redux/actions/product.js\n");

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