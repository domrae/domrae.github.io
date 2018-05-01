import $ from 'jquery';

/**
 * @class ArticleLinks
 * @author Dominic <dominicgangx@gmail.com>
 * open all inline article links in a new tab
 * data-component = 'article-links'
 * @return {[type]} [description]
 */
export class ArticleLinks {
	constructor () {
		this.scope = $('article a');
	}

	init() {
		if (this.scope.length) {
			this.setLinkTarget();
		}
	}

	setLinkTarget() {
		let _self = this;

		_self.scope.map((i, el) => {
			$(el).attr({
				'target': '_blank',
				'rel': 'noopener noreferrer'
			});
		});
	}
}

export function init() {
	let module = new ArticleLinks();
	module.init();
}