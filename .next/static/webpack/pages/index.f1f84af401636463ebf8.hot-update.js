webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _redux_actions_shop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/actions/shop */ \"./redux/actions/shop.js\");\n/* harmony import */ var _components_layout_Sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout/Sidebar */ \"./components/layout/Sidebar.js\");\n/* harmony import */ var _components_layout_Menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/layout/Menu */ \"./components/layout/Menu.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n\n\nvar _jsxFileName = \"/Users/teerapat/Documents/project/ecommerce/client/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Home(props) {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__[\"useRouter\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      shopList = _useState[0],\n      setShopList = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(true),\n      addNewShop = _useState2[0],\n      setAddNewShop = _useState2[1];\n\n  var onSelect = function onSelect(shopId, shopName) {\n    router.push(\"/shop/manage/\".concat(shopName, \"/\").concat(shopId));\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    axios__WEBPACK_IMPORTED_MODULE_1___default()({\n      url: \"http://localhost:8000/api/shop/getShop\",\n      method: \"post\",\n      data: {\n        id: props.user.id\n      },\n      headers: {\n        \"Content-Type\": \"application/json\"\n      }\n    }).then(function (res) {\n      setShopList(res.data);\n      res.data.map(function (shop) {\n        if (shop.role === \"admin\") setAddNewShop(false);\n        props.addshop(shop);\n      });\n    });\n  }, []);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"container  shadow  bg-body rounded\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_layout_Menu__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      shopList: shopList,\n      addNewShop: addNewShop,\n      onSelect: onSelect\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 33,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"lWJE979GLn7lx43uy+Zz3Zk2nDg=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_7__[\"useRouter\"]];\n});\n\n_c = Home;\n\nvar MapStatetoProps = function MapStatetoProps(state) {\n  return {\n    user: state.user,\n    shop: state.shop\n  };\n};\n\n_c2 = MapStatetoProps;\nvar MapDispatchToProps = {\n  addshop: _redux_actions_shop__WEBPACK_IMPORTED_MODULE_3__[\"addshop\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__[\"connect\"])(MapStatetoProps, MapDispatchToProps)(Home));\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Home\");\n$RefreshReg$(_c2, \"MapStatetoProps\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwicHJvcHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsInNob3BMaXN0Iiwic2V0U2hvcExpc3QiLCJhZGROZXdTaG9wIiwic2V0QWRkTmV3U2hvcCIsIm9uU2VsZWN0Iiwic2hvcElkIiwic2hvcE5hbWUiLCJwdXNoIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJ1cmwiLCJtZXRob2QiLCJkYXRhIiwiaWQiLCJ1c2VyIiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJtYXAiLCJzaG9wIiwicm9sZSIsImFkZHNob3AiLCJNYXBTdGF0ZXRvUHJvcHMiLCJzdGF0ZSIsIk1hcERpc3BhdGNoVG9Qcm9wcyIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQVNBLElBQVQsQ0FBY0MsS0FBZCxFQUFxQjtBQUFBOztBQUNuQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQURtQixrQkFFYUMsc0RBQVEsQ0FBQyxFQUFELENBRnJCO0FBQUEsTUFFWkMsUUFGWTtBQUFBLE1BRUZDLFdBRkU7O0FBQUEsbUJBR2lCRixzREFBUSxDQUFDLElBQUQsQ0FIekI7QUFBQSxNQUdaRyxVQUhZO0FBQUEsTUFHQUMsYUFIQTs7QUFJbkIsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsTUFBRCxFQUFTQyxRQUFULEVBQXNCO0FBQ3JDVCxVQUFNLENBQUNVLElBQVAsd0JBQTRCRCxRQUE1QixjQUF3Q0QsTUFBeEM7QUFDRCxHQUZEOztBQUdBRyx5REFBUyxDQUFDLFlBQU07QUFDZEMsZ0RBQUssQ0FBQztBQUNKQyxTQUFHLDBDQURDO0FBRUpDLFlBQU0sRUFBRSxNQUZKO0FBR0pDLFVBQUksRUFBRTtBQUFFQyxVQUFFLEVBQUVqQixLQUFLLENBQUNrQixJQUFOLENBQVdEO0FBQWpCLE9BSEY7QUFJSkUsYUFBTyxFQUFFO0FBQ1Asd0JBQWdCO0FBRFQ7QUFKTCxLQUFELENBQUwsQ0FPR0MsSUFQSCxDQU9RLFVBQUNDLEdBQUQsRUFBUztBQUNmaEIsaUJBQVcsQ0FBQ2dCLEdBQUcsQ0FBQ0wsSUFBTCxDQUFYO0FBQ0FLLFNBQUcsQ0FBQ0wsSUFBSixDQUFTTSxHQUFULENBQWEsVUFBQ0MsSUFBRCxFQUFVO0FBQ3JCLFlBQUlBLElBQUksQ0FBQ0MsSUFBTCxLQUFjLE9BQWxCLEVBQTJCakIsYUFBYSxDQUFDLEtBQUQsQ0FBYjtBQUMzQlAsYUFBSyxDQUFDeUIsT0FBTixDQUFjRixJQUFkO0FBQ0QsT0FIRDtBQUlELEtBYkQ7QUFjRCxHQWZRLEVBZU4sRUFmTSxDQUFUO0FBaUJBLHNCQUNFO0FBQUssYUFBUyxFQUFDLG9DQUFmO0FBQUEsMkJBTUUscUVBQUMsK0RBQUQ7QUFBTSxjQUFRLEVBQUVuQixRQUFoQjtBQUEwQixnQkFBVSxFQUFFRSxVQUF0QztBQUFrRCxjQUFRLEVBQUVFO0FBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFORjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFVRDs7R0FsQ1FULEk7VUFDUUcscUQ7OztLQURSSCxJOztBQW9DVCxJQUFNMkIsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUNsQ1QsUUFBSSxFQUFFUyxLQUFLLENBQUNULElBRHNCO0FBRWxDSyxRQUFJLEVBQUVJLEtBQUssQ0FBQ0o7QUFGc0IsR0FBWjtBQUFBLENBQXhCOztNQUFNRyxlO0FBS04sSUFBTUUsa0JBQWtCLEdBQUc7QUFDekJILFNBQU8sRUFBRUEsMkRBQU9BO0FBRFMsQ0FBM0I7QUFJZUksMEhBQU8sQ0FBQ0gsZUFBRCxFQUFrQkUsa0JBQWxCLENBQVAsQ0FBNkM3QixJQUE3QyxDQUFmIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBhZGRzaG9wIH0gZnJvbSBcIi4uL3JlZHV4L2FjdGlvbnMvc2hvcFwiO1xuaW1wb3J0IFNpZGViYXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0L1NpZGViYXJcIjtcbmltcG9ydCBNZW51IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dC9NZW51XCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmZ1bmN0aW9uIEhvbWUocHJvcHMpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFtzaG9wTGlzdCwgc2V0U2hvcExpc3RdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbYWRkTmV3U2hvcCwgc2V0QWRkTmV3U2hvcF0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3Qgb25TZWxlY3QgPSAoc2hvcElkLCBzaG9wTmFtZSkgPT4ge1xuICAgIHJvdXRlci5wdXNoKGAvc2hvcC9tYW5hZ2UvJHtzaG9wTmFtZX0vJHtzaG9wSWR9YCk7XG4gIH07XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXhpb3Moe1xuICAgICAgdXJsOiBgaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9zaG9wL2dldFNob3BgLFxuICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgIGRhdGE6IHsgaWQ6IHByb3BzLnVzZXIuaWQgfSxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICB9LFxuICAgIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgc2V0U2hvcExpc3QocmVzLmRhdGEpO1xuICAgICAgcmVzLmRhdGEubWFwKChzaG9wKSA9PiB7XG4gICAgICAgIGlmIChzaG9wLnJvbGUgPT09IFwiYWRtaW5cIikgc2V0QWRkTmV3U2hvcChmYWxzZSk7XG4gICAgICAgIHByb3BzLmFkZHNob3Aoc2hvcCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgIHNoYWRvdyAgYmctYm9keSByb3VuZGVkXCI+XG4gICAgICB7LyogPFNpZGViYXJcbiAgICAgICAgc2hvcExpc3Q9e3Nob3BMaXN0fVxuICAgICAgICBhZGROZXdTaG9wPXthZGROZXdTaG9wfVxuICAgICAgICBvblNlbGVjdFNpZGViYXI9e29uU2VsZWN0U2lkZWJhcn1cbiAgICAgIC8+ICovfVxuICAgICAgPE1lbnUgc2hvcExpc3Q9e3Nob3BMaXN0fSBhZGROZXdTaG9wPXthZGROZXdTaG9wfSBvblNlbGVjdD17b25TZWxlY3R9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmNvbnN0IE1hcFN0YXRldG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcbiAgdXNlcjogc3RhdGUudXNlcixcbiAgc2hvcDogc3RhdGUuc2hvcCxcbn0pO1xuXG5jb25zdCBNYXBEaXNwYXRjaFRvUHJvcHMgPSB7XG4gIGFkZHNob3A6IGFkZHNob3AsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KE1hcFN0YXRldG9Qcm9wcywgTWFwRGlzcGF0Y2hUb1Byb3BzKShIb21lKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})