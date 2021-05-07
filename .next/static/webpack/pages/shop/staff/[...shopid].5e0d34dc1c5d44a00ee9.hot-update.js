webpackHotUpdate_N_E("pages/shop/staff/[...shopid]",{

/***/ "./pages/shop/staff/[...shopid].js":
/*!*****************************************!*\
  !*** ./pages/shop/staff/[...shopid].js ***!
  \*****************************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_teerapat_Documents_project_ecommerce_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _staff_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./staff.module.css */ \"./pages/shop/staff/staff.module.css\");\n/* harmony import */ var _staff_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_staff_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_StaffList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/StaffList */ \"./components/StaffList.js\");\n/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-loader-spinner */ \"./node_modules/react-loader-spinner/dist/index.js\");\n/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-icons/bs */ \"./node_modules/react-icons/bs/index.esm.js\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jwt-decode */ \"./node_modules/jwt-decode/build/jwt-decode.esm.js\");\n/* harmony import */ var _manage_shopid_module_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../manage/shopid.module.css */ \"./pages/shop/manage/shopid.module.css\");\n/* harmony import */ var _manage_shopid_module_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_manage_shopid_module_css__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\nvar _jsxFileName = \"/Users/teerapat/Documents/project/ecommerce/client/pages/shop/staff/[...shopid].js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nvar staffManage = function staffManage(props) {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      user = _useState[0],\n      setUser = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      hireUser = _useState2[0],\n      setHireUser = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])(true),\n      loading = _useState3[0],\n      setLoading = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useState\"])([]),\n      staffList = _useState4[0],\n      setStaffList = _useState4[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_3__[\"useEffect\"])(function () {\n    try {\n      var decoded = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_9__[\"default\"])(localStorage.getItem(\"token\"));\n\n      if (decoded.user.id !== props.data.merchant) {\n        alert(\"คุณไม่มีสิทธิ๋ในการเข้าถึง\");\n        router.replace(\"/login\");\n      } else {\n        setUser(props.data.userList);\n        setHireUser(props.data.userList);\n        setStaffList(props.data.staffList);\n        setLoading(false);\n      }\n    } catch (error) {\n      if (error) {\n        alert(\"คุณไม่มีสิทธิ๋ในการเข้าถึง\");\n        router.replace(\"/login\");\n      }\n    }\n  }, []); // if (shopid && loading) {\n  //   const decoded = jwt_decode(shopid[0]);\n  //   const validToken = localStorage.getItem(\"token\");\n  //   if (validToken !== shopid[0]) {\n  //     alert(\"คุณไม่มีสิทธิ๋ในการเข้าถึง\");\n  //     router.replace(\"/login\");\n  //   }\n  //   axios({\n  //     url: `http://localhost:8000/api/user/getUsertoHire`,\n  //     method: \"post\",\n  //     data: { userId: decoded.user.id, shopId: shopid[2] },\n  //     headers: {\n  //       \"Content-Type\": \"application/json\",\n  //     },\n  //   }).then((res) => {\n  //     if (!res.data) {\n  //       alert(\"คุณไม่มีสิทธิ์ในการเข้าถึงข้อมูล\");\n  //       router.replace(\"/login\");\n  //     } else {\n  // setUser(res.data.userList);\n  // setHireUser(res.data.userList);\n  // setStaffList(res.data.staffList);\n  //       setLoading(false);\n  //     }\n  //   });\n  // }\n\n  var Hire = function Hire(userId) {\n    axios__WEBPACK_IMPORTED_MODULE_5___default()({\n      url: \"http://localhost:8000/api/user/hireStaff\",\n      method: \"post\",\n      data: {\n        userId: userId,\n        shopId: router.query.shopid[2],\n        shopName: router.query.shopid[1]\n      },\n      headers: {\n        \"Content-Type\": \"application/json\"\n      }\n    }).then(function (res) {\n      setUser(user.filter(function (USER) {\n        return USER.id !== userId;\n      }));\n      setStaffList([].concat(Object(_Users_teerapat_Documents_project_ecommerce_client_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(staffList), [userId]));\n    });\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"container\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n      className: _manage_shopid_module_css__WEBPACK_IMPORTED_MODULE_10___default.a.back,\n      onClick: function onClick() {\n        router.back();\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h4\", {\n        children: \"< ย้อนกลับ\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 89,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 7\n    }, _this), !loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _staff_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.container__staff,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _staff_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.block__staff,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _staff_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.title__staff,\n          children: \"\\u0E23\\u0E32\\u0E22\\u0E0A\\u0E37\\u0E48\\u0E2D\\u0E02\\u0E2D\\u0E07\\u0E1C\\u0E39\\u0E49\\u0E43\\u0E0A\\u0E49\\u0E07\\u0E32\\u0E19\\u0E17\\u0E35\\u0E48\\u0E2A\\u0E32\\u0E21\\u0E32\\u0E23\\u0E16\\u0E40\\u0E25\\u0E37\\u0E2D\\u0E01\\u0E44\\u0E14\\u0E49\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 94,\n          columnNumber: 13\n        }, _this), hireUser.length === staffList.length ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _staff_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.missing_staff,\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n            src: \"/missing.png\",\n            width: 150,\n            height: 150\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 99,\n            columnNumber: 17\n          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n            children: \"\\u0E22\\u0E31\\u0E07\\u0E44\\u0E21\\u0E48\\u0E21\\u0E35\\u0E1C\\u0E39\\u0E49\\u0E43\\u0E0A\\u0E49\\u0E07\\u0E32\\u0E19\\u0E43\\u0E2B\\u0E49\\u0E40\\u0E25\\u0E37\\u0E2D\\u0E01\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 100,\n            columnNumber: 17\n          }, _this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 98,\n          columnNumber: 15\n        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          children: user.map(function (USER) {\n            if (staffList.includes(USER.id)) {\n              return;\n            }\n\n            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: _staff_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.content__staff,\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                children: USER.name\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 110,\n                columnNumber: 23\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_bs__WEBPACK_IMPORTED_MODULE_8__[\"BsPersonPlusFill\"], {\n                size: \"40px\",\n                className: _staff_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.button__staff,\n                onClick: function onClick() {\n                  Hire(USER.id);\n                }\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 111,\n                columnNumber: 23\n              }, _this)]\n            }, USER.id, true, {\n              fileName: _jsxFileName,\n              lineNumber: 109,\n              columnNumber: 21\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 103,\n          columnNumber: 15\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 11\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_StaffList__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        staffList: staffList,\n        hireUser: hireUser\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 124,\n        columnNumber: 11\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 92,\n      columnNumber: 9\n    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_loader_spinner__WEBPACK_IMPORTED_MODULE_7___default.a, {\n      type: \"ThreeDots\",\n      color: \"#8a9bae\",\n      height: 100,\n      width: 100,\n      visible: loading,\n      className: \"loading\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 127,\n      columnNumber: 9\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 82,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(staffManage, \"5y7L7XlNaCFCw5vW0Be39TzIXHU=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"]];\n});\n\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (staffManage);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2hvcC9zdGFmZi9bLi4uc2hvcGlkXS5qcz9lYzUxIl0sIm5hbWVzIjpbInN0YWZmTWFuYWdlIiwicHJvcHMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsInVzZXIiLCJzZXRVc2VyIiwiaGlyZVVzZXIiLCJzZXRIaXJlVXNlciIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwic3RhZmZMaXN0Iiwic2V0U3RhZmZMaXN0IiwidXNlRWZmZWN0IiwiZGVjb2RlZCIsImp3dF9kZWNvZGUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiaWQiLCJkYXRhIiwibWVyY2hhbnQiLCJhbGVydCIsInJlcGxhY2UiLCJ1c2VyTGlzdCIsImVycm9yIiwiSGlyZSIsInVzZXJJZCIsImF4aW9zIiwidXJsIiwibWV0aG9kIiwic2hvcElkIiwicXVlcnkiLCJzaG9waWQiLCJzaG9wTmFtZSIsImhlYWRlcnMiLCJ0aGVuIiwicmVzIiwiZmlsdGVyIiwiVVNFUiIsImJhY2siLCJjbGFzc2VzIiwiY29udGFpbmVyX19zdGFmZiIsImJsb2NrX19zdGFmZiIsInRpdGxlX19zdGFmZiIsImxlbmd0aCIsIm1pc3Npbmdfc3RhZmYiLCJtYXAiLCJpbmNsdWRlcyIsImNvbnRlbnRfX3N0YWZmIiwibmFtZSIsImJ1dHRvbl9fc3RhZmYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFDN0IsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFENkIsa0JBRUxDLHNEQUFRLENBQUMsRUFBRCxDQUZIO0FBQUEsTUFFdEJDLElBRnNCO0FBQUEsTUFFaEJDLE9BRmdCOztBQUFBLG1CQUdHRixzREFBUSxDQUFDLEVBQUQsQ0FIWDtBQUFBLE1BR3RCRyxRQUhzQjtBQUFBLE1BR1pDLFdBSFk7O0FBQUEsbUJBSUNKLHNEQUFRLENBQUMsSUFBRCxDQUpUO0FBQUEsTUFJdEJLLE9BSnNCO0FBQUEsTUFJYkMsVUFKYTs7QUFBQSxtQkFLS04sc0RBQVEsQ0FBQyxFQUFELENBTGI7QUFBQSxNQUt0Qk8sU0FMc0I7QUFBQSxNQUtYQyxZQUxXOztBQU83QkMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSTtBQUNGLFVBQU1DLE9BQU8sR0FBR0MsMERBQVUsQ0FBQ0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCLE9BQXJCLENBQUQsQ0FBMUI7O0FBQ0EsVUFBSUgsT0FBTyxDQUFDVCxJQUFSLENBQWFhLEVBQWIsS0FBb0JqQixLQUFLLENBQUNrQixJQUFOLENBQVdDLFFBQW5DLEVBQTZDO0FBQzNDQyxhQUFLLENBQUMsNEJBQUQsQ0FBTDtBQUNBbkIsY0FBTSxDQUFDb0IsT0FBUCxDQUFlLFFBQWY7QUFDRCxPQUhELE1BR087QUFDTGhCLGVBQU8sQ0FBQ0wsS0FBSyxDQUFDa0IsSUFBTixDQUFXSSxRQUFaLENBQVA7QUFDQWYsbUJBQVcsQ0FBQ1AsS0FBSyxDQUFDa0IsSUFBTixDQUFXSSxRQUFaLENBQVg7QUFDQVgsb0JBQVksQ0FBQ1gsS0FBSyxDQUFDa0IsSUFBTixDQUFXUixTQUFaLENBQVo7QUFDQUQsa0JBQVUsQ0FBQyxLQUFELENBQVY7QUFDRDtBQUNGLEtBWEQsQ0FXRSxPQUFPYyxLQUFQLEVBQWM7QUFDZCxVQUFJQSxLQUFKLEVBQVc7QUFDVEgsYUFBSyxDQUFDLDRCQUFELENBQUw7QUFDQW5CLGNBQU0sQ0FBQ29CLE9BQVAsQ0FBZSxRQUFmO0FBQ0Q7QUFDRjtBQUNGLEdBbEJRLEVBa0JOLEVBbEJNLENBQVQsQ0FQNkIsQ0EwQjdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUcsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsTUFBRCxFQUFZO0FBQ3ZCQyxnREFBSyxDQUFDO0FBQ0pDLFNBQUcsNENBREM7QUFFSkMsWUFBTSxFQUFFLE1BRko7QUFHSlYsVUFBSSxFQUFFO0FBQ0pPLGNBQU0sRUFBRUEsTUFESjtBQUVKSSxjQUFNLEVBQUU1QixNQUFNLENBQUM2QixLQUFQLENBQWFDLE1BQWIsQ0FBb0IsQ0FBcEIsQ0FGSjtBQUdKQyxnQkFBUSxFQUFFL0IsTUFBTSxDQUFDNkIsS0FBUCxDQUFhQyxNQUFiLENBQW9CLENBQXBCO0FBSE4sT0FIRjtBQVFKRSxhQUFPLEVBQUU7QUFDUCx3QkFBZ0I7QUFEVDtBQVJMLEtBQUQsQ0FBTCxDQVdHQyxJQVhILENBV1EsVUFBQ0MsR0FBRCxFQUFTO0FBQ2Y5QixhQUFPLENBQUNELElBQUksQ0FBQ2dDLE1BQUwsQ0FBWSxVQUFDQyxJQUFEO0FBQUEsZUFBVUEsSUFBSSxDQUFDcEIsRUFBTCxLQUFZUSxNQUF0QjtBQUFBLE9BQVosQ0FBRCxDQUFQO0FBQ0FkLGtCQUFZLHVLQUFLRCxTQUFMLElBQWdCZSxNQUFoQixHQUFaO0FBQ0QsS0FkRDtBQWVELEdBaEJEOztBQWtCQSxzQkFDRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUEsNEJBQ0U7QUFDRSxlQUFTLEVBQUVhLGlFQUFJLENBQUNBLElBRGxCO0FBRUUsYUFBTyxFQUFFLG1CQUFNO0FBQ2JyQyxjQUFNLENBQUNxQyxJQUFQO0FBQ0QsT0FKSDtBQUFBLDZCQU1FO0FBQUEsa0JBQUs7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLEVBU0csQ0FBQzlCLE9BQUQsZ0JBQ0M7QUFBSyxlQUFTLEVBQUUrQix3REFBTyxDQUFDQyxnQkFBeEI7QUFBQSw4QkFDRTtBQUFLLGlCQUFTLEVBQUVELHdEQUFPLENBQUNFLFlBQXhCO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFFRix3REFBTyxDQUFDRyxZQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixFQUlHcEMsUUFBUSxDQUFDcUMsTUFBVCxLQUFvQmpDLFNBQVMsQ0FBQ2lDLE1BQTlCLGdCQUNDO0FBQUssbUJBQVMsRUFBRUosd0RBQU8sQ0FBQ0ssYUFBeEI7QUFBQSxrQ0FDRTtBQUFLLGVBQUcsRUFBQyxjQUFUO0FBQXdCLGlCQUFLLEVBQUUsR0FBL0I7QUFBb0Msa0JBQU0sRUFBRTtBQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURELGdCQU1DO0FBQUEsb0JBQ0d4QyxJQUFJLENBQUN5QyxHQUFMLENBQVMsVUFBQ1IsSUFBRCxFQUFVO0FBQ2xCLGdCQUFJM0IsU0FBUyxDQUFDb0MsUUFBVixDQUFtQlQsSUFBSSxDQUFDcEIsRUFBeEIsQ0FBSixFQUFpQztBQUMvQjtBQUNEOztBQUNELGdDQUNFO0FBQW1CLHVCQUFTLEVBQUVzQix3REFBTyxDQUFDUSxjQUF0QztBQUFBLHNDQUNFO0FBQUEsMEJBQU1WLElBQUksQ0FBQ1c7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLGVBRUUscUVBQUMsK0RBQUQ7QUFDRSxvQkFBSSxFQUFDLE1BRFA7QUFFRSx5QkFBUyxFQUFFVCx3REFBTyxDQUFDVSxhQUZyQjtBQUdFLHVCQUFPLEVBQUUsbUJBQU07QUFDYnpCLHNCQUFJLENBQUNhLElBQUksQ0FBQ3BCLEVBQU4sQ0FBSjtBQUNEO0FBTEg7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGRjtBQUFBLGVBQVVvQixJQUFJLENBQUNwQixFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREY7QUFZRCxXQWhCQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFnQ0UscUVBQUMsNkRBQUQ7QUFBVyxpQkFBUyxFQUFFUCxTQUF0QjtBQUFpQyxnQkFBUSxFQUFFSjtBQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBaENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURELGdCQW9DQyxxRUFBQywyREFBRDtBQUNFLFVBQUksRUFBQyxXQURQO0FBRUUsV0FBSyxFQUFDLFNBRlI7QUFHRSxZQUFNLEVBQUUsR0FIVjtBQUlFLFdBQUssRUFBRSxHQUpUO0FBS0UsYUFBTyxFQUFFRSxPQUxYO0FBTUUsZUFBUyxFQUFDO0FBTlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQTdDSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXlERCxDQWhJRDs7R0FBTVQsVztVQUNXRyxxRDs7OztBQStJRkgsMEVBQWYiLCJmaWxlIjoiLi9wYWdlcy9zaG9wL3N0YWZmL1suLi5zaG9waWRdLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9zdGFmZi5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgU3RhZmZMaXN0IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL1N0YWZmTGlzdFwiO1xuaW1wb3J0IExvYWRlciBmcm9tIFwicmVhY3QtbG9hZGVyLXNwaW5uZXJcIjtcbmltcG9ydCB7IEJzUGVyc29uUGx1c0ZpbGwgfSBmcm9tIFwicmVhY3QtaWNvbnMvYnNcIjtcbmltcG9ydCBqd3RfZGVjb2RlIGZyb20gXCJqd3QtZGVjb2RlXCI7XG5pbXBvcnQgYmFjayBmcm9tIFwiLi4vbWFuYWdlL3Nob3BpZC5tb2R1bGUuY3NzXCI7XG5jb25zdCBzdGFmZk1hbmFnZSA9IChwcm9wcykgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbaGlyZVVzZXIsIHNldEhpcmVVc2VyXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtzdGFmZkxpc3QsIHNldFN0YWZmTGlzdF0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZGVjb2RlZCA9IGp3dF9kZWNvZGUobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKSk7XG4gICAgICBpZiAoZGVjb2RlZC51c2VyLmlkICE9PSBwcm9wcy5kYXRhLm1lcmNoYW50KSB7XG4gICAgICAgIGFsZXJ0KFwi4LiE4Li44LiT4LmE4Lih4LmI4Lih4Li14Liq4Li04LiX4LiY4Li04LmL4LmD4LiZ4LiB4Liy4Lij4LmA4LiC4LmJ4Liy4LiW4Li24LiHXCIpO1xuICAgICAgICByb3V0ZXIucmVwbGFjZShcIi9sb2dpblwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFVzZXIocHJvcHMuZGF0YS51c2VyTGlzdCk7XG4gICAgICAgIHNldEhpcmVVc2VyKHByb3BzLmRhdGEudXNlckxpc3QpO1xuICAgICAgICBzZXRTdGFmZkxpc3QocHJvcHMuZGF0YS5zdGFmZkxpc3QpO1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIGFsZXJ0KFwi4LiE4Li44LiT4LmE4Lih4LmI4Lih4Li14Liq4Li04LiX4LiY4Li04LmL4LmD4LiZ4LiB4Liy4Lij4LmA4LiC4LmJ4Liy4LiW4Li24LiHXCIpO1xuICAgICAgICByb3V0ZXIucmVwbGFjZShcIi9sb2dpblwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtdKTtcbiAgLy8gaWYgKHNob3BpZCAmJiBsb2FkaW5nKSB7XG4gIC8vICAgY29uc3QgZGVjb2RlZCA9IGp3dF9kZWNvZGUoc2hvcGlkWzBdKTtcbiAgLy8gICBjb25zdCB2YWxpZFRva2VuID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKTtcbiAgLy8gICBpZiAodmFsaWRUb2tlbiAhPT0gc2hvcGlkWzBdKSB7XG4gIC8vICAgICBhbGVydChcIuC4hOC4uOC4k+C5hOC4oeC5iOC4oeC4teC4quC4tOC4l+C4mOC4tOC5i+C5g+C4meC4geC4suC4o+C5gOC4guC5ieC4suC4luC4tuC4h1wiKTtcbiAgLy8gICAgIHJvdXRlci5yZXBsYWNlKFwiL2xvZ2luXCIpO1xuICAvLyAgIH1cbiAgLy8gICBheGlvcyh7XG4gIC8vICAgICB1cmw6IGBodHRwOi8vbG9jYWxob3N0OjgwMDAvYXBpL3VzZXIvZ2V0VXNlcnRvSGlyZWAsXG4gIC8vICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAvLyAgICAgZGF0YTogeyB1c2VySWQ6IGRlY29kZWQudXNlci5pZCwgc2hvcElkOiBzaG9waWRbMl0gfSxcbiAgLy8gICAgIGhlYWRlcnM6IHtcbiAgLy8gICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gIC8vICAgICB9LFxuICAvLyAgIH0pLnRoZW4oKHJlcykgPT4ge1xuICAvLyAgICAgaWYgKCFyZXMuZGF0YSkge1xuICAvLyAgICAgICBhbGVydChcIuC4hOC4uOC4k+C5hOC4oeC5iOC4oeC4teC4quC4tOC4l+C4mOC4tOC5jOC5g+C4meC4geC4suC4o+C5gOC4guC5ieC4suC4luC4tuC4h+C4guC5ieC4reC4oeC4ueC4pVwiKTtcbiAgLy8gICAgICAgcm91dGVyLnJlcGxhY2UoXCIvbG9naW5cIik7XG4gIC8vICAgICB9IGVsc2Uge1xuICAvLyBzZXRVc2VyKHJlcy5kYXRhLnVzZXJMaXN0KTtcbiAgLy8gc2V0SGlyZVVzZXIocmVzLmRhdGEudXNlckxpc3QpO1xuICAvLyBzZXRTdGFmZkxpc3QocmVzLmRhdGEuc3RhZmZMaXN0KTtcbiAgLy8gICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gIC8vICAgICB9XG4gIC8vICAgfSk7XG4gIC8vIH1cblxuICBjb25zdCBIaXJlID0gKHVzZXJJZCkgPT4ge1xuICAgIGF4aW9zKHtcbiAgICAgIHVybDogYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvdXNlci9oaXJlU3RhZmZgLFxuICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgdXNlcklkOiB1c2VySWQsXG4gICAgICAgIHNob3BJZDogcm91dGVyLnF1ZXJ5LnNob3BpZFsyXSxcbiAgICAgICAgc2hvcE5hbWU6IHJvdXRlci5xdWVyeS5zaG9waWRbMV0sXG4gICAgICB9LFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIH0sXG4gICAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgICBzZXRVc2VyKHVzZXIuZmlsdGVyKChVU0VSKSA9PiBVU0VSLmlkICE9PSB1c2VySWQpKTtcbiAgICAgIHNldFN0YWZmTGlzdChbLi4uc3RhZmZMaXN0LCB1c2VySWRdKTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8YVxuICAgICAgICBjbGFzc05hbWU9e2JhY2suYmFja31cbiAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgIHJvdXRlci5iYWNrKCk7XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDxoND57XCI8IOC4ouC5ieC4reC4meC4geC4peC4seC4mlwifTwvaDQ+XG4gICAgICA8L2E+XG4gICAgICB7IWxvYWRpbmcgPyAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcl9fc3RhZmZ9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJsb2NrX19zdGFmZn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZV9fc3RhZmZ9PlxuICAgICAgICAgICAgICDguKPguLLguKLguIrguLfguYjguK3guILguK3guIfguJzguLnguYnguYPguIrguYnguIfguLLguJnguJfguLXguYjguKrguLLguKHguLLguKPguJbguYDguKXguLfguK3guIHguYTguJTguYlcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge2hpcmVVc2VyLmxlbmd0aCA9PT0gc3RhZmZMaXN0Lmxlbmd0aCA/IChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMubWlzc2luZ19zdGFmZn0+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvbWlzc2luZy5wbmdcIiB3aWR0aD17MTUwfSBoZWlnaHQ9ezE1MH0gLz5cbiAgICAgICAgICAgICAgICA8c3Bhbj7guKLguLHguIfguYTguKHguYjguKHguLXguJzguLnguYnguYPguIrguYnguIfguLLguJnguYPguKvguYnguYDguKXguLfguK3guIE8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICB7dXNlci5tYXAoKFVTRVIpID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmIChzdGFmZkxpc3QuaW5jbHVkZXMoVVNFUi5pZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e1VTRVIuaWR9IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250ZW50X19zdGFmZn0+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdj57VVNFUi5uYW1lfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxCc1BlcnNvblBsdXNGaWxsXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwiNDBweFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9uX19zdGFmZn1cbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgSGlyZShVU0VSLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPFN0YWZmTGlzdCBzdGFmZkxpc3Q9e3N0YWZmTGlzdH0gaGlyZVVzZXI9e2hpcmVVc2VyfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiAoXG4gICAgICAgIDxMb2FkZXJcbiAgICAgICAgICB0eXBlPVwiVGhyZWVEb3RzXCJcbiAgICAgICAgICBjb2xvcj1cIiM4YTliYWVcIlxuICAgICAgICAgIGhlaWdodD17MTAwfVxuICAgICAgICAgIHdpZHRoPXsxMDB9XG4gICAgICAgICAgdmlzaWJsZT17bG9hZGluZ31cbiAgICAgICAgICBjbGFzc05hbWU9XCJsb2FkaW5nXCJcbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XG4gIGNvbnN0IHsgc2hvcGlkIH0gPSBjb250ZXh0LnF1ZXJ5O1xuICBjb25zdCBkYXRhID0gYXdhaXQgYXhpb3Moe1xuICAgIHVybDogYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvdXNlci9nZXRVc2VydG9IaXJlYCxcbiAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgIGRhdGE6IHsgc2hvcElkOiBzaG9waWRbMl0gfSxcbiAgICBoZWFkZXJzOiB7XG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgIEF1dGhvcml6YXRpb246IHNob3BpZFswXSxcbiAgICB9LFxuICB9KTtcbiAgcmV0dXJuIHtcbiAgICBwcm9wczogeyBkYXRhOiBkYXRhLmRhdGEgfSxcbiAgfTtcbn07XG5leHBvcnQgZGVmYXVsdCBzdGFmZk1hbmFnZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/shop/staff/[...shopid].js\n");

/***/ })

})