module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		7: 0
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
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

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "4htw":
/***/ (function(module, exports) {

module.exports = require("wowjs");

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("wXAh");


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

/***/ "NHP8":
/***/ (function(module, exports) {

module.exports = require("react-countup");

/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

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

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cHt3":
/***/ (function(module, exports) {

module.exports = require("react-image-lightbox");

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

/***/ "kYf9":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

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

/***/ }),

/***/ "wXAh":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/Layouts/Navbar.js + 3 modules
var Navbar = __webpack_require__("pFRj");

// EXTERNAL MODULE: ./components/Layouts/Footer.js
var Footer = __webpack_require__("g7ta");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "next/dynamic"
var dynamic_ = __webpack_require__("/T1H");
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic_);

// EXTERNAL MODULE: external "react-visibility-sensor"
var external_react_visibility_sensor_ = __webpack_require__("iwtP");
var external_react_visibility_sensor_default = /*#__PURE__*/__webpack_require__.n(external_react_visibility_sensor_);

// EXTERNAL MODULE: external "react-modal-video"
var external_react_modal_video_ = __webpack_require__("tpJJ");
var external_react_modal_video_default = /*#__PURE__*/__webpack_require__.n(external_react_modal_video_);

// CONCATENATED MODULE: ./components/Agency/Banner.js
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const isServer = true;
const WOW = !isServer ? __webpack_require__("4htw") : null;




const OwlCarousel = dynamic_default()(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, "q4RA", 7)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("q4RA")],
    modules: ['react-owl-carousel3']
  }
});
const options = {
  items: 1,
  loop: true,
  autoplay: true,
  nav: true,
  responsiveClass: true,
  dots: false,
  autoplayHoverPause: true,
  mouseDrag: true,
  navText: ["<i class='icofont-bubble-left'></i>", "<i class='icofont-bubble-right'></i>"]
};

class Banner_Banner extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      isOpen: false,
      display: false
    });

    _defineProperty(this, "openModal", () => {
      this.setState({
        isOpen: true
      });
    });
  }

  componentDidMount() {
    this.setState({
      display: true
    });
    new WOW.WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 20,
      mobile: true,
      live: true
    }).init();
  }

  render() {
    return __jsx(external_react_default.a.Fragment, null, this.state.display ? __jsx(OwlCarousel, _extends({
      className: "home-slides startup-home owl-carousel owl-theme"
    }, options), __jsx("div", {
      className: "main-banner startup-bg1"
    }, __jsx("div", {
      className: "d-table"
    }, __jsx("div", {
      className: "d-table-cell"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "row"
    }, __jsx(external_react_visibility_sensor_default.a, null, ({
      isVisible
    }) => __jsx(external_react_default.a.Fragment, null, __jsx("div", {
      className: "col-lg-6 col-md-12"
    }, __jsx("div", {
      className: "hero-content"
    }, __jsx("h1", {
      className: isVisible ? "animated fadeInUp" : ''
    }, "It's Time To Create Your Own Business Scheme"), __jsx("p", {
      className: isVisible ? "animated zoomIn" : ''
    }, "Our passion to work hard and deliver excellent results. It could solve the needs of your customers and develop innovation."), __jsx(link_default.a, {
      href: "#"
    }, __jsx("a", {
      className: `
                                                                    btn btn-primary ${isVisible ? "animated zoomIn" : ''}
                                                                `
    }, "Get Started")), __jsx(link_default.a, {
      href: "#"
    }, __jsx("a", {
      onClick: e => {
        e.preventDefault();
        this.openModal();
      },
      className: `
                                                                    video-btn popup-youtube ${isVisible ? "animated fadeInDown" : ''}
                                                                `
    }, "Watch Video", __jsx("i", {
      className: "icofont-play-alt-3"
    }))))), __jsx("div", {
      className: "col-lg-6 col-md-12"
    }, __jsx("div", {
      className: `
                                                            startup-image
                                                        `
    }, __jsx("img", {
      src: "/images/startup-shape/board.png",
      className: "wow fadeInDown",
      "data-wow-delay": "0.6s",
      alt: "board"
    }), __jsx("img", {
      src: "/images/startup-shape/chart1.png",
      className: "wow fadeInUp",
      "data-wow-delay": "0.6s",
      alt: "chart1"
    }), __jsx("img", {
      src: "/images/startup-shape/chart2.png",
      className: "wow fadeInLeft",
      "data-wow-delay": "0.6s",
      alt: "chart2"
    }), __jsx("img", {
      src: "/images/startup-shape/check-mark.png",
      className: "wow zoomIn",
      "data-wow-delay": "0.6s",
      alt: "check-mark"
    }), __jsx("img", {
      src: "/images/startup-shape/girl1.png",
      className: "wow bounceIn",
      "data-wow-delay": "0.6s",
      alt: "girl1"
    }), __jsx("img", {
      src: "/images/startup-shape/girl2.png",
      className: "wow fadeInDown",
      "data-wow-delay": "0.6s",
      alt: "girl2"
    }), __jsx("img", {
      src: "/images/startup-shape/line.png",
      className: "wow zoomIn",
      "data-wow-delay": "0.6s",
      alt: "line"
    }), __jsx("img", {
      src: "/images/startup-shape/man.png",
      className: "wow fadeInUp",
      "data-wow-delay": "0.6s",
      alt: "man"
    }), __jsx("img", {
      src: "/images/startup-shape/progress.png",
      className: "wow rotateIn",
      "data-wow-delay": "0.6s",
      alt: "progress"
    }), __jsx("img", {
      src: "/images/startup-shape/table.png",
      className: "wow fadeInUp",
      "data-wow-delay": "0.6s",
      alt: "table"
    }), __jsx("img", {
      src: "/images/startup-shape/main-image.png",
      className: "wow fadeInUp",
      "data-wow-delay": "0.6s",
      alt: "main-image"
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
    }))), __jsx("div", {
      className: "main-banner startup-bg2"
    }, __jsx("div", {
      className: "d-table"
    }, __jsx("div", {
      className: "d-table-cell"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "row"
    }, __jsx(external_react_visibility_sensor_default.a, null, ({
      isVisible
    }) => __jsx(external_react_default.a.Fragment, null, __jsx("div", {
      className: "col-lg-6 col-md-12"
    }, __jsx("div", {
      className: "hero-content"
    }, __jsx("h1", {
      className: isVisible ? "animated fadeInUp" : ''
    }, "It's Time To Create Your Own Business Scheme"), __jsx("p", {
      className: isVisible ? "animated zoomIn" : ''
    }, "Our passion to work hard and deliver excellent results. It could solve the needs of your customers and develop innovation."), __jsx(link_default.a, {
      href: "#"
    }, __jsx("a", {
      className: `
                                                                    btn btn-primary ${isVisible ? "animated zoomIn" : ''}
                                                                `
    }, "Get Started")), __jsx(link_default.a, {
      href: "#"
    }, __jsx("a", {
      onClick: e => {
        e.preventDefault();
        this.openModal();
      },
      className: `
                                                                    video-btn popup-youtube ${isVisible ? "animated fadeInDown" : ''}
                                                                `
    }, "Watch Video", __jsx("i", {
      className: "icofont-play-alt-3"
    }))))), __jsx("div", {
      className: "col-lg-6 col-md-12"
    }, __jsx("div", {
      className: `
                                                            startup-image ${isVisible ? "animated zoomIn" : ''}
                                                        `
    }, __jsx("img", {
      src: "/images/startup-shape/board.png",
      className: "wow fadeInDown",
      "data-wow-delay": "0.6s",
      alt: "board"
    }), __jsx("img", {
      src: "/images/startup-shape/chart1.png",
      className: "wow fadeInUp",
      "data-wow-delay": "0.6s",
      alt: "chart1"
    }), __jsx("img", {
      src: "/images/startup-shape/chart2.png",
      className: "wow fadeInLeft",
      "data-wow-delay": "0.6s",
      alt: "chart2"
    }), __jsx("img", {
      src: "/images/startup-shape/check-mark.png",
      className: "wow zoomIn",
      "data-wow-delay": "0.6s",
      alt: "check-mark"
    }), __jsx("img", {
      src: "/images/startup-shape/girl1.png",
      className: "wow bounceIn",
      "data-wow-delay": "0.6s",
      alt: "girl1"
    }), __jsx("img", {
      src: "/images/startup-shape/girl2.png",
      className: "wow fadeInDown",
      "data-wow-delay": "0.6s",
      alt: "girl2"
    }), __jsx("img", {
      src: "/images/startup-shape/line.png",
      className: "wow zoomIn",
      "data-wow-delay": "0.6s",
      alt: "line"
    }), __jsx("img", {
      src: "/images/startup-shape/man.png",
      className: "wow fadeInUp",
      "data-wow-delay": "0.6s",
      alt: "man"
    }), __jsx("img", {
      src: "/images/startup-shape/progress.png",
      className: "wow rotateIn",
      "data-wow-delay": "0.6s",
      alt: "progress"
    }), __jsx("img", {
      src: "/images/startup-shape/table.png",
      className: "wow fadeInUp",
      "data-wow-delay": "0.6s",
      alt: "table"
    }), __jsx("img", {
      src: "/images/startup-shape/main-image.png",
      className: "wow fadeInUp",
      "data-wow-delay": "0.6s",
      alt: "main-image"
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
    }))), __jsx("div", {
      className: "main-banner startup-bg3"
    }, __jsx("div", {
      className: "d-table"
    }, __jsx("div", {
      className: "d-table-cell"
    }, __jsx("div", {
      className: "container"
    }, __jsx("div", {
      className: "row"
    }, __jsx(external_react_visibility_sensor_default.a, null, ({
      isVisible
    }) => __jsx(external_react_default.a.Fragment, null, __jsx("div", {
      className: "col-lg-6 col-md-12"
    }, __jsx("div", {
      className: "hero-content"
    }, __jsx("h1", {
      className: isVisible ? "animated fadeInUp" : ''
    }, "It's Time To Create Your Own Business Scheme"), __jsx("p", {
      className: isVisible ? "animated zoomIn" : ''
    }, "Our passion to work hard and deliver excellent results. It could solve the needs of your customers and develop innovation."), __jsx(link_default.a, {
      href: "#"
    }, __jsx("a", {
      className: `
                                                                    btn btn-primary ${isVisible ? "animated zoomIn" : ''}
                                                                `
    }, "Get Started")), __jsx(link_default.a, {
      href: "#"
    }, __jsx("a", {
      onClick: e => {
        e.preventDefault();
        this.openModal();
      },
      className: `
                                                                    video-btn popup-youtube ${isVisible ? "animated fadeInDown" : ''}
                                                                `
    }, "Watch Video", __jsx("i", {
      className: "icofont-play-alt-3"
    }))))), __jsx("div", {
      className: "col-lg-6 col-md-12"
    }, __jsx("div", {
      className: `
                                                            startup-image ${isVisible ? "animated zoomIn" : ''}
                                                        `
    }, __jsx("img", {
      src: "/images/startup-shape/board.png",
      className: "wow fadeInDown",
      "data-wow-delay": "0.6s",
      alt: "board"
    }), __jsx("img", {
      src: "/images/startup-shape/chart1.png",
      className: "wow fadeInUp",
      "data-wow-delay": "0.6s",
      alt: "chart1"
    }), __jsx("img", {
      src: "/images/startup-shape/chart2.png",
      className: "wow fadeInLeft",
      "data-wow-delay": "0.6s",
      alt: "chart2"
    }), __jsx("img", {
      src: "/images/startup-shape/check-mark.png",
      className: "wow zoomIn",
      "data-wow-delay": "0.6s",
      alt: "check-mark"
    }), __jsx("img", {
      src: "/images/startup-shape/girl1.png",
      className: "wow bounceIn",
      "data-wow-delay": "0.6s",
      alt: "girl1"
    }), __jsx("img", {
      src: "/images/startup-shape/girl2.png",
      className: "wow fadeInDown",
      "data-wow-delay": "0.6s",
      alt: "girl2"
    }), __jsx("img", {
      src: "/images/startup-shape/line.png",
      className: "wow zoomIn",
      "data-wow-delay": "0.6s",
      alt: "line"
    }), __jsx("img", {
      src: "/images/startup-shape/man.png",
      className: "wow fadeInUp",
      "data-wow-delay": "0.6s",
      alt: "man"
    }), __jsx("img", {
      src: "/images/startup-shape/progress.png",
      className: "wow rotateIn",
      "data-wow-delay": "0.6s",
      alt: "progress"
    }), __jsx("img", {
      src: "/images/startup-shape/table.png",
      className: "wow fadeInUp",
      "data-wow-delay": "0.6s",
      alt: "table"
    }), __jsx("img", {
      src: "/images/startup-shape/main-image.png",
      className: "wow fadeInUp",
      "data-wow-delay": "0.6s",
      alt: "main-image"
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
    })))) : '', __jsx(external_react_modal_video_default.a, {
      channel: "youtube",
      isOpen: this.state.isOpen,
      videoId: "szuchBiLrEM",
      onClose: () => this.setState({
        isOpen: false
      })
    }));
  }

}

/* harmony default export */ var Agency_Banner = (Banner_Banner);
// CONCATENATED MODULE: ./components/Agency/Partner.js
var Partner_jsx = external_react_default.a.createElement;

function Partner_extends() { Partner_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Partner_extends.apply(this, arguments); }

function Partner_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const Partner_OwlCarousel = dynamic_default()(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, "q4RA", 7)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("q4RA")],
    modules: ['react-owl-carousel3']
  }
});
const Partner_options = {
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

class Partner_Partner extends external_react_default.a.Component {
  constructor(...args) {
    super(...args);

    Partner_defineProperty(this, "state", {
      display: false
    });
  }

  componentDidMount() {
    this.setState({
      display: true
    });
  }

  render() {
    return Partner_jsx("div", {
      className: "partner-area startup-partner"
    }, Partner_jsx("div", {
      className: "container"
    }, Partner_jsx("div", {
      className: "row"
    }, this.state.display ? Partner_jsx(Partner_OwlCarousel, Partner_extends({
      className: "partner-slides owl-carousel owl-theme"
    }, Partner_options), Partner_jsx("div", {
      className: "col-lg-12"
    }, Partner_jsx("div", {
      className: "item"
    }, Partner_jsx(link_default.a, {
      href: "#"
    }, Partner_jsx("a", null, Partner_jsx("img", {
      src: "/images/partner-1.png",
      alt: "partner"
    }))))), Partner_jsx("div", {
      className: "col-lg-12"
    }, Partner_jsx("div", {
      className: "item"
    }, Partner_jsx(link_default.a, {
      href: "#"
    }, Partner_jsx("a", null, Partner_jsx("img", {
      src: "/images/partner-2.png",
      alt: "partner"
    }))))), Partner_jsx("div", {
      className: "col-lg-12"
    }, Partner_jsx("div", {
      className: "item"
    }, Partner_jsx(link_default.a, {
      href: "#"
    }, Partner_jsx("a", null, Partner_jsx("img", {
      src: "/images/partner-3.png",
      alt: "partner"
    }))))), Partner_jsx("div", {
      className: "col-lg-12"
    }, Partner_jsx("div", {
      className: "item"
    }, Partner_jsx(link_default.a, {
      href: "#"
    }, Partner_jsx("a", null, Partner_jsx("img", {
      src: "/images/partner-4.png",
      alt: "partner"
    }))))), Partner_jsx("div", {
      className: "col-lg-12"
    }, Partner_jsx("div", {
      className: "item"
    }, Partner_jsx(link_default.a, {
      href: "#"
    }, Partner_jsx("a", null, Partner_jsx("img", {
      src: "/images/partner-5.png",
      alt: "partner"
    }))))), Partner_jsx("div", {
      className: "col-lg-12"
    }, Partner_jsx("div", {
      className: "item"
    }, Partner_jsx(link_default.a, {
      href: "#"
    }, Partner_jsx("a", null, Partner_jsx("img", {
      src: "/images/partner-6.png",
      alt: "partner"
    }))))), Partner_jsx("div", {
      className: "col-lg-12"
    }, Partner_jsx("div", {
      className: "item"
    }, Partner_jsx(link_default.a, {
      href: "#"
    }, Partner_jsx("a", null, Partner_jsx("img", {
      src: "/images/partner-7.png",
      alt: "partner"
    })))))) : '')));
  }

}

/* harmony default export */ var Agency_Partner = (Partner_Partner);
// CONCATENATED MODULE: ./components/Agency/Features.js
var Features_jsx = external_react_default.a.createElement;



class Features_Features extends external_react_["Component"] {
  render() {
    return Features_jsx("section", {
      className: "features-area startup-features ptb-100"
    }, Features_jsx("div", {
      className: "container"
    }, Features_jsx("div", {
      className: "row h-100 justify-content-center align-items-center"
    }, Features_jsx("div", {
      className: "col-lg-7 col-md-12"
    }, Features_jsx("div", {
      className: "row"
    }, Features_jsx("div", {
      className: "col-lg-6 col-md-6"
    }, Features_jsx("div", {
      className: "single-holder-box"
    }, Features_jsx("img", {
      src: "/images/payment-img1.png",
      alt: "image"
    }), Features_jsx("h3", null, "Project Creation"), Features_jsx("p", null, "Duis hendrerit eget dolor non lora pulvinar. In conse.")), Features_jsx("div", {
      className: "single-holder-box mt-30"
    }, Features_jsx("img", {
      src: "/images/payment-img2.png",
      alt: "image"
    }), Features_jsx("h3", null, "Software Development"), Features_jsx("p", null, "Duis hendrerit eget dolor non lora pulvinar. In conse."))), Features_jsx("div", {
      className: "col-lg-6 col-md-6"
    }, Features_jsx("div", {
      className: "single-holder-box mt-50"
    }, Features_jsx("img", {
      src: "/images/payment-img3.png",
      alt: "image"
    }), Features_jsx("h3", null, "Porject Management"), Features_jsx("p", null, "Duis hendrerit eget dolor non lora pulvinar. In conse.")), Features_jsx("div", {
      className: "single-holder-box mt-30"
    }, Features_jsx("img", {
      src: "/images/payment-img4.png",
      alt: "image"
    }), Features_jsx("h3", null, "Software Update"), Features_jsx("p", null, "Duis hendrerit eget dolor non lora pulvinar. In conse."))))), Features_jsx("div", {
      className: "col-lg-5 col-md-12"
    }, Features_jsx("div", {
      className: "features-holder-content"
    }, Features_jsx("div", {
      className: "section-title"
    }, Features_jsx("h2", null, "Designed for startups with expert developer"), Features_jsx("div", {
      className: "bar"
    }), Features_jsx("p", null, "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.")), Features_jsx("p", null, "We\u2019re also experts at finding the sweet spot between Google\u2019s guidelines and what is commercially right for you. We have progressive theories on search as a tool for retention of customers, not just for acquisition. we always measure, always analyze and always innovate."), Features_jsx(link_default.a, {
      href: "#"
    }, Features_jsx("a", {
      className: "btn btn-primary"
    }, "Our Services")))))), Features_jsx("div", {
      className: "features-inner-area"
    }, Features_jsx("div", {
      className: "container"
    }, Features_jsx("div", {
      className: "row h-100 justify-content-center align-items-center"
    }, Features_jsx("div", {
      className: "col-lg-6 col-md-12"
    }, Features_jsx("div", {
      className: "features-inner-content"
    }, Features_jsx("div", {
      className: "features-item"
    }, Features_jsx("div", {
      className: "icon"
    }, Features_jsx("i", {
      className: "icofont-ui-call"
    })), Features_jsx("h3", null, "Cloud Service"), Features_jsx("p", null, "Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project to an individual person's workload.")), Features_jsx("div", {
      className: "features-item"
    }, Features_jsx("div", {
      className: "icon"
    }, Features_jsx("i", {
      className: "icofont-gift"
    })), Features_jsx("h3", null, "Daily Free Gift"), Features_jsx("p", null, "Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project to an individual person's workload.")), Features_jsx("div", {
      className: "features-item"
    }, Features_jsx("div", {
      className: "icon"
    }, Features_jsx("i", {
      className: "icofont-qr-code"
    })), Features_jsx("h3", null, "24/7 Support"), Features_jsx("p", null, "Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project to an individual person's workload.")))), Features_jsx("div", {
      className: "col-lg-6 col-md-12"
    }, Features_jsx("div", {
      className: "features-image"
    }, Features_jsx("img", {
      src: "/images/features-img1.png",
      alt: "image"
    })))))), Features_jsx("div", {
      className: "shape7"
    }, Features_jsx("img", {
      src: "/images/shape7.png",
      alt: "shape"
    })), Features_jsx("div", {
      className: "shape3"
    }, Features_jsx("img", {
      src: "/images/shape3.png",
      alt: "img"
    })), Features_jsx("div", {
      className: "bg-gray shape-1"
    }), Features_jsx("div", {
      className: "shape6"
    }, Features_jsx("img", {
      src: "/images/shape6.png",
      alt: "img"
    })), Features_jsx("div", {
      className: "shape8 rotateme"
    }, Features_jsx("img", {
      src: "/images/shape8.svg",
      alt: "shape"
    })), Features_jsx("div", {
      className: "shape9"
    }, Features_jsx("img", {
      src: "/images/shape9.svg",
      alt: "shape"
    })), Features_jsx("div", {
      className: "shape10"
    }, Features_jsx("img", {
      src: "/images/shape10.svg",
      alt: "shape"
    })), Features_jsx("div", {
      className: "shape11 rotateme"
    }, Features_jsx("img", {
      src: "/images/shape11.svg",
      alt: "shape"
    })));
  }

}

/* harmony default export */ var Agency_Features = (Features_Features);
// CONCATENATED MODULE: ./components/Agency/Overview.js
var Overview_jsx = external_react_default.a.createElement;



class Overview_Overview extends external_react_["Component"] {
  render() {
    return Overview_jsx("section", {
      className: "overview-section ptb-100"
    }, Overview_jsx("div", {
      className: "container"
    }, Overview_jsx("div", {
      className: "overview-box"
    }, Overview_jsx("div", {
      className: "row h-100 justify-content-center align-items-center"
    }, Overview_jsx("div", {
      className: "col-lg-6 col-md-6 overview-img"
    }, Overview_jsx("img", {
      src: "/images/marketing-1.png",
      alt: "image"
    })), Overview_jsx("div", {
      className: "col-lg-6 col-md-6 overview-content"
    }, Overview_jsx("div", {
      className: "icon"
    }, Overview_jsx("i", {
      className: "icofont-power"
    })), Overview_jsx("h3", null, "Get Started With Our Software"), Overview_jsx("p", null, "Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project to an individual person's workload."), Overview_jsx("ul", null, Overview_jsx("li", null, "Unimited Video Call"), Overview_jsx("li", null, "Add Favourite contact"), Overview_jsx("li", null, "Camera Filter")), Overview_jsx(link_default.a, {
      href: "#"
    }, Overview_jsx("a", {
      className: "btn btn-primary"
    }, "Read More"))))), Overview_jsx("div", {
      className: "overview-box"
    }, Overview_jsx("div", {
      className: "row h-100 justify-content-center align-items-center"
    }, Overview_jsx("div", {
      className: "col-lg-6 col-md-6 overview-content"
    }, Overview_jsx("div", {
      className: "icon"
    }, Overview_jsx("i", {
      className: "icofont-share-alt"
    })), Overview_jsx("h3", null, "Solve Your Problem With Very Faster"), Overview_jsx("p", null, "Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project to an individual person's workload."), Overview_jsx("ul", null, Overview_jsx("li", null, "Unimited Video Call"), Overview_jsx("li", null, "Add Favourite contact"), Overview_jsx("li", null, "Camera Filter")), Overview_jsx(link_default.a, {
      href: "#"
    }, Overview_jsx("a", {
      className: "btn btn-primary"
    }, "Read More"))), Overview_jsx("div", {
      className: "col-lg-6 col-md-6 overview-img"
    }, Overview_jsx("img", {
      src: "/images/marketing-2.png",
      alt: "image"
    })))), Overview_jsx("div", {
      className: "overview-box"
    }, Overview_jsx("div", {
      className: "row h-100 justify-content-center align-items-center"
    }, Overview_jsx("div", {
      className: "col-lg-6 col-md-6 overview-img"
    }, Overview_jsx("img", {
      src: "/images/marketing.png",
      alt: "image"
    })), Overview_jsx("div", {
      className: "col-lg-6 col-md-6 overview-content"
    }, Overview_jsx("div", {
      className: "icon"
    }, Overview_jsx("i", {
      className: "icofont-ui-messaging"
    })), Overview_jsx("h3", null, "Engineered And Optimization By Conveying."), Overview_jsx("p", null, "Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project to an individual person's workload."), Overview_jsx("ul", null, Overview_jsx("li", null, "Unimited Video Call"), Overview_jsx("li", null, "Add Favourite contact"), Overview_jsx("li", null, "Camera Filter")), Overview_jsx(link_default.a, {
      href: "#"
    }, Overview_jsx("a", {
      className: "btn btn-primary"
    }, "Read More"))))), Overview_jsx("div", {
      className: "overview-box"
    }, Overview_jsx("div", {
      className: "row h-100 justify-content-center align-items-center"
    }, Overview_jsx("div", {
      className: "col-lg-6 col-md-6 overview-content"
    }, Overview_jsx("div", {
      className: "icon"
    }, Overview_jsx("i", {
      className: "icofont-users-social"
    })), Overview_jsx("h3", null, "Quick & Easy Process"), Overview_jsx("p", null, "Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project to an individual person's workload."), Overview_jsx("ul", null, Overview_jsx("li", null, "Unimited Video Call"), Overview_jsx("li", null, "Add Favourite contact"), Overview_jsx("li", null, "Camera Filter")), Overview_jsx(link_default.a, {
      href: "#"
    }, Overview_jsx("a", {
      className: "btn btn-primary"
    }, "Read More"))), Overview_jsx("div", {
      className: "col-lg-6 col-md-6 overview-img"
    }, Overview_jsx("img", {
      src: "/images/marketing-3.png",
      alt: "image"
    }))))), Overview_jsx("div", {
      className: "shape7"
    }, Overview_jsx("img", {
      src: "/images/shape7.png",
      alt: "shape"
    })), Overview_jsx("div", {
      className: "shape3"
    }, Overview_jsx("img", {
      src: "/images/shape3.png",
      alt: "img"
    })), Overview_jsx("div", {
      className: "bg-gray shape-1"
    }), Overview_jsx("div", {
      className: "shape6"
    }, Overview_jsx("img", {
      src: "/images/shape6.png",
      alt: "img"
    })), Overview_jsx("div", {
      className: "shape8 rotateme"
    }, Overview_jsx("img", {
      src: "/images/shape8.svg",
      alt: "shape"
    })), Overview_jsx("div", {
      className: "shape9"
    }, Overview_jsx("img", {
      src: "/images/shape9.svg",
      alt: "shape"
    })), Overview_jsx("div", {
      className: "shape10"
    }, Overview_jsx("img", {
      src: "/images/shape10.svg",
      alt: "shape"
    })), Overview_jsx("div", {
      className: "shape11 rotateme"
    }, Overview_jsx("img", {
      src: "/images/shape11.svg",
      alt: "shape"
    })));
  }

}

/* harmony default export */ var Agency_Overview = (Overview_Overview);
// EXTERNAL MODULE: external "react-countup"
var external_react_countup_ = __webpack_require__("NHP8");
var external_react_countup_default = /*#__PURE__*/__webpack_require__.n(external_react_countup_);

// CONCATENATED MODULE: ./components/Agency/Funfact.js
var Funfact_jsx = external_react_default.a.createElement;

function Funfact_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class Funfact_Funfact extends external_react_default.a.Component {
  constructor(...args) {
    super(...args);

    Funfact_defineProperty(this, "state", {
      didViewCountUp: false
    });

    Funfact_defineProperty(this, "onVisibilityChange", isVisible => {
      if (isVisible) {
        this.setState({
          didViewCountUp: true
        });
      }
    });
  }

  render() {
    return Funfact_jsx("section", {
      className: "app-funfacts-area ptb-100"
    }, Funfact_jsx("div", {
      className: "container"
    }, Funfact_jsx("div", {
      className: "row"
    }, Funfact_jsx("div", {
      className: "col-lg-3 col-sm-6"
    }, Funfact_jsx("div", {
      className: "single-funfact"
    }, Funfact_jsx("div", {
      className: "icon"
    }, Funfact_jsx("i", {
      className: "icofont-book-alt"
    })), Funfact_jsx("h3", null, Funfact_jsx("span", {
      className: "count"
    }, Funfact_jsx(external_react_visibility_sensor_default.a, {
      onChange: this.onVisibilityChange,
      offset: {
        top: 10
      },
      delayedCall: true
    }, Funfact_jsx(external_react_countup_default.a, {
      start: 0,
      end: this.state.didViewCountUp ? 5 : 0,
      duration: 3
    }))), "M"), Funfact_jsx("p", null, "Copies Sold"))), Funfact_jsx("div", {
      className: "col-lg-3 col-sm-6"
    }, Funfact_jsx("div", {
      className: "single-funfact"
    }, Funfact_jsx("div", {
      className: "icon"
    }, Funfact_jsx("i", {
      className: "icofont-coffee-alt"
    })), Funfact_jsx("h3", null, Funfact_jsx("span", {
      className: "count"
    }, Funfact_jsx(external_react_visibility_sensor_default.a, {
      onChange: this.onVisibilityChange,
      offset: {
        top: 10
      },
      delayedCall: true
    }, Funfact_jsx(external_react_countup_default.a, {
      start: 0,
      end: this.state.didViewCountUp ? 1 : 0,
      duration: 3
    }))), "M"), Funfact_jsx("p", null, "Cup Of Coffe"))), Funfact_jsx("div", {
      className: "col-lg-3 col-sm-6"
    }, Funfact_jsx("div", {
      className: "single-funfact"
    }, Funfact_jsx("div", {
      className: "icon"
    }, Funfact_jsx("i", {
      className: "icofont-book-mark"
    })), Funfact_jsx("h3", null, Funfact_jsx("span", {
      className: "count"
    }, Funfact_jsx(external_react_visibility_sensor_default.a, {
      onChange: this.onVisibilityChange,
      offset: {
        top: 10
      },
      delayedCall: true
    }, Funfact_jsx(external_react_countup_default.a, {
      start: 0,
      end: this.state.didViewCountUp ? 1 : 0,
      duration: 3
    }))), "M"), Funfact_jsx("p", null, "Copies Released"))), Funfact_jsx("div", {
      className: "col-lg-3 col-sm-6"
    }, Funfact_jsx("div", {
      className: "single-funfact"
    }, Funfact_jsx("div", {
      className: "icon"
    }, Funfact_jsx("i", {
      className: "icofont-ui-user"
    })), Funfact_jsx("h3", null, Funfact_jsx("span", {
      className: "count"
    }, Funfact_jsx(external_react_visibility_sensor_default.a, {
      onChange: this.onVisibilityChange,
      offset: {
        top: 10
      },
      delayedCall: true
    }, Funfact_jsx(external_react_countup_default.a, {
      start: 0,
      end: this.state.didViewCountUp ? 50 : 0,
      duration: 3
    }))), "K"), Funfact_jsx("p", null, "Happy Readers"))))));
  }

}

/* harmony default export */ var Agency_Funfact = (Funfact_Funfact);
// CONCATENATED MODULE: ./components/Agency/SaasTools.js
var SaasTools_jsx = external_react_default.a.createElement;

function SaasTools_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class SaasTools_SaasTools extends external_react_default.a.Component {
  constructor(...args) {
    super(...args);

    SaasTools_defineProperty(this, "openTabSection", (evt, tabNmae) => {
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
    return SaasTools_jsx("section", {
      className: "saas-tools ptb-100 bg-gray"
    }, SaasTools_jsx("div", {
      className: "container"
    }, SaasTools_jsx("div", {
      className: "section-title"
    }, SaasTools_jsx("h2", null, "Tools for Everyone"), SaasTools_jsx("div", {
      className: "bar"
    }), SaasTools_jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")), SaasTools_jsx("div", {
      className: "row"
    }, SaasTools_jsx("div", {
      className: "col-lg-12 col-md-12"
    }, SaasTools_jsx("div", {
      className: "tab"
    }, SaasTools_jsx("ul", {
      className: "tabs active"
    }, SaasTools_jsx("li", {
      className: "current",
      onClick: e => this.openTabSection(e, 'tab1')
    }, SaasTools_jsx(link_default.a, {
      href: "#"
    }, SaasTools_jsx("a", {
      onClick: e => e.preventDefault()
    }, SaasTools_jsx("i", {
      className: "icofont-dashboard-web"
    }), SaasTools_jsx("br", null), "Dashboard"))), SaasTools_jsx("li", {
      onClick: e => this.openTabSection(e, 'tab2')
    }, SaasTools_jsx(link_default.a, {
      href: "#"
    }, SaasTools_jsx("a", {
      onClick: e => e.preventDefault()
    }, SaasTools_jsx("i", {
      className: "icofont-inbox"
    }), SaasTools_jsx("br", null), "Inbox"))), SaasTools_jsx("li", {
      onClick: e => this.openTabSection(e, 'tab3')
    }, SaasTools_jsx(link_default.a, {
      href: "#"
    }, SaasTools_jsx("a", {
      onClick: e => e.preventDefault()
    }, SaasTools_jsx("i", {
      className: "icofont-ui-calendar"
    }), SaasTools_jsx("br", null), "Calendar"))), SaasTools_jsx("li", {
      onClick: e => this.openTabSection(e, 'tab4')
    }, SaasTools_jsx(link_default.a, {
      href: "#"
    }, SaasTools_jsx("a", {
      onClick: e => e.preventDefault()
    }, SaasTools_jsx("i", {
      className: "icofont-copy-invert"
    }), SaasTools_jsx("br", null), "Invoicing"))), SaasTools_jsx("li", {
      onClick: e => this.openTabSection(e, 'tab5')
    }, SaasTools_jsx(link_default.a, {
      href: "#"
    }, SaasTools_jsx("a", {
      onClick: e => e.preventDefault()
    }, SaasTools_jsx("i", {
      className: "icofont-wrench"
    }), SaasTools_jsx("br", null), "Reporting")))), SaasTools_jsx("div", {
      className: "tab_content"
    }, SaasTools_jsx("div", {
      id: "tab1",
      className: "tabs_item"
    }, SaasTools_jsx("div", {
      className: "row h-100 justify-content-center align-items-center"
    }, SaasTools_jsx("div", {
      className: "col-lg-6 col-md-6"
    }, SaasTools_jsx("div", {
      className: "tabs_item_content mt-0"
    }, SaasTools_jsx("h3", null, "Dashboard"), SaasTools_jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo."), SaasTools_jsx("ul", null, SaasTools_jsx("li", null, SaasTools_jsx("i", {
      className: "icofont-ui-check"
    }), " Creative Design"), SaasTools_jsx("li", null, SaasTools_jsx("i", {
      className: "icofont-ui-check"
    }), " Retina Ready"), SaasTools_jsx("li", null, SaasTools_jsx("i", {
      className: "icofont-ui-check"
    }), " Modern Design"), SaasTools_jsx("li", null, SaasTools_jsx("i", {
      className: "icofont-ui-check"
    }), " Digital Marketing & Branding")))), SaasTools_jsx("div", {
      className: "col-lg-6 col-md-6"
    }, SaasTools_jsx("div", {
      className: "tabs_item_img"
    }, SaasTools_jsx("img", {
      src: "/images/features-img1.png",
      alt: "img"
    }))))), SaasTools_jsx("div", {
      id: "tab2",
      className: "tabs_item"
    }, SaasTools_jsx("div", {
      className: "row h-100 justify-content-center align-items-center"
    }, SaasTools_jsx("div", {
      className: "col-lg-6 col-md-6"
    }, SaasTools_jsx("div", {
      className: "tabs_item_img"
    }, SaasTools_jsx("img", {
      src: "/images/features-img1.png",
      alt: "img"
    }))), SaasTools_jsx("div", {
      className: "col-lg-6 col-md-6"
    }, SaasTools_jsx("div", {
      className: "tabs_item_content mb-0"
    }, SaasTools_jsx("h3", null, "Inbox"), SaasTools_jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo."), SaasTools_jsx("ul", null, SaasTools_jsx("li", null, SaasTools_jsx("i", {
      className: "icofont-ui-check"
    }), " Creative Design"), SaasTools_jsx("li", null, SaasTools_jsx("i", {
      className: "icofont-ui-check"
    }), " Retina Ready"), SaasTools_jsx("li", null, SaasTools_jsx("i", {
      className: "icofont-ui-check"
    }), " Modern Design"), SaasTools_jsx("li", null, SaasTools_jsx("i", {
      className: "icofont-ui-check"
    }), " Digital Marketing & Branding")))))), SaasTools_jsx("div", {
      id: "tab3",
      className: "tabs_item"
    }, SaasTools_jsx("div", {
      className: "row h-100 justify-content-center align-items-center"
    }, SaasTools_jsx("div", {
      className: "col-lg-6 col-md-6"
    }, SaasTools_jsx("div", {
      className: "tabs_item_content mt-0"
    }, SaasTools_jsx("h3", null, "Calendar"), SaasTools_jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo."), SaasTools_jsx("ul", null, SaasTools_jsx("li", null, SaasTools_jsx("i", {
      className: "icofont-ui-check"
    }), " Creative Design"), SaasTools_jsx("li", null, SaasTools_jsx("i", {
      className: "icofont-ui-check"
    }), " Retina Ready"), SaasTools_jsx("li", null, SaasTools_jsx("i", {
      className: "icofont-ui-check"
    }), " Modern Design"), SaasTools_jsx("li", null, SaasTools_jsx("i", {
      className: "icofont-ui-check"
    }), " Digital Marketing & Branding")))), SaasTools_jsx("div", {
      className: "col-lg-6 col-md-6"
    }, SaasTools_jsx("div", {
      className: "tabs_item_img"
    }, SaasTools_jsx("img", {
      src: "/images/features-img1.png",
      alt: "img"
    }))))), SaasTools_jsx("div", {
      id: "tab4",
      className: "tabs_item"
    }, SaasTools_jsx("div", {
      className: "row h-100 justify-content-center align-items-center"
    }, SaasTools_jsx("div", {
      className: "col-lg-6 col-md-6"
    }, SaasTools_jsx("div", {
      className: "tabs_item_img"
    }, SaasTools_jsx("img", {
      src: "/images/features-img1.png",
      alt: "img"
    }))), SaasTools_jsx("div", {
      className: "col-lg-6 col-md-6"
    }, SaasTools_jsx("div", {
      className: "tabs_item_content mb-0"
    }, SaasTools_jsx("h3", null, "Invoicing"), SaasTools_jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo."), SaasTools_jsx("ul", null, SaasTools_jsx("li", null, SaasTools_jsx("i", {
      className: "icofont-ui-check"
    }), " Creative Design"), SaasTools_jsx("li", null, SaasTools_jsx("i", {
      className: "icofont-ui-check"
    }), " Retina Ready"), SaasTools_jsx("li", null, SaasTools_jsx("i", {
      className: "icofont-ui-check"
    }), " Modern Design"), SaasTools_jsx("li", null, SaasTools_jsx("i", {
      className: "icofont-ui-check"
    }), " Digital Marketing & Branding")))))), SaasTools_jsx("div", {
      id: "tab5",
      className: "tabs_item"
    }, SaasTools_jsx("div", {
      className: "row h-100 justify-content-center align-items-center"
    }, SaasTools_jsx("div", {
      className: "col-lg-6 col-md-6"
    }, SaasTools_jsx("div", {
      className: "tabs_item_content mt-0"
    }, SaasTools_jsx("h3", null, "Reporting"), SaasTools_jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo."), SaasTools_jsx("ul", null, SaasTools_jsx("li", null, SaasTools_jsx("i", {
      className: "icofont-ui-check"
    }), " Creative Design"), SaasTools_jsx("li", null, SaasTools_jsx("i", {
      className: "icofont-ui-check"
    }), " Retina Ready"), SaasTools_jsx("li", null, SaasTools_jsx("i", {
      className: "icofont-ui-check"
    }), " Modern Design"), SaasTools_jsx("li", null, SaasTools_jsx("i", {
      className: "icofont-ui-check"
    }), " Digital Marketing & Branding")))), SaasTools_jsx("div", {
      className: "col-lg-6 col-md-6"
    }, SaasTools_jsx("div", {
      className: "tabs_item_img"
    }, SaasTools_jsx("img", {
      src: "/images/features-img1.png",
      alt: "img"
    })))))))))), SaasTools_jsx("div", {
      className: "shape1"
    }, SaasTools_jsx("img", {
      src: "/images/shape1.png",
      alt: "img"
    })), SaasTools_jsx("div", {
      className: "shape2"
    }, SaasTools_jsx("img", {
      src: "/images/shape2.png",
      alt: "img"
    })), SaasTools_jsx("div", {
      className: "shape3"
    }, SaasTools_jsx("img", {
      src: "/images/shape3.png",
      alt: "img"
    })), SaasTools_jsx("div", {
      className: "shape6"
    }, SaasTools_jsx("img", {
      src: "/images/shape6.png",
      alt: "img"
    })), SaasTools_jsx("div", {
      className: "shape8 rotateme"
    }, SaasTools_jsx("img", {
      src: "/images/shape8.svg",
      alt: "shape"
    })));
  }

}

/* harmony default export */ var Agency_SaasTools = (SaasTools_SaasTools);
// EXTERNAL MODULE: external "react-image-lightbox"
var external_react_image_lightbox_ = __webpack_require__("cHt3");
var external_react_image_lightbox_default = /*#__PURE__*/__webpack_require__.n(external_react_image_lightbox_);

// CONCATENATED MODULE: ./components/Agency/Works.js
var Works_jsx = external_react_default.a.createElement;

function Works_extends() { Works_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Works_extends.apply(this, arguments); }

function Works_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const Works_OwlCarousel = dynamic_default()(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, "q4RA", 7)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("q4RA")],
    modules: ['react-owl-carousel3']
  }
});
const Works_options = {
  autoplay: true,
  nav: true,
  loop: true,
  mouseDrag: true,
  autoplayHoverPause: true,
  responsiveClass: true,
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
      items: 4
    }
  }
};
const Works_images = ['/images/work-img1.jpg', '/images/work-img2.jpg', '/images/work-img3.jpg', '/images/work-img4.jpg', '/images/work-img5.jpg', '/images/work-img6.jpg'];

class Works_Works extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    Works_defineProperty(this, "state", {
      photoIndex: 0,
      isOpenImage: false,
      display: false
    });
  }

  componentDidMount() {
    this.setState({
      display: true
    });
  }

  render() {
    const {
      photoIndex,
      isOpenImage
    } = this.state;
    return Works_jsx(external_react_default.a.Fragment, null, Works_jsx("section", {
      className: "project-area ptb-100"
    }, Works_jsx("div", {
      className: "container"
    }, Works_jsx("div", {
      className: "section-title"
    }, Works_jsx("h2", null, "Recent Work"), Works_jsx("div", {
      className: "bar"
    }), Works_jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))), Works_jsx("div", {
      className: "row m-0"
    }, this.state.display ? Works_jsx(Works_OwlCarousel, Works_extends({
      className: "project-slides owl-carousel owl-theme"
    }, Works_options), Works_jsx("div", {
      className: "col-lg-12"
    }, Works_jsx("div", {
      className: "single-project"
    }, Works_jsx("div", {
      className: "project-image"
    }, Works_jsx("img", {
      src: "/images/work-img1.jpg",
      alt: "work"
    }), Works_jsx(link_default.a, {
      href: "#"
    }, Works_jsx("a", {
      className: "popup-btn",
      onClick: e => {
        e.preventDefault();
        this.setState({
          isOpenImage: true
        });
      }
    }, Works_jsx("i", {
      className: "icofont-plus"
    })))), Works_jsx("div", {
      className: "project-content"
    }, Works_jsx("span", null, "Digital"), Works_jsx("h3", null, Works_jsx(link_default.a, {
      href: "#"
    }, Works_jsx("a", null, "Network Marketing")))))), Works_jsx("div", {
      className: "col-lg-12"
    }, Works_jsx("div", {
      className: "single-project"
    }, Works_jsx("div", {
      className: "project-image"
    }, Works_jsx("img", {
      src: "/images/work-img2.jpg",
      alt: "work"
    }), Works_jsx(link_default.a, {
      href: "#"
    }, Works_jsx("a", {
      className: "popup-btn",
      onClick: e => {
        e.preventDefault();
        this.setState({
          isOpenImage: true
        });
      }
    }, Works_jsx("i", {
      className: "icofont-plus"
    })))), Works_jsx("div", {
      className: "project-content"
    }, Works_jsx("span", null, "Digital"), Works_jsx("h3", null, Works_jsx(link_default.a, {
      href: "#"
    }, Works_jsx("a", null, "Network Marketing")))))), Works_jsx("div", {
      className: "col-lg-12"
    }, Works_jsx("div", {
      className: "single-project"
    }, Works_jsx("div", {
      className: "project-image"
    }, Works_jsx("img", {
      src: "/images/work-img3.jpg",
      alt: "work"
    }), Works_jsx(link_default.a, {
      href: "#"
    }, Works_jsx("a", {
      className: "popup-btn",
      onClick: e => {
        e.preventDefault();
        this.setState({
          isOpenImage: true
        });
      }
    }, Works_jsx("i", {
      className: "icofont-plus"
    })))), Works_jsx("div", {
      className: "project-content"
    }, Works_jsx("span", null, "Digital"), Works_jsx("h3", null, Works_jsx(link_default.a, {
      href: "#"
    }, Works_jsx("a", null, "Network Marketing")))))), isOpenImage && Works_jsx(external_react_image_lightbox_default.a, {
      mainSrc: Works_images[photoIndex],
      nextSrc: Works_images[(photoIndex + 1) % Works_images.length],
      prevSrc: Works_images[(photoIndex + Works_images.length - 1) % Works_images.length],
      onCloseRequest: () => this.setState({
        isOpenImage: false
      }),
      onMovePrevRequest: () => this.setState({
        photoIndex: (photoIndex + Works_images.length - 1) % Works_images.length
      }),
      onMoveNextRequest: () => this.setState({
        photoIndex: (photoIndex + 1) % Works_images.length
      })
    }), Works_jsx("div", {
      className: "col-lg-12"
    }, Works_jsx("div", {
      className: "single-project"
    }, Works_jsx("div", {
      className: "project-image"
    }, Works_jsx("img", {
      src: "/images/work-img4.jpg",
      alt: "work"
    }), Works_jsx(link_default.a, {
      href: "#"
    }, Works_jsx("a", {
      className: "popup-btn",
      onClick: e => {
        e.preventDefault();
        this.setState({
          isOpenImage: true
        });
      }
    }, Works_jsx("i", {
      className: "icofont-plus"
    })))), Works_jsx("div", {
      className: "project-content"
    }, Works_jsx("span", null, "Digital"), Works_jsx("h3", null, Works_jsx(link_default.a, {
      href: "#"
    }, Works_jsx("a", null, "Network Marketing")))))), Works_jsx("div", {
      className: "col-lg-12"
    }, Works_jsx("div", {
      className: "single-project"
    }, Works_jsx("div", {
      className: "project-image"
    }, Works_jsx("img", {
      src: "/images/work-img5.jpg",
      alt: "work"
    }), Works_jsx(link_default.a, {
      href: "#"
    }, Works_jsx("a", {
      className: "popup-btn",
      onClick: e => {
        e.preventDefault();
        this.setState({
          isOpenImage: true
        });
      }
    }, Works_jsx("i", {
      className: "icofont-plus"
    })))), Works_jsx("div", {
      className: "project-content"
    }, Works_jsx("span", null, "Digital"), Works_jsx("h3", null, Works_jsx(link_default.a, {
      href: "#"
    }, Works_jsx("a", null, "Network Marketing")))))), Works_jsx("div", {
      className: "col-lg-12"
    }, Works_jsx("div", {
      className: "single-project"
    }, Works_jsx("div", {
      className: "project-image"
    }, Works_jsx("img", {
      src: "/images/work-img6.jpg",
      alt: "work"
    }), Works_jsx(link_default.a, {
      href: "#"
    }, Works_jsx("a", {
      className: "popup-btn",
      onClick: e => {
        e.preventDefault();
        this.setState({
          isOpenImage: true
        });
      }
    }, Works_jsx("i", {
      className: "icofont-plus"
    })))), Works_jsx("div", {
      className: "project-content"
    }, Works_jsx("span", null, "Digital"), Works_jsx("h3", null, Works_jsx(link_default.a, {
      href: "#"
    }, Works_jsx("a", null, "Network Marketing"))))))) : ''), Works_jsx("canvas", {
      id: "canvas"
    })));
  }

}

/* harmony default export */ var Agency_Works = (Works_Works);
// CONCATENATED MODULE: ./components/Agency/Team.js
var Team_jsx = external_react_default.a.createElement;

function Team_extends() { Team_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Team_extends.apply(this, arguments); }

function Team_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const Team_OwlCarousel = dynamic_default()(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, "q4RA", 7)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("q4RA")],
    modules: ['react-owl-carousel3']
  }
});
const Team_options = {
  loop: true,
  nav: true,
  autoplay: true,
  autoplayHoverPause: true,
  mouseDrag: true,
  dots: false,
  navText: ["<i class='icofont-bubble-left'></i>", "<i class='icofont-bubble-right'></i>"],
  responsive: {
    0: {
      items: 1
    },
    768: {
      items: 2
    },
    1024: {
      items: 3
    },
    1200: {
      items: 4
    }
  }
};

class Team_Team extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    Team_defineProperty(this, "state", {
      display: false
    });
  }

  componentDidMount() {
    this.setState({
      display: true
    });
  }

  render() {
    return Team_jsx("section", {
      className: "team-area ptb-100 bg-gray"
    }, Team_jsx("div", {
      className: "container"
    }, Team_jsx("div", {
      className: "section-title"
    }, Team_jsx("h2", null, "Our Smart Team"), Team_jsx("div", {
      className: "bar"
    }), Team_jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")), Team_jsx("div", {
      className: "row"
    }, this.state.display ? Team_jsx(Team_OwlCarousel, Team_extends({
      className: "team-slides owl-carousel owl-theme"
    }, Team_options), Team_jsx("div", {
      className: "col-lg-12"
    }, Team_jsx("div", {
      className: "single-team-member-box"
    }, Team_jsx("img", {
      src: "/images/team-img1.jpg",
      alt: "team"
    }), Team_jsx("div", {
      className: "team-content"
    }, Team_jsx("h3", null, "John Doe"), Team_jsx("span", null, "CEO"), Team_jsx("ul", null, Team_jsx("li", null, Team_jsx(link_default.a, {
      href: "#"
    }, Team_jsx("a", {
      className: "facebook"
    }, Team_jsx("i", {
      className: "icofont-facebook"
    })))), Team_jsx("li", null, Team_jsx(link_default.a, {
      href: "#"
    }, Team_jsx("a", {
      className: "instagram"
    }, Team_jsx("i", {
      className: "icofont-instagram"
    })))), Team_jsx("li", null, Team_jsx(link_default.a, {
      href: "#"
    }, Team_jsx("a", {
      className: "twitter"
    }, Team_jsx("i", {
      className: "icofont-twitter"
    })))), Team_jsx("li", null, Team_jsx(link_default.a, {
      href: "#"
    }, Team_jsx("a", {
      className: "linkedin"
    }, Team_jsx("i", {
      className: "icofont-linkedin"
    })))))))), Team_jsx("div", {
      className: "col-lg-12"
    }, Team_jsx("div", {
      className: "single-team-member-box"
    }, Team_jsx("img", {
      src: "/images/team-img2.jpg",
      alt: "team"
    }), Team_jsx("div", {
      className: "team-content"
    }, Team_jsx("h3", null, "Steven Smith"), Team_jsx("span", null, "Developer"), Team_jsx("ul", null, Team_jsx("li", null, Team_jsx(link_default.a, {
      href: "#"
    }, Team_jsx("a", {
      className: "facebook"
    }, Team_jsx("i", {
      className: "icofont-facebook"
    })))), Team_jsx("li", null, Team_jsx(link_default.a, {
      href: "#"
    }, Team_jsx("a", {
      className: "instagram"
    }, Team_jsx("i", {
      className: "icofont-instagram"
    })))), Team_jsx("li", null, Team_jsx(link_default.a, {
      href: "#"
    }, Team_jsx("a", {
      className: "twitter"
    }, Team_jsx("i", {
      className: "icofont-twitter"
    })))), Team_jsx("li", null, Team_jsx(link_default.a, {
      href: "#"
    }, Team_jsx("a", {
      className: "linkedin"
    }, Team_jsx("i", {
      className: "icofont-linkedin"
    })))))))), Team_jsx("div", {
      className: "col-lg-12"
    }, Team_jsx("div", {
      className: "single-team-member-box"
    }, Team_jsx("img", {
      src: "/images/team-img3.jpg",
      alt: "team"
    }), Team_jsx("div", {
      className: "team-content"
    }, Team_jsx("h3", null, "David Luiz"), Team_jsx("span", null, "Designer"), Team_jsx("ul", null, Team_jsx("li", null, Team_jsx(link_default.a, {
      href: "#"
    }, Team_jsx("a", {
      className: "facebook"
    }, Team_jsx("i", {
      className: "icofont-facebook"
    })))), Team_jsx("li", null, Team_jsx(link_default.a, {
      href: "#"
    }, Team_jsx("a", {
      className: "instagram"
    }, Team_jsx("i", {
      className: "icofont-instagram"
    })))), Team_jsx("li", null, Team_jsx(link_default.a, {
      href: "#"
    }, Team_jsx("a", {
      className: "twitter"
    }, Team_jsx("i", {
      className: "icofont-twitter"
    })))), Team_jsx("li", null, Team_jsx(link_default.a, {
      href: "#"
    }, Team_jsx("a", {
      className: "linkedin"
    }, Team_jsx("i", {
      className: "icofont-linkedin"
    })))))))), Team_jsx("div", {
      className: "col-lg-12"
    }, Team_jsx("div", {
      className: "single-team-member-box"
    }, Team_jsx("img", {
      src: "/images/team-img4.jpg",
      alt: "team"
    }), Team_jsx("div", {
      className: "team-content"
    }, Team_jsx("h3", null, "Park Tim"), Team_jsx("span", null, "SEO Expert"), Team_jsx("ul", null, Team_jsx("li", null, Team_jsx(link_default.a, {
      href: "#"
    }, Team_jsx("a", {
      className: "facebook"
    }, Team_jsx("i", {
      className: "icofont-facebook"
    })))), Team_jsx("li", null, Team_jsx(link_default.a, {
      href: "#"
    }, Team_jsx("a", {
      className: "instagram"
    }, Team_jsx("i", {
      className: "icofont-instagram"
    })))), Team_jsx("li", null, Team_jsx(link_default.a, {
      href: "#"
    }, Team_jsx("a", {
      className: "twitter"
    }, Team_jsx("i", {
      className: "icofont-twitter"
    })))), Team_jsx("li", null, Team_jsx(link_default.a, {
      href: "#"
    }, Team_jsx("a", {
      className: "linkedin"
    }, Team_jsx("i", {
      className: "icofont-linkedin"
    })))))))), Team_jsx("div", {
      className: "col-lg-12"
    }, Team_jsx("div", {
      className: "single-team-member-box"
    }, Team_jsx("img", {
      src: "/images/team-img5.jpg",
      alt: "team"
    }), Team_jsx("div", {
      className: "team-content"
    }, Team_jsx("h3", null, "Doglas Costa"), Team_jsx("span", null, "Manager"), Team_jsx("ul", null, Team_jsx("li", null, Team_jsx(link_default.a, {
      href: "#"
    }, Team_jsx("a", {
      className: "facebook"
    }, Team_jsx("i", {
      className: "icofont-facebook"
    })))), Team_jsx("li", null, Team_jsx(link_default.a, {
      href: "#"
    }, Team_jsx("a", {
      className: "instagram"
    }, Team_jsx("i", {
      className: "icofont-instagram"
    })))), Team_jsx("li", null, Team_jsx(link_default.a, {
      href: "#"
    }, Team_jsx("a", {
      className: "twitter"
    }, Team_jsx("i", {
      className: "icofont-twitter"
    })))), Team_jsx("li", null, Team_jsx(link_default.a, {
      href: "#"
    }, Team_jsx("a", {
      className: "linkedin"
    }, Team_jsx("i", {
      className: "icofont-linkedin"
    }))))))))) : '')));
  }

}

/* harmony default export */ var Agency_Team = (Team_Team);
// CONCATENATED MODULE: ./components/Agency/Pricing.js
var Pricing_jsx = external_react_default.a.createElement;



class Pricing_Pricing extends external_react_["Component"] {
  render() {
    return Pricing_jsx("section", {
      className: "pricing-area ptb-100"
    }, Pricing_jsx("div", {
      className: "container"
    }, Pricing_jsx("div", {
      className: "section-title"
    }, Pricing_jsx("h2", null, "Easy Pricing Plans"), Pricing_jsx("div", {
      className: "bar"
    }), Pricing_jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")), Pricing_jsx("div", {
      className: "row"
    }, Pricing_jsx("div", {
      className: "col-lg-4 col-md-6"
    }, Pricing_jsx("div", {
      className: "pricing-table-box"
    }, Pricing_jsx("div", {
      className: "pricingTable-header"
    }, Pricing_jsx("h3", {
      className: "title"
    }, "Basic"), Pricing_jsx("div", {
      className: "price-value"
    }, Pricing_jsx("sup", null, "$"), "59.99 ", Pricing_jsx("span", null, "/per year"))), Pricing_jsx("ul", {
      className: "pricing-content"
    }, Pricing_jsx("li", null, "Managment & Marketing"), Pricing_jsx("li", null, "SEO Optimization"), Pricing_jsx("li", null, "25 Analytics Campaign"), Pricing_jsx("li", null, "1,300 Change Keywords"), Pricing_jsx("li", null, "25 Social Media Reviews"), Pricing_jsx("li", null, "1 Free Optimization"), Pricing_jsx("li", null, "24/7 Support")), Pricing_jsx(link_default.a, {
      href: "#"
    }, Pricing_jsx("a", {
      className: "btn btn-primary"
    }, "Buy Now")))), Pricing_jsx("div", {
      className: "col-lg-4 col-md-6"
    }, Pricing_jsx("div", {
      className: "pricing-table-box"
    }, Pricing_jsx("div", {
      className: "pricingTable-header"
    }, Pricing_jsx("h3", {
      className: "title"
    }, "Ultra"), Pricing_jsx("div", {
      className: "price-value"
    }, Pricing_jsx("sup", null, "$"), "79.99 ", Pricing_jsx("span", null, "/per year"))), Pricing_jsx("ul", {
      className: "pricing-content"
    }, Pricing_jsx("li", null, "Managment & Marketing"), Pricing_jsx("li", null, "SEO Optimization"), Pricing_jsx("li", null, "25 Analytics Campaign"), Pricing_jsx("li", null, "1,300 Change Keywords"), Pricing_jsx("li", null, "25 Social Media Reviews"), Pricing_jsx("li", null, "1 Free Optimization"), Pricing_jsx("li", null, "24/7 Support")), Pricing_jsx(link_default.a, {
      href: "#"
    }, Pricing_jsx("a", {
      className: "btn btn-primary"
    }, "Buy Now")))), Pricing_jsx("div", {
      className: "col-lg-4 col-md-6 offset-lg-0 offset-md-3"
    }, Pricing_jsx("div", {
      className: "pricing-table-box"
    }, Pricing_jsx("div", {
      className: "pricingTable-header"
    }, Pricing_jsx("h3", {
      className: "title"
    }, "Pro"), Pricing_jsx("div", {
      className: "price-value"
    }, Pricing_jsx("sup", null, "$"), "99.99 ", Pricing_jsx("span", null, "/per year"))), Pricing_jsx("ul", {
      className: "pricing-content"
    }, Pricing_jsx("li", null, "Managment & Marketing"), Pricing_jsx("li", null, "SEO Optimization"), Pricing_jsx("li", null, "25 Analytics Campaign"), Pricing_jsx("li", null, "1,300 Change Keywords"), Pricing_jsx("li", null, "25 Social Media Reviews"), Pricing_jsx("li", null, "1 Free Optimization"), Pricing_jsx("li", null, "24/7 Support")), Pricing_jsx(link_default.a, {
      href: "#"
    }, Pricing_jsx("a", {
      className: "btn btn-primary"
    }, "Buy Now")))))));
  }

}

/* harmony default export */ var Agency_Pricing = (Pricing_Pricing);
// CONCATENATED MODULE: ./components/Agency/Download.js
var Download_jsx = external_react_default.a.createElement;



class Download_Download extends external_react_default.a.Component {
  render() {
    return Download_jsx("section", {
      className: "app-download ptb-100 bg-gray"
    }, Download_jsx("div", {
      className: "container"
    }, Download_jsx("div", {
      className: "row h-100 justify-content-center align-items-center"
    }, Download_jsx("div", {
      className: "col-lg-6 col-md-12"
    }, Download_jsx("div", {
      className: "section-title"
    }, Download_jsx("h2", null, "Download Our Apps Today"), Download_jsx("div", {
      className: "bar"
    }), Download_jsx("p", null, "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account the system and expound the actual teachings of the great explore."), Download_jsx("div", {
      className: "download-btn"
    }, Download_jsx(link_default.a, {
      href: "#"
    }, Download_jsx("a", null, Download_jsx("i", {
      className: "icofont-brand-android-robot"
    }), " Available On ", Download_jsx("span", null, "Google Store"))), Download_jsx(link_default.a, {
      href: "#"
    }, Download_jsx("a", null, Download_jsx("i", {
      className: "icofont-brand-apple"
    }), " Available On ", Download_jsx("span", null, "Apple Store")))))), Download_jsx("div", {
      className: "col-lg-6 col-md-12"
    }, Download_jsx("div", {
      className: "download-image"
    }, Download_jsx("img", {
      src: "/images/app-img1.png",
      alt: "image"
    }), Download_jsx("img", {
      src: "/images/app-img2.png",
      alt: "image"
    }))))));
  }

}

/* harmony default export */ var Agency_Download = (Download_Download);
// CONCATENATED MODULE: ./components/Agency/Blog.js
var Blog_jsx = external_react_default.a.createElement;

function Blog_extends() { Blog_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Blog_extends.apply(this, arguments); }

function Blog_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const Blog_OwlCarousel = dynamic_default()(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, "q4RA", 7)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("q4RA")],
    modules: ['react-owl-carousel3']
  }
});
const Blog_options = {
  autoplay: true,
  nav: true,
  loop: true,
  mouseDrag: true,
  autoplayHoverPause: true,
  responsiveClass: true,
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

class Blog_Blog extends external_react_default.a.Component {
  constructor(...args) {
    super(...args);

    Blog_defineProperty(this, "state", {
      display: false
    });
  }

  componentDidMount() {
    this.setState({
      display: true
    });
  }

  render() {
    return Blog_jsx("section", {
      className: "blog-area ptb-100"
    }, Blog_jsx("div", {
      className: "container"
    }, Blog_jsx("div", {
      className: "section-title"
    }, Blog_jsx("h2", null, "Our Latest News"), Blog_jsx("div", {
      className: "bar"
    }), Blog_jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")), Blog_jsx("div", {
      className: "row"
    }, this.state.display ? Blog_jsx(Blog_OwlCarousel, Blog_extends({
      className: "blog-slides owl-carousel owl-theme"
    }, Blog_options), Blog_jsx("div", {
      className: "col-lg-12 col-md-12"
    }, Blog_jsx("div", {
      className: "single-blog-post"
    }, Blog_jsx(link_default.a, {
      href: "#"
    }, Blog_jsx("a", {
      className: "post-image"
    }, Blog_jsx("img", {
      src: "/images/blog-img1.jpg",
      alt: "blog-image"
    }))), Blog_jsx("div", {
      className: "blog-post-content"
    }, Blog_jsx("ul", null, Blog_jsx("li", null, Blog_jsx("i", {
      className: "icofont-user-male"
    }), " ", Blog_jsx(link_default.a, {
      href: "#"
    }, Blog_jsx("a", null, "Admin"))), Blog_jsx("li", null, Blog_jsx("i", {
      className: "icofont-wall-clock"
    }), " January 23, 2019")), Blog_jsx("h3", null, Blog_jsx(link_default.a, {
      href: "#"
    }, Blog_jsx("a", null, "The Most Popular New Business Apps"))), Blog_jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi turpis massa, dapibus nec libero vitae."), Blog_jsx(link_default.a, {
      href: "#"
    }, Blog_jsx("a", {
      className: "read-more-btn"
    }, "Read More ", Blog_jsx("i", {
      className: "icofont-rounded-double-right"
    })))))), Blog_jsx("div", {
      className: "col-lg-12 col-md-12"
    }, Blog_jsx("div", {
      className: "single-blog-post"
    }, Blog_jsx(link_default.a, {
      href: "#"
    }, Blog_jsx("a", {
      className: "post-image"
    }, Blog_jsx("img", {
      src: "/images/blog-img2.jpg",
      alt: "blog-image"
    }))), Blog_jsx("div", {
      className: "blog-post-content"
    }, Blog_jsx("ul", null, Blog_jsx("li", null, Blog_jsx("i", {
      className: "icofont-user-male"
    }), " ", Blog_jsx(link_default.a, {
      href: "#"
    }, Blog_jsx("a", null, "Admin"))), Blog_jsx("li", null, Blog_jsx("i", {
      className: "icofont-wall-clock"
    }), " January 16, 2019")), Blog_jsx("h3", null, Blog_jsx(link_default.a, {
      href: "#"
    }, Blog_jsx("a", null, "The Best Marketing Management Tools"))), Blog_jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi turpis massa, dapibus nec libero vitae."), Blog_jsx(link_default.a, {
      href: "#"
    }, Blog_jsx("a", {
      className: "read-more-btn"
    }, "Read More ", Blog_jsx("i", {
      className: "icofont-rounded-double-right"
    })))))), Blog_jsx("div", {
      className: "col-lg-12 col-md-12"
    }, Blog_jsx("div", {
      className: "single-blog-post"
    }, Blog_jsx(link_default.a, {
      href: "#"
    }, Blog_jsx("a", {
      className: "post-image"
    }, Blog_jsx("img", {
      src: "/images/blog-img3.jpg",
      alt: "blog-image"
    }))), Blog_jsx("div", {
      className: "blog-post-content"
    }, Blog_jsx("ul", null, Blog_jsx("li", null, Blog_jsx("i", {
      className: "icofont-user-male"
    }), " ", Blog_jsx(link_default.a, {
      href: "#"
    }, Blog_jsx("a", null, "Admin"))), Blog_jsx("li", null, Blog_jsx("i", {
      className: "icofont-wall-clock"
    }), " January 14, 2019")), Blog_jsx("h3", null, Blog_jsx(link_default.a, {
      href: "#"
    }, Blog_jsx("a", null, "The Best Marketing Management Tools"))), Blog_jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi turpis massa, dapibus nec libero vitae."), Blog_jsx(link_default.a, {
      href: "#"
    }, Blog_jsx("a", {
      className: "read-more-btn"
    }, "Read More ", Blog_jsx("i", {
      className: "icofont-rounded-double-right"
    })))))), Blog_jsx("div", {
      className: "col-lg-12 col-md-12"
    }, Blog_jsx("div", {
      className: "single-blog-post"
    }, Blog_jsx(link_default.a, {
      href: "#"
    }, Blog_jsx("a", {
      className: "post-image"
    }, Blog_jsx("img", {
      src: "/images/blog-img4.jpg",
      alt: "blog-image"
    }))), Blog_jsx("div", {
      className: "blog-post-content"
    }, Blog_jsx("ul", null, Blog_jsx("li", null, Blog_jsx("i", {
      className: "icofont-user-male"
    }), " ", Blog_jsx(link_default.a, {
      href: "#"
    }, Blog_jsx("a", null, "Admin"))), Blog_jsx("li", null, Blog_jsx("i", {
      className: "icofont-wall-clock"
    }), " January 06, 2019")), Blog_jsx("h3", null, Blog_jsx(link_default.a, {
      href: "#"
    }, Blog_jsx("a", null, "The Best Marketing Management Tools"))), Blog_jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi turpis massa, dapibus nec libero vitae."), Blog_jsx(link_default.a, {
      href: "#"
    }, Blog_jsx("a", {
      className: "read-more-btn"
    }, "Read More ", Blog_jsx("i", {
      className: "icofont-rounded-double-right"
    })))))), Blog_jsx("div", {
      className: "col-lg-12 col-md-12"
    }, Blog_jsx("div", {
      className: "single-blog-post"
    }, Blog_jsx(link_default.a, {
      href: "#"
    }, Blog_jsx("a", {
      className: "post-image"
    }, Blog_jsx("img", {
      src: "/images/blog-img5.jpg",
      alt: "blog-image"
    }))), Blog_jsx("div", {
      className: "blog-post-content"
    }, Blog_jsx("ul", null, Blog_jsx("li", null, Blog_jsx("i", {
      className: "icofont-user-male"
    }), " ", Blog_jsx(link_default.a, {
      href: "#"
    }, Blog_jsx("a", null, "Admin"))), Blog_jsx("li", null, Blog_jsx("i", {
      className: "icofont-wall-clock"
    }), " January 04, 2019")), Blog_jsx("h3", null, Blog_jsx(link_default.a, {
      href: "#"
    }, Blog_jsx("a", null, "The Best Marketing Management Tools"))), Blog_jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi turpis massa, dapibus nec libero vitae."), Blog_jsx(link_default.a, {
      href: "#"
    }, Blog_jsx("a", {
      className: "read-more-btn"
    }, "Read More ", Blog_jsx("i", {
      className: "icofont-rounded-double-right"
    })))))), Blog_jsx("div", {
      className: "col-lg-12 col-md-12"
    }, Blog_jsx("div", {
      className: "single-blog-post"
    }, Blog_jsx(link_default.a, {
      href: "#"
    }, Blog_jsx("a", {
      className: "post-image"
    }, Blog_jsx("img", {
      src: "/images/blog-img3.jpg",
      alt: "blog-image"
    }))), Blog_jsx("div", {
      className: "blog-post-content"
    }, Blog_jsx("ul", null, Blog_jsx("li", null, Blog_jsx("i", {
      className: "icofont-user-male"
    }), " ", Blog_jsx(link_default.a, {
      href: "#"
    }, Blog_jsx("a", null, "Admin"))), Blog_jsx("li", null, Blog_jsx("i", {
      className: "icofont-wall-clock"
    }), " January 26, 2019")), Blog_jsx("h3", null, Blog_jsx(link_default.a, {
      href: "#"
    }, Blog_jsx("a", null, "The Best Marketing Management Tools"))), Blog_jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi turpis massa, dapibus nec libero vitae."), Blog_jsx(link_default.a, {
      href: "#"
    }, Blog_jsx("a", {
      className: "read-more-btn"
    }, "Read More ", Blog_jsx("i", {
      className: "icofont-rounded-double-right"
    }))))))) : '')));
  }

}

/* harmony default export */ var Agency_Blog = (Blog_Blog);
// CONCATENATED MODULE: ./components/Agency/CtaCard.js
var CtaCard_jsx = external_react_default.a.createElement;



class CtaCard_CtaCard extends external_react_default.a.Component {
  render() {
    return CtaCard_jsx("div", {
      className: "cta-area"
    }, CtaCard_jsx("div", {
      className: "container"
    }, CtaCard_jsx("div", {
      className: "row h-100 justify-content-center align-items-center"
    }, CtaCard_jsx("div", {
      className: "col-lg-7 col-md-7"
    }, CtaCard_jsx("p", null, "Want a bite? You're in the right place!")), CtaCard_jsx("div", {
      className: "col-lg-5 col-md-5 text-right"
    }, CtaCard_jsx(link_default.a, {
      href: "#"
    }, CtaCard_jsx("a", {
      className: "btn btn-primary"
    }, "Take a Test Drive"))))));
  }

}

/* harmony default export */ var Agency_CtaCard = (CtaCard_CtaCard);
// CONCATENATED MODULE: ./components/Agency/Feedback.js
var Feedback_jsx = external_react_default.a.createElement;

function Feedback_extends() { Feedback_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Feedback_extends.apply(this, arguments); }

function Feedback_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const Feedback_OwlCarousel = dynamic_default()(() => Promise.resolve(/* import() */).then(__webpack_require__.t.bind(null, "q4RA", 7)), {
  loadableGenerated: {
    webpack: () => [/*require.resolve*/("q4RA")],
    modules: ['react-owl-carousel3']
  }
});
const Feedback_options = {
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

class Feedback_Feedback extends external_react_["Component"] {
  constructor(...args) {
    super(...args);

    Feedback_defineProperty(this, "state", {
      display: false
    });
  }

  componentDidMount() {
    this.setState({
      display: true
    });
  }

  render() {
    return Feedback_jsx("section", {
      className: "feedback-area ptb-100 bg-gray"
    }, Feedback_jsx("div", {
      className: "container"
    }, Feedback_jsx("div", {
      className: "section-title"
    }, Feedback_jsx("h2", null, "Testimonials"), Feedback_jsx("div", {
      className: "bar"
    }), Feedback_jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")), Feedback_jsx("div", {
      className: "row"
    }, this.state.display ? Feedback_jsx(Feedback_OwlCarousel, Feedback_extends({
      className: "feedback-slides owl-carousel owl-theme"
    }, Feedback_options), Feedback_jsx("div", {
      className: "col-lg-12"
    }, Feedback_jsx("div", {
      className: "single-feedback-box"
    }, Feedback_jsx("div", {
      className: "client-info"
    }, Feedback_jsx("img", {
      src: "/images/client1.jpg",
      alt: "client"
    }), Feedback_jsx("h3", null, "Alit John"), Feedback_jsx("span", null, "Web Developer")), Feedback_jsx("p", null, "Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project individual. Plan ahead by day, week, or month, and see project status at a glance."))), Feedback_jsx("div", {
      className: "col-lg-12"
    }, Feedback_jsx("div", {
      className: "single-feedback-box"
    }, Feedback_jsx("div", {
      className: "client-info"
    }, Feedback_jsx("img", {
      src: "/images/client2.jpg",
      alt: "client"
    }), Feedback_jsx("h3", null, "Alit John"), Feedback_jsx("span", null, "SEO Expert")), Feedback_jsx("p", null, "Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project individual. Plan ahead by day, week, or month, and see project status at a glance."))), Feedback_jsx("div", {
      className: "col-lg-12"
    }, Feedback_jsx("div", {
      className: "single-feedback-box"
    }, Feedback_jsx("div", {
      className: "client-info"
    }, Feedback_jsx("img", {
      src: "/images/client3.jpg",
      alt: "client"
    }), Feedback_jsx("h3", null, "Steven John"), Feedback_jsx("span", null, "Web Developer")), Feedback_jsx("p", null, "Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project individual. Plan ahead by day, week, or month, and see project status at a glance."))), Feedback_jsx("div", {
      className: "col-lg-12"
    }, Feedback_jsx("div", {
      className: "single-feedback-box"
    }, Feedback_jsx("div", {
      className: "client-info"
    }, Feedback_jsx("img", {
      src: "/images/client4.jpg",
      alt: "client"
    }), Feedback_jsx("h3", null, "David Warner"), Feedback_jsx("span", null, "Web Developer")), Feedback_jsx("p", null, "Plan ahead by day, week, or month, and see project status at a glance. Search and filter to focus in on anything form a single project individual. Plan ahead by day, week, or month, and see project status at a glance.")))) : '')), Feedback_jsx("svg", {
      className: "svg-feedback-bottom",
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 100 100",
      preserveAspectRatio: "none"
    }, Feedback_jsx("path", {
      d: "M0,70 C30,130 70,50 100,70 L100,100 0,100 Z",
      fill: "#ffffff"
    })));
  }

}

/* harmony default export */ var Agency_Feedback = (Feedback_Feedback);
// CONCATENATED MODULE: ./components/Agency/GetStarted.js
var GetStarted_jsx = external_react_default.a.createElement;



class GetStarted_GetStarted extends external_react_default.a.Component {
  render() {
    return GetStarted_jsx("section", {
      className: "get-started ptb-100 bg-gray"
    }, GetStarted_jsx("div", {
      className: "container"
    }, GetStarted_jsx("div", {
      className: "section-title"
    }, GetStarted_jsx("h2", null, "Get Started Free"), GetStarted_jsx("div", {
      className: "bar"
    }), GetStarted_jsx("p", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")), GetStarted_jsx("div", {
      className: "get-started-form"
    }, GetStarted_jsx("form", null, GetStarted_jsx("div", {
      className: "form-group"
    }, GetStarted_jsx("input", {
      type: "text",
      className: "form-control",
      placeholder: "Name"
    })), GetStarted_jsx("div", {
      className: "form-group"
    }, GetStarted_jsx("input", {
      type: "email",
      className: "form-control",
      placeholder: "Email"
    })), GetStarted_jsx("div", {
      className: "form-group"
    }, GetStarted_jsx("input", {
      type: "password",
      className: "form-control",
      placeholder: "Password"
    })), GetStarted_jsx("button", {
      type: "submit",
      className: "btn btn-primary"
    }, "Sign Up"), GetStarted_jsx("p", null, "Or use your ", GetStarted_jsx(link_default.a, {
      href: "#"
    }, GetStarted_jsx("a", null, "Facebook Account")))))));
  }

}

/* harmony default export */ var Agency_GetStarted = (GetStarted_GetStarted);
// CONCATENATED MODULE: ./components/Agency/Platform.js
var Platform_jsx = external_react_default.a.createElement;



class Platform_Platform extends external_react_["Component"] {
  render() {
    return Platform_jsx("section", {
      className: "platform-connect ptb-100"
    }, Platform_jsx("div", {
      className: "container"
    }, Platform_jsx("div", {
      className: "row"
    }, Platform_jsx("div", {
      className: "col-lg-12 col-md-12"
    }, Platform_jsx("h2", null, "Interact With Your Users On Every Single Platform")), Platform_jsx("div", {
      className: "col-lg-3 col-md-6"
    }, Platform_jsx(link_default.a, {
      href: "#"
    }, Platform_jsx("a", {
      className: "box"
    }, Platform_jsx("img", {
      src: "/images/mailchimp.png",
      alt: "mailchimp"
    }), Platform_jsx("h3", null, "Mail Chimp"), Platform_jsx("span", null, "Send Mail"), Platform_jsx("i", {
      className: "icofont-bubble-right"
    })))), Platform_jsx("div", {
      className: "col-lg-3 col-md-6"
    }, Platform_jsx(link_default.a, {
      href: "#"
    }, Platform_jsx("a", {
      className: "box"
    }, Platform_jsx("img", {
      src: "/images/slack.png",
      alt: "mailchimp"
    }), Platform_jsx("h3", null, "Slack"), Platform_jsx("span", null, "Messaging"), Platform_jsx("i", {
      className: "icofont-bubble-right"
    })))), Platform_jsx("div", {
      className: "col-lg-3 col-md-6"
    }, Platform_jsx(link_default.a, {
      href: "#"
    }, Platform_jsx("a", {
      className: "box"
    }, Platform_jsx("img", {
      src: "/images/twitter.png",
      alt: "mailchimp"
    }), Platform_jsx("h3", null, "Twitter"), Platform_jsx("span", null, "Twitter Feed"), Platform_jsx("i", {
      className: "icofont-bubble-right"
    })))), Platform_jsx("div", {
      className: "col-lg-3 col-md-6"
    }, Platform_jsx(link_default.a, {
      href: "#"
    }, Platform_jsx("a", {
      className: "box"
    }, Platform_jsx("img", {
      src: "/images/instagram.png",
      alt: "mailchimp"
    }), Platform_jsx("h3", null, "Instagram"), Platform_jsx("span", null, "News Feed"), Platform_jsx("i", {
      className: "icofont-bubble-right"
    })))))));
  }

}

/* harmony default export */ var Agency_Platform = (Platform_Platform);
// CONCATENATED MODULE: ./pages/agency.js
var agency_jsx = external_react_default.a.createElement;



















class agency_Agency extends external_react_default.a.Component {
  render() {
    return agency_jsx(external_react_default.a.Fragment, null, agency_jsx(Navbar["a" /* default */], null), agency_jsx(Agency_Banner, null), agency_jsx(Agency_Partner, null), agency_jsx(Agency_Features, null), agency_jsx(Agency_Overview, null), agency_jsx(Agency_Funfact, null), agency_jsx(Agency_SaasTools, null), agency_jsx(Agency_Works, null), agency_jsx(Agency_Team, null), agency_jsx(Agency_Pricing, null), agency_jsx(Agency_Download, null), agency_jsx(Agency_Blog, null), agency_jsx(Agency_CtaCard, null), agency_jsx(Agency_Feedback, null), agency_jsx(Agency_GetStarted, null), agency_jsx(Agency_Platform, null), agency_jsx(Footer["a" /* default */], null));
  }

}

/* harmony default export */ var agency = __webpack_exports__["default"] = (agency_Agency);

/***/ })

/******/ });