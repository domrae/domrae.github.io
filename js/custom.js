/**
 * masonry grid for home page
 */
var $postGrid = $('.post-grid').masonry({
	itemSelector: '.post-item',
	columnWidth: '.post-grid-sizer',
	gutter: 0,
	percentPosition: true
});

/**
 * Verify links and convert to open in new tab
 */
function kickLinksOut(link){
	if (!(link.is('a'))){
		// console.log(link + "is not a link.");
		return false;
	}

	var linkArr = link.get();

	for (i=0; i<linkArr.length; i++){
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
	for (i=0; i<imgArr.length; i++){
		 hrefVal = $(imgArr[i]).attr('src');
		 $(imgArr[i]).attr('data-featherlight',hrefVal);
	}

	articleImg.featherlight();

}

/**
 * Detect portrait images and add class to fix alignment
 */
function vertImgFix(){
	var imgArr = $('article img').get();

	for (i=0; i<imgArr.length; i++){
		if( $(imgArr[i]).width() < $(imgArr[i]).height() ){
			$(imgArr[i]).parent().addClass('vert-img');
		}
	}
}

/**
 * Add markdown image title/alt attr into a caption below 
 * the image
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
 */
function sbsVertImg(){
	var imgArr = $('article .vert-img').get();

	j = 0;

	if (imgArr.length <= 0) {
		return false;
	}

	for (i=0; i<imgArr.length; i++){
		if ( $(imgArr[i]).next().attr('class') == 'vert-img'){
			$(imgArr[i]).addClass('col-2-img');
			$(imgArr[i]).next().addClass('col-2-img');
			j++;
		}
	}

	if (j > 0){
		// console.log(j + "pairs of vertical images found");
	} else {
		// console.log("no pairs of vertical images found.");
	}
}

/**
 * Random food icon generated at end of each article
 * - for japan articles only
 */
function generateFoodIcon(){
	var iconArr = ["unagi-nigiri", "udon", "nigiri", "ikura-gunkan-maki", "okonomiyaki"]
	var i = Math.floor((Math.random() * 5));

	$('.post-flourish.top').addClass(iconArr[i]);
}

/**
 * open all inline article links in a new tab
 */
function articleLinks(){
	$('article a').each(function(){
		$(this).attr('target','_blank');
	});
}

/**
 * Back to top hover button in article page
 */
var back2Top = $('#backtotop');
if (back2Top.length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
               back2Top.addClass('show');
            } else {
               back2Top.removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    back2Top.on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}

/** 
 * init scripts 
 */
$(document).ready(function(){
	$postGrid.imagesLoaded().progress( function() {
		$postGrid.masonry('layout');
	});

	var linkRef = 'https://www.instagram.com/explore/tags/' + $('.banner .text h3').text().substring(1);
	$('.banner .text h3').wrap('<a></a>').parent().attr({
		'target':'_blank',
		'href':linkRef,
	});

	var $socialLinks = $('.social-media-list li a');

	kickLinksOut($socialLinks);


	if ($('article').length > 0) {
		initFeatherlight();
		generateFoodIcon();
		articleLinks();

		$('p').imagesLoaded(function(){
			/**
			 * Delay image display until all images in <p> tag
			 * have been loaded
			 */
			if ($(window).width() > 768){
				$('article img').delay('400').addClass('ready');
			} else {
				$('article img').addClass('ready');
			}
		
			vertImgFix();
			sbsVertImg();
			imgTitle();

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
		})
	}
});
