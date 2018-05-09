'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.BannerHashtag = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.init = init;

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class BannerHashtag
 * @author Dominic <dominicgangx@gmail.com>
 * Generate instagram banner hashtag
 * data-component = 'banner-hashtag'
 */
var BannerHashtag = exports.BannerHashtag = function () {
	function BannerHashtag() {
		_classCallCheck(this, BannerHashtag);

		this.scope = (0, _jquery2.default)('.banner .text h3');
	}

	_createClass(BannerHashtag, [{
		key: 'init',
		value: function init() {
			if (this.scope.length) {
				this.parseHashtag();
			}
		}

		/**
   * determine if string is hashtag before converting to link
   */

	}, {
		key: 'parseHashtag',
		value: function parseHashtag() {
			var _self = this;

			if (_self.scope[0].innerHTML.charAt(0) === '#') {
				var linkRef = 'https://www.instagram.com/explore/tags/' + _self.scope.text().substring(1);

				_self.scope.wrap('<a></a>').parent().attr({
					'target': '_blank',
					'rel': 'noopener noreferrer',
					'href': linkRef
				});
			}
		}
	}]);

	return BannerHashtag;
}();

function init() {
	var module = new BannerHashtag();
	module.init();
}
//# sourceMappingURL=banner-hashtag.js.map
