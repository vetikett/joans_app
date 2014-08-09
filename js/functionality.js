$(document).ready(function () {
	$('nav a').on('click', function scroll_to(div){
    $('html, body').animate({
        scrollTop: $(".page-tag").offset().top
    },1000);
	}
});