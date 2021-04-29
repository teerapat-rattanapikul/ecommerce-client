webpackHotUpdate_N_E("pages/shop/product/addProduct/[shopid]",{

/***/ "./pages/shop/product/addProduct/[shopid].js":
/*!***************************************************!*\
  !*** ./pages/shop/product/addProduct/[shopid].js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/Users/teerapat/Documents/project/ecommerce/client/pages/shop/product/addProduct/[shopid].js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar AddProduct = function AddProduct() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(\"\"),\n      imageFile = _useState[0],\n      setImageFile = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(\"\"),\n      productName = _useState2[0],\n      setProductName = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(\"\"),\n      productDetail = _useState3[0],\n      setProductDetail = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(\"\"),\n      price = _useState4[0],\n      setPrice = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(\"\"),\n      amount = _useState5[0],\n      setAmount = _useState5[1];\n\n  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(true),\n      productAdd = _useState6[0],\n      setProductAdd = _useState6[1];\n\n  var addProduct = function addProduct() {\n    var formData = new FormData();\n\n    if (imageFile === \"\" || productName.trim() === \"\" || productDetail.trim() === \"\" || price.trim() === \"\" || amount.trim() === \"\") {\n      setProductAdd(false);\n    } else {\n      formData.append(\"productImage\", imageFile);\n      formData.append(\"shopId\", router.query.shopid);\n      formData.append(\"productName\", productName);\n      formData.append(\"productDetail\", productDetail);\n      formData.append(\"productPrice\", parseInt(price));\n      formData.append(\"productAmount\", parseInt(amount));\n      axios__WEBPACK_IMPORTED_MODULE_1___default()({\n        url: \"http://localhost:8000/api/product/addProduct\",\n        method: \"post\",\n        data: formData,\n        headers: {\n          \"Content-Type\": \"multipart/form-data\"\n        }\n      }).then(function (res) {\n        if (res.data === true) {\n          router.back();\n        }\n      });\n    }\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"container container  shadow  bg-body rounded\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: classes.container__addproduct,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        children: \"Product Name: \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        type: \"text\",\n        value: productName,\n        placeholder: \"type product name\",\n        onChange: function onChange(e) {\n          setProductName(e.target.value);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        children: \"Product Detail: \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        type: \"text\",\n        value: productDetail,\n        placeholder: \"type product detail\",\n        onChange: function onChange(e) {\n          setProductDetail(e.target.value);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        children: \"Price: \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        type: \"text\",\n        value: price,\n        placeholder: \"type price of product\",\n        onChange: function onChange(e) {\n          setPrice(e.target.value);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        children: \"Amount\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        type: \"text\",\n        value: amount,\n        placeholder: \"type amont of product\",\n        onChange: function onChange(e) {\n          setAmount(e.target.value);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        type: \"file\",\n        onChange: function onChange(e) {\n          console.log(e.target.files[0]);\n          setImageFile(e.target.files[0]);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 84,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: addProduct,\n        children: \"save\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 91,\n        columnNumber: 9\n      }, _this), !productAdd ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: \"Please type all input\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 24\n      }, _this) : null]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 46,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(AddProduct, \"HaAgWHvtnx7tB4OP0RsaXGFBl2w=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"]];\n});\n\n_c = AddProduct;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddProduct);\n\nvar _c;\n\n$RefreshReg$(_c, \"AddProduct\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2hvcC9wcm9kdWN0L2FkZFByb2R1Y3QvW3Nob3BpZF0uanM/Yzg2NyJdLCJuYW1lcyI6WyJBZGRQcm9kdWN0Iiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJpbWFnZUZpbGUiLCJzZXRJbWFnZUZpbGUiLCJwcm9kdWN0TmFtZSIsInNldFByb2R1Y3ROYW1lIiwicHJvZHVjdERldGFpbCIsInNldFByb2R1Y3REZXRhaWwiLCJwcmljZSIsInNldFByaWNlIiwiYW1vdW50Iiwic2V0QW1vdW50IiwicHJvZHVjdEFkZCIsInNldFByb2R1Y3RBZGQiLCJhZGRQcm9kdWN0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsInRyaW0iLCJhcHBlbmQiLCJxdWVyeSIsInNob3BpZCIsInBhcnNlSW50IiwiYXhpb3MiLCJ1cmwiLCJtZXRob2QiLCJkYXRhIiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJiYWNrIiwiY2xhc3NlcyIsImNvbnRhaW5lcl9fYWRkcHJvZHVjdCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJmaWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFBQTs7QUFDdkIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFEdUIsa0JBRVdDLHNEQUFRLENBQUMsRUFBRCxDQUZuQjtBQUFBLE1BRWhCQyxTQUZnQjtBQUFBLE1BRUxDLFlBRks7O0FBQUEsbUJBR2VGLHNEQUFRLENBQUMsRUFBRCxDQUh2QjtBQUFBLE1BR2hCRyxXQUhnQjtBQUFBLE1BR0hDLGNBSEc7O0FBQUEsbUJBSW1CSixzREFBUSxDQUFDLEVBQUQsQ0FKM0I7QUFBQSxNQUloQkssYUFKZ0I7QUFBQSxNQUlEQyxnQkFKQzs7QUFBQSxtQkFLR04sc0RBQVEsQ0FBQyxFQUFELENBTFg7QUFBQSxNQUto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O0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFwQkYsZUE0QkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUE1QkYsZUE2QkU7QUFDRSxZQUFJLEVBQUMsTUFEUDtBQUVFLGFBQUssRUFBRXhCLE1BRlQ7QUFHRSxtQkFBVyxFQUFDLHVCQUhkO0FBSUUsZ0JBQVEsRUFBRSxrQkFBQ3NCLENBQUQsRUFBTztBQUNmckIsbUJBQVMsQ0FBQ3FCLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUFWLENBQVQ7QUFDRDtBQU5IO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUE3QkYsZUFxQ0U7QUFDRSxZQUFJLEVBQUMsTUFEUDtBQUVFLGdCQUFRLEVBQUUsa0JBQUNGLENBQUQsRUFBTztBQUNmRyxpQkFBTyxDQUFDQyxHQUFSLENBQVlKLENBQUMsQ0FBQ0MsTUFBRixDQUFTSSxLQUFULENBQWUsQ0FBZixDQUFaO0FBQ0FsQyxzQkFBWSxDQUFDNkIsQ0FBQyxDQUFDQyxNQUFGLENBQVNJLEtBQVQsQ0FBZSxDQUFmLENBQUQsQ0FBWjtBQUNEO0FBTEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQXJDRixlQTRDRTtBQUFRLGVBQU8sRUFBRXZCLFVBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBNUNGLEVBNkNHLENBQUNGLFVBQUQsZ0JBQWM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBZCxHQUFpRCxJQTdDcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBbURELENBM0ZEOztHQUFNZCxVO1VBQ1dFLHFEOzs7S0FEWEYsVTtBQTZGU0EseUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9zaG9wL3Byb2R1Y3QvYWRkUHJvZHVjdC9bc2hvcGlkXS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBBZGRQcm9kdWN0ID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW2ltYWdlRmlsZSwgc2V0SW1hZ2VGaWxlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbcHJvZHVjdE5hbWUsIHNldFByb2R1Y3ROYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbcHJvZHVjdERldGFpbCwgc2V0UHJvZHVjdERldGFpbF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3ByaWNlLCBzZXRQcmljZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2Ftb3VudCwgc2V0QW1vdW50XSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbcHJvZHVjdEFkZCwgc2V0UHJvZHVjdEFkZF0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgYWRkUHJvZHVjdCA9ICgpID0+IHtcbiAgICB2YXIgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICBpZiAoXG4gICAgICBpbWFnZUZpbGUgPT09IFwiXCIgfHxcbiAgICAgIHByb2R1Y3ROYW1lLnRyaW0oKSA9PT0gXCJcIiB8fFxuICAgICAgcHJvZHVjdERldGFpbC50cmltKCkgPT09IFwiXCIgfHxcbiAgICAgIHByaWNlLnRyaW0oKSA9PT0gXCJcIiB8fFxuICAgICAgYW1vdW50LnRyaW0oKSA9PT0gXCJcIlxuICAgICkge1xuICAgICAgc2V0UHJvZHVjdEFkZChmYWxzZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvcm1EYXRhLmFwcGVuZChcInByb2R1Y3RJbWFnZVwiLCBpbWFnZUZpbGUpO1xuICAgICAgZm9ybURhdGEuYXBwZW5kKFwic2hvcElkXCIsIHJvdXRlci5xdWVyeS5zaG9waWQpO1xuICAgICAgZm9ybURhdGEuYXBwZW5kKFwicHJvZHVjdE5hbWVcIiwgcHJvZHVjdE5hbWUpO1xuICAgICAgZm9ybURhdGEuYXBwZW5kKFwicHJvZHVjdERldGFpbFwiLCBwcm9kdWN0RGV0YWlsKTtcbiAgICAgIGZvcm1EYXRhLmFwcGVuZChcInByb2R1Y3RQcmljZVwiLCBwYXJzZUludChwcmljZSkpO1xuICAgICAgZm9ybURhdGEuYXBwZW5kKFwicHJvZHVjdEFtb3VudFwiLCBwYXJzZUludChhbW91bnQpKTtcbiAgICAgIGF4aW9zKHtcbiAgICAgICAgdXJsOiBgaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9wcm9kdWN0L2FkZFByb2R1Y3RgLFxuICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgICBkYXRhOiBmb3JtRGF0YSxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiLFxuICAgICAgICB9LFxuICAgICAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgIGlmIChyZXMuZGF0YSA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHJvdXRlci5iYWNrKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIGNvbnRhaW5lciAgc2hhZG93ICBiZy1ib2R5IHJvdW5kZWRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcl9fYWRkcHJvZHVjdH0+XG4gICAgICAgIDxsYWJlbD5Qcm9kdWN0IE5hbWU6IDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICB2YWx1ZT17cHJvZHVjdE5hbWV9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJ0eXBlIHByb2R1Y3QgbmFtZVwiXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICBzZXRQcm9kdWN0TmFtZShlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPGxhYmVsPlByb2R1Y3QgRGV0YWlsOiA8L2xhYmVsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgdmFsdWU9e3Byb2R1Y3REZXRhaWx9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJ0eXBlIHByb2R1Y3QgZGV0YWlsXCJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgIHNldFByb2R1Y3REZXRhaWwoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxsYWJlbD5QcmljZTogPC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHZhbHVlPXtwcmljZX1cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cInR5cGUgcHJpY2Ugb2YgcHJvZHVjdFwiXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICBzZXRQcmljZShlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPGxhYmVsPkFtb3VudDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICB2YWx1ZT17YW1vdW50fVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwidHlwZSBhbW9udCBvZiBwcm9kdWN0XCJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgIHNldEFtb3VudChlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZS50YXJnZXQuZmlsZXNbMF0pO1xuICAgICAgICAgICAgc2V0SW1hZ2VGaWxlKGUudGFyZ2V0LmZpbGVzWzBdKTtcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2FkZFByb2R1Y3R9PnNhdmU8L2J1dHRvbj5cbiAgICAgICAgeyFwcm9kdWN0QWRkID8gPGRpdj5QbGVhc2UgdHlwZSBhbGwgaW5wdXQ8L2Rpdj4gOiBudWxsfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBZGRQcm9kdWN0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/shop/product/addProduct/[shopid].js\n");

/***/ })

})