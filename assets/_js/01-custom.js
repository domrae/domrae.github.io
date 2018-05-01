'use strict';

/* globals $ */
/* globals document*/
/* globals window */

/**
 * Back to top hover button in article page
 * @return {[type]} [description]
 */
function backtoTopButton() {
	var back2Top = $('#backtotop');

	if (back2Top.length) {
	    var scrollTrigger = 100; // scroll tolerance in px
	    var backToTop = function () {
			var scrollTop = $(window).scrollTop();
			if (scrollTop > scrollTrigger) {
			   back2Top.addClass('show');
			} else {
			   back2Top.removeClass('show');
			}
		};

		/**
		 * init back2top btn
		 */
	    backToTop();

		/**
		 * window scroll handler
		 * for back2top btn
		 */
	    $(window).on('scroll', function () {
	        backToTop();
	    });

		/**
		 * click hander for back2top btn
		 */
	    back2Top.on('click', function (e) {
	        e.preventDefault();
	        $('html,body').animate({
	            scrollTop: 0
	        }, 700);
	    });

	} else {
		return false;
	}
}

/**
 * Generate instagram banner hashtag
 * @return {[type]} [description]
 */
function instaBannerHashtagLink() {
	/**
	 * link the banner title to instagram to fetch hashtag
	 */
	var bannerTitle = $('.banner .text h3');

	// determine if string is hashtag before converting to link
	if (bannerTitle.length && bannerTitle[0].innerHTML.charAt(0) === '#') {
		var linkRef = 'https://www.instagram.com/explore/tags/' + bannerTitle.text().substring(1);
		bannerTitle.wrap('<a></a>').parent().attr({
			'target':'_blank',
			'href':linkRef,
		});
	} else {
		return false;
	}
}

/**
 * initialize post grid masonry
 * @return {[type]} [description]
 */
function initPostGridMasonry() {
	var postGridEl = $('.post-grid');

	if (postGridEl.length) {
		/**
		 * masonry grid for home page
		 * @return {[type]} [description]
		 */
		var postGridMsnry = postGridEl.masonry({
			itemSelector: '.post-item',
			columnWidth: '.post-grid-sizer',
			gutter: 0,
			percentPosition: true
		});

		postGridMsnry.imagesLoaded().progress( function() {
			postGridMsnry.masonry('layout');
		});
	} else {
		return false;
	}
}
