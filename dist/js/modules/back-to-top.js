'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.BacktoTopButton = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.init = init;

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class BacktoTopButton
 * @author Dominic <dominicgangx@gmail.com>
 * Back to top hover button in article page
 * data-component = 'back-to-top'
 */
var BacktoTopButton = exports.BacktoTopButton = function () {
	function BacktoTopButton() {
		_classCallCheck(this, BacktoTopButton);

		this.scope = (0, _jquery2.default)('#backtotop');
		this.scrollTrigger = 100; // scroll tolerance in px
	}

	_createClass(BacktoTopButton, [{
		key: 'init',
		value: function init() {
			if (this.scope.length) {
				this.backToTop();
				this.backToTopEventHandlers();
			}
		}
	}, {
		key: 'backToTop',
		value: function backToTop() {
			var _self = this;
			var scrollTop = (0, _jquery2.default)(window).scrollTop();

			if (scrollTop > _self.scrollTrigger) {
				this.scope.addClass('show');
			} else {
				this.scope.removeClass('show');
			}
		}
	}, {
		key: 'backToTopEventHandlers',
		value: function backToTopEventHandlers() {
			var _self = this;
			/**
    * window scroll handler
    * for back2top btn
    */
			(0, _jquery2.default)(window).off('scroll.backtotop').on('scroll.backtotop', function () {
				_self.backToTop();
			});

			/**
    * click hander for back2top btn
    */
			_self.scope.off('click.backtotop').on('click.backtotop', function (e) {
				e.preventDefault();
				(0, _jquery2.default)('html,body').animate({
					scrollTop: 0
				}, 700);
			});
		}
	}]);

	return BacktoTopButton;
}();

function init() {
	var module = new BacktoTopButton();
	module.init();
}
//# sourceMappingURL=back-to-top.js.map
