webpackHotUpdate_N_E("pages/shop/staff/[...shopid]",{

/***/ "./pages/shop/staff/[...shopid].js":
/*!*****************************************!*\
  !*** ./pages/shop/staff/[...shopid].js ***!
  \*****************************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_teerapat_Documents_project_ecommerce_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _staff_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./staff.module.css */ \"./pages/shop/staff/staff.module.css\");\n/* harmony import */ var _staff_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_staff_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_StaffList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/StaffList */ \"./components/StaffList.js\");\n/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-loader-spinner */ \"./node_modules/react-loader-spinner/dist/index.js\");\n/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jwt-decode */ \"./node_modules/jwt-decode/build/jwt-decode.esm.js\");\n/* harmony import */ var _manage_shopid_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../manage/shopid.module.css */ \"./pages/shop/manage/shopid.module.css\");\n/* harmony import */ var _manage_shopid_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_manage_shopid_module_css__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\nvar _jsxFileName = \"/Users/teerapat/Documents/project/ecommerce/client/pages/shop/staff/[...shopid].js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nvar staffManage = function staffManage(props) {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      user = _useState[0],\n      setUser = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      hireUser = _useState2[0],\n      setHireUser = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(true),\n      loading = _useState3[0],\n      setLoading = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      staffList = _useState4[0],\n      setStaffList = _useState4[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    try {\n      var decoded = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(localStorage.getItem(\"token\"));\n\n      if (decoded.user.id !== props.data.merchant) {\n        alert(\"คุณไม่มีสิทธิ๋ในการเข้าถึง\");\n        router.replace(\"/login\");\n      } else {\n        setUser(props.data.userList);\n        setHireUser(props.data.userList);\n        setStaffList(props.data.staffList);\n        setLoading(false);\n      }\n    } catch (error) {\n      if (error) {\n        alert(\"คุณไม่มีสิทธิ๋ในการเข้าถึง\");\n        router.replace(\"/login\");\n      }\n    }\n  }, []); // if (shopid && loading) {\n  //   const decoded = jwt_decode(shopid[0]);\n  //   const validToken = localStorage.getItem(\"token\");\n  //   if (validToken !== shopid[0]) {\n  //     alert(\"คุณไม่มีสิทธิ๋ในการเข้าถึง\");\n  //     router.replace(\"/login\");\n  //   }\n  //   axios({\n  //     url: `http://localhost:8000/api/user/getUsertoHire`,\n  //     method: \"post\",\n  //     data: { userId: decoded.user.id, shopId: shopid[2] },\n  //     headers: {\n  //       \"Content-Type\": \"application/json\",\n  //     },\n  //   }).then((res) => {\n  //     if (!res.data) {\n  //       alert(\"คุณไม่มีสิทธิ์ในการเข้าถึงข้อมูล\");\n  //       router.replace(\"/login\");\n  //     } else {\n  // setUser(res.data.userList);\n  // setHireUser(res.data.userList);\n  // setStaffList(res.data.staffList);\n  //       setLoading(false);\n  //     }\n  //   });\n  // }\n\n  var Hire = function Hire(userId) {\n    axios__WEBPACK_IMPORTED_MODULE_5___default()({\n      url: \"http://localhost:8000/api/user/hireStaff\",\n      method: \"post\",\n      data: {\n        userId: userId,\n        shopId: router.query.shopid[2],\n        shopName: router.query.shopid[1]\n      },\n      headers: {\n        \"Content-Type\": \"application/json\"\n      }\n    }).then(function (res) {\n      setUser(user.filter(function (USER) {\n        return USER.id !== userId;\n      }));\n      setStaffList([].concat(Object(_Users_teerapat_Documents_project_ecommerce_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(staffList), [userId]));\n    });\n  };\n\n  var unHire = function unHire(userId, userName) {\n    // axios({\n    //   url: `http://localhost:8000/api/user/unHireStaff`,\n    //   method: \"post\",\n    //   data: {\n    //     userId: userId,\n    //     shopId: router.query.shopid[2],\n    //   },\n    //   headers: {\n    //     \"Content-Type\": \"application/json\",\n    //   },\n    // }).then((res) => {\n    //   setUser()\n    //   setStaffList(staffList.filter((staff) => staff.id !== userId));\n    // });\n    setUser([].concat(Object(_Users_teerapat_Documents_project_ecommerce_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(user), [{\n      id: userId,\n      name: userName\n    }]));\n    setStaffList(staffList.filter(function (staff) {\n      return staff.id !== userId;\n    }));\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"container\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n      className: _manage_shopid_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.back,\n      onClick: function onClick() {\n        router.back();\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h4\", {\n        children: \"< ย้อนกลับ\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 108,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 102,\n      columnNumber: 7\n    }, _this), !loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _staff_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.container__staff,\n      children: [console.log(user, staffList), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _staff_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.block__staff,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _staff_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.title__staff,\n          children: \"\\u0E23\\u0E32\\u0E22\\u0E0A\\u0E37\\u0E48\\u0E2D\\u0E02\\u0E2D\\u0E07\\u0E1C\\u0E39\\u0E49\\u0E43\\u0E0A\\u0E49\\u0E07\\u0E32\\u0E19\\u0E17\\u0E35\\u0E48\\u0E2A\\u0E32\\u0E21\\u0E32\\u0E23\\u0E16\\u0E40\\u0E25\\u0E37\\u0E2D\\u0E01\\u0E44\\u0E14\\u0E49\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 114,\n          columnNumber: 13\n        }, _this), hireUser.length === staffList.length ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _staff_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.missing_staff,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            src: \"/missing.png\",\n            width: 150,\n            height: 150\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 119,\n            columnNumber: 17\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n            children: \"\\u0E22\\u0E31\\u0E07\\u0E44\\u0E21\\u0E48\\u0E21\\u0E35\\u0E1C\\u0E39\\u0E49\\u0E43\\u0E0A\\u0E49\\u0E07\\u0E32\\u0E19\\u0E43\\u0E2B\\u0E49\\u0E40\\u0E25\\u0E37\\u0E2D\\u0E01\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 120,\n            columnNumber: 17\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 118,\n          columnNumber: 15\n        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          children: user.map(function (USER) {\n            if (staffList.includes(USER.id)) {\n              return;\n            }\n\n            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: _staff_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.content__staff,\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                children: USER.name\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 130,\n                columnNumber: 23\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_bs__WEBPACK_IMPORTED_MODULE_8__[\"BsPersonPlusFill\"], {\n                size: \"40px\",\n                className: _staff_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.button__staff,\n                onClick: function onClick() {\n                  if (window.confirm(\"\\u0E15\\u0E49\\u0E2D\\u0E07\\u0E01\\u0E32\\u0E23\\u0E08\\u0E49\\u0E32\\u0E07 \".concat(USER.name, \" \\u0E2B\\u0E23\\u0E37\\u0E2D\\u0E44\\u0E21\\u0E48?\"))) {\n                    Hire(USER.id);\n                  }\n                }\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 131,\n                columnNumber: 23\n              }, _this)]\n            }, USER.id, true, {\n              fileName: _jsxFileName,\n              lineNumber: 129,\n              columnNumber: 21\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 123,\n          columnNumber: 15\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 113,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_StaffList__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        staffList: staffList,\n        hireUser: hireUser,\n        unHire: unHire\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 148,\n        columnNumber: 11\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 9\n    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_loader_spinner__WEBPACK_IMPORTED_MODULE_7___default.a, {\n      type: \"ThreeDots\",\n      color: \"#8a9bae\",\n      height: 100,\n      width: 100,\n      visible: loading,\n      className: \"loading\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 155,\n      columnNumber: 9\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 101,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(staffManage, \"5y7L7XlNaCFCw5vW0Be39TzIXHU=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"]];\n});\n\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (staffManage);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2hvcC9zdGFmZi9bLi4uc2hvcGlkXS5qcz9lYzUxIl0sIm5hbWVzIjpbInN0YWZmTWFuYWdlIiwicHJvcHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsInVzZXIiLCJzZXRVc2VyIiwiaGlyZVVzZXIiLCJzZXRIaXJlVXNlciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic3RhZmZMaXN0Iiwic2V0U3RhZmZMaXN0IiwidXNlRWZmZWN0IiwiZGVjb2RlZCIsImp3dF9kZWNvZGUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiaWQiLCJkYXRhIiwibWVyY2hhbnQiLCJhbGVydCIsInJlcGxhY2UiLCJ1c2VyTGlzdCIsImVycm9yIiwiSGlyZSIsInVzZXJJZCIsImF4aW9zIiwidXJsIiwibWV0aG9kIiwic2hvcElkIiwicXVlcnkiLCJzaG9waWQiLCJzaG9wTmFtZSIsImhlYWRlcnMiLCJ0aGVuIiwicmVzIiwiZmlsdGVyIiwiVVNFUiIsInVuSGlyZSIsInVzZXJOYW1lIiwibmFtZSIsInN0YWZmIiwiYmFjayIsImNsYXNzZXMiLCJjb250YWluZXJfX3N0YWZmIiwiY29uc29sZSIsImxvZyIsImJsb2NrX19zdGFmZiIsInRpdGxlX19zdGFmZiIsImxlbmd0aCIsIm1pc3Npbmdfc3RhZmYiLCJtYXAiLCJpbmNsdWRlcyIsImNvbnRlbnRfX3N0YWZmIiwiYnV0dG9uX19zdGFmZiIsIndpbmRvdyIsImNvbmZpcm0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFDN0IsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFENkIsa0JBRUxDLHNEQUFRLENBQUMsRUFBRCxDQUZIO0FBQUEsTUFF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ZF0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL3N0YWZmLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBTdGFmZkxpc3QgZnJvbSBcIi4uLy4uLy4uL2NvbXBvbmVudHMvU3RhZmZMaXN0XCI7XG5pbXBvcnQgTG9hZGVyIGZyb20gXCJyZWFjdC1sb2FkZXItc3Bpbm5lclwiO1xuaW1wb3J0IHsgQnNQZXJzb25QbHVzRmlsbCB9IGZyb20gXCJyZWFjdC1pY29ucy9ic1wiO1xuaW1wb3J0IGp3dF9kZWNvZGUgZnJvbSBcImp3dC1kZWNvZGVcIjtcbmltcG9ydCBiYWNrIGZyb20gXCIuLi9tYW5hZ2Uvc2hvcGlkLm1vZHVsZS5jc3NcIjtcbmNvbnN0IHN0YWZmTWFuYWdlID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtoaXJlVXNlciwgc2V0SGlyZVVzZXJdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW3N0YWZmTGlzdCwgc2V0U3RhZmZMaXN0XSA9IHVzZVN0YXRlKFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBkZWNvZGVkID0gand0X2RlY29kZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpKTtcbiAgICAgIGlmIChkZWNvZGVkLnVzZXIuaWQgIT09IHByb3BzLmRhdGEubWVyY2hhbnQpIHtcbiAgICAgICAgYWxlcnQoXCLguITguLjguJPguYTguKHguYjguKHguLXguKrguLTguJfguJjguLTguYvguYPguJnguIHguLLguKPguYDguILguYnguLLguJbguLbguIdcIik7XG4gICAgICAgIHJvdXRlci5yZXBsYWNlKFwiL2xvZ2luXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0VXNlcihwcm9wcy5kYXRhLnVzZXJMaXN0KTtcbiAgICAgICAgc2V0SGlyZVVzZXIocHJvcHMuZGF0YS51c2VyTGlzdCk7XG4gICAgICAgIHNldFN0YWZmTGlzdChwcm9wcy5kYXRhLnN0YWZmTGlzdCk7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgYWxlcnQoXCLguITguLjguJPguYTguKHguYjguKHguLXguKrguLTguJfguJjguLTguYvguYPguJnguIHguLLguKPguYDguILguYnguLLguJbguLbguIdcIik7XG4gICAgICAgIHJvdXRlci5yZXBsYWNlKFwiL2xvZ2luXCIpO1xuICAgICAgfVxuICAgIH1cbiAgfSwgW10pO1xuICAvLyBpZiAoc2hvcGlkICYmIGxvYWRpbmcpIHtcbiAgLy8gICBjb25zdCBkZWNvZGVkID0gand0X2RlY29kZShzaG9waWRbMF0pO1xuICAvLyAgIGNvbnN0IHZhbGlkVG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xuICAvLyAgIGlmICh2YWxpZFRva2VuICE9PSBzaG9waWRbMF0pIHtcbiAgLy8gICAgIGFsZXJ0KFwi4LiE4Li44LiT4LmE4Lih4LmI4Lih4Li14Liq4Li04LiX4LiY4Li04LmL4LmD4LiZ4LiB4Liy4Lij4LmA4LiC4LmJ4Liy4LiW4Li24LiHXCIpO1xuICAvLyAgICAgcm91dGVyLnJlcGxhY2UoXCIvbG9naW5cIik7XG4gIC8vICAgfVxuICAvLyAgIGF4aW9zKHtcbiAgLy8gICAgIHVybDogYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvdXNlci9nZXRVc2VydG9IaXJlYCxcbiAgLy8gICAgIG1ldGhvZDogXCJwb3N0XCIsXG4gIC8vICAgICBkYXRhOiB7IHVzZXJJZDogZGVjb2RlZC51c2VyLmlkLCBzaG9wSWQ6IHNob3BpZFsyXSB9LFxuICAvLyAgICAgaGVhZGVyczoge1xuICAvLyAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgLy8gICAgIH0sXG4gIC8vICAgfSkudGhlbigocmVzKSA9PiB7XG4gIC8vICAgICBpZiAoIXJlcy5kYXRhKSB7XG4gIC8vICAgICAgIGFsZXJ0KFwi4LiE4Li44LiT4LmE4Lih4LmI4Lih4Li14Liq4Li04LiX4LiY4Li04LmM4LmD4LiZ4LiB4Liy4Lij4LmA4LiC4LmJ4Liy4LiW4Li24LiH4LiC4LmJ4Lit4Lih4Li54LilXCIpO1xuICAvLyAgICAgICByb3V0ZXIucmVwbGFjZShcIi9sb2dpblwiKTtcbiAgLy8gICAgIH0gZWxzZSB7XG4gIC8vIHNldFVzZXIocmVzLmRhdGEudXNlckxpc3QpO1xuICAvLyBzZXRIaXJlVXNlcihyZXMuZGF0YS51c2VyTGlzdCk7XG4gIC8vIHNldFN0YWZmTGlzdChyZXMuZGF0YS5zdGFmZkxpc3QpO1xuICAvLyAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgLy8gICAgIH1cbiAgLy8gICB9KTtcbiAgLy8gfVxuXG4gIGNvbnN0IEhpcmUgPSAodXNlcklkKSA9PiB7XG4gICAgYXhpb3Moe1xuICAgICAgdXJsOiBgaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS91c2VyL2hpcmVTdGFmZmAsXG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgZGF0YToge1xuICAgICAgICB1c2VySWQ6IHVzZXJJZCxcbiAgICAgICAgc2hvcElkOiByb3V0ZXIucXVlcnkuc2hvcGlkWzJdLFxuICAgICAgICBzaG9wTmFtZTogcm91dGVyLnF1ZXJ5LnNob3BpZFsxXSxcbiAgICAgIH0sXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSxcbiAgICB9KS50aGVuKChyZXMpID0+IHtcbiAgICAgIHNldFVzZXIodXNlci5maWx0ZXIoKFVTRVIpID0+IFVTRVIuaWQgIT09IHVzZXJJZCkpO1xuICAgICAgc2V0U3RhZmZMaXN0KFsuLi5zdGFmZkxpc3QsIHVzZXJJZF0pO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IHVuSGlyZSA9ICh1c2VySWQsIHVzZXJOYW1lKSA9PiB7XG4gICAgLy8gYXhpb3Moe1xuICAgIC8vICAgdXJsOiBgaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS91c2VyL3VuSGlyZVN0YWZmYCxcbiAgICAvLyAgIG1ldGhvZDogXCJwb3N0XCIsXG4gICAgLy8gICBkYXRhOiB7XG4gICAgLy8gICAgIHVzZXJJZDogdXNlcklkLFxuICAgIC8vICAgICBzaG9wSWQ6IHJvdXRlci5xdWVyeS5zaG9waWRbMl0sXG4gICAgLy8gICB9LFxuICAgIC8vICAgaGVhZGVyczoge1xuICAgIC8vICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAvLyAgIH0sXG4gICAgLy8gfSkudGhlbigocmVzKSA9PiB7XG4gICAgLy8gICBzZXRVc2VyKClcbiAgICAvLyAgIHNldFN0YWZmTGlzdChzdGFmZkxpc3QuZmlsdGVyKChzdGFmZikgPT4gc3RhZmYuaWQgIT09IHVzZXJJZCkpO1xuICAgIC8vIH0pO1xuICAgIHNldFVzZXIoWy4uLnVzZXIsIHsgaWQ6IHVzZXJJZCwgbmFtZTogdXNlck5hbWUgfV0pO1xuICAgIHNldFN0YWZmTGlzdChzdGFmZkxpc3QuZmlsdGVyKChzdGFmZikgPT4gc3RhZmYuaWQgIT09IHVzZXJJZCkpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxhXG4gICAgICAgIGNsYXNzTmFtZT17YmFjay5iYWNrfVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgcm91dGVyLmJhY2soKTtcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGg0PntcIjwg4Lii4LmJ4Lit4LiZ4LiB4Lil4Lix4LiaXCJ9PC9oND5cbiAgICAgIDwvYT5cbiAgICAgIHshbG9hZGluZyA/IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyX19zdGFmZn0+XG4gICAgICAgICAge2NvbnNvbGUubG9nKHVzZXIsIHN0YWZmTGlzdCl9XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYmxvY2tfX3N0YWZmfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlX19zdGFmZn0+XG4gICAgICAgICAgICAgIOC4o+C4suC4ouC4iuC4t+C5iOC4reC4guC4reC4h+C4nOC4ueC5ieC5g+C4iuC5ieC4h+C4suC4meC4l+C4teC5iOC4quC4suC4oeC4suC4o+C4luC5gOC4peC4t+C4reC4geC5hOC4lOC5iVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7aGlyZVVzZXIubGVuZ3RoID09PSBzdGFmZkxpc3QubGVuZ3RoID8gKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5taXNzaW5nX3N0YWZmfT5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIi9taXNzaW5nLnBuZ1wiIHdpZHRoPXsxNTB9IGhlaWdodD17MTUwfSAvPlxuICAgICAgICAgICAgICAgIDxzcGFuPuC4ouC4seC4h+C5hOC4oeC5iOC4oeC4teC4nOC4ueC5ieC5g+C4iuC5ieC4h+C4suC4meC5g+C4q+C5ieC5gOC4peC4t+C4reC4gTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIHt1c2VyLm1hcCgoVVNFUikgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKHN0YWZmTGlzdC5pbmNsdWRlcyhVU0VSLmlkKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17VVNFUi5pZH0gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnRfX3N0YWZmfT5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2PntVU0VSLm5hbWV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPEJzUGVyc29uUGx1c0ZpbGxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCI0MHB4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b25fX3N0YWZmfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmNvbmZpcm0oYOC4leC5ieC4reC4h+C4geC4suC4o+C4iOC5ieC4suC4hyAke1VTRVIubmFtZX0g4Lir4Lij4Li34Lit4LmE4Lih4LmIP2ApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEhpcmUoVVNFUi5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPFN0YWZmTGlzdFxuICAgICAgICAgICAgc3RhZmZMaXN0PXtzdGFmZkxpc3R9XG4gICAgICAgICAgICBoaXJlVXNlcj17aGlyZVVzZXJ9XG4gICAgICAgICAgICB1bkhpcmU9e3VuSGlyZX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxMb2FkZXJcbiAgICAgICAgICB0eXBlPVwiVGhyZWVEb3RzXCJcbiAgICAgICAgICBjb2xvcj1cIiM4YTliYWVcIlxuICAgICAgICAgIGhlaWdodD17MTAwfVxuICAgICAgICAgIHdpZHRoPXsxMDB9XG4gICAgICAgICAgdmlzaWJsZT17bG9hZGluZ31cbiAgICAgICAgICBjbGFzc05hbWU9XCJsb2FkaW5nXCJcbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XG4gIGNvbnN0IHsgc2hvcGlkIH0gPSBjb250ZXh0LnF1ZXJ5O1xuICBjb25zdCBkYXRhID0gYXdhaXQgYXhpb3Moe1xuICAgIHVybDogYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvdXNlci9nZXRVc2VydG9IaXJlYCxcbiAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgIGRhdGE6IHsgc2hvcElkOiBzaG9waWRbMl0gfSxcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIEF1dGhvcml6YXRpb246IHNob3BpZFswXSxcbiAgICB9LFxuICB9KTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyBkYXRhOiBkYXRhLmRhdGEgfSxcbiAgfTtcbn07XG5leHBvcnQgZGVmYXVsdCBzdGFmZk1hbmFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/shop/staff/[...shopid].js\n");

/***/ })

})