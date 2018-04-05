'use strict';

/* globals $ */
/* globals document*/
/* globals window */

/* globals initPostGridMasonry */
/* globals instaBannerHashtagLink */
/* globals kickLinksOut */
/* globals initFeatherlight */
/* globals generateArticleIcon */
/* globals articleLinks */
/* globals backtoTopButton */
/* globals articleImgLazy */
/* globals vertImgFix */
/* globals sbsVertImg */
/* globals imgTitle */
/* globals imgClearfix */

/**
 * init scripts
 */
$(document).ready(function(){

	initPostGridMasonry();
	instaBannerHashtagLink();
	kickLinksOut();

	if ($('article').length) {
		initFeatherlight();
		generateArticleIcon();
		articleLinks();
		backtoTopButton();
		articleImgLazy();

		$('article').imagesLoaded()
			.progress(function(instance, image){
				// console.log('imgload-progress', image.img);

				var imgEl = $(image.img);
				/**
				 * Delay image display until all images in <p> tag
				 * have been loaded
				 *
				 * (2017) what a shitty implementation of lazy load, you should
				 * be ashamed.
				 */
				if ($(window).width() > 768){
					imgEl.delay('400').addClass('ready');
				} else {
					imgEl.addClass('ready');
				}
			})
			.done(function(instance){
				// console.log('imageload done');
				vertImgFix(); // alignment for vertical images
				sbsVertImg(); // alignment for side-by-side vertical images
				imgTitle(); // generate image caption
				imgClearfix(); // clearfix for article images

			});
	}
});
