var $postGrid = $('.post-grid').masonry({
	itemSelector: '.post-item',
	columnWidth: '.post-grid-sizer',
	gutter: 0,
	percentPosition: true
});

$(document).ready(function(){
	$postGrid.imagesLoaded().progress( function() {
		$postGrid.masonry('layout');
	});
});