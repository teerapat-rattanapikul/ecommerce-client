webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/layout/Navbar.js":
/*!*************************************!*\
  !*** ./components/layout/Navbar.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar.module.css */ \"./components/layout/Navbar.module.css\");\n/* harmony import */ var _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Navbar_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ui_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/Icon */ \"./components/ui/Icon.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _redux_actions_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../redux/actions/user */ \"./redux/actions/user.js\");\n/* harmony import */ var _redux_actions_shop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../redux/actions/shop */ \"./redux/actions/shop.js\");\n/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/fi */ \"./node_modules/react-icons/fi/index.esm.js\");\n/* harmony import */ var _Redirect__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Redirect */ \"./components/Redirect.js\");\n\n\nvar _jsxFileName = \"/Users/teerapat/Documents/project/ecommerce/client/components/layout/Navbar.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nvar Navbar = function Navbar(props) {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    var token = localStorage.getItem(\"token\");\n\n    if (token) {\n      props.tokenFetch(token);\n    }\n\n    axios({\n      url: \"http://localhost:8000/api/shop/getShop\",\n      method: \"post\",\n      data: {\n        id: props.user.id\n      },\n      headers: {\n        \"Content-Type\": \"application/json\"\n      }\n    }).then(function (res) {\n      setShopList(res.data);\n      res.data.map(function (shop) {\n        if (shop.role === \"admin\") setAddNewShop(false);\n        props.addshop(shop);\n        setLoading(false);\n      });\n    });\n  }, []); // if (!props.user.status) {\n  //   // return <Redirect to={`/login`} />;\n  // }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.navbar,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_ui_Icon__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      userLogin: props.user.status\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _Navbar_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.container__navbar,\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_8__[\"FiLogOut\"], {\n        size: \"40px\",\n        color: \"red\",\n        style: {\n          cursor: \"pointer\"\n        },\n        onClick: function onClick() {\n          localStorage.removeItem(\"token\");\n          window.location.href = \"/login\";\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 37,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Navbar, \"vQduR7x+OPXj6PSmJyFnf+hU7bg=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__[\"useRouter\"]];\n});\n\n_c = Navbar;\n\nvar MapStateToProps = function MapStateToProps(state) {\n  return {\n    user: state.user,\n    shpop: state.shop\n  };\n};\n\n_c2 = MapStateToProps;\nvar MapDispatchToProps = {\n  userLogin: _redux_actions_user__WEBPACK_IMPORTED_MODULE_6__[\"userLogin\"],\n  tokenFetch: _redux_actions_user__WEBPACK_IMPORTED_MODULE_6__[\"tokenFetch\"],\n  addshop: _redux_actions_shop__WEBPACK_IMPORTED_MODULE_7__[\"addshop\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__[\"connect\"])(MapStateToProps, MapDispatchToProps)(Navbar));\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Navbar\");\n$RefreshReg$(_c2, \"MapStateToProps\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvTmF2YmFyLmpzPzljMDAiXSwibmFtZXMiOlsiTmF2YmFyIiwicHJvcHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ0b2tlbiIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ0b2tlbkZldGNoIiwiYXhpb3MiLCJ1cmwiLCJtZXRob2QiLCJkYXRhIiwiaWQiLCJ1c2VyIiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJzZXRTaG9wTGlzdCIsIm1hcCIsInNob3AiLCJyb2xlIiwic2V0QWRkTmV3U2hvcCIsImFkZHNob3AiLCJzZXRMb2FkaW5nIiwiY2xhc3NlcyIsIm5hdmJhciIsInN0YXR1cyIsImNvbnRhaW5lcl9fbmF2YmFyIiwiY3Vyc29yIiwicmVtb3ZlSXRlbSIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsIk1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwic2hwb3AiLCJNYXBEaXNwYXRjaFRvUHJvcHMiLCJ1c2VyTG9naW4iLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQ3hCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBTUMsS0FBSyxHQUFHQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsT0FBckIsQ0FBZDs7QUFDQSxRQUFJRixLQUFKLEVBQVc7QUFDVEosV0FBSyxDQUFDTyxVQUFOLENBQWlCSCxLQUFqQjtBQUNEOztBQUNESSxTQUFLLENBQUM7QUFDSkMsU0FBRywwQ0FEQztBQUVKQyxZQUFNLEVBQUUsTUFGSjtBQUdKQyxVQUFJLEVBQUU7QUFBRUMsVUFBRSxFQUFFWixLQUFLLENBQUNhLElBQU4sQ0FBV0Q7QUFBakIsT0FIRjtBQUlKRSxhQUFPLEVBQUU7QUFDUCx3QkFBZ0I7QUFEVDtBQUpMLEtBQUQsQ0FBTCxDQU9HQyxJQVBILENBT1EsVUFBQ0MsR0FBRCxFQUFTO0FBQ2ZDLGlCQUFXLENBQUNELEdBQUcsQ0FBQ0wsSUFBTCxDQUFYO0FBQ0FLLFNBQUcsQ0FBQ0wsSUFBSixDQUFTTyxHQUFULENBQWEsVUFBQ0MsSUFBRCxFQUFVO0FBQ3JCLFlBQUlBLElBQUksQ0FBQ0MsSUFBTCxLQUFjLE9BQWxCLEVBQTJCQyxhQUFhLENBQUMsS0FBRCxDQUFiO0FBQzNCckIsYUFBSyxDQUFDc0IsT0FBTixDQUFjSCxJQUFkO0FBQ0FJLGtCQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0QsT0FKRDtBQUtELEtBZEQ7QUFlRCxHQXBCUSxFQW9CTixFQXBCTSxDQUFULENBRndCLENBdUJ4QjtBQUNBO0FBQ0E7O0FBQ0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUVDLHlEQUFPLENBQUNDLE1BQXhCO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxlQUFTLEVBQUV6QixLQUFLLENBQUNhLElBQU4sQ0FBV2E7QUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUU7QUFBSyxlQUFTLEVBQUVGLHlEQUFPLENBQUNHLGlCQUF4QjtBQUFBLDZCQUNFLHFFQUFDLHVEQUFEO0FBQ0UsWUFBSSxFQUFDLE1BRFA7QUFFRSxhQUFLLEVBQUMsS0FGUjtBQUdFLGFBQUssRUFBRTtBQUFFQyxnQkFBTSxFQUFFO0FBQVYsU0FIVDtBQUlFLGVBQU8sRUFBRSxtQkFBTTtBQUNidkIsc0JBQVksQ0FBQ3dCLFVBQWIsQ0FBd0IsT0FBeEI7QUFDQUMsZ0JBQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsSUFBaEIsR0FBdUIsUUFBdkI7QUFDRDtBQVBIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFnQkQsQ0ExQ0Q7O0dBQU1qQyxNO1VBQ1dHLHFEOzs7S0FEWEgsTTs7QUE0Q04sSUFBTWtDLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDbENyQixRQUFJLEVBQUVxQixLQUFLLENBQUNyQixJQURzQjtBQUVsQ3NCLFNBQUssRUFBRUQsS0FBSyxDQUFDZjtBQUZxQixHQUFaO0FBQUEsQ0FBeEI7O01BQU1jLGU7QUFJTixJQUFNRyxrQkFBa0IsR0FBRztBQUN6QkMsV0FBUyxFQUFFQSw2REFEYztBQUV6QjlCLFlBQVUsRUFBRUEsOERBRmE7QUFHekJlLFNBQU8sRUFBRUEsMkRBQU9BO0FBSFMsQ0FBM0I7QUFNZWdCLDBIQUFPLENBQUNMLGVBQUQsRUFBa0JHLGtCQUFsQixDQUFQLENBQTZDckMsTUFBN0MsQ0FBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvbGF5b3V0L05hdmJhci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGFzc2VzIGZyb20gXCIuL05hdmJhci5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vdWkvSWNvblwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyB1c2VyTG9naW4sIHRva2VuRmV0Y2ggfSBmcm9tIFwiLi4vLi4vcmVkdXgvYWN0aW9ucy91c2VyXCI7XG5pbXBvcnQgeyBhZGRzaG9wIH0gZnJvbSBcIi4uLy4uL3JlZHV4L2FjdGlvbnMvc2hvcFwiO1xuaW1wb3J0IHsgRmlMb2dPdXQgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmlcIjtcbmltcG9ydCBSZWRpcmVjdCBmcm9tIFwiLi4vUmVkaXJlY3RcIjtcbmNvbnN0IE5hdmJhciA9IChwcm9wcykgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XG4gICAgaWYgKHRva2VuKSB7XG4gICAgICBwcm9wcy50b2tlbkZldGNoKHRva2VuKTtcbiAgICB9XG4gICAgYXhpb3Moe1xuICAgICAgdXJsOiBgaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9zaG9wL2dldFNob3BgLFxuICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgIGRhdGE6IHsgaWQ6IHByb3BzLnVzZXIuaWQgfSxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICB9LFxuICAgIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgc2V0U2hvcExpc3QocmVzLmRhdGEpO1xuICAgICAgcmVzLmRhdGEubWFwKChzaG9wKSA9PiB7XG4gICAgICAgIGlmIChzaG9wLnJvbGUgPT09IFwiYWRtaW5cIikgc2V0QWRkTmV3U2hvcChmYWxzZSk7XG4gICAgICAgIHByb3BzLmFkZHNob3Aoc2hvcCk7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sIFtdKTtcbiAgLy8gaWYgKCFwcm9wcy51c2VyLnN0YXR1cykge1xuICAvLyAgIC8vIHJldHVybiA8UmVkaXJlY3QgdG89e2AvbG9naW5gfSAvPjtcbiAgLy8gfVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLm5hdmJhcn0+XG4gICAgICA8SWNvbiB1c2VyTG9naW49e3Byb3BzLnVzZXIuc3RhdHVzfSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyX19uYXZiYXJ9PlxuICAgICAgICA8RmlMb2dPdXRcbiAgICAgICAgICBzaXplPVwiNDBweFwiXG4gICAgICAgICAgY29sb3I9XCJyZWRcIlxuICAgICAgICAgIHN0eWxlPXt7IGN1cnNvcjogXCJwb2ludGVyXCIgfX1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInRva2VuXCIpO1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBcIi9sb2dpblwiO1xuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IE1hcFN0YXRlVG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcbiAgdXNlcjogc3RhdGUudXNlcixcbiAgc2hwb3A6IHN0YXRlLnNob3AsXG59KTtcbmNvbnN0IE1hcERpc3BhdGNoVG9Qcm9wcyA9IHtcbiAgdXNlckxvZ2luOiB1c2VyTG9naW4sXG4gIHRva2VuRmV0Y2g6IHRva2VuRmV0Y2gsXG4gIGFkZHNob3A6IGFkZHNob3AsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KE1hcFN0YXRlVG9Qcm9wcywgTWFwRGlzcGF0Y2hUb1Byb3BzKShOYXZiYXIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/layout/Navbar.js\n");

/***/ })

})