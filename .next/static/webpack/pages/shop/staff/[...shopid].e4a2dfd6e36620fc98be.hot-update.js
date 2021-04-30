webpackHotUpdate_N_E("pages/shop/staff/[...shopid]",{

/***/ "./pages/shop/staff/[...shopid].js":
/*!*****************************************!*\
  !*** ./pages/shop/staff/[...shopid].js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_teerapat_Documents_project_ecommerce_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _staff_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./staff.module.css */ \"./pages/shop/staff/staff.module.css\");\n/* harmony import */ var _staff_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_staff_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _components_StaffList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/StaffList */ \"./components/StaffList.js\");\n/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-loader-spinner */ \"./node_modules/react-loader-spinner/dist/index.js\");\n/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n\n\n\nvar _jsxFileName = \"/Users/teerapat/Documents/project/ecommerce/client/pages/shop/staff/[...shopid].js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar staffManage = function staffManage(props) {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      user = _useState[0],\n      setUser = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      hireUser = _useState2[0],\n      setHireUser = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(true),\n      loading = _useState3[0],\n      setLoading = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      staffList = _useState4[0],\n      setStaffList = _useState4[1]; // useEffect(() => {\n  //   if (Object.keys(router.query).length > 0) {\n  //     console.log(\"yeah\");\n  //     axios({\n  //       url: `http://localhost:8000/api/user/getUsertoHire`,\n  //       method: \"post\",\n  //       data: { id: props.user.id, shopId: router.query.shopid[1] },\n  //       headers: {\n  //         \"Content-Type\": \"application/json\",\n  //       },\n  //     }).then((res) => {\n  //       console.log(res);\n  //       setUser(res.data.userList);\n  //       setHireUser(res.data.userList);\n  //       setStaffList(res.data.staffList);\n  //       console.log(user.length, staffList.length);\n  //     });\n  //   }\n  // }, [router.query]);\n\n\n  if (props.user.status && loading && Object.keys(router.query).length > 0) {\n    axios__WEBPACK_IMPORTED_MODULE_5___default()({\n      url: \"http://localhost:8000/api/user/getUsertoHire\",\n      method: \"post\",\n      data: {\n        id: props.user.id,\n        shopId: router.query.shopid[1]\n      },\n      headers: {\n        \"Content-Type\": \"application/json\"\n      }\n    }).then(function (res) {\n      console.log(res);\n      setUser(res.data.userList);\n      setHireUser(res.data.userList);\n      setStaffList(res.data.staffList);\n      setLoading(false);\n    });\n  }\n\n  var Hire = function Hire(userId) {\n    axios__WEBPACK_IMPORTED_MODULE_5___default()({\n      url: \"http://localhost:8000/api/user/hireStaff\",\n      method: \"post\",\n      data: {\n        userId: userId,\n        shopId: router.query.shopid[1],\n        shopName: router.query.shopid[0]\n      },\n      headers: {\n        \"Content-Type\": \"application/json\"\n      }\n    }).then(function (res) {\n      setUser(user.filter(function (USER) {\n        return USER.id !== userId;\n      }));\n      setStaffList([].concat(Object(_Users_teerapat_Documents_project_ecommerce_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(staffList), [userId])); // router.back()\n    });\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"container container  shadow  bg-body rounded\",\n    children: !loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _staff_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.container__staff,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _staff_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.block__staff,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _staff_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.title__staff,\n          children: \"\\u0E23\\u0E32\\u0E22\\u0E0A\\u0E37\\u0E48\\u0E2D\\u0E02\\u0E2D\\u0E07\\u0E1C\\u0E39\\u0E49\\u0E43\\u0E0A\\u0E49\\u0E07\\u0E32\\u0E19\\u0E17\\u0E35\\u0E48\\u0E2A\\u0E32\\u0E21\\u0E32\\u0E23\\u0E16\\u0E40\\u0E25\\u0E37\\u0E2D\\u0E01\\u0E44\\u0E14\\u0E49\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 76,\n          columnNumber: 13\n        }, _this), hireUser.length === staffList.length ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _staff_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.missing_staff,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            src: \"/missing.png\",\n            width: 150,\n            height: 150\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 81,\n            columnNumber: 17\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n            children: \"\\u0E22\\u0E31\\u0E07\\u0E44\\u0E21\\u0E48\\u0E21\\u0E35\\u0E1C\\u0E39\\u0E49\\u0E43\\u0E0A\\u0E49\\u0E07\\u0E32\\u0E19\\u0E43\\u0E2B\\u0E49\\u0E40\\u0E25\\u0E37\\u0E2D\\u0E01\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 82,\n            columnNumber: 17\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 80,\n          columnNumber: 15\n        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          children: user.map(function (USER) {\n            if (staffList.includes(USER.id)) {\n              return;\n            }\n\n            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: _staff_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.content__staff,\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                children: USER.name\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 92,\n                columnNumber: 23\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_bs__WEBPACK_IMPORTED_MODULE_9__[\"BsPersonPlusFill\"], {\n                size: \"40px\",\n                className: _staff_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.button__staff,\n                onClick: function onClick() {\n                  Hire(USER.id);\n                }\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 93,\n                columnNumber: 23\n              }, _this)]\n            }, USER.id, true, {\n              fileName: _jsxFileName,\n              lineNumber: 91,\n              columnNumber: 21\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 85,\n          columnNumber: 15\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 75,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_StaffList__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        staffList: staffList,\n        hireUser: hireUser\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 106,\n        columnNumber: 11\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 9\n    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_loader_spinner__WEBPACK_IMPORTED_MODULE_8___default.a, {\n      type: \"ThreeDots\",\n      color: \"#8a9bae\",\n      height: 100,\n      width: 100,\n      visible: loading,\n      className: \"loading\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 109,\n      columnNumber: 9\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 72,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(staffManage, \"PT7MP2W+tG5dnyHFIGeGFJbrUoY=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"]];\n});\n\nvar MapStateToProps = function MapStateToProps(state) {\n  return {\n    user: state.user\n  };\n};\n\n_c = MapStateToProps;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__[\"connect\"])(MapStateToProps)(staffManage));\n\nvar _c;\n\n$RefreshReg$(_c, \"MapStateToProps\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2hvcC9zdGFmZi9bLi4uc2hvcGlkXS5qcz9lYzUxIl0sIm5hbWVzIjpbInN0YWZmTWFuYWdlIiwicHJvcHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsInVzZXIiLCJzZXRVc2VyIiwiaGlyZVVzZXIiLCJzZXRIaXJlVXNlciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic3RhZmZMaXN0Iiwic2V0U3RhZmZMaXN0Iiwic3RhdHVzIiwiT2JqZWN0Iiwia2V5cyIsInF1ZXJ5IiwibGVuZ3RoIiwiYXhpb3MiLCJ1cmwiLCJtZXRob2QiLCJkYXRhIiwiaWQiLCJzaG9wSWQiLCJzaG9waWQiLCJoZWFkZXJzIiwidGhlbiIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJ1c2VyTGlzdCIsIkhpcmUiLCJ1c2VySWQiLCJzaG9wTmFtZSIsImZpbHRlciIsIlVTRVIiLCJjbGFzc2VzIiwiY29udGFpbmVyX19zdGFmZiIsImJsb2NrX19zdGFmZiIsInRpdGxlX19zdGFmZiIsIm1pc3Npbmdfc3RhZmYiLCJtYXAiLCJpbmNsdWRlcyIsImNvbnRlbnRfX3N0YWZmIiwibmFtZSIsImJ1dHRvbl9fc3RhZmYiLCJNYXBTdGF0ZVRvUHJvcHMiLCJzdGF0ZSIsImNvbm5lY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQzdCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRDZCLGtCQUVMQyxzREFBUSxDQUFDLEVBQUQsQ0FGSDtBQUFBLE1BRXRCQyxJQUZzQjtBQUFBLE1BRWhCQyxPQUZnQjs7QUFBQSxtQkFHR0Ysc0RBQVEsQ0FBQyxFQUFELENBSFg7QUFBQSxNQUd0QkcsUUFIc0I7QUFBQSxNQUdaQyxXQUhZOztB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O0FBQUE7QUFBQTtBQXJDSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFpREQsQ0EvR0Q7O0dBQU1ULFc7VUFDV0cscUQ7OztBQWdIakIsSUFBTTJDLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsQ0FBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDbEMxQyxRQUFJLEVBQUUwQyxLQUFLLENBQUMxQztBQURzQixHQUFaO0FBQUEsQ0FBeEI7O0tBQU15QyxlO0FBR1NFLDBIQUFPLENBQUNGLGVBQUQsQ0FBUCxDQUF5QjlDLFdBQXpCLENBQWYiLCJmaWxlIjoiLi9wYWdlcy9zaG9wL3N0YWZmL1suLi5zaG9waWRdLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9zdGFmZi5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgU3RhZmZMaXN0IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL1N0YWZmTGlzdFwiO1xuaW1wb3J0IExvYWRlciBmcm9tIFwicmVhY3QtbG9hZGVyLXNwaW5uZXJcIjtcbmltcG9ydCB7IEJzUGVyc29uUGx1c0ZpbGwgfSBmcm9tIFwicmVhY3QtaWNvbnMvYnNcIjtcbmNvbnN0IHN0YWZmTWFuYWdlID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtoaXJlVXNlciwgc2V0SGlyZVVzZXJdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW3N0YWZmTGlzdCwgc2V0U3RhZmZMaXN0XSA9IHVzZVN0YXRlKFtdKTtcblxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xuICAvLyAgIGlmIChPYmplY3Qua2V5cyhyb3V0ZXIucXVlcnkpLmxlbmd0aCA+IDApIHtcbiAgLy8gICAgIGNvbnNvbGUubG9nKFwieWVhaFwiKTtcbiAgLy8gICAgIGF4aW9zKHtcbiAgLy8gICAgICAgdXJsOiBgaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS91c2VyL2dldFVzZXJ0b0hpcmVgLFxuICAvLyAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAvLyAgICAgICBkYXRhOiB7IGlkOiBwcm9wcy51c2VyLmlkLCBzaG9wSWQ6IHJvdXRlci5xdWVyeS5zaG9waWRbMV0gfSxcbiAgLy8gICAgICAgaGVhZGVyczoge1xuICAvLyAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAvLyAgICAgICB9LFxuICAvLyAgICAgfSkudGhlbigocmVzKSA9PiB7XG4gIC8vICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gIC8vICAgICAgIHNldFVzZXIocmVzLmRhdGEudXNlckxpc3QpO1xuICAvLyAgICAgICBzZXRIaXJlVXNlcihyZXMuZGF0YS51c2VyTGlzdCk7XG4gIC8vICAgICAgIHNldFN0YWZmTGlzdChyZXMuZGF0YS5zdGFmZkxpc3QpO1xuICAvLyAgICAgICBjb25zb2xlLmxvZyh1c2VyLmxlbmd0aCwgc3RhZmZMaXN0Lmxlbmd0aCk7XG4gIC8vICAgICB9KTtcbiAgLy8gICB9XG4gIC8vIH0sIFtyb3V0ZXIucXVlcnldKTtcbiAgaWYgKHByb3BzLnVzZXIuc3RhdHVzICYmIGxvYWRpbmcgJiYgT2JqZWN0LmtleXMocm91dGVyLnF1ZXJ5KS5sZW5ndGggPiAwKSB7XG4gICAgYXhpb3Moe1xuICAgICAgdXJsOiBgaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS91c2VyL2dldFVzZXJ0b0hpcmVgLFxuICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgIGRhdGE6IHsgaWQ6IHByb3BzLnVzZXIuaWQsIHNob3BJZDogcm91dGVyLnF1ZXJ5LnNob3BpZFsxXSB9LFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgc2V0VXNlcihyZXMuZGF0YS51c2VyTGlzdCk7XG4gICAgICBzZXRIaXJlVXNlcihyZXMuZGF0YS51c2VyTGlzdCk7XG4gICAgICBzZXRTdGFmZkxpc3QocmVzLmRhdGEuc3RhZmZMaXN0KTtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgSGlyZSA9ICh1c2VySWQpID0+IHtcbiAgICBheGlvcyh7XG4gICAgICB1cmw6IGBodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3VzZXIvaGlyZVN0YWZmYCxcbiAgICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHVzZXJJZDogdXNlcklkLFxuICAgICAgICBzaG9wSWQ6IHJvdXRlci5xdWVyeS5zaG9waWRbMV0sXG4gICAgICAgIHNob3BOYW1lOiByb3V0ZXIucXVlcnkuc2hvcGlkWzBdLFxuICAgICAgfSxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICB9LFxuICAgIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgc2V0VXNlcih1c2VyLmZpbHRlcigoVVNFUikgPT4gVVNFUi5pZCAhPT0gdXNlcklkKSk7XG4gICAgICBzZXRTdGFmZkxpc3QoWy4uLnN0YWZmTGlzdCwgdXNlcklkXSk7XG4gICAgICAvLyByb3V0ZXIuYmFjaygpXG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjb250YWluZXIgIHNoYWRvdyAgYmctYm9keSByb3VuZGVkXCI+XG4gICAgICB7IWxvYWRpbmcgPyAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcl9fc3RhZmZ9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJsb2NrX19zdGFmZn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZV9fc3RhZmZ9PlxuICAgICAgICAgICAgICDguKPguLLguKLguIrguLfguYjguK3guILguK3guIfguJzguLnguYnguYPguIrguYnguIfguLLguJnguJfguLXguYjguKrguLLguKHguLLguKPguJbguYDguKXguLfguK3guIHguYTguJTguYlcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge2hpcmVVc2VyLmxlbmd0aCA9PT0gc3RhZmZMaXN0Lmxlbmd0aCA/IChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubWlzc2luZ19zdGFmZn0+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvbWlzc2luZy5wbmdcIiB3aWR0aD17MTUwfSBoZWlnaHQ9ezE1MH0gLz5cbiAgICAgICAgICAgICAgICA8c3Bhbj7guKLguLHguIfguYTguKHguYjguKHguLXguJzguLnguYnguYPguIrguYnguIfguLLguJnguYPguKvguYnguYDguKXguLfguK3guIE8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7dXNlci5tYXAoKFVTRVIpID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmIChzdGFmZkxpc3QuaW5jbHVkZXMoVVNFUi5pZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e1VTRVIuaWR9IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50X19zdGFmZn0+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj57VVNFUi5uYW1lfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxCc1BlcnNvblBsdXNGaWxsXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwiNDBweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9uX19zdGFmZn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgSGlyZShVU0VSLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPFN0YWZmTGlzdCBzdGFmZkxpc3Q9e3N0YWZmTGlzdH0gaGlyZVVzZXI9e2hpcmVVc2VyfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxMb2FkZXJcbiAgICAgICAgICB0eXBlPVwiVGhyZWVEb3RzXCJcbiAgICAgICAgICBjb2xvcj1cIiM4YTliYWVcIlxuICAgICAgICAgIGhlaWdodD17MTAwfVxuICAgICAgICAgIHdpZHRoPXsxMDB9XG4gICAgICAgICAgdmlzaWJsZT17bG9hZGluZ31cbiAgICAgICAgICBjbGFzc05hbWU9XCJsb2FkaW5nXCJcbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBNYXBTdGF0ZVRvUHJvcHMgPSAoc3RhdGUpID0+ICh7XG4gIHVzZXI6IHN0YXRlLnVzZXIsXG59KTtcbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoTWFwU3RhdGVUb1Byb3BzKShzdGFmZk1hbmFnZSk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/shop/staff/[...shopid].js\n");

/***/ })

})