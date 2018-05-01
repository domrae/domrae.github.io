import $ from 'jquery';

/**
 * @class ImageTitles
 * @author Dominic <dominicgangx@gmail.com>
 * Add markdown image title/alt attr into a caption below
 * the image
 * data-component = 'image-titles'
 */
export class ImageTitles {
	constructor () {
		this.scope = $('article img');
	}

	init() {
		if (this.scope.length) {
			this.setTitles();
		}
	}

	setTitles() {
		let _self = this;

		_self.scope.map((i, el) => {
			let $img = $(el);
			$img.attr('title', $img.attr('alt'));
			$img.parent().append('<span class="caption">'+$img.attr('alt')+'</span>');
		});
	}
}

export function init() {
	let module = new ImageTitles();
	module.init();
}