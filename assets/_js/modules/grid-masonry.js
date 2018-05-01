import $ from 'jquery';
import 'imagesloaded';
import 'masonry';

/**
 * @class GridMasonry
 * @author Dominic <dominicgangx@gmail.com>
 * [Description here]
 * data-component = 'grid-masonry'
 */
export class GridMasonry {
	constructor () {
		this.scope = $('.post-grid');
		this.options = {
			itemSelector: '.post-item',
			columnWidth: '.post-grid-sizer',
			gutter: 0,
			percentPosition: true
		};
	}

	init() {
		if (this.scope.length) {
			this.initMasonry();
		}
	}

	initMasonry() {
		let _self = this;

		let postGridMsnry = _self.scope.masonry(_self.options);

		postGridMsnry.imagesLoaded().progress( function() {
			postGridMsnry.masonry('layout');
		});
	}
}

export function init() {
	let module = new GridMasonry();
	module.init();
}