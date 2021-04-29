webpackHotUpdate_N_E("pages/shop/product/addProduct/[shopid]",{

/***/ "./pages/shop/product/addProduct/[shopid].js":
/*!***************************************************!*\
  !*** ./pages/shop/product/addProduct/[shopid].js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _addproduct_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./addproduct.module.css */ \"./pages/shop/product/addProduct/addproduct.module.css\");\n/* harmony import */ var _addproduct_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_addproduct_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\nvar _jsxFileName = \"/Users/teerapat/Documents/project/ecommerce/client/pages/shop/product/addProduct/[shopid].js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar AddProduct = function AddProduct() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(\"\"),\n      imageFile = _useState[0],\n      setImageFile = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(\"\"),\n      productName = _useState2[0],\n      setProductName = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(\"\"),\n      productDetail = _useState3[0],\n      setProductDetail = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(\"\"),\n      price = _useState4[0],\n      setPrice = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(\"\"),\n      amount = _useState5[0],\n      setAmount = _useState5[1];\n\n  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(true),\n      productAdd = _useState6[0],\n      setProductAdd = _useState6[1];\n\n  var addProduct = function addProduct() {\n    var formData = new FormData();\n\n    if (imageFile === \"\" || productName.trim() === \"\" || productDetail.trim() === \"\" || price.trim() === \"\" || amount.trim() === \"\") {\n      setProductAdd(false);\n    } else {\n      formData.append(\"productImage\", imageFile);\n      formData.append(\"shopId\", router.query.shopid);\n      formData.append(\"productName\", productName);\n      formData.append(\"productDetail\", productDetail);\n      formData.append(\"productPrice\", parseInt(price));\n      formData.append(\"productAmount\", parseInt(amount));\n      axios__WEBPACK_IMPORTED_MODULE_1___default()({\n        url: \"http://localhost:8000/api/product/addProduct\",\n        method: \"post\",\n        data: formData,\n        headers: {\n          \"Content-Type\": \"multipart/form-data\"\n        }\n      }).then(function (res) {\n        if (res.data === true) {\n          router.back();\n        }\n      });\n    }\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"container container  shadow  bg-body rounded\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _addproduct_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.container__addproduct,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"input-group mb-3\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          \"class\": \"input-group-text\",\n          id: \"basic-addon1\",\n          children: \"Product Name\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          type: \"text\",\n          \"class\": \"form-control\",\n          placeholder: \"Username\",\n          \"aria-label\": \"Username\",\n          \"aria-describedby\": \"basic-addon1\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 52,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"input-group mb-3\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          \"class\": \"input-group-text\",\n          id: \"basic-addon1\",\n          children: \"Product Detail\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 61,\n          columnNumber: 11\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n          type: \"text\",\n          \"class\": \"form-control\",\n          placeholder: \"Username\",\n          \"aria-label\": \"Username\",\n          \"aria-describedby\": \"basic-addon1\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 64,\n          columnNumber: 11\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        type: \"text\",\n        value: productName,\n        placeholder: \"type product name\",\n        onChange: function onChange(e) {\n          setProductName(e.target.value);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 73,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        children: \"Product Detail: \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 81,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        type: \"text\",\n        value: productDetail,\n        placeholder: \"type product detail\",\n        onChange: function onChange(e) {\n          setProductDetail(e.target.value);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 82,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        children: \"Price: \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 90,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        type: \"text\",\n        value: price,\n        placeholder: \"type price of product\",\n        onChange: function onChange(e) {\n          setPrice(e.target.value);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 91,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        children: \"Amount\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 99,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        type: \"text\",\n        value: amount,\n        placeholder: \"type amont of product\",\n        onChange: function onChange(e) {\n          setAmount(e.target.value);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 100,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        type: \"file\",\n        onChange: function onChange(e) {\n          console.log(e.target.files[0]);\n          setImageFile(e.target.files[0]);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 108,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: addProduct,\n        children: \"save\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 115,\n        columnNumber: 9\n      }, _this), !productAdd ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: \"Please type all input\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 116,\n        columnNumber: 24\n      }, _this) : null]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 46,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(AddProduct, \"HaAgWHvtnx7tB4OP0RsaXGFBl2w=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"]];\n});\n\n_c = AddProduct;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddProduct);\n\nvar _c;\n\n$RefreshReg$(_c, \"AddProduct\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2hvcC9wcm9kdWN0L2FkZFByb2R1Y3QvW3Nob3BpZF0uanM/Yzg2NyJdLCJuYW1lcyI6WyJBZGRQcm9kdWN0Iiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJpbWFnZUZpbGUiLCJzZXRJbWFnZUZpbGUiLCJwcm9kdWN0TmFtZSIsInNldFByb2R1Y3ROYW1lIiwicHJvZHVjdERldGFpbCIsInNldFByb2R1Y3REZXRhaWwiLCJwcmljZSIsInNldFByaWNlIiwiYW1vdW50Iiwic2V0QW1vdW50IiwicHJvZHVjdEFkZCIsInNldFByb2R1Y3RBZGQiLCJhZGRQcm9kdWN0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsInRyaW0iLCJhcHBlbmQiLCJxdWVyeSIsInNob3BpZCIsInBhcnNlSW50IiwiYXhpb3MiLCJ1cmwiLCJtZXRob2QiLCJkYXRhIiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJiYWNrIiwiY2xhc3NlcyIsImNvbnRhaW5lcl9fYWRkcHJvZHVjdCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJmaWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQUE7O0FBQ3ZCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRHVCLGtCQUVXQyxzREFBUSxDQUFDLEVBQUQsQ0FGbkI7QUFBQSxNQUVoQkMsU0FGZ0I7QUFBQSxNQUVMQyxZQUZLOztBQUFBLG1CQUdlRixzREFBUSxDQUFDLEVBQUQsQ0FIdkI7QUFBQSxNQUdoQkcsV0FIZ0I7QUFBQSxNQUdIQyxjQUhHOztBQUFBLG1CQUltQkosc0RBQVEsQ0FBQyxFQUFELENBSjNCO0FBQUEsTUFJaEJLLGFBSmdCO0FBQUEsTUFJREMsZ0JBSkM7O0FBQUEsbUJBS0dOLHNEQUFRLENBQUMsRUFBRCxDQUxYO0FB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QyxzQkFBWSxDQUFDNkIsQ0FBQyxDQUFDQyxNQUFGLENBQVNJLEtBQVQsQ0FBZSxDQUFmLENBQUQsQ0FBWjtBQUNEO0FBTEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTdERixlQW9FRTtBQUFRLGVBQU8sRUFBRXZCLFVBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBcEVGLEVBcUVHLENBQUNGLFVBQUQsZ0JBQWM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBZCxHQUFpRCxJQXJFcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBMkVELENBbkhEOztHQUFNZCxVO1VBQ1dFLHFEOzs7S0FEWEYsVTtBQXFIU0EseUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9zaG9wL3Byb2R1Y3QvYWRkUHJvZHVjdC9bc2hvcGlkXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vYWRkcHJvZHVjdC5tb2R1bGUuY3NzXCI7XG5jb25zdCBBZGRQcm9kdWN0ID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW2ltYWdlRmlsZSwgc2V0SW1hZ2VGaWxlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbcHJvZHVjdE5hbWUsIHNldFByb2R1Y3ROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbcHJvZHVjdERldGFpbCwgc2V0UHJvZHVjdERldGFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3ByaWNlLCBzZXRQcmljZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2Ftb3VudCwgc2V0QW1vdW50XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbcHJvZHVjdEFkZCwgc2V0UHJvZHVjdEFkZF0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgYWRkUHJvZHVjdCA9ICgpID0+IHtcbiAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICBpZiAoXG4gICAgICBpbWFnZUZpbGUgPT09IFwiXCIgfHxcbiAgICAgIHByb2R1Y3ROYW1lLnRyaW0oKSA9PT0gXCJcIiB8fFxuICAgICAgcHJvZHVjdERldGFpbC50cmltKCkgPT09IFwiXCIgfHxcbiAgICAgIHByaWNlLnRyaW0oKSA9PT0gXCJcIiB8fFxuICAgICAgYW1vdW50LnRyaW0oKSA9PT0gXCJcIlxuICAgICkge1xuICAgICAgc2V0UHJvZHVjdEFkZChmYWxzZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvcm1EYXRhLmFwcGVuZChcInByb2R1Y3RJbWFnZVwiLCBpbWFnZUZpbGUpO1xuICAgICAgZm9ybURhdGEuYXBwZW5kKFwic2hvcElkXCIsIHJvdXRlci5xdWVyeS5zaG9waWQpO1xuICAgICAgZm9ybURhdGEuYXBwZW5kKFwicHJvZHVjdE5hbWVcIiwgcHJvZHVjdE5hbWUpO1xuICAgICAgZm9ybURhdGEuYXBwZW5kKFwicHJvZHVjdERldGFpbFwiLCBwcm9kdWN0RGV0YWlsKTtcbiAgICAgIGZvcm1EYXRhLmFwcGVuZChcInByb2R1Y3RQcmljZVwiLCBwYXJzZUludChwcmljZSkpO1xuICAgICAgZm9ybURhdGEuYXBwZW5kKFwicHJvZHVjdEFtb3VudFwiLCBwYXJzZUludChhbW91bnQpKTtcbiAgICAgIGF4aW9zKHtcbiAgICAgICAgdXJsOiBgaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9wcm9kdWN0L2FkZFByb2R1Y3RgLFxuICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgICBkYXRhOiBmb3JtRGF0YSxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiLFxuICAgICAgICB9LFxuICAgICAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGlmIChyZXMuZGF0YSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHJvdXRlci5iYWNrKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNvbnRhaW5lciAgc2hhZG93ICBiZy1ib2R5IHJvdW5kZWRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcl9fYWRkcHJvZHVjdH0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAgbWItM1wiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5wdXQtZ3JvdXAtdGV4dFwiIGlkPVwiYmFzaWMtYWRkb24xXCI+XG4gICAgICAgICAgICBQcm9kdWN0IE5hbWVcbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlVzZXJuYW1lXCJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJVc2VybmFtZVwiXG4gICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwiYmFzaWMtYWRkb24xXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cCBtYi0zXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC10ZXh0XCIgaWQ9XCJiYXNpYy1hZGRvbjFcIj5cbiAgICAgICAgICAgIFByb2R1Y3QgRGV0YWlsXG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJVc2VybmFtZVwiXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiVXNlcm5hbWVcIlxuICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cImJhc2ljLWFkZG9uMVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHZhbHVlPXtwcm9kdWN0TmFtZX1cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cInR5cGUgcHJvZHVjdCBuYW1lXCJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgIHNldFByb2R1Y3ROYW1lKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICA8bGFiZWw+UHJvZHVjdCBEZXRhaWw6IDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICB2YWx1ZT17cHJvZHVjdERldGFpbH1cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cInR5cGUgcHJvZHVjdCBkZXRhaWxcIlxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgc2V0UHJvZHVjdERldGFpbChlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPGxhYmVsPlByaWNlOiA8L2xhYmVsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgdmFsdWU9e3ByaWNlfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwidHlwZSBwcmljZSBvZiBwcm9kdWN0XCJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgIHNldFByaWNlKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICA8bGFiZWw+QW1vdW50PC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHZhbHVlPXthbW91bnR9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJ0eXBlIGFtb250IG9mIHByb2R1Y3RcIlxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgc2V0QW1vdW50KGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5maWxlc1swXSk7XG4gICAgICAgICAgICBzZXRJbWFnZUZpbGUoZS50YXJnZXQuZmlsZXNbMF0pO1xuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxidXR0b24gb25DbGljaz17YWRkUHJvZHVjdH0+c2F2ZTwvYnV0dG9uPlxuICAgICAgICB7IXByb2R1Y3RBZGQgPyA8ZGl2PlBsZWFzZSB0eXBlIGFsbCBpbnB1dDwvZGl2PiA6IG51bGx9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFkZFByb2R1Y3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/shop/product/addProduct/[shopid].js\n");

/***/ })

})