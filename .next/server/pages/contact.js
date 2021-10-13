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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "3V5T":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/deco-line-light-8757570c14a42fc593834958be391382.png";

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ALdH");


/***/ }),

/***/ "6Av6":
/***/ (function(module, exports) {

module.exports = require("@material-ui/icons/Send");

/***/ }),

/***/ "6f9I":
/***/ (function(module, exports) {

module.exports = require("next-i18next");

/***/ }),

/***/ "7s44":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/FormControlLabel");

/***/ }),

/***/ "9Pu4":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),

/***/ "ALdH":
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

// EXTERNAL MODULE: ./public/text/brand.js
var brand = __webpack_require__("zwGQ");
var brand_default = /*#__PURE__*/__webpack_require__.n(brand);

// EXTERNAL MODULE: external "@material-ui/core/Hidden"
var Hidden_ = __webpack_require__("Y8uC");
var Hidden_default = /*#__PURE__*/__webpack_require__.n(Hidden_);

// EXTERNAL MODULE: external "@material-ui/core/Button"
var Button_ = __webpack_require__("Wh1t");
var Button_default = /*#__PURE__*/__webpack_require__.n(Button_);

// EXTERNAL MODULE: external "clsx"
var external_clsx_ = __webpack_require__("dYMV");
var external_clsx_default = /*#__PURE__*/__webpack_require__.n(external_clsx_);

// EXTERNAL MODULE: external "@material-ui/core/IconButton"
var IconButton_ = __webpack_require__("EmCc");
var IconButton_default = /*#__PURE__*/__webpack_require__.n(IconButton_);

// EXTERNAL MODULE: external "@material-ui/core/FormControlLabel"
var FormControlLabel_ = __webpack_require__("7s44");
var FormControlLabel_default = /*#__PURE__*/__webpack_require__.n(FormControlLabel_);

// EXTERNAL MODULE: external "@material-ui/core/Paper"
var Paper_ = __webpack_require__("qt1I");
var Paper_default = /*#__PURE__*/__webpack_require__.n(Paper_);

// EXTERNAL MODULE: external "@material-ui/core/Container"
var Container_ = __webpack_require__("Uynj");
var Container_default = /*#__PURE__*/__webpack_require__.n(Container_);

// EXTERNAL MODULE: external "@material-ui/icons/Send"
var Send_ = __webpack_require__("6Av6");
var Send_default = /*#__PURE__*/__webpack_require__.n(Send_);

// EXTERNAL MODULE: external "@material-ui/core/Grid"
var Grid_ = __webpack_require__("JQ2V");
var Grid_default = /*#__PURE__*/__webpack_require__.n(Grid_);

// EXTERNAL MODULE: external "@material-ui/core/Typography"
var Typography_ = __webpack_require__("UVoM");
var Typography_default = /*#__PURE__*/__webpack_require__.n(Typography_);

// EXTERNAL MODULE: external "@material-ui/core/Snackbar"
var Snackbar_ = __webpack_require__("D4mc");
var Snackbar_default = /*#__PURE__*/__webpack_require__.n(Snackbar_);

// EXTERNAL MODULE: external "react-material-ui-form-validator"
var external_react_material_ui_form_validator_ = __webpack_require__("i+P/");

// EXTERNAL MODULE: ./i18n.js
var i18n = __webpack_require__("k7Sn");

// EXTERNAL MODULE: ./public/images/mobile-logo.svg
var mobile_logo = __webpack_require__("LiqL");
var mobile_logo_default = /*#__PURE__*/__webpack_require__.n(mobile_logo);

// EXTERNAL MODULE: ./public/text/link.js
var text_link = __webpack_require__("H6h4");

// EXTERNAL MODULE: external "@material-ui/core/colors/red"
var red_ = __webpack_require__("RpH3");
var red_default = /*#__PURE__*/__webpack_require__.n(red_);

// EXTERNAL MODULE: external "@material-ui/core/styles"
var styles_ = __webpack_require__("9Pu4");

// EXTERNAL MODULE: external "@material-ui/core/Checkbox"
var Checkbox_ = __webpack_require__("r6Lb");
var Checkbox_default = /*#__PURE__*/__webpack_require__.n(Checkbox_);

// CONCATENATED MODULE: ./components/Forms/Checkbox.js
var __jsx = external_react_default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






const red300 = red_default.a['500'];

const styles = theme => ({
  checkbox: {
    left: 42,
    fontSize: 12,
    color: red300,
    position: 'absolute',
    marginTop: theme.spacing()
  }
});

class Checkbox_CheckboxValidatorElement extends external_react_material_ui_form_validator_["ValidatorComponent"] {
  errorText() {
    const {
      isValid
    } = this.state;
    const {
      classes
    } = this.props;

    if (isValid) {
      return null;
    }

    return __jsx("div", {
      className: classes.checkbox
    }, this.getErrorMessage());
  }

  render() {
    const _this$props = this.props,
          {
      errorMessages,
      validators,
      requiredError,
      value,
      checked,
      validatorListener,
      classes
    } = _this$props,
          rest = _objectWithoutProperties(_this$props, ["errorMessages", "validators", "requiredError", "value", "checked", "validatorListener", "classes"]);

    return __jsx("div", null, __jsx(Checkbox_default.a, _extends({
      value: value,
      checked: checked
    }, rest, {
      ref: r => {
        this.input = r;
      }
    })), this.errorText());
  }

}

/* harmony default export */ var Checkbox = (Object(styles_["withStyles"])(styles)(Checkbox_CheckboxValidatorElement));
// EXTERNAL MODULE: ./components/Parallax/Large.js
var Large = __webpack_require__("GEQ8");

// EXTERNAL MODULE: external "@material-ui/core/styles/colorManipulator"
var colorManipulator_ = __webpack_require__("oOPP");

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

// CONCATENATED MODULE: ./components/Forms/form-style.js






const contactStyles = Object(styles_["makeStyles"])(theme => ({
  title: {},
  pageWrap: {
    position: 'relative',
    textAlign: 'center',
    height: '100%',
    overflow: 'hidden',
    background: theme.palette.type === 'dark' ? theme.palette.background.dafault : theme.palette.background.paper,
    padding: theme.spacing(10, 5),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(5, 1)
    },
    '& $title': {
      color: theme.palette.type === 'dark' ? theme.palette.primary.light : theme.palette.primary.dark,
      fontWeight: theme.typography.fontWeightBold,
      [theme.breakpoints.down('sm')]: {
        fontSize: 32
      }
    },
    '& a': {
      color: theme.palette.primary.main,
      textTransform: 'none',
      fontSize: 16,
      textDecoration: 'none',
      fontWeight: theme.typography.fontWeightRegular
    }
  },
  background: {
    position: 'absolute',
    height: 700,
    top: -30,
    right: -200,
    transform: theme.direction === 'rtl' ? 'scale(-1, 1)' : 'none',
    width: '50%',
    '& img': {
      position: 'absolute',
      right: theme.direction === 'rtl' ? 'auto' : 200,
      left: theme.direction === 'rtl' ? 200 : 'auto',
      top: 0
    }
  },
  decoInner: {
    position: 'absolute',
    top: 0,
    right: 0,
    opacity: 0.2,
    transform: theme.direction === 'rtl' ? 'scale(-1, 1)' : 'none'
  },
  gradient: {
    backgroundImage: `linear-gradient(30deg, ${theme.palette.primary.main} 50%, ${theme.palette.secondary.main} 140%)`,
    width: '100%',
    height: '100%',
    transform: theme.direction === 'rtl' ? 'scale(-1, 1)' : 'none',
    '& img': {
      display: 'block'
    }
  },
  decoWave: {
    position: 'absolute',
    top: 0,
    left: -1,
    width: '102%',
    height: '100%',
    transform: theme.direction === 'rtl' ? 'scale(-1, 1)' : 'none',
    background: `url(${theme.palette.type === 'dark' ? deco_wave_dark_default.a : deco_wave_light_default.a}) no-repeat 0 0`,
    backgroundSize: '100% 720px'
  },
  decoLine: {
    position: 'absolute',
    left: -12,
    top: -40,
    opacity: 0.56,
    width: '100%',
    height: '100%',
    transform: theme.direction === 'rtl' ? 'scale(-1, 1)' : 'none',
    background: `url(${theme.palette.type === 'dark' ? deco_line_dark_default.a : deco_line_light_default.a}) no-repeat 0 0`,
    backgroundSize: '100% 700px'
  },
  parallax: {
    overflow: 'hidden',
    height: '100%',
    position: 'absolute',
    width: '100%',
    top: 0,
    left: 0
  },
  innerWrap: {
    textAlign: 'left'
  },
  fullFromWrap: {
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(9, 0)
    }
  },
  formBox: {
    borderRadius: 40,
    overflow: 'hidden',
    background: 'transparent',
    boxShadow: '0 1.5px 12px 2px rgba(0, 0, 0, 0.28)',
    [theme.breakpoints.down('xs')]: {
      boxShadow: 'none'
    }
  },
  desc: {
    fontSize: 20,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    padding: theme.spacing(0, 15),
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2, 1),
      fontSize: 16
    }
  },
  input: {
    width: '100%',
    '& label': {
      left: theme.spacing(0.5)
    },
    '& > div': {
      border: `1px solid ${Object(colorManipulator_["fade"])(theme.palette.text.primary, 0.25)}`,
      background: theme.palette.type === 'dark' ? 'rgba(255, 255, 255, 0.09)' : 'none !important',
      overflow: 'hidden',
      '& input, textarea': {
        paddingLeft: theme.spacing(2),
        background: Object(colorManipulator_["fade"])(theme.palette.background.paper, 0.7),
        '&:focus': {
          background: Object(colorManipulator_["fade"])(theme.palette.background.paper, 0.9)
        },
        '&:hover': {
          background: Object(colorManipulator_["fade"])(theme.palette.background.paper, 0.13)
        }
      },
      '&:hover': {
        '& textarea': {
          background: 'none !important'
        }
      }
    }
  },
  form: {
    textAlign: 'left',
    position: 'relative',
    padding: theme.spacing(0, 15, 10),
    marginTop: theme.spacing(8),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0, 4, 10)
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2, 1),
      marginTop: theme.spacing(2)
    }
  },
  formHelper: {
    display: 'flex',
    marginTop: theme.spacing(),
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },
  btnArea: {
    marginTop: theme.spacing(5),
    justifyContent: 'space-between',
    '& label': {
      position: 'relative'
    },
    '& button': {
      minWidth: 240
    },
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    },
    [theme.breakpoints.down('sm')]: {
      '& button': {
        marginTop: theme.spacing(4),
        width: '100%',
        height: 56
      }
    },
    '& span': {
      '& a': {
        textDecoration: 'none !important',
        color: theme.palette.secondary.main
      }
    }
  },
  primary: {
    background: theme.palette.primary.main,
    position: 'absolute',
    opacity: 0.08,
    transform: 'rotate(45deg)'
  },
  secondary: {
    background: theme.palette.secondary.main,
    position: 'absolute',
    opacity: 0.1,
    transform: 'rotate(45deg)'
  },
  rightIcon: {
    marginLeft: theme.spacing()
  },
  backtohome: {
    width: 80,
    height: 80,
    position: 'absolute',
    marginTop: 20,
    marginLeft: 20,
    zIndex: 20,
    [theme.breakpoints.up('md')]: {
      marginTop: 20,
      marginLeft: 20
    },
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    },
    '& i': {
      fontSize: 32,
      color: theme.palette.text.disabled
    },
    '& > span i:first-child': {
      opacity: 1,
      transition: 'opacity 0.3s ease'
    },
    '& > span i:last-child': {
      position: 'absolute',
      right: 0,
      opacity: 0,
      transition: 'all 0.3s ease'
    },
    '&:hover': {
      '& > span i:first-child': {
        opacity: 0
      },
      '& > span i:last-child': {
        right: 30,
        opacity: 1
      }
    }
  },
  check: {
    '& svg': {
      fill: theme.palette.secondary.main
    }
  },
  logoHeader: {},
  logo: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(5),
    '&$logoHeader': {
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
      zIndex: 10
    },
    '& img': {
      width: 64
    },
    '& p, span': {
      display: 'block',
      fontSize: 24,
      paddingBottom: 4,
      fontWeight: theme.typography.fontWeightBold
    }
  },
  head: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    '& a': {
      marginTop: theme.spacing(2)
    }
  },
  formWrap: {
    background: theme.palette.background.paper,
    position: 'relative',
    padding: theme.spacing(6)
  }
}));
/* harmony default export */ var form_style = (contactStyles);
// CONCATENATED MODULE: ./components/Forms/Contact.js
var Contact_jsx = external_react_default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






















function Contact(props) {
  const classes = form_style();
  const {
    t
  } = props;
  const {
    0: values,
    1: setValues
  } = Object(external_react_["useState"])({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  Object(external_react_["useEffect"])(() => {
    external_react_material_ui_form_validator_["ValidatorForm"].addValidationRule('isTruthy', value => value);
  });
  const {
    0: openNotif,
    1: setNotif
  } = Object(external_react_["useState"])(false);
  const {
    0: check,
    1: setCheck
  } = Object(external_react_["useState"])(false);

  const handleChange = name => event => {
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      [name]: event.target.value
    }));
  };

  const handleCheck = event => {
    setCheck(event.target.checked);
  };

  const handleSubmit = () => {
    setNotif(true);
  };

  const handleClose = () => {
    setNotif(false);
  };

  return Contact_jsx("div", {
    className: classes.pageWrap
  }, Contact_jsx(Hidden_default.a, {
    smDown: true
  }, Contact_jsx("div", {
    className: classes.background
  }, Contact_jsx("div", {
    className: classes.gradient
  }, Contact_jsx("div", {
    className: classes.decoWave
  }), Contact_jsx("div", {
    className: classes.decoLine
  }), Contact_jsx("div", {
    className: classes.decoInner
  }, Contact_jsx("img", {
    src: "/images/mobile/animation-banner.png",
    alt: "decoration"
  }))))), Contact_jsx("div", {
    className: classes.parallax
  }, Contact_jsx(Large["a" /* default */], null)), Contact_jsx(Snackbar_default.a, {
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    key: "top right",
    open: openNotif,
    autoHideDuration: 4000,
    onClose: handleClose,
    ContentProps: {
      'aria-describedby': 'message-id'
    },
    message: Contact_jsx("span", {
      id: "message-id"
    }, "Message Sent")
  }), Contact_jsx(Hidden_default.a, {
    mdUp: true
  }, Contact_jsx("div", {
    className: external_clsx_default()(classes.logo, classes.logoHeader)
  }, Contact_jsx("a", {
    href: text_link["a" /* default */].mobile.home
  }, Contact_jsx("img", {
    src: mobile_logo_default.a,
    alt: "logo"
  }), Contact_jsx(Typography_default.a, {
    component: "span"
  }, brand_default.a.mobile.projectName)))), Contact_jsx(Container_default.a, {
    maxWidth: "md",
    className: classes.innerWrap
  }, Contact_jsx(IconButton_default.a, {
    href: text_link["a" /* default */].mobile.home,
    className: classes.backtohome
  }, Contact_jsx("i", {
    className: "ion-ios-home-outline"
  }), Contact_jsx("i", {
    className: "ion-ios-arrow-round-back"
  })), Contact_jsx(Paper_default.a, {
    className: external_clsx_default()(classes.formBox, 'fragment-fadeUp')
  }, Contact_jsx("div", {
    className: classes.fullFromWrap
  }, Contact_jsx(Typography_default.a, {
    variant: "h3",
    align: "center",
    className: classes.title,
    gutterBottom: true
  }, t('common:contact_title')), Contact_jsx(Typography_default.a, {
    className: classes.desc
  }, t('common:contact_subtitle')), Contact_jsx("div", {
    className: classes.form
  }, Contact_jsx(external_react_material_ui_form_validator_["ValidatorForm"], {
    onSubmit: handleSubmit,
    onError: errors => console.log(errors)
  }, Contact_jsx(Grid_default.a, {
    container: true,
    spacing: 4
  }, Contact_jsx(Grid_default.a, {
    item: true,
    md: 6,
    xs: 12
  }, Contact_jsx(external_react_material_ui_form_validator_["TextValidator"], {
    variant: "filled",
    className: classes.input,
    label: t('common:form_name'),
    onChange: handleChange('name'),
    name: "Name",
    value: values.name,
    validators: ['required'],
    errorMessages: ['This field is required']
  })), Contact_jsx(Grid_default.a, {
    item: true,
    md: 6,
    xs: 12
  }, Contact_jsx(external_react_material_ui_form_validator_["TextValidator"], {
    variant: "filled",
    className: classes.input,
    label: t('common:form_email'),
    onChange: handleChange('email'),
    name: "Email",
    value: values.email,
    validators: ['required', 'isEmail'],
    errorMessages: ['This field is required', 'email is not valid']
  })), Contact_jsx(Grid_default.a, {
    item: true,
    md: 6,
    xs: 12
  }, Contact_jsx(external_react_material_ui_form_validator_["TextValidator"], {
    variant: "filled",
    className: classes.input,
    label: t('common:form_phone'),
    onChange: handleChange('phone'),
    name: "Phone",
    value: values.phone
  })), Contact_jsx(Grid_default.a, {
    item: true,
    md: 6,
    xs: 12
  }, Contact_jsx(external_react_material_ui_form_validator_["TextValidator"], {
    variant: "filled",
    className: classes.input,
    label: t('common:form_company'),
    onChange: handleChange('company'),
    name: "Company",
    value: values.company
  })), Contact_jsx(Grid_default.a, {
    item: true,
    md: 12,
    xs: 12
  }, Contact_jsx(external_react_material_ui_form_validator_["TextValidator"], {
    variant: "filled",
    multiline: true,
    rows: "6",
    className: classes.input,
    label: t('common:form_message'),
    onChange: handleChange('message'),
    name: "Message",
    value: values.message
  }))), Contact_jsx("div", {
    className: classes.btnArea
  }, Contact_jsx(FormControlLabel_default.a, {
    control: Contact_jsx(Checkbox, {
      validators: ['isTruthy'],
      errorMessages: "This field is required",
      checked: check,
      value: check,
      onChange: e => handleCheck(e),
      color: "primary"
    }),
    label: Contact_jsx("span", null, t('common:form_terms'), Contact_jsx("br", null), Contact_jsx("a", {
      href: "#"
    }, t('common:form_privacy')))
  }), Contact_jsx(Button_default.a, {
    variant: "contained",
    type: "submit",
    color: "secondary",
    size: "large"
  }, t('common:form_send'), Contact_jsx(Send_default.a, {
    className: classes.rightIcon
  })))))))));
}

/* harmony default export */ var Forms_Contact = (Object(i18n["withTranslation"])(['common'])(Contact));
// CONCATENATED MODULE: ./pages/contact.js
var contact_jsx = external_react_default.a.createElement;





function contact_Contact() {
  return contact_jsx(external_react_["Fragment"], null, contact_jsx(head_default.a, null, contact_jsx("title", null, brand_default.a.mobile.name, "\xA0 - Contact")), contact_jsx("div", null, contact_jsx(Forms_Contact, null)));
}

contact_Contact.getInitialProps = async () => ({
  namespacesRequired: ['common']
});

/* harmony default export */ var contact = __webpack_exports__["default"] = (contact_Contact);

/***/ }),

/***/ "D4mc":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Snackbar");

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

/***/ "K0LP":
/***/ (function(module, exports) {

module.exports = require("react-scroll-parallax");

/***/ }),

/***/ "LiqL":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6dXJsKCNTVkdJRF8xXyk7fQoJLnN0MXtmaWxsOiM2NzNBQjc7c3Ryb2tlOiNGRkZGRkY7c3Ryb2tlLXdpZHRoOjIwO3N0cm9rZS1taXRlcmxpbWl0OjEwO30KPC9zdHlsZT4KPGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8xXyIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiIHgxPSIxNi43ODM4IiB5MT0iMjU2IiB4Mj0iNDk1LjIxNjIiIHkyPSIyNTYiPgoJPHN0b3AgIG9mZnNldD0iMC4xODQ2IiBzdHlsZT0ic3RvcC1jb2xvcjojNjczQUI3Ii8+Cgk8c3RvcCAgb2Zmc2V0PSIwLjkyNTIiIHN0eWxlPSJzdG9wLWNvbG9yOiM4RDYzRUEiLz4KPC9saW5lYXJHcmFkaWVudD4KPHBhdGggY2xhc3M9InN0MCIgZD0iTTQwNSw0MDQuM0MzMDguOSw0NzEuNCwxNDAsNTMwLjksNzMuMyw0NzYuOUMtMTcuOCw0MDMuMiwxNSwzMDIuNSw3NSwxMzcuNWM0NC42LTEyMi45LDczLTE4MC4zLDMwMC43LTQ2LjYKCUM1MzQuOSwxODQuMiw1MjUuMSwzMjAuNSw0MDUsNDA0LjN6Ii8+CjxnPgoJPHBhdGggY2xhc3M9InN0MSIgZD0iTTEzNy44LDMzMC40VjE3OC45aDE4Ljl2MTM0LjdoNzAuNHYxNi44SDEzNy44eiIvPgoJPHBhdGggY2xhc3M9InN0MSIgZD0iTTI2Ni44LDI4Mi4ydi03Ni44aDE3Ljl2NzUuNmMwLDIyLjMsMTIuNSwzNi4zLDM1LjcsMzYuM2MyMy4yLDAsMzUuOS0xNC4xLDM1LjktMzYuM3YtNzUuNmgxNy45djc2LjgKCQljMCwzMC45LTE4LjIsNTAuOS01My44LDUwLjlDMjg0LjcsMzMzLjEsMjY2LjgsMzEyLjksMjY2LjgsMjgyLjJ6Ii8+CjwvZz4KPC9zdmc+Cg=="

/***/ }),

/***/ "RpH3":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/colors/red");

/***/ }),

/***/ "UVoM":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),

/***/ "Uynj":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Container");

/***/ }),

/***/ "Wh1t":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ }),

/***/ "Y8uC":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Hidden");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "dYMV":
/***/ (function(module, exports) {

module.exports = require("clsx");

/***/ }),

/***/ "g6gc":
/***/ (function(module, exports) {

module.exports = "/_next/static/images/deco-line-dark-1be9cfbb24cbdf9e754999c7d1d5c650.png";

/***/ }),

/***/ "i+P/":
/***/ (function(module, exports) {

module.exports = require("react-material-ui-form-validator");

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

/***/ "oOPP":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles/colorManipulator");

/***/ }),

/***/ "qt1I":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Paper");

/***/ }),

/***/ "r6Lb":
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Checkbox");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

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