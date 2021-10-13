module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "+Q8Q":
/***/ (function(module, exports) {

module.exports = require("react-scrollspy");

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

/***/ "0G5g":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "0Jp5":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogTitle");

/***/ }),

/***/ "0LMq":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/List");

/***/ }),

/***/ "1lU9":
/***/ (function(module, exports) {

module.exports = require("react-wow");

/***/ }),

/***/ "3PpT":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ExpandMore");

/***/ }),

/***/ "3V5T":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/deco-line-light-8757570c14a42fc593834958be391382.png";

/***/ }),

/***/ "3WeD":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "3wub":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.normalizeLocalePath = normalizeLocalePath;

function normalizeLocalePath(pathname, locales) {
  let detectedLocale; // first item will be empty string from splitting at first char

  const pathnameParts = pathname.split('/');
  (locales || []).some(locale => {
    if (pathnameParts[1].toLowerCase() === locale.toLowerCase()) {
      detectedLocale = locale;
      pathnameParts.splice(1, 1);
      pathname = pathnameParts.join('/') || '/';
      return true;
    }

    return false;
  });
  return {
    pathname,
    detectedLocale
  };
}

/***/ }),

/***/ "4151":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),

/***/ "4ZJ9":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Avatar");

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "6D7l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__("3WeD"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
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

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "6f9I":
/***/ (function(module, exports) {

module.exports = require("next-i18next");

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

/***/ "8gdN":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAxMjgwIDQ3MCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTI4MCA0NzA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojMzAzMDMwO30KPC9zdHlsZT4KPHRpdGxlPkNvbWJpbmVkIFNoYXBlPC90aXRsZT4KPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CjxnIGlkPSJQYWdlLTEiPgoJPHBhdGggaWQ9IkNvbWJpbmVkLVNoYXBlIiBjbGFzcz0ic3QwIiBkPSJNMTI4MCwyMzIuMWMtMzAuOC03NC45LTkzLjEtMTM3LjgtMTg2LjgtMTg4LjhDODcyLjQtNzYuOSw1NDcuMyw0NjkuNCwzNTYuMiw0NjkuNAoJCUMyMjguNyw0NjkuNCwxMTAsMzk5LjksMCwyNjFWMGgxMjgwVjIzMi4xeiIvPgo8L2c+Cjwvc3ZnPgo="

/***/ }),

/***/ "97zu":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTI4MHB4IiBoZWlnaHQ9IjQ3MHB4IiB2aWV3Qm94PSIwIDAgMTI4MCA0NzAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU1LjIgKDc4MTgxKSAtIGh0dHBzOi8vc2tldGNoYXBwLmNvbSAtLT4KICAgIDx0aXRsZT5Db21iaW5lZCBTaGFwZTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxwYXRoIGQ9Ik0xMjgwLDIzMi4wNjI5MSBDMTI0OS4xOTU4MSwxNTcuMjA3NDM5IDExODYuOTM4NDMsOTQuMjc5Mjc3OSAxMDkzLjIyNzg4LDQzLjI3ODQyNTcgQzg3Mi4zNzYwMzcsLTc2LjkxNzU1OTggNTQ3LjI4OTMyOCw0NjkuMzY3NjgxIDM1Ni4xNTQ1NTMsNDY5LjM2NzY4MSBDMjI4LjczMTM2OSw0NjkuMzY3NjgxIDExMC4wMTMxODUsMzk5LjkxMTc4NyAtMy4wODU5ODA4N2UtMTQsMjYxIEwwLDAgTDEyODAsMCBMMTI4MCwyMzIuMDYyOTEgWiIgaWQ9IkNvbWJpbmVkLVNoYXBlIiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+CiAgICA8L2c+Cjwvc3ZnPg=="

/***/ }),

/***/ "9E4/":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Zoom");

/***/ }),

/***/ "9Pu4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "9qvJ":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Check");

/***/ }),

/***/ "AJJM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/CssBaseline");

/***/ }),

/***/ "AeAN":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ Notification_Notification; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__("Wh1t");
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);

// EXTERNAL MODULE: external "@material-ui/core/Typography"
var Typography_ = __webpack_require__("UVoM");
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);

// EXTERNAL MODULE: external "@material-ui/core/Snackbar"
var Snackbar_ = __webpack_require__("D4mc");
var Snackbar_default = /*#__PURE__*/__webpack_require__.n(Snackbar_);

// EXTERNAL MODULE: external "@material-ui/core/SnackbarContent"
var SnackbarContent_ = __webpack_require__("n1EF");
var SnackbarContent_default = /*#__PURE__*/__webpack_require__.n(SnackbarContent_);

// EXTERNAL MODULE: external "@material-ui/core/Slide"
var Slide_ = __webpack_require__("mz+e");
var Slide_default = /*#__PURE__*/__webpack_require__.n(Slide_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// CONCATENATED MODULE: ./components/Notification/notification-style.js

const notificationStyles = Object(styles_["makeStyles"])(theme => ({
  notification: {
    width: '95%',
    [theme.breakpoints.up('lg')]: {
      width: '80%'
    },
    '& > div': {
      width: '100%',
      color: theme.palette.common.white,
      background: '#424242',
      [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(1, 4)
      },
      '& > div:first-child': {
        [theme.breakpoints.up('sm')]: {
          flex: 1,
          marginRight: theme.spacing(2)
        },
        [theme.breakpoints.down('xs')]: {
          textAlign: 'center'
        }
      }
    }
  },
  button: {
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 150
    }
  },
  action: {
    [theme.breakpoints.down('xs')]: {
      width: '100%',
      padding: 0,
      margin: 0
    }
  }
}));
/* harmony default export */ var notification_style = (notificationStyles);
// EXTERNAL MODULE: ./i18n.js
var i18n = __webpack_require__("k7Sn");

// CONCATENATED MODULE: ./components/Notification/Notification.js
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }










function TransitionUp(props) {
  return __jsx(Slide_default.a, _extends({}, props, {
    direction: "up"
  }));
}

function Notification(props) {
  const {
    t
  } = props;
  const classes = notification_style();
  const {
    0: open,
    1: setOpen
  } = Object(external_react_["useState"])(true);

  const handleClose = () => {
    setOpen(false);
  };

  return __jsx(Snackbar_default.a, {
    TransitionComponent: TransitionUp,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'center'
    },
    classes: {
      root: classes.notification
    },
    open: open,
    onClose: handleClose
  }, __jsx(SnackbarContent_default.a, {
    message: __jsx(Typography_default.a, {
      id: "message-id"
    }, t('common:notif_msg')),
    classes: {
      action: classes.action
    },
    action: __jsx(Button_default.a, {
      color: "secondary",
      variant: "contained",
      className: classes.button,
      onClick: handleClose
    }, t('common:accept'))
  }));
}

/* harmony default export */ var Notification_Notification = (Object(i18n["withTranslation"])(['common'])(Notification));
// CONCATENATED MODULE: ./components/Notification/index.js


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

/***/ "D+hd":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Language");

/***/ }),

/***/ "D4mc":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Snackbar");

/***/ }),

/***/ "DRgV":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ExpansionPanel");

/***/ }),

/***/ "Ek77":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/ArrowUpward");

/***/ }),

/***/ "EmCc":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),

/***/ "Fky7":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "GEQ8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParallaxLarge; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("dYMV");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("K0LP");
/* harmony import */ var react_scroll_parallax__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _parallax_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("Is15");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




function ParallaxLarge() {
  const classes = Object(_parallax_style__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])();
  return __jsx("div", {
    className: classes.parallaxWrap
  }, __jsx(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_2__["ParallaxProvider"], null, __jsx("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(classes.innerParallax, classes.large)
  }, __jsx(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_2__["Parallax"], {
    y: [50, 50],
    tagOuter: "figure"
  }, __jsx("svg", {
    className: classes.triangle
  }, __jsx("use", {
    xlinkHref: "/images/mobile/triangle.svg#main"
  }))), __jsx(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_2__["Parallax"], {
    y: [60, 60],
    tagOuter: "figure"
  }, __jsx("svg", {
    className: classes.circle
  }, __jsx("use", {
    xlinkHref: "/images/mobile/circle.svg#main"
  }))), __jsx(react_scroll_parallax__WEBPACK_IMPORTED_MODULE_2__["Parallax"], {
    y: [20, 20],
    tagOuter: "figure"
  }, __jsx("div", {
    className: classes.squareDot
  }, __jsx("svg", {
    className: classes.square
  }, __jsx("use", {
    xlinkHref: "/images/mobile/square.svg#main"
  })), __jsx("svg", {
    className: classes.dot
  }, __jsx("use", {
    xlinkHref: "/images/mobile/dot.svg#main"
  })))))));
}

/***/ }),

/***/ "GLYF":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemIcon");

/***/ }),

/***/ "GXs3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

function resolveRewrites() {}

/***/ }),

/***/ "Gfz2":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "H6h4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const link = {
  mobile: {
    home: '/',
    contact: '/contact'
  }
};
/* harmony default export */ __webpack_exports__["a"] = (link);

/***/ }),

/***/ "HXcA":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("Uynj");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("JQ2V");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("dYMV");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("DRgV");
/* harmony import */ var _material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("Hd3h");
/* harmony import */ var _material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("h1YJ");
/* harmony import */ var _material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _material_ui_icons_Language__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("D+hd");
/* harmony import */ var _material_ui_icons_Language__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Language__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("lj8g");
/* harmony import */ var _material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("3PpT");
/* harmony import */ var _material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("cPsG");
/* harmony import */ var _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("UVoM");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("OdWO");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_OutlinedInput__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("ZVla");
/* harmony import */ var _material_ui_core_OutlinedInput__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_OutlinedInput__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("x54t");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("MCme");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("EmCc");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _public_text_brand__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("zwGQ");
/* harmony import */ var _public_text_brand__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_public_text_brand__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _public_images_mobile_logo_svg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("LiqL");
/* harmony import */ var _public_images_mobile_logo_svg__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_public_images_mobile_logo_svg__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("k7Sn");
/* harmony import */ var _i18n__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_i18n__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _footer_style__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__("z/Yf");
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
























function Copyright() {
  return __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12___default.a, {
    variant: "body2",
    display: "block",
    align: "center",
    color: "textSecondary"
  }, "\xA9\xA0", _public_text_brand__WEBPACK_IMPORTED_MODULE_18___default.a.mobile.footerText);
}

const footers = [{
  title: 'Company',
  description: ['Team', 'History', 'Contact us', 'Locations'],
  link: ['#team', '#history', '#contact-us', '#locations']
}, {
  title: 'Resources',
  description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
  link: ['#resource', '#resource-name', '#another-resource', '#final-resource']
}, {
  title: 'Legal',
  description: ['Privacy policy', 'Terms of use', 'Terms Condition'],
  link: ['#privacy-policy', '#terms-of-use']
}];

function Footer(props) {
  const {
    0: ctn,
    1: setCtn
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null);
  const classes = Object(_footer_style__WEBPACK_IMPORTED_MODULE_21__[/* default */ "a"])();
  const theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["useTheme"])();
  const {
    invert
  } = props;
  const isDesktop = _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_11___default()(theme.breakpoints.up('md'));
  const isMobile = _material_ui_core_useMediaQuery__WEBPACK_IMPORTED_MODULE_11___default()(theme.breakpoints.down('sm'));
  const {
    0: values,
    1: setValues
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    lang: 'eng'
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    setValues({
      lang: _i18n__WEBPACK_IMPORTED_MODULE_20__["i18n"].language
    });
    setCtn(document.getElementById('main-wrap'));
  }, []);

  function handleChange(event) {
    setValues(oldValues => _objectSpread(_objectSpread({}, oldValues), {}, {
      [event.target.name]: event.target.value
    }));

    if (event.target.value === 'ara') {
      _i18n__WEBPACK_IMPORTED_MODULE_20__["i18n"].changeLanguage('ara');
      props.toggleDir('rtl');
    } else {
      _i18n__WEBPACK_IMPORTED_MODULE_20__["i18n"].changeLanguage(event.target.value);
      props.toggleDir('ltr');
    }
  }

  return __jsx(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_1___default.a, {
    maxWidth: "lg",
    component: "footer",
    className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(classes.footer, invert && classes.invert)
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    container: true,
    spacing: 4
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    item: true,
    xs: 12,
    md: 3
  }, __jsx("div", {
    className: classes.logo
  }, __jsx("img", {
    src: _public_images_mobile_logo_svg__WEBPACK_IMPORTED_MODULE_19___default.a,
    alt: "logo"
  }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12___default.a, {
    variant: "h6",
    color: "textPrimary"
  }, _public_text_brand__WEBPACK_IMPORTED_MODULE_18___default.a.mobile.projectName)), __jsx(Copyright, null)), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    item: true,
    xs: 12,
    md: 6
  }, __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    container: true,
    spacing: 4,
    justify: "space-evenly"
  }, footers.map(footer => __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    item: true,
    xs: 12,
    md: 3,
    key: footer.title,
    className: clsx__WEBPACK_IMPORTED_MODULE_3___default()(classes.siteMapItem, invert && classes.invert)
  }, isDesktop && __jsx("div", null, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_12___default.a, {
    variant: "h6",
    className: classes.title,
    color: "textPrimary",
    gutterBottom: true
  }, footer.title), __jsx("ul", null, footer.description.map((item, index) => __jsx("li", {
    key: item
  }, __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_16___default.a, {
    href: footer.link[index],
    variant: "subtitle1",
    color: "textSecondary"
  }, item))))), isMobile && __jsx(_material_ui_core_ExpansionPanel__WEBPACK_IMPORTED_MODULE_5___default.a, {
    square: true,
    className: invert ? classes.invert : '',
    classes: {
      root: classes.accordionRoot
    }
  }, __jsx(_material_ui_core_ExpansionPanelSummary__WEBPACK_IMPORTED_MODULE_6___default.a, {
    expandIcon: __jsx(_material_ui_icons_ExpandMore__WEBPACK_IMPORTED_MODULE_10___default.a, {
      className: classes.accordionIcon
    }),
    "aria-controls": "panel1a-content",
    id: "panel1a-header",
    classes: {
      content: classes.accordionContent
    }
  }, __jsx("strong", null, footer.title)), __jsx(_material_ui_core_ExpansionPanelDetails__WEBPACK_IMPORTED_MODULE_7___default.a, null, __jsx("ul", null, footer.description.map((item, index) => __jsx("li", {
    key: item
  }, __jsx(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_16___default.a, {
    href: footer.link[index],
    variant: "subtitle1",
    color: "textSecondary"
  }, item)))))))))), __jsx(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_2___default.a, {
    item: true,
    xs: 12,
    md: 3
  }, __jsx("div", {
    className: classes.socmed
  }, __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_17___default.a, {
    "aria-label": "FB",
    className: classes.margin,
    size: "small"
  }, __jsx("i", {
    className: "ion-logo-twitter"
  })), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_17___default.a, {
    "aria-label": "TW",
    className: classes.margin,
    size: "small"
  }, __jsx("i", {
    className: "ion-logo-facebook"
  })), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_17___default.a, {
    "aria-label": "IG",
    className: classes.margin,
    size: "small"
  }, __jsx("i", {
    className: "ion-logo-instagram"
  })), __jsx(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_17___default.a, {
    "aria-label": "LI",
    className: classes.margin,
    size: "small"
  }, __jsx("i", {
    className: "ion-logo-linkedin"
  }))), __jsx(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_13___default.a, {
    value: values.lang,
    onChange: handleChange,
    MenuProps: {
      container: ctn
    },
    startAdornment: __jsx(_material_ui_core_InputAdornment__WEBPACK_IMPORTED_MODULE_9___default.a, {
      className: classes.icon,
      position: "start"
    }, __jsx(_material_ui_icons_Language__WEBPACK_IMPORTED_MODULE_8___default.a, null)),
    className: classes.selectLang,
    input: __jsx(_material_ui_core_OutlinedInput__WEBPACK_IMPORTED_MODULE_14___default.a, {
      labelWidth: 200,
      name: "lang",
      id: "outlined-lang-simple"
    })
  }, __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_15___default.a, {
    value: "eng"
  }, "English"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_15___default.a, {
    value: "deu"
  }, "Deutsch"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_15___default.a, {
    value: "ara"
  }, "\u0627\u0644\u0639\u0631\u0628\u064A\u0651\u0629"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_15___default.a, {
    value: "ind"
  }, "Bahasa Indonesia"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_15___default.a, {
    value: "prt"
  }, "Portugu\xEAs"), __jsx(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_15___default.a, {
    value: "zho"
  }, "\u7B80\u4F53\u4E2D\u6587")))));
}

Footer.defaultProps = {
  invert: false,
  toggleDir: () => {}
};
/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),

/***/ "Hd3h":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ExpansionPanelSummary");

/***/ }),

/***/ "Is15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);

const parallaxStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(theme => ({
  parallaxWrap: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    left: 0,
    top: 0,
    zIndex: 0,
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  innerParallax: {
    height: 1500,
    width: '100%',
    position: 'absolute',
    display: 'block',
    '& figure': {
      height: 500,
      width: '100%',
      display: 'block',
      position: 'absolute'
    },
    '& figure > div': {
      display: 'block',
      position: 'absolute',
      width: '100%',
      height: '100%',
      '& svg': {
        position: 'absolute'
      }
    }
  },
  triangle: {
    stroke: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,
    opacity: 0.2,
    width: 60,
    height: 60
  },
  circle: {
    stroke: theme.palette.secondary.main,
    width: 150,
    height: 150,
    opacity: 0.2
  },
  square: {
    fill: theme.palette.primary.light,
    width: 110,
    height: 110,
    opacity: 0.2
  },
  dot: {
    fill: theme.palette.primary.light,
    width: 140,
    height: 140,
    top: -15,
    left: -10
  },
  dotMany: {
    fill: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,
    width: 510,
    height: 510,
    top: 0,
    left: 120,
    transform: 'rotate(30deg)',
    transformOrigin: 'left center',
    opacity: 0.4
  },
  dotManySmall: {
    fill: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,
    width: 510,
    height: 510,
    top: 0,
    left: -120,
    transform: 'rotate(30deg)',
    transformOrigin: 'left center',
    opacity: 0.4
  },
  squareDot: {
    position: 'absolute'
  },
  large: {
    '& $triangle': {
      left: -40,
      top: 40
    },
    '& $circle': {
      left: '70%',
      bottom: 0
    },
    '& $squareDot': {
      left: 50,
      bottom: 0
    }
  },
  medium: {
    '& $triangle': {
      top: 0,
      left: -100
    },
    '& $circle': {
      top: -100,
      right: -80,
      transform: 'scale(0.8)'
    },
    '& $squareDot': {
      left: 0,
      top: -50,
      '& $dotMany': {
        fill: theme.palette.primary.light
      }
    }
  },
  small: {
    '& $triangle': {
      top: -80,
      left: -10,
      transform: 'scale(0.8)'
    },
    '& $circle': {
      top: -100,
      left: '50%',
      transform: 'scale(0.8)'
    },
    '& $squareDot': {
      left: 0,
      top: -10
    }
  },
  extraSmall: {
    '& $triangle': {
      top: -80,
      left: 10,
      transform: 'scale(0.8)'
    },
    '& $circle': {
      top: 100,
      left: 220,
      transform: 'scale(0.8)'
    },
    '& $squareDot': {
      left: 30,
      top: -10,
      transform: 'scale(0.7)'
    }
  }
}));
/* harmony default export */ __webpack_exports__["a"] = (parallaxStyles);

/***/ }),

/***/ "JQ2V":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Grid");

/***/ }),

/***/ "Jro0":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AccordionDetails");

/***/ }),

/***/ "K0LP":
/***/ (function(module, exports) {

module.exports = require("react-scroll-parallax");

/***/ }),

/***/ "LiqL":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6dXJsKCNTVkdJRF8xXyk7fQoJLnN0MXtmaWxsOiM2NzNBQjc7c3Ryb2tlOiNGRkZGRkY7c3Ryb2tlLXdpZHRoOjIwO3N0cm9rZS1taXRlcmxpbWl0OjEwO30KPC9zdHlsZT4KPGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8xXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIxNi43ODM4IiB5MT0iMjU2IiB4Mj0iNDk1LjIxNjIiIHkyPSIyNTYiPgoJPHN0b3AgIG9mZnNldD0iMC4xODQ2IiBzdHlsZT0ic3RvcC1jb2xvcjojNjczQUI3Ii8+Cgk8c3RvcCAgb2Zmc2V0PSIwLjkyNTIiIHN0eWxlPSJzdG9wLWNvbG9yOiM4RDYzRUEiLz4KPC9saW5lYXJHcmFkaWVudD4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQwNSw0MDQuM0MzMDguOSw0NzEuNCwxNDAsNTMwLjksNzMuMyw0NzYuOUMtMTcuOCw0MDMuMiwxNSwzMDIuNSw3NSwxMzcuNWM0NC42LTEyMi45LDczLTE4MC4zLDMwMC43LTQ2LjYKCUM1MzQuOSwxODQuMiw1MjUuMSwzMjAuNSw0MDUsNDA0LjN6Ii8+CjxnPgoJPHBhdGggY2xhc3M9InN0MSIgZD0iTTEzNy44LDMzMC40VjE3OC45aDE4Ljl2MTM0LjdoNzAuNHYxNi44SDEzNy44eiIvPgoJPHBhdGggY2xhc3M9InN0MSIgZD0iTTI2Ni44LDI4Mi4ydi03Ni44aDE3Ljl2NzUuNmMwLDIyLjMsMTIuNSwzNi4zLDM1LjcsMzYuM2MyMy4yLDAsMzUuOS0xNC4xLDM1LjktMzYuM3YtNzUuNmgxNy45djc2LjgKCQljMCwzMC45LTE4LjIsNTAuOS01My44LDUwLjlDMjg0LjcsMzMzLjEsMjY2LjgsMzEyLjksMjY2LjgsMjgyLjJ6Ii8+CjwvZz4KPC9zdmc+Cg=="

/***/ }),

/***/ "MCme":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Link");

/***/ }),

/***/ "NHP8":
/***/ (function(module, exports) {

module.exports = require("react-countup");

/***/ }),

/***/ "Nh2W":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("AroE");

exports.__esModule = true;
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.default = void 0;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__("UhrY"));

var _requestIdleCallback = __webpack_require__("0G5g"); // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? // eslint-disable-next-line no-sequences
  generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (_unused) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR'); // TODO: unexport

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // Resolve a promise that times out after given amount of milliseconds.


function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject);
    (0, _requestIdleCallback.requestIdleCallback)(() => setTimeout(() => {
      if (!cancelled) {
        reject(err);
      }
    }, ms));
  });
} // TODO: stop exporting or cache the failure
// It'd be best to stop exporting this. It's an implementation detail. We're
// only exporting it for backwards compatibilty with the `page-loader`.
// Only cache this response as a last resort if we cannot eliminate all other
// code branches that use the Build Manifest Callback and push them through
// the Route Loader interface.


function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (false) {}

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route, prefetch) {
      return withFuture(route, routes, () => {
        return resolvePromiseWithTimeout(getFilesForRoute(assetPrefix, route).then(({
          scripts,
          css
        }) => {
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(res => {
          return this.whenEntrypoint(route).then(entrypoint => ({
            entrypoint,
            styles: res[1]
          }));
        }), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({
          entrypoint,
          styles
        }) => {
          const res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        }).catch(err => {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback.requestIdleCallback)(() => this.loadRoute(route, true).catch(() => {}));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

var _default = createRouteLoader;
exports.default = _default;

/***/ }),

/***/ "O/hg":
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "OdWO":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Select");

/***/ }),

/***/ "Ogzj":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ Header_Header; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "@material-ui/core/AppBar"
var AppBar_ = __webpack_require__("4151");
var AppBar_default = /*#__PURE__*/__webpack_require__.n(AppBar_);

// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__("dYMV");
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);

// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__("Wh1t");
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);

// EXTERNAL MODULE: external "@material-ui/core/IconButton"
var IconButton_ = __webpack_require__("EmCc");
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);

// EXTERNAL MODULE: external "@material-ui/core/Hidden"
var Hidden_ = __webpack_require__("Y8uC");
var Hidden_default = /*#__PURE__*/__webpack_require__.n(Hidden_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "@material-ui/core/Container"
var Container_ = __webpack_require__("Uynj");
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);

// EXTERNAL MODULE: external "@material-ui/core/useMediaQuery"
var useMediaQuery_ = __webpack_require__("cPsG");
var useMediaQuery_default = /*#__PURE__*/__webpack_require__.n(useMediaQuery_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "react-anchor-link-smooth-scroll"
var external_react_anchor_link_smooth_scroll_ = __webpack_require__("k094");
var external_react_anchor_link_smooth_scroll_default = /*#__PURE__*/__webpack_require__.n(external_react_anchor_link_smooth_scroll_);

// EXTERNAL MODULE: external "react-scrollspy"
var external_react_scrollspy_ = __webpack_require__("+Q8Q");
var external_react_scrollspy_default = /*#__PURE__*/__webpack_require__.n(external_react_scrollspy_);

// EXTERNAL MODULE: external "@material-ui/core/Popover"
var Popover_ = __webpack_require__("fA+V");
var Popover_default = /*#__PURE__*/__webpack_require__.n(Popover_);

// EXTERNAL MODULE: external "@material-ui/icons/Settings"
var Settings_ = __webpack_require__("XnMA");
var Settings_default = /*#__PURE__*/__webpack_require__.n(Settings_);

// EXTERNAL MODULE: external "@material-ui/icons/Check"
var Check_ = __webpack_require__("9qvJ");
var Check_default = /*#__PURE__*/__webpack_require__.n(Check_);

// EXTERNAL MODULE: external "@material-ui/core/List"
var List_ = __webpack_require__("0LMq");
var List_default = /*#__PURE__*/__webpack_require__.n(List_);

// EXTERNAL MODULE: external "@material-ui/core/ListSubheader"
var ListSubheader_ = __webpack_require__("XfbO");
var ListSubheader_default = /*#__PURE__*/__webpack_require__.n(ListSubheader_);

// EXTERNAL MODULE: external "@material-ui/core/ListItem"
var ListItem_ = __webpack_require__("c25J");
var ListItem_default = /*#__PURE__*/__webpack_require__.n(ListItem_);

// EXTERNAL MODULE: external "@material-ui/core/ListItemIcon"
var ListItemIcon_ = __webpack_require__("GLYF");
var ListItemIcon_default = /*#__PURE__*/__webpack_require__.n(ListItemIcon_);

// EXTERNAL MODULE: external "@material-ui/core/ListItemSecondaryAction"
var ListItemSecondaryAction_ = __webpack_require__("ubCc");
var ListItemSecondaryAction_default = /*#__PURE__*/__webpack_require__.n(ListItemSecondaryAction_);

// EXTERNAL MODULE: external "@material-ui/core/ListItemText"
var ListItemText_ = __webpack_require__("W+03");
var ListItemText_default = /*#__PURE__*/__webpack_require__.n(ListItemText_);

// EXTERNAL MODULE: external "@material-ui/core/Switch"
var Switch_ = __webpack_require__("lOiU");
var Switch_default = /*#__PURE__*/__webpack_require__.n(Switch_);

// EXTERNAL MODULE: external "@material-ui/core/Divider"
var Divider_ = __webpack_require__("nybW");
var Divider_default = /*#__PURE__*/__webpack_require__.n(Divider_);

// EXTERNAL MODULE: external "@material-ui/core/Grid"
var Grid_ = __webpack_require__("JQ2V");
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);

// EXTERNAL MODULE: external "@material-ui/core/Typography"
var Typography_ = __webpack_require__("UVoM");
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);

// EXTERNAL MODULE: ./i18n.js
var i18n = __webpack_require__("k7Sn");

// EXTERNAL MODULE: external "@material-ui/core/styles/colorManipulator"
var colorManipulator_ = __webpack_require__("oOPP");

// EXTERNAL MODULE: ./public/images/flag-logo.png
var flag_logo = __webpack_require__("VnM+");
var flag_logo_default = /*#__PURE__*/__webpack_require__.n(flag_logo);

// CONCATENATED MODULE: ./components/Header/header-style.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const flagIcon = {
  width: 16,
  height: 16,
  borderRadius: '50%',
  display: 'inline-block',
  position: 'relative',
  marginRight: 5,
  top: 1,
  background: `url(${flag_logo_default.a}) no-repeat transparent`,
  backgroundSize: '16px auto',
  '&[class="ara"]': {
    backgroundPosition: '0 3px'
  },
  '&[class="zho"]': {
    backgroundPosition: '0 -12px'
  },
  '&[class="eng"]': {
    backgroundPosition: '0 -28px'
  },
  '&[class="deu"]': {
    backgroundPosition: '0 -44px'
  },
  '&[class="ind"]': {
    backgroundPosition: '0 -62px'
  },
  '&[class="prt"]': {
    backgroundPosition: '0 -79px'
  }
};
const headerStyles = Object(styles_["makeStyles"])(theme => ({
  '@keyframes slideRight': {
    from: {
      opacity: 0,
      transform: 'translateX(-100px)'
    },
    to: {
      opacity: 1,
      transform: 'none'
    }
  },
  fixed: {},
  header: {
    position: 'fixed',
    color: theme.palette.common.white,
    background: 'none',
    boxShadow: 'none',
    transition: 'all 0.5s ease-out',
    '& > *': {
      [theme.breakpoints.down('md')]: {
        padding: 0
      }
    },
    '&$fixed': {
      background: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      '& $logo': {
        '& a': {
          color: 'transparent',
          fontSize: 0
        },
        '& img': {
          marginBottom: 0,
          [theme.breakpoints.up('sm')]: {
            height: 48,
            width: 48
          }
        }
      },
      '& nav': {
        padding: theme.spacing(1, 0),
        '& $button': {
          padding: theme.spacing(0.5, 2)
        }
      },
      '& $socialBtn': {
        background: theme.palette.type === 'dark' ? Object(colorManipulator_["fade"])(theme.palette.primary.light, 0.12) : Object(colorManipulator_["fade"])(theme.palette.primary.main, 0.12),
        '& i': {
          color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.main
        }
      },
      '& $setting': {
        '& svg': {
          fill: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.main
        }
      }
    },
    '&$openDrawer': {
      zIndex: 1600,
      boxShadow: 'none'
    }
  },
  headerContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    '& nav': {
      alignItems: 'center',
      padding: theme.spacing(2),
      [theme.breakpoints.down('md')]: {
        padding: theme.spacing(2, 0)
      },
      display: 'flex'
    }
  },
  logo: {
    '& a': {
      textDecoration: 'none',
      display: 'block',
      fontSize: 16,
      color: theme.palette.type === 'dark' ? theme.palette.text.primary : theme.palette.primary.main,
      alignItems: 'center',
      transition: 'color 0.5s ease-out',
      fontWeight: theme.typography.fontWeightMedium,
      textAlign: 'center'
    },
    '& img': {
      display: 'block',
      margin: '0 auto',
      transition: 'all 0.3s ease-out',
      marginBottom: theme.spacing(),
      height: 48,
      width: 48,
      [theme.breakpoints.up('sm')]: {
        width: 64,
        height: 64
      }
    }
  },
  active: {},
  button: {
    width: theme.spacing(20)
  },
  navMenu: {
    [theme.breakpoints.up('lg')]: {
      '& > *': {
        margin: theme.spacing(0, 1)
      }
    },
    '& a': {
      marginTop: theme.spacing(0.5),
      fontSize: 16,
      fontWeight: theme.typography.fontWeightMedium,
      boxShadow: 'none',
      position: 'relative',
      margin: theme.spacing(0, 1)
    },
    '& ul': {
      listStyle: 'none',
      marginLeft: 0,
      paddingLeft: 0,
      '& li': {
        margin: theme.spacing(0, 1),
        listStyle: 'none',
        position: 'relative',
        display: 'inline-block',
        '& a': {
          textTransform: 'capitalize',
          minWidth: 0,
          padding: '6px',
          background: 'none !important',
          '&:after': {
            content: '""',
            height: 6,
            width: 6,
            transform: 'scale(0)',
            position: 'absolute',
            borderRadius: '50%',
            margin: '0 auto',
            bottom: -5,
            background: theme.palette.primary.main,
            transition: 'all 0.2s cubic-bezier(0.42, 0.16, 0.21, 0.93)'
          },
          '&:hover': {
            transition: 'all 0.3s ease-out',
            color: Object(colorManipulator_["fade"])(theme.palette.text.primary, 0.5),
            '&:after': {
              transform: 'scale(1)'
            }
          }
        },
        '&[class="active"]': {
          '& a': {
            color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,
            '&:after': {
              transform: 'scale(1)'
            }
          }
        }
      }
    },
    '&$invert': {
      '& $socialBtn': {
        background: Object(colorManipulator_["fade"])(theme.palette.primary.main, 0.24),
        '& i': {
          color: theme.palette.primary.main
        }
      }
    }
  },
  margin: {},
  langMenu: {
    textTransform: 'capitalize',
    '& i': _objectSpread({}, flagIcon)
  },
  socialBtn: {
    background: Object(colorManipulator_["fade"])(theme.palette.common.white, 0.24),
    width: 35,
    height: 35,
    padding: theme.spacing(0.5),
    [theme.breakpoints.down('md')]: {
      margin: '0 6px'
    },
    '& i': {
      color: theme.palette.common.white,
      fontSize: 22
    }
  },
  icon: {},
  invert: {},
  setting: {
    margin: theme.spacing(0, 1),
    '& $icon': {
      transition: 'all 0.3s ease',
      color: theme.palette.common.white,
      '&$invert': {
        '& svg': {
          fill: theme.palette.text.secondary
        }
      }
    },
    '& svg': {
      fill: theme.palette.common.white,
      width: 30,
      height: 30,
      [theme.breakpoints.down('xs')]: {
        fill: theme.palette.text.secondary
      }
    },
    '& $active': {
      transform: 'rotate(30deg)'
    }
  },
  modeMenu: {
    textTransform: 'capitalize'
  },
  bar: {
    backgroundColor: theme.palette.text.secondary,
    '&:after, &:before': {
      backgroundColor: theme.palette.text.secondary
    }
  },
  menu: {},
  openDrawer: {},
  paperNav: {
    width: '100%',
    background: theme.palette.background.paper,
    [theme.breakpoints.up(680)]: {
      width: 300
    }
  },
  mobileMenu: {
    margin: theme.spacing(0, 1)
  },
  mobileNav: {
    background: theme.palette.background.paper,
    height: '100%',
    '& $menu': {
      padding: theme.spacing(0, 5),
      overflow: 'auto',
      top: 90,
      width: '100%',
      position: 'absolute',
      height: 'calc(100% - 90px)',
      '& a': {
        animationName: '$slideRight',
        animationTimingFunction: 'ease'
      }
    }
  },
  menuList: {
    textTransform: 'capitalize',
    '& span': {
      fontSize: 24
    }
  }
}));
/* harmony default export */ var header_style = (headerStyles);
// CONCATENATED MODULE: ./components/Header/Settings.js
var __jsx = external_react_default.a.createElement;


















let themeType = 'light';

if (typeof Storage !== 'undefined') {
  themeType = localStorage.getItem('luxiTheme') || 'light';
}

function Settings(props) {
  const {
    0: ctn,
    1: setCtn
  } = Object(external_react_["useState"])(null);
  const classes = header_style();
  const {
    t
  } = props;
  const {
    0: anchorEl,
    1: setAnchorEl
  } = Object(external_react_["useState"])(null);
  const {
    0: isDark,
    1: setDark
  } = Object(external_react_["useState"])(themeType === 'dark');

  function handleClick(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const handleChangeMode = () => {
    setDark(!isDark);
    props.toggleDark();
  };

  function handleChangeLang(lang) {
    if (lang === 'ara') {
      i18n["i18n"].changeLanguage('ara');
      props.toggleDir('rtl');
    } else {
      i18n["i18n"].changeLanguage(lang);
      props.toggleDir('ltr');
    }

    setAnchorEl(null);
  }

  Object(external_react_["useEffect"])(() => {
    setCtn(document.getElementById('main-wrap'));
  });
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  const {
    invert
  } = props;
  return __jsx("div", {
    className: classes.setting
  }, __jsx(IconButton_default.a, {
    "aria-describedby": id,
    "aria-label": "Settings",
    onClick: handleClick,
    className: external_clsx_default()(classes.icon, open && classes.active, invert && classes.invert)
  }, __jsx(Settings_default.a, {
    fontSize: "inherit"
  })), __jsx(Popover_default.a, {
    id: id,
    open: open,
    anchorEl: anchorEl,
    onClose: handleClose,
    container: ctn,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'center'
    },
    transformOrigin: {
      vertical: 'top',
      horizontal: 'center'
    }
  }, __jsx(List_default.a, {
    component: "nav",
    className: classes.modeMenu,
    "aria-label": "Mode-menu",
    subheader: __jsx(ListSubheader_default.a, {
      component: "div"
    }, t('common:mobile-landing.header_theme'))
  }, __jsx(ListItem_default.a, null, __jsx(Typography_default.a, {
    component: "div"
  }, __jsx(Grid_default.a, {
    component: "label",
    container: true,
    alignItems: "center",
    spacing: 1
  }, __jsx(Grid_default.a, {
    item: true
  }, t('common:mobile-landing.header_light')), __jsx(Grid_default.a, {
    item: true
  }, __jsx(Switch_default.a, {
    checked: isDark,
    onChange: handleChangeMode,
    value: isDark,
    inputProps: {
      'aria-label': 'checkbox'
    }
  })), __jsx(Grid_default.a, {
    item: true
  }, t('common:mobile-landing.header_dark')))))), __jsx(Divider_default.a, null), __jsx(List_default.a, {
    component: "nav",
    className: classes.langMenu,
    "aria-label": "Language-menu",
    subheader: __jsx(ListSubheader_default.a, {
      component: "div"
    }, t('common:mobile-landing.header_language'))
  }, i18n["i18n"].options.allLanguages && i18n["i18n"].options.allLanguages.map(val => __jsx(ListItem_default.a, {
    key: val,
    role: undefined,
    dense: true,
    button: true,
    onClick: () => handleChangeLang(val)
  }, __jsx(ListItemIcon_default.a, null, __jsx("i", {
    className: val
  })), __jsx(ListItemText_default.a, {
    primary: props.t('common:' + val)
  }), i18n["i18n"].language === val && __jsx(ListItemSecondaryAction_default.a, null, __jsx(Check_default.a, {
    color: "primary"
  })))))));
}

Settings.defaultProps = {
  invert: false
};
/* harmony default export */ var Header_Settings = (Object(i18n["withTranslation"])(['common', 'mobile-landing'])(Settings));
// EXTERNAL MODULE: external "@material-ui/core/SwipeableDrawer"
var SwipeableDrawer_ = __webpack_require__("pN9Q");
var SwipeableDrawer_default = /*#__PURE__*/__webpack_require__.n(SwipeableDrawer_);

// EXTERNAL MODULE: ./public/text/link.js
var text_link = __webpack_require__("H6h4");

// EXTERNAL MODULE: ./components/Header/menu.js
var menu = __webpack_require__("dlhf");

// CONCATENATED MODULE: ./components/Header/MobileMenu.js
var MobileMenu_jsx = external_react_default.a.createElement;











function MobileMenu(props) {
  const classes = header_style();
  const {
    toggleDrawer,
    open,
    t
  } = props;

  const SideList = () => MobileMenu_jsx("div", {
    className: classes.mobileNav,
    role: "presentation",
    onClick: toggleDrawer,
    onKeyDown: toggleDrawer
  }, MobileMenu_jsx("div", {
    className: external_clsx_default()(classes.menu, open && classes.menuOpen)
  }, MobileMenu_jsx(List_default.a, {
    component: "nav"
  }, menu["a" /* default */].map((item, index) => MobileMenu_jsx(ListItem_default.a, {
    button: true,
    component: "a",
    href: `#${item}`,
    key: item,
    index: index.toString(),
    style: {
      animationDuration: index * 0.15 + 's'
    }
  }, MobileMenu_jsx(ListItemText_default.a, {
    primary: t('common:mobile-landing.header_' + item),
    className: classes.menuList
  }))), MobileMenu_jsx(ListItem_default.a, {
    button: true,
    component: "a",
    href: text_link["a" /* default */].mobile.contact,
    style: {
      animationDuration: menu["a" /* default */].length * 0.15 + 's'
    }
  }, MobileMenu_jsx(ListItemText_default.a, {
    primary: t('common:mobile-landing.header_contact'),
    className: classes.menuList
  })))));

  return MobileMenu_jsx(SwipeableDrawer_default.a, {
    open: open,
    onClose: toggleDrawer,
    onOpen: toggleDrawer,
    classes: {
      paper: classes.paperNav
    }
  }, MobileMenu_jsx(SideList, null));
}

/* harmony default export */ var Header_MobileMenu = (Object(i18n["withTranslation"])(['mobile-landing'])(MobileMenu));
// EXTERNAL MODULE: ./public/images/mobile-logo.svg
var mobile_logo = __webpack_require__("LiqL");
var mobile_logo_default = /*#__PURE__*/__webpack_require__.n(mobile_logo);

// EXTERNAL MODULE: ./public/text/brand.js
var brand = __webpack_require__("zwGQ");
var brand_default = /*#__PURE__*/__webpack_require__.n(brand);

// CONCATENATED MODULE: ./components/Header/Header.js
var Header_jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





















let counter = 0;

function createData(name, url, offset) {
  counter += 1;
  return {
    id: counter,
    name,
    url,
    offset
  };
}

const Header_LinkBtn = /*#__PURE__*/external_react_default.a.forwardRef(function LinkBtn(props, ref) {
  // eslint-disable-line
  return Header_jsx(external_react_anchor_link_smooth_scroll_default.a, _extends({
    to: props.to
  }, props, {
    innerRef: ref
  })); // eslint-disable-line
});

function Header(props) {
  const {
    0: fixed,
    1: setFixed
  } = Object(external_react_["useState"])(false);
  let flagFixed = false;

  const handleScroll = () => {
    const doc = document.documentElement;
    const scroll = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    const newFlagFixed = scroll > 100;

    if (flagFixed !== newFlagFixed) {
      setFixed(newFlagFixed);
      flagFixed = newFlagFixed;
    }
  };

  Object(external_react_["useEffect"])(() => {
    window.addEventListener('scroll', handleScroll);
    console.log();
  }, []);
  const classes = header_style();
  const theme = Object(styles_["useTheme"])();
  const {
    onToggleDark,
    onToggleDir,
    invert,
    t
  } = props;
  const isDesktop = useMediaQuery_default()(theme.breakpoints.up('lg'));
  const isMobile = useMediaQuery_default()(theme.breakpoints.down('md'));
  const {
    0: menuList
  } = Object(external_react_["useState"])([createData(menu["a" /* default */][0], '#' + menu["a" /* default */][0]), createData(menu["a" /* default */][1], '#' + menu["a" /* default */][1]), createData(menu["a" /* default */][2], '#' + menu["a" /* default */][2]), createData(menu["a" /* default */][3], '#' + menu["a" /* default */][3], -40)]);
  const {
    0: openDrawer,
    1: setOpenDrawer
  } = Object(external_react_["useState"])(false);

  const handleOpenDrawer = () => {
    setOpenDrawer(!openDrawer);
  };

  return Header_jsx(external_react_["Fragment"], null, isMobile && Header_jsx(Header_MobileMenu, {
    open: openDrawer,
    toggleDrawer: handleOpenDrawer
  }), Header_jsx(AppBar_default.a, {
    component: "header",
    position: "relative",
    id: "header",
    className: external_clsx_default()(classes.header, fixed && classes.fixed, openDrawer && classes.openDrawer)
  }, Header_jsx(Container_default.a, {
    fixed: isDesktop
  }, Header_jsx("div", {
    className: classes.headerContent
  }, Header_jsx("nav", {
    className: external_clsx_default()(classes.navMenu, invert && classes.invert)
  }, isMobile && Header_jsx(IconButton_default.a, {
    onClick: handleOpenDrawer,
    className: external_clsx_default()('hamburger hamburger--spin', classes.mobileMenu, openDrawer && 'is-active')
  }, Header_jsx("span", {
    className: "hamburger-box"
  }, Header_jsx("span", {
    className: external_clsx_default()(classes.bar, 'hamburger-inner')
  }))), Header_jsx("div", {
    className: classes.logo
  }, invert ? Header_jsx(link_default.a, {
    href: text_link["a" /* default */].mobile.home
  }, Header_jsx("a", null, Header_jsx("img", {
    src: mobile_logo_default.a,
    alt: "logo"
  }), !isMobile && brand_default.a.mobile.projectName)) : Header_jsx(external_react_anchor_link_smooth_scroll_default.a, {
    href: "#home"
  }, Header_jsx("img", {
    src: mobile_logo_default.a,
    alt: "logo"
  }), !isMobile && brand_default.a.mobile.projectName)), isDesktop && Header_jsx(external_react_scrollspy_default.a, {
    items: menu["a" /* default */],
    currentClassName: "active"
  }, menuList.map(item => Header_jsx("li", {
    key: item.id.toString()
  }, invert ? // eslint-disable-next-line
  Header_jsx(Button_default.a, {
    offset: item.offset || 0,
    href: '/' + item.url
  }, t('common:mobile-landing.header_' + item.name)) : // eslint-disable-next-line
  Header_jsx(Button_default.a, {
    component: external_react_anchor_link_smooth_scroll_default.a,
    offset: item.offset || 0,
    href: item.url
  }, t('common:mobile-landing.header_' + item.name)))), Header_jsx("li", null, Header_jsx(Button_default.a, {
    href: text_link["a" /* default */].mobile.contact
  }, t('common:mobile-landing.header_contact'))))), Header_jsx("nav", {
    className: classes.navMenu
  }, !invert && Header_jsx(Hidden_default.a, {
    xsDown: true
  }, Header_jsx(external_react_["Fragment"], null, Header_jsx(IconButton_default.a, {
    "aria-label": "facebook",
    className: classes.socialBtn,
    size: "small"
  }, Header_jsx("i", {
    className: "ion-logo-twitter"
  })), Header_jsx(IconButton_default.a, {
    "aria-label": "twitter",
    className: classes.socialBtn,
    size: "small"
  }, Header_jsx("i", {
    className: "ion-logo-facebook"
  })), Header_jsx(IconButton_default.a, {
    "aria-label": "instagram",
    className: classes.socialBtn,
    size: "small"
  }, Header_jsx("i", {
    className: "ion-logo-instagram"
  })), Header_jsx(IconButton_default.a, {
    "aria-label": "linkedin",
    className: classes.socialBtn,
    size: "small"
  }, Header_jsx("i", {
    className: "ion-logo-linkedin"
  })))), Header_jsx(Header_Settings, {
    toggleDark: onToggleDark,
    toggleDir: onToggleDir,
    invert: invert
  }))))));
}

Header.defaultProps = {
  sticky: false,
  invert: false
};
/* harmony default export */ var Header_Header = (Object(i18n["withTranslation"])(['mobile-landing'])(Header));
// CONCATENATED MODULE: ./components/Header/index.js


/***/ }),

/***/ "Osoz":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "@material-ui/core/Hidden"
var Hidden_ = __webpack_require__("Y8uC");
var Hidden_default = /*#__PURE__*/__webpack_require__.n(Hidden_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "@material-ui/core/CssBaseline"
var CssBaseline_ = __webpack_require__("AJJM");
var CssBaseline_default = /*#__PURE__*/__webpack_require__.n(CssBaseline_);

// EXTERNAL MODULE: ./components/Header/index.js + 4 modules
var Header = __webpack_require__("Ogzj");

// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__("dYMV");
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);

// EXTERNAL MODULE: external "@material-ui/core/Container"
var Container_ = __webpack_require__("Uynj");
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);

// EXTERNAL MODULE: external "@material-ui/core/useMediaQuery"
var useMediaQuery_ = __webpack_require__("cPsG");
var useMediaQuery_default = /*#__PURE__*/__webpack_require__.n(useMediaQuery_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// EXTERNAL MODULE: external "@material-ui/core/Grid"
var Grid_ = __webpack_require__("JQ2V");
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);

// EXTERNAL MODULE: external "@material-ui/core/Typography"
var Typography_ = __webpack_require__("UVoM");
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);

// CONCATENATED MODULE: ./public/images/imgAPI.js
const imgAPI = {
  avatar: ['/images/avatars/pp_girl.svg', '/images/avatars/pp_girl2.svg', '/images/avatars/pp_girl3.svg', '/images/avatars/pp_girl4.svg', '/images/avatars/pp_girl5.svg', '/images/avatars/pp_girl.svg', '/images/avatars/pp_boy.svg', '/images/avatars/pp_boy2.svg', '/images/avatars/pp_boy3.svg', '/images/avatars/pp_boy4.svg', '/images/avatars/pp_boy5.svg'],
  photo: ['https://via.placeholder.com/675x900/e1ad92/fff', 'https://via.placeholder.com/967x725/ea6d6d/fff', 'https://via.placeholder.com/1280x849/ea6db7/fff', 'https://via.placeholder.com/967x725/bb6dea/fff', 'https://via.placeholder.com/1048x701/6d6fea/fff', 'https://via.placeholder.com/1050x700/6dc0ea/fff', 'https://via.placeholder.com/970x725/6deaa6/fff', 'https://via.placeholder.com/1051x700/b8de27/fff', 'https://via.placeholder.com/1051x701/de9f27/fff', 'https://via.placeholder.com/1050x700/ef4545/fff', 'https://via.placeholder.com/1050x700/ffc4c4/757575', 'https://via.placeholder.com/640x447/fdffc4/757575', 'https://via.placeholder.com/1280x851/c4ffd7/757575', 'https://via.placeholder.com/640x425/c4cdff/757575'],
  mobile: ['/images/mobile/mobile_banner.png', '/images/mobile/widget-top.png', '/images/mobile/widget-left.png', '/images/mobile/widget-right.png', '/images/mobile/mobile_feature.png', '/images/mobile/mobile_feature2.png', 'https://via.placeholder.com/536x302/fbd2ff/757575', 'https://via.placeholder.com/518x1120/fbd2ff/757575', 'https://via.placeholder.com/518x1120/d2ffff/757575', 'https://via.placeholder.com/518x1120/fbd2ff/757575', 'https://via.placeholder.com/518x1120/d2ffff/757575', 'https://via.placeholder.com/518x1120/fbd2ff/757575', 'https://via.placeholder.com/518x1120/d2ffff/757575', 'https://via.placeholder.com/518x1120/fbd2ff/757575', '/images/mobile/widget_screen1.png', '/images/mobile/widget_screen2.png', '/images/mobile/widget_screen3.png', '/images/mobile/widget_screen4.png', '/images/mobile/widget_screen5.png', '/images/mobile/widget_screen6.png', '/images/mobile/widget_screen7.png', '']
};
/* harmony default export */ var images_imgAPI = (imgAPI);
// EXTERNAL MODULE: ./i18n.js
var i18n = __webpack_require__("k7Sn");

// CONCATENATED MODULE: ./theme/common.js

const useTextAlign = Object(styles_["makeStyles"])({
  textCenter: {
    textAlign: 'center'
  },
  textLeft: {
    textAlign: 'left'
  },
  textRight: {
    textAlign: 'right'
  }
});
const useFloat = Object(styles_["makeStyles"])({
  floatLeft: {
    float: 'left'
  },
  floatRight: {
    float: 'right'
  }
});
const useText = Object(styles_["makeStyles"])(theme => ({
  title: {
    fontWeight: theme.typography.fontWeightBold,
    fontSize: 48,
    lineHeight: '72px',
    [theme.breakpoints.down('md')]: {
      fontSize: 38,
      lineHeight: '60px'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 28,
      lineHeight: '44px'
    }
  },
  title2: {
    fontSize: 36,
    lineHeight: '56px',
    fontWeight: theme.typography.fontWeightBold,
    [theme.breakpoints.down('md')]: {
      fontSize: 32,
      lineHeight: '48px'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 24,
      lineHeight: '36px'
    }
  },
  subtitle: {
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: 28,
    lineHeight: '44px',
    [theme.breakpoints.down('md')]: {
      fontSize: 24,
      lineHeight: '36px'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 18,
      lineHeight: '28px'
    }
  },
  subtitle2: {
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: 22,
    lineHeight: '32px',
    [theme.breakpoints.down('md')]: {
      fontSize: 20,
      lineHeight: '32px'
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: 16,
      lineHeight: '24px'
    }
  },
  paragraph: {
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: 16,
    lineHeight: '24px'
  },
  caption: {
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: 16,
    lineHeight: '24px',
    [theme.breakpoints.down('xs')]: {
      fontSize: 14,
      lineHeight: '22px'
    }
  }
}));
const useHidden = Object(styles_["makeStyles"])(theme => ({
  lgDown: {
    [theme.breakpoints.down('lg')]: {
      display: 'none'
    }
  },
  mdDown: {
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  smDown: {
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  xsDown: {
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
  },
  lgUp: {
    [theme.breakpoints.up('lg')]: {
      display: 'none'
    }
  },
  mdUp: {
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  smUp: {
    [theme.breakpoints.up('sm')]: {
      display: 'none'
    }
  }
}));
// EXTERNAL MODULE: ./public/images/mobile/deco-wave-light.png
var deco_wave_light = __webpack_require__("Gfz2");
var deco_wave_light_default = /*#__PURE__*/__webpack_require__.n(deco_wave_light);

// EXTERNAL MODULE: ./public/images/mobile/deco-wave-dark.png
var deco_wave_dark = __webpack_require__("Fky7");
var deco_wave_dark_default = /*#__PURE__*/__webpack_require__.n(deco_wave_dark);

// EXTERNAL MODULE: ./public/images/mobile/deco-line-light.png
var deco_line_light = __webpack_require__("3V5T");
var deco_line_light_default = /*#__PURE__*/__webpack_require__.n(deco_line_light);

// EXTERNAL MODULE: ./public/images/mobile/deco-line-dark.png
var deco_line_dark = __webpack_require__("g6gc");
var deco_line_dark_default = /*#__PURE__*/__webpack_require__.n(deco_line_dark);

// CONCATENATED MODULE: ./components/Banner/banner-style.js





const bannerStyles = Object(styles_["makeStyles"])(theme => ({
  root: {
    position: 'relative',
    display: 'block'
  },
  background: {
    position: 'absolute',
    height: 720,
    top: 0,
    right: 0,
    width: '55%',
    [theme.breakpoints.up('lg')]: {
      width: '55%'
    },
    [theme.breakpoints.down('sm')]: {
      height: 260
    },
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    },
    '& img': {
      position: 'absolute',
      right: 0,
      top: 0
    }
  },
  decoInner: {
    position: 'absolute',
    top: 0,
    right: 0,
    opacity: 0.2,
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  gradient: {
    backgroundImage: `linear-gradient(30deg, ${theme.palette.primary.main} 50%, ${theme.palette.secondary.main} 140%)`,
    width: '100%',
    height: '100%',
    '& img': {
      display: 'block'
    }
  },
  text: {
    height: 680,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    position: 'relative',
    zIndex: 10,
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(5)
    },
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'flex-start',
      paddingTop: theme.spacing(20),
      height: 560
    },
    '& h3': {
      marginTop: theme.spacing(12),
      [theme.breakpoints.down('md')]: {
        marginTop: theme.spacing(3)
      },
      [theme.breakpoints.down('xs')]: {
        marginTop: 0,
        textAlign: 'center'
      },
      '& strong': {
        fontWeight: theme.typography.fontWeightBold,
        color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.main
      }
    },
    '& h5': {
      color: theme.palette.text.secondary,
      margin: theme.spacing(4, 0),
      [theme.breakpoints.down('xs')]: {
        textAlign: 'center'
      }
    }
  },
  btnArea: {
    textAlign: 'center',
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'space-around'
    },
    '& a': {
      [theme.breakpoints.up('sm')]: {
        marginRight: theme.spacing(2)
      },
      [theme.breakpoints.down('xs')]: {
        margin: 4
      },
      '& img': {
        width: 160,
        [theme.breakpoints.down('xs')]: {
          width: '100%'
        }
      }
    }
  },
  decoration: {
    position: 'relative',
    height: '100%'
  },
  decoWave: {
    position: 'absolute',
    top: 40,
    left: -1,
    width: '102%',
    height: '100%',
    transform: theme.direction === 'rtl' ? 'scale(-1, 1)' : 'none',
    background: `url(${theme.palette.type === 'dark' ? deco_wave_dark_default.a : deco_wave_light_default.a}) no-repeat 0 0`,
    backgroundSize: '100% 720px',
    [theme.breakpoints.down('sm')]: {
      backgroundSize: '100% 240px'
    }
  },
  decoLine: {
    position: 'absolute',
    left: -20,
    top: 10,
    opacity: 0.56,
    width: '100%',
    height: '100%',
    transform: theme.direction === 'rtl' ? 'scale(-1, 1)' : 'none',
    background: `url(${theme.palette.type === 'dark' ? deco_line_dark_default.a : deco_line_light_default.a}) no-repeat 0 0`,
    backgroundSize: '100% 700px'
  },
  phoneIllustration: {
    position: 'relative',
    height: '100%',
    [theme.breakpoints.down('md')]: {
      right: theme.spacing(-10),
      opacity: theme.palette.type === 'dark' ? 0.4 : 0.8
    },
    [theme.breakpoints.down('sm')]: {
      right: 0,
      top: 200
    },
    [theme.breakpoints.down('xs')]: {
      right: theme.spacing(-20),
      opacity: theme.palette.type === 'dark' ? 0.2 : 0.4
    },
    '& img': {
      position: 'absolute'
    }
  },
  phone: {
    width: 600,
    right: -40,
    bottom: 0
  },
  widgetTop: {
    width: 150,
    bottom: 330,
    left: 130,
    '&[class*="fragment-fadeUp"]': {
      transitionDelay: '0.2s'
    }
  },
  widgetLeft: {
    width: 170,
    bottom: 180,
    left: 110,
    '&[class*="fragment-fadeUp"]': {
      transitionDelay: '0.3s'
    }
  },
  widgetRight: {
    width: 170,
    bottom: 240,
    right: 80,
    '&[class*="fragment-fadeUp"]': {
      transitionDelay: '0.4s'
    }
  },
  hide: {
    visibility: 'hidden'
  }
}));
/* harmony default export */ var banner_style = (bannerStyles);
// CONCATENATED MODULE: ./components/Banner/Banner.js
var __jsx = external_react_default.a.createElement;














function Banner(props) {
  const classes = banner_style();
  const text = useText();
  const {
    t
  } = props;
  const theme = Object(styles_["useTheme"])();
  const isDesktop = useMediaQuery_default()(theme.breakpoints.up('lg'));
  const elem = Object(external_react_["useRef"])(null);
  Object(external_react_["useEffect"])(() => {
    window.renderParticles();
  }, []);
  return __jsx("div", {
    className: classes.root,
    ref: elem
  }, __jsx("div", {
    className: classes.background
  }, __jsx("div", {
    className: classes.gradient
  }, __jsx("div", {
    className: classes.decoWave
  }), __jsx(Hidden_default.a, {
    smDown: true
  }, __jsx("div", {
    className: classes.decoLine
  })), __jsx("div", {
    className: classes.decoInner
  }, __jsx("canvas", {
    id: "particle_art_mobile",
    width: "500px",
    height: "700px"
  })))), __jsx(Container_default.a, {
    fixed: isDesktop
  }, __jsx(Grid_default.a, {
    container: true
  }, __jsx(Grid_default.a, {
    item: true,
    md: 7,
    xs: 12
  }, __jsx("div", {
    className: classes.text
  }, __jsx(Typography_default.a, {
    variant: "h3",
    className: text.title
  }, t('common:mobile-landing.banner_title'), "\xA0", __jsx("strong", null, t('common:mobile-landing.banner_titlestrong'))), __jsx(Typography_default.a, {
    variant: "h5",
    className: text.subtitle
  }, t('common:mobile-landing.banner_desc')), __jsx("div", {
    className: classes.btnArea
  }, __jsx(link_default.a, {
    href: "/"
  }, __jsx("a", null, __jsx("img", {
    src: "/images/mobile/app-store.png",
    alt: "app store"
  }))), __jsx(link_default.a, {
    href: "/"
  }, __jsx("a", null, __jsx("img", {
    src: "/images/mobile/play-store.png",
    alt: "play store"
  })))))), __jsx(Grid_default.a, {
    item: true,
    md: 5,
    xs: 12
  }, __jsx("div", {
    className: classes.decoration
  }, __jsx("div", {
    className: classes.phoneIllustration
  }, __jsx("img", {
    src: images_imgAPI.mobile[0],
    className: classes.phone,
    alt: "illustration"
  }), __jsx(Hidden_default.a, {
    mdDown: true
  }, __jsx("img", {
    src: images_imgAPI.mobile[1],
    className: external_clsx_default()(classes.widgetTop, 'fragment-fadeUp'),
    alt: "illustration"
  }), __jsx("img", {
    src: images_imgAPI.mobile[2],
    className: external_clsx_default()(classes.widgetLeft, 'fragment-fadeUp'),
    alt: "illustration"
  }), __jsx("img", {
    src: images_imgAPI.mobile[3],
    className: external_clsx_default()(classes.widgetRight, 'fragment-fadeUp'),
    alt: "illustration"
  }))))))));
}

/* harmony default export */ var Banner_Banner = (Object(i18n["withTranslation"])(['mobile-landing'])(Banner));
// CONCATENATED MODULE: ./components/Banner/index.js

// EXTERNAL MODULE: external "react-countup"
var external_react_countup_ = __webpack_require__("NHP8");
var external_react_countup_default = /*#__PURE__*/__webpack_require__.n(external_react_countup_);

// EXTERNAL MODULE: external "react-wow"
var external_react_wow_ = __webpack_require__("1lU9");
var external_react_wow_default = /*#__PURE__*/__webpack_require__.n(external_react_wow_);

// CONCATENATED MODULE: ./components/Counter/counter-style.js

const counterStyles = Object(styles_["makeStyles"])(theme => ({
  counterWrap: {
    margin: theme.spacing(10, 0),
    [theme.breakpoints.down('md')]: {
      margin: 0
    }
  },
  text: {},
  counterItem: {
    '& p': {
      color: theme.palette.text.secondary,
      textTransform: 'capitalize',
      [theme.breakpoints.down('xs')]: {
        display: 'flex',
        justifyContent: 'center'
      },
      '& i': {
        color: theme.palette.text.secondary,
        fontSize: 36,
        marginRight: theme.spacing(2),
        lineHeight: '42px',
        [theme.breakpoints.down('xs')]: {
          fontSize: 28,
          lineHeight: '28px'
        }
      }
    },
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    },
    alignItems: 'center',
    justifyContent: 'center',
    '& $text': {
      textAlign: 'center',
      '& h3': {
        position: 'relative',
        color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,
        paddingBottom: theme.spacing(2)
      }
    }
  },
  counterInner: {
    '& > div': {
      position: 'relative',
      '&:after': {
        content: '""',
        height: 60,
        position: 'absolute',
        right: 0,
        top: 30,
        [theme.breakpoints.up('sm')]: {
          borderLeft: `2px solid ${theme.palette.primary.light}`
        }
      }
    },
    '& > div:last-child': {
      '&:after': {
        display: 'none'
      }
    }
  }
}));
/* harmony default export */ var counter_style = (counterStyles);
// CONCATENATED MODULE: ./components/Counter/Counter.js
var Counter_jsx = external_react_default.a.createElement;










function Counter(props) {
  const classes = counter_style();
  const text = useText();
  const {
    t
  } = props;
  const {
    0: play,
    1: setPlay
  } = Object(external_react_["useState"])(false);

  const countup = (val, isPlay) => Counter_jsx("span", null, isPlay ? Counter_jsx(external_react_countup_default.a, {
    end: val
  }) : 0);

  const handlePlay = () => {
    setTimeout(() => {
      setPlay(true);
    }, 200);
  };

  return Counter_jsx("div", {
    className: classes.counterWrap
  }, Counter_jsx(Container_default.a, {
    maxWidth: "md"
  }, Counter_jsx(external_react_wow_default.a, {
    animation: "fadeIn",
    offset: 200,
    callback: handlePlay
  }, Counter_jsx(Grid_default.a, {
    container: true,
    justify: "center",
    alignItems: "center",
    className: classes.counterInner,
    spacing: 6
  }, Counter_jsx(Grid_default.a, {
    sm: 4,
    xs: 6,
    item: true
  }, Counter_jsx("div", {
    className: classes.counterItem
  }, Counter_jsx("div", {
    className: classes.text
  }, Counter_jsx(Typography_default.a, {
    variant: "h3",
    className: text.title
  }, "+", countup(200, play), "M"), Counter_jsx(Typography_default.a, {
    component: "p",
    className: text.subtitle
  }, Counter_jsx("i", {
    className: "ion-ios-cloud-download-outline"
  }), t('common:mobile-landing.counter_downloads'))))), Counter_jsx(Grid_default.a, {
    sm: 4,
    xs: 6,
    item: true
  }, Counter_jsx("div", {
    className: classes.counterItem
  }, Counter_jsx("div", {
    className: classes.text
  }, Counter_jsx(Typography_default.a, {
    variant: "h3",
    className: text.title
  }, "+", countup(480, play), "M"), Counter_jsx(Typography_default.a, {
    component: "p",
    className: text.subtitle
  }, Counter_jsx("i", {
    className: "ion-ios-checkmark-circle-outline"
  }), t('common:mobile-landing.counter_transaction'))))), Counter_jsx(Grid_default.a, {
    sm: 4,
    xs: 6,
    item: true
  }, Counter_jsx("div", {
    className: classes.counterItem
  }, Counter_jsx("div", {
    className: classes.text
  }, Counter_jsx(Typography_default.a, {
    variant: "h3",
    className: text.title
  }, "+", countup(180, play), "M"), Counter_jsx(Typography_default.a, {
    component: "p",
    className: text.subtitle
  }, Counter_jsx("i", {
    className: "ion-ios-star-outline"
  }), t('common:mobile-landing.counter_ratting')))))))));
}

/* harmony default export */ var Counter_Counter = (Object(i18n["withTranslation"])(['mobile-landing'])(Counter));
// CONCATENATED MODULE: ./components/Counter/index.js

// EXTERNAL MODULE: external "@material-ui/core/Paper"
var Paper_ = __webpack_require__("qt1I");
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper_);

// EXTERNAL MODULE: external "react-youtube"
var external_react_youtube_ = __webpack_require__("oLQh");
var external_react_youtube_default = /*#__PURE__*/__webpack_require__.n(external_react_youtube_);

// EXTERNAL MODULE: external "@material-ui/icons/Close"
var Close_ = __webpack_require__("j08L");
var Close_default = /*#__PURE__*/__webpack_require__.n(Close_);

// EXTERNAL MODULE: external "@material-ui/core/Dialog"
var Dialog_ = __webpack_require__("fEgT");
var Dialog_default = /*#__PURE__*/__webpack_require__.n(Dialog_);

// EXTERNAL MODULE: external "@material-ui/core/DialogContent"
var DialogContent_ = __webpack_require__("iTUb");
var DialogContent_default = /*#__PURE__*/__webpack_require__.n(DialogContent_);

// EXTERNAL MODULE: external "@material-ui/core/DialogTitle"
var DialogTitle_ = __webpack_require__("0Jp5");
var DialogTitle_default = /*#__PURE__*/__webpack_require__.n(DialogTitle_);

// EXTERNAL MODULE: external "@material-ui/core/Zoom"
var Zoom_ = __webpack_require__("9E4/");
var Zoom_default = /*#__PURE__*/__webpack_require__.n(Zoom_);

// EXTERNAL MODULE: external "@material-ui/core/IconButton"
var IconButton_ = __webpack_require__("EmCc");
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);

// EXTERNAL MODULE: ./youtube.js
var youtube = __webpack_require__("o507");
var youtube_default = /*#__PURE__*/__webpack_require__.n(youtube);

// EXTERNAL MODULE: external "react-scroll-parallax"
var external_react_scroll_parallax_ = __webpack_require__("K0LP");

// EXTERNAL MODULE: ./components/Parallax/parallax-style.js
var parallax_style = __webpack_require__("Is15");

// CONCATENATED MODULE: ./components/Parallax/Small.js
var Small_jsx = external_react_default.a.createElement;




function ParallaxLarge() {
  const classes = Object(parallax_style["a" /* default */])();
  return Small_jsx("div", {
    className: classes.parallaxWrap
  }, Small_jsx(external_react_scroll_parallax_["ParallaxProvider"], null, Small_jsx("div", {
    className: external_clsx_default()(classes.innerParallax, classes.small)
  }, Small_jsx(external_react_scroll_parallax_["Parallax"], {
    y: [10, 50],
    tagOuter: "figure"
  }, Small_jsx("svg", {
    className: classes.triangle
  }, Small_jsx("use", {
    xlinkHref: "/images/mobile/triangle.svg#main"
  }))), Small_jsx(external_react_scroll_parallax_["Parallax"], {
    y: [0, 60],
    tagOuter: "figure"
  }, Small_jsx("svg", {
    className: classes.circle
  }, Small_jsx("use", {
    xlinkHref: "/images/mobile/circle.svg#main"
  }))), Small_jsx(external_react_scroll_parallax_["Parallax"], {
    y: [-20, 20],
    tagOuter: "figure"
  }, Small_jsx("div", {
    className: classes.squareDot
  }, Small_jsx("svg", {
    className: classes.dotMany
  }, Small_jsx("use", {
    xlinkHref: "/images/mobile/dot-many.svg#main"
  })))))));
}
// CONCATENATED MODULE: ./components/Parallax/Medium.js
var Medium_jsx = external_react_default.a.createElement;




function Medium_ParallaxLarge() {
  const classes = Object(parallax_style["a" /* default */])();
  return Medium_jsx("div", {
    className: classes.parallaxWrap
  }, Medium_jsx(external_react_scroll_parallax_["ParallaxProvider"], null, Medium_jsx("div", {
    className: external_clsx_default()(classes.innerParallax, classes.medium)
  }, Medium_jsx(external_react_scroll_parallax_["Parallax"], {
    y: [10, 50],
    tagOuter: "figure"
  }, Medium_jsx("svg", {
    className: classes.triangle
  }, Medium_jsx("use", {
    xlinkHref: "/images/mobile/triangle.svg#main"
  }))), Medium_jsx(external_react_scroll_parallax_["Parallax"], {
    y: [0, 60],
    tagOuter: "figure"
  }, Medium_jsx("svg", {
    className: classes.circle
  }, Medium_jsx("use", {
    xlinkHref: "/images/mobile/circle.svg#main"
  }))), Medium_jsx(external_react_scroll_parallax_["Parallax"], {
    y: [-20, 20],
    tagOuter: "figure"
  }, Medium_jsx("div", {
    className: classes.squareDot
  }, Medium_jsx("svg", {
    className: classes.dotMany
  }, Medium_jsx("use", {
    xlinkHref: "/images/mobile/dot-many.svg#main"
  })))))));
}
// CONCATENATED MODULE: ./components/Title/title-style.js

const titleStyles = Object(styles_["makeStyles"])(theme => ({
  left: {
    textAlign: 'left'
  },
  right: {
    textAlign: 'right'
  },
  center: {
    textAlign: 'center'
  },
  dark: {},
  title: {
    display: 'block',
    position: 'relative',
    marginBottom: theme.spacing(10),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0, 3)
    },
    '& h3': {
      color: theme.palette.text.primary,
      fontWeight: theme.typography.fontWeightBold,
      fontSize: 46,
      textTransform: 'capitalize',
      [theme.breakpoints.down('md')]: {
        fontSize: 38,
        lineHeight: '50px'
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: 32,
        lineHeight: '42px'
      },
      '& span': {
        color: theme.palette.text.secondary
      }
    },
    '&:after': {
      content: '""',
      width: 70,
      height: 12,
      bottom: -32,
      borderRadius: 12,
      backgroundImage: `linear-gradient(-20deg, ${theme.palette.primary.light}, ${theme.palette.secondary.light})`,
      position: 'absolute'
    },
    '& strong': {
      color: theme.palette.text.primary
    },
    '&$left': {
      '&:after': {
        left: 0
      }
    },
    '&$right': {
      '&:after': {
        right: 0
      }
    },
    '&$center': {
      '&:after': {
        left: '50%',
        marginLeft: -35
      }
    },
    '&$dark': {
      '& h3': {
        color: theme.palette.common.white
      }
    }
  },
  titleSecondary: {
    display: 'block',
    position: 'relative',
    margin: theme.spacing(4, 0),
    [theme.breakpoints.down('sm')]: {
      margin: theme.spacing(0, 0, 4)
    },
    '& h4': {
      color: theme.palette.text.primary,
      fontSize: 32,
      fontWeight: theme.typography.fontWeightMedium,
      [theme.breakpoints.down('xs')]: {
        fontSize: 24,
        lineHeight: '36px'
      }
    },
    '&:after': {
      content: '""',
      width: 17,
      height: 17,
      borderRadius: '50%',
      background: theme.palette.type === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.light,
      position: 'absolute'
    },
    '&$left': {
      paddingLeft: theme.spacing(4),
      '&:after': {
        left: 0,
        top: 8
      }
    },
    '&$right': {
      paddingRight: theme.spacing(4),
      '&:after': {
        right: 0,
        top: 8
      }
    },
    '&$center': {
      marginBottom: theme.spacing(6),
      '&:after': {
        left: '50%',
        marginLeft: -8,
        bottom: -35
      }
    }
  }
}));
/* harmony default export */ var title_style = (titleStyles);
// CONCATENATED MODULE: ./components/Title/TitleSecondary.js
var TitleSecondary_jsx = external_react_default.a.createElement;




function TitleSecondary(props) {
  const classes = title_style();
  const {
    text,
    align
  } = props;

  const setAlign = alignment => {
    switch (alignment) {
      case 'right':
        return classes.right;

      case 'center':
        return classes.center;

      default:
        return classes.left;
    }
  };

  return TitleSecondary_jsx("div", {
    className: external_clsx_default()(classes.titleSecondary, setAlign(align))
  }, TitleSecondary_jsx(Typography_default.a, {
    variant: "h4"
  }, text));
}
TitleSecondary.defaultProps = {
  align: 'left'
};
// CONCATENATED MODULE: ./components/Title/Title.js
var Title_jsx = external_react_default.a.createElement;




function Title(props) {
  const classes = title_style();
  const {
    children,
    align,
    dark
  } = props;

  const setAlign = alignment => {
    switch (alignment) {
      case 'left':
        return classes.left;

      case 'right':
        return classes.right;

      case 'center':
        return classes.center;

      default:
        return classes.left;
    }
  };

  return Title_jsx("div", {
    className: external_clsx_default()(classes.title, setAlign(align), dark && classes.dark)
  }, Title_jsx(Typography_default.a, {
    variant: "h3"
  }, children));
}
Title.defaultProps = {
  align: 'left',
  dark: false
};
// CONCATENATED MODULE: ./components/Title/index.js

// EXTERNAL MODULE: external "@material-ui/core/styles/colorManipulator"
var colorManipulator_ = __webpack_require__("oOPP");

// EXTERNAL MODULE: ./public/images/mobile/deco-light-top.svg
var deco_light_top = __webpack_require__("97zu");
var deco_light_top_default = /*#__PURE__*/__webpack_require__.n(deco_light_top);

// EXTERNAL MODULE: ./public/images/mobile/deco-dark-top.svg
var deco_dark_top = __webpack_require__("8gdN");
var deco_dark_top_default = /*#__PURE__*/__webpack_require__.n(deco_dark_top);

// CONCATENATED MODULE: ./components/Feature/feature-style.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const decoStyle = {
  width: 450,
  height: 450,
  position: 'absolute',
  top: 80,
  right: 40
};
const featureStyles = Object(styles_["makeStyles"])(theme => ({
  root: {},
  decoPrimary: _objectSpread({
    fill: theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
    [theme.breakpoints.down('sm')]: {
      top: 0
    }
  }, decoStyle),
  decoSecondary: _objectSpread({
    fill: theme.palette.type === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.light,
    [theme.breakpoints.down('sm')]: {
      top: 0
    }
  }, decoStyle),
  first: {
    position: 'relative',
    zIndex: 10
  },
  last: {
    position: 'relative',
    zIndex: 30,
    marginBottom: theme.spacing(-70),
    [theme.breakpoints.up('xl')]: {
      marginBottom: theme.spacing(-40)
    }
  },
  decoPrimaryBig: {
    fill: theme.palette.primary.dark,
    width: 500,
    height: 500,
    left: 80,
    top: -40,
    position: 'absolute',
    [theme.breakpoints.down('xs')]: {
      top: -160,
      transform: 'scale(0.5)'
    }
  },
  bgColor: {
    position: 'relative',
    background: theme.palette.type === 'dark' ? Object(colorManipulator_["darken"])(theme.palette.primary.light, 0.65) : Object(colorManipulator_["fade"])(theme.palette.primary.light, 0.2),
    padding: theme.spacing(20, 0),
    marginTop: theme.spacing(-20)
  },
  decoBgTop: {
    background: `url(${theme.palette.type === 'dark' ? deco_dark_top_default.a : deco_light_top_default.a}) no-repeat transparent`,
    backgroundSize: '100% auto',
    position: 'absolute',
    width: '100%',
    height: 470,
    left: 0,
    top: 0,
    '&:after': {
      content: '""',
      background: `url(${theme.palette.type === 'dark' ? deco_dark_top_default.a : deco_light_top_default.a}) no-repeat transparent`,
      backgroundSize: '100% auto',
      position: 'absolute',
      width: '100%',
      height: 470,
      opacity: 0.5,
      left: 20,
      top: 20
    }
  },
  button: {},
  item: {
    position: 'relative',
    paddingBottom: theme.spacing(5),
    '& p': {
      marginBottom: theme.spacing()
    },
    '& > div': {
      [theme.breakpoints.down('xs')]: {
        padding: 0
      }
    }
  },
  text: {
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(12)
    },
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    }
  },
  screen: {
    position: 'relative',
    '& img': {
      display: 'block',
      width: 400,
      margin: '0 auto',
      [theme.breakpoints.down('sm')]: {
        width: 320,
        margin: '0 auto'
      }
    }
  },
  video: {
    overflow: 'hidden',
    fontWeight: theme.typography.fontWeightBold,
    textAlign: 'center',
    width: '100%',
    position: 'relative',
    height: 300,
    [theme.breakpoints.down('xs')]: {
      height: 180
    },
    '& img': {
      position: 'absolute',
      left: 0,
      width: '100%',
      minHeight: '100%'
    },
    '& h6': {
      fontWeight: theme.typography.fontWeightBold,
      textAlign: 'center',
      position: 'relative',
      margin: theme.spacing(8, 0, 4),
      [theme.breakpoints.down('xs')]: {
        margin: theme.spacing(4, 0)
      }
    },
    '& $button': {
      background: theme.palette.primary.main,
      '& i': {
        width: 40,
        height: 40,
        lineHeight: '40px',
        color: theme.palette.common.white,
        transform: 'scale(1.7) translateX(2px)'
      }
    }
  },
  graphic: {
    position: 'absolute',
    '& img': {
      width: '90%',
      display: 'block'
    }
  },
  tabContent: {
    position: 'relative',
    padding: theme.spacing(8, 4)
  },
  tabLabel: {
    fontSize: 18,
    borderBottom: `1px solid ${theme.palette.text.disabled}`
  },
  illustrationLeft: {
    position: 'relative',
    '& $screen': {
      margin: 0,
      [theme.breakpoints.up('md')]: {
        marginTop: -50
      },
      [theme.breakpoints.down('sm')]: {
        marginLeft: theme.spacing(-20)
      },
      [theme.breakpoints.down('xs')]: {
        marginLeft: theme.spacing()
      }
    }
  },
  illustrationRight: {
    position: 'relative',
    '& $screen': {
      [theme.breakpoints.up('md')]: {
        left: 20,
        top: -40
      },
      [theme.breakpoints.down('xs')]: {
        marginLeft: theme.spacing()
      }
    }
  },
  illustrationCenter: {
    position: 'relative',
    marginTop: theme.spacing(10),
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(3)
    }
  },
  videoPopup: {
    width: 690,
    maxWidth: 'none'
  },
  closeBtn: {
    position: 'absolute',
    top: 4,
    right: 4
  }
}));
/* harmony default export */ var feature_style = (featureStyles);
// CONCATENATED MODULE: ./components/Feature/Feature.js
var Feature_jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

























const Feature_Transition = /*#__PURE__*/external_react_default.a.forwardRef(function Transition(props, ref) {
  // eslint-disable-line
  return Feature_jsx(Zoom_default.a, _extends({
    ref: ref
  }, props));
});

function Feature(props) {
  const classes = feature_style();
  const text = useText();
  const {
    t
  } = props;
  const theme = Object(styles_["useTheme"])();
  const isMobile = useMediaQuery_default()(theme.breakpoints.down('sm'));
  const {
    0: player,
    1: setPlayer
  } = Object(external_react_["useState"])([]);
  const {
    0: openPopup,
    1: setOpenPopup
  } = Object(external_react_["useState"])(false);

  const handleClickOpen = () => {
    if (youtube_default.a.use) {
      setOpenPopup(true);
      player[0].playVideo();
    }
  };

  const handleClose = () => {
    setOpenPopup(false);
    player[0].pauseVideo();
  };

  const _onReady = event => {
    player.push(event.target);
    setPlayer(player);
  };

  const opts = {
    height: '360',
    width: '640',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
      controls: 1,
      rel: 0,
      showinfo: 1,
      mute: 0,
      origin: 'http://localhost:3007'
    }
  };
  return Feature_jsx("div", {
    className: classes.root
  }, Feature_jsx(Dialog_default.a, {
    open: openPopup,
    TransitionComponent: Feature_Transition,
    keepMounted: true,
    classes: {
      paper: classes.videoPopup
    },
    onClose: handleClose
  }, Feature_jsx(DialogTitle_default.a, {
    id: "alert-dialog-slide-title"
  }, t('common:mobile-landing.feature_video'), Feature_jsx(IconButton_default.a, {
    onClick: handleClose,
    className: classes.closeBtn
  }, Feature_jsx(Close_default.a, {
    className: classes.icon
  }))), Feature_jsx(DialogContent_default.a, null, youtube_default.a.use && Feature_jsx(external_react_youtube_default.a, {
    videoId: "MltGO66gTbo",
    onReady: _onReady,
    opts: opts
  }))), Feature_jsx(Title, {
    align: "center"
  }, t('common:mobile-landing.feature_title')), Feature_jsx(Container_default.a, {
    fixed: true
  }, Feature_jsx("div", {
    className: external_clsx_default()(classes.item, classes.first)
  }, Feature_jsx(Grid_default.a, {
    container: true,
    direction: isMobile ? 'column-reverse' : 'row'
  }, Feature_jsx(Grid_default.a, {
    item: true,
    md: 6,
    xs: 12
  }, Feature_jsx("div", {
    className: classes.illustrationLeft
  }, Feature_jsx("svg", {
    className: classes.decoPrimary
  }, Feature_jsx("use", {
    xlinkHref: "/images/mobile/deco-feature.svg#main"
  })), Feature_jsx(ParallaxLarge, null), Feature_jsx("figure", {
    className: classes.screen
  }, Feature_jsx("img", {
    src: images_imgAPI.mobile[4],
    alt: "illustration"
  })))), Feature_jsx(Grid_default.a, {
    item: true,
    md: 6,
    xs: 12
  }, Feature_jsx("div", {
    className: classes.text
  }, Feature_jsx(TitleSecondary, {
    align: isMobile ? 'center' : 'left',
    text: t('common:mobile-landing.feature_title1')
  }), Feature_jsx(Typography_default.a, {
    display: "block",
    component: "p",
    className: text.subtitle2
  }, t('common:mobile-landing.feature_desc1'))))))), Feature_jsx("div", {
    className: classes.bgColor
  }, Feature_jsx("div", {
    className: classes.decoBgTop
  }), Feature_jsx(Container_default.a, {
    fixed: true
  }, Feature_jsx("div", {
    className: classes.item
  }, Feature_jsx(Grid_default.a, {
    container: true
  }, Feature_jsx(Grid_default.a, {
    item: true,
    md: 6,
    xs: 12
  }, Feature_jsx("div", {
    className: classes.text
  }, Feature_jsx(TitleSecondary, {
    align: isMobile ? 'center' : 'left',
    text: t('common:mobile-landing.feature_title2')
  }), Feature_jsx(Typography_default.a, {
    display: "block",
    component: "p",
    className: text.subtitle2
  }, t('common:mobile-landing.feature_desc2')))), Feature_jsx(Grid_default.a, {
    item: true,
    md: 6,
    xs: 12
  }, Feature_jsx("div", {
    className: classes.illustrationRight
  }, Feature_jsx("svg", {
    className: classes.decoSecondary
  }, Feature_jsx("use", {
    xlinkHref: "/images/mobile/deco-feature.svg#main"
  })), Feature_jsx(ParallaxLarge, null), Feature_jsx("figure", {
    className: classes.screen
  }, Feature_jsx("img", {
    src: images_imgAPI.mobile[5],
    alt: "screen"
  })))))), Feature_jsx("div", {
    className: external_clsx_default()(classes.item, classes.last)
  }, Feature_jsx(TitleSecondary, {
    align: "center",
    text: t('common:mobile-landing.feature_title3')
  }), Feature_jsx(Typography_default.a, {
    align: "center",
    component: "p",
    className: text.subtitle2
  }, t('common:mobile-landing.feature_desc3')), Feature_jsx(Container_default.a, {
    maxWidth: "sm"
  }, Feature_jsx(Grid_default.a, {
    container: true
  }, Feature_jsx(Grid_default.a, {
    item: true,
    md: 12,
    xs: 12
  }, Feature_jsx("div", {
    className: classes.illustrationCenter
  }, Feature_jsx("svg", {
    className: classes.decoPrimaryBig
  }, Feature_jsx("use", {
    xlinkHref: "/images/mobile/deco-feature.svg#main"
  })), Feature_jsx(Medium_ParallaxLarge, null), Feature_jsx(Paper_default.a, {
    className: classes.video
  }, Feature_jsx("img", {
    src: images_imgAPI.mobile[6],
    alt: "screen"
  }), Feature_jsx(Typography_default.a, {
    variant: "h6"
  }, t('common:mobile-landing.feature_watch')), Feature_jsx(IconButton_default.a, {
    className: classes.button,
    onClick: handleClickOpen
  }, Feature_jsx("i", {
    className: "ion-ios-play-outline"
  })))))))))));
}

/* harmony default export */ var Feature_Feature = (Object(i18n["withTranslation"])(['mobile-landing'])(Feature));
// CONCATENATED MODULE: ./components/Feature/index.js

// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__("O/hg");
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);

// EXTERNAL MODULE: ./components/Parallax/Large.js
var Large = __webpack_require__("GEQ8");

// CONCATENATED MODULE: ./components/Showcase/showcase-style.js


const showcaseStyles = Object(styles_["makeStyles"])(theme => ({
  root: {
    backgroundImage: `linear-gradient(185deg, ${theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.main} 50%, ${theme.palette.type === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.main} 100%)`,
    paddingTop: theme.spacing(80),
    [theme.breakpoints.down('md')]: {
      paddingTop: theme.spacing(70)
    },
    [theme.breakpoints.up('xl')]: {
      paddingTop: theme.spacing(50)
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(60, 3, 0)
    },
    [theme.breakpoints.down(330)]: {
      padding: theme.spacing(60, 0, 0)
    }
  },
  decoTop: {
    fill: theme.palette.type === 'dark' ? Object(colorManipulator_["darken"])(theme.palette.primary.light, 0.65) : Object(colorManipulator_["lighten"])(theme.palette.primary.light, 0.8),
    height: 300,
    width: '100%',
    position: 'absolute',
    top: -3,
    left: 0,
    [theme.breakpoints.up('lg')]: {
      transform: 'scale(1.5, 1)'
    },
    [theme.breakpoints.up('xl')]: {
      display: 'none'
    }
  },
  decoBottom: {
    fill: theme.palette.type === 'dark' ? Object(colorManipulator_["darken"])(theme.palette.primary.light, 0.6) : Object(colorManipulator_["lighten"])(theme.palette.primary.light, 0.8),
    height: 300,
    width: '100%',
    position: 'absolute',
    bottom: -70,
    zIndex: 21,
    [theme.breakpoints.up('lg')]: {
      transform: 'scale(1.5, 1)'
    },
    [theme.breakpoints.up('xl')]: {
      display: 'none'
    },
    [theme.breakpoints.down('sm')]: {
      width: 1280,
      left: '-50%'
    },
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    }
  },
  decoBottomMobile: {
    display: 'none',
    height: 140,
    width: '140%',
    left: '-20%',
    position: 'absolute',
    bottom: -40,
    borderRadius: '50%',
    zIndex: 21,
    background: theme.palette.type === 'dark' ? Object(colorManipulator_["darken"])(theme.palette.primary.light, 0.6) : Object(colorManipulator_["lighten"])(theme.palette.primary.light, 0.8),
    [theme.breakpoints.down('xs')]: {
      display: 'block'
    }
  },
  invertParallax: {
    filter: 'brightness(0) invert(1)',
    position: 'absolute',
    opacity: 0.5,
    left: 0,
    bottom: 600,
    width: '100%',
    height: '100%'
  },
  carouselWrap: {
    position: 'relative',
    zIndex: 20,
    [theme.breakpoints.up('lg')]: {
      paddingTop: theme.spacing(10)
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: theme.spacing(5)
    }
  },
  item: {
    position: 'relative',
    '&:focus': {
      outline: 'none'
    }
  },
  frame: {
    padding: theme.spacing(1),
    margin: '0 auto',
    borderRadius: 20,
    background: theme.palette.common.white,
    '& img': {
      display: 'block',
      width: '100%'
    }
  },
  carouselSide: {
    [theme.breakpoints.up('xl')]: {
      maxWidth: 1440,
      margin: '0 auto'
    },
    [theme.breakpoints.down('xs')]: {
      display: 'none'
    },
    '& $frame': {
      width: 200,
      height: 410,
      [theme.breakpoints.down('md')]: {
        width: 166,
        height: 365
      },
      '& img': {}
    }
  },
  carouselCenter: {
    width: 320,
    overflow: 'hidden',
    [theme.breakpoints.up('sm')]: {
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      bottom: 0
    },
    [theme.breakpoints.up('lg')]: {
      bottom: -60
    },
    [theme.breakpoints.down('xs')]: {
      margin: '0 auto'
    },
    '& $frame': {
      width: 249,
      height: 548,
      position: 'relative',
      [theme.breakpoints.only('sm')]: {
        width: 166,
        height: 365
      },
      [theme.breakpoints.only('md')]: {
        width: 166,
        height: 365
      },
      '& img': {
        transition: 'all 0.3s ease-out',
        transform: 'translateY(30px)'
      }
    },
    '& div[class="slick-list"]': {
      overflow: 'visible'
    },
    '& div[class*="slick-active "]': {
      '& img': {
        transform: 'translate(0)'
      },
      '& $widget': {
        transform: 'scale(1.2)',
        opacity: 1
      }
    }
  },
  widget: {
    position: 'absolute',
    top: 30,
    left: 0,
    transform: 'scale(1)',
    opacity: 0,
    transition: 'all 0.4s ease-out',
    transitionDelay: '0.3s',
    zIndex: 2,
    '& img': {
      width: '100%'
    }
  },
  active: {},
  pagination: {
    zIndex: 220,
    position: 'relative',
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.spacing(-8)
    },
    '& ul': {
      position: 'absolute',
      display: 'block',
      width: '100%',
      padding: 0,
      margin: 0,
      listStyle: 'none',
      textAlign: 'center',
      bottom: theme.spacing(-6),
      '& li': {
        position: 'relative',
        display: 'inline-block',
        width: 15,
        height: 15,
        margin: '0 5px',
        padding: 0,
        background: theme.palette.secondary.main,
        borderRadius: 15,
        transition: 'all 0.5s ease-out',
        '&$active': {
          width: 40
        },
        '&:hover': {
          opacity: 0.5
        },
        '& button': {
          opacity: 0,
          cursor: 'pointer',
          padding: 0,
          width: '100%',
          height: '100%'
        }
      }
    }
  }
}));
/* harmony default export */ var showcase_style = (showcaseStyles);
// CONCATENATED MODULE: ./components/Showcase/Showcase.js
var Showcase_jsx = external_react_default.a.createElement;

function Showcase_extends() { Showcase_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Showcase_extends.apply(this, arguments); }










function Showcase(props) {
  const classes = showcase_style();
  const {
    t
  } = props;
  const sliderSide = Object(external_react_["useRef"])(null);
  const sliderCenter = Object(external_react_["useRef"])(null);
  const {
    0: slider,
    1: setSlider
  } = Object(external_react_["useState"])({
    nav1: null,
    nav2: null
  });
  const {
    0: activeSlide,
    1: setActiveSlide
  } = Object(external_react_["useState"])(0);
  Object(external_react_["useEffect"])(() => {
    setSlider({
      nav1: sliderSide.current,
      nav2: sliderCenter.current
    });
  }, []);
  const settingsCenter = {
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    arrows: false,
    afterChange: current => setActiveSlide(current)
  };
  const settingsSide = {
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false,
    infinite: true,
    speed: 500,
    centerMode: true,
    centerPadding: '10px',
    slidesToShow: 5,
    arrows: false,
    responsive: [{
      breakpoint: 800,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }]
  };

  const handleDotsNav = index => {
    sliderCenter.current.slickGoTo(index);
  };

  return Showcase_jsx("div", {
    className: classes.root
  }, Showcase_jsx("svg", {
    className: classes.decoTop
  }, Showcase_jsx("use", {
    xlinkHref: "/images/mobile/deco-wave-top.svg#main"
  })), Showcase_jsx(Title, {
    dark: true,
    align: "center"
  }, t('common:mobile-landing.showcase_title')), Showcase_jsx("div", {
    className: classes.carouselWrap
  }, Showcase_jsx("div", {
    className: classes.invertParallax
  }, Showcase_jsx(Large["a" /* default */], null)), Showcase_jsx("div", {
    className: classes.carouselSide
  }, Showcase_jsx(external_react_slick_default.a, Showcase_extends({
    ref: sliderSide,
    asNavFor: slider.nav2
  }, settingsSide), Showcase_jsx("div", {
    className: classes.item
  }, Showcase_jsx(Paper_default.a, {
    className: classes.frame
  }, Showcase_jsx("img", {
    src: images_imgAPI.mobile[7],
    alt: "app"
  }))), Showcase_jsx("div", {
    className: classes.item
  }, Showcase_jsx(Paper_default.a, {
    className: classes.frame
  }, Showcase_jsx("img", {
    src: images_imgAPI.mobile[8],
    alt: "app"
  }))), Showcase_jsx("div", {
    className: classes.item
  }, Showcase_jsx(Paper_default.a, {
    className: classes.frame
  }, Showcase_jsx("img", {
    src: images_imgAPI.mobile[9],
    alt: "app"
  }))), Showcase_jsx("div", {
    className: classes.item
  }, Showcase_jsx(Paper_default.a, {
    className: classes.frame
  }, Showcase_jsx("img", {
    src: images_imgAPI.mobile[10],
    alt: "app"
  }))), Showcase_jsx("div", {
    className: classes.item
  }, Showcase_jsx(Paper_default.a, {
    className: classes.frame
  }, Showcase_jsx("img", {
    src: images_imgAPI.mobile[11],
    alt: "app"
  }))), Showcase_jsx("div", {
    className: classes.item
  }, Showcase_jsx(Paper_default.a, {
    className: classes.frame
  }, Showcase_jsx("img", {
    src: images_imgAPI.mobile[12],
    alt: "app"
  }))), Showcase_jsx("div", {
    className: classes.item
  }, Showcase_jsx(Paper_default.a, {
    className: classes.frame
  }, Showcase_jsx("img", {
    src: images_imgAPI.mobile[13],
    alt: "app"
  }))))), Showcase_jsx("div", {
    className: classes.carouselCenter
  }, Showcase_jsx(Paper_default.a, {
    className: classes.frame
  }, Showcase_jsx(external_react_slick_default.a, Showcase_extends({
    ref: sliderCenter,
    asNavFor: slider.nav1
  }, settingsCenter), Showcase_jsx("div", {
    className: classes.item
  }, Showcase_jsx("img", {
    src: images_imgAPI.mobile[7],
    alt: "app"
  }), Showcase_jsx("div", {
    className: classes.widget
  }, Showcase_jsx("img", {
    src: images_imgAPI.mobile[14],
    alt: "app"
  }))), Showcase_jsx("div", {
    className: classes.item
  }, Showcase_jsx("img", {
    src: images_imgAPI.mobile[8],
    alt: "app"
  }), Showcase_jsx("div", {
    className: classes.widget
  }, Showcase_jsx("img", {
    src: images_imgAPI.mobile[15],
    alt: "app"
  }))), Showcase_jsx("div", {
    className: classes.item
  }, Showcase_jsx("img", {
    src: images_imgAPI.mobile[9],
    alt: "app"
  }), Showcase_jsx("div", {
    className: classes.widget
  }, Showcase_jsx("img", {
    src: images_imgAPI.mobile[16],
    alt: "app"
  }))), Showcase_jsx("div", {
    className: classes.item
  }, Showcase_jsx("img", {
    src: images_imgAPI.mobile[10],
    alt: "app"
  }), Showcase_jsx("div", {
    className: classes.widget
  }, Showcase_jsx("img", {
    src: images_imgAPI.mobile[17],
    alt: "app"
  }))), Showcase_jsx("div", {
    className: classes.item
  }, Showcase_jsx("img", {
    src: images_imgAPI.mobile[11],
    alt: "app"
  }), Showcase_jsx("div", {
    className: classes.widget
  }, Showcase_jsx("img", {
    src: images_imgAPI.mobile[18],
    alt: "app"
  }))), Showcase_jsx("div", {
    className: classes.item
  }, Showcase_jsx("img", {
    src: images_imgAPI.mobile[12],
    alt: "app"
  }), Showcase_jsx("div", {
    className: classes.widget
  }, Showcase_jsx("img", {
    src: images_imgAPI.mobile[19],
    alt: "app"
  }))), Showcase_jsx("div", {
    className: classes.item
  }, Showcase_jsx("img", {
    src: images_imgAPI.mobile[13],
    alt: "app"
  }), Showcase_jsx("div", {
    className: classes.widget
  }, Showcase_jsx("img", {
    src: images_imgAPI.mobile[20],
    alt: "app"
  }))))))), Showcase_jsx("svg", {
    className: classes.decoBottom
  }, Showcase_jsx("use", {
    xlinkHref: "/images/mobile/deco-wave-bottom.svg#main"
  })), Showcase_jsx("div", {
    className: classes.decoBottomMobile
  }), Showcase_jsx("div", {
    className: classes.pagination
  }, Showcase_jsx("ul", null, [...Array(7)].map((e, index) => Showcase_jsx("li", {
    key: index.toString(),
    className: index === activeSlide ? classes.active : ''
  }, Showcase_jsx("button", {
    type: "button",
    onClick: () => handleDotsNav(index)
  }))))));
}

/* harmony default export */ var Showcase_Showcase = (Object(i18n["withTranslation"])(['mobile-landing'])(Showcase));
// CONCATENATED MODULE: ./components/Showcase/index.js

// EXTERNAL MODULE: external "@material-ui/core/Avatar"
var Avatar_ = __webpack_require__("4ZJ9");
var Avatar_default = /*#__PURE__*/__webpack_require__.n(Avatar_);

// CONCATENATED MODULE: ./components/Testimonials/testi-style.js




const testiStyles = Object(styles_["makeStyles"])(theme => ({
  root: {
    background: theme.palette.type === 'dark' ? Object(colorManipulator_["darken"])(theme.palette.primary.light, 0.6) : Object(colorManipulator_["lighten"])(theme.palette.primary.light, 0.8),
    minHeight: 400,
    paddingTop: theme.spacing(20)
  },
  carouselWrap: {
    position: 'relative',
    zIndex: 1,
    textAlign: 'center'
  },
  item: {
    '&:focus': {
      outline: 'none'
    }
  },
  content: {
    fontStyle: 'italic',
    fontSize: 18,
    [theme.breakpoints.down('xs')]: {
      fontSize: 16
    }
  },
  name: {
    color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,
    margin: theme.spacing(2, 0, 4),
    '& strong': {
      fontWeight: theme.typography.fontWeightBold
    }
  },
  carouselText: {
    '& $item': {
      position: 'relative'
    }
  },
  carouselAvatar: {
    margin: '0 auto',
    [theme.breakpoints.up('sm')]: {
      width: 768
    },
    '& $item': {
      cursor: 'pointer',
      height: 140,
      paddingTop: theme.spacing(2)
    },
    '& div[class*="slick-center"]': {
      '& $avatar': {
        opacity: 1,
        transform: 'scale(1.4)'
      }
    }
  },
  avatar: {
    border: '4px solid white',
    width: 80,
    height: 80,
    margin: '0 auto',
    opacity: 0.7,
    transition: 'all 0.3s ease'
  },
  decoBgBottom: {
    background: `url(${theme.palette.type === 'dark' ? deco_dark_top_default.a : deco_light_top_default.a}) no-repeat transparent`,
    backgroundSize: '100% auto',
    transform: 'rotate(180deg) scale(1, 0.4)',
    position: 'absolute',
    width: '100%',
    height: 470,
    left: 0,
    bottom: -145,
    '&:after': {
      content: '""',
      background: `url(${theme.palette.type === 'dark' ? deco_dark_top_default.a : deco_light_top_default.a}) no-repeat transparent`,
      backgroundSize: '100% auto',
      position: 'absolute',
      width: '100%',
      height: 470,
      opacity: 0.5,
      left: 60,
      top: 60
    }
  }
}));
/* harmony default export */ var testi_style = (testiStyles);
// CONCATENATED MODULE: ./components/Testimonials/Testimonials.js
var Testimonials_jsx = external_react_default.a.createElement;

function Testimonials_extends() { Testimonials_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return Testimonials_extends.apply(this, arguments); }











const testiContent = [{
  text: 'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam nec ex aliquet, aliquam neque non.',
  avatar: images_imgAPI.avatar[10],
  name: 'John Doe',
  title: 'Chief Digital Officer'
}, {
  text: 'Vestibulum sit amet tortor sit amet libero lobortis semper at et odio. In eu tellus tellus. Pellentesque ullamcorper aliquet ultrices. Aenean facilisis vitae purus facilisis semper. Nam vitae scelerisque lorem, quis tempus libero.',
  avatar: images_imgAPI.avatar[1],
  name: 'Jean Doe',
  title: 'Chief Digital Officer'
}, {
  text: 'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
  avatar: images_imgAPI.avatar[2],
  name: 'Jena Doe',
  title: 'Graphic Designer'
}, {
  text: 'Sed imperdiet enim ligula, vitae viverra justo porta vel.',
  avatar: images_imgAPI.avatar[3],
  name: 'Jovelin Doe',
  title: 'Senior Graphic Designer'
}, {
  text: 'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
  avatar: images_imgAPI.avatar[4],
  name: 'Jihan Doe'
}, {
  text: 'Vestibulum sit amet tortor sit amet libero lobortis semper at et odio. In eu tellus tellus. Pellentesque ullamcorper aliquet ultrices. Aenean facilisis vitae purus facilisis semper. Nam vitae scelerisque lorem, quis tempus libero.',
  avatar: images_imgAPI.avatar[6],
  name: 'Jovelin Doe',
  title: 'Senior Graphic Designer'
}, {
  text: 'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
  avatar: images_imgAPI.avatar[7],
  name: 'John Doe',
  title: 'Senior Graphic Designer'
}, {
  text: 'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam nec ex aliquet, aliquam neque non.',
  avatar: images_imgAPI.avatar[9],
  name: 'John Doe',
  title: 'Chief Digital Officer'
}, {
  text: 'Cras convallis lacus orci, tristique tincidunt magna consequat in. In vel pulvinar est, at euismod libero.',
  avatar: images_imgAPI.avatar[8],
  name: 'Jean Doe',
  title: 'Chief Digital Officer'
}];

function Testimonials(props) {
  const classes = testi_style();
  const {
    t
  } = props;
  const sliderText = Object(external_react_["useRef"])(null);
  const sliderAvatar = Object(external_react_["useRef"])(null);
  const {
    0: slider,
    1: setSlider
  } = Object(external_react_["useState"])({
    nav1: null,
    nav2: null
  });
  Object(external_react_["useEffect"])(() => {
    setSlider({
      nav1: sliderText.current,
      nav2: sliderAvatar.current
    });
  }, []);
  const settingsText = {
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    arrows: false
  };
  const settingsAvatar = {
    dots: false,
    infinite: true,
    speed: 500,
    focusOnSelect: true,
    autoplay: true,
    centerPadding: '2px',
    centerMode: true,
    autoplaySpeed: 5000,
    slidesToShow: 7,
    pauseOnHover: false,
    arrows: false,
    responsive: [{
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }]
  };
  return Testimonials_jsx("div", {
    className: classes.root
  }, Testimonials_jsx(external_react_wow_default.a, {
    animation: "fadeInUpShort",
    offset: -50,
    delay: "0.3s",
    duration: "0.5s"
  }, Testimonials_jsx("div", null, Testimonials_jsx(Title, {
    align: "center"
  }, t('common:mobile-landing.testimonial_title')))), Testimonials_jsx("div", {
    className: classes.carouselWrap
  }, Testimonials_jsx(external_react_wow_default.a, {
    animation: "fadeInUpShort",
    offset: -150,
    delay: "0.4s",
    duration: "0.5s"
  }, Testimonials_jsx("div", null, Testimonials_jsx(Container_default.a, {
    maxWidth: "sm"
  }, Testimonials_jsx("div", {
    className: classes.carouselText
  }, Testimonials_jsx(external_react_slick_default.a, Testimonials_extends({
    ref: sliderText,
    asNavFor: slider.nav2
  }, settingsText), testiContent.map((item, index) => Testimonials_jsx("div", {
    className: classes.item,
    key: index.toString()
  }, Testimonials_jsx(Typography_default.a, {
    className: classes.content
  }, item.text), Testimonials_jsx(Typography_default.a, {
    className: classes.name
  }, Testimonials_jsx("strong", null, item.name), "\xA0-\xA0", item.title)))))), Testimonials_jsx("div", {
    className: classes.carouselAvatar
  }, Testimonials_jsx(external_react_slick_default.a, Testimonials_extends({
    ref: sliderAvatar,
    asNavFor: slider.nav1
  }, settingsAvatar), testiContent.map((item, index) => Testimonials_jsx("div", {
    className: classes.item,
    key: index.toString()
  }, Testimonials_jsx(Avatar_default.a, {
    alt: item.name,
    src: item.avatar,
    className: classes.avatar
  })))))))), Testimonials_jsx("div", {
    className: classes.decoBgBottom
  }));
}

/* harmony default export */ var Testimonials_Testimonials = (Object(i18n["withTranslation"])(['mobile-landing'])(Testimonials));
// CONCATENATED MODULE: ./components/Testimonials/index.js

// EXTERNAL MODULE: external "@material-ui/core/Accordion"
var Accordion_ = __webpack_require__("VuiC");
var Accordion_default = /*#__PURE__*/__webpack_require__.n(Accordion_);

// EXTERNAL MODULE: external "@material-ui/core/AccordionSummary"
var AccordionSummary_ = __webpack_require__("cVsR");
var AccordionSummary_default = /*#__PURE__*/__webpack_require__.n(AccordionSummary_);

// EXTERNAL MODULE: external "@material-ui/core/AccordionDetails"
var AccordionDetails_ = __webpack_require__("Jro0");
var AccordionDetails_default = /*#__PURE__*/__webpack_require__.n(AccordionDetails_);

// EXTERNAL MODULE: external "@material-ui/icons/ExpandMore"
var ExpandMore_ = __webpack_require__("3PpT");
var ExpandMore_default = /*#__PURE__*/__webpack_require__.n(ExpandMore_);

// EXTERNAL MODULE: ./public/images/mobile/faq.png
var faq = __webpack_require__("qYPb");
var faq_default = /*#__PURE__*/__webpack_require__.n(faq);

// CONCATENATED MODULE: ./components/Faq/faq-style.js

const faqStyles = Object(styles_["makeStyles"])(theme => ({
  root: {
    position: 'relative'
  },
  text: {
    position: 'relative',
    zIndex: 20,
    [theme.breakpoints.down('sm')]: {
      textAlign: 'center'
    }
  },
  illustration: {
    position: 'relative',
    margin: theme.spacing(6),
    '& img': {
      position: 'relative',
      display: 'block',
      width: 280
    }
  },
  decoPrimary: {
    fill: theme.palette.type === 'dark' ? theme.palette.secondary.dark : theme.palette.primary.light,
    width: 450,
    height: 450,
    position: 'absolute',
    top: -20,
    left: 0,
    transform: 'scale(0.6)',
    transformOrigin: 'left center'
  },
  accordion: {
    position: 'relative'
  },
  item: {
    marginBottom: theme.spacing(3)
  },
  paper: {
    borderRadius: `${theme.rounded.medium} !important`,
    overflow: 'hidden'
  },
  heading: {
    fontWeight: theme.typography.fontWeightMedium,
    padding: theme.spacing(1, 2, 1, 0),
    fontSize: 18,
    [theme.breakpoints.down('xs')]: {
      fontSize: 16
    }
  },
  content: {
    '& $icon': {
      position: 'absolute',
      top: theme.spacing(2.5),
      right: theme.spacing(2)
    }
  },
  expanded: {
    backgroundImage: `linear-gradient(30deg, ${theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.main}, ${theme.palette.type === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.main})`,
    '& > div': {
      background: 'none'
    },
    '& $heading': {
      color: theme.palette.common.white,
      paddingTop: 0,
      paddingBottom: 0
    },
    '& $icon': {
      color: theme.palette.common.white,
      transform: 'rotate(180deg)'
    }
  },
  detail: {
    background: theme.palette.background.paper,
    paddingTop: theme.spacing(3),
    '& p': {
      fontSize: 18
    }
  },
  icon: {
    color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.main
  }
}));
/* harmony default export */ var faq_style = (faqStyles);
// CONCATENATED MODULE: ./components/Faq/Faq.js
var Faq_jsx = external_react_default.a.createElement;


















const faqData = [{
  q: 'Pellentesque ac bibendum tortor?',
  a: 'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. '
}, {
  q: 'In mi nulla, fringilla vestibulum?',
  a: 'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. '
}, {
  q: 'Quisque lacinia purus ut libero?',
  a: 'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. '
}, {
  q: 'Quisque ut metus sit amet augue?',
  a: 'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. '
}, {
  q: 'Pellentesque ac bibendum tortor?',
  a: 'Vivamus sit amet interdum elit. Proin lacinia erat ac velit tempus auctor. '
}];

function Faq(props) {
  const classes = faq_style();
  const text = useText();
  const {
    0: expanded,
    1: setExpanded
  } = Object(external_react_["useState"])(0);
  const theme = Object(styles_["useTheme"])();
  const isMobile = useMediaQuery_default()(theme.breakpoints.down('sm'));
  const {
    t
  } = props;

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return Faq_jsx("div", {
    className: classes.root
  }, Faq_jsx(Container_default.a, {
    fixed: true
  }, Faq_jsx(Grid_default.a, {
    container: true,
    spacing: 6
  }, Faq_jsx(Grid_default.a, {
    item: true,
    md: 6
  }, Faq_jsx(Title, {
    align: isMobile ? 'center' : 'left'
  }, Faq_jsx("strong", null, "FAQ")), Faq_jsx(Typography_default.a, {
    className: external_clsx_default()(classes.text, text.subtitle2),
    align: isMobile ? 'center' : 'left',
    component: "p"
  }, t('common:saas-landing.faq_subtitle')), Faq_jsx(Hidden_default.a, {
    smDown: true
  }, Faq_jsx("div", {
    className: classes.illustration
  }, Faq_jsx(Medium_ParallaxLarge, null), Faq_jsx("img", {
    src: faq_default.a,
    alt: "illustration"
  })))), Faq_jsx(Grid_default.a, {
    item: true,
    md: 6
  }, Faq_jsx("div", {
    className: classes.accordion
  }, faqData.map((item, index) => Faq_jsx("div", {
    className: classes.item,
    key: index.toString()
  }, Faq_jsx(Accordion_default.a, {
    classes: {
      root: classes.paper
    },
    expanded: expanded === index,
    onChange: handleChange(index)
  }, Faq_jsx(AccordionSummary_default.a, {
    classes: {
      content: classes.content,
      expanded: classes.expanded
    }
  }, Faq_jsx(Typography_default.a, {
    className: classes.heading
  }, item.q), Faq_jsx(ExpandMore_default.a, {
    className: classes.icon
  })), Faq_jsx(AccordionDetails_default.a, {
    classes: {
      root: classes.detail
    }
  }, Faq_jsx(Typography_default.a, null, item.a))))))))));
}

/* harmony default export */ var Faq_Faq = (Object(i18n["withTranslation"])(['saas-landing'])(Faq));
// CONCATENATED MODULE: ./components/Faq/index.js

// CONCATENATED MODULE: ./components/CompanyLogo/logo-style.js

const useStyles = Object(styles_["makeStyles"])(theme => ({
  title: {
    fontWeight: theme.typography.fontWeightBold,
    [theme.breakpoints.down('xs')]: {
      fontSize: 24,
      lineHeight: '36px'
    }
  },
  root: {
    display: 'flex',
    margin: theme.spacing(5, 0, 0),
    justifyContent: 'center',
    position: 'relative',
    overflow: 'auto',
    zIndex: 23,
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'flex-start'
    },
    '& img': {
      height: 64,
      margin: theme.spacing(4),
      filter: 'grayscale(1) contrast(0.5) brightness(1.5)',
      opacity: theme.palette.type === 'dark' ? 0.5 : 1,
      transition: 'all 0.3s ease-out',
      '&:hover': {
        filter: 'none'
      }
    }
  }
}));
/* harmony default export */ var logo_style = (useStyles);
// CONCATENATED MODULE: ./components/CompanyLogo/CompanyLogo.js
var CompanyLogo_jsx = external_react_default.a.createElement;






const logos = ['/images/logos/architect.png', '/images/logos/cloud.png', '/images/logos/coin.png', '/images/logos/mobile.png', '/images/logos/profile.png', '/images/logos/saas.png'];

function CompanyLogo(props) {
  const classes = logo_style();
  const {
    t
  } = props;
  return CompanyLogo_jsx(Container_default.a, {
    fixed: true
  }, CompanyLogo_jsx(Typography_default.a, {
    align: "center",
    variant: "h4",
    className: classes.title
  }, t('common:mobile-landing.company_title')), CompanyLogo_jsx(external_react_wow_default.a, {
    animation: "fadeInUpShort",
    offset: -200,
    delay: "0.3s",
    duration: "0.5s"
  }, CompanyLogo_jsx("div", {
    className: classes.root
  }, logos.map((logo, index) => CompanyLogo_jsx("img", {
    src: logo,
    alt: 'logo' + index.toString(),
    key: index.toString()
  })))));
}

/* harmony default export */ var CompanyLogo_CompanyLogo = (Object(i18n["withTranslation"])(['mobile-landing'])(CompanyLogo));
// CONCATENATED MODULE: ./components/CompanyLogo/index.js

// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__("Wh1t");
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);

// CONCATENATED MODULE: ./components/Cards/cards-style.js

const cardsStyles = Object(styles_["makeStyles"])(theme => ({
  landscape: {
    marginBottom: theme.spacing(5),
    alignItems: 'center',
    flexDirection: 'row',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column'
    },
    '& figure': {
      width: 150,
      height: 150,
      margin: 0,
      [theme.breakpoints.down('xs')]: {
        width: '93%',
        margin: '0 auto',
        height: 180
      },
      '& img': {
        height: '100%',
        [theme.breakpoints.down('xs')]: {
          height: 'auto',
          width: '100%'
        }
      }
    },
    '& $desc': {
      height: 185,
      padding: theme.spacing(3, 1),
      [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(3),
        marginLeft: theme.spacing(-12),
        paddingLeft: theme.spacing(13)
      },
      [theme.breakpoints.down('xs')]: {
        paddingTop: 230,
        marginTop: -200,
        padding: theme.spacing(3, 1)
      }
    }
  },
  potrait: {
    flexDirection: 'column',
    '& figure': {
      height: 250,
      width: '93%',
      margin: '0 auto',
      [theme.breakpoints.down('xs')]: {
        height: 180
      },
      '& img': {
        width: '100%'
      }
    },
    '& $desc': {
      marginTop: -200,
      padding: theme.spacing(3),
      paddingTop: 230,
      [theme.breakpoints.down('xs')]: {
        paddingLeft: theme.spacing(),
        paddingRight: theme.spacing()
      }
    }
  },
  news: {
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      marginBottom: theme.spacing(8)
    },
    '& figure': {
      overflow: 'hidden',
      borderRadius: 15,
      boxShadow: theme.shadows[8],
      zIndex: 1,
      '& img': {
        marginLeft: '50%',
        transform: 'translateX(-50%)'
      }
    },
    '& p': {
      fontSize: 18,
      marginTop: theme.spacing(2),
      fontWeight: theme.typography.fontWeightMedium
    }
  },
  desc: {
    flex: 1
  },
  text: {
    padding: theme.spacing(0, 1.5)
  },
  type: {
    fontWeight: theme.typography.fontWeightBold,
    textTransform: 'uppercase',
    color: theme.palette.text.secondary
  },
  btn: {
    marginTop: theme.spacing(1),
    color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.main,
    textTransform: 'none'
  }
}));
/* harmony default export */ var cards_style = (cardsStyles);
// CONCATENATED MODULE: ./components/Cards/News.js
var News_jsx = external_react_default.a.createElement;






function News(props) {
  const classes = cards_style();
  const {
    caption,
    text,
    img,
    type
  } = props;

  const setOrientation = orientation => {
    if (orientation === 'landscape') {
      return classes.landscape;
    }

    return classes.potrait;
  };

  return News_jsx("div", {
    className: external_clsx_default()(classes.news, setOrientation(type))
  }, News_jsx("figure", null, News_jsx("img", {
    src: img,
    alt: "thumb"
  })), News_jsx(Paper_default.a, {
    className: classes.desc
  }, News_jsx("div", {
    className: classes.text
  }, News_jsx(Typography_default.a, {
    variant: "caption",
    className: classes.type
  }, caption), News_jsx(Typography_default.a, {
    display: "block",
    component: "p"
  }, text)), News_jsx(Button_default.a, {
    size: "small",
    className: classes.btn
  }, "Read more")));
}
// CONCATENATED MODULE: ./components/NewsEvent/news-event-style.js




const newsEventStyle = Object(styles_["makeStyles"])(theme => ({
  root: {
    position: 'relative',
    backgroundImage: `linear-gradient(180deg, ${theme.palette.type === 'dark' ? theme.palette.background.default : theme.palette.background.paper} 40%, ${theme.palette.type === 'dark' ? Object(colorManipulator_["darken"])(theme.palette.primary.light, 0.65) : Object(colorManipulator_["fade"])(theme.palette.primary.light, 0.2)} 40%)`,
    margin: '0 auto',
    paddingBottom: theme.spacing(30),
    marginBottom: theme.spacing(-40)
  },
  decoBgTop: {
    background: `url(${theme.palette.type === 'dark' ? deco_dark_top_default.a : deco_light_top_default.a}) no-repeat transparent`,
    backgroundSize: '100% auto',
    transform: 'scale(1, 0.4)',
    position: 'absolute',
    width: '100%',
    height: 600,
    left: 0,
    top: 220,
    [theme.breakpoints.down('sm')]: {
      top: 400
    }
  },
  parallaxEvent: {
    position: 'absolute',
    top: -320,
    left: 0,
    width: '100%'
  },
  blogWrap: {
    position: 'relative',
    zIndex: 10,
    margin: theme.spacing(10, 0)
  },
  listNews: {
    '& > div': {
      [theme.breakpoints.down('xs')]: {
        paddingTop: '0 !important',
        paddingBottom: '0 !important'
      }
    }
  }
}));
/* harmony default export */ var news_event_style = (newsEventStyle);
// CONCATENATED MODULE: ./components/NewsEvent/NewsEvent.js
var NewsEvent_jsx = external_react_default.a.createElement;














function NewsEvent(props) {
  const classes = news_event_style();
  const text = useText();
  const {
    t
  } = props;
  const theme = Object(styles_["useTheme"])();
  const isMobile = useMediaQuery_default()(theme.breakpoints.down('xs'));
  return NewsEvent_jsx("div", {
    className: classes.root
  }, NewsEvent_jsx("div", {
    className: classes.decoBgTop
  }), NewsEvent_jsx("div", {
    className: classes.parallaxEvent
  }, NewsEvent_jsx(Large["a" /* default */], null)), NewsEvent_jsx(Title, {
    align: "center"
  }, t('common:mobile-landing.news_title')), NewsEvent_jsx(Typography_default.a, {
    align: "center",
    className: text.subtitle2
  }, t('common:mobile-landing.news_desc')), NewsEvent_jsx("div", {
    className: classes.blogWrap
  }, NewsEvent_jsx(Container_default.a, {
    fixed: true
  }, NewsEvent_jsx(Grid_default.a, {
    container: true,
    spacing: 6,
    className: classes.listNews
  }, NewsEvent_jsx(Grid_default.a, {
    item: true,
    md: 6
  }, NewsEvent_jsx(News, {
    type: "potrait",
    img: images_imgAPI.photo[11],
    caption: "headline",
    text: "Sed imperdiet enim ligula, vitae viverra justo."
  })), NewsEvent_jsx(Grid_default.a, {
    item: true,
    md: 6
  }, NewsEvent_jsx(News, {
    type: isMobile ? 'potrait' : 'landscape',
    img: images_imgAPI.photo[1],
    caption: "news",
    text: "Sed imperdiet enim ligula, vitae viverra justo."
  }), NewsEvent_jsx(News, {
    type: "landscape",
    img: images_imgAPI.photo[2],
    caption: "news",
    text: "Sed imperdiet enim ligula, vitae viverra justo."
  }))))));
}

/* harmony default export */ var NewsEvent_NewsEvent = (Object(i18n["withTranslation"])(['mobile-landing'])(NewsEvent));
// CONCATENATED MODULE: ./components/NewsEvent/index.js

// EXTERNAL MODULE: ./components/Footer/Footer.js
var Footer = __webpack_require__("HXcA");

// EXTERNAL MODULE: ./components/Footer/footer-style.js
var footer_style = __webpack_require__("z/Yf");

// CONCATENATED MODULE: ./components/Footer/FooterWithDeco.js
var FooterWithDeco_jsx = external_react_default.a.createElement;








function FooterWithDeco(props) {
  const classes = Object(footer_style["a" /* default */])();
  const text = useText();
  const {
    t,
    toggleDir
  } = props;
  return FooterWithDeco_jsx("div", {
    className: classes.footerDeco
  }, FooterWithDeco_jsx("svg", {
    className: classes.decoTop
  }, FooterWithDeco_jsx("use", {
    xlinkHref: "/images/mobile/deco-wave-top.svg#main"
  })), FooterWithDeco_jsx("div", {
    className: classes.decoration
  }), FooterWithDeco_jsx("div", {
    className: classes.action
  }, FooterWithDeco_jsx(Typography_default.a, {
    variant: "h4",
    className: text.subtitle
  }, t('common:mobile-landing.footer_text')), FooterWithDeco_jsx("div", {
    className: classes.btnArea
  }, FooterWithDeco_jsx(link_default.a, {
    href: "/"
  }, FooterWithDeco_jsx("a", null, FooterWithDeco_jsx("img", {
    src: "/images/mobile/app-store.png",
    alt: "app store"
  }))), FooterWithDeco_jsx(link_default.a, {
    href: "/"
  }, FooterWithDeco_jsx("a", null, FooterWithDeco_jsx("img", {
    src: "/images/mobile/play-store.png",
    alt: "play store"
  }))))), FooterWithDeco_jsx(Footer["a" /* default */], {
    toggleDir: toggleDir
  }));
}

/* harmony default export */ var Footer_FooterWithDeco = (Object(i18n["withTranslation"])(['mobile-landing'])(FooterWithDeco));
// EXTERNAL MODULE: external "react-anchor-link-smooth-scroll"
var external_react_anchor_link_smooth_scroll_ = __webpack_require__("k094");
var external_react_anchor_link_smooth_scroll_default = /*#__PURE__*/__webpack_require__.n(external_react_anchor_link_smooth_scroll_);

// EXTERNAL MODULE: external "react-scrollspy"
var external_react_scrollspy_ = __webpack_require__("+Q8Q");
var external_react_scrollspy_default = /*#__PURE__*/__webpack_require__.n(external_react_scrollspy_);

// EXTERNAL MODULE: external "@material-ui/core/Fab"
var Fab_ = __webpack_require__("ZVwq");
var Fab_default = /*#__PURE__*/__webpack_require__.n(Fab_);

// EXTERNAL MODULE: external "@material-ui/icons/ArrowUpward"
var ArrowUpward_ = __webpack_require__("Ek77");
var ArrowUpward_default = /*#__PURE__*/__webpack_require__.n(ArrowUpward_);

// EXTERNAL MODULE: external "@material-ui/core/Tooltip"
var Tooltip_ = __webpack_require__("vF8F");
var Tooltip_default = /*#__PURE__*/__webpack_require__.n(Tooltip_);

// EXTERNAL MODULE: ./components/Header/menu.js
var menu = __webpack_require__("dlhf");

// CONCATENATED MODULE: ./components/PageNav/pagenav-style.js

const pagenav = Object(styles_["makeStyles"])(theme => ({
  show: {},
  fab: {
    transform: 'scale(0.5)',
    transition: 'all 0.5s ease',
    opacity: 0,
    background: theme.palette.primary.light,
    fontWeight: theme.typography.fontWeightBold,
    '& svg': {
      fill: theme.palette.primary.dark,
      width: 40,
      height: 40
    },
    '&:hover': {
      '& svg': {
        fill: theme.palette.primary.light
      }
    }
  },
  pageNav: {
    zIndex: 200,
    position: 'fixed',
    bottom: 40,
    right: 40,
    '& nav': {
      transition: 'height 0.5s ease',
      transitionDelay: '0.5s',
      height: 0,
      overflow: 'hidden'
    },
    '&$show': {
      '& $fab': {
        opacity: 1,
        transform: 'scale(1)'
      }
    },
    '& ul': {
      margin: '0 0 16px 22px',
      padding: 0,
      position: 'relative'
    },
    '& li': {
      marginBottom: theme.spacing(3),
      listStyle: 'none',
      opacity: 0,
      position: 'relative',
      transition: 'all 0.4s ease',
      '& a': {
        width: 12,
        height: 12,
        boxShadow: theme.shadows[1],
        background: theme.palette.background.paper,
        border: `2px solid ${theme.palette.primary.light}`,
        display: 'block',
        transition: 'all 0.4s ease',
        borderRadius: '50%'
      },
      '&[class="active"] a': {
        background: theme.palette.primary.light,
        border: `2px solid ${theme.palette.primary.dark}`
      }
    },
    '&:hover': {
      '& li': {
        opacity: 1,
        top: '0 !important'
      },
      '& nav': {
        transitionDelay: '0s',
        height: '100%'
      }
    }
  },
  tooltip: {
    textTransform: 'capitalize',
    background: theme.palette.primary.dark,
    fontSize: 14
  }
}));
/* harmony default export */ var pagenav_style = (pagenav);
// CONCATENATED MODULE: ./components/PageNav/PageNav.js
var PageNav_jsx = external_react_default.a.createElement;

function PageNav_extends() { PageNav_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return PageNav_extends.apply(this, arguments); }












function createData(id, name, url) {
  return {
    id,
    name,
    url
  };
}

const PageNav_LinkBtn = /*#__PURE__*/external_react_default.a.forwardRef(function LinkBtn(props, ref) {
  // eslint-disable-line
  return PageNav_jsx(external_react_anchor_link_smooth_scroll_default.a, PageNav_extends({
    to: props.to
  }, props)); // eslint-disable-line
});

function PageNav(props) {
  const {
    t
  } = props;
  const {
    0: show,
    1: setShow
  } = Object(external_react_["useState"])(false);
  let flagShow = false;

  const handleScroll = () => {
    const doc = document.documentElement;
    const scroll = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    const newFlagShow = scroll > 500;

    if (flagShow !== newFlagShow) {
      setShow(newFlagShow);
      flagShow = newFlagShow;
    }
  };

  Object(external_react_["useEffect"])(() => {
    window.addEventListener('scroll', handleScroll);
    console.log();
  }, []);
  const classes = pagenav_style();
  const {
    0: menuList
  } = Object(external_react_["useState"])([createData(1, menu["a" /* default */][0], '#' + menu["a" /* default */][0].replace(/ /g, '_')), createData(2, menu["a" /* default */][1], '#' + menu["a" /* default */][1].replace(/ /g, '_')), createData(3, menu["a" /* default */][2], '#' + menu["a" /* default */][2].replace(/ /g, '_')), createData(4, menu["a" /* default */][3], '#' + menu["a" /* default */][3].replace(/ /g, '_'))]);
  return PageNav_jsx("div", {
    className: external_clsx_default()(classes.pageNav, show && classes.show)
  }, PageNav_jsx("nav", {
    className: classes.sectionNav
  }, PageNav_jsx(external_react_scrollspy_default.a, {
    items: menu["a" /* default */],
    currentClassName: "active"
  }, menuList.map(item => PageNav_jsx("li", {
    key: item.id.toString(),
    style: {
      top: 30 * (menu["a" /* default */].length - item.id)
    },
    "data-id": item.id
  }, PageNav_jsx(Tooltip_default.a, {
    title: t('common:mobile-landing.header_' + item.name),
    placement: "left",
    classes: {
      tooltip: classes.tooltip
    }
  }, PageNav_jsx(external_react_anchor_link_smooth_scroll_default.a, {
    href: item.url
  })))))), PageNav_jsx(Tooltip_default.a, {
    title: "To Top",
    placement: "left",
    classes: {
      tooltip: classes.tooltip
    }
  }, PageNav_jsx(Fab_default.a, {
    color: "primary",
    "aria-label": "To top",
    component: PageNav_LinkBtn,
    href: "#home",
    className: classes.fab
  }, PageNav_jsx(ArrowUpward_default.a, null))));
}

/* harmony default export */ var PageNav_PageNav = (Object(i18n["withTranslation"])(['mobile-landing'])(PageNav));
// CONCATENATED MODULE: ./components/PageNav/index.js

// EXTERNAL MODULE: ./components/Notification/index.js + 2 modules
var Notification = __webpack_require__("AeAN");

// EXTERNAL MODULE: ./public/text/brand.js
var brand = __webpack_require__("zwGQ");
var brand_default = /*#__PURE__*/__webpack_require__.n(brand);

// CONCATENATED MODULE: ./pages/index.js
var pages_jsx = external_react_default.a.createElement;



















const sectionMargin = margin => margin * 20;

const pages_useStyles = Object(styles_["makeStyles"])(theme => ({
  mainWrap: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    background: theme.palette.type === 'dark' ? theme.palette.background.dafault : theme.palette.background.paper
  },
  spaceBottom: {
    marginBottom: sectionMargin(theme.spacing()),
    [theme.breakpoints.down('md')]: {
      marginBottom: sectionMargin(6)
    },
    [theme.breakpoints.down('sm')]: {
      marginBottom: sectionMargin(theme.spacing() / 2)
    }
  },
  spaceTop: {
    marginTop: sectionMargin(theme.spacing()),
    [theme.breakpoints.down('md')]: {
      marginTop: sectionMargin(6)
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: sectionMargin(theme.spacing() / 2)
    }
  },
  spaceBottomShort: {
    marginBottom: sectionMargin(theme.spacing() / 2),
    [theme.breakpoints.down('sm')]: {
      marginBottom: sectionMargin(2)
    }
  },
  spaceTopShort: {
    marginTop: sectionMargin(theme.spacing() / 2),
    [theme.breakpoints.down('sm')]: {
      marginTop: sectionMargin(2)
    }
  },
  containerWrap: {
    marginTop: -40,
    '& > section': {
      position: 'relative'
    }
  }
}));

function Landing(props) {
  const classes = pages_useStyles();
  const {
    onToggleDark,
    onToggleDir
  } = props;
  return pages_jsx(external_react_default.a.Fragment, null, pages_jsx(head_default.a, null, pages_jsx("title", null, brand_default.a.mobile.name, "\xA0 - Home Page")), pages_jsx(CssBaseline_default.a, null), pages_jsx("div", {
    className: classes.mainWrap
  }, pages_jsx(Header["a" /* default */], {
    onToggleDark: onToggleDark,
    onToggleDir: onToggleDir
  }), pages_jsx("main", {
    className: classes.containerWrap
  }, pages_jsx("section", {
    id: "home"
  }, pages_jsx(Banner_Banner, null)), pages_jsx("section", {
    id: "counter"
  }, pages_jsx(Counter_Counter, null)), pages_jsx("section", {
    id: "feature",
    className: classes.spaceTop
  }, pages_jsx(Feature_Feature, null)), pages_jsx("section", {
    id: "showcase"
  }, pages_jsx(Showcase_Showcase, null)), pages_jsx("section", {
    id: "testimonials"
  }, pages_jsx(Testimonials_Testimonials, null)), pages_jsx("section", {
    id: "faq",
    className: classes.spaceTopShort
  }, pages_jsx(Faq_Faq, null)), pages_jsx("section", {
    className: classes.spaceTopShort
  }, pages_jsx(CompanyLogo_CompanyLogo, null)), pages_jsx("section", {
    id: "news",
    className: classes.spaceTopShort
  }, pages_jsx(NewsEvent_NewsEvent, null))), pages_jsx(Footer_FooterWithDeco, {
    toggleDir: onToggleDir
  }), pages_jsx(Hidden_default.a, {
    mdDown: true
  }, pages_jsx(PageNav_PageNav, null)), pages_jsx(Hidden_default.a, {
    mdDown: true
  }, pages_jsx(Notification["a" /* default */], null)), pages_jsx("script", {
    src: "/scripts/particles-spray.js"
  })));
}

Landing.getInitialProps = async () => ({
  namespacesRequired: ['common', 'mobile-landing']
});

/* harmony default export */ var pages = __webpack_exports__["default"] = (Landing);

/***/ }),

/***/ "UVoM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "UhrY":
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "Uynj":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Container");

/***/ }),

/***/ "VnM+":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/flag-logo-b6c0a3b52dae2bf98f199dc6022dc689.png";

/***/ }),

/***/ "VuiC":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Accordion");

/***/ }),

/***/ "W+03":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemText");

/***/ }),

/***/ "Wh1t":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "X24+":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "XfbO":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListSubheader");

/***/ }),

/***/ "XnMA":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Settings");

/***/ }),

/***/ "Y8uC":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Hidden");

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

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "ZVla":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/OutlinedInput");

/***/ }),

/***/ "ZVwq":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Fab");

/***/ }),

/***/ "c25J":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItem");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cPsG":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/useMediaQuery");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("7KCV");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _router = __webpack_require__("elyg");

var _router2 = __webpack_require__("nOHt");

var _useIntersection = __webpack_require__("vNVm");

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (false) {}
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (false) {}

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.asPath || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection.useIntersection)({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  (0, _react.useEffect)(() => {
    const shouldPrefetch = isVisible && p && (0, _router.isLocalURL)(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);
  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router.isLocalURL)(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router.getDomainLocale)(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router.addBasePath)((0, _router.addLocale)(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "cVsR":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AccordionSummary");

/***/ }),

/***/ "dYMV":
/***/ (function(module, exports) {

module.exports = require("clsx");

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

/***/ "dlhf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const menu = ['feature', 'showcase', 'testimonials', 'faq'];
/* harmony default export */ __webpack_exports__["a"] = (menu);

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__("X24+");

var _routeLoader = __webpack_require__("Nh2W");

var _denormalizePagePath = __webpack_require__("wkBG");

var _normalizeLocalePath = __webpack_require__("3wub");

var _mitt = _interopRequireDefault(__webpack_require__("dZ6Y"));

var _utils = __webpack_require__("g/15");

var _isDynamic = __webpack_require__("/jkW");

var _parseRelativeUrl = __webpack_require__("hS4m");

var _querystring = __webpack_require__("3WeD");

var _resolveRewrites = _interopRequireDefault(__webpack_require__("GXs3"));

var _routeMatcher = __webpack_require__("gguc");

var _routeRegex = __webpack_require__("YTqd");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // tslint:disable:no-console


let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {}

  return false;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  let base;

  try {
    base = new URL(currentPath, 'http://n');
  } catch (_) {
    // fallback to / for invalid asPath values e.g. //
    base = new URL('/', 'http://n');
  }

  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href); // Return because it cannot be routed by the Next.js router

  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils.getLocationOrigin)();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router.asPath, url, true);
  const origin = (0, _utils.getLocationOrigin)();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router.asPath, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
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
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader.markAssetError)(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  // In-flight Server Data Requests, for deduping
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sdr = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;
    this.domainLocales = void 0;
    this.isReady = void 0;
    this.isPreview = void 0;
    this.isLocaleDomain = void 0;
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
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
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        initial: true,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic.isDynamicRoute)(_pathname) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || !autoExportDynamic && !self.location.search && !false);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
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


  push(url, as, options = {}) {
    if (false) {}

    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    var _options$scroll;

    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    const shouldResolveHref = url === as || options._h; // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated

    if (options._h) {
      this.isReady = true;
    } // Default to scroll reset behavior unless explicitly specified to be
    // `false`! This makes the behavior between using `Router#push` and a
    // `<Link />` consistent.


    options.scroll = !!((_options$scroll = options.scroll) != null ? _options$scroll : true);
    let localeChange = options.locale !== this.locale;

    if (false) { var _this$locales; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader.getClientBuildManifest)());
    } catch (err) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname;

    if (shouldResolveHref && pathname !== '/_error') {
      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname, pages);

        if (parsed.pathname !== pathname) {
          pathname = parsed.pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);

    if (!isLocalURL(as)) {
      if (false) {}

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (false) {}

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var _self$__NEXT_DATA__$p, _self$__NEXT_DATA__$p2;

      let routeInfo = await this.getRouteInfo(route, pathname, query, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);

            if (pages.includes(parsedHref.pathname)) {
              const {
                url: newUrl,
                as: newAs
              } = prepareUrlAs(this, destination, destination);
              return this.change(method, newUrl, newAs, options);
            }
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (false) {} // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      if (options._h && pathname === '/_error' && ((_self$__NEXT_DATA__$p = self.__NEXT_DATA__.props) == null ? void 0 : (_self$__NEXT_DATA__$p2 = _self$__NEXT_DATA__$p.pageProps) == null ? void 0 : _self$__NEXT_DATA__$p2.statusCode) === 500 && props != null && props.pageProps) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo, forcedScroll || (isValidShallowRoute || !options.scroll ? null : {
        x: 0,
        y: 0
      })).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (false) {}

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader.isAssetError)(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (false) {}

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as,
        locale: this.locale,
        locales: this.locales,
        defaultLocale: this.defaultLocale
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
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
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
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


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname) {
        pathname = parsed.pathname;
        url = (0, _utils.formatWithValidation)(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (false) {}

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

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

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if ( true && !this.isPreview && this.sdc[cacheKey]) {
      return Promise.resolve(this.sdc[cacheKey]);
    }

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err => {
      delete this.sdr[resourceKey];
      throw err;
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

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "fA+V":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Popover");

/***/ }),

/***/ "fEgT":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Dialog");

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

var _formatUrl = __webpack_require__("6D7l");
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

function formatWithValidation(url) {
  if (false) {}

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "g6gc":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/deco-line-dark-1be9cfbb24cbdf9e754999c7d1d5c650.png";

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

/***/ "h1YJ":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ExpansionPanelDetails");

/***/ }),

/***/ "hS4m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__("g/15");

var _querystring = __webpack_require__("3WeD");
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/


function parseRelativeUrl(url, base) {
  const globalBase = new URL(true ? 'http://n' : undefined);
  const resolvedBase = base ? new URL(base, globalBase) : globalBase;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin
  } = new URL(url, resolvedBase);

  if (origin !== globalBase.origin) {
    throw new Error(`invariant: invalid relative URL, router received ${url}`);
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(globalBase.origin.length)
  };
}

/***/ }),

/***/ "iTUb":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/DialogContent");

/***/ }),

/***/ "j08L":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Close");

/***/ }),

/***/ "k094":
/***/ (function(module, exports) {

module.exports = require("react-anchor-link-smooth-scroll");

/***/ }),

/***/ "k7Sn":
/***/ (function(module, exports, __webpack_require__) {

const NextI18Next = __webpack_require__("6f9I").default;

module.exports = new NextI18Next({
  defaultLanguage: 'eng',
  otherLanguages: ['deu', 'ind', 'ara', 'prt', 'zho'],
  fallbackLng: 'eng',
  initImmediate: false,
  localePath: 'public/locales',
  react: {
    useSuspense: false
  },
  localeSubpaths: {
    ara: 'ar',
    deu: 'de',
    eng: 'en',
    ind: 'id',
    prt: 'pt',
    zho: 'zh'
  }
});

/***/ }),

/***/ "lOiU":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Switch");

/***/ }),

/***/ "lj8g":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/InputAdornment");

/***/ }),

/***/ "mz+e":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Slide");

/***/ }),

/***/ "n1EF":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/SnackbarContent");

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

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain'];
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
          console.error(`Error when running the Router event: ${eventField}`);
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
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

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

/***/ "nybW":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Divider");

/***/ }),

/***/ "o507":
/***/ (function(module, exports) {

module.exports = {
  use: true
};

/***/ }),

/***/ "oLQh":
/***/ (function(module, exports) {

module.exports = require("react-youtube");

/***/ }),

/***/ "oOPP":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles/colorManipulator");

/***/ }),

/***/ "pN9Q":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/SwipeableDrawer");

/***/ }),

/***/ "qYPb":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/faq-fb207efda1e8610249917249af14d84a.png";

/***/ }),

/***/ "qt1I":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "sfWN":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/deco-wave-footer-e6260ce7bfb02bfcff02c440d3c890bc.png";

/***/ }),

/***/ "ubCc":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/ListItemSecondaryAction");

/***/ }),

/***/ "vF8F":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Tooltip");

/***/ }),

/***/ "vNVm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.useIntersection = useIntersection;

var _react = __webpack_require__("cDcd");

var _requestIdleCallback = __webpack_require__("0G5g");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react.useRef)();
  const [visible, setVisible] = (0, _react.useState)(false);
  const setRef = (0, _react.useCallback)(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react.useEffect)(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback.requestIdleCallback)(() => setVisible(true));
        return () => (0, _requestIdleCallback.cancelIdleCallback)(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "wkBG":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "x54t":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/MenuItem");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "z/Yf":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9Pu4");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("oOPP");
/* harmony import */ var _material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_images_mobile_deco_wave_footer_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("sfWN");
/* harmony import */ var _public_images_mobile_deco_wave_footer_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_images_mobile_deco_wave_footer_png__WEBPACK_IMPORTED_MODULE_2__);



const footerStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_0__["makeStyles"])(theme => ({
  link: {
    margin: theme.spacing(1, 1.5)
  },
  invert: {},
  decoTop: {
    fill: theme.palette.type === 'dark' ? Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__["darken"])(theme.palette.primary.light, 0.65) : Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__["lighten"])(theme.palette.primary.light, 0.8),
    height: 300,
    width: '100%',
    position: 'absolute',
    top: -10,
    [theme.breakpoints.up('xl')]: {
      display: 'none'
    },
    [theme.breakpoints.up('lg')]: {
      transform: 'scale(1.5, 1)'
    },
    [theme.breakpoints.down('md')]: {
      transform: 'scale(1.2, 0.7)',
      top: -80
    },
    [theme.breakpoints.down('xs')]: {
      transform: 'scale(0.5, 0.5)',
      top: -90,
      left: -330,
      width: 1280
    }
  },
  footer: {
    position: 'relative',
    marginTop: theme.spacing(8),
    paddingBottom: theme.spacing(12),
    [theme.breakpoints.up('xs')]: {
      paddingTop: theme.spacing(3)
    },
    '& $accordionRoot': {
      margin: '0 auto',
      marginTop: theme.spacing(2)
    },
    '& p': {
      color: theme.palette.common.white,
      [theme.breakpoints.down('sm')]: {
        marginBottom: theme.spacing(4)
      }
    },
    '& ul': {
      margin: 0,
      padding: 0
    },
    '& li': {
      listStyle: 'none',
      marginBottom: theme.spacing(),
      '& a': {
        fontSize: 14,
        textDecoration: 'none !important',
        color: theme.palette.common.white,
        '&:hover': {
          color: theme.palette.primary.light
        }
      }
    },
    '&$invert': {
      '& p': {
        color: theme.palette.text.primary
      },
      '& li a': {
        color: theme.palette.text.primary
      },
      '& $logo': {
        '& h6': {
          color: theme.palette.primary.dark
        }
      },
      '& $selectLang': {
        color: theme.palette.text.primary,
        '& svg': {
          color: theme.palette.text.primary
        }
      }
    }
  },
  title: {
    color: theme.palette.common.white,
    fontSize: 14,
    textTransform: 'uppercase',
    marginBottom: theme.spacing(3),
    fontWeight: theme.typography.fontWeightBold
  },
  logo: {
    textAlign: 'center',
    marginBottom: theme.spacing(3),
    '& img': {
      width: 64,
      marginRight: theme.spacing()
    },
    '& h6': {
      color: theme.palette.common.white
    }
  },
  footerDesc: {
    display: 'block',
    fontSize: 14
  },
  socmed: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing(4)
    },
    '& button': {
      margin: theme.spacing(),
      color: theme.palette.primary.dark,
      background: theme.palette.secondary.main,
      width: 36,
      height: 36,
      '& i': {
        color: theme.palette.common.white
      }
    },
    '& i': {
      fontSize: 24
    }
  },
  icon: {},
  selectLang: {
    margin: '0 auto',
    width: 200,
    display: 'inherit',
    marginTop: theme.spacing(2),
    color: theme.palette.common.white,
    '& $icon': {
      top: 21,
      color: theme.palette.primary.light,
      position: 'relative',
      '& + div': {
        background: 'none !important',
        padding: theme.spacing(1.5, 1.5, 1.5, 4),
        width: 'calc(100% - 32px)'
      }
    },
    '& svg': {
      color: theme.palette.primary.light
    },
    '& fieldset': {
      boxShadow: '0 1.5px 12px 2px rgba(0, 0, 0, 0.06)',
      border: `1px solid ${Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__["fade"])(theme.palette.primary.light, 0.5)} !important`,
      '& legend': {
        top: 6,
        position: 'relative',
        borderTop: `1px solid ${Object(_material_ui_core_styles_colorManipulator__WEBPACK_IMPORTED_MODULE_1__["fade"])(theme.palette.primary.light, 0.5)}`
      }
    }
  },
  siteMapItem: {
    [theme.breakpoints.down('md')]: {
      paddingBottom: '0 !important',
      paddingTop: '0 !important'
    }
  },
  accordionRoot: {
    background: 'none',
    boxShadow: 'none',
    color: theme.palette.common.white,
    maxWidth: 480,
    '&$invert': {
      color: theme.palette.text.primary,
      '& svg': {
        fill: theme.palette.text.primary
      }
    },
    '& svg': {
      fill: theme.palette.common.white
    }
  },
  accordionContent: {
    margin: 0
  },
  accordionIcon: {
    padding: 0
  },
  footerDeco: {
    position: 'relative',
    top: 0,
    backgroundImage: `linear-gradient(30deg, ${theme.palette.type === 'dark' ? theme.palette.primary.dark : theme.palette.primary.main} 50%, ${theme.palette.type === 'dark' ? theme.palette.secondary.dark : theme.palette.secondary.main} 140%)`,
    paddingTop: theme.spacing(40),
    marginTop: -360,
    [theme.breakpoints.up('xl')]: {
      paddingTop: theme.spacing(20),
      marginTop: theme.spacing(20)
    },
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(30)
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(10, 3, 0)
    },
    '&:before': {
      zIndex: 1,
      content: '""',
      width: '100%',
      height: 500,
      position: 'absolute',
      top: theme.spacing(10),
      left: 0,
      opacity: 0.1,
      background: `url(${_public_images_mobile_deco_wave_footer_png__WEBPACK_IMPORTED_MODULE_2___default.a}) no-repeat transparent`,
      backgroundSize: '100%'
    }
  },
  decoration: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    overflow: 'hidden',
    clip: 'rect(0, auto, auto, 0)',
    '& svg': {
      fill: theme.palette.secondary.main,
      opacity: 0.15,
      position: 'fixed',
      top: 0
    }
  },
  leftDeco: {
    left: 0,
    width: 1200,
    height: 1500,
    transform: 'scale(0.5)',
    transformOrigin: 'top left'
  },
  rightDeco: {
    right: -450,
    width: 1200,
    height: 1500,
    transform: 'scale(0.5)',
    transformOrigin: 'top right'
  },
  action: {
    textAlign: 'center',
    position: 'relative',
    zIndex: 1,
    paddingTop: theme.spacing(8),
    [theme.breakpoints.down('md')]: {
      paddingTop: 0,
      paddingBottom: theme.spacing(3)
    },
    [theme.breakpoints.down('xs')]: {
      paddingTop: theme.spacing(15),
      paddingBottom: 0
    },
    '& h4': {
      color: theme.palette.common.white,
      marginBottom: theme.spacing(6)
    }
  },
  btnArea: {
    margin: theme.spacing(5, 0),
    justifyContent: 'center',
    position: 'relative',
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'space-around'
    },
    '& a': {
      [theme.breakpoints.up('sm')]: {
        marginRight: theme.spacing(2)
      },
      [theme.breakpoints.down('xs')]: {
        margin: 4
      },
      '& img': {
        width: 160,
        [theme.breakpoints.down('xs')]: {
          width: '100%'
        }
      }
    }
  }
}));
/* harmony default export */ __webpack_exports__["a"] = (footerStyles);

/***/ }),

/***/ "zwGQ":
/***/ (function(module, exports) {

module.exports = {
  mobile: {
    name: 'Mobile Apps',
    desc: 'Luxiren Mobile Apps - React Single Landing Page Template',
    prefix: 'luxiren',
    footerText: 'Luxiren Theme 2021',
    logoText: 'Luxiren Mobile',
    projectName: 'Mobile',
    url: 'luxireact.ux-maestro.com/mobile',
    img: '/static/images/mobile-logo.png',
    notifMsg: 'Donec sit amet nulla sed arcu pulvinar ultricies commodo id ligula.'
  }
};

/***/ })

/******/ });