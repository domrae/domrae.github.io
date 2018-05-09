'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.GridMasonry = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.init = init;

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

require('imagesloaded');

require('masonry');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class GridMasonry
 * @author Dominic <dominicgangx@gmail.com>
 * [Description here]
 * data-component = 'grid-masonry'
 */
var GridMasonry = exports.GridMasonry = function () {
	function GridMasonry() {
		_classCallCheck(this, GridMasonry);

		this.scope = (0, _jquery2.default)('.post-grid');
		this.options = {
			itemSelector: '.post-item',
			columnWidth: '.post-grid-sizer',
			gutter: 0,
			percentPosition: true
		};
	}

	_createClass(GridMasonry, [{
		key: 'init',
		value: function init() {
			if (this.scope.length) {
				this.initMasonry();
			}
		}
	}, {
		key: 'initMasonry',
		value: function initMasonry() {
			var _self = this;

			var postGridMsnry = _self.scope.masonry(_self.options);

			postGridMsnry.imagesLoaded().progress(function () {
				postGridMsnry.masonry('layout');
			});
		}
	}]);

	return GridMasonry;
}();

function init() {
	var module = new GridMasonry();
	module.init();
}
//# sourceMappingURL=grid-masonry.js.map
