import $ from 'jquery';
import 'featherlight';
import 'featherlight-gallery';
import 'featherlight.css';
import 'featherlight-gallery.css';

/**
 * @class FeatherlightGallery
 * @author Dominic <dominicgangx@gmail.com>
 * Image modal viewer for articles
 * data-component = 'featherlight-gallery-images'
 */
export class FeatherlightGallery {
	constructor () {
		this.scope = $('article img');
	}

	init() {
		if (this.scope.length) {
			this.initFeatherlight();
		}
	}

	initFeatherlight() {
		var _self = this;
		var imgArr = _self.scope.get();
		var hrefVal;

		// for each article image found, duplicate the img-src
		// value into a data-featherlight attr
		for (var i=0, len=imgArr.length; i<len; i++){
			 hrefVal = $(imgArr[i]).attr('src');
			 $(imgArr[i]).attr('data-featherlight',hrefVal);
		}

		// _self.scope.featherlight();
		_self.scope.featherlightGallery();
	}
}

export function init() {
	let module = new FeatherlightGallery();
	module.init();
}
