webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_layout_Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/layout/Menu */ \"./components/layout/Menu.js\");\n/* harmony import */ var _components_ui_Loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ui/Loading */ \"./components/ui/Loading.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jwt-decode */ \"./node_modules/jwt-decode/build/jwt-decode.esm.js\");\n\n\nvar _jsxFileName = \"/Users/teerapat/Documents/project/ecommerce/client/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Home(props) {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      shopList = _useState[0],\n      setShopList = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(),\n      token = _useState2[0],\n      setToken = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(true),\n      loading = _useState3[0],\n      setLoading = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(true),\n      addNewShop = _useState4[0],\n      setAddNewShop = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      time = _useState5[0],\n      setTime = _useState5[1];\n\n  var onSelect = function onSelect(shopId, shopName) {\n    router.push({\n      pathname: \"/shop/manage/\".concat(token, \"/\").concat(shopName, \"/\").concat(shopId)\n    }, undefined, {\n      scroll: false\n    });\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    setToken(localStorage.getItem(\"token\"));\n    var timeoutId = setTimeout(function () {\n      return setTime(!time);\n    }, 3000);\n    return function cleanup() {\n      clearTimeout(timeoutId);\n    };\n  }, []);\n\n  if (time) {\n    if (loading) {\n      alert(\"กรุณาเข้าสู่ระบบก่อนใช้งาน\");\n      router.replace(\"/login\");\n    }\n  }\n\n  if (token && loading) {\n    var decoded = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(token);\n    axios__WEBPACK_IMPORTED_MODULE_1___default()({\n      url: \"http://localhost:8000/api/shop/getShop\",\n      method: \"post\",\n      data: {\n        id: decoded.user.id\n      },\n      headers: {\n        \"Content-Type\": \"application/json\"\n      }\n    }).then(function (res) {\n      setShopList(res.data);\n      res.data.map(function (shop) {\n        if (shop.role === \"admin\") setAddNewShop(false);\n      });\n    });\n    setLoading(false);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"container\",\n    children: loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_ui_Loading__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      loading: loading\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 61,\n      columnNumber: 9\n    }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_layout_Menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      shopList: shopList,\n      addNewShop: addNewShop,\n      onSelect: onSelect,\n      token: token\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 63,\n      columnNumber: 9\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 59,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"OZamxB36qYySJqz4oycU27Mk918=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_5__[\"useRouter\"]];\n});\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwicHJvcHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsInNob3BMaXN0Iiwic2V0U2hvcExpc3QiLCJ0b2tlbiIsInNldFRva2VuIiwibG9hZGluZyIsInNldExvYWRpbmciLCJhZGROZXdTaG9wIiwic2V0QWRkTmV3U2hvcCIsInRpbWUiLCJzZXRUaW1lIiwib25TZWxlY3QiLCJzaG9wSWQiLCJzaG9wTmFtZSIsInB1c2giLCJwYXRobmFtZSIsInVuZGVmaW5lZCIsInNjcm9sbCIsInVzZUVmZmVjdCIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ0aW1lb3V0SWQiLCJzZXRUaW1lb3V0IiwiY2xlYW51cCIsImNsZWFyVGltZW91dCIsImFsZXJ0IiwicmVwbGFjZSIsImRlY29kZWQiLCJqd3RfZGVjb2RlIiwiYXhpb3MiLCJ1cmwiLCJtZXRob2QiLCJkYXRhIiwiaWQiLCJ1c2VyIiwiaGVhZGVycyIsInRoZW4iLCJyZXMiLCJtYXAiLCJzaG9wIiwicm9sZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsU0FBU0EsSUFBVCxDQUFjQyxLQUFkLEVBQXFCO0FBQUE7O0FBQ25CLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRG1CLGtCQUVhQyxzREFBUSxDQUFDLEVBQUQsQ0FGckI7QUFBQSxNQUVaQyxRQUZZO0FBQUEsTUFFRkMsV0FGRTs7QUFBQSxtQkFHT0Ysc0RBQVEsRUFIZjtBQUFBLE1BR1pHLEtBSFk7QUFBQSxNQUdMQyxRQUhLOztBQUFBLG1CQUlXSixzREFBUSxDQUFDLElBQUQsQ0FKbkI7QUFBQSxNQUlaSyxPQUpZO0FBQUEsTUFJSEMsVUFKRzs7QUFBQSxtQkFLaUJOLHNEQUFRLENBQUMsSUFBRCxDQUx6QjtBQUFBLE1BS1pPLFVBTFk7QUFBQSxNQUtBQyxhQUxBOztBQUFBLG1CQU1LUixzREFBUSxDQUFDLEtBQUQsQ0FOYjtBQUFBLE1BTVpTLElBTlk7QUFBQSxNQU1OQyxPQU5NOztBQVFuQixNQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxNQUFELEVBQVNDLFFBQVQsRUFBc0I7QUFDckNmLFVBQU0sQ0FBQ2dCLElBQVAsQ0FDRTtBQUFFQyxjQUFRLHlCQUFrQlosS0FBbEIsY0FBMkJVLFFBQTNCLGNBQXVDRCxNQUF2QztBQUFWLEtBREYsRUFFRUksU0FGRixFQUdFO0FBQ0VDLFlBQU0sRUFBRTtBQURWLEtBSEY7QUFPRCxHQVJEOztBQVVBQyx5REFBUyxDQUFDLFlBQU07QUFDZGQsWUFBUSxDQUFDZSxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsT0FBckIsQ0FBRCxDQUFSO0FBQ0EsUUFBTUMsU0FBUyxHQUFHQyxVQUFVLENBQUM7QUFBQSxhQUFNWixPQUFPLENBQUMsQ0FBQ0QsSUFBRixDQUFiO0FBQUEsS0FBRCxFQUF1QixJQUF2QixDQUE1QjtBQUNBLFdBQU8sU0FBU2MsT0FBVCxHQUFtQjtBQUN4QkMsa0JBQVksQ0FBQ0gsU0FBRCxDQUFaO0FBQ0QsS0FGRDtBQUdELEdBTlEsRUFNTixFQU5NLENBQVQ7O0FBUUEsTUFBSVosSUFBSixFQUFVO0FBQ1IsUUFBSUosT0FBSixFQUFhO0FBQ1hvQixXQUFLLENBQUMsNEJBQUQsQ0FBTDtBQUNBM0IsWUFBTSxDQUFDNEIsT0FBUCxDQUFlLFFBQWY7QUFDRDtBQUNGOztBQUVELE1BQUl2QixLQUFLLElBQUlFLE9BQWIsRUFBc0I7QUFDcEIsUUFBTXNCLE9BQU8sR0FBR0MsMERBQVUsQ0FBQ3pCLEtBQUQsQ0FBMUI7QUFDQTBCLGdEQUFLLENBQUM7QUFDSkMsU0FBRywwQ0FEQztBQUVKQyxZQUFNLEVBQUUsTUFGSjtBQUdKQyxVQUFJLEVBQUU7QUFBRUMsVUFBRSxFQUFFTixPQUFPLENBQUNPLElBQVIsQ0FBYUQ7QUFBbkIsT0FIRjtBQUlKRSxhQUFPLEVBQUU7QUFDUCx3QkFBZ0I7QUFEVDtBQUpMLEtBQUQsQ0FBTCxDQU9HQyxJQVBILENBT1EsVUFBQ0MsR0FBRCxFQUFTO0FBQ2ZuQyxpQkFBVyxDQUFDbUMsR0FBRyxDQUFDTCxJQUFMLENBQVg7QUFDQUssU0FBRyxDQUFDTCxJQUFKLENBQVNNLEdBQVQsQ0FBYSxVQUFDQyxJQUFELEVBQVU7QUFDckIsWUFBSUEsSUFBSSxDQUFDQyxJQUFMLEtBQWMsT0FBbEIsRUFBMkJoQyxhQUFhLENBQUMsS0FBRCxDQUFiO0FBQzVCLE9BRkQ7QUFHRCxLQVpEO0FBYUFGLGNBQVUsQ0FBQyxLQUFELENBQVY7QUFDRDs7QUFFRCxzQkFDRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUEsY0FDR0QsT0FBTyxnQkFDTixxRUFBQyw4REFBRDtBQUFTLGFBQU8sRUFBRUE7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURNLGdCQUdOLHFFQUFDLCtEQUFEO0FBQ0UsY0FBUSxFQUFFSixRQURaO0FBRUUsZ0JBQVUsRUFBRU0sVUFGZDtBQUdFLGNBQVEsRUFBRUksUUFIWjtBQUlFLFdBQUssRUFBRVI7QUFKVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSko7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBY0Q7O0dBakVRUCxJO1VBQ1FHLHFEOzs7S0FEUkgsSTtBQW1FTUEsbUVBQWYiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBNZW51IGZyb20gXCIuLi9jb21wb25lbnRzL2xheW91dC9NZW51XCI7XG5pbXBvcnQgTG9hZGluZyBmcm9tIFwiLi4vY29tcG9uZW50cy91aS9Mb2FkaW5nXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCBqd3RfZGVjb2RlIGZyb20gXCJqd3QtZGVjb2RlXCI7XG5mdW5jdGlvbiBIb21lKHByb3BzKSB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbc2hvcExpc3QsIHNldFNob3BMaXN0XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3Rva2VuLCBzZXRUb2tlbl0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW2FkZE5ld1Nob3AsIHNldEFkZE5ld1Nob3BdID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFt0aW1lLCBzZXRUaW1lXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBvblNlbGVjdCA9IChzaG9wSWQsIHNob3BOYW1lKSA9PiB7XG4gICAgcm91dGVyLnB1c2goXG4gICAgICB7IHBhdGhuYW1lOiBgL3Nob3AvbWFuYWdlLyR7dG9rZW59LyR7c2hvcE5hbWV9LyR7c2hvcElkfWAgfSxcbiAgICAgIHVuZGVmaW5lZCxcbiAgICAgIHtcbiAgICAgICAgc2Nyb2xsOiBmYWxzZSxcbiAgICAgIH1cbiAgICApO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0VG9rZW4obG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKSk7XG4gICAgY29uc3QgdGltZW91dElkID0gc2V0VGltZW91dCgoKSA9PiBzZXRUaW1lKCF0aW1lKSwgMzAwMCk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIGNsZWFudXAoKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dElkKTtcbiAgICB9O1xuICB9LCBbXSk7XG5cbiAgaWYgKHRpbWUpIHtcbiAgICBpZiAobG9hZGluZykge1xuICAgICAgYWxlcnQoXCLguIHguKPguLjguJPguLLguYDguILguYnguLLguKrguLnguYjguKPguLDguJrguJrguIHguYjguK3guJnguYPguIrguYnguIfguLLguJlcIik7XG4gICAgICByb3V0ZXIucmVwbGFjZShcIi9sb2dpblwiKTtcbiAgICB9XG4gIH1cblxuICBpZiAodG9rZW4gJiYgbG9hZGluZykge1xuICAgIGNvbnN0IGRlY29kZWQgPSBqd3RfZGVjb2RlKHRva2VuKTtcbiAgICBheGlvcyh7XG4gICAgICB1cmw6IGBodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3Nob3AvZ2V0U2hvcGAsXG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgZGF0YTogeyBpZDogZGVjb2RlZC51c2VyLmlkIH0sXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSxcbiAgICB9KS50aGVuKChyZXMpID0+IHtcbiAgICAgIHNldFNob3BMaXN0KHJlcy5kYXRhKTtcbiAgICAgIHJlcy5kYXRhLm1hcCgoc2hvcCkgPT4ge1xuICAgICAgICBpZiAoc2hvcC5yb2xlID09PSBcImFkbWluXCIpIHNldEFkZE5ld1Nob3AoZmFsc2UpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICB7bG9hZGluZyA/IChcbiAgICAgICAgPExvYWRpbmcgbG9hZGluZz17bG9hZGluZ30gLz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxNZW51XG4gICAgICAgICAgc2hvcExpc3Q9e3Nob3BMaXN0fVxuICAgICAgICAgIGFkZE5ld1Nob3A9e2FkZE5ld1Nob3B9XG4gICAgICAgICAgb25TZWxlY3Q9e29uU2VsZWN0fVxuICAgICAgICAgIHRva2VuPXt0b2tlbn1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})