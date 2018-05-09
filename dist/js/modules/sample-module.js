'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.SampleModule = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.init = init;

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class SampleModule
 * @author Dominic <dominicgangx@gmail.com>
 * [Description here]
 * data-component = 'component-id-here'
 */
var SampleModule = exports.SampleModule = function () {
	function SampleModule() {
		_classCallCheck(this, SampleModule);

		this.scope = (0, _jquery2.default)('.scope-selector-here');
	}

	_createClass(SampleModule, [{
		key: 'init',
		value: function init() {
			console.log('init');
			if (this.scope.length) {
				console.log('scope exists');
			}
		}
	}]);

	return SampleModule;
}();

function init() {
	var module = new SampleModule();
	module.init();
}
//# sourceMappingURL=sample-module.js.map
