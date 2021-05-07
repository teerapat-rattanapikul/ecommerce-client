webpackHotUpdate_N_E("pages/shop/product/all/[...shopid]",{

/***/ "./pages/shop/product/all/[...shopid].js":
/*!***********************************************!*\
  !*** ./pages/shop/product/all/[...shopid].js ***!
  \***********************************************/
/*! exports provided: __N_SSP, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__N_SSP\", function() { return __N_SSP; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _productlist_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./productlist.module.css */ \"./pages/shop/product/all/productlist.module.css\");\n/* harmony import */ var _productlist_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_productlist_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_ui_Loading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/ui/Loading */ \"./components/ui/Loading.js\");\n/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jwt-decode */ \"./node_modules/jwt-decode/build/jwt-decode.esm.js\");\n/* harmony import */ var _manage_shopid_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../manage/shopid.module.css */ \"./pages/shop/manage/shopid.module.css\");\n/* harmony import */ var _manage_shopid_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_manage_shopid_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _helppers_moneyFormat__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../helppers/moneyFormat */ \"./helppers/moneyFormat.js\");\n\n\nvar _jsxFileName = \"/Users/teerapat/Documents/project/ecommerce/client/pages/shop/product/all/[...shopid].js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nvar ProductList = function ProductList(props) {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])([]),\n      products = _useState[0],\n      setProducts = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      loading = _useState2[0],\n      setLoading = _useState2[1];\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    try {\n      var decoded = Object(jwt_decode__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(localStorage.getItem(\"token\"));\n\n      if (decoded.user.id !== props.data.id) {\n        alert(\"คุณไม่มีสิทธิ๋ในการเข้าถึง\");\n        router.replace(\"/login\");\n      } else {\n        setProducts(props.data);\n        setLoading(false);\n      }\n    } catch (error) {\n      if (error) {\n        alert(\"คุณไม่มีสิทธิ๋ในการเข้าถึง\");\n        router.replace(\"/login\");\n      }\n    }\n  }, []); // if (loading && router.query.shopid) {\n  //   const decoded = jwt_decode(router.query.shopid[0]);\n  //   const validToken = localStorage.getItem(\"token\");\n  //   if (validToken !== router.query.shopid[0]) {\n  //     console.log(validToken);\n  //     alert(\"คุณไม่มีสิทธิ๋ในการเข้าถึง\");\n  //     router.replace(\"/login\");\n  //   }\n  //   axios({\n  //     url: `http://localhost:8000/api/product/merChantGetAll`,\n  //     method: \"post\",\n  //     data: { shopId: router.query.shopid[1], userId: decoded.user.id },\n  //     headers: {\n  //       \"Content-Type\": \"application/json\",\n  //     },\n  //   }).then((res) => {\n  //     if (!res.data) {\n  //       alert(\"คุณไม่มีสิทธิ์ในการเข้าถึงข้อมูล\");\n  //       router.replace(\"/login\");\n  //     } else {\n  //       setProducts(res.data);\n  //       setLoading(false);\n  //     }\n  //   });\n  // }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"container\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n      className: _manage_shopid_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.back,\n      onClick: function onClick() {\n        router.back();\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h4\", {\n        children: \"< ย้อนกลับ\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 64,\n        columnNumber: 9\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 7\n    }, _this), loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_ui_Loading__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      loading: loading\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 9\n    }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _productlist_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.container__productlist,\n      children: [products.length === 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: _productlist_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.empty__productList,\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          src: \"/emptyProduct.svg\",\n          height: 120,\n          width: 120\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 72,\n          columnNumber: 15\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n          children: \"\\u0E44\\u0E21\\u0E48\\u0E21\\u0E35\\u0E2A\\u0E34\\u0E19\\u0E1C\\u0E25\\u0E34\\u0E15\\u0E20\\u0E31\\u0E13\\u0E11\\u0E4C\\u0E43\\u0E19\\u0E04\\u0E25\\u0E31\\u0E07\\u0E2A\\u0E34\\u0E19\\u0E04\\u0E49\\u0E32\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 73,\n          columnNumber: 15\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 71,\n        columnNumber: 13\n      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"table\", {\n        className: \"table table-striped\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"thead\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tr\", {\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"th\", {\n              scope: \"col\",\n              children: \"\\u0E0A\\u0E37\\u0E48\\u0E2D\\u0E2A\\u0E34\\u0E19\\u0E04\\u0E49\\u0E32\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 79,\n              columnNumber: 19\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"th\", {\n              scope: \"col\",\n              children: \"\\u0E23\\u0E32\\u0E04\\u0E32\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 80,\n              columnNumber: 19\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"th\", {\n              scope: \"col\",\n              children: \"\\u0E08\\u0E33\\u0E19\\u0E27\\u0E19\\u0E0A\\u0E34\\u0E49\\u0E19\\u0E17\\u0E35\\u0E48\\u0E40\\u0E2B\\u0E25\\u0E37\\u0E2D\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 81,\n              columnNumber: 19\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"th\", {\n              scope: \"col\",\n              children: \"\\u0E2A\\u0E16\\u0E32\\u0E19\\u0E30\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 82,\n              columnNumber: 19\n            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"th\", {\n              scope: \"col\",\n              children: \"\\u0E01\\u0E32\\u0E23\\u0E08\\u0E31\\u0E14\\u0E01\\u0E32\\u0E23\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 83,\n              columnNumber: 19\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 78,\n            columnNumber: 17\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 15\n        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tbody\", {\n          className: \"align-middle\",\n          children: products.map(function (product) {\n            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tr\", {\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n                children: product.name\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 89,\n                columnNumber: 21\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n                children: Object(_helppers_moneyFormat__WEBPACK_IMPORTED_MODULE_7__[\"numberWithCommas\"])(product.price)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 90,\n                columnNumber: 21\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n                children: Object(_helppers_moneyFormat__WEBPACK_IMPORTED_MODULE_7__[\"numberWithCommas\"])(product.amount)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 91,\n                columnNumber: 21\n              }, _this), product.status ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n                className: \"text-success\",\n                children: \"\\u0E27\\u0E32\\u0E07\\u0E08\\u0E33\\u0E2B\\u0E19\\u0E48\\u0E32\\u0E22\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 93,\n                columnNumber: 23\n              }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n                className: \"text-danger\",\n                children: \"\\u0E22\\u0E31\\u0E07\\u0E44\\u0E21\\u0E48\\u0E44\\u0E14\\u0E49\\u0E27\\u0E32\\u0E07\\u0E08\\u0E33\\u0E2B\\u0E19\\u0E48\\u0E32\\u0E22\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 95,\n                columnNumber: 23\n              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", {\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n                  className: \"btn btn-outline-dark\",\n                  onClick: function onClick() {\n                    router.push({\n                      pathname: \"/shop/product/detail/\".concat(router.query.shopid[0], \"/\").concat(router.query.shopid[1], \"/\").concat(product.id)\n                    }, undefined, {\n                      scroll: false\n                    });\n                  },\n                  children: \"\\u0E14\\u0E39\\u0E23\\u0E32\\u0E22\\u0E25\\u0E30\\u0E40\\u0E2D\\u0E35\\u0E22\\u0E14\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 99,\n                  columnNumber: 23\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 98,\n                columnNumber: 21\n              }, _this)]\n            }, product.id, true, {\n              fileName: _jsxFileName,\n              lineNumber: 88,\n              columnNumber: 19\n            }, _this);\n          })\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 86,\n          columnNumber: 15\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 13\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n        className: \"btn btn-outline-secondary\" + \" \" + _productlist_module_css__WEBPACK_IMPORTED_MODULE_3___default.a.button__productList,\n        onClick: function onClick() {\n          router.push({\n            pathname: \"/shop/product/addProduct/\".concat(router.query.shopid[0], \"/\").concat(router.query.shopid[1])\n          }, undefined, {\n            scroll: false\n          });\n        },\n        children: \"\\u0E40\\u0E1E\\u0E34\\u0E48\\u0E21\\u0E2A\\u0E34\\u0E19\\u0E04\\u0E49\\u0E32\\u0E43\\u0E2B\\u0E21\\u0E48\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 120,\n        columnNumber: 11\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 9\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 57,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(ProductList, \"+ggWuHzT0swHqkQNkCh+jyMujqw=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"]];\n});\n\n_c = ProductList;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductList);\n\nvar _c;\n\n$RefreshReg$(_c, \"ProductList\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2hvcC9wcm9kdWN0L2FsbC9bLi4uc2hvcGlkXS5qcz84MWQyIl0sIm5hbWVzIjpbIlByb2R1Y3RMaXN0IiwicHJvcHMiLCJ1c2VTdGF0ZSIsInByb2R1Y3RzIiwic2V0UHJvZHVjdHMiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsImRlY29kZWQiLCJqd3RfZGVjb2RlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInVzZXIiLCJpZCIsImRhdGEiLCJhbGVydCIsInJlcGxhY2UiLCJlcnJvciIsImJhY2siLCJjbGFzc2VzIiwiY29udGFpbmVyX19wcm9kdWN0bGlzdCIsImxlbmd0aCIsImVtcHR5X19wcm9kdWN0TGlzdCIsIm1hcCIsInByb2R1Y3QiLCJuYW1lIiwibnVtYmVyV2l0aENvbW1hcyIsInByaWNlIiwiYW1vdW50Iiwic3RhdHVzIiwicHVzaCIsInBhdGhuYW1lIiwicXVlcnkiLCJzaG9waWQiLCJ1bmRlZmluZWQiLCJzY3JvbGwiLCJidXR0b25fX3Byb2R1Y3RMaXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxLQUFELEVBQVc7QUFBQTs7QUFBQSxrQkFDR0Msc0RBQVEsQ0FBQyxFQUFELENBRFg7QUFBQSxNQUN0QkMsUUFEc0I7QUFBQSxNQUNaQyxXQURZOztBQUFBLG1CQUVDRixzREFBUSxDQUFDLEtBQUQsQ0FGVDtBQUFBLE1BRXRCRyxPQUZzQjtBQUFBLE1BRWJDLFVBRmE7O0FBRzdCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFDQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSTtBQUNGLFVBQU1DLE9BQU8sR0FBR0MsMERBQVUsQ0FBQ0MsWUFBWSxDQUFDQyxPQUFiLENB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QXBCLENBQXhEO0FBRFYsV0FERixFQUlFQyxTQUpGLEVBS0U7QUFBRUMsa0JBQU0sRUFBRTtBQUFWLFdBTEY7QUFPRCxTQVpIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBbkRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBb0ZELENBbklEOztHQUFNckMsVztVQUdXUSxxRDs7O0tBSFhSLFc7O0FBcUpTQSwwRUFBZiIsImZpbGUiOiIuL3BhZ2VzL3Nob3AvcHJvZHVjdC9hbGwvWy4uLnNob3BpZF0uanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjbGFzc2VzIGZyb20gXCIuL3Byb2R1Y3RsaXN0Lm1vZHVsZS5jc3NcIjtcbmltcG9ydCBMb2FkaW5nIGZyb20gXCIuLi8uLi8uLi8uLi9jb21wb25lbnRzL3VpL0xvYWRpbmdcIjtcbmltcG9ydCBqd3RfZGVjb2RlIGZyb20gXCJqd3QtZGVjb2RlXCI7XG5pbXBvcnQgYmFjayBmcm9tIFwiLi4vLi4vbWFuYWdlL3Nob3BpZC5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyBudW1iZXJXaXRoQ29tbWFzIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2hlbHBwZXJzL21vbmV5Rm9ybWF0XCI7XG5jb25zdCBQcm9kdWN0TGlzdCA9IChwcm9wcykgPT4ge1xuICBjb25zdCBbcHJvZHVjdHMsIHNldFByb2R1Y3RzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZGVjb2RlZCA9IGp3dF9kZWNvZGUobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKSk7XG4gICAgICBpZiAoZGVjb2RlZC51c2VyLmlkICE9PSBwcm9wcy5kYXRhLmlkKSB7XG4gICAgICAgIGFsZXJ0KFwi4LiE4Li44LiT4LmE4Lih4LmI4Lih4Li14Liq4Li04LiX4LiY4Li04LmL4LmD4LiZ4LiB4Liy4Lij4LmA4LiC4LmJ4Liy4LiW4Li24LiHXCIpO1xuICAgICAgICByb3V0ZXIucmVwbGFjZShcIi9sb2dpblwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFByb2R1Y3RzKHByb3BzLmRhdGEpO1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIGFsZXJ0KFwi4LiE4Li44LiT4LmE4Lih4LmI4Lih4Li14Liq4Li04LiX4LiY4Li04LmL4LmD4LiZ4LiB4Liy4Lij4LmA4LiC4LmJ4Liy4LiW4Li24LiHXCIpO1xuICAgICAgICByb3V0ZXIucmVwbGFjZShcIi9sb2dpblwiKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtdKTtcbiAgLy8gaWYgKGxvYWRpbmcgJiYgcm91dGVyLnF1ZXJ5LnNob3BpZCkge1xuICAvLyAgIGNvbnN0IGRlY29kZWQgPSBqd3RfZGVjb2RlKHJvdXRlci5xdWVyeS5zaG9waWRbMF0pO1xuICAvLyAgIGNvbnN0IHZhbGlkVG9rZW4gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xuICAvLyAgIGlmICh2YWxpZFRva2VuICE9PSByb3V0ZXIucXVlcnkuc2hvcGlkWzBdKSB7XG4gIC8vICAgICBjb25zb2xlLmxvZyh2YWxpZFRva2VuKTtcbiAgLy8gICAgIGFsZXJ0KFwi4LiE4Li44LiT4LmE4Lih4LmI4Lih4Li14Liq4Li04LiX4LiY4Li04LmL4LmD4LiZ4LiB4Liy4Lij4LmA4LiC4LmJ4Liy4LiW4Li24LiHXCIpO1xuICAvLyAgICAgcm91dGVyLnJlcGxhY2UoXCIvbG9naW5cIik7XG4gIC8vICAgfVxuICAvLyAgIGF4aW9zKHtcbiAgLy8gICAgIHVybDogYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvcHJvZHVjdC9tZXJDaGFudEdldEFsbGAsXG4gIC8vICAgICBtZXRob2Q6IFwicG9zdFwiLFxuICAvLyAgICAgZGF0YTogeyBzaG9wSWQ6IHJvdXRlci5xdWVyeS5zaG9waWRbMV0sIHVzZXJJZDogZGVjb2RlZC51c2VyLmlkIH0sXG4gIC8vICAgICBoZWFkZXJzOiB7XG4gIC8vICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAvLyAgICAgfSxcbiAgLy8gICB9KS50aGVuKChyZXMpID0+IHtcbiAgLy8gICAgIGlmICghcmVzLmRhdGEpIHtcbiAgLy8gICAgICAgYWxlcnQoXCLguITguLjguJPguYTguKHguYjguKHguLXguKrguLTguJfguJjguLTguYzguYPguJnguIHguLLguKPguYDguILguYnguLLguJbguLbguIfguILguYnguK3guKHguLnguKVcIik7XG4gIC8vICAgICAgIHJvdXRlci5yZXBsYWNlKFwiL2xvZ2luXCIpO1xuICAvLyAgICAgfSBlbHNlIHtcbiAgLy8gICAgICAgc2V0UHJvZHVjdHMocmVzLmRhdGEpO1xuICAvLyAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgLy8gICAgIH1cbiAgLy8gICB9KTtcbiAgLy8gfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxhXG4gICAgICAgIGNsYXNzTmFtZT17YmFjay5iYWNrfVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgcm91dGVyLmJhY2soKTtcbiAgICAgICAgfX1cbiAgICAgID5cbiAgICAgICAgPGg0PntcIjwg4Lii4LmJ4Lit4LiZ4LiB4Lil4Lix4LiaXCJ9PC9oND5cbiAgICAgIDwvYT5cbiAgICAgIHtsb2FkaW5nID8gKFxuICAgICAgICA8TG9hZGluZyBsb2FkaW5nPXtsb2FkaW5nfSAvPlxuICAgICAgKSA6IChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyX19wcm9kdWN0bGlzdH0+XG4gICAgICAgICAge3Byb2R1Y3RzLmxlbmd0aCA9PT0gMCA/IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmVtcHR5X19wcm9kdWN0TGlzdH0+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2VtcHR5UHJvZHVjdC5zdmdcIiBoZWlnaHQ9ezEyMH0gd2lkdGg9ezEyMH0gLz5cbiAgICAgICAgICAgICAgPHNwYW4+4LmE4Lih4LmI4Lih4Li14Liq4Li04LiZ4Lic4Lil4Li04LiV4Lig4Lix4LiT4LiR4LmM4LmD4LiZ4LiE4Lil4Lix4LiH4Liq4Li04LiZ4LiE4LmJ4LiyPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1zdHJpcGVkXCI+XG4gICAgICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgICAgICA8dHI+XG4gICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj7guIrguLfguYjguK3guKrguLTguJnguITguYnguLI8L3RoPlxuICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+4Lij4Liy4LiE4LiyPC90aD5cbiAgICAgICAgICAgICAgICAgIDx0aCBzY29wZT1cImNvbFwiPuC4iOC4s+C4meC4p+C4meC4iuC4tOC5ieC4meC4l+C4teC5iOC5gOC4q+C4peC4t+C4rTwvdGg+XG4gICAgICAgICAgICAgICAgICA8dGggc2NvcGU9XCJjb2xcIj7guKrguJbguLLguJnguLA8L3RoPlxuICAgICAgICAgICAgICAgICAgPHRoIHNjb3BlPVwiY29sXCI+4LiB4Liy4Lij4LiI4Lix4LiU4LiB4Liy4LijPC90aD5cbiAgICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgICAgICA8dGJvZHkgY2xhc3NOYW1lPVwiYWxpZ24tbWlkZGxlXCI+XG4gICAgICAgICAgICAgICAge3Byb2R1Y3RzLm1hcCgocHJvZHVjdCkgPT4gKFxuICAgICAgICAgICAgICAgICAgPHRyIGtleT17cHJvZHVjdC5pZH0+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57cHJvZHVjdC5uYW1lfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIDx0ZD57bnVtYmVyV2l0aENvbW1hcyhwcm9kdWN0LnByaWNlKX08L3RkPlxuICAgICAgICAgICAgICAgICAgICA8dGQ+e251bWJlcldpdGhDb21tYXMocHJvZHVjdC5hbW91bnQpfTwvdGQ+XG4gICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0LnN0YXR1cyA/IChcbiAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1zdWNjZXNzXCI+4Lin4Liy4LiH4LiI4Liz4Lir4LiZ4LmI4Liy4LiiPC90ZD5cbiAgICAgICAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj7guKLguLHguIfguYTguKHguYjguYTguJTguYnguKfguLLguIfguIjguLPguKvguJnguYjguLLguKI8L3RkPlxuICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtZGFya1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBgL3Nob3AvcHJvZHVjdC9kZXRhaWwvJHtyb3V0ZXIucXVlcnkuc2hvcGlkWzBdfS8ke3JvdXRlci5xdWVyeS5zaG9waWRbMV19LyR7cHJvZHVjdC5pZH1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc2Nyb2xsOiBmYWxzZSB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIOC4lOC4ueC4o+C4suC4ouC4peC4sOC5gOC4reC4teC4ouC4lFxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgICAgICAgPC90cj5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgKX1cblxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT17XG4gICAgICAgICAgICAgIFwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeVwiICsgXCIgXCIgKyBjbGFzc2VzLmJ1dHRvbl9fcHJvZHVjdExpc3RcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgcm91dGVyLnB1c2goXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IGAvc2hvcC9wcm9kdWN0L2FkZFByb2R1Y3QvJHtyb3V0ZXIucXVlcnkuc2hvcGlkWzBdfS8ke3JvdXRlci5xdWVyeS5zaG9waWRbMV19YCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICB7IHNjcm9sbDogZmFsc2UgfVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICDguYDguJ7guLTguYjguKHguKrguLTguJnguITguYnguLLguYPguKvguKHguYhcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XG4gIGNvbnN0IHsgc2hvcGlkIH0gPSBjb250ZXh0LnF1ZXJ5O1xuICBjb25zb2xlLmxvZyhzaG9waWQpO1xuICBjb25zdCBkYXRhID0gYXdhaXQgYXhpb3Moe1xuICAgIHVybDogYGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGkvcHJvZHVjdC9tZXJDaGFudEdldEFsbGAsXG4gICAgbWV0aG9kOiBcInBvc3RcIixcbiAgICBkYXRhOiB7IHNob3BJZDogc2hvcGlkWzFdIH0sXG4gICAgaGVhZGVyczoge1xuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICBBdXRob3JpemF0aW9uOiBzaG9waWRbMF0sXG4gICAgfSxcbiAgfSk7XG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHsgZGF0YTogZGF0YS5kYXRhIH0sXG4gIH07XG59O1xuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdExpc3Q7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/shop/product/all/[...shopid].js\n");

/***/ })

})