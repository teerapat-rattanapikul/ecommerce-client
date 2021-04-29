webpackHotUpdate_N_E("pages/shop/product/addProduct/[shopid]",{

/***/ "./pages/shop/product/addProduct/[shopid].js":
/*!***************************************************!*\
  !*** ./pages/shop/product/addProduct/[shopid].js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\nvar _jsxFileName = \"/Users/teerapat/Documents/project/ecommerce/client/pages/shop/product/addProduct/[shopid].js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar AddProduct = function AddProduct() {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(\"\"),\n      imageFile = _useState[0],\n      setImageFile = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(\"\"),\n      productName = _useState2[0],\n      setProductName = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(\"\"),\n      productDetail = _useState3[0],\n      setProductDetail = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(\"\"),\n      price = _useState4[0],\n      setPrice = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(\"\"),\n      amount = _useState5[0],\n      setAmount = _useState5[1];\n\n  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(true),\n      productAdd = _useState6[0],\n      setProductAdd = _useState6[1];\n\n  var addProduct = function addProduct() {\n    var formData = new FormData();\n\n    if (imageFile === \"\" || productName.trim() === \"\" || productDetail.trim() === \"\" || price.trim() === \"\" || amount.trim() === \"\") {\n      setProductAdd(false);\n    } else {\n      formData.append(\"productImage\", imageFile);\n      formData.append(\"shopId\", router.query.shopid);\n      formData.append(\"productName\", productName);\n      formData.append(\"productDetail\", productDetail);\n      formData.append(\"productPrice\", parseInt(price));\n      formData.append(\"productAmount\", parseInt(amount));\n      axios__WEBPACK_IMPORTED_MODULE_1___default()({\n        url: \"http://localhost:8000/api/product/addProduct\",\n        method: \"post\",\n        data: formData,\n        headers: {\n          \"Content-Type\": \"multipart/form-data\"\n        }\n      }).then(function (res) {\n        if (res.data === true) {\n          router.back();\n        }\n      });\n    }\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"container container  shadow  bg-body rounded\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        children: \"Product Name: \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 48,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        type: \"text\",\n        value: productName,\n        placeholder: \"type product name\",\n        onChange: function onChange(e) {\n          setProductName(e.target.value);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 49,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        children: \"Product Detail: \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 57,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        type: \"text\",\n        value: productDetail,\n        placeholder: \"type product detail\",\n        onChange: function onChange(e) {\n          setProductDetail(e.target.value);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        children: \"Price: \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        type: \"text\",\n        value: price,\n        placeholder: \"type price of product\",\n        onChange: function onChange(e) {\n          setPrice(e.target.value);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 67,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n        children: \"Amount\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        type: \"text\",\n        value: amount,\n        placeholder: \"type amont of product\",\n        onChange: function onChange(e) {\n          setAmount(e.target.value);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n        type: \"file\",\n        onChange: function onChange(e) {\n          console.log(e.target.files[0]);\n          setImageFile(e.target.files[0]);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 84,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        onClick: addProduct,\n        children: \"save\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 91,\n        columnNumber: 9\n      }, _this), !productAdd ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        children: \"Please type all input\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 24\n      }, _this) : null]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 46,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(AddProduct, \"HaAgWHvtnx7tB4OP0RsaXGFBl2w=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"]];\n});\n\n_c = AddProduct;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddProduct);\n\nvar _c;\n\n$RefreshReg$(_c, \"AddProduct\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2hvcC9wcm9kdWN0L2FkZFByb2R1Y3QvW3Nob3BpZF0uanM/Yzg2NyJdLCJuYW1lcyI6WyJBZGRQcm9kdWN0Iiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJpbWFnZUZpbGUiLCJzZXRJbWFnZUZpbGUiLCJwcm9kdWN0TmFtZSIsInNldFByb2R1Y3ROYW1lIiwicHJvZHVjdERldGFpbCIsInNldFByb2R1Y3REZXRhaWwiLCJwcmljZSIsInNldFByaWNlIiwiYW1vdW50Iiwic2V0QW1vdW50IiwicHJvZHVjdEFkZCIsInNldFByb2R1Y3RBZGQiLCJhZGRQcm9kdWN0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsInRyaW0iLCJhcHBlbmQiLCJxdWVyeSIsInNob3BpZCIsInBhcnNlSW50IiwiYXhpb3MiLCJ1cmwiLCJtZXRob2QiLCJkYXRhIiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJiYWNrIiwiZSIsInRhcmdldCIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsImZpbGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUFBOztBQUN2QixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUR1QixrQkFFV0Msc0RBQVEsQ0FBQyxFQUFELENBRm5CO0FBQUEsTUFFaEJDLFNBRmdCO0FBQUEsTUFFTEMsWUFGSzs7QUFBQSxtQkFHZUYsc0RBQVEsQ0FBQyxFQUFELENBSHZCO0FBQUEsTUFHaEJHLFdBSGdCO0FBQUEsTUFHSEMsY0FIRzs7QUFBQSxtQkFJbUJKLHNEQUFRLENBQUMsRUFBRCxDQUozQjtBQUFBLE1BSWhCSyxhQUpnQjtBQUFBLE1BSURDLGdCQUpDOztBQUFBLG1CQUtHTixzREFBUSxDQUFDLEVBQUQsQ0FMWDtBQUFBLE1BS2hCTyxLQUxnQjtBQUFBLE1BS1RDLFFBTFM7O0FBQUEsbUJB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LGVBNkJFO0FBQ0UsWUFBSSxFQUFDLE1BRFA7QUFFRSxhQUFLLEVBQUV0QixNQUZUO0FBR0UsbUJBQVcsRUFBQyx1QkFIZDtBQUlFLGdCQUFRLEVBQUUsa0JBQUNvQixDQUFELEVBQU87QUFDZm5CLG1CQUFTLENBQUNtQixDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUFUO0FBQ0Q7QUFOSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBN0JGLGVBcUNFO0FBQ0UsWUFBSSxFQUFDLE1BRFA7QUFFRSxnQkFBUSxFQUFFLGtCQUFDRixDQUFELEVBQU87QUFDZkcsaUJBQU8sQ0FBQ0MsR0FBUixDQUFZSixDQUFDLENBQUNDLE1BQUYsQ0FBU0ksS0FBVCxDQUFlLENBQWYsQ0FBWjtBQUNBaEMsc0JBQVksQ0FBQzJCLENBQUMsQ0FBQ0MsTUFBRixDQUFTSSxLQUFULENBQWUsQ0FBZixDQUFELENBQVo7QUFDRDtBQUxIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFyQ0YsZUE0Q0U7QUFBUSxlQUFPLEVBQUVyQixVQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQTVDRixFQTZDRyxDQUFDRixVQUFELGdCQUFjO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBQWQsR0FBaUQsSUE3Q3BEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQW1ERCxDQTNGRDs7R0FBTWQsVTtVQUNXRSxxRDs7O0tBRFhGLFU7QUE2RlNBLHlFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvc2hvcC9wcm9kdWN0L2FkZFByb2R1Y3QvW3Nob3BpZF0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgQWRkUHJvZHVjdCA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFtpbWFnZUZpbGUsIHNldEltYWdlRmlsZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3Byb2R1Y3ROYW1lLCBzZXRQcm9kdWN0TmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3Byb2R1Y3REZXRhaWwsIHNldFByb2R1Y3REZXRhaWxdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtwcmljZSwgc2V0UHJpY2VdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFthbW91bnQsIHNldEFtb3VudF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3Byb2R1Y3RBZGQsIHNldFByb2R1Y3RBZGRdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IGFkZFByb2R1Y3QgPSAoKSA9PiB7XG4gICAgdmFyIGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgaWYgKFxuICAgICAgaW1hZ2VGaWxlID09PSBcIlwiIHx8XG4gICAgICBwcm9kdWN0TmFtZS50cmltKCkgPT09IFwiXCIgfHxcbiAgICAgIHByb2R1Y3REZXRhaWwudHJpbSgpID09PSBcIlwiIHx8XG4gICAgICBwcmljZS50cmltKCkgPT09IFwiXCIgfHxcbiAgICAgIGFtb3VudC50cmltKCkgPT09IFwiXCJcbiAgICApIHtcbiAgICAgIHNldFByb2R1Y3RBZGQoZmFsc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3JtRGF0YS5hcHBlbmQoXCJwcm9kdWN0SW1hZ2VcIiwgaW1hZ2VGaWxlKTtcbiAgICAgIGZvcm1EYXRhLmFwcGVuZChcInNob3BJZFwiLCByb3V0ZXIucXVlcnkuc2hvcGlkKTtcbiAgICAgIGZvcm1EYXRhLmFwcGVuZChcInByb2R1Y3ROYW1lXCIsIHByb2R1Y3ROYW1lKTtcbiAgICAgIGZvcm1EYXRhLmFwcGVuZChcInByb2R1Y3REZXRhaWxcIiwgcHJvZHVjdERldGFpbCk7XG4gICAgICBmb3JtRGF0YS5hcHBlbmQoXCJwcm9kdWN0UHJpY2VcIiwgcGFyc2VJbnQocHJpY2UpKTtcbiAgICAgIGZvcm1EYXRhLmFwcGVuZChcInByb2R1Y3RBbW91bnRcIiwgcGFyc2VJbnQoYW1vdW50KSk7XG4gICAgICBheGlvcyh7XG4gICAgICAgIHVybDogYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvcHJvZHVjdC9hZGRQcm9kdWN0YCxcbiAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgICAgZGF0YTogZm9ybURhdGEsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcIm11bHRpcGFydC9mb3JtLWRhdGFcIixcbiAgICAgICAgfSxcbiAgICAgIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBpZiAocmVzLmRhdGEgPT09IHRydWUpIHtcbiAgICAgICAgICByb3V0ZXIuYmFjaygpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjb250YWluZXIgIHNoYWRvdyAgYmctYm9keSByb3VuZGVkXCI+XG4gICAgICA8ZGl2PlxuICAgICAgICA8bGFiZWw+UHJvZHVjdCBOYW1lOiA8L2xhYmVsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgdmFsdWU9e3Byb2R1Y3ROYW1lfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwidHlwZSBwcm9kdWN0IG5hbWVcIlxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgc2V0UHJvZHVjdE5hbWUoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxsYWJlbD5Qcm9kdWN0IERldGFpbDogPC9sYWJlbD5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHZhbHVlPXtwcm9kdWN0RGV0YWlsfVxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwidHlwZSBwcm9kdWN0IGRldGFpbFwiXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICBzZXRQcm9kdWN0RGV0YWlsKGUudGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgICA8bGFiZWw+UHJpY2U6IDwvbGFiZWw+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICB2YWx1ZT17cHJpY2V9XG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJ0eXBlIHByaWNlIG9mIHByb2R1Y3RcIlxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgc2V0UHJpY2UoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxsYWJlbD5BbW91bnQ8L2xhYmVsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgdmFsdWU9e2Ftb3VudH1cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cInR5cGUgYW1vbnQgb2YgcHJvZHVjdFwiXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICBzZXRBbW91bnQoZS50YXJnZXQudmFsdWUpO1xuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LmZpbGVzWzBdKTtcbiAgICAgICAgICAgIHNldEltYWdlRmlsZShlLnRhcmdldC5maWxlc1swXSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXthZGRQcm9kdWN0fT5zYXZlPC9idXR0b24+XG4gICAgICAgIHshcHJvZHVjdEFkZCA/IDxkaXY+UGxlYXNlIHR5cGUgYWxsIGlucHV0PC9kaXY+IDogbnVsbH1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWRkUHJvZHVjdDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/shop/product/addProduct/[shopid].js\n");

/***/ })

})