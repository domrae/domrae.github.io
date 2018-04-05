'use strict';

/* globals $ */
/* globals document*/
/* globals window */

/**
 * lazy load article images
 */
function articleImgLazy() {
	$("img.lazy").lazyload({
		effect : "fadeIn",
		threshold: 200,
		appear: function(){
			vertImgFix(); // alignment for vertical images
			sbsVertImg(); // alignment for side-by-side vertical images
			initFeatherlightSingle(this);
		}
	});
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
 * Image modal viewer for articles
 */
function initFeatherlight(){
	var articleImg = $('article img');
	var imgArr = articleImg.get();
	var hrefVal;

	// for each article image found, duplicate the img-src
	// value into a data-featherlight attr
	for (var i=0, len=imgArr.length; i<len; i++){
		 hrefVal = $(imgArr[i]).attr('src');
		 $(imgArr[i]).attr('data-featherlight',hrefVal);
	}

	// articleImg.featherlight();
	articleImg.featherlightGallery();
}

function initFeatherlightSingle(el){
	var hrefVal;
	var $el = $(el);

	hrefVal = $el.attr('data-original');
	$el.attr('data-featherlight',hrefVal);

	// articleImg.featherlight();
	$el.featherlightGallery();
}

/**
 * Detect portrait images and add class to fix alignment
 * @return {[type]} [description]
 */
function vertImgFix(){
	var imgArr = $('article img').get();

	for (var i=0, len=imgArr.length; i<len; i++){
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

	var j = 0;

	if (imgArr.length <= 0) {
		return false;
	}

	for (var i=0, len=imgArr.length; i<len;  i++){
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
function generateArticleIcon(){
	var articleType = document.querySelector('article').dataset.category;
	var selectedArr;

	var iconArrJapan = [
		"unagi-nigiri",
		"udon",
		"nigiri",
		"ikura-gunkan-maki",
		"okonomiyaki"
	];

	var iconArrIndo = [
		"backpack",
		"horse",
		"palm-trees",
		"surf",
		"volcano",
		"beach",
		"sea",
		"summer"
	];

	switch(articleType) {
		case 'indonesia':
		selectedArr = iconArrIndo;
		break;
		case 'japan':
		default:
		selectedArr = iconArrJapan;
		break;
	}

	var i = Math.floor((Math.random() * 5));

	$('.post-flourish.top').addClass(selectedArr[i]);
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
