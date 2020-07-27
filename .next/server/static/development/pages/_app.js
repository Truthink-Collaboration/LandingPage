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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./components/Shared/GoTop.js":
/*!************************************!*\
  !*** ./components/Shared/GoTop.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class GoTop extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "_isMounted", false);

    _defineProperty(this, "onScrollStep", () => {
      this._isMounted = true;

      if (window.pageYOffset === 0) {
        clearInterval(this.state.intervalId);
      }

      window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
    });

    _defineProperty(this, "scrollToTop", () => {
      this._isMounted = true;
      let intervalId = setInterval(this.onScrollStep, this.props.delayInMs);
      this.setState({
        intervalId: intervalId
      });
    });

    _defineProperty(this, "renderGoTopIcon", () => {
      if (this.state.thePosition) {
        return __jsx("div", {
          className: "back-to-top show-back-to-top",
          onClick: this.scrollToTop
        }, "TOP");
      }
    });

    this.state = {
      intervalId: 0,
      thePosition: false
    };
  }

  componentDidMount() {
    this._isMounted = true;
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        this.setState({
          thePosition: true
        });
      } else {
        this.setState({
          thePosition: false
        });
      }
    });
    window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, this.renderGoTopIcon());
  }

}

/* harmony default export */ __webpack_exports__["default"] = (GoTop);

/***/ }),

/***/ "./components/Shared/Loader.js":
/*!*************************************!*\
  !*** ./components/Shared/Loader.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

class Loader extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return __jsx("div", {
      className: "preloader-area"
    }, __jsx("div", {
      className: "lds-hourglass"
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Loader);

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps({
  Component,
  ctx
}) {
  const pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    const {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
let warnContainer;
let warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn(`Warning: the \`Container\` in \`_app\` has been deprecated and should be removed. https://err.sh/vercel/next.js/app-container-deprecated`);
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error(`Warning: the 'url' property is deprecated. https://err.sh/vercel/next.js/url-deprecated`);
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  const {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      const pushRoute = as ? href : '';
      const pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      const replaceRoute = as ? href : '';
      const replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/react-accessible-accordion/dist/fancy-example.css":
/*!************************************************************************!*\
  !*** ./node_modules/react-accessible-accordion/dist/fancy-example.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/react-image-lightbox/style.css":
/*!*****************************************************!*\
  !*** ./node_modules/react-image-lightbox/style.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/react-modal-video/scss/modal-video.scss":
/*!**************************************************************!*\
  !*** ./node_modules/react-modal-video/scss/modal-video.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/css/bootstrap.min.css */ "./public/css/bootstrap.min.css");
/* harmony import */ var _public_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_css_icofont_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/css/icofont.min.css */ "./public/css/icofont.min.css");
/* harmony import */ var _public_css_icofont_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_css_icofont_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _public_css_animate_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../public/css/animate.css */ "./public/css/animate.css");
/* harmony import */ var _public_css_animate_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_css_animate_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_react_modal_video_scss_modal_video_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../node_modules/react-modal-video/scss/modal-video.scss */ "./node_modules/react-modal-video/scss/modal-video.scss");
/* harmony import */ var _node_modules_react_modal_video_scss_modal_video_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_react_modal_video_scss_modal_video_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_image_lightbox_style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-image-lightbox/style.css */ "./node_modules/react-image-lightbox/style.css");
/* harmony import */ var react_image_lightbox_style_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_image_lightbox_style_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-accessible-accordion/dist/fancy-example.css */ "./node_modules/react-accessible-accordion/dist/fancy-example.css");
/* harmony import */ var react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_accessible_accordion_dist_fancy_example_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _public_css_style_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../public/css/style.css */ "./public/css/style.css");
/* harmony import */ var _public_css_style_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_public_css_style_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _public_css_responsive_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../public/css/responsive.css */ "./public/css/responsive.css");
/* harmony import */ var _public_css_responsive_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_public_css_responsive_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_preloading_screen__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-preloading-screen */ "react-preloading-screen");
/* harmony import */ var react_preloading_screen__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_preloading_screen__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _store_reducers_cartReducer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../store/reducers/cartReducer */ "./store/reducers/cartReducer.js");
/* harmony import */ var _components_Shared_GoTop__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/Shared/GoTop */ "./components/Shared/GoTop.js");
/* harmony import */ var _components_Shared_Loader__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/Shared/Loader */ "./components/Shared/Loader.js");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
















/* harmony default export */ __webpack_exports__["default"] = (next_redux_wrapper__WEBPACK_IMPORTED_MODULE_13___default()(_store_reducers_cartReducer__WEBPACK_IMPORTED_MODULE_14__["initStore"])(class MyApp extends next_app__WEBPACK_IMPORTED_MODULE_11___default.a {
  render() {
    const {
      Component,
      pageProps,
      store
    } = this.props;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_12___default.a, null, __jsx("title", null, "Truthink"), __jsx("meta", {
      name: "description",
      content: "Truthink - "
    }), __jsx("meta", {
      name: "og:title",
      property: "og:title",
      content: "Truthink - Debate App"
    }), __jsx("meta", {
      name: "twitter:card",
      content: "Truthink - Debate App"
    }), __jsx("link", {
      rel: "canonical",
      href: "https://www.truthink.org/"
    })), __jsx(react_preloading_screen__WEBPACK_IMPORTED_MODULE_10__["Preloader"], null, __jsx(react_redux__WEBPACK_IMPORTED_MODULE_9__["Provider"], {
      store: store
    }, __jsx(Component, pageProps)), __jsx(_components_Shared_GoTop__WEBPACK_IMPORTED_MODULE_15__["default"], {
      scrollStepInPx: "50",
      delayInMs: "16.66"
    }), __jsx(react_preloading_screen__WEBPACK_IMPORTED_MODULE_10__["Placeholder"], null, __jsx(_components_Shared_Loader__WEBPACK_IMPORTED_MODULE_16__["default"], null))));
  }

}));

/***/ }),

/***/ "./public/css/animate.css":
/*!********************************!*\
  !*** ./public/css/animate.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./public/css/bootstrap.min.css":
/*!**************************************!*\
  !*** ./public/css/bootstrap.min.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./public/css/icofont.min.css":
/*!************************************!*\
  !*** ./public/css/icofont.min.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./public/css/responsive.css":
/*!***********************************!*\
  !*** ./public/css/responsive.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./public/css/style.css":
/*!******************************!*\
  !*** ./public/css/style.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./store/actions/action-types/cart-actions.js":
/*!****************************************************!*\
  !*** ./store/actions/action-types/cart-actions.js ***!
  \****************************************************/
/*! exports provided: ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY, ADD_SHIPPING, ADD_QUANTITY_WITH_NUMBER, ORDER_FORM, CHECKOUT_CHARGE, RESET_CART */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TO_CART", function() { return ADD_TO_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_ITEM", function() { return REMOVE_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUB_QUANTITY", function() { return SUB_QUANTITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_QUANTITY", function() { return ADD_QUANTITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_SHIPPING", function() { return ADD_SHIPPING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_QUANTITY_WITH_NUMBER", function() { return ADD_QUANTITY_WITH_NUMBER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ORDER_FORM", function() { return ORDER_FORM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHECKOUT_CHARGE", function() { return CHECKOUT_CHARGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESET_CART", function() { return RESET_CART; });
//Types should be in const to avoid typos and duplication since it's a string and could be easily miss spelled
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_ITEM = 'REMOVE_ITEM';
const SUB_QUANTITY = 'SUB_QUANTITY';
const ADD_QUANTITY = 'ADD_QUANTITY';
const ADD_SHIPPING = 'ADD_SHIPPING';
const ADD_QUANTITY_WITH_NUMBER = 'ADD_QUANTITY_WITH_NUMBER';
const ORDER_FORM = 'ORDER_FORM';
const CHECKOUT_CHARGE = 'CHECKOUT_CHARGE';
const RESET_CART = 'RESET_CART';

/***/ }),

/***/ "./store/reducers/cartReducer.js":
/*!***************************************!*\
  !*** ./store/reducers/cartReducer.js ***!
  \***************************************/
/*! exports provided: initStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initStore", function() { return initStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/action-types/cart-actions */ "./store/actions/action-types/cart-actions.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const initState = {
  products: [{
    id: 1,
    title: "Drop Side Watch",
    price: 350,
    image: "/images/shop-item1.jpg"
  }, {
    id: 2,
    title: "Drop Side Watch",
    price: 120,
    image: "/images/shop-item2.jpg"
  }, {
    id: 3,
    title: "Drop Side Watch",
    price: 160,
    image: "/images/shop-item3.jpg"
  }, {
    id: 4,
    title: "Drop Side Watch",
    price: 130,
    image: "/images/shop-item4.jpg"
  }, {
    id: 5,
    title: "Drop Side Watch",
    price: 90,
    image: "/images/shop-item5.jpg"
  }, {
    id: 6,
    title: "Drop Side Watch",
    price: 180,
    image: "/images/shop-item6.jpg"
  }, {
    id: 7,
    title: "Drop Side Watch",
    price: 330,
    image: "/images/shop-item1.jpg"
  }, {
    id: 8,
    title: "Drop Side Watch",
    price: 140,
    image: "/images/shop-item2.jpg"
  }, {
    id: 9,
    title: "Drop Side Watch",
    price: 430,
    image: "/images/shop-item3.jpg"
  }, {
    id: 10,
    title: "Drop Side Watch",
    price: 650,
    image: "/images/shop-item4.jpg"
  }, {
    id: 11,
    title: "Drop Side Watch",
    price: 230,
    image: "/images/shop-item5.jpg"
  }, {
    id: 12,
    title: "Drop Side Watch",
    price: 670,
    image: "/images/shop-item6.jpg"
  }],
  addedItems: [],
  total: 0,
  shipping: 0
};

const cartReducer = (state = initState, action) => {
  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_3__["ADD_TO_CART"]) {
    let addedItem = state.products.find(item => item.id === action.id); //check if the action id exists in the addedItems

    let existed_item = state.addedItems.find(item => action.id === item.id);

    if (existed_item) {
      addedItem.quantity += 1;
      return _objectSpread(_objectSpread({}, state), {}, {
        total: state.total + addedItem.price
      });
    } else {
      addedItem.quantity = 1; //calculating the total

      let newTotal = state.total + addedItem.price;
      return _objectSpread(_objectSpread({}, state), {}, {
        addedItems: [...state.addedItems, addedItem],
        total: newTotal
      });
    }
  }

  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_3__["ADD_QUANTITY_WITH_NUMBER"]) {
    let addedItem = state.products.find(item => item.id === action.id); //check if the action id exists in the addedItems

    let existed_item = state.addedItems.find(item => action.id === item.id);

    if (existed_item) {
      addedItem.quantity += action.qty;
      return _objectSpread(_objectSpread({}, state), {}, {
        total: state.total + addedItem.price * action.qty
      });
    } else {
      addedItem.quantity = action.qty; //calculating the total

      let newTotal = state.total + addedItem.price * action.qty;
      return _objectSpread(_objectSpread({}, state), {}, {
        addedItems: [...state.addedItems, addedItem],
        total: newTotal
      });
    }
  }

  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_3__["REMOVE_ITEM"]) {
    let itemToRemove = state.addedItems.find(item => action.id === item.id);
    let new_items = state.addedItems.filter(item => action.id !== item.id); //calculating the total

    let newTotal = state.total - itemToRemove.price * itemToRemove.quantity;
    return _objectSpread(_objectSpread({}, state), {}, {
      addedItems: new_items,
      total: newTotal
    });
  }

  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_3__["ADD_QUANTITY"]) {
    let addedItem = state.products.find(item => item.id === action.id);
    addedItem.quantity += 1;
    let newTotal = state.total + addedItem.price;
    return _objectSpread(_objectSpread({}, state), {}, {
      total: newTotal
    });
  }

  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_3__["SUB_QUANTITY"]) {
    let addedItem = state.products.find(item => item.id === action.id); //if the qt == 0 then it should be removed

    if (addedItem.quantity === 1) {
      let new_items = state.addedItems.filter(item => item.id !== action.id);
      let newTotal = state.total - addedItem.price;
      return _objectSpread(_objectSpread({}, state), {}, {
        addedItems: new_items,
        total: newTotal
      });
    } else {
      addedItem.quantity -= 1;
      let newTotal = state.total - addedItem.price;
      return _objectSpread(_objectSpread({}, state), {}, {
        total: newTotal
      });
    }
  }

  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_3__["ADD_SHIPPING"]) {
    return _objectSpread(_objectSpread({}, state), {}, {
      shipping: state.shipping += 6
    });
  }

  if (action.type === 'SUB_SHIPPING') {
    return _objectSpread(_objectSpread({}, state), {}, {
      shipping: state.shipping -= 6
    });
  }

  if (action.type === _actions_action_types_cart_actions__WEBPACK_IMPORTED_MODULE_3__["RESET_CART"]) {
    return _objectSpread(_objectSpread({}, state), {}, {
      addedItems: [],
      total: 0,
      shipping: 0
    });
  } else {
    return state;
  }
};

const initStore = (initialState = initState) => {
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(cartReducer, initialState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_2___default.a)));
};

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-preloading-screen":
/*!******************************************!*\
  !*** external "react-preloading-screen" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-preloading-screen");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2hhcmVkL0dvVG9wLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvU2hhcmVkL0xvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL3BhZ2VzL19hcHAudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovLy8uL3N0b3JlL2FjdGlvbnMvYWN0aW9uLXR5cGVzL2NhcnQtYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9zdG9yZS9yZWR1Y2Vycy9jYXJ0UmVkdWNlci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXByZWxvYWRpbmctc2NyZWVuXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVkdXhcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlZHV4LXRodW5rXCIiXSwibmFtZXMiOlsiR29Ub3AiLCJSZWFjdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJfaXNNb3VudGVkIiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJjbGVhckludGVydmFsIiwic3RhdGUiLCJpbnRlcnZhbElkIiwic2Nyb2xsIiwic2Nyb2xsU3RlcEluUHgiLCJzZXRJbnRlcnZhbCIsIm9uU2Nyb2xsU3RlcCIsImRlbGF5SW5NcyIsInNldFN0YXRlIiwidGhlUG9zaXRpb24iLCJzY3JvbGxUb1RvcCIsImNvbXBvbmVudERpZE1vdW50IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwic2Nyb2xsWSIsInNjcm9sbFRvIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJyZW5kZXIiLCJyZW5kZXJHb1RvcEljb24iLCJMb2FkZXIiLCJwYWdlUHJvcHMiLCJjb21wb25lbnREaWRDYXRjaCIsIl9fTl9TU0ciLCJ1cmwiLCJjcmVhdGVVcmwiLCJBcHAiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwiYXBwR2V0SW5pdGlhbFByb3BzIiwiZ2V0SW5pdGlhbFByb3BzIiwid2FybkNvbnRhaW5lciIsImNvbnNvbGUiLCJ3YXJuVXJsIiwicCIsImJhY2siLCJyb3V0ZXIiLCJwdXNoIiwicHVzaFRvIiwicHVzaFJvdXRlIiwiYXMiLCJwdXNoVXJsIiwicmVwbGFjZSIsInJlcGxhY2VUbyIsInJlcGxhY2VSb3V0ZSIsInJlcGxhY2VVcmwiLCJ3aXRoUmVkdXgiLCJpbml0U3RvcmUiLCJNeUFwcCIsInN0b3JlIiwiQUREX1RPX0NBUlQiLCJSRU1PVkVfSVRFTSIsIlNVQl9RVUFOVElUWSIsIkFERF9RVUFOVElUWSIsIkFERF9TSElQUElORyIsIkFERF9RVUFOVElUWV9XSVRIX05VTUJFUiIsIk9SREVSX0ZPUk0iLCJDSEVDS09VVF9DSEFSR0UiLCJSRVNFVF9DQVJUIiwiaW5pdFN0YXRlIiwicHJvZHVjdHMiLCJpZCIsInRpdGxlIiwicHJpY2UiLCJpbWFnZSIsImFkZGVkSXRlbXMiLCJ0b3RhbCIsInNoaXBwaW5nIiwiY2FydFJlZHVjZXIiLCJhY3Rpb24iLCJ0eXBlIiwiYWRkZWRJdGVtIiwiZmluZCIsIml0ZW0iLCJleGlzdGVkX2l0ZW0iLCJxdWFudGl0eSIsIm5ld1RvdGFsIiwicXR5IiwiaXRlbVRvUmVtb3ZlIiwibmV3X2l0ZW1zIiwiZmlsdGVyIiwiaW5pdGlhbFN0YXRlIiwiY3JlYXRlU3RvcmUiLCJjb21wb3NlV2l0aERldlRvb2xzIiwiYXBwbHlNaWRkbGV3YXJlIiwidGh1bmtNaWRkbGV3YXJlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUN4RkEsK0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUEsTUFBTUEsS0FBTixTQUFvQkMsNENBQUssQ0FBQ0MsU0FBMUIsQ0FBb0M7QUFFaENDLGFBQVcsQ0FBQ0MsS0FBRCxFQUFRO0FBQ2YsVUFBTUEsS0FBTjs7QUFEZSx3Q0FETixLQUNNOztBQUFBLDBDQW9CSixNQUFNO0FBQ2pCLFdBQUtDLFVBQUwsR0FBa0IsSUFBbEI7O0FBQ0EsVUFBSUMsTUFBTSxDQUFD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TixHQUFjSyxTQUFTLENBQUNSLEtBQXZDO0FBQ0EsNkNBQ081RCxLQURQO0FBRUkrRCxhQUFLLEVBQUVVO0FBRlg7QUFJSDtBQUVKOztBQUVELE1BQUdQLE1BQU0sQ0FBQ0MsSUFBUCxLQUFnQmhCLCtFQUFuQixFQUFnQztBQUM1QiwyQ0FDT25ELEtBRFA7QUFFSWdFLGNBQVEsRUFBRWhFLEtBQUssQ0FBQ2dFLFFBQU4sSUFBa0I7QUFGaEM7QUFJSDs7QUFFRCxNQUFHRSxNQUFNLENBQUNDLElBQVAsS0FBZ0IsY0FBbkIsRUFBa0M7QUFDOUIsMkNBQ09uRSxLQURQO0FBRUlnRSxjQUFRLEVBQUVoRSxLQUFLLENBQUNnRSxRQUFOLElBQWtCO0FBRmhDO0FBSUg7O0FBRUQsTUFBR0UsTUFBTSxDQUFDQyxJQUFQLEtBQWdCWiw2RUFBbkIsRUFBOEI7QUFDMUIsMkNBQ092RCxLQURQO0FBRUk4RCxnQkFBVSxFQUFFLEVBRmhCO0FBR0lDLFdBQUssRUFBRSxDQUhYO0FBSUlDLGNBQVEsRUFBRTtBQUpkO0FBTUgsR0FQRCxNQVNLO0FBQ0QsV0FBT2hFLEtBQVA7QUFDSDtBQUNKLENBN0hEOztBQStITyxNQUFNNEMsU0FBUyxHQUFHLENBQUNrQyxZQUFZLEdBQUd0QixTQUFoQixLQUE4QjtBQUNuRCxTQUFPdUIseURBQVcsQ0FDZGQsV0FEYyxFQUVkYSxZQUZjLEVBR2RFLG9GQUFtQixDQUFDQyw2REFBZSxDQUFDQyxrREFBRCxDQUFoQixDQUhMLENBQWxCO0FBS0gsQ0FOTSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdOUCwrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxvRDs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxRDs7Ozs7Ozs7Ozs7QUNBQSx3QyIsImZpbGUiOiJzdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIik7IiwiY2xhc3MgR29Ub3AgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gICAgX2lzTW91bnRlZCA9IGZhbHNlO1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgaW50ZXJ2YWxJZDogMCxcclxuICAgICAgICAgICAgdGhlUG9zaXRpb246IGZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgICB0aGlzLl9pc01vdW50ZWQgPSB0cnVlO1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAod2luZG93LnNjcm9sbFkgPiAxNzApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB0aGVQb3NpdGlvbjogdHJ1ZSB9KVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHRoZVBvc2l0aW9uOiBmYWxzZSB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBvblNjcm9sbFN0ZXAgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5faXNNb3VudGVkID0gdHJ1ZTtcclxuICAgICAgICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0ID09PSAwKXtcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnN0YXRlLmludGVydmFsSWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB3aW5kb3cuc2Nyb2xsKDAsIHdpbmRvdy5wYWdlWU9mZnNldCAtIHRoaXMucHJvcHMuc2Nyb2xsU3RlcEluUHgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNjcm9sbFRvVG9wID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuX2lzTW91bnRlZCA9IHRydWU7XHJcbiAgICAgICAgbGV0IGludGVydmFsSWQgPSBzZXRJbnRlcnZhbCh0aGlzLm9uU2Nyb2xsU3RlcCwgdGhpcy5wcm9wcy5kZWxheUluTXMpO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpbnRlcnZhbElkOiBpbnRlcnZhbElkIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgICAgIHRoaXMuX2lzTW91bnRlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckdvVG9wSWNvbiA9ICgpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5zdGF0ZS50aGVQb3NpdGlvbil7XHJcbiAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJhY2stdG8tdG9wIHNob3ctYmFjay10by10b3BcIiBvbkNsaWNrPXt0aGlzLnNjcm9sbFRvVG9wfT5cclxuICAgICAgICAgICAgICAgICAgICBUT1BcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckdvVG9wSWNvbigpfVxyXG4gICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgR29Ub3A7IiwiY2xhc3MgTG9hZGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJlbG9hZGVyLWFyZWFcIj5cclxuXHRcdFx0ICAgIDxkaXYgY2xhc3NOYW1lPVwibGRzLWhvdXJnbGFzc1wiPjwvZGl2PlxyXG5cdFx0ICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuIFxyXG5leHBvcnQgZGVmYXVsdCBMb2FkZXI7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvcGFnZXMvX2FwcCcpXG4iLCJpbXBvcnQgUmVhY3QsIHsgRXJyb3JJbmZvIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQge1xuICBleGVjT25jZSxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICcuLi9jbGllbnQvcm91dGVyJ1xuXG5leHBvcnQgeyBBcHBJbml0aWFsUHJvcHMgfVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0ID0gQXBwQ29udGV4dFR5cGU8Um91dGVyPlxuXG5leHBvcnQgdHlwZSBBcHBQcm9wczxQID0ge30+ID0gQXBwUHJvcHNUeXBlPFJvdXRlciwgUD5cblxuLyoqXG4gKiBgQXBwYCBjb21wb25lbnQgaXMgdXNlZCBmb3IgaW5pdGlhbGl6ZSBvZiBwYWdlcy4gSXQgYWxsb3dzIGZvciBvdmVyd3JpdGluZyBhbmQgZnVsbCBjb250cm9sIG9mIHRoZSBgcGFnZWAgaW5pdGlhbGl6YXRpb24uXG4gKiBUaGlzIGFsbG93cyBmb3Iga2VlcGluZyBzdGF0ZSBiZXR3ZWVuIG5hdmlnYXRpb24sIGN1c3RvbSBlcnJvciBoYW5kbGluZywgaW5qZWN0aW5nIGFkZGl0aW9uYWwgZGF0YS5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gYXBwR2V0SW5pdGlhbFByb3BzKHtcbiAgQ29tcG9uZW50LFxuICBjdHgsXG59OiBBcHBDb250ZXh0KTogUHJvbWlzZTxBcHBJbml0aWFsUHJvcHM+IHtcbiAgY29uc3QgcGFnZVByb3BzID0gYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIGN0eClcbiAgcmV0dXJuIHsgcGFnZVByb3BzIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwPFAgPSB7fSwgQ1AgPSB7fSwgUyA9IHt9PiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxcbiAgUCAmIEFwcFByb3BzPENQPixcbiAgU1xuPiB7XG4gIHN0YXRpYyBvcmlnR2V0SW5pdGlhbFByb3BzID0gYXBwR2V0SW5pdGlhbFByb3BzXG4gIHN0YXRpYyBnZXRJbml0aWFsUHJvcHMgPSBhcHBHZXRJbml0aWFsUHJvcHNcblxuICAvLyBLZXB0IGhlcmUgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5LlxuICAvLyBXaGVuIHNvbWVvbmUgZW5kZWQgQXBwIHRoZXkgY291bGQgY2FsbCBgc3VwZXIuY29tcG9uZW50RGlkQ2F0Y2hgLlxuICAvLyBAZGVwcmVjYXRlZCBUaGlzIG1ldGhvZCBpcyBubyBsb25nZXIgbmVlZGVkLiBFcnJvcnMgYXJlIGNhdWdodCBhdCB0aGUgdG9wIGxldmVsXG4gIGNvbXBvbmVudERpZENhdGNoKGVycm9yOiBFcnJvciwgX2Vycm9ySW5mbzogRXJyb3JJbmZvKTogdm9pZCB7XG4gICAgdGhyb3cgZXJyb3JcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHJvdXRlciwgQ29tcG9uZW50LCBwYWdlUHJvcHMsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHRoaXNcbiAgICAgIC5wcm9wcyBhcyBBcHBQcm9wczxDUD5cblxuICAgIHJldHVybiAoXG4gICAgICA8Q29tcG9uZW50XG4gICAgICAgIHsuLi5wYWdlUHJvcHN9XG4gICAgICAgIHtcbiAgICAgICAgICAvLyB3ZSBkb24ndCBhZGQgdGhlIGxlZ2FjeSBVUkwgcHJvcCBpZiBpdCdzIHVzaW5nIG5vbi1sZWdhY3lcbiAgICAgICAgICAvLyBtZXRob2RzIGxpa2UgZ2V0U3RhdGljUHJvcHMgYW5kIGdldFNlcnZlclNpZGVQcm9wc1xuICAgICAgICAgIC4uLighKF9fTl9TU0cgfHwgX19OX1NTUCkgPyB7IHVybDogY3JlYXRlVXJsKHJvdXRlcikgfSA6IHt9KVxuICAgICAgICB9XG4gICAgICAvPlxuICAgIClcbiAgfVxufVxuXG5sZXQgd2FybkNvbnRhaW5lcjogKCkgPT4gdm9pZFxubGV0IHdhcm5Vcmw6ICgpID0+IHZvaWRcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgd2FybkNvbnRhaW5lciA9IGV4ZWNPbmNlKCgpID0+IHtcbiAgICBjb25zb2xlLndhcm4oXG4gICAgICBgV2FybmluZzogdGhlIFxcYENvbnRhaW5lclxcYCBpbiBcXGBfYXBwXFxgIGhhcyBiZWVuIGRlcHJlY2F0ZWQgYW5kIHNob3VsZCBiZSByZW1vdmVkLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9hcHAtY29udGFpbmVyLWRlcHJlY2F0ZWRgXG4gICAgKVxuICB9KVxuXG4gIHdhcm5VcmwgPSBleGVjT25jZSgoKSA9PiB7XG4gICAgY29uc29sZS5lcnJvcihcbiAgICAgIGBXYXJuaW5nOiB0aGUgJ3VybCcgcHJvcGVydHkgaXMgZGVwcmVjYXRlZC4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvdXJsLWRlcHJlY2F0ZWRgXG4gICAgKVxuICB9KVxufVxuXG4vLyBAZGVwcmVjYXRlZCBub29wIGZvciBub3cgdW50aWwgcmVtb3ZhbFxuZXhwb3J0IGZ1bmN0aW9uIENvbnRhaW5lcihwOiBhbnkpIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5Db250YWluZXIoKVxuICByZXR1cm4gcC5jaGlsZHJlblxufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVXJsKHJvdXRlcjogUm91dGVyKSB7XG4gIC8vIFRoaXMgaXMgdG8gbWFrZSBzdXJlIHdlIGRvbid0IHJlZmVyZW5jZXMgdGhlIHJvdXRlciBvYmplY3QgYXQgY2FsbCB0aW1lXG4gIGNvbnN0IHsgcGF0aG5hbWUsIGFzUGF0aCwgcXVlcnkgfSA9IHJvdXRlclxuICByZXR1cm4ge1xuICAgIGdldCBxdWVyeSgpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiBxdWVyeVxuICAgIH0sXG4gICAgZ2V0IHBhdGhuYW1lKCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIHBhdGhuYW1lXG4gICAgfSxcbiAgICBnZXQgYXNQYXRoKCkge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIGFzUGF0aFxuICAgIH0sXG4gICAgYmFjazogKCkgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcm91dGVyLmJhY2soKVxuICAgIH0sXG4gICAgcHVzaDogKHVybDogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKHVybCwgYXMpXG4gICAgfSxcbiAgICBwdXNoVG86IChocmVmOiBzdHJpbmcsIGFzPzogc3RyaW5nKSA9PiB7XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykgd2FyblVybCgpXG4gICAgICBjb25zdCBwdXNoUm91dGUgPSBhcyA/IGhyZWYgOiAnJ1xuICAgICAgY29uc3QgcHVzaFVybCA9IGFzIHx8IGhyZWZcblxuICAgICAgcmV0dXJuIHJvdXRlci5wdXNoKHB1c2hSb3V0ZSwgcHVzaFVybClcbiAgICB9LFxuICAgIHJlcGxhY2U6ICh1cmw6IHN0cmluZywgYXM/OiBzdHJpbmcpID0+IHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB3YXJuVXJsKClcbiAgICAgIHJldHVybiByb3V0ZXIucmVwbGFjZSh1cmwsIGFzKVxuICAgIH0sXG4gICAgcmVwbGFjZVRvOiAoaHJlZjogc3RyaW5nLCBhcz86IHN0cmluZykgPT4ge1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHdhcm5VcmwoKVxuICAgICAgY29uc3QgcmVwbGFjZVJvdXRlID0gYXMgPyBocmVmIDogJydcbiAgICAgIGNvbnN0IHJlcGxhY2VVcmwgPSBhcyB8fCBocmVmXG5cbiAgICAgIHJldHVybiByb3V0ZXIucmVwbGFjZShyZXBsYWNlUm91dGUsIHJlcGxhY2VVcmwpXG4gICAgfSxcbiAgfVxufVxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJpbXBvcnQgJy4uL3B1YmxpYy9jc3MvYm9vdHN0cmFwLm1pbi5jc3MnO1xyXG5pbXBvcnQgJy4uL3B1YmxpYy9jc3MvaWNvZm9udC5taW4uY3NzJztcclxuaW1wb3J0ICcuLi9wdWJsaWMvY3NzL2FuaW1hdGUuY3NzJztcclxuaW1wb3J0ICcuLi9ub2RlX21vZHVsZXMvcmVhY3QtbW9kYWwtdmlkZW8vc2Nzcy9tb2RhbC12aWRlby5zY3NzJztcclxuaW1wb3J0ICdyZWFjdC1pbWFnZS1saWdodGJveC9zdHlsZS5jc3MnO1xyXG5pbXBvcnQgJ3JlYWN0LWFjY2Vzc2libGUtYWNjb3JkaW9uL2Rpc3QvZmFuY3ktZXhhbXBsZS5jc3MnO1xyXG5pbXBvcnQgJy4uL3B1YmxpYy9jc3Mvc3R5bGUuY3NzJztcclxuaW1wb3J0ICcuLi9wdWJsaWMvY3NzL3Jlc3BvbnNpdmUuY3NzJztcclxuXHJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xyXG5pbXBvcnQgeyBQcmVsb2FkZXIsIFBsYWNlaG9sZGVyIH0gZnJvbSAncmVhY3QtcHJlbG9hZGluZy1zY3JlZW4nO1xyXG5pbXBvcnQgQXBwIGZyb20gJ25leHQvYXBwJztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuaW1wb3J0IHdpdGhSZWR1eCBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xyXG5pbXBvcnQgeyBpbml0U3RvcmUgfSBmcm9tICcuLi9zdG9yZS9yZWR1Y2Vycy9jYXJ0UmVkdWNlcic7XHJcblxyXG5pbXBvcnQgR29Ub3AgZnJvbSAnLi4vY29tcG9uZW50cy9TaGFyZWQvR29Ub3AnO1xyXG5pbXBvcnQgTG9hZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvU2hhcmVkL0xvYWRlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUmVkdXgoaW5pdFN0b3JlKShcclxuICBjbGFzcyBNeUFwcCBleHRlbmRzIEFwcCB7XHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMsIHN0b3JlIH0gPSB0aGlzLnByb3BzO1xyXG5cclxuICAgICAgcmV0dXJuIChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgPHRpdGxlPlRydXRoaW5rPC90aXRsZT5cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT0nZGVzY3JpcHRpb24nIGNvbnRlbnQ9J1RydXRoaW5rIC0gJyAvPlxyXG4gICAgICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgICAgIG5hbWU9J29nOnRpdGxlJ1xyXG4gICAgICAgICAgICAgIHByb3BlcnR5PSdvZzp0aXRsZSdcclxuICAgICAgICAgICAgICBjb250ZW50PSdUcnV0aGluayAtIERlYmF0ZSBBcHAnXHJcbiAgICAgICAgICAgID48L21ldGE+XHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9J3R3aXR0ZXI6Y2FyZCcgY29udGVudD0nVHJ1dGhpbmsgLSBEZWJhdGUgQXBwJz48L21ldGE+XHJcbiAgICAgICAgICAgIDxsaW5rIHJlbD0nY2Fub25pY2FsJyBocmVmPSdodHRwczovL3d3dy50cnV0aGluay5vcmcvJz48L2xpbms+XHJcbiAgICAgICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICAgICAgPFByZWxvYWRlcj5cclxuICAgICAgICAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XHJcbiAgICAgICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgICAgICAgICA8L1Byb3ZpZGVyPlxyXG5cclxuICAgICAgICAgICAgPEdvVG9wIHNjcm9sbFN0ZXBJblB4PSc1MCcgZGVsYXlJbk1zPScxNi42NicgLz5cclxuXHJcbiAgICAgICAgICAgIDxQbGFjZWhvbGRlcj5cclxuICAgICAgICAgICAgICA8TG9hZGVyIC8+XHJcbiAgICAgICAgICAgIDwvUGxhY2Vob2xkZXI+XHJcbiAgICAgICAgICA8L1ByZWxvYWRlcj5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gIH1cclxuKTtcclxuIiwiLy9UeXBlcyBzaG91bGQgYmUgaW4gY29uc3QgdG8gYXZvaWQgdHlwb3MgYW5kIGR1cGxpY2F0aW9uIHNpbmNlIGl0J3MgYSBzdHJpbmcgYW5kIGNvdWxkIGJlIGVhc2lseSBtaXNzIHNwZWxsZWRcclxuZXhwb3J0IGNvbnN0IEFERF9UT19DQVJUID0gJ0FERF9UT19DQVJUJztcclxuZXhwb3J0IGNvbnN0IFJFTU9WRV9JVEVNID0gJ1JFTU9WRV9JVEVNJztcclxuZXhwb3J0IGNvbnN0IFNVQl9RVUFOVElUWSA9ICdTVUJfUVVBTlRJVFknO1xyXG5leHBvcnQgY29uc3QgQUREX1FVQU5USVRZID0gJ0FERF9RVUFOVElUWSc7XHJcbmV4cG9ydCBjb25zdCBBRERfU0hJUFBJTkcgPSAnQUREX1NISVBQSU5HJztcclxuZXhwb3J0IGNvbnN0IEFERF9RVUFOVElUWV9XSVRIX05VTUJFUiA9ICdBRERfUVVBTlRJVFlfV0lUSF9OVU1CRVInO1xyXG5leHBvcnQgY29uc3QgT1JERVJfRk9STSA9ICdPUkRFUl9GT1JNJztcclxuZXhwb3J0IGNvbnN0IENIRUNLT1VUX0NIQVJHRSA9ICdDSEVDS09VVF9DSEFSR0UnO1xyXG5leHBvcnQgY29uc3QgUkVTRVRfQ0FSVCA9ICdSRVNFVF9DQVJUJzsiLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnO1xyXG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJztcclxuaW1wb3J0IHRodW5rTWlkZGxld2FyZSBmcm9tICdyZWR1eC10aHVuayc7XHJcblxyXG5pbXBvcnQgeyBcclxuICAgIEFERF9UT19DQVJULFxyXG4gICAgUkVNT1ZFX0lURU0sXHJcbiAgICBTVUJfUVVBTlRJVFksXHJcbiAgICBBRERfUVVBTlRJVFksIFxyXG4gICAgQUREX1NISVBQSU5HLFxyXG4gICAgQUREX1FVQU5USVRZX1dJVEhfTlVNQkVSLFxyXG4gICAgUkVTRVRfQ0FSVFxyXG59IGZyb20gJy4uL2FjdGlvbnMvYWN0aW9uLXR5cGVzL2NhcnQtYWN0aW9ucydcclxuXHJcbmNvbnN0IGluaXRTdGF0ZSA9IHtcclxuICAgIHByb2R1Y3RzOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogMSxcclxuICAgICAgICAgICAgdGl0bGU6IFwiRHJvcCBTaWRlIFdhdGNoXCIsXHJcbiAgICAgICAgICAgIHByaWNlOiAzNTAsXHJcbiAgICAgICAgICAgIGltYWdlOiBcIi9pbWFnZXMvc2hvcC1pdGVtMS5qcGdcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogMixcclxuICAgICAgICAgICAgdGl0bGU6IFwiRHJvcCBTaWRlIFdhdGNoXCIsXHJcbiAgICAgICAgICAgIHByaWNlOiAxMjAsXHJcbiAgICAgICAgICAgIGltYWdlOiBcIi9pbWFnZXMvc2hvcC1pdGVtMi5qcGdcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogMyxcclxuICAgICAgICAgICAgdGl0bGU6IFwiRHJvcCBTaWRlIFdhdGNoXCIsXHJcbiAgICAgICAgICAgIHByaWNlOiAxNjAsXHJcbiAgICAgICAgICAgIGltYWdlOiBcIi9pbWFnZXMvc2hvcC1pdGVtMy5qcGdcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogNCxcclxuICAgICAgICAgICAgdGl0bGU6IFwiRHJvcCBTaWRlIFdhdGNoXCIsXHJcbiAgICAgICAgICAgIHByaWNlOiAxMzAsXHJcbiAgICAgICAgICAgIGltYWdlOiBcIi9pbWFnZXMvc2hvcC1pdGVtNC5qcGdcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogNSxcclxuICAgICAgICAgICAgdGl0bGU6IFwiRHJvcCBTaWRlIFdhdGNoXCIsXHJcbiAgICAgICAgICAgIHByaWNlOiA5MCxcclxuICAgICAgICAgICAgaW1hZ2U6IFwiL2ltYWdlcy9zaG9wLWl0ZW01LmpwZ1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiA2LFxyXG4gICAgICAgICAgICB0aXRsZTogXCJEcm9wIFNpZGUgV2F0Y2hcIixcclxuICAgICAgICAgICAgcHJpY2U6IDE4MCxcclxuICAgICAgICAgICAgaW1hZ2U6IFwiL2ltYWdlcy9zaG9wLWl0ZW02LmpwZ1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiA3LFxyXG4gICAgICAgICAgICB0aXRsZTogXCJEcm9wIFNpZGUgV2F0Y2hcIixcclxuICAgICAgICAgICAgcHJpY2U6IDMzMCxcclxuICAgICAgICAgICAgaW1hZ2U6IFwiL2ltYWdlcy9zaG9wLWl0ZW0xLmpwZ1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiA4LFxyXG4gICAgICAgICAgICB0aXRsZTogXCJEcm9wIFNpZGUgV2F0Y2hcIixcclxuICAgICAgICAgICAgcHJpY2U6IDE0MCxcclxuICAgICAgICAgICAgaW1hZ2U6IFwiL2ltYWdlcy9zaG9wLWl0ZW0yLmpwZ1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiA5LFxyXG4gICAgICAgICAgICB0aXRsZTogXCJEcm9wIFNpZGUgV2F0Y2hcIixcclxuICAgICAgICAgICAgcHJpY2U6IDQzMCxcclxuICAgICAgICAgICAgaW1hZ2U6IFwiL2ltYWdlcy9zaG9wLWl0ZW0zLmpwZ1wiXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkOiAxMCxcclxuICAgICAgICAgICAgdGl0bGU6IFwiRHJvcCBTaWRlIFdhdGNoXCIsXHJcbiAgICAgICAgICAgIHByaWNlOiA2NTAsXHJcbiAgICAgICAgICAgIGltYWdlOiBcIi9pbWFnZXMvc2hvcC1pdGVtNC5qcGdcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZDogMTEsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkRyb3AgU2lkZSBXYXRjaFwiLFxyXG4gICAgICAgICAgICBwcmljZTogMjMwLFxyXG4gICAgICAgICAgICBpbWFnZTogXCIvaW1hZ2VzL3Nob3AtaXRlbTUuanBnXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWQ6IDEyLFxyXG4gICAgICAgICAgICB0aXRsZTogXCJEcm9wIFNpZGUgV2F0Y2hcIixcclxuICAgICAgICAgICAgcHJpY2U6IDY3MCxcclxuICAgICAgICAgICAgaW1hZ2U6IFwiL2ltYWdlcy9zaG9wLWl0ZW02LmpwZ1wiXHJcbiAgICAgICAgfVxyXG4gICAgXSxcclxuICAgIGFkZGVkSXRlbXM6W10sXHJcbiAgICB0b3RhbDogMCxcclxuICAgIHNoaXBwaW5nOiAwXHJcbn1cclxuXHJcbmNvbnN0IGNhcnRSZWR1Y2VyPSAoc3RhdGUgPSBpbml0U3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICBcclxuICAgIGlmKGFjdGlvbi50eXBlID09PSBBRERfVE9fQ0FSVCl7XHJcbiAgICAgICAgbGV0IGFkZGVkSXRlbSA9IHN0YXRlLnByb2R1Y3RzLmZpbmQoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpXHJcbiAgICAgICAgLy9jaGVjayBpZiB0aGUgYWN0aW9uIGlkIGV4aXN0cyBpbiB0aGUgYWRkZWRJdGVtc1xyXG4gICAgICAgIGxldCBleGlzdGVkX2l0ZW09IHN0YXRlLmFkZGVkSXRlbXMuZmluZChpdGVtPT4gYWN0aW9uLmlkID09PSBpdGVtLmlkKVxyXG4gICAgICAgIGlmKGV4aXN0ZWRfaXRlbSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGFkZGVkSXRlbS5xdWFudGl0eSArPSAxIFxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICB0b3RhbDogc3RhdGUudG90YWwgKyBhZGRlZEl0ZW0ucHJpY2UgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhZGRlZEl0ZW0ucXVhbnRpdHkgPSAxO1xyXG4gICAgICAgICAgICAvL2NhbGN1bGF0aW5nIHRoZSB0b3RhbFxyXG4gICAgICAgICAgICBsZXQgbmV3VG90YWwgPSBzdGF0ZS50b3RhbCArIGFkZGVkSXRlbS5wcmljZSBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGFkZGVkSXRlbXM6IFsuLi5zdGF0ZS5hZGRlZEl0ZW1zLCBhZGRlZEl0ZW1dLFxyXG4gICAgICAgICAgICAgICAgdG90YWwgOiBuZXdUb3RhbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZihhY3Rpb24udHlwZSA9PT0gQUREX1FVQU5USVRZX1dJVEhfTlVNQkVSKXtcclxuICAgICAgICBsZXQgYWRkZWRJdGVtID0gc3RhdGUucHJvZHVjdHMuZmluZChpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5pZClcclxuICAgICAgICAvL2NoZWNrIGlmIHRoZSBhY3Rpb24gaWQgZXhpc3RzIGluIHRoZSBhZGRlZEl0ZW1zXHJcbiAgICAgICAgbGV0IGV4aXN0ZWRfaXRlbT0gc3RhdGUuYWRkZWRJdGVtcy5maW5kKGl0ZW09PiBhY3Rpb24uaWQgPT09IGl0ZW0uaWQpXHJcbiAgICAgICAgaWYoZXhpc3RlZF9pdGVtKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYWRkZWRJdGVtLnF1YW50aXR5ICs9IGFjdGlvbi5xdHlcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgdG90YWw6IHN0YXRlLnRvdGFsICsgYWRkZWRJdGVtLnByaWNlICogYWN0aW9uLnF0eVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYWRkZWRJdGVtLnF1YW50aXR5ID0gYWN0aW9uLnF0eTtcclxuICAgICAgICAgICAgLy9jYWxjdWxhdGluZyB0aGUgdG90YWxcclxuICAgICAgICAgICAgbGV0IG5ld1RvdGFsID0gc3RhdGUudG90YWwgKyBhZGRlZEl0ZW0ucHJpY2UgKiBhY3Rpb24ucXR5XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBhZGRlZEl0ZW1zOiBbLi4uc3RhdGUuYWRkZWRJdGVtcywgYWRkZWRJdGVtXSxcclxuICAgICAgICAgICAgICAgIHRvdGFsIDogbmV3VG90YWxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuXHJcbiAgICBpZihhY3Rpb24udHlwZSA9PT0gUkVNT1ZFX0lURU0pe1xyXG4gICAgICAgIGxldCBpdGVtVG9SZW1vdmU9IHN0YXRlLmFkZGVkSXRlbXMuZmluZChpdGVtPT4gYWN0aW9uLmlkID09PSBpdGVtLmlkKVxyXG4gICAgICAgIGxldCBuZXdfaXRlbXMgPSBzdGF0ZS5hZGRlZEl0ZW1zLmZpbHRlcihpdGVtPT4gYWN0aW9uLmlkICE9PSBpdGVtLmlkKVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vY2FsY3VsYXRpbmcgdGhlIHRvdGFsXHJcbiAgICAgICAgbGV0IG5ld1RvdGFsID0gc3RhdGUudG90YWwgLSAoaXRlbVRvUmVtb3ZlLnByaWNlICogaXRlbVRvUmVtb3ZlLnF1YW50aXR5ICk7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICBhZGRlZEl0ZW1zOiBuZXdfaXRlbXMsXHJcbiAgICAgICAgICAgIHRvdGFsOiBuZXdUb3RhbFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZihhY3Rpb24udHlwZSA9PT0gQUREX1FVQU5USVRZKXtcclxuICAgICAgICBsZXQgYWRkZWRJdGVtID0gc3RhdGUucHJvZHVjdHMuZmluZChpdGVtPT4gaXRlbS5pZCA9PT0gYWN0aW9uLmlkKVxyXG4gICAgICAgIGFkZGVkSXRlbS5xdWFudGl0eSArPSAxIFxyXG4gICAgICAgIGxldCBuZXdUb3RhbCA9IHN0YXRlLnRvdGFsICsgYWRkZWRJdGVtLnByaWNlXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIHRvdGFsOiBuZXdUb3RhbFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZihhY3Rpb24udHlwZSA9PT0gU1VCX1FVQU5USVRZKXsgIFxyXG4gICAgICAgIGxldCBhZGRlZEl0ZW0gPSBzdGF0ZS5wcm9kdWN0cy5maW5kKGl0ZW09PiBpdGVtLmlkID09PSBhY3Rpb24uaWQpIFxyXG4gICAgICAgIC8vaWYgdGhlIHF0ID09IDAgdGhlbiBpdCBzaG91bGQgYmUgcmVtb3ZlZFxyXG4gICAgICAgIGlmKGFkZGVkSXRlbS5xdWFudGl0eSA9PT0gMSl7XHJcbiAgICAgICAgICAgIGxldCBuZXdfaXRlbXMgPSBzdGF0ZS5hZGRlZEl0ZW1zLmZpbHRlcihpdGVtPT5pdGVtLmlkICE9PSBhY3Rpb24uaWQpXHJcbiAgICAgICAgICAgIGxldCBuZXdUb3RhbCA9IHN0YXRlLnRvdGFsIC0gYWRkZWRJdGVtLnByaWNlXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgICAgIGFkZGVkSXRlbXM6IG5ld19pdGVtcyxcclxuICAgICAgICAgICAgICAgIHRvdGFsOiBuZXdUb3RhbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYWRkZWRJdGVtLnF1YW50aXR5IC09IDFcclxuICAgICAgICAgICAgbGV0IG5ld1RvdGFsID0gc3RhdGUudG90YWwgLSBhZGRlZEl0ZW0ucHJpY2VcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgdG90YWw6IG5ld1RvdGFsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgaWYoYWN0aW9uLnR5cGUgPT09IEFERF9TSElQUElORyl7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIHNoaXBwaW5nOiBzdGF0ZS5zaGlwcGluZyArPSA2XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmKGFjdGlvbi50eXBlID09PSAnU1VCX1NISVBQSU5HJyl7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgIHNoaXBwaW5nOiBzdGF0ZS5zaGlwcGluZyAtPSA2XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmKGFjdGlvbi50eXBlID09PSBSRVNFVF9DQVJUKXtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICAgICAgYWRkZWRJdGVtczogW10sXHJcbiAgICAgICAgICAgIHRvdGFsOiAwLFxyXG4gICAgICAgICAgICBzaGlwcGluZzogMFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHN0YXRlXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBpbml0U3RvcmUgPSAoaW5pdGlhbFN0YXRlID0gaW5pdFN0YXRlKSA9PiB7XHJcbiAgICByZXR1cm4gY3JlYXRlU3RvcmUoXHJcbiAgICAgICAgY2FydFJlZHVjZXIsXHJcbiAgICAgICAgaW5pdGlhbFN0YXRlLFxyXG4gICAgICAgIGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKHRodW5rTWlkZGxld2FyZSkpXHJcbiAgICApXHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0LXJlZHV4LXdyYXBwZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXByZWxvYWRpbmctc2NyZWVuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC10aHVua1wiKTsiXSwic291cmNlUm9vdCI6IiJ9