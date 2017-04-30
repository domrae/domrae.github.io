/**
 * Verify links and convert to open in new tab
 * @return {[type]} [description]
 */
function kickLinksOut(){
	var link = $('.social-media-list li a');

	if (!(link.is('a'))){
		// console.log(link + "is not a link.");
		return false;
	}

	var linkArr = link.get();

	for (i=0, len=linkArr.length; i<len; i++){
		$(linkArr[i]).attr("target","_blank");
	}
}

/**
 * Image modal viewer for articles
 */
function initFeatherlight(){
	var articleImg = $('article img');
	var imgArr = articleImg.get();
	var hrefVal;
	
	// for each article image found, duplicate the img-src
	// value into a data-featherlight attr
	for (i=0, len=imgArr.length; i<len; i++){
		 hrefVal = $(imgArr[i]).attr('src');
		 $(imgArr[i]).attr('data-featherlight',hrefVal);
	}

	// articleImg.featherlight();
	articleImg.featherlightGallery();

}

/**
 * Detect portrait images and add class to fix alignment
 * @return {[type]} [description]
 */
function vertImgFix(){
	var imgArr = $('article img').get();

	for (i=0, len=imgArr.length; i<len; i++){
		// console.log(imgArr[i]);
		if( $(imgArr[i]).width() < $(imgArr[i]).height() ){
			$(imgArr[i]).parent().addClass('vert-img');
		}
	}
}

/**
 * Add markdown image title/alt attr into a caption below 
 * the image
 * @return {[type]} [description]
 */
function imgTitle(){
	$('article img').each(function(){
		$(this).attr('title', $(this).attr('alt'));
		$(this).parent().append('<span class="caption">'+$(this).attr('alt')+'</span>')
	})
}

/**
 * Detect side-by-side portrait images and add a class for
 * alignment
 * @return {[type]} [description]
 */
function sbsVertImg(){
	var imgArr = $('article .vert-img').get();

	j = 0;

	if (imgArr.length <= 0) {
		return false;
	}

	for (i=0, len=imgArr.length; i<len;  i++){
		var nextSibling = $(imgArr[i]).next();
		
		if (nextSibling.attr('class') == 'vert-img'){
			$(imgArr[i]).addClass('col-2-img');
			nextSibling.addClass('col-2-img');
			j++;
		}
	}

	// if (j > 0){
	 	// console.log(j + "pairs of vertical images found");
	// } else {
	 	// console.log("no pairs of vertical images found.");
	// }
}

/**
 * Random food icon generated at end of each article
 * - for japan articles only
 * @return {[type]} [description]
 */
function generateFoodIcon(){
	var iconArr = [
		"unagi-nigiri", 
		"udon", 
		"nigiri", 
		"ikura-gunkan-maki", 
		"okonomiyaki"
	];
	var i = Math.floor((Math.random() * 5));

	$('.post-flourish.top').addClass(iconArr[i]);
}

/**
 * open all inline article links in a new tab
 * @return {[type]} [description]
 */
function articleLinks(){
	$('article a').each(function(){
		$(this).attr('target','_blank');
	});
}

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
 * [imgClearfix description]
 * @return {[type]} [description]
 */
function imgClearfix() {
	/**
	 * add clearfix div to before side-by-side images
	 * for alignment fix
	 */
	$('article .vert-img.col-2-img').each(function(){
		if (!$(this).prev().is('p')){
			$(this).before('<div class="empty-fill"></div>');
		}
	});

	/**
	 * add clearfix to before landscape images
	 */
	$('article p:not(.vert-img)').each(function(){
		if ($(this).prev().hasClass('vert-img')){
			$(this).before('<div class="empty-fill"></div>');
		}
	});
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

/** 
 * init scripts 
 */
$(document).ready(function(){

	initPostGridMasonry();
	instaBannerHashtagLink();
	kickLinksOut();

	if ($('article').length) {
		initFeatherlight();
		generateFoodIcon();
		articleLinks();
		backtoTopButton();

		$('article').imagesLoaded()
			.progress(function(instance, image){
				// console.log(image.img);

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
