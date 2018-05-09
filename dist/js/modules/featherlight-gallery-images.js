'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.FeatherlightGallery = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.init = init;

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

require('featherlight');

require('featherlight-gallery');

require('featherlight.css');

require('featherlight-gallery.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class FeatherlightGallery
 * @author Dominic <dominicgangx@gmail.com>
 * Image modal viewer for articles
 * data-component = 'featherlight-gallery-images'
 */
var FeatherlightGallery = exports.FeatherlightGallery = function () {
	function FeatherlightGallery() {
		_classCallCheck(this, FeatherlightGallery);

		this.scope = (0, _jquery2.default)('article img');
	}

	_createClass(FeatherlightGallery, [{
		key: 'init',
		value: function init() {
			if (this.scope.length) {
				this.initFeatherlight();
			}
		}
	}, {
		key: 'initFeatherlight',
		value: function initFeatherlight() {
			var _self = this;
			var imgArr = _self.scope.get();
			var hrefVal;

			// for each article image found, duplicate the img-src
			// value into a data-featherlight attr
			for (var i = 0, len = imgArr.length; i < len; i++) {
				hrefVal = (0, _jquery2.default)(imgArr[i]).attr('src');
				(0, _jquery2.default)(imgArr[i]).attr('data-featherlight', hrefVal);
			}

			// _self.scope.featherlight();
			_self.scope.featherlightGallery();
		}
	}]);

	return FeatherlightGallery;
}();

function init() {
	var module = new FeatherlightGallery();
	module.init();
}
//# sourceMappingURL=featherlight-gallery-images.js.map
