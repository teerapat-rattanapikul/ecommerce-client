webpackHotUpdate_N_E("pages/shop/order/[...id]",{

/***/ "./components/ui/Order.js":
/*!********************************!*\
  !*** ./components/ui/Order.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Order_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Order.module.css */ \"./components/ui/Order.module.css\");\n/* harmony import */ var _Order_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Order_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/Users/teerapat/Documents/project/ecommerce/client/components/ui/Order.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar OrderComponent = function OrderComponent(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      updateStatus = _useState[0],\n      setUpdateStatus = _useState[1];\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tr\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n      children: props.productName\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n      children: props.image ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n        src: \"http://localhost:8000/\".concat(props.image),\n        width: 100,\n        height: 100\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 10,\n        columnNumber: 11\n      }, _this) : null\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n      children: props.totalAmount\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n      children: props.totalPrice\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n      children: props.status\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n      children: props.userRole === \"admin\" ? null : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _Order_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.status__order,\n        children: updateStatus ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Fragment, {\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"select\", {\n            className: \"form-select mb-1\",\n            onChange: function onChange(e) {\n              setOrderStatus(e.target.value);\n            },\n            value: orderStatus,\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n              value: \"Paid\",\n              children: \"Paid\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 33,\n              columnNumber: 19\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n              value: \"Shipping\",\n              children: \"Shipping\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 34,\n              columnNumber: 19\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n              value: \"Success\",\n              children: \"Success\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 35,\n              columnNumber: 19\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"option\", {\n              value: \"Cancle\",\n              children: \"Cancle\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 36,\n              columnNumber: 19\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 26,\n            columnNumber: 17\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n            className: \"btn btn-success btn-sm mb-1\",\n            onClick: function onClick() {\n              props.changeStatus(props.id);\n              setUpdateStatus(!updateStatus);\n            },\n            children: \"\\u0E1A\\u0E31\\u0E19\\u0E17\\u0E36\\u0E01\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 38,\n            columnNumber: 17\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 15\n        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          className: \"btn btn-primary btn-sm mb-1\",\n          onClick: function onClick() {\n            setUpdateStatus(!updateStatus);\n            setOrderStatus(props.status);\n          },\n          children: \"\\u0E41\\u0E01\\u0E49\\u0E44\\u0E02\\u0E2A\\u0E16\\u0E32\\u0E19\\u0E30\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 15\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 11\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, _this)]\n  }, props.id, true, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(OrderComponent, \"glDLgFIpApS7iQ29atKUnZ8bqo0=\");\n\n_c = OrderComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (OrderComponent);\n\nvar _c;\n\n$RefreshReg$(_c, \"OrderComponent\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91aS9PcmRlci5qcz9lN2NlIl0sIm5hbWVzIjpbIk9yZGVyQ29tcG9uZW50IiwicHJvcHMiLCJ1c2VTdGF0ZSIsInVwZGF0ZVN0YXR1cyIsInNldFVwZGF0ZVN0YXR1cyIsInByb2R1Y3ROYW1lIiwiaW1hZ2UiLCJ0b3RhbEFtb3VudCIsInRvdGFsUHJpY2UiLCJzdGF0dXMiLCJ1c2VyUm9sZSIsImNsYXNzZXMiLCJzdGF0dXNfX29yZGVyIiwiZSIsInNldE9yZGVyU3RhdHVzIiwidGFyZ2V0IiwidmFsdWUiLCJvcmRlclN0YXR1cyIsImNoYW5nZVN0YXR1cyIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFDQSxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLGtCQUNRQyxzREFBUSxDQUFDLEtBQUQsQ0FEaEI7QUFBQSxNQUN6QkMsWUFEeUI7QUFBQSxNQUNYQyxlQURXOztBQUVoQyxzQkFDRTtBQUFBLDRCQUNFO0FBQUEsZ0JBQUtILEtBQUssQ0FBQ0k7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRTtBQUFBLGdCQUNHSixLQUFLLENBQUNLLEtBQU4sZ0JBQ0M7QUFDRSxXQUFHLGtDQUEyQkwsS0FBSyxDQUFDSyxLQUFqQyxDQURMO0FBRUUsYUFBSyxFQUFFLEdBRlQ7QUFHRSxjQUFNLEVBQUU7QUFIVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREQsR0FNRztBQVBOO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixlQVdFO0FBQUEsZ0JBQUtMLEtBQUssQ0FBQ007QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBWEYsZUFZRTtBQUFBLGdCQUFLTixLQUFLLENBQUNPO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVpGLGVBY0U7QUFBQSxnQkFBS1AsS0FBSyxDQUFDUTtBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFkRixlQWVFO0FBQUEsZ0JBQ0dSLEtBQUssQ0FBQ1MsUUFBTixLQUFtQixPQUFuQixHQUE2QixJQUE3QixnQkFDQztBQUFLLGlCQUFTLEVBQUVDLHdEQUFPLENBQUNDLGFBQXhCO0FBQUEsa0JBQ0dULFlBQVksZ0JBQ1gscUVBQUMsUUFBRDtBQUFBLGtDQUNFO0FBQ0UscUJBQVMsRUFBQyxrQkFEWjtBQUVFLG9CQUFRLEVBQUUsa0JBQUNVLENBQUQsRUFBTztBQUNmQyw0QkFBYyxDQUFDRCxDQUFDLENBQUNFLE1BQUYsQ0FBU0MsS0FBVixDQUFkO0FBQ0QsYUFKSDtBQUtFLGlCQUFLLEVBQUVDLFdBTFQ7QUFBQSxvQ0FPRTtBQUFRLG1CQUFLLEVBQUMsTUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFQRixlQVFFO0FBQVEsbUJBQUssRUFBQyxVQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVJGLGVBU0U7QUFBUSxtQkFBSyxFQUFDLFNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBVEYsZUFVRTtBQUFRLG1CQUFLLEVBQUMsUUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFhRTtBQUNFLHFCQUFTLEVBQUMsNkJBRFo7QUFFRSxtQkFBTyxFQUFFLG1CQUFNO0FBQ2JoQixtQkFBSyxDQUFDaUIsWUFBTixDQUFtQmpCLEtBQUssQ0FBQ2tCLEVBQXpCO0FBQ0FmLDZCQUFlLENBQUMsQ0FBQ0QsWUFBRixDQUFmO0FBQ0QsYUFMSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFcsZ0JBeUJYO0FBQ0UsbUJBQVMsRUFBQyw2QkFEWjtBQUVFLGlCQUFPLEVBQUUsbUJBQU07QUFDYkMsMkJBQWUsQ0FBQyxDQUFDRCxZQUFGLENBQWY7QUFDQVcsMEJBQWMsQ0FBQ2IsS0FBSyxDQUFDUSxNQUFQLENBQWQ7QUFDRCxXQUxIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBMUJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBZkY7QUFBQSxLQUFTUixLQUFLLENBQUNrQixFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTJERCxDQTdERDs7R0FBTW5CLGM7O0tBQUFBLGM7QUErRFNBLDZFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy91aS9PcmRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9PcmRlci5tb2R1bGUuY3NzXCI7XG5jb25zdCBPcmRlckNvbXBvbmVudCA9IChwcm9wcykgPT4ge1xuICBjb25zdCBbdXBkYXRlU3RhdHVzLCBzZXRVcGRhdGVTdGF0dXNdID0gdXNlU3RhdGUoZmFsc2UpO1xuICByZXR1cm4gKFxuICAgIDx0ciBrZXk9e3Byb3BzLmlkfT5cbiAgICAgIDx0ZD57cHJvcHMucHJvZHVjdE5hbWV9PC90ZD5cbiAgICAgIDx0ZD5cbiAgICAgICAge3Byb3BzLmltYWdlID8gKFxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC8ke3Byb3BzLmltYWdlfWB9XG4gICAgICAgICAgICB3aWR0aD17MTAwfVxuICAgICAgICAgICAgaGVpZ2h0PXsxMDB9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSA6IG51bGx9XG4gICAgICA8L3RkPlxuICAgICAgPHRkPntwcm9wcy50b3RhbEFtb3VudH08L3RkPlxuICAgICAgPHRkPntwcm9wcy50b3RhbFByaWNlfTwvdGQ+XG5cbiAgICAgIDx0ZD57cHJvcHMuc3RhdHVzfTwvdGQ+XG4gICAgICA8dGQ+XG4gICAgICAgIHtwcm9wcy51c2VyUm9sZSA9PT0gXCJhZG1pblwiID8gbnVsbCA6IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zdGF0dXNfX29yZGVyfT5cbiAgICAgICAgICAgIHt1cGRhdGVTdGF0dXMgPyAoXG4gICAgICAgICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLXNlbGVjdCBtYi0xXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRPcmRlclN0YXR1cyhlLnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgdmFsdWU9e29yZGVyU3RhdHVzfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJQYWlkXCI+UGFpZDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlNoaXBwaW5nXCI+U2hpcHBpbmc8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJTdWNjZXNzXCI+U3VjY2Vzczwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIkNhbmNsZVwiPkNhbmNsZTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tc3VjY2VzcyBidG4tc20gbWItMVwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHByb3BzLmNoYW5nZVN0YXR1cyhwcm9wcy5pZCk7XG4gICAgICAgICAgICAgICAgICAgIHNldFVwZGF0ZVN0YXR1cyghdXBkYXRlU3RhdHVzKTtcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAg4Lia4Lix4LiZ4LiX4Li24LiBXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1zbSBtYi0xXCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBzZXRVcGRhdGVTdGF0dXMoIXVwZGF0ZVN0YXR1cyk7XG4gICAgICAgICAgICAgICAgICBzZXRPcmRlclN0YXR1cyhwcm9wcy5zdGF0dXMpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICDguYHguIHguYnguYTguILguKrguJbguLLguJnguLBcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC90ZD5cbiAgICA8L3RyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgT3JkZXJDb21wb25lbnQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ui/Order.js\n");

/***/ })

})