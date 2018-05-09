'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.ClearfixImage = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.init = init;

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class ClearfixImage
 * @author Dominic <dominicgangx@gmail.com>
 * [imgClearfix description]
 * data-component = 'clearfix-images'
 */
var ClearfixImage = exports.ClearfixImage = function () {
	function ClearfixImage() {
		_classCallCheck(this, ClearfixImage);

		this.scope = (0, _jquery2.default)('article p');
	}

	_createClass(ClearfixImage, [{
		key: 'init',
		value: function init() {
			var _this = this;

			if (this.scope.length) {
				this.scope.map(function (i, el) {
					if ((0, _jquery2.default)(el).hasClass('vert-img col-2-img')) {
						_this.clearfixSideBySide(el);
					}

					if (!(0, _jquery2.default)(el).hasClass('vert-img')) {
						_this.clearfixLandscape(el);
					}
				});
			}
		}

		/**
   * add clearfix div to before side-by-side images
   * for alignment fix
   */

	}, {
		key: 'clearfixSideBySide',
		value: function clearfixSideBySide(elem) {
			var $elem = (0, _jquery2.default)(elem);
			var $prevElem = $elem.prev();
			var $nextElem = $elem.next();

			if ($elem.hasClass('vert-img') && $prevElem.hasClass('vert-img') && ($prevElem.prev().is('p') || !$prevElem.prev().length)) {
				$prevElem.before('<div class="empty-fill"></div>');
			}

			if ($elem.hasClass('vert-img') && $nextElem.hasClass('vert-img') && ($elem.prev().is('p') || !$elem.prev().length)) {
				$elem.before('<div class="empty-fill"></div>');
			}
		}

		/**
   * add clearfix to before landscape images
   */

	}, {
		key: 'clearfixLandscape',
		value: function clearfixLandscape(elem) {
			var $elem = (0, _jquery2.default)(elem);

			if ($elem.find('img').length && !$elem.hasClass('vert-img')) {
				// if (!$(elem).prev().is('p')){
				$elem.before('<div class="empty-fill"></div>');
			}
		}
	}]);

	return ClearfixImage;
}();

function init() {
	var module = new ClearfixImage();
	module.init();
}
//# sourceMappingURL=clearfix-images.js.map
