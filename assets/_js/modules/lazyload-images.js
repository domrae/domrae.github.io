import $ from 'jquery';
import 'jquery-lazyload';
import 'imagesloaded';
import { FeatherlightSingle } from './featherlight-single-images.js';
import { VerticalImages } from './vertical-images.js';

/**
 * @class LazyloadImages
 * @author Dominic <dominicgangx@gmail.com>
 * lazy load article images
 * data-component = 'lazyload-images'
 */
export class LazyloadImages {
	constructor () {
		this.scope = $('img.lazy');
		this.featherLightSingle = new FeatherlightSingle();
		this.vertImgFix = new VerticalImages();
	}

	init() {
		if (this.scope.length) {
			this.lazyLoadImages();
		}
	}

	lazyLoadImages() {
		let _self = this;

		_self.scope.lazyload({
			effect : "fadeIn",
			threshold: 200,
			load: function(){
				let elem = this;
				$(elem).addClass('ready');
				_self.featherLightSingle.set(elem);
				_self.featherLightSingle.init();
				// alignment for vertical images (resolve promise then do next)
				// alignment for side-by-side vertical images
				_self.vertImgFix.fixVerticalSingle(elem);
			}
		});
	}
}

export function init() {
	let module = new LazyloadImages();
	module.init();
}