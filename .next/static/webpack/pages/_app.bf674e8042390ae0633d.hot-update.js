webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/layout/Navbar.js":
/*!*************************************!*\
  !*** ./components/layout/Navbar.js ***!
  \*************************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var _Users_teerapat_Documents_project_ecommerce_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_teerapat_Documents_project_ecommerce_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_teerapat_Documents_project_ecommerce_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_teerapat_Documents_project_ecommerce_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Navbar.module.css */ \"./components/layout/Navbar.module.css\");\n/* harmony import */ var _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _ui_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/Icon */ \"./components/ui/Icon.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fi */ \"./node_modules/react-icons/fi/index.esm.js\");\n\n\n\n\nvar _jsxFileName = \"/Users/teerapat/Documents/project/ecommerce/client/components/layout/Navbar.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar style = {\n  active: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.navbar + \" \" + _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.active,\n  inactive: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.navbar\n};\n\nvar Navbar = function Navbar(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(true),\n      navbar = _useState[0],\n      setNavbar = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(false),\n      userLogin = _useState2[0],\n      setUserLogin = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useEffect\"])(function () {\n    var token = localStorage.getItem(\"token\");\n\n    if (token) {\n      setUserLogin(true);\n    }\n\n    window.addEventListener(\"scroll\", scrollChangeBackGround);\n  }, []);\n\n  var scrollChangeBackGround = function scrollChangeBackGround() {\n    if (window.scrollY >= 10) {\n      setNavbar(false);\n    } else {\n      setNavbar(true);\n    }\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n    className: style.inactive,\n    children: [userLogin ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_ui_Icon__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 20\n    }, _this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.container__navbar,\n      children: userLogin ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_6__[\"FiLogOut\"], {\n        size: \"40px\",\n        color: \"red\",\n        style: {\n          cursor: \"pointer\"\n        },\n        onClick: function onClick() {\n          localStorage.removeItem(\"token\");\n          window.location.href = \"/login\";\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 11\n      }, _this) : null\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 30,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Navbar, \"uWQ2mfjhFtMNnxuivneJ85/x9cQ=\");\n\n_c = Navbar;\nfunction getStaticProps() {\n  return _getStaticProps.apply(this, arguments);\n}\n\nfunction _getStaticProps() {\n  _getStaticProps = Object(_Users_teerapat_Documents_project_ecommerce_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_teerapat_Documents_project_ecommerce_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n    return _Users_teerapat_Documents_project_ecommerce_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            return _context.abrupt(\"return\", {\n              props: {}\n            });\n\n          case 1:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _getStaticProps.apply(this, arguments);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\n\nvar _c;\n\n$RefreshReg$(_c, \"Navbar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvTmF2YmFyLmpzPzljMDAiXSwibmFtZXMiOlsic3R5bGUiLCJhY3RpdmUiLCJjbGFzc2VzIiwibmF2YmFyIiwiaW5hY3RpdmUiLCJOYXZiYXIiLCJwcm9wcyIsInVzZVN0YXRlIiwic2V0TmF2YmFyIiwidXNlckxvZ2luIiwic2V0VXNlckxvZ2luIiwidXNlRWZmZWN0IiwidG9rZW4iLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInNjcm9sbENoYW5nZUJhY2tHcm91bmQiLCJzY3JvbGxZIiwiY29udGFpbmVyX19uYXZiYXIiLCJjdXJzb3IiLCJyZW1vdmVJdGVtIiwibG9jYXRpb24iLCJocmVmIiwiZ2V0U3RhdGljUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsS0FBSyxHQUFHO0FBQ1pDLFFBQU0sRUFBRUMseURBQU8sQ0FBQ0MsTUFBUixHQUFpQixHQUFqQixHQUF1QkQseURBQU8sQ0FBQ0QsTUFEM0I7QUFFWkcsVUFBUSxFQUFFRix5REFBTyxDQUFDQztBQUZOLENBQWQ7O0FBSUEsSUFBTUUsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBQ0lDLHNEQUFRLENBQUMsSUFBRCxDQURaO0FBQUEsTUFDakJKLE1BRGlCO0FBQUEsTUFDVEssU0FEUzs7QUFBQSxtQkFFVUQsc0RBQVEsQ0FBQyxLQUFELENBRmxCO0FBQUEsTUFFakJFLFNBRmlCO0FBQUEsTUFFTkMsWUFGTTs7QUFHeEJDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQU1DLEtBQUssR0FBR0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLE9BQXJCLENBQWQ7O0FBQ0EsUUFBSUYsS0FBSixFQUFXO0FBQ1RGLGtCQUFZLENBQUMsSUFBRCxDQUFaO0FBQ0Q7O0FBRURLLFVBQU0sQ0FBQ0MsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0NDLHNCQUFsQztBQUNELEdBUFEsRUFPTixFQVBNLENBQVQ7O0FBU0EsTUFBTUEsc0JBQXNCLEdBQUcsU0FBekJBLHNCQUF5QixHQUFNO0FBQ25DLFFBQUlGLE1BQU0sQ0FBQ0csT0FBUCxJQUFrQixFQUF0QixFQUEwQjtBQUN4QlYsZUFBUyxDQUFDLEtBQUQsQ0FBVDtBQUNELEtBRkQsTUFFTztBQUNMQSxlQUFTLENBQUMsSUFBRCxDQUFUO0FBQ0Q7QUFDRixHQU5EOztBQVFBLHNCQUNFO0FBQUssYUFBUyxFQUFFUixLQUFLLENBQUNJLFFBQXRCO0FBQUEsZUFDR0ssU0FBUyxnQkFBRyxxRUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQUgsR0FBYyxJQUQxQixlQUVFO0FBQUssZUFBUyxFQUFFUCx5REFBTyxDQUFDaUIsaUJBQXhCO0FBQUEsZ0JBQ0dWLFNBQVMsZ0JBQ1IscUVBQUMsdURBQUQ7QUFDRSxZQUFJLEVBQUMsTUFEUDtBQUVFLGFBQUssRUFBQyxLQUZSO0FBR0UsYUFBSyxFQUFFO0FBQUVXLGdCQUFNLEVBQUU7QUFBVixTQUhUO0FBSUUsZUFBTyxFQUFFLG1CQUFNO0FBQ2JQLHNCQUFZLENBQUNRLFVBQWIsQ0FBd0IsT0FBeEI7QUFDQU4sZ0JBQU0sQ0FBQ08sUUFBUCxDQUFnQkMsSUFBaEIsR0FBdUIsUUFBdkI7QUFDRDtBQVBIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEUSxHQVVOO0FBWE47QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBa0JELENBdENEOztHQUFNbEIsTTs7S0FBQUEsTTtBQXdDQyxTQUFlbUIsY0FBdEI7QUFBQTtBQUFBOzs7bVVBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZDQUNFO0FBQ0xsQixtQkFBSyxFQUFFO0FBREYsYUFERjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHOzs7O0FBS1FELHFFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9sYXlvdXQvTmF2YmFyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vTmF2YmFyLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBJY29uIGZyb20gXCIuLi91aS9JY29uXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGaUxvZ091dCB9IGZyb20gXCJyZWFjdC1pY29ucy9maVwiO1xuY29uc3Qgc3R5bGUgPSB7XG4gIGFjdGl2ZTogY2xhc3Nlcy5uYXZiYXIgKyBcIiBcIiArIGNsYXNzZXMuYWN0aXZlLFxuICBpbmFjdGl2ZTogY2xhc3Nlcy5uYXZiYXIsXG59O1xuY29uc3QgTmF2YmFyID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IFtuYXZiYXIsIHNldE5hdmJhcl0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW3VzZXJMb2dpbiwgc2V0VXNlckxvZ2luXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XG4gICAgaWYgKHRva2VuKSB7XG4gICAgICBzZXRVc2VyTG9naW4odHJ1ZSk7XG4gICAgfVxuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgc2Nyb2xsQ2hhbmdlQmFja0dyb3VuZCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBzY3JvbGxDaGFuZ2VCYWNrR3JvdW5kID0gKCkgPT4ge1xuICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA+PSAxMCkge1xuICAgICAgc2V0TmF2YmFyKGZhbHNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0TmF2YmFyKHRydWUpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZS5pbmFjdGl2ZX0+XG4gICAgICB7dXNlckxvZ2luID8gPEljb24gLz4gOiBudWxsfVxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyX19uYXZiYXJ9PlxuICAgICAgICB7dXNlckxvZ2luID8gKFxuICAgICAgICAgIDxGaUxvZ091dFxuICAgICAgICAgICAgc2l6ZT1cIjQwcHhcIlxuICAgICAgICAgICAgY29sb3I9XCJyZWRcIlxuICAgICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInRva2VuXCIpO1xuICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiL2xvZ2luXCI7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICkgOiBudWxsfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHt9LFxuICB9O1xufVxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/layout/Navbar.js\n");

/***/ })

})