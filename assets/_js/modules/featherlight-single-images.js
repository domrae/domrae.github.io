import $ from 'jquery';
import 'featherlight';
import 'featherlight-gallery';

/**
 * @class FeatherlightSingle
 * @author Dominic <dominicgangx@gmail.com>
 * Image modal viewer for articles
 * loaded by single image via lazyload
 * data-component = 'featherlight-single-images'
 */
export class FeatherlightSingle {
	constructor (elem) {
		this.scope = $(elem);
		this.selector = elem;
	}

	set(elem) {
		this.scope = $(elem);
		this.selector = elem;
	}

	init() {
		if (this.scope.length) {
			this.initFeatherlightSingle();
		}
	}

	initFeatherlightSingle() {
		let _self = this;
		let href;

		href = _self.scope.attr('data-original');
		_self.scope.attr('data-featherlight',href);

		// articleImg.featherlight();
		_self.scope.featherlightGallery();

	}
}

export function init(elem) {
	let module = new FeatherlightSingle(elem);
	module.init();
}