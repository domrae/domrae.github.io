import $ from 'jquery';

/**
 * @class BacktoTopButton
 * @author Dominic <dominicgangx@gmail.com>
 * Back to top hover button in article page
 * data-component = 'back-to-top'
 */
export class BacktoTopButton {
	constructor () {
		this.scope = $('#backtotop');
		this.scrollTrigger = 100; // scroll tolerance in px
	}

	init() {
		if (this.scope.length) {
			this.backToTop();
			this.backToTopEventHandlers();

		}
	}

	backToTop() {
		let _self = this;
		let scrollTop = $(window).scrollTop();

		if (scrollTop > _self.scrollTrigger) {
			this.scope.addClass('show');
		} else {
			this.scope.removeClass('show');
		}
	}

	backToTopEventHandlers() {
		let _self = this;
		/**
		 * window scroll handler
		 * for back2top btn
		 */
	    $(window).off('scroll.backtotop').on('scroll.backtotop', function () {
	        _self.backToTop();
	    });

		/**
		 * click hander for back2top btn
		 */
	    _self.scope.off('click.backtotop').on('click.backtotop', function (e) {
	        e.preventDefault();
	        $('html,body').animate({
	            scrollTop: 0
	        }, 700);
	    });
	}
}

export function init() {
	let module = new BacktoTopButton();
	module.init();
}