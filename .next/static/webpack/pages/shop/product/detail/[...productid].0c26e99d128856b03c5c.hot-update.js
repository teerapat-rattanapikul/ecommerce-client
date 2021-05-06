webpackHotUpdate_N_E("pages/shop/product/detail/[...productid]",{

/***/ "./pages/shop/product/detail/[...productid].js":
/*!*****************************************************!*\
  !*** ./pages/shop/product/detail/[...productid].js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _detail_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./detail.module.css */ \"./pages/shop/product/detail/detail.module.css\");\n/* harmony import */ var _detail_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_detail_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_ui_Loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/ui/Loading */ \"./components/ui/Loading.js\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jwt-decode */ \"./node_modules/jwt-decode/build/jwt-decode.esm.js\");\n\n\nvar _jsxFileName = \"/Users/teerapat/Documents/project/ecommerce/client/pages/shop/product/detail/[...productid].js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nvar styles = \"input-group-text fw-normal mb-2 d-inline-block text-truncate\";\n\nvar ProductDetail = function ProductDetail(props) {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  var productid = router.query.productid;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(),\n      product = _useState[0],\n      setProduct = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(true),\n      loading = _useState2[0],\n      setLoading = _useState2[1];\n\n  if (productid && loading) {\n    var decoded = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(productid[0]);\n    var validToken = localStorage.getItem(\"token\");\n\n    if (validToken !== router.query.productid[0]) {\n      alert(\"คุณไม่มีสิทธิ๋ในการเข้าถึง\");\n      router.replace(\"/login\");\n    }\n\n    axios__WEBPACK_IMPORTED_MODULE_1___default()({\n      url: \"http://localhost:8000/api/product/getDetail\",\n      method: \"post\",\n      data: {\n        productId: productid[2],\n        shopId: productid[1],\n        userId: decoded.user.id\n      },\n      headers: {\n        \"Content-Type\": \"application/json\"\n      }\n    }).then(function (res) {\n      console.log(res.data);\n\n      if (!res.data) {\n        alert(\"คุณไม่มีสิทธิ์ในการเข้าถึงข้อมูล\");\n        router.replace(\"/login\");\n      } else {\n        setProduct(res.data);\n        setLoading(false);\n      }\n    });\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"container\",\n    children: loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_ui_Loading__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      loading: loading\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 9\n    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _detail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.contianer__productdetail,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        className: \"mb-5 h2\",\n        children: \"\\u0E23\\u0E32\\u0E22\\u0E25\\u0E30\\u0E40\\u0E2D\\u0E35\\u0E22\\u0E14\\u0E2A\\u0E34\\u0E19\\u0E04\\u0E49\\u0E32\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        className: _detail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.detail__image,\n        src: \"http://localhost:8000/\".concat(product.image)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 51,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _detail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.detail__content,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          className: _detail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.detail__text,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n            className: styles,\n            children: \"\\u0E0A\\u0E37\\u0E48\\u0E2D\\u0E1C\\u0E25\\u0E34\\u0E15\\u0E20\\u0E31\\u0E13\\u0E11\\u0E4C\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 57,\n            columnNumber: 15\n          }, _this), product.name]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 56,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          className: _detail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.detail__text,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n            className: styles,\n            children: \"\\u0E23\\u0E32\\u0E22\\u0E25\\u0E30\\u0E40\\u0E2D\\u0E35\\u0E22\\u0E14\\u0E2A\\u0E34\\u0E19\\u0E04\\u0E49\\u0E32\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 61,\n            columnNumber: 15\n          }, _this), product.detail]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 60,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          className: _detail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.detail__text,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n            className: styles,\n            children: \"\\u0E23\\u0E32\\u0E04\\u0E32\\u0E15\\u0E48\\u0E2D\\u0E0A\\u0E34\\u0E49\\u0E19\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 65,\n            columnNumber: 15\n          }, _this), product.price, \" \\u0E1A\\u0E32\\u0E17\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          className: _detail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.detail__text,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n            className: styles,\n            children: \"\\u0E08\\u0E33\\u0E19\\u0E27\\u0E19\\u0E0A\\u0E34\\u0E49\\u0E19\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 69,\n            columnNumber: 15\n          }, _this), \" \", product.amount, \" \\u0E0A\\u0E34\\u0E49\\u0E19\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 68,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n          className: _detail_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.detail__text,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n            className: styles,\n            style: {\n              maxWidth: \"200px\"\n            },\n            children: \"\\u0E2A\\u0E16\\u0E32\\u0E19\\u0E30\\u0E1C\\u0E25\\u0E34\\u0E15\\u0E20\\u0E31\\u0E13\\u0E11\\u0E4C\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 72,\n            columnNumber: 15\n          }, _this), product.status ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n            style: {\n              color: \"#26ff00\"\n            },\n            children: \"\\u0E27\\u0E32\\u0E07\\u0E08\\u0E33\\u0E2B\\u0E19\\u0E48\\u0E32\\u0E22\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 76,\n            columnNumber: 17\n          }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n            style: {\n              color: \"#ff0000\"\n            },\n            children: \"\\u0E22\\u0E31\\u0E07\\u0E44\\u0E21\\u0E48\\u0E44\\u0E14\\u0E49\\u0E27\\u0E32\\u0E07\\u0E08\\u0E33\\u0E2B\\u0E19\\u0E48\\u0E32\\u0E22\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 78,\n            columnNumber: 17\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 13\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          onClick: function onClick() {\n            router.push({\n              pathname: \"/shop/product/edit/\".concat(productid[0], \"/\").concat(productid[1], \"/\").concat(productid[2])\n            }, undefined, {\n              scroll: false\n            });\n          },\n          className: \"btn btn-secondary\",\n          children: \"edit\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 82,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 55,\n        columnNumber: 11\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 9\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 45,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(ProductDetail, \"I0zyTMsLqGGd0RQ8Xxm0h9tWkCs=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"]];\n});\n\n_c = ProductDetail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductDetail);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProductDetail\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2hvcC9wcm9kdWN0L2RldGFpbC9bLi4ucHJvZHVjdGlkXS5qcz9hNjhiIl0sIm5hbWVzIjpbInN0eWxlcyIsIlByb2R1Y3REZXRhaWwiLCJwcm9wcyIsInJvdXRlciIsInVzZVJvdXRlciIsInByb2R1Y3RpZCIsInF1ZXJ5IiwidXNlU3RhdGUiLCJwcm9kdWN0Iiwic2V0UHJvZHVjdCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZGVjb2RlZCIsImp3dF9kZWNvZGUiLCJ2YWxpZFRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImFsZXJ0IiwicmVwbGFjZSIsImF4aW9zIiwidXJsIiwibWV0aG9kIiwiZGF0YSIsInByb2R1Y3RJZCIsInNob3BJZCIsInVzZXJJZCIsInVzZXIiLCJpZCIsImhlYWRlcnMiLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsImNsYXNzZXMiLCJjb250aWFuZXJfX3Byb2R1Y3RkZXRhaWwiLCJkZXRhaWxfX2ltYWdlIiwiaW1hZ2UiLCJkZXRhaWxfX2NvbnRlbnQiLCJkZXRhaWxfX3RleHQiLCJuYW1lIiwiZGV0YWlsIiwicHJpY2UiLCJhbW91bnQiLCJtYXhXaWR0aCIsInN0YXR1cyIsImNvbG9yIiwicHVzaCIsInBhdGhuYW1lIiwidW5kZWZpbmVkIiwic2Nyb2xsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsTUFBTSxHQUFHLDhEQUFmOztBQUNBLElBQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQy9CLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFEK0IsTUFFdkJDLFNBRnVCLEdBRVRGLE1BQU0sQ0FBQ0csS0FGRSxDQUV2QkQsU0FGdUI7O0FBQUEsa0JBR0RFLHNEQUFRLEVBSFA7QUFBQSxNQUd4QkMsT0FId0I7QUFBQSxN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TWhELGE7VUFDV0cscUQ7OztLQURYSCxhO0FBaUdTQSw0RUFBZiIsImZpbGUiOiIuL3BhZ2VzL3Nob3AvcHJvZHVjdC9kZXRhaWwvWy4uLnByb2R1Y3RpZF0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9kZXRhaWwubW9kdWxlLmNzc1wiO1xuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4uLy4uLy4uLy4uL2NvbXBvbmVudHMvdWkvTG9hZGluZ1wiO1xuaW1wb3J0IGp3dF9kZWNvZGUgZnJvbSBcImp3dC1kZWNvZGVcIjtcbmNvbnN0IHN0eWxlcyA9IFwiaW5wdXQtZ3JvdXAtdGV4dCBmdy1ub3JtYWwgbWItMiBkLWlubGluZS1ibG9jayB0ZXh0LXRydW5jYXRlXCI7XG5jb25zdCBQcm9kdWN0RGV0YWlsID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IHByb2R1Y3RpZCB9ID0gcm91dGVyLnF1ZXJ5O1xuICBjb25zdCBbcHJvZHVjdCwgc2V0UHJvZHVjdF0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICBpZiAocHJvZHVjdGlkICYmIGxvYWRpbmcpIHtcbiAgICBjb25zdCBkZWNvZGVkID0gand0X2RlY29kZShwcm9kdWN0aWRbMF0pO1xuICAgIGNvbnN0IHZhbGlkVG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xuICAgIGlmICh2YWxpZFRva2VuICE9PSByb3V0ZXIucXVlcnkucHJvZHVjdGlkWzBdKSB7XG4gICAgICBhbGVydChcIuC4hOC4uOC4k+C5hOC4oeC5iOC4oeC4teC4quC4tOC4l+C4mOC4tOC5i+C5g+C4meC4geC4suC4o+C5gOC4guC5ieC4suC4luC4tuC4h1wiKTtcbiAgICAgIHJvdXRlci5yZXBsYWNlKFwiL2xvZ2luXCIpO1xuICAgIH1cbiAgICBheGlvcyh7XG4gICAgICB1cmw6IGBodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3Byb2R1Y3QvZ2V0RGV0YWlsYCxcbiAgICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHByb2R1Y3RJZDogcHJvZHVjdGlkWzJdLFxuICAgICAgICBzaG9wSWQ6IHByb2R1Y3RpZFsxXSxcbiAgICAgICAgdXNlcklkOiBkZWNvZGVkLnVzZXIuaWQsXG4gICAgICB9LFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XG4gICAgICBpZiAoIXJlcy5kYXRhKSB7XG4gICAgICAgIGFsZXJ0KFwi4LiE4Li44LiT4LmE4Lih4LmI4Lih4Li14Liq4Li04LiX4LiY4Li04LmM4LmD4LiZ4LiB4Liy4Lij4LmA4LiC4LmJ4Liy4LiW4Li24LiH4LiC4LmJ4Lit4Lih4Li54LilXCIpO1xuICAgICAgICByb3V0ZXIucmVwbGFjZShcIi9sb2dpblwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFByb2R1Y3QocmVzLmRhdGEpO1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIHtsb2FkaW5nID8gKFxuICAgICAgICA8TG9hZGluZyBsb2FkaW5nPXtsb2FkaW5nfSAvPlxuICAgICAgKSA6IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGlhbmVyX19wcm9kdWN0ZGV0YWlsfT5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e1wibWItNSBoMlwifT7guKPguLLguKLguKXguLDguYDguK3guLXguKLguJTguKrguLTguJnguITguYnguLI8L3NwYW4+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmRldGFpbF9faW1hZ2V9XG4gICAgICAgICAgICBzcmM9e2BodHRwOi8vbG9jYWxob3N0OjgwMDAvJHtwcm9kdWN0LmltYWdlfWB9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXRhaWxfX2NvbnRlbnR9PlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17Y2xhc3Nlcy5kZXRhaWxfX3RleHR9PlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlc30+4LiK4Li34LmI4Lit4Lic4Lil4Li04LiV4Lig4Lix4LiT4LiR4LmMPC9zcGFuPlxuICAgICAgICAgICAgICB7cHJvZHVjdC5uYW1lfVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e2NsYXNzZXMuZGV0YWlsX190ZXh0fT5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXN9PuC4o+C4suC4ouC4peC4sOC5gOC4reC4teC4ouC4lOC4quC4tOC4meC4hOC5ieC4sjwvc3Bhbj5cbiAgICAgICAgICAgICAge3Byb2R1Y3QuZGV0YWlsfVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e2NsYXNzZXMuZGV0YWlsX190ZXh0fT5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXN9PuC4o+C4suC4hOC4suC4leC5iOC4reC4iuC4tOC5ieC4mTwvc3Bhbj5cbiAgICAgICAgICAgICAge3Byb2R1Y3QucHJpY2V9IOC4muC4suC4l1xuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e2NsYXNzZXMuZGV0YWlsX190ZXh0fT5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXN9PuC4iOC4s+C4meC4p+C4meC4iuC4tOC5ieC4mTwvc3Bhbj4ge3Byb2R1Y3QuYW1vdW50fSDguIrguLTguYnguJlcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtjbGFzc2VzLmRldGFpbF9fdGV4dH0+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzfSBzdHlsZT17eyBtYXhXaWR0aDogXCIyMDBweFwiIH19PlxuICAgICAgICAgICAgICAgIOC4quC4luC4suC4meC4sOC4nOC4peC4tOC4leC4oOC4seC4k+C4keC5jFxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIHtwcm9kdWN0LnN0YXR1cyA/IChcbiAgICAgICAgICAgICAgICA8bGFiZWwgc3R5bGU9e3sgY29sb3I6IFwiIzI2ZmYwMFwiIH19PuC4p+C4suC4h+C4iOC4s+C4q+C4meC5iOC4suC4ojwvbGFiZWw+XG4gICAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgICAgPGxhYmVsIHN0eWxlPXt7IGNvbG9yOiBcIiNmZjAwMDBcIiB9fT7guKLguLHguIfguYTguKHguYjguYTguJTguYnguKfguLLguIfguIjguLPguKvguJnguYjguLLguKI8L2xhYmVsPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgcm91dGVyLnB1c2goXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBgL3Nob3AvcHJvZHVjdC9lZGl0LyR7cHJvZHVjdGlkWzBdfS8ke3Byb2R1Y3RpZFsxXX0vJHtwcm9kdWN0aWRbMl19YCxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBlZGl0XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdERldGFpbDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/shop/product/detail/[...productid].js\n");

/***/ })

})