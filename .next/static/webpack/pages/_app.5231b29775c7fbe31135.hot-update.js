webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/layout/Navbar.js":
/*!*************************************!*\
  !*** ./components/layout/Navbar.js ***!
  \*************************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var _Users_teerapat_Documents_project_ecommerce_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_teerapat_Documents_project_ecommerce_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_teerapat_Documents_project_ecommerce_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_teerapat_Documents_project_ecommerce_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Navbar.module.css */ \"./components/layout/Navbar.module.css\");\n/* harmony import */ var _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Navbar_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _ui_Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ui/Icon */ \"./components/ui/Icon.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fi */ \"./node_modules/react-icons/fi/index.esm.js\");\n\n\n\n\nvar _jsxFileName = \"/Users/teerapat/Documents/project/ecommerce/client/components/layout/Navbar.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar Navbar = function Navbar(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(true),\n      navbar = _useState[0],\n      setNavbar = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useState\"])(false),\n      userLogin = _useState2[0],\n      setUserLogin = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_5__[\"useEffect\"])(function () {\n    var token = localStorage.getItem(\"token\");\n\n    if (token) {\n      setUserLogin(true);\n    }\n\n    window.addEventListener(\"scroll\", scrollChangeBackGround);\n  }, []);\n\n  var scrollChangeBackGround = function scrollChangeBackGround() {\n    if (window.scrollY >= 10) {\n      setNavbar(false);\n    } else {\n      setNavbar(true);\n    }\n  };\n\n  console.log(navbar);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.navbar + \" \" + navbar ? null : _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.active,\n    children: [userLogin ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(_ui_Icon__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 20\n    }, _this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(\"div\", {\n      className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.container__navbar,\n      children: userLogin ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__[\"jsxDEV\"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_6__[\"FiLogOut\"], {\n        size: \"40px\",\n        color: \"red\",\n        style: {\n          cursor: \"pointer\"\n        },\n        onClick: function onClick() {\n          localStorage.removeItem(\"token\");\n          window.location.href = \"/login\";\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 11\n      }, _this) : null\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 27,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Navbar, \"uWQ2mfjhFtMNnxuivneJ85/x9cQ=\");\n\n_c = Navbar;\nfunction getStaticProps() {\n  return _getStaticProps.apply(this, arguments);\n}\n\nfunction _getStaticProps() {\n  _getStaticProps = Object(_Users_teerapat_Documents_project_ecommerce_client_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_teerapat_Documents_project_ecommerce_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n    return _Users_teerapat_Documents_project_ecommerce_client_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            return _context.abrupt(\"return\", {\n              props: {}\n            });\n\n          case 1:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _getStaticProps.apply(this, arguments);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\n\nvar _c;\n\n$RefreshReg$(_c, \"Navbar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvTmF2YmFyLmpzPzljMDAiXSwibmFtZXMiOlsiTmF2YmFyIiwicHJvcHMiLCJ1c2VTdGF0ZSIsIm5hdmJhciIsInNldE5hdmJhciIsInVzZXJMb2dpbiIsInNldFVzZXJMb2dpbiIsInVzZUVmZmVjdCIsInRva2VuIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJzY3JvbGxDaGFuZ2VCYWNrR3JvdW5kIiwic2Nyb2xsWSIsImNvbnNvbGUiLCJsb2ciLCJjbGFzc2VzIiwiYWN0aXZlIiwiY29udGFpbmVyX19uYXZiYXIiLCJjdXJzb3IiLCJyZW1vdmVJdGVtIiwibG9jYXRpb24iLCJocmVmIiwiZ2V0U3RhdGljUHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUFBLGtCQUNJQyxzREFBUSxDQUFDLElBQUQsQ0FEWjtBQUFBLE1BQ2pCQyxNQURpQjtBQUFBLE1BQ1RDLFNBRFM7O0FBQUEsbUJBRVVGLHNEQUFRLENBQUMsS0FBRCxDQUZsQjtBQUFBLE1BRWpCRyxTQUZpQjtBQUFBLE1BRU5DLFlBRk07O0FBR3hCQyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxLQUFLLEdBQUdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixPQUFyQixDQUFkOztBQUNBLFFBQUlGLEtBQUosRUFBVztBQUNURixrQkFBWSxDQUFDLElBQUQsQ0FBWjtBQUNEOztBQUVESyxVQUFNLENBQUNDLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDQyxzQkFBbEM7QUFDRCxHQVBRLEVBT04sRUFQTSxDQUFUOztBQVNBLE1BQU1BLHNCQUFzQixHQUFHLFNBQXpCQSxzQkFBeUIsR0FBTTtBQUNuQyxRQUFJRixNQUFNLENBQUNHLE9BQVAsSUFBa0IsRUFBdEIsRUFBMEI7QUFDeEJWLGVBQVMsQ0FBQyxLQUFELENBQVQ7QUFDRCxLQUZELE1BRU87QUFDTEEsZUFBUyxDQUFDLElBQUQsQ0FBVDtBQUNEO0FBQ0YsR0FORDs7QUFPQVcsU0FBTyxDQUFDQyxHQUFSLENBQVliLE1BQVo7QUFFQSxzQkFDRTtBQUFLLGFBQVMsRUFBRWMseURBQU8sQ0FBQ2QsTUFBUixHQUFpQixHQUFqQixHQUF1QkEsTUFBdkIsR0FBZ0MsSUFBaEMsR0FBdUNjLHlEQUFPLENBQUNDLE1BQS9EO0FBQUEsZUFDR2IsU0FBUyxnQkFBRyxxRUFBQyxnREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQUgsR0FBYyxJQUQxQixlQUVFO0FBQUssZUFBUyxFQUFFWSx5REFBTyxDQUFDRSxpQkFBeEI7QUFBQSxnQkFDR2QsU0FBUyxnQkFDUixxRUFBQyx1REFBRDtBQUNFLFlBQUksRUFBQyxNQURQO0FBRUUsYUFBSyxFQUFDLEtBRlI7QUFHRSxhQUFLLEVBQUU7QUFBRWUsZ0JBQU0sRUFBRTtBQUFWLFNBSFQ7QUFJRSxlQUFPLEVBQUUsbUJBQU07QUFDYlgsc0JBQVksQ0FBQ1ksVUFBYixDQUF3QixPQUF4QjtBQUNBVixnQkFBTSxDQUFDVyxRQUFQLENBQWdCQyxJQUFoQixHQUF1QixRQUF2QjtBQUNEO0FBUEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURRLEdBVU47QUFYTjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFrQkQsQ0F2Q0Q7O0dBQU12QixNOztLQUFBQSxNO0FBeUNDLFNBQWV3QixjQUF0QjtBQUFBO0FBQUE7OzttVUFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkNBQ0U7QUFDTHZCLG1CQUFLLEVBQUU7QUFERixhQURGOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEc7Ozs7QUFLUUQscUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL2xheW91dC9OYXZiYXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9OYXZiYXIubW9kdWxlLmNzc1wiO1xuaW1wb3J0IEljb24gZnJvbSBcIi4uL3VpL0ljb25cIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZpTG9nT3V0IH0gZnJvbSBcInJlYWN0LWljb25zL2ZpXCI7XG5jb25zdCBOYXZiYXIgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgW25hdmJhciwgc2V0TmF2YmFyXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbdXNlckxvZ2luLCBzZXRVc2VyTG9naW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKTtcbiAgICBpZiAodG9rZW4pIHtcbiAgICAgIHNldFVzZXJMb2dpbih0cnVlKTtcbiAgICB9XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBzY3JvbGxDaGFuZ2VCYWNrR3JvdW5kKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IHNjcm9sbENoYW5nZUJhY2tHcm91bmQgPSAoKSA9PiB7XG4gICAgaWYgKHdpbmRvdy5zY3JvbGxZID49IDEwKSB7XG4gICAgICBzZXROYXZiYXIoZmFsc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzZXROYXZiYXIodHJ1ZSk7XG4gICAgfVxuICB9O1xuICBjb25zb2xlLmxvZyhuYXZiYXIpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubmF2YmFyICsgXCIgXCIgKyBuYXZiYXIgPyBudWxsIDogY2xhc3Nlcy5hY3RpdmV9PlxuICAgICAge3VzZXJMb2dpbiA/IDxJY29uIC8+IDogbnVsbH1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcl9fbmF2YmFyfT5cbiAgICAgICAge3VzZXJMb2dpbiA/IChcbiAgICAgICAgICA8RmlMb2dPdXRcbiAgICAgICAgICAgIHNpemU9XCI0MHB4XCJcbiAgICAgICAgICAgIGNvbG9yPVwicmVkXCJcbiAgICAgICAgICAgIHN0eWxlPXt7IGN1cnNvcjogXCJwb2ludGVyXCIgfX1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ0b2tlblwiKTtcbiAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9sb2dpblwiO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICApIDogbnVsbH1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xuICByZXR1cm4ge1xuICAgIHByb3BzOiB7fSxcbiAgfTtcbn1cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/layout/Navbar.js\n");

/***/ })

})