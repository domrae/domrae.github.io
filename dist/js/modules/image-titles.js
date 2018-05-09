'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.ImageTitles = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.init = init;

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class ImageTitles
 * @author Dominic <dominicgangx@gmail.com>
 * Add markdown image title/alt attr into a caption below
 * the image
 * data-component = 'image-titles'
 */
var ImageTitles = exports.ImageTitles = function () {
	function ImageTitles() {
		_classCallCheck(this, ImageTitles);

		this.scope = (0, _jquery2.default)('article img');
	}

	_createClass(ImageTitles, [{
		key: 'init',
		value: function init() {
			if (this.scope.length) {
				this.setTitles();
			}
		}
	}, {
		key: 'setTitles',
		value: function setTitles() {
			var _self = this;

			_self.scope.map(function (i, el) {
				var $img = (0, _jquery2.default)(el);
				$img.attr('title', $img.attr('alt'));
				$img.parent().append('<span class="caption">' + $img.attr('alt') + '</span>');
			});
		}
	}]);

	return ImageTitles;
}();

function init() {
	var module = new ImageTitles();
	module.init();
}
//# sourceMappingURL=image-titles.js.map
