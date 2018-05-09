'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.ArticleIcons = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.init = init;

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class ArticleIcons
 * @author Dominic <dominicgangx@gmail.com>
 * Random food icon generated at end of each article
 * - for japan articles only
 * data-component = 'article-icon'
 */
var ArticleIcons = exports.ArticleIcons = function () {
	function ArticleIcons() {
		_classCallCheck(this, ArticleIcons);

		this.scope = (0, _jquery2.default)('article');
		this.iconJapan = ["unagi-nigiri", "udon", "nigiri", "ikura-gunkan-maki", "okonomiyaki"];

		this.iconIndo = ["backpack", "horse", "palm-trees", "surf", "volcano", "beach", "sea", "summer"];
	}

	_createClass(ArticleIcons, [{
		key: 'init',
		value: function init() {
			if (this.scope.length) {
				this.setIcons();
			}
		}
	}, {
		key: 'setIcons',
		value: function setIcons() {
			var _self = this;

			var articleType = _self.scope.data('category');
			var selectedArr = void 0;

			switch (articleType) {
				case 'indonesia':
					selectedArr = _self.iconIndo;
					break;
				case 'japan':
				default:
					selectedArr = _self.iconJapan;
					break;
			}

			var i = Math.floor(Math.random() * 5);

			_self.scope.find('.post-flourish.top').addClass(selectedArr[i]);
		}
	}]);

	return ArticleIcons;
}();

function init() {
	var module = new ArticleIcons();
	module.init();
}
//# sourceMappingURL=article-icon.js.map
