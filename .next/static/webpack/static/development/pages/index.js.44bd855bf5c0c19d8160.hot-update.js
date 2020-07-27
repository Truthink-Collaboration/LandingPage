webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/App/Banner.js":
/*!**********************************!*\
  !*** ./components/App/Banner.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next/dist/next-server/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-visibility-sensor */ "./node_modules/react-visibility-sensor/dist/visibility-sensor.js");
/* harmony import */ var react_visibility_sensor__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-modal-video */ "./node_modules/react-modal-video/lib/index.js");
/* harmony import */ var react_modal_video__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_modal_video__WEBPACK_IMPORTED_MODULE_12__);








var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }


var isServer = false;
var WOW = !isServer ? __webpack_require__(/*! wowjs */ "./node_modules/wowjs/dist/wow.js") : null;




var OwlCarousel = next_dynamic__WEBPACK_IMPORTED_MODULE_10___default()(_c = function _c() {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! react-owl-carousel3 */ "./node_modules/react-owl-carousel3/lib/OwlCarousel.js", 7));
}, {
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! react-owl-carousel3 */ "./node_modules/react-owl-carousel3/lib/OwlCarousel.js")];
    },
    modules: ['react-owl-carousel3']
  }
});
_c2 = OwlCarousel;
var options = {
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

var Banner = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Banner, _Component);

  var _super = _createSuper(Banner);

  function Banner() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Banner);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "state", {
      isOpen: false,
      display: false
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_3__["default"])(_this), "openModal", function () {
      _this.setState({
        isOpen: true
      });
    });

    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Banner, [{
    key: "componentDidMount",
    value: function componentDidMount() {
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
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, this.state.display ? __jsx(OwlCarousel, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
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
      }, __jsx(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_11___default.a, null, function (_ref) {
        var isVisible = _ref.isVisible;
        return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, __jsx("div", {
          className: "col-lg-6 col-md-12"
        }, __jsx("div", {
          className: "hero-content"
        }, __jsx("h1", {
          className: isVisible ? 'animated fadeInUp' : ''
        }, "Truthink: All Views, One Place"), __jsx("p", {
          className: isVisible ? 'animated zoomIn' : ''
        }, "Our passion is to combat misinformation. Our goal is an educated voter. Check out the video below for a word about the Truthink vision. From our Founder, Ben Smith."), __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
          href: "#"
        }, __jsx("a", {
          className: "\n                                                                    btn btn-primary ".concat(isVisible ? 'animated zoomIn' : '', "\n                                                                ")
        }, "Get Started")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
          href: "#"
        }, __jsx("a", {
          onClick: function onClick(e) {
            e.preventDefault();

            _this2.openModal();
          },
          className: "\n                                                                    video-btn popup-youtube ".concat(isVisible ? 'animated fadeInDown' : '', "\n                                                                ")
        }, "Watch Video", __jsx("i", {
          className: "icofont-play-alt-3"
        }))))), __jsx("div", {
          className: "col-lg-6 col-md-12"
        }, __jsx("img", {
          src: "/images/truthink-app3.png"
        })));
      })))))), __jsx("div", {
        className: "main-banner startup-bg3"
      }, __jsx("div", {
        className: "d-table"
      }, __jsx("div", {
        className: "d-table-cell"
      }, __jsx("div", {
        className: "container"
      }, __jsx("div", {
        className: "row"
      }, __jsx(react_visibility_sensor__WEBPACK_IMPORTED_MODULE_11___default.a, null, function (_ref2) {
        var isVisible = _ref2.isVisible;
        return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, __jsx("div", {
          className: "col-lg-6 col-md-12"
        }, __jsx("div", {
          className: "hero-content"
        }, __jsx("h1", {
          className: isVisible ? 'animated fadeInUp' : ''
        }, "Truthink Is All Place for All Voices"), __jsx("p", {
          className: isVisible ? 'animated zoomIn' : ''
        }, "\"Wikipedia meets Reddit.\" Form well-informed opinions based on neutrally facilitated user-submitted content. Check out the video below for a message from our Founder, Ben Smith."), __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
          href: "#"
        }, __jsx("a", {
          className: "\n                                                                    btn btn-primary ".concat(isVisible ? 'animated zoomIn' : '', "\n                                                                ")
        }, "Get Started")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
          href: "#"
        }, __jsx("a", {
          onClick: function onClick(e) {
            e.preventDefault();

            _this2.openModal();
          },
          className: "\n                                                                    video-btn popup-youtube ".concat(isVisible ? 'animated fadeInDown' : '', "\n                                                                ")
        }, "Watch Video", __jsx("i", {
          className: "icofont-play-alt-3"
        }))))), __jsx("div", {
          className: "col-lg-6 col-md-12"
        }, __jsx("div", {
          className: "\n                                                            startup-image ".concat(isVisible ? 'animated zoomIn' : '', "\n                                                        ")
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
        }))));
      }))))))) : '', __jsx(react_modal_video__WEBPACK_IMPORTED_MODULE_12___default.a, {
        channel: "youtube",
        isOpen: this.state.isOpen,
        videoId: "uVXLaHu1T84",
        onClose: function onClose() {
          return _this2.setState({
            isOpen: false
          });
        }
      }));
    }
  }]);

  return Banner;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Banner);

var _c, _c2;

$RefreshReg$(_c, "OwlCarousel$dynamic");
$RefreshReg$(_c2, "OwlCarousel");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0FwcC9CYW5uZXIuanMiXSwibmFtZXMiOlsiaXNTZXJ2ZXIiLCJXT1ciLCJyZXF1aXJlIiwiT3dsQ2Fyb3VzZWwiLCJkeW5hbWljIiwib3B0aW9ucyIsIml0ZW1zIiwibG9vcCIsImF1dG9wbGF5IiwibmF2IiwicmVzcG9uc2l2ZUNsYXNzIiwiZG90cyIsImF1dG9wbGF5SG92ZXJQYXVzZSIsIm1vdXNlRHJhZyIsIm5hdlRleHQiLCJCYW5uZXIiLCJpc09wZW4iLCJkaXNwbGF5Iiwic2V0U3RhdGUiLCJib3hDbGFzcyIsImFuaW1hdGVDbGFzcyIsIm9mZnNldCIsIm1vYmlsZSIsImxpdmUiLCJpbml0Iiwic3RhdGUiLCJpc1Zpc2libGUiLCJlIiwicHJldmVudERlZmF1bHQiLCJvcGVuTW9kYWwiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBLElBQU1BLFFBQVEsUUFBZDtBQUNBLElBQU1DLEdBQUcsR0FBRyxDQUFDRCxRQUFELEdBQVlFLG1CQUFPLENBQUMsK0NBQUQsQ0FBbkIsR0FBK0IsSUFBM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1DLFdBQVcsR0FBR0Msb0RBQU87QUFBQSxTQUFDLHNLQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBQVEsa0ZBQVI7QUFBQTtBQUFBLGNBQVEscUJBQVI7QUFBQTtBQUFBLEVBQTNCO01BQU1ELFc7QUFFTixJQUFNRSxPQUFPLEdBQUc7QUFDZEMsT0FBSyxFQUFFLENBRE87QUFFZEMsTUFBSSxFQUFFLElBRlE7QUFHZEMsVUFBUSxFQUFFLElBSEk7QUFJZEMsS0FBRyxFQUFFLElBSlM7QUFLZEMsaUJBQWUsRUFBRSxJQUxIO0FBTWRDLE1BQUksRUFBRSxLQU5RO0FBT2RDLG9CQUFrQixFQUFFLElBUE47QUFRZEMsV0FBUyxFQUFFLElBUkc7QUFTZEMsU0FBTyxFQUFF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Z0NBRE47QUFFRSxtQkFBUyxFQUFDLFlBRlo7QUFHRSw0QkFBZSxNQUhqQjtBQUlFLGFBQUcsRUFBQztBQUpOLFVBN0NGLEVBbURFO0FBQ0UsYUFBRyxFQUFDLCtCQUROO0FBRUUsbUJBQVMsRUFBQyxjQUZaO0FBR0UsNEJBQWUsTUFIakI7QUFJRSxhQUFHLEVBQUM7QUFKTixVQW5ERixFQXlERTtBQUNFLGFBQUcsRUFBQyxvQ0FETjtBQUVFLG1CQUFTLEVBQUMsY0FGWjtBQUdFLDRCQUFlLE1BSGpCO0FBSUUsYUFBRyxFQUFDO0FBSk4sVUF6REYsRUErREU7QUFDRSxhQUFHLEVBQUMsaUNBRE47QUFFRSxtQkFBUyxFQUFDLGNBRlo7QUFHRSw0QkFBZSxNQUhqQjtBQUlFLGFBQUcsRUFBQztBQUpOLFVBL0RGLEVBcUVFO0FBQ0UsYUFBRyxFQUFDLHNDQUROO0FBRUUsbUJBQVMsRUFBQyxjQUZaO0FBR0UsNEJBQWUsTUFIakI7QUFJRSxhQUFHLEVBQUM7QUFKTixVQXJFRixDQURGLENBdERGLENBREQ7QUFBQSxPQURILENBREYsQ0FERixDQURGLENBREYsQ0FERixDQTVFRixDQURELEdBa09DLEVBbk9KLEVBcU9FLE1BQUMseURBQUQ7QUFDRSxlQUFPLEVBQUMsU0FEVjtBQUVFLGNBQU0sRUFBRSxLQUFLRCxLQUFMLENBQVdULE1BRnJCO0FBR0UsZUFBTyxFQUFDLGFBSFY7QUFJRSxlQUFPLEVBQUU7QUFBQSxpQkFBTSxNQUFJLENBQUNFLFFBQUwsQ0FBYztBQUFFRixrQkFBTSxFQUFFO0FBQVYsV0FBZCxDQUFOO0FBQUE7QUFKWCxRQXJPRixDQURGO0FBOE9EOzs7O0VBcFFrQmMsK0M7O0FBdVFOZixxRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuNDRiZDg1NWJmNWMwYzE5ZDgxNjAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmNvbnN0IGlzU2VydmVyID0gdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCc7XHJcbmNvbnN0IFdPVyA9ICFpc1NlcnZlciA/IHJlcXVpcmUoJ3dvd2pzJykgOiBudWxsO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xyXG5pbXBvcnQgVmlzaWJpbGl0eVNlbnNvciBmcm9tICdyZWFjdC12aXNpYmlsaXR5LXNlbnNvcic7XHJcbmltcG9ydCBNb2RhbFZpZGVvIGZyb20gJ3JlYWN0LW1vZGFsLXZpZGVvJztcclxuY29uc3QgT3dsQ2Fyb3VzZWwgPSBkeW5hbWljKGltcG9ydCgncmVhY3Qtb3dsLWNhcm91c2VsMycpKTtcclxuXHJcbmNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgaXRlbXM6IDEsXHJcbiAgbG9vcDogdHJ1ZSxcclxuICBhdXRvcGxheTogdHJ1ZSxcclxuICBuYXY6IHRydWUsXHJcbiAgcmVzcG9uc2l2ZUNsYXNzOiB0cnVlLFxyXG4gIGRvdHM6IGZhbHNlLFxyXG4gIGF1dG9wbGF5SG92ZXJQYXVzZTogdHJ1ZSxcclxuICBtb3VzZURyYWc6IHRydWUsXHJcbiAgbmF2VGV4dDogW1xyXG4gICAgXCI8aSBjbGFzcz0naWNvZm9udC1idWJibGUtbGVmdCc+PC9pPlwiLFxyXG4gICAgXCI8aSBjbGFzcz0naWNvZm9udC1idWJibGUtcmlnaHQnPjwvaT5cIixcclxuICBdLFxyXG59O1xyXG5cclxuY2xhc3MgQmFubmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBzdGF0ZSA9IHtcclxuICAgIGlzT3BlbjogZmFsc2UsXHJcbiAgICBkaXNwbGF5OiBmYWxzZSxcclxuICB9O1xyXG5cclxuICBvcGVuTW9kYWwgPSAoKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgaXNPcGVuOiB0cnVlIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGRpc3BsYXk6IHRydWUgfSk7XHJcbiAgICBuZXcgV09XLldPVyh7XHJcbiAgICAgIGJveENsYXNzOiAnd293JyxcclxuICAgICAgYW5pbWF0ZUNsYXNzOiAnYW5pbWF0ZWQnLFxyXG4gICAgICBvZmZzZXQ6IDIwLFxyXG4gICAgICBtb2JpbGU6IHRydWUsXHJcbiAgICAgIGxpdmU6IHRydWUsXHJcbiAgICB9KS5pbml0KCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAge3RoaXMuc3RhdGUuZGlzcGxheSA/IChcclxuICAgICAgICAgIDxPd2xDYXJvdXNlbFxyXG4gICAgICAgICAgICBjbGFzc05hbWU9J2hvbWUtc2xpZGVzIHN0YXJ0dXAtaG9tZSBvd2wtY2Fyb3VzZWwgb3dsLXRoZW1lJ1xyXG4gICAgICAgICAgICB7Li4ub3B0aW9uc31cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21haW4tYmFubmVyIHN0YXJ0dXAtYmcxJz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZC10YWJsZSc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZC10YWJsZS1jZWxsJz5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lcic+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3Jvdyc+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VmlzaWJpbGl0eVNlbnNvcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgeyh7IGlzVmlzaWJsZSB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1sZy02IGNvbC1tZC0xMic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdoZXJvLWNvbnRlbnQnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNWaXNpYmxlID8gJ2FuaW1hdGVkIGZhZGVJblVwJyA6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVHJ1dGhpbms6IEFsbCBWaWV3cywgT25lIFBsYWNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtpc1Zpc2libGUgPyAnYW5pbWF0ZWQgem9vbUluJyA6ICcnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE91ciBwYXNzaW9uIGlzIHRvIGNvbWJhdCBtaXNpbmZvcm1hdGlvbi4gT3VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnb2FsIGlzIGFuIGVkdWNhdGVkIHZvdGVyLiBDaGVjayBvdXQgdGhlIHZpZGVvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZWxvdyBmb3IgYSB3b3JkIGFib3V0IHRoZSBUcnV0aGluayB2aXNpb24uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBGcm9tIG91ciBGb3VuZGVyLCBCZW4gU21pdGguXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScjJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ0biBidG4tcHJpbWFyeSAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNWaXNpYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJ2FuaW1hdGVkIHpvb21JbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdldCBTdGFydGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9JyMnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGVuTW9kYWwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlkZW8tYnRuIHBvcHVwLXlvdXR1YmUgJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVmlzaWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICdhbmltYXRlZCBmYWRlSW5Eb3duJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV2F0Y2ggVmlkZW9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdpY29mb250LXBsYXktYWx0LTMnPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1sZy02IGNvbC1tZC0xMic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPScvaW1hZ2VzL3RydXRoaW5rLWFwcDMucG5nJyAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvVmlzaWJpbGl0eVNlbnNvcj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWFpbi1iYW5uZXIgc3RhcnR1cC1iZzMnPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkLXRhYmxlJz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdkLXRhYmxlLWNlbGwnPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyJz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncm93Jz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxWaXNpYmlsaXR5U2Vuc29yPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7KHsgaXNWaXNpYmxlIH0pID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29sLWxnLTYgY29sLW1kLTEyJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2hlcm8tY29udGVudCc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1Zpc2libGUgPyAnYW5pbWF0ZWQgZmFkZUluVXAnIDogJydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUcnV0aGluayBJcyBBbGwgUGxhY2UgZm9yIEFsbCBWb2ljZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2lzVmlzaWJsZSA/ICdhbmltYXRlZCB6b29tSW4nIDogJyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJXaWtpcGVkaWEgbWVldHMgUmVkZGl0LlwiIEZvcm0gd2VsbC1pbmZvcm1lZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BpbmlvbnMgYmFzZWQgb24gbmV1dHJhbGx5IGZhY2lsaXRhdGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1c2VyLXN1Ym1pdHRlZCBjb250ZW50LiBDaGVjayBvdXQgdGhlIHZpZGVvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZWxvdyBmb3IgYSBtZXNzYWdlIGZyb20gb3VyIEZvdW5kZXIsIEJlblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU21pdGguXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPScjJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ0biBidG4tcHJpbWFyeSAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNWaXNpYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJ2FuaW1hdGVkIHpvb21JbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdldCBTdGFydGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9JyMnPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGVuTW9kYWwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlkZW8tYnRuIHBvcHVwLXlvdXR1YmUgJHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVmlzaWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/ICdhbmltYXRlZCBmYWRlSW5Eb3duJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgV2F0Y2ggVmlkZW9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPSdpY29mb250LXBsYXktYWx0LTMnPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1sZy02IGNvbC1tZC0xMic+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnR1cC1pbWFnZSAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzVmlzaWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnYW5pbWF0ZWQgem9vbUluJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiAnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0nL2ltYWdlcy9zdGFydHVwLXNoYXBlL2JvYXJkLnBuZydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nd293IGZhZGVJbkRvd24nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXdvdy1kZWxheT0nMC42cydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD0nYm9hcmQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9Jy9pbWFnZXMvc3RhcnR1cC1zaGFwZS9jaGFydDEucG5nJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd3b3cgZmFkZUluVXAnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXdvdy1kZWxheT0nMC42cydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD0nY2hhcnQxJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPScvaW1hZ2VzL3N0YXJ0dXAtc2hhcGUvY2hhcnQyLnBuZydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nd293IGZhZGVJbkxlZnQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXdvdy1kZWxheT0nMC42cydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD0nY2hhcnQyJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPScvaW1hZ2VzL3N0YXJ0dXAtc2hhcGUvY2hlY2stbWFyay5wbmcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3dvdyB6b29tSW4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXdvdy1kZWxheT0nMC42cydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD0nY2hlY2stbWFyaydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0nL2ltYWdlcy9zdGFydHVwLXNoYXBlL2dpcmwxLnBuZydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nd293IGJvdW5jZUluJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS13b3ctZGVsYXk9JzAuNnMnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9J2dpcmwxJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPScvaW1hZ2VzL3N0YXJ0dXAtc2hhcGUvZ2lybDIucG5nJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd3b3cgZmFkZUluRG93bidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtd293LWRlbGF5PScwLjZzJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PSdnaXJsMidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0nL2ltYWdlcy9zdGFydHVwLXNoYXBlL2xpbmUucG5nJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd3b3cgem9vbUluJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS13b3ctZGVsYXk9JzAuNnMnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9J2xpbmUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9Jy9pbWFnZXMvc3RhcnR1cC1zaGFwZS9tYW4ucG5nJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd3b3cgZmFkZUluVXAnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXdvdy1kZWxheT0nMC42cydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD0nbWFuJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPScvaW1hZ2VzL3N0YXJ0dXAtc2hhcGUvcHJvZ3Jlc3MucG5nJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd3b3cgcm90YXRlSW4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXdvdy1kZWxheT0nMC42cydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD0ncHJvZ3Jlc3MnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9Jy9pbWFnZXMvc3RhcnR1cC1zaGFwZS90YWJsZS5wbmcnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3dvdyBmYWRlSW5VcCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtd293LWRlbGF5PScwLjZzJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PSd0YWJsZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz0nL2ltYWdlcy9zdGFydHVwLXNoYXBlL21haW4taW1hZ2UucG5nJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd3b3cgZmFkZUluVXAnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXdvdy1kZWxheT0nMC42cydcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD0nbWFpbi1pbWFnZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L1Zpc2liaWxpdHlTZW5zb3I+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9Pd2xDYXJvdXNlbD5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgJydcclxuICAgICAgICApfVxyXG4gICAgICAgIDxNb2RhbFZpZGVvXHJcbiAgICAgICAgICBjaGFubmVsPSd5b3V0dWJlJ1xyXG4gICAgICAgICAgaXNPcGVuPXt0aGlzLnN0YXRlLmlzT3Blbn1cclxuICAgICAgICAgIHZpZGVvSWQ9J3VWWExhSHUxVDg0J1xyXG4gICAgICAgICAgb25DbG9zZT17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGlzT3BlbjogZmFsc2UgfSl9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYW5uZXI7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=