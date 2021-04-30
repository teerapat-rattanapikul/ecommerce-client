webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _redux_actions_shop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/actions/shop */ \"./redux/actions/shop.js\");\n/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-loader-spinner */ \"./node_modules/react-loader-spinner/dist/index.js\");\n/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_layout_Menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/layout/Menu */ \"./components/layout/Menu.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n\n\nvar _jsxFileName = \"/Users/teerapat/Documents/project/ecommerce/client/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Home(props) {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__[\"useRouter\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      shopList = _useState[0],\n      setShopList = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(true),\n      loading = _useState2[0],\n      setLoading = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      addNewShop = _useState3[0],\n      setAddNewShop = _useState3[1];\n\n  var onSelect = function onSelect(shopId, shopName) {\n    router.push(\"/shop/manage/\".concat(shopName, \"/\").concat(shopId));\n  };\n\n  if (props.user.status && Object.keys(props.shop.detail).length > 0 && loading) {\n    // axios({\n    //   url: `http://localhost:8000/api/shop/getShop`,\n    //   method: \"post\",\n    //   data: { id: props.user.id },\n    //   headers: {\n    //     \"Content-Type\": \"application/json\",\n    //   },\n    // }).then((res) => {\n    //   setShopList(res.data);\n    //   res.data.map((shop) => {\n    //     if (shop.role === \"admin\") setAddNewShop(false);\n    //     props.addshop(shop);\n    //     setLoading(false);\n    //   });\n    // });\n    setShopList(props.shop);\n    setLoading(false);\n  } // useEffect(() => {\n  //   if (!props.user.status) setLoad(!load);\n  //   axios({\n  //     url: `http://localhost:8000/api/shop/getShop`,\n  //     method: \"post\",\n  //     data: { id: props.user.id },\n  //     headers: {\n  //       \"Content-Type\": \"application/json\",\n  //     },\n  //   }).then((res) => {\n  //     setShopList(res.data);\n  //     res.data.map((shop) => {\n  //       if (shop.role === \"admin\") setAddNewShop(false);\n  //       props.addshop(shop);\n  //     });\n  //   });\n  // }, []);\n\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"container  shadow  bg-body rounded\",\n    children: loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_loader_spinner__WEBPACK_IMPORTED_MODULE_4___default.a, {\n      type: \"ThreeDots\",\n      color: \"#8a9bae\",\n      height: 100,\n      width: 100,\n      visible: loading,\n      className: \"loading\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 9\n    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_layout_Menu__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      shopList: shopList,\n      addNewShop: addNewShop,\n      onSelect: onSelect\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 9\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 58,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"NrsOrdHj4qc0/+JaD+JNhA6q8YE=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_7__[\"useRouter\"]];\n});\n\n_c = Home;\n\nvar MapStatetoProps = function MapStatetoProps(state) {\n  return {\n    user: state.user,\n    shop: state.shop\n  };\n};\n\n_c2 = MapStatetoProps;\nvar MapDispatchToProps = {\n  addshop: _redux_actions_shop__WEBPACK_IMPORTED_MODULE_3__[\"addshop\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__[\"connect\"])(MapStatetoProps, MapDispatchToProps)(Home));\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Home\");\n$RefreshReg$(_c2, \"MapStatetoProps\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwicHJvcHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsInNob3BMaXN0Iiwic2V0U2hvcExpc3QiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImFkZE5ld1Nob3AiLCJzZXRBZGROZXdTaG9wIiwib25TZWxlY3QiLCJzaG9wSWQiLCJzaG9wTmFtZSIsInB1c2giLCJ1c2VyIiwic3RhdHVzIiwiT2JqZWN0Iiwia2V5cyIsInNob3AiLCJkZXRhaWwiLCJsZW5ndGgiLCJNYXBTdGF0ZXRvUHJvcHMiLCJzdGF0ZSIsIk1hcERpc3BhdGNoVG9Qcm9wcyIsImFkZHNob3AiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBU0EsSUFBVCxDQUFjQyxLQUFkLEVBQXFCO0FBQUE7O0FBQ25CLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRG1CLGtCQUVhQyxzREFBUSxDQUFDLEVBQUQsQ0FGckI7QUFBQSxNQUVaQyxRQUZZO0FBQUEsTUFFRkMsV0FGRTs7QUFBQSxtQkFHV0Ysc0RBQVEsQ0FBQyxJQUFELENBSG5CO0FBQUEsTUFHWkcsT0FIWTtBQUFBLE1BR0hDLFVBSEc7O0FBQUEsbUJBSWlCSixzREFBUSxDQUFDLEtBQUQsQ0FKekI7QUFBQSxNQUlaSyxVQUpZO0FBQUEsTUFJQUMsYUFKQTs7QUFLbkIsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsTUFBRCxFQUFTQyxRQUFULEVBQXNCO0FBQ3JDWCxVQUFNLENBQUNZLElBQVAsd0JBQTRCRCxRQUE1QixjQUF3Q0QsTUFBeEM7QUFDRCxHQUZEOztBQUdBLE1BQ0VYLEtBQUssQ0FBQ2MsSUFBTixDQUFXQyxNQUFYLElBQ0FDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZakIsS0FBSyxDQUFDa0IsSUFBTixDQUFXQyxNQUF2QixFQUErQkMsTUFBL0IsR0FBd0MsQ0FEeEMsSUFFQWQsT0FIRixFQUlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FELGVBQVcsQ0FBQ0wsS0FBSyxDQUFDa0IsSUFBUCxDQUFYO0FBQ0FYLGNBQVUsQ0FBQyxLQUFELENBQVY7QUFDRCxHQTlCa0IsQ0ErQm5CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLHNCQUNFO0FBQUssYUFBUyxFQUFDLG9DQUFmO0FBQUEsY0FDR0QsT0FBTyxnQkFDTixxRUFBQywyREFBRDtBQUNFLFVBQUksRUFBQyxXQURQO0FBRUUsV0FBSyxFQUFDLFNBRlI7QUFHRSxZQUFNLEVBQUUsR0FIVjtBQUlFLFdBQUssRUFBRSxHQUpUO0FBS0UsYUFBTyxFQUFFQSxPQUxYO0FBTUUsZUFBUyxFQUFDO0FBTlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURNLGdCQVVOLHFFQUFDLCtEQUFEO0FBQU0sY0FBUSxFQUFFRixRQUFoQjtBQUEwQixnQkFBVSxFQUFFSSxVQUF0QztBQUFrRCxjQUFRLEVBQUVFO0FBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFYSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFnQkQ7O0dBakVRWCxJO1VBQ1FHLHFEOzs7S0FEUkgsSTs7QUFtRVQsSUFBTXNCLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDbENSLFFBQUksRUFBRVEsS0FBSyxDQUFDUixJQURzQjtBQUVsQ0ksUUFBSSxFQUFFSSxLQUFLLENBQUNKO0FBRnNCLEdBQVo7QUFBQSxDQUF4Qjs7TUFBTUcsZTtBQUtOLElBQU1FLGtCQUFrQixHQUFHO0FBQ3pCQyxTQUFPLEVBQUVBLDJEQUFPQTtBQURTLENBQTNCO0FBSWVDLDBIQUFPLENBQUNKLGVBQUQsRUFBa0JFLGtCQUFsQixDQUFQLENBQTZDeEIsSUFBN0MsQ0FBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgYWRkc2hvcCB9IGZyb20gXCIuLi9yZWR1eC9hY3Rpb25zL3Nob3BcIjtcbmltcG9ydCBMb2FkZXIgZnJvbSBcInJlYWN0LWxvYWRlci1zcGlubmVyXCI7XG5pbXBvcnQgTWVudSBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXQvTWVudVwiO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5mdW5jdGlvbiBIb21lKHByb3BzKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbc2hvcExpc3QsIHNldFNob3BMaXN0XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFthZGROZXdTaG9wLCBzZXRBZGROZXdTaG9wXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3Qgb25TZWxlY3QgPSAoc2hvcElkLCBzaG9wTmFtZSkgPT4ge1xuICAgIHJvdXRlci5wdXNoKGAvc2hvcC9tYW5hZ2UvJHtzaG9wTmFtZX0vJHtzaG9wSWR9YCk7XG4gIH07XG4gIGlmIChcbiAgICBwcm9wcy51c2VyLnN0YXR1cyAmJlxuICAgIE9iamVjdC5rZXlzKHByb3BzLnNob3AuZGV0YWlsKS5sZW5ndGggPiAwICYmXG4gICAgbG9hZGluZ1xuICApIHtcbiAgICAvLyBheGlvcyh7XG4gICAgLy8gICB1cmw6IGBodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3Nob3AvZ2V0U2hvcGAsXG4gICAgLy8gICBtZXRob2Q6IFwicG9zdFwiLFxuICAgIC8vICAgZGF0YTogeyBpZDogcHJvcHMudXNlci5pZCB9LFxuICAgIC8vICAgaGVhZGVyczoge1xuICAgIC8vICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAvLyAgIH0sXG4gICAgLy8gfSkudGhlbigocmVzKSA9PiB7XG4gICAgLy8gICBzZXRTaG9wTGlzdChyZXMuZGF0YSk7XG4gICAgLy8gICByZXMuZGF0YS5tYXAoKHNob3ApID0+IHtcbiAgICAvLyAgICAgaWYgKHNob3Aucm9sZSA9PT0gXCJhZG1pblwiKSBzZXRBZGROZXdTaG9wKGZhbHNlKTtcbiAgICAvLyAgICAgcHJvcHMuYWRkc2hvcChzaG9wKTtcbiAgICAvLyAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgLy8gICB9KTtcbiAgICAvLyB9KTtcbiAgICBzZXRTaG9wTGlzdChwcm9wcy5zaG9wKTtcbiAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgfVxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGlmICghcHJvcHMudXNlci5zdGF0dXMpIHNldExvYWQoIWxvYWQpO1xuICAvLyAgIGF4aW9zKHtcbiAgLy8gICAgIHVybDogYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvc2hvcC9nZXRTaG9wYCxcbiAgLy8gICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gIC8vICAgICBkYXRhOiB7IGlkOiBwcm9wcy51c2VyLmlkIH0sXG4gIC8vICAgICBoZWFkZXJzOiB7XG4gIC8vICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAvLyAgICAgfSxcbiAgLy8gICB9KS50aGVuKChyZXMpID0+IHtcbiAgLy8gICAgIHNldFNob3BMaXN0KHJlcy5kYXRhKTtcbiAgLy8gICAgIHJlcy5kYXRhLm1hcCgoc2hvcCkgPT4ge1xuICAvLyAgICAgICBpZiAoc2hvcC5yb2xlID09PSBcImFkbWluXCIpIHNldEFkZE5ld1Nob3AoZmFsc2UpO1xuICAvLyAgICAgICBwcm9wcy5hZGRzaG9wKHNob3ApO1xuICAvLyAgICAgfSk7XG4gIC8vICAgfSk7XG4gIC8vIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyICBzaGFkb3cgIGJnLWJvZHkgcm91bmRlZFwiPlxuICAgICAge2xvYWRpbmcgPyAoXG4gICAgICAgIDxMb2FkZXJcbiAgICAgICAgICB0eXBlPVwiVGhyZWVEb3RzXCJcbiAgICAgICAgICBjb2xvcj1cIiM4YTliYWVcIlxuICAgICAgICAgIGhlaWdodD17MTAwfVxuICAgICAgICAgIHdpZHRoPXsxMDB9XG4gICAgICAgICAgdmlzaWJsZT17bG9hZGluZ31cbiAgICAgICAgICBjbGFzc05hbWU9XCJsb2FkaW5nXCJcbiAgICAgICAgLz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxNZW51IHNob3BMaXN0PXtzaG9wTGlzdH0gYWRkTmV3U2hvcD17YWRkTmV3U2hvcH0gb25TZWxlY3Q9e29uU2VsZWN0fSAvPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuY29uc3QgTWFwU3RhdGV0b1Byb3BzID0gKHN0YXRlKSA9PiAoe1xuICB1c2VyOiBzdGF0ZS51c2VyLFxuICBzaG9wOiBzdGF0ZS5zaG9wLFxufSk7XG5cbmNvbnN0IE1hcERpc3BhdGNoVG9Qcm9wcyA9IHtcbiAgYWRkc2hvcDogYWRkc2hvcCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoTWFwU3RhdGV0b1Byb3BzLCBNYXBEaXNwYXRjaFRvUHJvcHMpKEhvbWUpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})