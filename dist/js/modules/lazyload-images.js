'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.LazyloadImages = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.init = init;

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

require('jquery-lazyload');

require('imagesloaded');

var _featherlightSingleImages = require('./featherlight-single-images.js');

var _verticalImages = require('./vertical-images.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class LazyloadImages
 * @author Dominic <dominicgangx@gmail.com>
 * lazy load article images
 * data-component = 'lazyload-images'
 */
var LazyloadImages = exports.LazyloadImages = function () {
	function LazyloadImages() {
		_classCallCheck(this, LazyloadImages);

		this.scope = (0, _jquery2.default)('img.lazy');
		this.featherLightSingle = new _featherlightSingleImages.FeatherlightSingle();
		this.vertImgFix = new _verticalImages.VerticalImages();
	}

	_createClass(LazyloadImages, [{
		key: 'init',
		value: function init() {
			if (this.scope.length) {
				this.lazyLoadImages();
			}
		}
	}, {
		key: 'lazyLoadImages',
		value: function lazyLoadImages() {
			var _self = this;

			_self.scope.lazyload({
				effect: "fadeIn",
				threshold: 200,
				load: function load() {
					var elem = this;
					(0, _jquery2.default)(elem).addClass('ready');
					_self.featherLightSingle.set(elem);
					_self.featherLightSingle.init();
					// alignment for vertical images (resolve promise then do next)
					// alignment for side-by-side vertical images
					_self.vertImgFix.fixVerticalSingle(elem);
				}
			});
		}
	}]);

	return LazyloadImages;
}();

function init() {
	var module = new LazyloadImages();
	module.init();
}
//# sourceMappingURL=lazyload-images.js.map
