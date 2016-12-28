(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react-singleton"), require("react-tap-event"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react-singleton", "react-tap-event"], factory);
	else if(typeof exports === 'object')
		exports["react-alert"] = factory(require("react"), require("react-singleton"), require("react-tap-event"));
	else
		root["react-alert"] = factory(root["react"], root["react-singleton"], root["react-tap-event"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.SingleAlert = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactSingleton = __webpack_require__(2);

	var _reactSingleton2 = _interopRequireDefault(_reactSingleton);

	__webpack_require__(3);

	__webpack_require__(4);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**********************************************************************************************
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  This component is designed for Tribe Project in QQ mobile as a Alert to simulate system tips
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  You can use it as a independent Alert component in your App
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  @ examples  you can find examples in README.md
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  @ param(string)       title: The brief description of purpose
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  @ param(string/JSX)   content: The detail statement of purpose
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  @ param(string)       confirmText: The text in CONFIRM button
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  @ param(string)       cancelText: The text in CANCEL button
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  @ param(bool)         confirmAtRight: The CONFIRM is at the right of CANCEL button or not
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  @ param(bool)         useTap: Use Tap event as default, not Click
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  @ param(function)     callback: Events called after CONFIRM button is clicked
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  @ param(function)     cancelCallback: Events called after CANCEL button is clicked
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  @ param(function)     close: Use container's method to close the Alert
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *  Copyright by nemoliao( liaozksysu@gmail.com), nemo is a member of AlloyTeam in Tencent.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                **********************************************************************************************/

	var Button = function (_Component) {
	    _inherits(Button, _Component);

	    function Button() {
	        _classCallCheck(this, Button);

	        return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
	    }

	    _createClass(Button, [{
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                children = _props.children,
	                useTap = _props.useTap,
	                callback = _props.callback,
	                childProps = _objectWithoutProperties(_props, ['children', 'useTap', 'callback']);

	            return _react2.default.createElement(
	                'button',
	                _extends({ className: 'btn', onClick: this.tapHandler.bind(this), onTap: this.tapHandler.bind(this) }, childProps),
	                children
	            );
	        }
	    }, {
	        key: 'tapHandler',
	        value: function tapHandler() {
	            var _props2 = this.props,
	                useTap = _props2.useTap,
	                callback = _props2.callback;


	            useTap && callback && callback();

	            return false;
	        }
	    }]);

	    return Button;
	}(_react.Component);

	var Alert = function (_Component2) {
	    _inherits(Alert, _Component2);

	    function Alert(props) {
	        _classCallCheck(this, Alert);

	        var _this2 = _possibleConstructorReturn(this, (Alert.__proto__ || Object.getPrototypeOf(Alert)).call(this, props));

	        _this2.state = {
	            show: true
	        };
	        return _this2;
	    }

	    _createClass(Alert, [{
	        key: 'render',
	        value: function render() {
	            var show = this.state.show,
	                _props3 = this.props,
	                containerClass = _props3.containerClass,
	                title = _props3.title,
	                content = _props3.content,
	                confirmAtRight = _props3.confirmAtRight,
	                cancelText = _props3.cancelText,
	                confirmText = _props3.confirmText,
	                useTap = _props3.useTap,
	                callback = _props3.callback,
	                cancelCallback = _props3.cancelCallback,
	                cancelBtn = _react2.default.createElement(
	                Button,
	                { useTap: useTap, callback: this.clickHandler.bind(this, cancelCallback) },
	                cancelText
	            );


	            var style = Object.assign({}, this.props.style, { display: show ? 'block' : 'none' });

	            return _react2.default.createElement(
	                'div',
	                { id: 'Alert', className: containerClass, style: style },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'frame' },
	                    _react2.default.createElement(
	                        'h3',
	                        { className: 'title' },
	                        title
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'content' },
	                        content
	                    ),
	                    _react2.default.createElement(
	                        'div',
	                        { className: 'btn-group border-1px-up' },
	                        confirmAtRight && cancelText && cancelBtn,
	                        _react2.default.createElement(
	                            Button,
	                            { useTap: useTap, callback: this.clickHandler.bind(this, callback) },
	                            confirmText
	                        ),
	                        !confirmAtRight && cancelText && cancelBtn
	                    )
	                )
	            );
	        }
	    }, {
	        key: 'clickHandler',
	        value: function clickHandler(cb) {
	            var close = this.props.close;


	            close && close();
	            !close && this.setState({ show: false });

	            cb && cb();
	        }
	    }]);

	    return Alert;
	}(_react.Component);

	Alert.defaultProps = {
	    title: '',
	    content: '',
	    confirmText: '确认',
	    useTap: true
	};
	Alert.propTypes = {
	    title: _react2.default.PropTypes.string,
	    confirmAtRight: _react2.default.PropTypes.bool,
	    cancelText: _react2.default.PropTypes.string,
	    confirmText: _react2.default.PropTypes.string,
	    useTap: _react2.default.PropTypes.bool,
	    close: _react2.default.PropTypes.func,
	    callback: _react2.default.PropTypes.func,
	    cancelCallback: _react2.default.PropTypes.func
	};
	var SingleAlert = exports.SingleAlert = new _reactSingleton2.default(Alert);

	exports.default = Alert;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ])
});
;