$(document).ready(function(){
	$('.post-grid').masonry({
		itemSelector: '.post-item',
		columnWidth: '.post-grid-sizer',
		percentPosition: true
	});
});