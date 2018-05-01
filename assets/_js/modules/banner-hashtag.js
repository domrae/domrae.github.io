import $ from 'jquery';

/**
 * @class BannerHashtag
 * @author Dominic <dominicgangx@gmail.com>
 * Generate instagram banner hashtag
 * data-component = 'banner-hashtag'
 */
export class BannerHashtag {
	constructor () {
		this.scope = $('.banner .text h3');
	}

	init() {
		if (this.scope.length) {
			this.parseHashtag();
		}
	}

	/**
	 * determine if string is hashtag before converting to link
	 */
	parseHashtag() {
		let _self = this;

		if (_self.scope[0].innerHTML.charAt(0) === '#') {
			let linkRef = 'https://www.instagram.com/explore/tags/' + _self.scope.text().substring(1);

			_self.scope.wrap('<a></a>').parent().attr({
				'target':'_blank',
				'rel': 'noopener noreferrer',
				'href':linkRef
			});
		}
	}
}

export function init() {
	let module = new BannerHashtag();
	module.init();
}