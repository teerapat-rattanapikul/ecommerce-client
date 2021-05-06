webpackHotUpdate_N_E("pages/shop/product/detail/[...productid]",{

/***/ "./pages/shop/product/detail/[...productid].js":
/*!*****************************************************!*\
  !*** ./pages/shop/product/detail/[...productid].js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _detail_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./detail.module.css */ \"./pages/shop/product/detail/detail.module.css\");\n/* harmony import */ var _detail_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_detail_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_ui_Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/ui/Loading */ \"./components/ui/Loading.js\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jwt-decode */ \"./node_modules/jwt-decode/build/jwt-decode.esm.js\");\n\n\nvar _jsxFileName = \"/Users/teerapat/Documents/project/ecommerce/client/pages/shop/product/detail/[...productid].js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar styles = \"input-group-text fw-normal mb-2 d-inline-block text-truncate\";\n\nvar ProductDetail = function ProductDetail(props) {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  var productid = router.query.productid;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(),\n      product = _useState[0],\n      setProduct = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(true),\n      loading = _useState2[0],\n      setLoading = _useState2[1];\n\n  if (productid && loading) {\n    var decoded = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(productid[0]);\n    var validToken = localStorage.getItem(\"token\");\n\n    if (validToken !== router.query.productid[0]) {\n      alert(\"คุณไม่มีสิทธิ๋ในการเข้าถึง\");\n      router.replace(\"/login\");\n    }\n\n    axios__WEBPACK_IMPORTED_MODULE_1___default()({\n      url: \"http://localhost:8000/api/product/getDetail\",\n      method: \"post\",\n      data: {\n        productId: productid[2],\n        shopId: productid[1],\n        userId: decoded.user.id\n      },\n      headers: {\n        \"Content-Type\": \"application/json\"\n      }\n    }).then(function (res) {\n      console.log(res.data);\n\n      if (!res.data) {\n        alert(\"คุณไม่มีสิทธิ์ในการเข้าถึงข้อมูล\");\n        router.replace(\"/login\");\n      } else {\n        setProduct(res.data);\n        setLoading(false);\n      }\n    });\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"container\",\n    children: loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_ui_Loading__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      loading: loading\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 9\n    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _detail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.contianer__productdetail,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        className: _detail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.detail__image,\n        src: \"http://localhost:8000/\".concat(product.image)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _detail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.detail__content,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          className: _detail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.detail__text,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n            className: styles,\n            children: \"\\u0E0A\\u0E37\\u0E48\\u0E2D\\u0E1C\\u0E25\\u0E34\\u0E15\\u0E20\\u0E31\\u0E13\\u0E11\\u0E4C\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 56,\n            columnNumber: 15\n          }, _this), product.name]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 55,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          className: _detail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.detail__text,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n            className: styles,\n            children: \"\\u0E23\\u0E32\\u0E22\\u0E25\\u0E30\\u0E40\\u0E2D\\u0E35\\u0E22\\u0E14\\u0E2A\\u0E34\\u0E19\\u0E04\\u0E49\\u0E32\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 60,\n            columnNumber: 15\n          }, _this), product.detail]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          className: _detail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.detail__text,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n            className: styles,\n            children: \"\\u0E23\\u0E32\\u0E04\\u0E32\\u0E15\\u0E48\\u0E2D\\u0E0A\\u0E34\\u0E49\\u0E19\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 64,\n            columnNumber: 15\n          }, _this), product.price, \" \\u0E1A\\u0E32\\u0E17\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 63,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          className: _detail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.detail__text,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n            className: styles,\n            children: \"\\u0E08\\u0E33\\u0E19\\u0E27\\u0E19\\u0E0A\\u0E34\\u0E49\\u0E19\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 68,\n            columnNumber: 15\n          }, _this), \" \", product.amount, \" \\u0E0A\\u0E34\\u0E49\\u0E19\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 67,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          className: _detail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.detail__text,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n            className: styles,\n            style: {\n              maxWidth: \"200px\"\n            },\n            children: \"\\u0E2A\\u0E16\\u0E32\\u0E19\\u0E30\\u0E1C\\u0E25\\u0E34\\u0E15\\u0E20\\u0E31\\u0E13\\u0E11\\u0E4C\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 71,\n            columnNumber: 15\n          }, _this), product.status ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n            style: {\n              color: \"#26ff00\"\n            },\n            children: \"\\u0E27\\u0E32\\u0E07\\u0E08\\u0E33\\u0E2B\\u0E19\\u0E48\\u0E32\\u0E22\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 75,\n            columnNumber: 17\n          }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n            style: {\n              color: \"#ff0000\"\n            },\n            children: \"\\u0E22\\u0E31\\u0E07\\u0E44\\u0E21\\u0E48\\u0E44\\u0E14\\u0E49\\u0E27\\u0E32\\u0E07\\u0E08\\u0E33\\u0E2B\\u0E19\\u0E48\\u0E32\\u0E22\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 77,\n            columnNumber: 17\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          onClick: function onClick() {\n            router.push({\n              pathname: \"/shop/product/edit/\".concat(productid[0], \"/\").concat(productid[1], \"/\").concat(productid[2])\n            }, undefined, {\n              scroll: false\n            });\n          },\n          className: \"btn btn-secondary\",\n          children: \"edit\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 81,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 11\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 9\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 45,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(ProductDetail, \"I0zyTMsLqGGd0RQ8Xxm0h9tWkCs=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"]];\n});\n\n_c = ProductDetail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductDetail);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProductDetail\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2hvcC9wcm9kdWN0L2RldGFpbC9bLi4ucHJvZHVjdGlkXS5qcz9hNjhiIl0sIm5hbWVzIjpbInN0eWxlcyIsIlByb2R1Y3REZXRhaWwiLCJwcm9wcyIsInJvdXRlciIsInVzZVJvdXRlciIsInByb2R1Y3RpZCIsInF1ZXJ5IiwidXNlU3RhdGUiLCJwcm9kdWN0Iiwic2V0UHJvZHVjdCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZGVjb2RlZCIsImp3dF9kZWNvZGUiLCJ2YWxpZFRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImFsZXJ0IiwicmVwbGFjZSIsImF4aW9zIiwidXJsIiwibWV0aG9kIiwiZGF0YSIsInByb2R1Y3RJZCIsInNob3BJZCIsInVzZXJJZCIsInVzZXIiLCJpZCIsImhlYWRlcnMiLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsImNsYXNzZXMiLCJjb250aWFuZXJfX3Byb2R1Y3RkZXRhaWwiLCJkZXRhaWxfX2ltYWdlIiwiaW1hZ2UiLCJkZXRhaWxfX2NvbnRlbnQiLCJkZXRhaWxfX3RleHQiLCJuYW1lIiwiZGV0YWlsIiwicHJpY2UiLCJhbW91bnQiLCJtYXhXaWR0aCIsInN0YXR1cyIsImNvbG9yIiwicHVzaCIsInBhdGhuYW1lIiwidW5kZWZpbmVkIiwic2Nyb2xsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsTUFBTSxHQUFHLDhEQUFmOztBQUNBLElBQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQy9CLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFEK0IsTUFFdkJDLFNBRnVCLEdBRVRGLE1BQU0sQ0FBQ0csS0FGRSxDQUV2QkQsU0FGdUI7O0FBQUEsa0JBR0RFLHNEQUFRLEVBSFA7QUFBQSxNQUd4QkMsT0FId0I7QUFBQSxN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b2R1Y3QvZGV0YWlsL1suLi5wcm9kdWN0aWRdLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vZGV0YWlsLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBMb2FkaW5nIGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL3VpL0xvYWRpbmdcIjtcbmltcG9ydCBqd3RfZGVjb2RlIGZyb20gXCJqd3QtZGVjb2RlXCI7XG5jb25zdCBzdHlsZXMgPSBcImlucHV0LWdyb3VwLXRleHQgZnctbm9ybWFsIG1iLTIgZC1pbmxpbmUtYmxvY2sgdGV4dC10cnVuY2F0ZVwiO1xuY29uc3QgUHJvZHVjdERldGFpbCA9IChwcm9wcykgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyBwcm9kdWN0aWQgfSA9IHJvdXRlci5xdWVyeTtcbiAgY29uc3QgW3Byb2R1Y3QsIHNldFByb2R1Y3RdID0gdXNlU3RhdGUoKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgaWYgKHByb2R1Y3RpZCAmJiBsb2FkaW5nKSB7XG4gICAgY29uc3QgZGVjb2RlZCA9IGp3dF9kZWNvZGUocHJvZHVjdGlkWzBdKTtcbiAgICBjb25zdCB2YWxpZFRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKTtcbiAgICBpZiAodmFsaWRUb2tlbiAhPT0gcm91dGVyLnF1ZXJ5LnByb2R1Y3RpZFswXSkge1xuICAgICAgYWxlcnQoXCLguITguLjguJPguYTguKHguYjguKHguLXguKrguLTguJfguJjguLTguYvguYPguJnguIHguLLguKPguYDguILguYnguLLguJbguLbguIdcIik7XG4gICAgICByb3V0ZXIucmVwbGFjZShcIi9sb2dpblwiKTtcbiAgICB9XG4gICAgYXhpb3Moe1xuICAgICAgdXJsOiBgaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9wcm9kdWN0L2dldERldGFpbGAsXG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgZGF0YToge1xuICAgICAgICBwcm9kdWN0SWQ6IHByb2R1Y3RpZFsyXSxcbiAgICAgICAgc2hvcElkOiBwcm9kdWN0aWRbMV0sXG4gICAgICAgIHVzZXJJZDogZGVjb2RlZC51c2VyLmlkLFxuICAgICAgfSxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICB9LFxuICAgIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEpO1xuICAgICAgaWYgKCFyZXMuZGF0YSkge1xuICAgICAgICBhbGVydChcIuC4hOC4uOC4k+C5hOC4oeC5iOC4oeC4teC4quC4tOC4l+C4mOC4tOC5jOC5g+C4meC4geC4suC4o+C5gOC4guC5ieC4suC4luC4tuC4h+C4guC5ieC4reC4oeC4ueC4pVwiKTtcbiAgICAgICAgcm91dGVyLnJlcGxhY2UoXCIvbG9naW5cIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRQcm9kdWN0KHJlcy5kYXRhKTtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICB7bG9hZGluZyA/IChcbiAgICAgICAgPExvYWRpbmcgbG9hZGluZz17bG9hZGluZ30gLz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRpYW5lcl9fcHJvZHVjdGRldGFpbH0+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmRldGFpbF9faW1hZ2V9XG4gICAgICAgICAgICBzcmM9e2BodHRwOi8vbG9jYWxob3N0OjgwMDAvJHtwcm9kdWN0LmltYWdlfWB9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXRhaWxfX2NvbnRlbnR9PlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXRhaWxfX3RleHR9PlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlc30+4LiK4Li34LmI4Lit4Lic4Lil4Li04LiV4Lig4Lix4LiT4LiR4LmMPC9zcGFuPlxuICAgICAgICAgICAgICB7cHJvZHVjdC5uYW1lfVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e2NsYXNzZXMuZGV0YWlsX190ZXh0fT5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXN9PuC4o+C4suC4ouC4peC4sOC5gOC4reC4teC4ouC4lOC4quC4tOC4meC4hOC5ieC4sjwvc3Bhbj5cbiAgICAgICAgICAgICAge3Byb2R1Y3QuZGV0YWlsfVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e2NsYXNzZXMuZGV0YWlsX190ZXh0fT5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXN9PuC4o+C4suC4hOC4suC4leC5iOC4reC4iuC4tOC5ieC4mTwvc3Bhbj5cbiAgICAgICAgICAgICAge3Byb2R1Y3QucHJpY2V9IOC4muC4suC4l1xuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e2NsYXNzZXMuZGV0YWlsX190ZXh0fT5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXN9PuC4iOC4s+C4meC4p+C4meC4iuC4tOC5ieC4mTwvc3Bhbj4ge3Byb2R1Y3QuYW1vdW50fSDguIrguLTguYnguJlcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtjbGFzc2VzLmRldGFpbF9fdGV4dH0+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzfSBzdHlsZT17eyBtYXhXaWR0aDogXCIyMDBweFwiIH19PlxuICAgICAgICAgICAgICAgIOC4quC4luC4suC4meC4sOC4nOC4peC4tOC4leC4oOC4seC4k+C4keC5jFxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIHtwcm9kdWN0LnN0YXR1cyA/IChcbiAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e3sgY29sb3I6IFwiIzI2ZmYwMFwiIH19PuC4p+C4suC4h+C4iOC4s+C4q+C4meC5iOC4suC4ojwvbGFiZWw+XG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXt7IGNvbG9yOiBcIiNmZjAwMDBcIiB9fT7guKLguLHguIfguYTguKHguYjguYTguJTguYnguKfguLLguIfguIjguLPguKvguJnguYjguLLguKI8L2xhYmVsPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgcm91dGVyLnB1c2goXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBgL3Nob3AvcHJvZHVjdC9lZGl0LyR7cHJvZHVjdGlkWzBdfS8ke3Byb2R1Y3RpZFsxXX0vJHtwcm9kdWN0aWRbMl19YCxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBlZGl0XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdERldGFpbDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/shop/product/detail/[...productid].js\n");

/***/ })

})