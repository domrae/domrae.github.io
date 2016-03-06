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

$(document).ready(function(){
	$postGrid.imagesLoaded().progress( function() {
		$postGrid.masonry('layout');
	});

	var $socialLinks = $('.social-media-list li a');

	kickLinksOut($socialLinks);

	if ($('article').length > 0) {
		initFeatherlight();
	}
});