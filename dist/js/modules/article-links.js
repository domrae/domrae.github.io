'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.ArticleLinks = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.init = init;

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class ArticleLinks
 * @author Dominic <dominicgangx@gmail.com>
 * open all inline article links in a new tab
 * data-component = 'article-links'
 * @return {[type]} [description]
 */
var ArticleLinks = exports.ArticleLinks = function () {
	function ArticleLinks() {
		_classCallCheck(this, ArticleLinks);

		this.scope = (0, _jquery2.default)('article a');
	}

	_createClass(ArticleLinks, [{
		key: 'init',
		value: function init() {
			if (this.scope.length) {
				this.setLinkTarget();
			}
		}
	}, {
		key: 'setLinkTarget',
		value: function setLinkTarget() {
			var _self = this;

			_self.scope.map(function (i, el) {
				(0, _jquery2.default)(el).attr({
					'target': '_blank',
					'rel': 'noopener noreferrer'
				});
			});
		}
	}]);

	return ArticleLinks;
}();

function init() {
	var module = new ArticleLinks();
	module.init();
}
//# sourceMappingURL=article-links.js.map
