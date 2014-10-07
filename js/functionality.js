$(document).ready(function() {
	$('#mobile-nav').hide();
	$('.mobile-nav-icon').click(function() {
		$('#mobile-nav').slideToggle(500);
	});

	$('.mobile-menu-tags').click(function() {
		$('#mobile-nav').hide(650);
	});
});