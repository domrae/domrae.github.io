var $postGrid = $('.post-grid').masonry({
	itemSelector: '.post-item',
	columnWidth: '.post-grid-sizer',
	gutter: 0,
	percentPosition: true
});

function kickLinksOut(link){

	if (!(link.is('a'))){
		console.log(link + "is not a link.");
		return false;
	}

	var linkArr = link.get();

	for (i=0; i<linkArr.length; i++){
		$(linkArr[i]).attr("target","_blank");
	}
}


function initFeatherlight(){
	var imgArr = $('article img').get();
	var hrefVal;

	for (i=0; i<imgArr.length; i++){
		 hrefVal = $(imgArr[i]).attr('src');
		 $(imgArr[i]).attr('data-featherlight',hrefVal);
	}

	$('article img').featherlight();

}

function vertImgFix(){
	var imgArr = $('article img').get();

	for (i=0; i<imgArr.length; i++){
		// console.log($(imgArr[i]).width());
		// console.log($(imgArr[i]).height());
		if( $(imgArr[i]).width() < $(imgArr[i]).height() ){
			$(imgArr[i]).parent().addClass('vert-img');
		}
	}
}

function imgTitle(){
	$('article img').each(function(){
		$(this).attr('title', $(this).attr('alt'));
	});
}

function sbsVertImg(){
	var imgArr = $('article .vert-img').get();

	j = 0;

	if (imgArr.length <= 0) {
		// console.log('no vertical images found');
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
		// console.log(j + "pairs of veritcal images found");
	} else {
		// console.log("no pairs of vertical images found.");
	}
}

function generateFoodIcon(){
	var iconArr = ["unagi-nigiri", "udon", "nigiri", "ikura-gunkan-maki", "okonomiyaki"]
	var i = Math.floor((Math.random() * 5));

	$('.post-flourish.top').addClass(iconArr[i]);
}

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

		$('article').imagesLoaded(function(){
			if ($(window).width() > 768){
				$('article img').delay('400').addClass('ready');
			} else {
				$('article img').addClass('ready');
			}
			vertImgFix();
			sbsVertImg();
			imgTitle();
		})
	}
});