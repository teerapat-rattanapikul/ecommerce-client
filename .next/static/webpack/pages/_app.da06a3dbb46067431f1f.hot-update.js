webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/layout/Navbar.js":
/*!*************************************!*\
  !*** ./components/layout/Navbar.js ***!
  \*************************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var _Users_teerapat_Documents_project_ecommerce_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_teerapat_Documents_project_ecommerce_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_teerapat_Documents_project_ecommerce_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_teerapat_Documents_project_ecommerce_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Navbar.module.css */ \"./components/layout/Navbar.module.css\");\n/* harmony import */ var _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _ui_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/Icon */ \"./components/ui/Icon.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fi */ \"./node_modules/react-icons/fi/index.esm.js\");\n\n\n\n\nvar _jsxFileName = \"/Users/teerapat/Documents/project/ecommerce/client/components/layout/Navbar.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar style = {\n  active: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.navbar + \" \" + _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.active,\n  inactive: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.navbar\n};\n\nvar Navbar = function Navbar(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(true),\n      navbar = _useState[0],\n      setNavbar = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(false),\n      userLogin = _useState2[0],\n      setUserLogin = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useEffect\"])(function () {\n    var token = localStorage.getItem(\"token\");\n\n    if (token) {\n      setUserLogin(true);\n    }\n\n    window.addEventListener(\"scroll\", scrollChangeBackGround);\n  }, []);\n\n  var scrollChangeBackGround = function scrollChangeBackGround() {\n    if (window.scrollY >= 10) {\n      setNavbar(false);\n    } else {\n      setNavbar(true);\n    }\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.navbar,\n    children: [userLogin ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_ui_Icon__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 20\n    }, _this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.container__navbar,\n      children: userLogin ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_6__[\"FiLogOut\"], {\n        size: \"40px\",\n        color: \"red\",\n        style: {\n          cursor: \"pointer\"\n        },\n        onClick: function onClick() {\n          localStorage.removeItem(\"token\");\n          window.location.href = \"/login\";\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 11\n      }, _this) : null\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Navbar, \"uWQ2mfjhFtMNnxuivneJ85/x9cQ=\");\n\n_c = Navbar;\nfunction getStaticProps() {\n  return _getStaticProps.apply(this, arguments);\n}\n\nfunction _getStaticProps() {\n  _getStaticProps = Object(_Users_teerapat_Documents_project_ecommerce_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_teerapat_Documents_project_ecommerce_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n    return _Users_teerapat_Documents_project_ecommerce_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            return _context.abrupt(\"return\", {\n              props: {}\n            });\n\n          case 1:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _getStaticProps.apply(this, arguments);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\n\nvar _c;\n\n$RefreshReg$(_c, \"Navbar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvTmF2YmFyLmpzPzljMDAiXSwibmFtZXMiOlsic3R5bGUiLCJhY3RpdmUiLCJjbGFzc2VzIiwibmF2YmFyIiwiaW5hY3RpdmUiLCJOYXZiYXIiLCJwcm9wcyIsInVzZVN0YXRlIiwic2V0TmF2YmFyIiwidXNlckxvZ2luIiwic2V0VXNlckxvZ2luIiwidXNlRWZmZWN0IiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInNjcm9sbENoYW5nZUJhY2tHcm91bmQiLCJzY3JvbGxZIiwiY29udGFpbmVyX19uYXZiYXIiLCJjdXJzb3IiLCJyZW1vdmVJdGVtIiwibG9jYXRpb24iLCJocmVmIiwiZ2V0U3RhdGljUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsS0FBSyxHQUFHO0FBQ1pDLFFBQU0sRUFBRUMseURBQU8sQ0FBQ0MsTUFBUixHQUFpQixHQUFqQixHQUF1QkQseURBQU8sQ0FBQ0QsTUFEM0I7QUFFWkcsVUFBUSxFQUFFRix5REFBTyxDQUFDQztBQUZOLENBQWQ7O0FBSUEsSUFBTUUsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBQ0lDLHNEQUFRLENBQUMsSUFBRCxDQURaO0FBQUEsTUFDakJKLE1BRGlCO0FBQUEsTUFDVEssU0FEUzs7QUFBQSxtQkFFVUQsc0RBQVEsQ0FBQyxLQUFELENBRmxCO0FBQUEsTUFFakJFLFNBRmlCO0FBQUEsTUFFTkMsWUFGTTs7QUFHeEJDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLEtBQUssR0FBR0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLE9BQXJCLENBQWQ7O0FBQ0EsUUFBSUYsS0FBSixFQUFXO0FBQ1RGLGtCQUFZLENBQUMsSUFBRCxDQUFaO0FBQ0Q7O0FBRURLLFVBQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NDLHNCQUFsQztBQUNELEdBUFEsRUFPTixFQVBNLENBQVQ7O0FBU0EsTUFBTUEsc0JBQXNCLEdBQUcsU0FBekJBLHNCQUF5QixHQUFNO0FBQ25DLFFBQUlGLE1BQU0sQ0FBQ0csT0FBUCxJQUFrQixFQUF0QixFQUEwQjtBQUN4QlYsZUFBUyxDQUFDLEtBQUQsQ0FBVDtBQUNELEtBRkQsTUFFTztBQUNMQSxlQUFTLENBQUMsSUFBRCxDQUFUO0FBQ0Q7QUFDRixHQU5EOztBQVFBLHNCQUNFO0FBQUssYUFBUyxFQUFFTix5REFBTyxDQUFDQyxNQUF4QjtBQUFBLGVBQ0dNLFNBQVMsZ0JBQUcscUVBQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFILEdBQWMsSUFEMUIsZUFFRTtBQUFLLGVBQVMsRUFBRVAseURBQU8sQ0FBQ2lCLGlCQUF4QjtBQUFBLGdCQUNHVixTQUFTLGdCQUNSLHFFQUFDLHVEQUFEO0FBQ0UsWUFBSSxFQUFDLE1BRFA7QUFFRSxhQUFLLEVBQUMsS0FGUjtBQUdFLGFBQUssRUFBRTtBQUFFVyxnQkFBTSxFQUFFO0FBQVYsU0FIVDtBQUlFLGVBQU8sRUFBRSxtQkFBTTtBQUNiUCxzQkFBWSxDQUFDUSxVQUFiLENBQXdCLE9BQXhCO0FBQ0FOLGdCQUFNLENBQUNPLFFBQVAsQ0FBZ0JDLElBQWhCLEdBQXVCLFFBQXZCO0FBQ0Q7QUFQSDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFEsR0FVTjtBQVhOO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWtCRCxDQXRDRDs7R0FBTWxCLE07O0tBQUFBLE07QUF3Q0MsU0FBZW1CLGNBQXRCO0FBQUE7QUFBQTs7O21VQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2Q0FDRTtBQUNMbEIsbUJBQUssRUFBRTtBQURGLGFBREY7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRzs7OztBQUtRRCxxRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvbGF5b3V0L05hdmJhci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGFzc2VzIGZyb20gXCIuL05hdmJhci5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vdWkvSWNvblwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRmlMb2dPdXQgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmlcIjtcbmNvbnN0IHN0eWxlID0ge1xuICBhY3RpdmU6IGNsYXNzZXMubmF2YmFyICsgXCIgXCIgKyBjbGFzc2VzLmFjdGl2ZSxcbiAgaW5hY3RpdmU6IGNsYXNzZXMubmF2YmFyLFxufTtcbmNvbnN0IE5hdmJhciA9IChwcm9wcykgPT4ge1xuICBjb25zdCBbbmF2YmFyLCBzZXROYXZiYXJdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFt1c2VyTG9naW4sIHNldFVzZXJMb2dpbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgdG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xuICAgIGlmICh0b2tlbikge1xuICAgICAgc2V0VXNlckxvZ2luKHRydWUpO1xuICAgIH1cblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHNjcm9sbENoYW5nZUJhY2tHcm91bmQpO1xuICB9LCBbXSk7XG5cbiAgY29uc3Qgc2Nyb2xsQ2hhbmdlQmFja0dyb3VuZCA9ICgpID0+IHtcbiAgICBpZiAod2luZG93LnNjcm9sbFkgPj0gMTApIHtcbiAgICAgIHNldE5hdmJhcihmYWxzZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNldE5hdmJhcih0cnVlKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5uYXZiYXJ9PlxuICAgICAge3VzZXJMb2dpbiA/IDxJY29uIC8+IDogbnVsbH1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcl9fbmF2YmFyfT5cbiAgICAgICAge3VzZXJMb2dpbiA/IChcbiAgICAgICAgICA8RmlMb2dPdXRcbiAgICAgICAgICAgIHNpemU9XCI0MHB4XCJcbiAgICAgICAgICAgIGNvbG9yPVwicmVkXCJcbiAgICAgICAgICAgIHN0eWxlPXt7IGN1cnNvcjogXCJwb2ludGVyXCIgfX1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ0b2tlblwiKTtcbiAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9sb2dpblwiO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICApIDogbnVsbH1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7fSxcbiAgfTtcbn1cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layout/Navbar.js\n");

/***/ })

})