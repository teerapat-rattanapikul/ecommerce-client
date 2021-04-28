module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/shop/staff/[...shopid].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/StaffList.js":
/*!*********************************!*\
  !*** ./components/StaffList.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _StaffList_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StaffList.module.css */ \"./components/StaffList.module.css\");\n/* harmony import */ var _StaffList_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_StaffList_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _jsxFileName = \"/Users/teerapat/Documents/project/ecommerce/client/components/StaffList.js\";\n\n\n\nconst StaffList = props => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _StaffList_module_css__WEBPACK_IMPORTED_MODULE_2___default.a.container__stafflist,\n    children: props.hireUser.map(user => {\n      if (props.staffList.includes(user.id)) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          children: user.email\n        }, user.id, false, {\n          fileName: _jsxFileName,\n          lineNumber: 9,\n          columnNumber: 18\n        }, undefined);\n      }\n\n      return;\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (StaffList);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1N0YWZmTGlzdC5qcz84MGE2Il0sIm5hbWVzIjpbIlN0YWZmTGlzdCIsInByb3BzIiwiY2xhc3NlcyIsImNvbnRhaW5lcl9fc3RhZmZsaXN0IiwiaGlyZVVzZXIiLCJtYXAiLCJ1c2VyIiwic3RhZmZMaXN0IiwiaW5jbHVkZXMiLCJpZCIsImVtYWlsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLE1BQU1BLFNBQVMsR0FBSUMsS0FBRCxJQUFXO0FBQzNCLHNCQUNFO0FBQUssYUFBUyxFQUFFQyw0REFBTyxDQUFDQyxvQkFBeEI7QUFBQSxjQUNHRixLQUFLLENBQUNHLFFBQU4sQ0FBZUMsR0FBZixDQUFvQkMsSUFBRCxJQUFVO0FBQzVCLFVBQUlMLEtBQUssQ0FBQ00sU0FBTixDQUFnQkMsUUFBaEIsQ0FBeUJGLElBQUksQ0FBQ0csRUFBOUIsQ0FBSixFQUF1QztBQUNyQyw0QkFBTztBQUFBLG9CQUFvQkgsSUFBSSxDQUFDSTtBQUF6QixXQUFVSixJQUFJLENBQUNHLEVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFBUDtBQUNEOztBQUVEO0FBQ0QsS0FOQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQVdELENBWkQ7O0FBY2VULHdFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9TdGFmZkxpc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL1N0YWZmTGlzdC5tb2R1bGUuY3NzXCI7XG5cbmNvbnN0IFN0YWZmTGlzdCA9IChwcm9wcykgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcl9fc3RhZmZsaXN0fT5cbiAgICAgIHtwcm9wcy5oaXJlVXNlci5tYXAoKHVzZXIpID0+IHtcbiAgICAgICAgaWYgKHByb3BzLnN0YWZmTGlzdC5pbmNsdWRlcyh1c2VyLmlkKSkge1xuICAgICAgICAgIHJldHVybiA8ZGl2IGtleT17dXNlci5pZH0+e3VzZXIuZW1haWx9PC9kaXY+O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTdGFmZkxpc3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/StaffList.js\n");

/***/ }),

/***/ "./components/StaffList.module.css":
/*!*****************************************!*\
  !*** ./components/StaffList.module.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"container__stafflist\": \"StaffList_container__stafflist___dJLL\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1N0YWZmTGlzdC5tb2R1bGUuY3NzP2M1MzIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9jb21wb25lbnRzL1N0YWZmTGlzdC5tb2R1bGUuY3NzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyX19zdGFmZmxpc3RcIjogXCJTdGFmZkxpc3RfY29udGFpbmVyX19zdGFmZmxpc3RfX19kSkxMXCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/StaffList.module.css\n");

/***/ }),

/***/ "./pages/shop/staff/[...shopid].js":
/*!*****************************************!*\
  !*** ./pages/shop/staff/[...shopid].js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _staff_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./staff.module.css */ \"./pages/shop/staff/staff.module.css\");\n/* harmony import */ var _staff_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_staff_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_StaffList__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/StaffList */ \"./components/StaffList.js\");\n\nvar _jsxFileName = \"/Users/teerapat/Documents/project/ecommerce/client/pages/shop/staff/[...shopid].js\";\n\n\n\n\n\n\n\nconst staffManage = props => {\n  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  const {\n    0: user,\n    1: setUser\n  } = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]);\n  const {\n    0: hireUser,\n    1: setHireUser\n  } = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]);\n  const {\n    0: staffList,\n    1: setStaffList\n  } = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(() => {\n    if (Object.keys(router.query).length > 0) {\n      axios__WEBPACK_IMPORTED_MODULE_4___default()({\n        url: `http://localhost:8000/api/user/getUsertoHire`,\n        method: \"post\",\n        data: {\n          id: props.user.id,\n          shopId: router.query.shopid[1]\n        },\n        headers: {\n          \"Content-Type\": \"application/json\"\n        }\n      }).then(res => {\n        setUser(res.data.userList);\n        setHireUser(res.data.userList);\n        setStaffList(res.data.staffList);\n      });\n    }\n  }, []);\n\n  const Hire = userId => {\n    axios__WEBPACK_IMPORTED_MODULE_4___default()({\n      url: `http://localhost:8000/api/user/hireStaff`,\n      method: \"post\",\n      data: {\n        userId: userId,\n        shopId: router.query.shopid[1],\n        shopName: router.query.shopid[0]\n      },\n      headers: {\n        \"Content-Type\": \"application/json\"\n      }\n    }).then(res => {\n      setUser(user.filter(USER => USER.id !== userId));\n      setStaffList([...staffList, userId]); // router.back()\n    });\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"container\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _staff_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.container__staff,\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _staff_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.block__staff,\n        children: user.map(USER => {\n          if (staffList.includes(USER.id)) {\n            return;\n          }\n\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: _staff_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.content__staff,\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              children: USER.email\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 59,\n              columnNumber: 17\n            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n              className: _staff_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.button__staff,\n              onClick: () => {\n                Hire(USER.id);\n              },\n              children: \"HIRE\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 60,\n              columnNumber: 17\n            }, undefined)]\n          }, USER.id, true, {\n            fileName: _jsxFileName,\n            lineNumber: 58,\n            columnNumber: 15\n          }, undefined);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 52,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_StaffList__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n        staffList: staffList,\n        hireUser: hireUser\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 72,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 50,\n    columnNumber: 5\n  }, undefined);\n};\n\nconst MapStateToProps = state => ({\n  user: state.user\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__[\"connect\"])(MapStateToProps)(staffManage));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zaG9wL3N0YWZmL1suLi5zaG9waWRdLmpzP2VjNTEiXSwibmFtZXMiOlsic3RhZmZNYW5hZ2UiLCJwcm9wcyIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZXIiLCJzZXRVc2VyIiwidXNlU3RhdGUiLCJoaXJlVXNlciIsInNldEhpcmVVc2VyIiwic3RhZmZMaXN0Iiwic2V0U3RhZmZMaXN0IiwidXNlRWZmZWN0IiwiT2JqZWN0Iiwia2V5cyIsInF1ZXJ5IiwibGVuZ3RoIiwiYXhpb3MiLCJ1cmwiLCJtZXRob2QiLCJkYXRhIiwiaWQiLCJzaG9wSWQiLCJzaG9waWQiLCJoZWFkZXJzIiwidGhlbiIsInJlcyIsInVzZXJMaXN0IiwiSGlyZSIsInVzZXJJZCIsInNob3BOYW1lIiwiZmlsdGVyIiwiVVNFUiIsImNsYXNzZXMiLCJjb250YWluZXJfX3N0YWZmIiwiYmxvY2tfX3N0YWZmIiwibWFwIiwiaW5jbHVkZXMiLCJjb250ZW50X19zdGFmZiIsImVtYWlsIiwiYnV0dG9uX19zdGFmZiIsIk1hcFN0YXRlVG9Qcm9wcyIsInN0YXRlIiwiY29ubmVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxNQUFNQSxXQUFXLEdBQUlDLEtBQUQsSUFBVztBQUM3QixRQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLElBQUQ7QUFBQSxPQUFPQztBQUFQLE1BQWtCQyxzREFBUSxDQUFDLEVBQUQsQ0FBaEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsUUFBRDtBQUFBLE9BQVdDO0FBQVgsTUFBMEJGLHNEQUFRLENBQUMsRUFBRCxDQUF4QztBQUNBLFFBQU07QUFBQSxPQUFDRyxTQUFEO0FBQUEsT0FBWUM7QUFBWixNQUE0Qkosc0RBQVEsQ0FBQyxFQUFELENBQTFDO0FBRUFLLHlEQUFTLENBQUMsTUFBTTtBQUNkLFFBQUlDLE1BQU0s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QXJFRDs7QUF1RUEsTUFBTWlDLGVBQWUsR0FBSUMsS0FBRCxLQUFZO0FBQ2xDckMsTUFBSSxFQUFFcUMsS0FBSyxDQUFDckM7QUFEc0IsQ0FBWixDQUF4Qjs7QUFHZXNDLDBIQUFPLENBQUNGLGVBQUQsQ0FBUCxDQUF5QnhDLFdBQXpCLENBQWYiLCJmaWxlIjoiLi9wYWdlcy9zaG9wL3N0YWZmL1suLi5zaG9waWRdLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgY2xhc3NlcyBmcm9tIFwiLi9zdGFmZi5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyBjb25uZWN0IH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgU3RhZmZMaXN0IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL1N0YWZmTGlzdFwiO1xuY29uc3Qgc3RhZmZNYW5hZ2UgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2hpcmVVc2VyLCBzZXRIaXJlVXNlcl0gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtzdGFmZkxpc3QsIHNldFN0YWZmTGlzdF0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoT2JqZWN0LmtleXMocm91dGVyLnF1ZXJ5KS5sZW5ndGggPiAwKSB7XG4gICAgICBheGlvcyh7XG4gICAgICAgIHVybDogYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvdXNlci9nZXRVc2VydG9IaXJlYCxcbiAgICAgICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICAgICAgZGF0YTogeyBpZDogcHJvcHMudXNlci5pZCwgc2hvcElkOiByb3V0ZXIucXVlcnkuc2hvcGlkWzFdIH0sXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICAgIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICBzZXRVc2VyKHJlcy5kYXRhLnVzZXJMaXN0KTtcbiAgICAgICAgc2V0SGlyZVVzZXIocmVzLmRhdGEudXNlckxpc3QpO1xuICAgICAgICBzZXRTdGFmZkxpc3QocmVzLmRhdGEuc3RhZmZMaXN0KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIGNvbnN0IEhpcmUgPSAodXNlcklkKSA9PiB7XG4gICAgYXhpb3Moe1xuICAgICAgdXJsOiBgaHR0cDovL2xvY2FsaG9zdDo4MDAwL2FwaS91c2VyL2hpcmVTdGFmZmAsXG4gICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAgICAgZGF0YToge1xuICAgICAgICB1c2VySWQ6IHVzZXJJZCxcbiAgICAgICAgc2hvcElkOiByb3V0ZXIucXVlcnkuc2hvcGlkWzFdLFxuICAgICAgICBzaG9wTmFtZTogcm91dGVyLnF1ZXJ5LnNob3BpZFswXSxcbiAgICAgIH0sXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgfSxcbiAgICB9KS50aGVuKChyZXMpID0+IHtcbiAgICAgIHNldFVzZXIodXNlci5maWx0ZXIoKFVTRVIpID0+IFVTRVIuaWQgIT09IHVzZXJJZCkpO1xuICAgICAgc2V0U3RhZmZMaXN0KFsuLi5zdGFmZkxpc3QsIHVzZXJJZF0pO1xuICAgICAgLy8gcm91dGVyLmJhY2soKVxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcl9fc3RhZmZ9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5ibG9ja19fc3RhZmZ9PlxuICAgICAgICAgIHt1c2VyLm1hcCgoVVNFUikgPT4ge1xuICAgICAgICAgICAgaWYgKHN0YWZmTGlzdC5pbmNsdWRlcyhVU0VSLmlkKSkge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17VVNFUi5pZH0gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRlbnRfX3N0YWZmfT5cbiAgICAgICAgICAgICAgICA8ZGl2PntVU0VSLmVtYWlsfTwvZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b25fX3N0YWZmfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBIaXJlKFVTRVIuaWQpO1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBISVJFXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxTdGFmZkxpc3Qgc3RhZmZMaXN0PXtzdGFmZkxpc3R9IGhpcmVVc2VyPXtoaXJlVXNlcn0gLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgTWFwU3RhdGVUb1Byb3BzID0gKHN0YXRlKSA9PiAoe1xuICB1c2VyOiBzdGF0ZS51c2VyLFxufSk7XG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KE1hcFN0YXRlVG9Qcm9wcykoc3RhZmZNYW5hZ2UpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/shop/staff/[...shopid].js\n");

/***/ }),

/***/ "./pages/shop/staff/staff.module.css":
/*!*******************************************!*\
  !*** ./pages/shop/staff/staff.module.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"container__staff\": \"staff_container__staff__3BQqX\",\n\t\"block__staff\": \"staff_block__staff__V1vdu\",\n\t\"content__staff\": \"staff_content__staff__3JeHp\",\n\t\"button__staff\": \"staff_button__staff__17Brr\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zaG9wL3N0YWZmL3N0YWZmLm1vZHVsZS5jc3M/ZDY2NyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3BhZ2VzL3Nob3Avc3RhZmYvc3RhZmYubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lcl9fc3RhZmZcIjogXCJzdGFmZl9jb250YWluZXJfX3N0YWZmX18zQlFxWFwiLFxuXHRcImJsb2NrX19zdGFmZlwiOiBcInN0YWZmX2Jsb2NrX19zdGFmZl9fVjF2ZHVcIixcblx0XCJjb250ZW50X19zdGFmZlwiOiBcInN0YWZmX2NvbnRlbnRfX3N0YWZmX18zSmVIcFwiLFxuXHRcImJ1dHRvbl9fc3RhZmZcIjogXCJzdGFmZl9idXR0b25fX3N0YWZmX18xN0JyclwiXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/shop/staff/staff.module.css\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiPzc4Y2QiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtcmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-redux\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });