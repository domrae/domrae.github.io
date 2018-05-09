'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.VerticalImages = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.init = init;

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _clearfixImages = require('./clearfix-images.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class VerticalImages
 * @author Dominic <dominicgangx@gmail.com>
 * Detect portrait images and add class to fix alignment
 * data-component = 'vertical-images'
 */
var VerticalImages = exports.VerticalImages = function () {
	function VerticalImages() {
		_classCallCheck(this, VerticalImages);

		this.scope = (0, _jquery2.default)('article img');
		this.clearfixImg = new _clearfixImages.ClearfixImage();
	}

	_createClass(VerticalImages, [{
		key: 'init',
		value: function init() {
			var _this = this;

			if (this.scope.length) {
				this.scope.map(function (i, elem) {
					_this.fixVerticalSingle(elem);
				});
			}
		}
	}, {
		key: 'fixVerticalSingle',
		value: function fixVerticalSingle(elem) {
			var _self = this;
			var $el = (0, _jquery2.default)(elem);
			var $elParent = $el.parent();

			if ($el.width() < $el.height()) {
				$elParent.addClass('vert-img');
			}

			var $prevElParent = $elParent.prev();
			var $nextElParent = $elParent.next();

			if ($elParent.hasClass('vert-img') && $prevElParent.hasClass('vert-img')) {
				$elParent.addClass('col-2-img');
				$prevElParent.addClass('col-2-img');
			}

			if ($elParent.hasClass('vert-img') && $nextElParent.hasClass('vert-img')) {
				$elParent.addClass('col-2-img');
				$nextElParent.addClass('col-2-img');
			}

			_self.clearfixImg.clearfixSideBySide($elParent);
			_self.clearfixImg.clearfixLandscape($elParent);
		}
	}]);

	return VerticalImages;
}();

function init() {
	var module = new VerticalImages();
	module.init();
}
//# sourceMappingURL=vertical-images.js.map
