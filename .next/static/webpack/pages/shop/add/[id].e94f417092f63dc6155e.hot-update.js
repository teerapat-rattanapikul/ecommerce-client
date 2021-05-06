webpackHotUpdate_N_E("pages/shop/add/[id]",{

/***/ "./pages/shop/add/[id].js":
/*!********************************!*\
  !*** ./pages/shop/add/[id].js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _add_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add.module.css */ \"./pages/shop/add/add.module.css\");\n/* harmony import */ var _add_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_add_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jwt-decode */ \"./node_modules/jwt-decode/build/jwt-decode.esm.js\");\n/* harmony import */ var _manage_shopid_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../manage/shopid.module.css */ \"./pages/shop/manage/shopid.module.css\");\n/* harmony import */ var _manage_shopid_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_manage_shopid_module_css__WEBPACK_IMPORTED_MODULE_7__);\n\n\n\nvar _jsxFileName = \"/Users/teerapat/Documents/project/ecommerce/client/pages/shop/add/[id].js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar AddShop = function AddShop(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(\"\"),\n      shopName = _useState[0],\n      setShopName = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      errName = _useState2[0],\n      setErrName = _useState2[1];\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"])();\n\n  var createShop = function createShop() {\n    var decoded = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(router.query.id);\n    var validToken = localStorage.getItem(\"token\");\n\n    if (validToken !== router.query.id) {\n      alert(\"คุณไม่มีสิทธิ๋ในการเข้าถึง\");\n      router.replace(\"/login\");\n    }\n\n    if (shopName !== \"\") {\n      axios__WEBPACK_IMPORTED_MODULE_3___default()({\n        url: \"http://localhost:8000/api/shop/addShop\",\n        method: \"post\",\n        data: {\n          shopName: shopName,\n          id: decoded.user.id\n        },\n        headers: {\n          \"Content-Type\": \"application/json\"\n        }\n      }).then(function (res) {\n        if (res.data === true) {\n          router.replace(\"/\");\n        } else {\n          setErrName(true);\n        }\n      });\n    }\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"container \" + \" \" + _add_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.contianer__add,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n      className: _manage_shopid_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.back,\n      onClick: function onClick() {\n        router.back();\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h4\", {\n        children: \"< ย้อนกลับ\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 45,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n      className: _add_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.title__add,\n      children: \"Add shop\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"label\", {\n      className: _add_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.text__add,\n      children: \"Shop name:\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n      type: \"text\",\n      value: shopName,\n      className: _add_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.input__add,\n      placeholder: \"type your shop name\",\n      onChange: function onChange(e) {\n        setShopName(e.target.value);\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n      type: \"submit\",\n      className: _add_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.submit__add,\n      value: \"create\",\n      onClick: createShop\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 7\n    }, _this), errName ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _add_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.error__add,\n      children: \"Cannot use this shop name\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 66,\n      columnNumber: 9\n    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {}, void 0, false)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 38,\n    columnNumber: 5\n  }, _this) // </div>\n  ;\n};\n\n_s(AddShop, \"sk5qwkM2kmaiEMM9Hq6oFhbBGKs=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_4__[\"useRouter\"]];\n});\n\n_c = AddShop;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AddShop);\n\nvar _c;\n\n$RefreshReg$(_c, \"AddShop\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2hvcC9hZGQvLmpzP2U0NjEiXSwibmFtZXMiOlsiQWRkU2hvcCIsInByb3BzIiwidXNlU3RhdGUiLCJzaG9wTmFtZSIsInNldFNob3BOYW1lIiwiZXJyTmFtZSIsInNldEVyck5hbWUiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJjcmVhdGVTaG9wIiwiZGVjb2RlZCIsImp3dF9kZWNvZGUiLCJxdWVyeSIsImlkIiwidmFsaWRUb2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJhbGVydCIsInJlcGxhY2UiLCJheGlvcyIsInVybCIsIm1ldGhvZCIsImRhdGEiLCJ1c2VyIiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJjbGFzc2VzIiwiY29udGlhbmVyX19hZGQiLCJiYWNrIiwidGl0bGVfX2FkZCIsInRleHRfX2FkZCIsImlucHV0X19hZGQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJzdWJtaXRfX2FkZCIsImVycm9yX19hZGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxrQkFDT0Msc0RBQVEsQ0FBQyxFQUFELENBRGY7QUFBQSxNQUNsQkMsUUFEa0I7QUFBQSxNQUNSQyxXQURROztBQUFBLG1CQUVLRixzREFBUSxDQUFDLEtBQUQsQ0FGYjtBQUFBLE1BRWxCRyxPQUZrQjtBQUFBLE1BRVRDLFVBRlM7O0FBR3pCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBQ0EsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUN2QixRQUFNQyxPQUFPLEdBQUdDLDBEQUFVLENBQUNKLE1BQU0sQ0FBQ0ssS0FBUCxDQUFhQyxFQUFkLENBQTFCO0FBQ0EsUUFBTUMsVUFBVSxHQUFHQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsT0FBckIsQ0FBbkI7O0FBQ0EsUUFBSUYsVUFBVSxLQUFLUCxNQUFNLENBQUNLLEtBQVAsQ0FBYUMsRUFBaEMsRUFBb0M7QUFDbENJLFdBQUssQ0FBQyw0QkFBRCxDQUFMO0FBQ0FWLFlBQU0sQ0FBQ1csT0FBUCxDQUFlLFFBQWY7QUFDRDs7QUFDRCxRQUFJZixRQUFRLEtBQUssRUFBakIsRUFBcUI7QUFDbkJnQixrREFBSyxDQUFDO0FBQ0pDLFdBQUcsMENBREM7QUFFSkMsY0FBTSxFQUFFLE1BRko7QUFHSkMsWUFBSSxFQUFFO0FBQUVuQixrQkFBUSxFQUFFQSxRQUFaO0FBQXNCVSxZQUFFLEVBQUVILE9BQU8sQ0FBQ2EsSUFBUixDQUFhVjtBQUF2QyxTQUhGO0FBSUpXLGVBQU8sRUFBRTtBQUNQLDBCQUFnQjtBQURUO0FBSkwsT0FBRCxDQUFMLENBT0dDLElBUEgsQ0FPUSxVQUFDQyxHQUFELEVBQVM7QUFDZixZQUFJQSxHQUFHLENBQUNKLElBQUosS0FBYSxJQUFqQixFQUF1QjtBQUNyQmYsZ0JBQU0sQ0FBQ1csT0FBUCxDQUFlLEdBQWY7QUFDRCxTQUZELE1BRU87QUFDTFosb0JBQVUsQ0FBQyxJQUFELENBQVY7QUFDRDtBQUNGLE9BYkQ7QUFjRDtBQUNGLEdBdkJEOztBQXlCQSxzQkFDRTtBQUFLLGFBQVMsRUFBRSxlQUFlLEdBQWYsR0FBcUJxQixzREFBTyxDQUFDQyxjQUE3QztBQUFBLDRCQUNFO0FBQ0UsZUFBUyxFQUFFQyxnRUFBSSxDQUFDQSxJQURsQjtBQUVFLGFBQU8sRUFBRSxtQkFBTTtBQUNidEIsY0FBTSxDQUFDc0IsSUFBUDtBQUNELE9BSkg7QUFBQSw2QkFNRTtBQUFBLGtCQUFLO0FBQUw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQVVFO0FBQU8sZUFBUyxFQUFFRixzREFBTyxDQUFDRyxVQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVZGLGVBV0U7QUFBTyxlQUFTLEVBQUVILHNEQUFPLENBQUNJLFNBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWEYsZUFZRTtBQUNFLFVBQUksRUFBQyxNQURQO0FBRUUsV0FBSyxFQUFFNUIsUUFGVDtBQUdFLGVBQVMsRUFBRXdCLHNEQUFPLENBQUNLLFVBSHJCO0FBSUUsaUJBQVcsRUFBQyxxQkFKZDtBQUtFLGNBQVEsRUFBRSxrQkFBQ0MsQ0FBRCxFQUFPO0FBQ2Y3QixtQkFBVyxDQUFDNkIsQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBWDtBQUNEO0FBUEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVpGLGVBcUJFO0FBQ0UsVUFBSSxFQUFDLFFBRFA7QUFFRSxlQUFTLEVBQUVSLHNEQUFPLENBQUNTLFdBRnJCO0FBR0UsV0FBSyxFQUFDLFFBSFI7QUFJRSxhQUFPLEVBQUUzQjtBQUpYO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFyQkYsRUEyQkdKLE9BQU8sZ0JBQ047QUFBSyxlQUFTLEVBQUVzQixzREFBTyxDQUFDVSxVQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURNLGdCQUdOLHVKQTlCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERixDQWtDRTtBQWxDRjtBQW9DRCxDQWpFRDs7R0FBTXJDLE87VUFHV1EscUQ7OztLQUhYUixPO0FBbUVTQSxzRUFBZiIsImZpbGUiOiIuL3BhZ2VzL3Nob3AvYWRkL1tpZF0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vYWRkLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IGp3dF9kZWNvZGUgZnJvbSBcImp3dC1kZWNvZGVcIjtcbmltcG9ydCBiYWNrIGZyb20gXCIuLi9tYW5hZ2Uvc2hvcGlkLm1vZHVsZS5jc3NcIjtcbmNvbnN0IEFkZFNob3AgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgW3Nob3BOYW1lLCBzZXRTaG9wTmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2Vyck5hbWUsIHNldEVyck5hbWVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgY3JlYXRlU2hvcCA9ICgpID0+IHtcbiAgICBjb25zdCBkZWNvZGVkID0gand0X2RlY29kZShyb3V0ZXIucXVlcnkuaWQpO1xuICAgIGNvbnN0IHZhbGlkVG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xuICAgIGlmICh2YWxpZFRva2VuICE9PSByb3V0ZXIucXVlcnkuaWQpIHtcbiAgICAgIGFsZXJ0KFwi4LiE4Li44LiT4LmE4Lih4LmI4Lih4Li14Liq4Li04LiX4LiY4Li04LmL4LmD4LiZ4LiB4Liy4Lij4LmA4LiC4LmJ4Liy4LiW4Li24LiHXCIpO1xuICAgICAgcm91dGVyLnJlcGxhY2UoXCIvbG9naW5cIik7XG4gICAgfVxuICAgIGlmIChzaG9wTmFtZSAhPT0gXCJcIikge1xuICAgICAgYXhpb3Moe1xuICAgICAgICB1cmw6IGBodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3Nob3AvYWRkU2hvcGAsXG4gICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgICAgIGRhdGE6IHsgc2hvcE5hbWU6IHNob3BOYW1lLCBpZDogZGVjb2RlZC51c2VyLmlkIH0sXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICAgIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBpZiAocmVzLmRhdGEgPT09IHRydWUpIHtcbiAgICAgICAgICByb3V0ZXIucmVwbGFjZShcIi9cIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2V0RXJyTmFtZSh0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e1wiY29udGFpbmVyIFwiICsgXCIgXCIgKyBjbGFzc2VzLmNvbnRpYW5lcl9fYWRkfT5cbiAgICAgIDxhXG4gICAgICAgIGNsYXNzTmFtZT17YmFjay5iYWNrfVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgcm91dGVyLmJhY2soKTtcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGg0PntcIjwg4Lii4LmJ4Lit4LiZ4LiB4Lil4Lix4LiaXCJ9PC9oND5cbiAgICAgIDwvYT5cbiAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250aWFuZXJfX2FkZH0+ICovfVxuICAgICAgPGxhYmVsIGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZV9fYWRkfT5BZGQgc2hvcDwvbGFiZWw+XG4gICAgICA8bGFiZWwgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHRfX2FkZH0+U2hvcCBuYW1lOjwvbGFiZWw+XG4gICAgICA8aW5wdXRcbiAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICB2YWx1ZT17c2hvcE5hbWV9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnB1dF9fYWRkfVxuICAgICAgICBwbGFjZWhvbGRlcj1cInR5cGUgeW91ciBzaG9wIG5hbWVcIlxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICBzZXRTaG9wTmFtZShlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgIH19XG4gICAgICAvPlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuc3VibWl0X19hZGR9XG4gICAgICAgIHZhbHVlPVwiY3JlYXRlXCJcbiAgICAgICAgb25DbGljaz17Y3JlYXRlU2hvcH1cbiAgICAgIC8+XG4gICAgICB7ZXJyTmFtZSA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZXJyb3JfX2FkZH0+Q2Fubm90IHVzZSB0aGlzIHNob3AgbmFtZTwvZGl2PlxuICAgICAgKSA6IChcbiAgICAgICAgPD48Lz5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICAgLy8gPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBZGRTaG9wO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/shop/add/[id].js\n");

/***/ })

})