import $ from 'jquery';
import { ClearfixImage } from './clearfix-images.js';

/**
 * @class VerticalImages
 * Detect portrait images and add class to fix alignment
 * data-component = 'vertical-images'
 */
export class VerticalImages {
	constructor () {
		this.scope = $('article img');
		this.clearfixImg = new ClearfixImage();
	}

	init() {
		if (this.scope.length) {
			this.scope.map((i, elem) => {
				this.fixVerticalSingle(elem);
			});
		}
	}

	fixVerticalSingle(elem) {
		let _self = this;
		let $el = $(elem);
		let $elParent = $el.parent();

		if ($el.width() < $el.height() ){
			$elParent.addClass('vert-img');
		}

		let $prevElParent = $elParent.prev();
		let $nextElParent = $elParent.next();

		if ($elParent.hasClass('vert-img') && $prevElParent.hasClass('vert-img')){
			$elParent.addClass('col-2-img');
			$prevElParent.addClass('col-2-img');
		}

		if ($elParent.hasClass('vert-img') && $nextElParent.hasClass('vert-img')){
			$elParent.addClass('col-2-img');
			$nextElParent.addClass('col-2-img');
		}

		_self.clearfixImg.clearfixSideBySide($elParent);
		_self.clearfixImg.clearfixLandscape($elParent);
	}
}

export function init() {
	let module = new VerticalImages();
	module.init();
}