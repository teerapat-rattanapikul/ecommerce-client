webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _redux_actions_shop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/actions/shop */ \"./redux/actions/shop.js\");\n/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-loader-spinner */ \"./node_modules/react-loader-spinner/dist/index.js\");\n/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_layout_Menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/layout/Menu */ \"./components/layout/Menu.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n\n\nvar _jsxFileName = \"/Users/teerapat/Documents/project/ecommerce/client/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nfunction Home(props) {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_7__[\"useRouter\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      shopList = _useState[0],\n      setShopList = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(true),\n      load = _useState2[0],\n      setLoad = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(true),\n      addNewShop = _useState3[0],\n      setAddNewShop = _useState3[1];\n\n  var onSelect = function onSelect(shopId, shopName) {\n    router.push(\"/shop/manage/\".concat(shopName, \"/\").concat(shopId));\n  };\n\n  if (props.user.status && load) {\n    axios__WEBPACK_IMPORTED_MODULE_1___default()({\n      url: \"http://localhost:8000/api/shop/getShop\",\n      method: \"post\",\n      data: {\n        id: props.user.id\n      },\n      headers: {\n        \"Content-Type\": \"application/json\"\n      }\n    }).then(function (res) {\n      setShopList(res.data);\n      res.data.map(function (shop) {\n        if (shop.role === \"admin\") setAddNewShop(false);\n        props.addshop(shop);\n        setLoad(false);\n      });\n    });\n  } // useEffect(() => {\n  //   if (!props.user.status) setLoad(!load);\n  //   axios({\n  //     url: `http://localhost:8000/api/shop/getShop`,\n  //     method: \"post\",\n  //     data: { id: props.user.id },\n  //     headers: {\n  //       \"Content-Type\": \"application/json\",\n  //     },\n  //   }).then((res) => {\n  //     setShopList(res.data);\n  //     res.data.map((shop) => {\n  //       if (shop.role === \"admin\") setAddNewShop(false);\n  //       props.addshop(shop);\n  //     });\n  //   });\n  // }, []);\n\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"container  shadow  bg-body rounded\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_loader_spinner__WEBPACK_IMPORTED_MODULE_4___default.a, {\n      type: \"ThreeDots\",\n      color: \"#00BFFF\",\n      height: 100,\n      width: 100,\n      visible: true\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_layout_Menu__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      shopList: shopList,\n      addNewShop: addNewShop,\n      onSelect: onSelect\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 60,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 52,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"sqB8Z6zg42ejcLJUtUwzZlvuQJ4=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_7__[\"useRouter\"]];\n});\n\n_c = Home;\n\nvar MapStatetoProps = function MapStatetoProps(state) {\n  return {\n    user: state.user,\n    shop: state.shop\n  };\n};\n\n_c2 = MapStatetoProps;\nvar MapDispatchToProps = {\n  addshop: _redux_actions_shop__WEBPACK_IMPORTED_MODULE_3__[\"addshop\"]\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__[\"connect\"])(MapStatetoProps, MapDispatchToProps)(Home));\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Home\");\n$RefreshReg$(_c2, \"MapStatetoProps\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwicHJvcHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsInNob3BMaXN0Iiwic2V0U2hvcExpc3QiLCJsb2FkIiwic2V0TG9hZCIsImFkZE5ld1Nob3AiLCJzZXRBZGROZXdTaG9wIiwib25TZWxlY3QiLCJzaG9wSWQiLCJzaG9wTmFtZSIsInB1c2giLCJ1c2VyIiwic3RhdHVzIiwiYXhpb3MiLCJ1cmwiLCJtZXRob2QiLCJkYXRhIiwiaWQiLCJoZWFkZXJzIiwidGhlbiIsInJlcyIsIm1hcCIsInNob3AiLCJyb2xlIiwiYWRkc2hvcCIsIk1hcFN0YXRldG9Qcm9wcyIsInN0YXRlIiwiTWFwRGlzcGF0Y2hUb1Byb3BzIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQVNBLElBQVQsQ0FBY0MsS0FBZCxFQUFxQjtBQUFBOztBQUNuQixNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQURtQixrQkFFYUMsc0RBQVEsQ0FBQyxFQUFELENBRnJCO0FBQUEsTUFFWkMsUUFGWTtBQUFBLE1BRUZDLFdBRkU7O0FBQUEsbUJBR0tGLHNEQUFRLENBQUMsSUFBRCxDQUhiO0FBQUEsTUFHWkcsSUFIWTtBQUFBLE1BR05DLE9BSE07O0FBQUEsbUJBSWlCSixzREFBUSxDQUFDLElBQUQsQ0FKekI7QUFBQSxNQUlaSyxVQUpZO0FBQUEsTUFJQUMsYUFKQTs7QUFLbkIsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsTUFBRCxFQUFTQyxRQUFULEVBQXNCO0FBQ3JDWCxVQUFNLENBQUNZLElBQVAsd0JBQTRCRCxRQUE1QixjQUF3Q0QsTUFBeEM7QUFDRCxHQUZEOztBQUdBLE1BQUlYLEtBQUssQ0FBQ2MsSUFBTixDQUFXQyxNQUFYLElBQXFCVCxJQUF6QixFQUErQjtBQUM3QlUsZ0RBQUssQ0FBQztBQUNKQyxTQUFHLDBDQURDO0FBRUpDLFlBQU0sRUFBRSxNQUZKO0FBR0pDLFVBQUksRUFBRTtBQUFFQyxVQUFFLEVBQUVwQixLQUFLLENBQUNjLElBQU4sQ0FBV007QUFBakIsT0FIRjtBQUlKQyxhQUFPLEVBQUU7QUFDUCx3QkFBZ0I7QUFEVDtBQUpMLEtBQUQsQ0FBTCxDQU9HQyxJQVBILENBT1EsVUFBQ0MsR0FBRCxFQUFTO0FBQ2ZsQixpQkFBVyxDQUFDa0IsR0FBRyxDQUFDSixJQUFMLENBQVg7QUFDQUksU0FBRyxDQUFDSixJQUFKLENBQVNLLEdBQVQsQ0FBYSxVQUFDQyxJQUFELEVBQVU7QUFDckIsWUFBSUEsSUFBSSxDQUFDQyxJQUFMLEtBQWMsT0FBbEIsRUFBMkJqQixhQUFhLENBQUMsS0FBRCxDQUFiO0FBQzNCVCxhQUFLLENBQUMyQixPQUFOLENBQWNGLElBQWQ7QUFDQWxCLGVBQU8sQ0FBQyxLQUFELENBQVA7QUFDRCxPQUpEO0FBS0QsS0FkRDtBQWVELEdBeEJrQixDQXlCbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUMsb0NBQWY7QUFBQSw0QkFDRSxxRUFBQywyREFBRDtBQUNFLFVBQUksRUFBQyxXQURQO0FBRUUsV0FBSyxFQUFDLFNBRlI7QUFHRSxZQUFNLEVBQUUsR0FIVjtBQUlFLFdBQUssRUFBRSxHQUpUO0FBS0UsYUFBTyxFQUFFO0FBTFg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLGVBUUUscUVBQUMsK0RBQUQ7QUFBTSxjQUFRLEVBQUVILFFBQWhCO0FBQTBCLGdCQUFVLEVBQUVJLFVBQXRDO0FBQWtELGNBQVEsRUFBRUU7QUFBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBWUQ7O0dBdkRRWCxJO1VBQ1FHLHFEOzs7S0FEUkgsSTs7QUF5RFQsSUFBTTZCLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDbENmLFFBQUksRUFBRWUsS0FBSyxDQUFDZixJQURzQjtBQUVsQ1csUUFBSSxFQUFFSSxLQUFLLENBQUNKO0FBRnNCLEdBQVo7QUFBQSxDQUF4Qjs7TUFBTUcsZTtBQUtOLElBQU1FLGtCQUFrQixHQUFHO0FBQ3pCSCxTQUFPLEVBQUVBLDJEQUFPQTtBQURTLENBQTNCO0FBSWVJLDBIQUFPLENBQUNILGVBQUQsRUFBa0JFLGtCQUFsQixDQUFQLENBQTZDL0IsSUFBN0MsQ0FBZiIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgYWRkc2hvcCB9IGZyb20gXCIuLi9yZWR1eC9hY3Rpb25zL3Nob3BcIjtcbmltcG9ydCBMb2FkZXIgZnJvbSBcInJlYWN0LWxvYWRlci1zcGlubmVyXCI7XG5pbXBvcnQgTWVudSBmcm9tIFwiLi4vY29tcG9uZW50cy9sYXlvdXQvTWVudVwiO1xuaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5mdW5jdGlvbiBIb21lKHByb3BzKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbc2hvcExpc3QsIHNldFNob3BMaXN0XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2xvYWQsIHNldExvYWRdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFthZGROZXdTaG9wLCBzZXRBZGROZXdTaG9wXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBvblNlbGVjdCA9IChzaG9wSWQsIHNob3BOYW1lKSA9PiB7XG4gICAgcm91dGVyLnB1c2goYC9zaG9wL21hbmFnZS8ke3Nob3BOYW1lfS8ke3Nob3BJZH1gKTtcbiAgfTtcbiAgaWYgKHByb3BzLnVzZXIuc3RhdHVzICYmIGxvYWQpIHtcbiAgICBheGlvcyh7XG4gICAgICB1cmw6IGBodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3Nob3AvZ2V0U2hvcGAsXG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgZGF0YTogeyBpZDogcHJvcHMudXNlci5pZCB9LFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgICBzZXRTaG9wTGlzdChyZXMuZGF0YSk7XG4gICAgICByZXMuZGF0YS5tYXAoKHNob3ApID0+IHtcbiAgICAgICAgaWYgKHNob3Aucm9sZSA9PT0gXCJhZG1pblwiKSBzZXRBZGROZXdTaG9wKGZhbHNlKTtcbiAgICAgICAgcHJvcHMuYWRkc2hvcChzaG9wKTtcbiAgICAgICAgc2V0TG9hZChmYWxzZSk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGlmICghcHJvcHMudXNlci5zdGF0dXMpIHNldExvYWQoIWxvYWQpO1xuICAvLyAgIGF4aW9zKHtcbiAgLy8gICAgIHVybDogYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvc2hvcC9nZXRTaG9wYCxcbiAgLy8gICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gIC8vICAgICBkYXRhOiB7IGlkOiBwcm9wcy51c2VyLmlkIH0sXG4gIC8vICAgICBoZWFkZXJzOiB7XG4gIC8vICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAvLyAgICAgfSxcbiAgLy8gICB9KS50aGVuKChyZXMpID0+IHtcbiAgLy8gICAgIHNldFNob3BMaXN0KHJlcy5kYXRhKTtcbiAgLy8gICAgIHJlcy5kYXRhLm1hcCgoc2hvcCkgPT4ge1xuICAvLyAgICAgICBpZiAoc2hvcC5yb2xlID09PSBcImFkbWluXCIpIHNldEFkZE5ld1Nob3AoZmFsc2UpO1xuICAvLyAgICAgICBwcm9wcy5hZGRzaG9wKHNob3ApO1xuICAvLyAgICAgfSk7XG4gIC8vICAgfSk7XG4gIC8vIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyICBzaGFkb3cgIGJnLWJvZHkgcm91bmRlZFwiPlxuICAgICAgPExvYWRlclxuICAgICAgICB0eXBlPVwiVGhyZWVEb3RzXCJcbiAgICAgICAgY29sb3I9XCIjMDBCRkZGXCJcbiAgICAgICAgaGVpZ2h0PXsxMDB9XG4gICAgICAgIHdpZHRoPXsxMDB9XG4gICAgICAgIHZpc2libGU9e3RydWV9XG4gICAgICAvPlxuICAgICAgPE1lbnUgc2hvcExpc3Q9e3Nob3BMaXN0fSBhZGROZXdTaG9wPXthZGROZXdTaG9wfSBvblNlbGVjdD17b25TZWxlY3R9IC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmNvbnN0IE1hcFN0YXRldG9Qcm9wcyA9IChzdGF0ZSkgPT4gKHtcbiAgdXNlcjogc3RhdGUudXNlcixcbiAgc2hvcDogc3RhdGUuc2hvcCxcbn0pO1xuXG5jb25zdCBNYXBEaXNwYXRjaFRvUHJvcHMgPSB7XG4gIGFkZHNob3A6IGFkZHNob3AsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KE1hcFN0YXRldG9Qcm9wcywgTWFwRGlzcGF0Y2hUb1Byb3BzKShIb21lKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})