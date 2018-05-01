import $ from 'jquery';

/**
 * @class ClearfixImage
 * @author Dominic <dominicgangx@gmail.com>
 * [imgClearfix description]
 * data-component = 'clearfix-images'
 */
export class ClearfixImage {
	constructor () {
		this.scope = $('article p');
	}

	init() {
		if (this.scope.length) {
			this.scope.map((i, el) => {
				if ($(el).hasClass('vert-img col-2-img')) {
					this.clearfixSideBySide(el);
				}

				if (!$(el).hasClass('vert-img')) {
					this.clearfixLandscape(el);
				}
			});
		}
	}

	/**
	 * add clearfix div to before side-by-side images
	 * for alignment fix
	 */
	clearfixSideBySide(elem) {
		let $elem = $(elem);
		let $prevElem = $elem.prev();
		let $nextElem = $elem.next();

		if ($elem.hasClass('vert-img') && $prevElem.hasClass('vert-img') && ($prevElem.prev().is('p') || !$prevElem.prev().length)){
			$prevElem.before('<div class="empty-fill"></div>');
		}

		if ($elem.hasClass('vert-img') && $nextElem.hasClass('vert-img') && ($elem.prev().is('p') || !$elem.prev().length)){
			$elem.before('<div class="empty-fill"></div>');
		}
	}
	
	/**
	 * add clearfix to before landscape images
	 */
	clearfixLandscape(elem) {
		let $elem = $(elem);

		if ($elem.find('img').length && !$elem.hasClass('vert-img')) {
		// if (!$(elem).prev().is('p')){
			$elem.before('<div class="empty-fill"></div>');
		}
	}
}

export function init() {
	let module = new ClearfixImage();
	module.init();
}
