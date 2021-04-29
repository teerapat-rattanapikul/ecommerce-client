webpackHotUpdate_N_E("pages/index",{

/***/ "./components/layout/Menu.js":
/*!***********************************!*\
  !*** ./components/layout/Menu.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Menu_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Menu.module.css */ \"./components/layout/Menu.module.css\");\n/* harmony import */ var _Menu_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Menu_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Addshop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Addshop */ \"./components/Addshop.js\");\n\n\nvar _jsxFileName = \"/Users/teerapat/Documents/project/ecommerce/client/components/layout/Menu.js\",\n    _this = undefined;\n\n\n\nvar styles = {\n  boostrap: \"btn btn-outline-secondary\",\n  \"menu.module\": _Menu_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.block__item\n};\n\nvar Menu = function Menu(props) {\n  console.log(props);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _Menu_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.container__menu,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Addshop__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, _this), props.shopList.map(function (shop) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        className: styles[\"boostrap\"] + \" \" + styles[\"menu.module\"],\n        onClick: function onClick() {\n          props.onSelectSidebar(shop.shopId, shop.shop.name);\n        },\n        children: shop.shop.name\n      }, shop.id, false, {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 9\n      }, _this);\n    })]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 5\n  }, _this);\n};\n\n_c = Menu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Menu);\n\nvar _c;\n\n$RefreshReg$(_c, \"Menu\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvTWVudS5qcz8yMGYzIl0sIm5hbWVzIjpbInN0eWxlcyIsImJvb3N0cmFwIiwiY2xhc3NlcyIsImJsb2NrX19pdGVtIiwiTWVudSIsInByb3BzIiwiY29uc29sZSIsImxvZyIsImNvbnRhaW5lcl9fbWVudSIsInNob3BMaXN0IiwibWFwIiwic2hvcCIsIm9uU2VsZWN0U2lkZWJhciIsInNob3BJZCIsIm5hbWUiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0EsSUFBTUEsTUFBTSxHQUFHO0FBQ2JDLFVBQVEsRUFBRSwyQkFERztBQUViLGlCQUFlQyx1REFBTyxDQUFDQztBQUZWLENBQWY7O0FBSUEsSUFBTUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsS0FBRCxFQUFXO0FBQ3RCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWjtBQUNBLHNCQUNFO0FBQUssYUFBUyxFQUFFSCx1REFBTyxDQUFDTSxlQUF4QjtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixFQUVHSCxLQUFLLENBQUNJLFFBQU4sQ0FBZUMsR0FBZixDQUFtQixVQUFDQyxJQUFEO0FBQUEsMEJBQ2xCO0FBQ0UsaUJBQVMsRUFBRVgsTUFBTSxDQUFDLFVBQUQsQ0FBTixHQUFxQixHQUFyQixHQUEyQkEsTUFBTSxDQUFDLGFBQUQsQ0FEOUM7QUFHRSxlQUFPLEVBQUUsbUJBQU07QUFDYkssZUFBSyxDQUFDTyxlQUFOLENBQXNCRCxJQUFJLENBQUNFLE1BQTNCLEVBQW1DRixJQUFJLENBQUNBLElBQUwsQ0FBVUcsSUFBN0M7QUFDRCxTQUxIO0FBQUEsa0JBT0dILElBQUksQ0FBQ0EsSUFBTCxDQUFVRztBQVBiLFNBRU9ILElBQUksQ0FBQ0ksRUFGWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRGtCO0FBQUEsS0FBbkIsQ0FGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWdCRCxDQWxCRDs7S0FBTVgsSTtBQW9CU0EsbUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC9NZW51LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vTWVudS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgQWRkc2hvcCBmcm9tIFwiLi4vQWRkc2hvcFwiO1xuY29uc3Qgc3R5bGVzID0ge1xuICBib29zdHJhcDogXCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5XCIsXG4gIFwibWVudS5tb2R1bGVcIjogY2xhc3Nlcy5ibG9ja19faXRlbSxcbn07XG5jb25zdCBNZW51ID0gKHByb3BzKSA9PiB7XG4gIGNvbnNvbGUubG9nKHByb3BzKTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJfX21lbnV9PlxuICAgICAgPEFkZHNob3AgLz5cbiAgICAgIHtwcm9wcy5zaG9wTGlzdC5tYXAoKHNob3ApID0+IChcbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzW1wiYm9vc3RyYXBcIl0gKyBcIiBcIiArIHN0eWxlc1tcIm1lbnUubW9kdWxlXCJdfVxuICAgICAgICAgIGtleT17c2hvcC5pZH1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBwcm9wcy5vblNlbGVjdFNpZGViYXIoc2hvcC5zaG9wSWQsIHNob3Auc2hvcC5uYW1lKTtcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAge3Nob3Auc2hvcC5uYW1lfVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTWVudTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layout/Menu.js\n");

/***/ })

})