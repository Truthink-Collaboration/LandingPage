module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		32: 0
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 30);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/T1H":
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "/tCK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class CtaCard extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return __jsx("div", {
      className: "cta-area"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "row h-100 justify-content-center align-items-center"
    }, __jsx("div", {
      className: "col-lg-7 col-md-7"
    }, __jsx("p", null, "Want a bite? You're in the right place!")), __jsx("div", {
      className: "col-lg-5 col-md-5 text-right"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      className: "btn btn-primary"
    }, "Take a Test Drive"))))));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (CtaCard);

/***/ }),

/***/ "/wPC":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class JoinCard extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return __jsx("section", {
      className: "join-area ptb-100"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "row h-100 justify-content-center align-items-center"
    }, __jsx("div", {
      className: "col-lg-6 col-md-6"
    }, __jsx("div", {
      className: "join-img"
    }, __jsx("img", {
      src: "/images/3.png",
      alt: "img"
    }))), __jsx("div", {
      className: "col-lg-6 col-md-6"
    }, __jsx("div", {
      className: "join-content"
    }, __jsx("span", null, "Start 30 Days Free Trial"), __jsx("h3", null, "Overall 400k+ Our Clients! Please Get Start Now"), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo."), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      className: "btn btn-primary"
    }, "Join Now")))))));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (JoinCard);

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) {}

  return WithRouterWrapper;
}

/***/ }),

/***/ "1OaV":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("tpJJ");
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_modal_video__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const isServer = true;
const WOW = !isServer ? __webpack_require__("4htw") : null;

class Banner extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      isOpen: false
    });

    _defineProperty(this, "openModal", () => {
      this.setState({
        isOpen: true
      });
    });
  }

  componentDidMount() {
    new WOW.WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 20,
      mobile: true,
      live: true
    }).init();
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
      className: "main-banner saas-home"
    }, __jsx("div", {
      className: "d-table"
    }, __jsx("div", {
      className: "d-table-cell"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "row h-100 justify-content-center align-items-center"
    }, __jsx("div", {
      className: "col-lg-6 col-md-12"
    }, __jsx("div", {
      className: "saas-image"
    }, __jsx("img", {
      src: "/images/saas-shape/arrow.png",
      className: "wow fadeInDown",
      alt: "arrow"
    }), __jsx("img", {
      src: "/images/saas-shape/box1.png",
      className: "wow fadeInUp",
      "data-wow-delay": "0.6s",
      alt: "box1"
    }), __jsx("img", {
      src: "/images/saas-shape/boy1.png",
      className: "wow fadeInLeft",
      "data-wow-delay": "0.6s",
      alt: "boy1"
    }), __jsx("img", {
      src: "/images/saas-shape/boy2.png",
      className: "wow zoomIn",
      "data-wow-delay": "0.6s",
      alt: "boy2"
    }), __jsx("img", {
      src: "/images/saas-shape/boy3.png",
      className: "wow bounceIn",
      "data-wow-delay": "0.6s",
      alt: "boy3"
    }), __jsx("img", {
      src: "/images/saas-shape/digital-screen.png",
      className: "wow fadeInDown",
      "data-wow-delay": "0.6s",
      alt: "digital-screen"
    }), __jsx("img", {
      src: "/images/saas-shape/filter1.png",
      className: "wow zoomIn",
      "data-wow-delay": "0.6s",
      alt: "filter1"
    }), __jsx("img", {
      src: "/images/saas-shape/filter2.png",
      className: "wow fadeInUp",
      "data-wow-delay": "0.6s",
      alt: "filter2"
    }), __jsx("img", {
      src: "/images/saas-shape/filter3.png",
      className: "wow rotateIn",
      "data-wow-delay": "0.6s",
      alt: "filter3"
    }), __jsx("img", {
      src: "/images/saas-shape/girl1.png",
      className: "wow fadeInUp",
      "data-wow-delay": "0.6s",
      alt: "girl1"
    }), __jsx("img", {
      src: "/images/saas-shape/girl2.png",
      className: "wow zoomIn",
      "data-wow-delay": "0.6s",
      alt: "girl2"
    }), __jsx("img", {
      src: "/images/saas-shape/monitor.png",
      className: "wow zoomIn",
      "data-wow-delay": "0.6s",
      alt: "monitor"
    }), __jsx("img", {
      src: "/images/saas-shape/main-image.png",
      className: "wow zoomIn",
      "data-wow-delay": "0.6s",
      alt: "main-image.png"
    }))), __jsx("div", {
      className: "col-lg-6 col-md-12"
    }, __jsx("div", {
      className: "hero-content pl-4"
    }, __jsx("h1", null, "Manage your business strategy in one placeholder"), __jsx("p", null, "Our passion to work hard and deliver excellent results. It could solve the needs of your customers and develop innovation."), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      className: "btn btn-primary"
    }, "Get Started")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      onClick: e => {
        e.preventDefault();
        this.openModal();
      },
      className: "video-btn popup-youtube"
    }, "Watch Video", __jsx("i", {
      className: "icofont-play-alt-3"
    }))))))))), __jsx("div", {
      className: "bg-gray shape-1"
    }), __jsx("div", {
      className: "shape1"
    }, __jsx("img", {
      src: "/images/shape1.png",
      alt: "img"
    })), __jsx("div", {
      className: "shape2"
    }, __jsx("img", {
      src: "/images/shape2.png",
      alt: "img"
    })), __jsx("div", {
      className: "shape3"
    }, __jsx("img", {
      src: "/images/shape3.png",
      alt: "img"
    })), __jsx("div", {
      className: "shape4 rotateme"
    }, __jsx("img", {
      src: "/images/shape4.png",
      alt: "img"
    }))), __jsx(react_modal_video__WEBPACK_IMPORTED_MODULE_2___default.a, {
      channel: "youtube",
      isOpen: this.state.isOpen,
      videoId: "szuchBiLrEM",
      onClose: () => this.setState({
        isOpen: false
      })
    }));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Banner);

/***/ }),

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("QjmD");


/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4htw":
/***/ (function(module, exports) {

module.exports = require("wowjs");

/***/ }),

/***/ "6g9c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class GetStarted extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return __jsx("section", {
      className: "get-started ptb-100"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "section-title"
    }, __jsx("h2", null, "Get Started Free"), __jsx("div", {
      className: "bar"
    }), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")), __jsx("div", {
      className: "get-started-form"
    }, __jsx("form", null, __jsx("div", {
      className: "form-group"
    }, __jsx("input", {
      type: "text",
      className: "form-control",
      placeholder: "Name"
    })), __jsx("div", {
      className: "form-group"
    }, __jsx("input", {
      type: "email",
      className: "form-control",
      placeholder: "Email"
    })), __jsx("div", {
      className: "form-group"
    }, __jsx("input", {
      type: "password",
      className: "form-control",
      placeholder: "Password"
    })), __jsx("button", {
      type: "submit",
      className: "btn btn-primary"
    }, "Sign Up"), __jsx("p", null, "Or use your ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Facebook Account")))))), __jsx("canvas", {
      id: "canvas"
    }));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (GetStarted);

/***/ }),

/***/ "7KCV":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("C+bE");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "AroE":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "AxYI":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("/T1H");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const OwlCarousel = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, "q4RA", 7)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("q4RA")],
    modules: ['react-owl-carousel3']
  }
});
const options = {
  loop: true,
  nav: true,
  autoplay: true,
  autoplayHoverPause: true,
  mouseDrag: true,
  center: true,
  dots: false,
  navText: ["<i class='icofont-bubble-left'></i>", "<i class='icofont-bubble-right'></i>"],
  responsive: {
    0: {
      items: 1
    },
    768: {
      items: 2
    },
    1200: {
      items: 3
    }
  }
};

class Feedback extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      display: false
    });
  }

  componentDidMount() {
    this.setState({
      display: true
    });
  }

  render() {
    return __jsx("section", {
      className: "feedback-area ptb-100 bg-gray"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "section-title"
    }, __jsx("h2", null, "Testimonials"), __jsx("div", {
      className: "bar"
    }), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")), __jsx("div", {
      className: "row"
    }, this.state.display ? __jsx(OwlCarousel, _extends({
      className: "feedback-slides owl-carousel owl-theme"
    }, options), __jsx("div", {
      className: "col-lg-12"
    }, __jsx("div", {
      className: "single-feedback"
    }, __jsx("div", {
      className: "client-info"
    }, __jsx("img", {
      src: "/images/client1.jpg",
      alt: "client"
    }), __jsx("h3", null, "Alit John"), __jsx("span", null, "Web Developer")), __jsx("p", null, "Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project individual."))), __jsx("div", {
      className: "col-lg-12"
    }, __jsx("div", {
      className: "single-feedback"
    }, __jsx("div", {
      className: "client-info"
    }, __jsx("img", {
      src: "/images/client2.jpg",
      alt: "client"
    }), __jsx("h3", null, "Alit John"), __jsx("span", null, "SEO Expert")), __jsx("p", null, "Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project individual."))), __jsx("div", {
      className: "col-lg-12"
    }, __jsx("div", {
      className: "single-feedback"
    }, __jsx("div", {
      className: "client-info"
    }, __jsx("img", {
      src: "/images/client3.jpg",
      alt: "client"
    }), __jsx("h3", null, "Steven John"), __jsx("span", null, "Web Developer")), __jsx("p", null, "Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project individual."))), __jsx("div", {
      className: "col-lg-12"
    }, __jsx("div", {
      className: "single-feedback"
    }, __jsx("div", {
      className: "client-info"
    }, __jsx("img", {
      src: "/images/client4.jpg",
      alt: "client"
    }), __jsx("h3", null, "David Warner"), __jsx("span", null, "Web Developer")), __jsx("p", null, "Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project individual.")))) : '')), __jsx("svg", {
      className: "svg-feedback-bottom",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 100 100",
      preserveAspectRatio: "none"
    }, __jsx("path", {
      d: "M0,70 C30,130 70,50 100,70 L100,100 0,100 Z",
      fill: "#ffffff"
    })));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Feedback);

/***/ }),

/***/ "BvVw":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class Features extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return __jsx("section", {
      className: "features-area saas-features ptb-100"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "section-title"
    }, __jsx("h2", null, "Our Amazing Features"), __jsx("div", {
      className: "bar"
    }), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")), __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col-lg-4 col-md-6"
    }, __jsx("div", {
      className: "single-features"
    }, __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "icofont-lock"
    })), __jsx("h3", null, "Quick Access"), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))), __jsx("div", {
      className: "col-lg-4 col-md-6"
    }, __jsx("div", {
      className: "single-features"
    }, __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "icofont-heart-eyes"
    })), __jsx("h3", null, "Easily Manage"), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))), __jsx("div", {
      className: "col-lg-4 col-md-6"
    }, __jsx("div", {
      className: "single-features"
    }, __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "icofont-lock"
    })), __jsx("h3", null, "Safty"), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))), __jsx("div", {
      className: "col-lg-4 col-md-6"
    }, __jsx("div", {
      className: "single-features"
    }, __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "icofont-camera"
    })), __jsx("h3", null, "Camera Filter"), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))), __jsx("div", {
      className: "col-lg-4 col-md-6"
    }, __jsx("div", {
      className: "single-features"
    }, __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "icofont-responsive"
    })), __jsx("h3", null, "Fast and optimized"), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))), __jsx("div", {
      className: "col-lg-4 col-md-6"
    }, __jsx("div", {
      className: "single-features"
    }, __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "icofont-hand-drag1"
    })), __jsx("h3", null, "Drag and Drop"), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))))), __jsx("div", {
      className: "features-inner-area"
    }, __jsx("div", {
      className: "container-fluid"
    }, __jsx("div", {
      className: "row h-100 justify-content-center align-items-center"
    }, __jsx("div", {
      className: "col-lg-6 col-md-12"
    }, __jsx("div", {
      className: "features-image"
    }, __jsx("img", {
      src: "/images/features-img1.png",
      alt: "image feature"
    }))), __jsx("div", {
      className: "col-lg-6 col-md-12"
    }, __jsx("div", {
      className: "features-inner-content"
    }, __jsx("div", {
      className: "features-item"
    }, __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "icofont-ui-call"
    })), __jsx("h3", null, "Free Caliing Service"), __jsx("p", null, "Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project to an individual person's workload.")), __jsx("div", {
      className: "features-item"
    }, __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "icofont-gift"
    })), __jsx("h3", null, "Daily Free Gift"), __jsx("p", null, "Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project to an individual person's workload.")), __jsx("div", {
      className: "features-item"
    }, __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "icofont-qr-code"
    })), __jsx("h3", null, "QR Code Scaner"), __jsx("p", null, "Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project to an individual person's workload."))))))), __jsx("div", {
      className: "shape7"
    }, __jsx("img", {
      src: "/images/shape7.png",
      alt: "shape"
    })), __jsx("div", {
      className: "shape3"
    }, __jsx("img", {
      src: "/images/shape3.png",
      alt: "img"
    })), __jsx("div", {
      className: "bg-gray shape-1"
    }), __jsx("div", {
      className: "shape6"
    }, __jsx("img", {
      src: "/images/shape6.png",
      alt: "img"
    })), __jsx("div", {
      className: "shape8 rotateme"
    }, __jsx("img", {
      src: "/images/shape8.svg",
      alt: "shape"
    })), __jsx("div", {
      className: "shape9"
    }, __jsx("img", {
      src: "/images/shape9.svg",
      alt: "shape"
    })), __jsx("div", {
      className: "shape10"
    }, __jsx("img", {
      src: "/images/shape10.svg",
      alt: "shape"
    })), __jsx("div", {
      className: "shape11 rotateme"
    }, __jsx("img", {
      src: "/images/shape11.svg",
      alt: "shape"
    })));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Features);

/***/ }),

/***/ "C+bE":
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "HezA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class Overview extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return __jsx("section", {
      className: "overview-section ptb-100 bg-gray"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "section-title"
    }, __jsx("h2", null, "More to Discover"), __jsx("div", {
      className: "bar"
    }), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")), __jsx("div", {
      className: "overview-box"
    }, __jsx("div", {
      className: "row h-100 justify-content-center align-items-center"
    }, __jsx("div", {
      className: "col-lg-6 col-md-6 overview-img"
    }, __jsx("img", {
      src: "/images/overview-1.png",
      alt: "image"
    })), __jsx("div", {
      className: "col-lg-6 col-md-6 overview-content"
    }, __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "icofont-power"
    })), __jsx("h3", null, "Getting started page"), __jsx("p", null, "Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project to an individual person's workload."), __jsx("ul", null, __jsx("li", null, "Unimited Video Call"), __jsx("li", null, "Add Favourite contact"), __jsx("li", null, "Camera Filter")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      className: "btn btn-primary"
    }, "Read More"))))), __jsx("div", {
      className: "overview-box"
    }, __jsx("div", {
      className: "row h-100 justify-content-center align-items-center"
    }, __jsx("div", {
      className: "col-lg-6 col-md-6 overview-content"
    }, __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "icofont-anchor"
    })), __jsx("h3", null, "Outdated comments toggling"), __jsx("p", null, "Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project to an individual person's workload."), __jsx("ul", null, __jsx("li", null, "Unimited Video Call"), __jsx("li", null, "Add Favourite contact"), __jsx("li", null, "Camera Filter")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      className: "btn btn-primary"
    }, "Read More"))), __jsx("div", {
      className: "col-lg-6 col-md-6 app-fetured-item"
    }, __jsx("div", {
      className: "app-item item-one"
    }, __jsx("i", {
      className: "icofont-wink-smile"
    }), __jsx("h6", null, "Community")), __jsx("div", {
      className: "app-item item-two"
    }, __jsx("i", {
      className: "icofont-ebook"
    }), __jsx("h6", null, "Honest pricing")), __jsx("div", {
      className: "app-item item-three"
    }, __jsx("i", {
      className: "icofont-wink-smile"
    }), __jsx("h6", null, "Management")), __jsx("div", {
      className: "app-item item-four"
    }, __jsx("i", {
      className: "icofont-stock-mobile"
    }), __jsx("h6", null, "Mobile Design"))))), __jsx("div", {
      className: "overview-box"
    }, __jsx("div", {
      className: "row h-100 justify-content-center align-items-center"
    }, __jsx("div", {
      className: "col-lg-6 col-md-6 overview-img"
    }, __jsx("img", {
      src: "/images/overview-3.png",
      alt: "image"
    })), __jsx("div", {
      className: "col-lg-6 col-md-6 overview-content"
    }, __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "icofont-users-social"
    })), __jsx("h3", null, "Code review illustrations"), __jsx("p", null, "Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project to an individual person's workload."), __jsx("ul", null, __jsx("li", null, "Unimited Video Call"), __jsx("li", null, "Add Favourite contact"), __jsx("li", null, "Camera Filter")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      className: "btn btn-primary"
    }, "Read More"))))), __jsx("div", {
      className: "overview-box"
    }, __jsx("div", {
      className: "row h-100 justify-content-center align-items-center"
    }, __jsx("div", {
      className: "col-lg-6 col-md-6 overview-content"
    }, __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "icofont-ui-messaging"
    })), __jsx("h3", null, "We provide proffesional staff"), __jsx("p", null, "Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project to an individual person's workload."), __jsx("ul", null, __jsx("li", null, "Unimited Video Call"), __jsx("li", null, "Add Favourite contact"), __jsx("li", null, "Camera Filter")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      className: "btn btn-primary"
    }, "Read More"))), __jsx("div", {
      className: "col-lg-6 col-md-6 overview-img"
    }, __jsx("img", {
      src: "/images/overview-4.png",
      alt: "image"
    }))))), __jsx("div", {
      className: "shape7"
    }, __jsx("img", {
      src: "/images/shape7.png",
      alt: "shape"
    })), __jsx("div", {
      className: "shape3"
    }, __jsx("img", {
      src: "/images/shape3.png",
      alt: "img"
    })), __jsx("div", {
      className: "bg-gray shape-1"
    }), __jsx("div", {
      className: "shape6"
    }, __jsx("img", {
      src: "/images/shape6.png",
      alt: "img"
    })), __jsx("div", {
      className: "shape8 rotateme"
    }, __jsx("img", {
      src: "/images/shape8.svg",
      alt: "shape"
    })), __jsx("div", {
      className: "shape9"
    }, __jsx("img", {
      src: "/images/shape9.svg",
      alt: "shape"
    })), __jsx("div", {
      className: "shape10"
    }, __jsx("img", {
      src: "/images/shape10.svg",
      alt: "shape"
    })), __jsx("div", {
      className: "shape11 rotateme"
    }, __jsx("img", {
      src: "/images/shape11.svg",
      alt: "shape"
    })));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Overview);

/***/ }),

/***/ "NHP8":
/***/ (function(module, exports) {

module.exports = require("react-countup");

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "QjmD":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layouts_Navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("pFRj");
/* harmony import */ var _components_Layouts_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("g7ta");
/* harmony import */ var _components_Saas_Banner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("1OaV");
/* harmony import */ var _components_Saas_Features__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("BvVw");
/* harmony import */ var _components_Saas_Overview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("HezA");
/* harmony import */ var _components_Saas_JoinCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("/wPC");
/* harmony import */ var _components_Saas_CtaCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("/tCK");
/* harmony import */ var _components_Saas_SaasTools__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("UayP");
/* harmony import */ var _components_Saas_Funfact__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("nDcN");
/* harmony import */ var _components_Saas_WorkProcess__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("jwOH");
/* harmony import */ var _components_Saas_PricingPlan__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("erDF");
/* harmony import */ var _components_Saas_GetStarted__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("6g9c");
/* harmony import */ var _components_Saas_Feedback__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("AxYI");
/* harmony import */ var _components_Saas_Partner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("b3h+");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
















class Index extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_Layouts_Navbar__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null), __jsx(_components_Saas_Banner__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null), __jsx(_components_Saas_Features__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], null), __jsx(_components_Saas_Overview__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], null), __jsx(_components_Saas_JoinCard__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], null), __jsx(_components_Saas_CtaCard__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], null), __jsx(_components_Saas_SaasTools__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], null), __jsx(_components_Saas_Funfact__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], null), __jsx(_components_Saas_WorkProcess__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], null), __jsx(_components_Saas_PricingPlan__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"], null), __jsx(_components_Saas_GetStarted__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"], null), __jsx(_components_Saas_Feedback__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"], null), __jsx(_components_Saas_Partner__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"], null), __jsx(_components_Layouts_Footer__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], null));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "UayP":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class SaasTools extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "openTabSection", (evt, tabNmae) => {
      let i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabs_item");

      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }

      tablinks = document.getElementsByTagName("li");

      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace("current", "");
      }

      document.getElementById(tabNmae).style.display = "block";
      evt.currentTarget.className += "current";
    });
  }

  render() {
    return __jsx("section", {
      className: "saas-tools ptb-100 bg-gray"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "section-title"
    }, __jsx("h2", null, "Tools for Everyone"), __jsx("div", {
      className: "bar"
    }), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")), __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col-lg-12 col-md-12"
    }, __jsx("div", {
      className: "tab"
    }, __jsx("ul", {
      className: "tabs active"
    }, __jsx("li", {
      className: "current",
      onClick: e => this.openTabSection(e, 'tab1')
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      onClick: e => e.preventDefault()
    }, __jsx("i", {
      className: "icofont-dashboard-web"
    }), __jsx("br", null), "Dashboard"))), __jsx("li", {
      onClick: e => this.openTabSection(e, 'tab2')
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      onClick: e => e.preventDefault()
    }, __jsx("i", {
      className: "icofont-inbox"
    }), __jsx("br", null), "Inbox"))), __jsx("li", {
      onClick: e => this.openTabSection(e, 'tab3')
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      onClick: e => e.preventDefault()
    }, __jsx("i", {
      className: "icofont-ui-calendar"
    }), __jsx("br", null), "Calendar"))), __jsx("li", {
      onClick: e => this.openTabSection(e, 'tab4')
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      onClick: e => e.preventDefault()
    }, __jsx("i", {
      className: "icofont-copy-invert"
    }), __jsx("br", null), "Invoicing"))), __jsx("li", {
      onClick: e => this.openTabSection(e, 'tab5')
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      onClick: e => e.preventDefault()
    }, __jsx("i", {
      className: "icofont-wrench"
    }), __jsx("br", null), "Reporting")))), __jsx("div", {
      className: "tab_content"
    }, __jsx("div", {
      id: "tab1",
      className: "tabs_item"
    }, __jsx("div", {
      className: "row h-100 justify-content-center align-items-center"
    }, __jsx("div", {
      className: "col-lg-6 col-md-6"
    }, __jsx("div", {
      className: "tabs_item_content mt-0"
    }, __jsx("h3", null, "Dashboard"), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo."), __jsx("ul", null, __jsx("li", null, __jsx("i", {
      className: "icofont-ui-check"
    }), " Creative Design"), __jsx("li", null, __jsx("i", {
      className: "icofont-ui-check"
    }), " Retina Ready"), __jsx("li", null, __jsx("i", {
      className: "icofont-ui-check"
    }), " Modern Design"), __jsx("li", null, __jsx("i", {
      className: "icofont-ui-check"
    }), " Digital Marketing & Branding")))), __jsx("div", {
      className: "col-lg-6 col-md-6"
    }, __jsx("div", {
      className: "tabs_item_img"
    }, __jsx("img", {
      src: "/images/features-img1.png",
      alt: "img"
    }))))), __jsx("div", {
      id: "tab2",
      className: "tabs_item"
    }, __jsx("div", {
      className: "row h-100 justify-content-center align-items-center"
    }, __jsx("div", {
      className: "col-lg-6 col-md-6"
    }, __jsx("div", {
      className: "tabs_item_img"
    }, __jsx("img", {
      src: "/images/features-img1.png",
      alt: "img"
    }))), __jsx("div", {
      className: "col-lg-6 col-md-6"
    }, __jsx("div", {
      className: "tabs_item_content mb-0"
    }, __jsx("h3", null, "Inbox"), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo."), __jsx("ul", null, __jsx("li", null, __jsx("i", {
      className: "icofont-ui-check"
    }), " Creative Design"), __jsx("li", null, __jsx("i", {
      className: "icofont-ui-check"
    }), " Retina Ready"), __jsx("li", null, __jsx("i", {
      className: "icofont-ui-check"
    }), " Modern Design"), __jsx("li", null, __jsx("i", {
      className: "icofont-ui-check"
    }), " Digital Marketing & Branding")))))), __jsx("div", {
      id: "tab3",
      className: "tabs_item"
    }, __jsx("div", {
      className: "row h-100 justify-content-center align-items-center"
    }, __jsx("div", {
      className: "col-lg-6 col-md-6"
    }, __jsx("div", {
      className: "tabs_item_content mt-0"
    }, __jsx("h3", null, "Calendar"), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo."), __jsx("ul", null, __jsx("li", null, __jsx("i", {
      className: "icofont-ui-check"
    }), " Creative Design"), __jsx("li", null, __jsx("i", {
      className: "icofont-ui-check"
    }), " Retina Ready"), __jsx("li", null, __jsx("i", {
      className: "icofont-ui-check"
    }), " Modern Design"), __jsx("li", null, __jsx("i", {
      className: "icofont-ui-check"
    }), " Digital Marketing & Branding")))), __jsx("div", {
      className: "col-lg-6 col-md-6"
    }, __jsx("div", {
      className: "tabs_item_img"
    }, __jsx("img", {
      src: "/images/features-img1.png",
      alt: "img"
    }))))), __jsx("div", {
      id: "tab4",
      className: "tabs_item"
    }, __jsx("div", {
      className: "row h-100 justify-content-center align-items-center"
    }, __jsx("div", {
      className: "col-lg-6 col-md-6"
    }, __jsx("div", {
      className: "tabs_item_img"
    }, __jsx("img", {
      src: "/images/features-img1.png",
      alt: "img"
    }))), __jsx("div", {
      className: "col-lg-6 col-md-6"
    }, __jsx("div", {
      className: "tabs_item_content mb-0"
    }, __jsx("h3", null, "Invoicing"), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo."), __jsx("ul", null, __jsx("li", null, __jsx("i", {
      className: "icofont-ui-check"
    }), " Creative Design"), __jsx("li", null, __jsx("i", {
      className: "icofont-ui-check"
    }), " Retina Ready"), __jsx("li", null, __jsx("i", {
      className: "icofont-ui-check"
    }), " Modern Design"), __jsx("li", null, __jsx("i", {
      className: "icofont-ui-check"
    }), " Digital Marketing & Branding")))))), __jsx("div", {
      id: "tab5",
      className: "tabs_item"
    }, __jsx("div", {
      className: "row h-100 justify-content-center align-items-center"
    }, __jsx("div", {
      className: "col-lg-6 col-md-6"
    }, __jsx("div", {
      className: "tabs_item_content mt-0"
    }, __jsx("h3", null, "Reporting"), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo."), __jsx("ul", null, __jsx("li", null, __jsx("i", {
      className: "icofont-ui-check"
    }), " Creative Design"), __jsx("li", null, __jsx("i", {
      className: "icofont-ui-check"
    }), " Retina Ready"), __jsx("li", null, __jsx("i", {
      className: "icofont-ui-check"
    }), " Modern Design"), __jsx("li", null, __jsx("i", {
      className: "icofont-ui-check"
    }), " Digital Marketing & Branding")))), __jsx("div", {
      className: "col-lg-6 col-md-6"
    }, __jsx("div", {
      className: "tabs_item_img"
    }, __jsx("img", {
      src: "/images/features-img1.png",
      alt: "img"
    })))))))))), __jsx("div", {
      className: "shape1"
    }, __jsx("img", {
      src: "/images/shape1.png",
      alt: "img"
    })), __jsx("div", {
      className: "shape2"
    }, __jsx("img", {
      src: "/images/shape2.png",
      alt: "img"
    })), __jsx("div", {
      className: "shape3"
    }, __jsx("img", {
      src: "/images/shape3.png",
      alt: "img"
    })), __jsx("div", {
      className: "shape6"
    }, __jsx("img", {
      src: "/images/shape6.png",
      alt: "img"
    })), __jsx("div", {
      className: "shape8 rotateme"
    }, __jsx("img", {
      src: "/images/shape8.svg",
      alt: "shape"
    })));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (SaasTools);

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = escapeRegex(normalizedRoute.replace(/\/$/, '') || '/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isOptional = /^\\\[.*\\\]$/.test($1);

    if (isOptional) {
      $1 = $1.slice(2, -2);
    }

    const isCatchAll = /^(\\\.){3}/.test($1);

    if (isCatchAll) {
      $1 = $1.slice(6);
    }

    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? isOptional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
  });
  let namedParameterizedRoute; // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    namedParameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
      const isCatchAll = /^(\\\.){3}/.test($1);
      const key = $1 // Un-escape key
      .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '');
      return isCatchAll ? `/(?<${escapeRegex(key)}>.+?)` : `/(?<${escapeRegex(key)}>[^/]+?)`;
    });
  }

  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups,
    namedRegex: namedParameterizedRoute ? `^${namedParameterizedRoute}(?:/)?$` : undefined
  };
}

/***/ }),

/***/ "b3h+":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("/T1H");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const OwlCarousel = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, "q4RA", 7)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("q4RA")],
    modules: ['react-owl-carousel3']
  }
});
const options = {
  autoplay: true,
  nav: false,
  mouseDrag: true,
  autoplayHoverPause: true,
  responsiveClass: true,
  dots: false,
  loop: true,
  navText: ["<i class='icofont-bubble-left'></i>", "<i class='icofont-bubble-right'></i>"],
  responsive: {
    0: {
      items: 2
    },
    768: {
      items: 3
    },
    1024: {
      items: 4
    },
    1200: {
      items: 5
    }
  }
};

class Partner extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      display: false
    });
  }

  componentDidMount() {
    this.setState({
      display: true
    });
  }

  render() {
    return __jsx("div", {
      className: "partner-area"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "row"
    }, this.state.display ? __jsx(OwlCarousel, _extends({
      className: "partner-slides owl-carousel owl-theme"
    }, options), __jsx("div", {
      className: "col-lg-12"
    }, __jsx("div", {
      className: "item"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("img", {
      src: "/images/partner-1.png",
      alt: "partner"
    }))))), __jsx("div", {
      className: "col-lg-12"
    }, __jsx("div", {
      className: "item"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("img", {
      src: "/images/partner-2.png",
      alt: "partner"
    }))))), __jsx("div", {
      className: "col-lg-12"
    }, __jsx("div", {
      className: "item"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("img", {
      src: "/images/partner-3.png",
      alt: "partner"
    }))))), __jsx("div", {
      className: "col-lg-12"
    }, __jsx("div", {
      className: "item"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("img", {
      src: "/images/partner-4.png",
      alt: "partner"
    }))))), __jsx("div", {
      className: "col-lg-12"
    }, __jsx("div", {
      className: "item"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("img", {
      src: "/images/partner-5.png",
      alt: "partner"
    }))))), __jsx("div", {
      className: "col-lg-12"
    }, __jsx("div", {
      className: "item"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("img", {
      src: "/images/partner-6.png",
      alt: "partner"
    }))))), __jsx("div", {
      className: "col-lg-12"
    }, __jsx("div", {
      className: "item"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("img", {
      src: "/images/partner-7.png",
      alt: "partner"
    })))))) : '')));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Partner);

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

var _interopRequireWildcard = __webpack_require__("7KCV");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _url = __webpack_require__("bzos");

var _utils = __webpack_require__("kYf9");

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

var _router2 = __webpack_require__("elyg");

function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (false) {}

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    const {
      pathname
    } = window.location;
    const {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    const resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      const isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (false) {}
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = /*#__PURE__*/_react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

if (false) {}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.default = void 0;

var _url2 = __webpack_require__("bzos");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch((0, _utils.formatWithValidation)({
      pathname: addBasePath( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${delBasePath(pathname)}.json`),
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as2, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname,
          query
        }), (0, _utils.getURL)());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && (0, _url2.parse)(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (false) {}

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute((0, _url2.parse)(asPath).pathname);
      return  true && this.sdc[pathname] ? Promise.resolve(this.sdc[pathname]) : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = (0, _url2.parse)(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as2;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign({}, data, {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (_utils.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? (0, _utils.formatWithValidation)(_url) : _url;
      let as = typeof _as === 'object' ? (0, _utils.formatWithValidation)(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = (0, _url2.parse)(url, true);

      if (!pathname || protocol) {
        if (false) {}

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if ((0, _isDynamic.isDynamicRoute)(route)) {
        const {
          pathname: asPathname
        } = (0, _url2.parse)(as);
        const routeRegex = (0, _routeRegex.getRouteRegex)(route);
        const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (false) {}

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/vercel/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (false) {}

        this.set(route, pathname, query, as, routeInfo).then(() => {
          if (error) {
            Router.events.emit('routeChangeError', error, as);
            throw error;
          }

          Router.events.emit('routeChangeComplete', as);
          return resolve(true);
        });
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = (0, _url2.parse)(url);

      if (!pathname || protocol) {
        if (false) {}

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (false) {}

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "erDF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class PricingPlan extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return __jsx("section", {
      className: "pricing-area ptb-100 bg-gray"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "section-title"
    }, __jsx("h2", null, "Easy Pricing Plans"), __jsx("div", {
      className: "bar"
    }), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")), __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col-lg-4 col-md-6"
    }, __jsx("div", {
      className: "pricingTable"
    }, __jsx("div", {
      className: "pricing-icon"
    }, __jsx("i", {
      className: "icofont-globe"
    })), __jsx("div", {
      className: "price-Value"
    }, __jsx("span", {
      className: "currency"
    }, "$"), "15"), __jsx("span", {
      className: "month"
    }, "/Month"), __jsx("div", {
      className: "pricingHeader"
    }, __jsx("h3", {
      className: "title"
    }, "Personal")), __jsx("div", {
      className: "pricing-content"
    }, __jsx("ul", null, __jsx("li", {
      className: "active"
    }, "Send 5 invoices and quotes"), __jsx("li", {
      className: "active"
    }, "2 Clients and Products"), __jsx("li", {
      className: "active"
    }, "Invoicing and Payments"), __jsx("li", {
      className: "active"
    }, "Enter 5 bills"), __jsx("li", {
      className: "active"
    }, "Data Security and Backups"), __jsx("li", null, "Unlimited Staff Accounts"), __jsx("li", null, "Web Booking Widget"), __jsx("li", null, "Monthly Reports and Analytics"), __jsx("li", null, "24/7 Support"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      className: "btn btn-primary"
    }, "Get Started")))), __jsx("div", {
      className: "col-lg-4 col-md-6"
    }, __jsx("div", {
      className: "pricingTable"
    }, __jsx("div", {
      className: "pricing-icon"
    }, __jsx("i", {
      className: "icofont-globe"
    })), __jsx("div", {
      className: "price-Value"
    }, __jsx("span", {
      className: "currency"
    }, "$"), "39"), __jsx("span", {
      className: "month"
    }, "/Month"), __jsx("div", {
      className: "pricingHeader"
    }, __jsx("h3", {
      className: "title"
    }, "Business")), __jsx("div", {
      className: "pricing-content"
    }, __jsx("ul", null, __jsx("li", {
      className: "active"
    }, "Send 5 invoices and quotes"), __jsx("li", {
      className: "active"
    }, "2 Clients and Products"), __jsx("li", {
      className: "active"
    }, "Invoicing and Payments"), __jsx("li", {
      className: "active"
    }, "Enter 5 bills"), __jsx("li", {
      className: "active"
    }, "Data Security and Backups"), __jsx("li", {
      className: "active"
    }, "Unlimited Staff Accounts"), __jsx("li", {
      className: "active"
    }, "Web Booking Widget"), __jsx("li", null, "Monthly Reports and Analytics"), __jsx("li", null, "24/7 Support"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      className: "btn btn-primary"
    }, "Get Started")))), __jsx("div", {
      className: "col-lg-4 col-md-6 offset-lg-0 offset-md-3"
    }, __jsx("div", {
      className: "pricingTable"
    }, __jsx("div", {
      className: "pricing-icon"
    }, __jsx("i", {
      className: "icofont-globe"
    })), __jsx("div", {
      className: "price-Value"
    }, __jsx("span", {
      className: "currency"
    }, "$"), "99"), __jsx("span", {
      className: "month"
    }, "/Month"), __jsx("div", {
      className: "pricingHeader"
    }, __jsx("h3", {
      className: "title"
    }, "Enterprise")), __jsx("div", {
      className: "pricing-content"
    }, __jsx("ul", null, __jsx("li", {
      className: "active"
    }, "Send 5 invoices and quotes"), __jsx("li", {
      className: "active"
    }, "2 Clients and Products"), __jsx("li", {
      className: "active"
    }, "Invoicing and Payments"), __jsx("li", {
      className: "active"
    }, "Enter 5 bills"), __jsx("li", {
      className: "active"
    }, "Data Security and Backups"), __jsx("li", {
      className: "active"
    }, "Unlimited Staff Accounts"), __jsx("li", {
      className: "active"
    }, "Web Booking Widget"), __jsx("li", {
      className: "active"
    }, "Monthly Reports and Analytics"), __jsx("li", {
      className: "active"
    }, "24/7 Support"))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      className: "btn btn-primary"
    }, "Get Started")))))));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (PricingPlan);

/***/ }),

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _url = __webpack_require__("bzos");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (false) { var _App$prototype; } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (false) {}

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url, options) {
  if (false) {}

  return (0, _url.format)(url, options);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "g7ta":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class Footer extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return __jsx("footer", {
      className: "footer-area ptb-100 pb-0 bg-image"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col-lg-3 col-md-6"
    }, __jsx("div", {
      className: "single-footer-widget"
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      className: "logo"
    }, __jsx("img", {
      src: "/images/logodrk.png",
      alt: "logo2"
    }))), __jsx("p", null, "All Views, One Place. Be a part of an online debate in a way that users can easily view the highest voted arguments for either side of current political and philosophical issues."), __jsx("ul", {
      className: "social-list"
    }, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("i", {
      className: "icofont-facebook"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("i", {
      className: "icofont-twitter"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("i", {
      className: "icofont-instagram"
    })))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, __jsx("i", {
      className: "icofont-linkedin"
    }))))))), __jsx("div", {
      className: "col-lg-3 col-md-6"
    }, __jsx("div", {
      className: "single-footer-widget"
    }, __jsx("h3", null, "Support"), __jsx("ul", {
      className: "list"
    }, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/about-one"
    }, __jsx("a", null, "About"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/contact"
    }, __jsx("a", null, "Contact"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/faq"
    }, __jsx("a", null, "FAQ"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Press")))))))), __jsx("div", {
      className: "copyright-area"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "row h-100 justify-content-center align-items-center"
    }, __jsx("div", {
      className: "col-lg-6 col-md-6"
    }, __jsx("p", null, "Copyright @2020 Truthink. All rights reserved")), __jsx("div", {
      className: "col-lg-6 col-md-6"
    }, __jsx("ul", null, __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Terms & Conditions"))), __jsx("li", null, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", null, "Privacy Policy")))))))));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "iwtP":
/***/ (function(module, exports) {

module.exports = require("react-visibility-sensor");

/***/ }),

/***/ "jwOH":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class WorkProcess extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return __jsx("section", {
      className: "saas-work-process ptb-100"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "section-title"
    }, __jsx("h2", null, "Work Process"), __jsx("div", {
      className: "bar"
    }), __jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")), __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col-lg-3 col-md-6"
    }, __jsx("div", {
      className: "single-work-process"
    }, __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "icofont-calendar"
    })), __jsx("h3", null, "Plan"), __jsx("p", null, "Morbi pharetra sapien ut mattis."))), __jsx("div", {
      className: "col-lg-3 col-md-6"
    }, __jsx("div", {
      className: "single-work-process"
    }, __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "icofont-code-alt"
    })), __jsx("h3", null, "Develop"), __jsx("p", null, "Morbi pharetra sapien ut mattis."))), __jsx("div", {
      className: "col-lg-3 col-md-6"
    }, __jsx("div", {
      className: "single-work-process"
    }, __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "icofont-server"
    })), __jsx("h3", null, "Lounch"), __jsx("p", null, "Morbi pharetra sapien ut mattis."))), __jsx("div", {
      className: "col-lg-3 col-md-6"
    }, __jsx("div", {
      className: "single-work-process"
    }, __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "icofont-check"
    })), __jsx("h3", null, "Reporting"), __jsx("p", null, "Morbi pharetra sapien ut mattis."))))));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (WorkProcess);

/***/ }),

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "nDcN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("NHP8");
/* harmony import */ var react_countup__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_countup__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("iwtP");
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class Funfact extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      didViewCountUp: false
    });

    _defineProperty(this, "onVisibilityChange", isVisible => {
      if (isVisible) {
        this.setState({
          didViewCountUp: true
        });
      }
    });
  }

  render() {
    return __jsx("section", {
      className: "fun-facts-area ptb-100"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "row"
    }, __jsx("div", {
      className: "col-lg-3 col-sm-6"
    }, __jsx("div", {
      className: "single-funfact"
    }, __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "icofont-users"
    })), __jsx("h3", null, __jsx("span", {
      className: "count"
    }, __jsx(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_3___default.a, {
      onChange: this.onVisibilityChange,
      offset: {
        top: 10
      },
      delayedCall: true
    }, __jsx(react_countup__WEBPACK_IMPORTED_MODULE_2___default.a, {
      start: 0,
      end: this.state.didViewCountUp ? 806 : 0,
      duration: 3
    })))), __jsx("p", null, "Satisfied Client"))), __jsx("div", {
      className: "col-lg-3 col-sm-6"
    }, __jsx("div", {
      className: "single-funfact"
    }, __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "icofont-thumbs-up"
    })), __jsx("h3", null, __jsx("span", {
      className: "count"
    }, __jsx(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_3___default.a, {
      onChange: this.onVisibilityChange,
      offset: {
        top: 10
      },
      delayedCall: true
    }, __jsx(react_countup__WEBPACK_IMPORTED_MODULE_2___default.a, {
      start: 0,
      end: this.state.didViewCountUp ? 202 : 0,
      duration: 3
    })))), __jsx("p", null, "Appriciation"))), __jsx("div", {
      className: "col-lg-3 col-sm-6"
    }, __jsx("div", {
      className: "single-funfact"
    }, __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "icofont-diamond"
    })), __jsx("h3", null, __jsx("span", {
      className: "count"
    }, __jsx(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_3___default.a, {
      onChange: this.onVisibilityChange,
      offset: {
        top: 10
      },
      delayedCall: true
    }, __jsx(react_countup__WEBPACK_IMPORTED_MODULE_2___default.a, {
      start: 0,
      end: this.state.didViewCountUp ? 5241 : 0,
      duration: 3
    })))), __jsx("p", null, "Response time"))), __jsx("div", {
      className: "col-lg-3 col-sm-6"
    }, __jsx("div", {
      className: "single-funfact"
    }, __jsx("div", {
      className: "icon"
    }, __jsx("i", {
      className: "icofont-wrench"
    })), __jsx("h3", null, __jsx("span", {
      className: "count"
    }, __jsx(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_3___default.a, {
      onChange: this.onVisibilityChange,
      offset: {
        top: 10
      },
      delayedCall: true
    }, __jsx(react_countup__WEBPACK_IMPORTED_MODULE_2___default.a, {
      start: 0,
      end: this.state.didViewCountUp ? 512 : 0,
      duration: 3
    })))), __jsx("p", null, "Data Entry"))))), __jsx("div", {
      className: "fun-facts-inner-area"
    }, __jsx("div", {
      className: "container-fluid"
    }, __jsx("div", {
      className: "row h-100 justify-content-center align-items-center"
    }, __jsx("div", {
      className: "col-lg-6 col-md-12"
    }, __jsx("div", {
      className: "fun-facts-image"
    }, __jsx("img", {
      src: "/images/features-img2.png",
      alt: "image"
    }))), __jsx("div", {
      className: "col-lg-6 col-md-12"
    }, __jsx("div", {
      className: "fun-facts-inner-content"
    }, __jsx("h3", null, "Build Beautiful Interface Into Your Application"), __jsx("p", null, "Funding freemium technology focus equity bootstrapping usernce niche market. Seed round agile development growth hacking retur investment alpha. Investor advisor marketing pitch gen scrum project."), __jsx("p", null, "Responsive web design. Agile development innovator termsheet is users interface pitch scrum project research & development."), __jsx("ul", null, __jsx("li", null, "Unimited Video Call"), __jsx("li", null, "Add Favourite contact"), __jsx("li", null, "Camera Filter")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "#"
    }, __jsx("a", {
      className: "btn btn-primary"
    }, "Read More"))))))));
  }

}

/* harmony default export */ __webpack_exports__["a"] = (Funfact);

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("Osoz");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error(`Error when running the Router event: ${eventField}`); // tslint:disable-next-line:no-console

          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "pFRj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__("h74D");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./utils/ActiveLink.js
var __jsx = external_react_default.a.createElement;

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const ActiveLink = (_ref) => {
  let {
    router,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, ["router", "children"]);

  const child = external_react_["Children"].only(children);
  let className = child.props.className || '';

  if (router.pathname === props.href && props.activeClassName) {
    className = `${className} ${props.activeClassName}`.trim();
  }

  delete props.activeClassName;
  return __jsx(link_default.a, props, external_react_default.a.cloneElement(child, {
    className
  }));
};

/* harmony default export */ var utils_ActiveLink = (Object(router_["withRouter"])(ActiveLink));
// CONCATENATED MODULE: ./components/Layouts/SideDrawer.js

var SideDrawer_jsx = external_react_default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class SideDrawer_SideDrawer extends external_react_default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      drawer: false
    });

    _defineProperty(this, "closeDrawer", () => {
      this.props.onClick(this.state.drawer);
    });
  }

  render() {
    return SideDrawer_jsx("div", {
      className: "sidebar-modal"
    }, SideDrawer_jsx("div", {
      className: "modal right fade show",
      style: {
        display: 'block',
        paddingRight: '16px'
      }
    }, SideDrawer_jsx("div", {
      className: "modal-dialog",
      role: "document"
    }, SideDrawer_jsx("div", {
      className: "modal-content"
    }, SideDrawer_jsx("div", {
      className: "modal-header"
    }, SideDrawer_jsx("button", {
      type: "button",
      className: "close",
      "data-dismiss": "modal",
      "aria-label": "Close",
      onClick: this.closeDrawer
    }, SideDrawer_jsx("span", {
      "aria-hidden": "true"
    }, SideDrawer_jsx("i", {
      className: "icofont-close"
    }))), SideDrawer_jsx("h2", {
      className: "modal-title",
      id: "myModalLabel2"
    }, SideDrawer_jsx(link_default.a, {
      href: "/"
    }, SideDrawer_jsx("a", null, SideDrawer_jsx("img", {
      src: "/images/logot.png",
      alt: "logo"
    }))))), SideDrawer_jsx("div", {
      className: "modal-body"
    }, SideDrawer_jsx("div", {
      className: "sidebar-modal-widget"
    }, SideDrawer_jsx("h3", {
      className: "title"
    }, "Additional Links"), SideDrawer_jsx("ul", null, SideDrawer_jsx("li", null, SideDrawer_jsx(link_default.a, {
      href: "/login"
    }, SideDrawer_jsx("a", null, "Login"))), SideDrawer_jsx("li", null, SideDrawer_jsx(link_default.a, {
      href: "/signup"
    }, SideDrawer_jsx("a", null, "Register"))), SideDrawer_jsx("li", null, SideDrawer_jsx(link_default.a, {
      href: "/faq"
    }, SideDrawer_jsx("a", null, "FAQ"))), SideDrawer_jsx("li", null, SideDrawer_jsx(link_default.a, {
      href: "#"
    }, SideDrawer_jsx("a", null, "Logout"))))), SideDrawer_jsx("div", {
      className: "sidebar-modal-widget"
    }, SideDrawer_jsx("h3", {
      className: "title"
    }, "Contact Info"), SideDrawer_jsx("ul", {
      className: "contact-info"
    }, SideDrawer_jsx("li", null, SideDrawer_jsx("i", {
      className: "icofont-google-map"
    }), "Address", SideDrawer_jsx("span", null, "1660 Travis Street Miramar, FL 33025, California")), SideDrawer_jsx("li", null, SideDrawer_jsx("i", {
      className: "icofont-email"
    }), "Email", SideDrawer_jsx("span", null, "admin@mojosa.com")), SideDrawer_jsx("li", null, SideDrawer_jsx("i", {
      className: "icofont-phone"
    }), "Phone", SideDrawer_jsx("span", null, "+123 456 7890")))), SideDrawer_jsx("div", {
      className: "sidebar-modal-widget"
    }, SideDrawer_jsx("h3", {
      className: "title"
    }, "Connect With Us"), SideDrawer_jsx("ul", {
      className: "social-list"
    }, SideDrawer_jsx("li", null, SideDrawer_jsx(link_default.a, {
      href: "#"
    }, SideDrawer_jsx("a", null, SideDrawer_jsx("i", {
      className: "icofont-facebook"
    })))), SideDrawer_jsx("li", null, SideDrawer_jsx(link_default.a, {
      href: "#"
    }, SideDrawer_jsx("a", null, SideDrawer_jsx("i", {
      className: "icofont-twitter"
    })))), SideDrawer_jsx("li", null, SideDrawer_jsx(link_default.a, {
      href: "#"
    }, SideDrawer_jsx("a", null, SideDrawer_jsx("i", {
      className: "icofont-instagram"
    })))), SideDrawer_jsx("li", null, SideDrawer_jsx(link_default.a, {
      href: "#"
    }, SideDrawer_jsx("a", null, SideDrawer_jsx("i", {
      className: "icofont-linkedin"
    })))))))))));
  }

}

/* harmony default export */ var Layouts_SideDrawer = (SideDrawer_SideDrawer);
// CONCATENATED MODULE: ./components/Layouts/SearchForm.js
var SearchForm_jsx = external_react_default.a.createElement;

function SearchForm_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class SearchForm_SearchForm extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    SearchForm_defineProperty(this, "state", {
      searchForm: false,
      term: ''
    });

    SearchForm_defineProperty(this, "closeSearchForm", () => {
      this.props.onClick(this.state.searchForm);
    });

    SearchForm_defineProperty(this, "handleSearch", e => {
      e.preventDefault();
    });
  }

  render() {
    return SearchForm_jsx("div", {
      id: "header-search",
      className: "header-search open"
    }, SearchForm_jsx("button", {
      type: "button",
      onClick: this.closeSearchForm,
      className: "close"
    }, "\xD7"), SearchForm_jsx("form", {
      onSubmit: this.handleSearch,
      className: "header-search-form"
    }, SearchForm_jsx("input", {
      type: "search",
      placeholder: "Type here........",
      value: this.state.term,
      onChange: e => this.setState({
        term: e.target.value
      })
    }), SearchForm_jsx("button", {
      type: "submit",
      className: "btn btn-primary"
    }, "Search")));
  }

}

/* harmony default export */ var Layouts_SearchForm = (SearchForm_SearchForm);
// CONCATENATED MODULE: ./components/Layouts/Navbar.js
var Navbar_jsx = external_react_default.a.createElement;

function Navbar_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class Navbar_Navbar extends external_react_default.a.Component {
  constructor(...args) {
    super(...args);

    Navbar_defineProperty(this, "_isMounted", false);

    Navbar_defineProperty(this, "state", {
      drawer: false,
      searchForm: false,
      collapsed: true
    });

    Navbar_defineProperty(this, "toggleNavbar", () => {
      this.setState({
        collapsed: !this.state.collapsed
      });
    });

    Navbar_defineProperty(this, "handleDrawer", () => {
      this.setState(prevState => {
        return {
          drawer: !prevState.drawer
        };
      });
    });

    Navbar_defineProperty(this, "handleSearchForm", () => {
      this.setState(prevState => {
        return {
          searchForm: !prevState.searchForm
        };
      });
    });
  }

  componentDidMount() {
    this._isMounted = true;
    let elementId = document.getElementById('navbar');
    document.addEventListener('scroll', () => {
      if (window.scrollY > 170) {
        elementId.classList.add('is-sticky');
      } else {
        elementId.classList.remove('is-sticky');
      }
    });
    window.scrollTo(0, 0);
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    let {
      pathname
    } = this.props.router;
    let {
      products
    } = this.props;
    let layOutCls = '';
    let logo = '/images/logot.png';

    if (pathname == '/digital-marketing') {
      layOutCls = 'marketing-navbar';
      logo = '/images/logo-truthdrk.png';
    }

    const {
      collapsed
    } = this.state;
    const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';
    return Navbar_jsx(external_react_default.a.Fragment, null, Navbar_jsx("header", {
      id: "header"
    }, Navbar_jsx("div", {
      id: "navbar",
      className: `crake-nav ${layOutCls}`
    }, Navbar_jsx("div", {
      className: "container"
    }, Navbar_jsx("nav", {
      className: "navbar navbar-expand-md navbar-light"
    }, Navbar_jsx(utils_ActiveLink, {
      href: "/"
    }, Navbar_jsx("a", {
      className: "navbar-brand"
    }, Navbar_jsx("img", {
      src: logo,
      alt: "logo"
    }))), Navbar_jsx("button", {
      onClick: this.toggleNavbar,
      className: classTwo,
      type: "button",
      "data-toggle": "collapse",
      "data-target": "#navbarSupportedContent",
      "aria-controls": "navbarSupportedContent",
      "aria-expanded": "false",
      "aria-label": "Toggle navigation"
    }, Navbar_jsx("span", {
      className: "navbar-toggler-icon"
    })), Navbar_jsx("div", {
      className: classOne,
      id: "navbarSupportedContent"
    }, Navbar_jsx("ul", {
      className: "navbar-nav nav ml-auto"
    }, Navbar_jsx("li", {
      className: "nav-item"
    }, Navbar_jsx(utils_ActiveLink, {
      activeClassName: "active",
      href: "/"
    }, Navbar_jsx("a", {
      className: "nav-link"
    }, "Home"))), Navbar_jsx("li", {
      className: "nav-item"
    }, Navbar_jsx(utils_ActiveLink, {
      activeClassName: "active",
      href: "/about-one"
    }, Navbar_jsx("a", {
      className: "nav-link"
    }, "About"))), Navbar_jsx("li", null, Navbar_jsx(utils_ActiveLink, {
      activeClassName: "active",
      href: "/faq"
    }, Navbar_jsx("a", null, "FAQ"))), Navbar_jsx("li", {
      className: "nav-item"
    }, Navbar_jsx(utils_ActiveLink, {
      activeClassName: "active",
      href: "/contact"
    }, Navbar_jsx("a", {
      className: "nav-link"
    }, "Contact"))))))))), this.state.drawer ? Navbar_jsx(Layouts_SideDrawer, {
      onClick: this.handleDrawer
    }) : '', this.state.searchForm ? Navbar_jsx(Layouts_SearchForm, {
      onClick: this.handleSearchForm
    }) : '');
  }

}

const mapStateToProps = state => {
  return {
    products: state.addedItems
  };
};

/* harmony default export */ var Layouts_Navbar = __webpack_exports__["a"] = (Object(router_["withRouter"])(Object(external_react_redux_["connect"])(mapStateToProps)(Navbar_Navbar)));

/***/ }),

/***/ "q4RA":
/***/ (function(module, exports) {

module.exports = require("react-owl-carousel3");

/***/ }),

/***/ "tpJJ":
/***/ (function(module, exports) {

module.exports = require("react-modal-video");

/***/ })

/******/ });