import $ from 'jquery';

/**
 * @class ArticleIcons
 * Random food icon generated at end of each article
 * - for japan articles only
 * data-component = 'article-icon'
 */
export class ArticleIcons {
	constructor () {
		this.scope = $('article');
		this.iconJapan = [
			"unagi-nigiri",
			"udon",
			"nigiri",
			"ikura-gunkan-maki",
			"okonomiyaki"
		];

		this.iconIndo = [
			"backpack",
			"horse",
			"palm-trees",
			"surf",
			"volcano",
			"beach",
			"sea",
			"summer"
		];
	}

	init() {
		if (this.scope.length) {
			this.setIcons();
		}
	}

	setIcons() {
		let _self = this;

		let articleType = _self.scope.data('category');
		let selectedArr;

		switch(articleType) {
			case 'indonesia':
			selectedArr = _self.iconIndo;
			break;
			case 'japan':
			default:
			selectedArr = _self.iconJapan;
			break;
		}

		let i = Math.floor((Math.random() * 5));

		_self.scope.find('.post-flourish.top').addClass(selectedArr[i]);
	}
}

export function init() {
	let module = new ArticleIcons();
	module.init();
}