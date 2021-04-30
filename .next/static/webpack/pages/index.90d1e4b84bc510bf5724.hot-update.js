webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _redux_actions_shop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/actions/shop */ \"./redux/actions/shop.js\");\n/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-loader-spinner */ \"./node_modules/react-loader-spinner/dist/index.js\");\n/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_layout_Menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/layout/Menu */ \"./components/layout/Menu.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_Redirect__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Redirect */ \"./components/Redirect.js\");\n\n\nvar _jsxFileName = \"/Users/teerapat/Documents/project/ecommerce/client/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction Home(props) {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__[\"useRouter\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      shopList = _useState[0],\n      setShopList = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(true),\n      loading = _useState2[0],\n      setLoading = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(true),\n      addNewShop = _useState3[0],\n      setAddNewShop = _useState3[1];\n\n  var onSelect = function onSelect(shopId, shopName) {\n    router.push(\"/shop/manage/\".concat(shopName, \"/\").concat(shopId));\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    var time = setTimeout(function () {\n      alert(\"กรุณาเข้าสู่่ระบบก่อนใช้งาน\");\n      router.replace(\"/login\");\n    }, 3000);\n    clearTimeout(time);\n  }, []);\n\n  if (props.user.status && loading) {\n    axios__WEBPACK_IMPORTED_MODULE_1___default()({\n      url: \"http://localhost:8000/api/shop/getShop\",\n      method: \"post\",\n      data: {\n        id: props.user.id\n      },\n      headers: {\n        \"Content-Type\": \"application/json\"\n      }\n    }).then(function (res) {\n      setShopList(res.data);\n      res.data.map(function (shop) {\n        if (shop.role === \"admin\") setAddNewShop(false);\n        props.addshop(shop);\n        setLoading(false);\n      });\n    });\n  } // useEffect(() => {\n  //   if (!props.user.status) setLoad(!load);\n  //   axios({\n  //     url: `http://localhost:8000/api/shop/getShop`,\n  //     method: \"post\",\n  //     data: { id: props.user.id },\n  //     headers: {\n  //       \"Content-Type\": \"application/json\",\n  //     },\n  //   }).then((res) => {\n  //     setShopList(res.data);\n  //     res.data.map((shop) => {\n  //       if (shop.role === \"admin\") setAddNewShop(false);\n  //       props.addshop(shop);\n  //     });\n  //   });\n  // }, []);\n\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"container  shadow  bg-body rounded\",\n    children: loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_loader_spinner__WEBPACK_IMPORTED_MODULE_4___default.a, {\n      type: \"ThreeDots\",\n      color: \"#8a9bae\",\n      height: 100,\n      width: 100,\n      visible: loading,\n      className: \"loading\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 62,\n      columnNumber: 9\n    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_layout_Menu__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      shopList: shopList,\n      addNewShop: addNewShop,\n      onSelect: onSelect\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 9\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 60,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"iTPQ0NHs3PRaMAwqbPGsCbZ2upw=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_7__[\"useRouter\"]];\n});\n\n_c = Home;\n\nvar MapStatetoProps = function MapStatetoProps(state) {\n  return {\n    user: state.user,\n    shop: state.shop\n  };\n};\n\n_c2 = MapStatetoProps;\nvar MapDispatchToProps = {\n  addshop: _redux_actions_shop__WEBPACK_IMPORTED_MODULE_3__[\"addshop\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__[\"connect\"])(MapStatetoProps, MapDispatchToProps)(Home));\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Home\");\n$RefreshReg$(_c2, \"MapStatetoProps\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwicHJvcHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsInNob3BMaXN0Iiwic2V0U2hvcExpc3QiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImFkZE5ld1Nob3AiLCJzZXRBZGROZXdTaG9wIiwib25TZWxlY3QiLCJzaG9wSWQiLCJzaG9wTmFtZSIsInB1c2giLCJ1c2VFZmZlY3QiLCJ0aW1lIiwic2V0VGltZW91dCIsImFsZXJ0IiwicmVwbGFjZSIsImNsZWFyVGltZW91dCIsInVzZXIiLCJzdGF0dXMiLCJheGlvcyIsInVybCIsIm1ldGhvZCIsImRhdGEiLCJpZCIsImhlYWRlcnMiLCJ0aGVuIiwicmVzIiwibWFwIiwic2hvcCIsInJvbGUiLCJhZGRzaG9wIiwiTWFwU3RhdGV0b1Byb3BzIiwic3RhdGUiLCJNYXBEaXNwYXRjaFRvUHJvcHMiLCJjb25uZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBU0EsSUFBVCxDQUFjQyxLQUFkLEVBQXFCO0FBQUE7O0FBQ25CLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRG1CLGtCQUVhQyxzREFBUSxDQUFDLEVBQUQsQ0FGckI7QUFBQSxNQUVaQyxRQUZZO0FBQUEsTUFFRkMsV0FGRTs7QUFBQSxtQkFHV0Ysc0RBQVEsQ0FBQyxJQUFELENBSG5CO0FBQUEsTUFHWkcsT0FIWTtBQUFBLE1BR0hDLFVBSEc7O0FBQUEsbUJBSWlCSixzREFBUSxDQUFDLElBQUQsQ0FKekI7QUFBQSxNQUlaSyxVQUpZO0FBQUEsTUFJQUMsYUFKQTs7QUFLbkIsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsTUFBRCxFQUFTQyxRQUFULEVBQXNCO0FBQ3JDWCxVQUFNLENBQUNZLElBQVAsd0JBQTRCRCxRQUE1QixjQUF3Q0QsTUFBeEM7QUFDRCxHQUZEOztBQUdBRyx5REFBUyxDQUFDLFlBQU07QUFDZCxRQUFNQyxJQUFJLEdBQUdDLFVBQVUsQ0FBQyxZQUFNO0FBQzVCQyxXQUFLLENBQUMsNkJBQUQsQ0FBTDtBQUNBaEIsWUFBTSxDQUFDaUIsT0FBUCxDQUFlLFFBQWY7QUFDRCxLQUhzQixFQUdwQixJQUhvQixDQUF2QjtBQUlBQyxnQkFBWSxDQUFDSixJQUFELENBQVo7QUFDRCxHQU5RLEVBTU4sRUFOTSxDQUFUOztBQU9BLE1BQUlmLEtBQUssQ0FBQ29CLElBQU4sQ0FBV0MsTUFBWCxJQUFxQmYsT0FBekIsRUFBa0M7QUFDaENnQixnREFBSyxDQUFDO0FBQ0pDLFNBQUcsMENBREM7QUFFSkMsWUFBTSxFQUFFLE1BRko7QUFHSkMsVUFBSSxFQUFFO0FBQUVDLFVBQUUsRUFBRTFCLEtBQUssQ0FBQ29CLElBQU4sQ0FBV007QUFBakIsT0FIRjtBQUlKQyxhQUFPLEVBQUU7QUFDUCx3QkFBZ0I7QUFEVDtBQUpMLEtBQUQsQ0FBTCxDQU9HQyxJQVBILENBT1EsVUFBQ0MsR0FBRCxFQUFTO0FBQ2Z4QixpQkFBVyxDQUFDd0IsR0FBRyxDQUFDSixJQUFMLENBQVg7QUFDQUksU0FBRyxDQUFDSixJQUFKLENBQVNLLEdBQVQsQ0FBYSxVQUFDQyxJQUFELEVBQVU7QUFDckIsWUFBSUEsSUFBSSxDQUFDQyxJQUFMLEtBQWMsT0FBbEIsRUFBMkJ2QixhQUFhLENBQUMsS0FBRCxDQUFiO0FBQzNCVCxhQUFLLENBQUNpQyxPQUFOLENBQWNGLElBQWQ7QUFDQXhCLGtCQUFVLENBQUMsS0FBRCxDQUFWO0FBQ0QsT0FKRDtBQUtELEtBZEQ7QUFlRCxHQS9Ca0IsQ0FnQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBLHNCQUNFO0FBQUssYUFBUyxFQUFDLG9DQUFmO0FBQUEsY0FDR0QsT0FBTyxnQkFDTixxRUFBQywyREFBRDtBQUNFLFVBQUksRUFBQyxXQURQO0FBRUUsV0FBSyxFQUFDLFNBRlI7QUFHRSxZQUFNLEVBQUUsR0FIVjtBQUlFLFdBQUssRUFBRSxHQUpUO0FBS0UsYUFBTyxFQUFFQSxPQUxYO0FBTUUsZUFBUyxFQUFDO0FBTlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURNLGdCQVVOLHFFQUFDLCtEQUFEO0FBQU0sY0FBUSxFQUFFRixRQUFoQjtBQUEwQixnQkFBVSxFQUFFSSxVQUF0QztBQUFrRCxjQUFRLEVBQUVFO0FBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFYSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFnQkQ7O0dBbEVRWCxJO1VBQ1FHLHFEOzs7S0FEUkgsSTs7QUFvRVQsSUFBTW1DLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDbENmLFFBQUksRUFBRWUsS0FBSyxDQUFDZixJQURzQjtBQUVsQ1csUUFBSSxFQUFFSSxLQUFLLENBQUNKO0FBRnNCLEdBQVo7QUFBQSxDQUF4Qjs7TUFBTUcsZTtBQUtOLElBQU1FLGtCQUFrQixHQUFHO0FBQ3pCSCxTQUFPLEVBQUVBLDJEQUFPQTtBQURTLENBQTNCO0FBSWVJLDBIQUFPLENBQUNILGVBQUQsRUFBa0JFLGtCQUFsQixDQUFQLENBQTZDckMsSUFBN0MsQ0FBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgYWRkc2hvcCB9IGZyb20gXCIuLi9yZWR1eC9hY3Rpb25zL3Nob3BcIjtcbmltcG9ydCBMb2FkZXIgZnJvbSBcInJlYWN0LWxvYWRlci1zcGlubmVyXCI7XG5pbXBvcnQgTWVudSBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXQvTWVudVwiO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgUmVkaXJlY3QgZnJvbSBcIi4uL2NvbXBvbmVudHMvUmVkaXJlY3RcIjtcbmZ1bmN0aW9uIEhvbWUocHJvcHMpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFtzaG9wTGlzdCwgc2V0U2hvcExpc3RdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW2FkZE5ld1Nob3AsIHNldEFkZE5ld1Nob3BdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IG9uU2VsZWN0ID0gKHNob3BJZCwgc2hvcE5hbWUpID0+IHtcbiAgICByb3V0ZXIucHVzaChgL3Nob3AvbWFuYWdlLyR7c2hvcE5hbWV9LyR7c2hvcElkfWApO1xuICB9O1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IHRpbWUgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGFsZXJ0KFwi4LiB4Lij4Li44LiT4Liy4LmA4LiC4LmJ4Liy4Liq4Li54LmI4LmI4Lij4Liw4Lia4Lia4LiB4LmI4Lit4LiZ4LmD4LiK4LmJ4LiH4Liy4LiZXCIpO1xuICAgICAgcm91dGVyLnJlcGxhY2UoXCIvbG9naW5cIik7XG4gICAgfSwgMzAwMCk7XG4gICAgY2xlYXJUaW1lb3V0KHRpbWUpO1xuICB9LCBbXSk7XG4gIGlmIChwcm9wcy51c2VyLnN0YXR1cyAmJiBsb2FkaW5nKSB7XG4gICAgYXhpb3Moe1xuICAgICAgdXJsOiBgaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS9zaG9wL2dldFNob3BgLFxuICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgIGRhdGE6IHsgaWQ6IHByb3BzLnVzZXIuaWQgfSxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICB9LFxuICAgIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgc2V0U2hvcExpc3QocmVzLmRhdGEpO1xuICAgICAgcmVzLmRhdGEubWFwKChzaG9wKSA9PiB7XG4gICAgICAgIGlmIChzaG9wLnJvbGUgPT09IFwiYWRtaW5cIikgc2V0QWRkTmV3U2hvcChmYWxzZSk7XG4gICAgICAgIHByb3BzLmFkZHNob3Aoc2hvcCk7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBpZiAoIXByb3BzLnVzZXIuc3RhdHVzKSBzZXRMb2FkKCFsb2FkKTtcbiAgLy8gICBheGlvcyh7XG4gIC8vICAgICB1cmw6IGBodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3Nob3AvZ2V0U2hvcGAsXG4gIC8vICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAvLyAgICAgZGF0YTogeyBpZDogcHJvcHMudXNlci5pZCB9LFxuICAvLyAgICAgaGVhZGVyczoge1xuICAvLyAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgLy8gICAgIH0sXG4gIC8vICAgfSkudGhlbigocmVzKSA9PiB7XG4gIC8vICAgICBzZXRTaG9wTGlzdChyZXMuZGF0YSk7XG4gIC8vICAgICByZXMuZGF0YS5tYXAoKHNob3ApID0+IHtcbiAgLy8gICAgICAgaWYgKHNob3Aucm9sZSA9PT0gXCJhZG1pblwiKSBzZXRBZGROZXdTaG9wKGZhbHNlKTtcbiAgLy8gICAgICAgcHJvcHMuYWRkc2hvcChzaG9wKTtcbiAgLy8gICAgIH0pO1xuICAvLyAgIH0pO1xuICAvLyB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciAgc2hhZG93ICBiZy1ib2R5IHJvdW5kZWRcIj5cbiAgICAgIHtsb2FkaW5nID8gKFxuICAgICAgICA8TG9hZGVyXG4gICAgICAgICAgdHlwZT1cIlRocmVlRG90c1wiXG4gICAgICAgICAgY29sb3I9XCIjOGE5YmFlXCJcbiAgICAgICAgICBoZWlnaHQ9ezEwMH1cbiAgICAgICAgICB3aWR0aD17MTAwfVxuICAgICAgICAgIHZpc2libGU9e2xvYWRpbmd9XG4gICAgICAgICAgY2xhc3NOYW1lPVwibG9hZGluZ1wiXG4gICAgICAgIC8+XG4gICAgICApIDogKFxuICAgICAgICA8TWVudSBzaG9wTGlzdD17c2hvcExpc3R9IGFkZE5ld1Nob3A9e2FkZE5ld1Nob3B9IG9uU2VsZWN0PXtvblNlbGVjdH0gLz5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmNvbnN0IE1hcFN0YXRldG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcbiAgdXNlcjogc3RhdGUudXNlcixcbiAgc2hvcDogc3RhdGUuc2hvcCxcbn0pO1xuXG5jb25zdCBNYXBEaXNwYXRjaFRvUHJvcHMgPSB7XG4gIGFkZHNob3A6IGFkZHNob3AsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KE1hcFN0YXRldG9Qcm9wcywgTWFwRGlzcGF0Y2hUb1Byb3BzKShIb21lKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})