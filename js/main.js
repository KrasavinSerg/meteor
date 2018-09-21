$(document).ready(function(){
  $('.main__slider').slick({
    autoplay: true,
    dots: true,
    arrows: false,
	});
	
	$('.main-nav__toggle').click(function() {
		$('.main-nav').toggleClass('main-nav--opened');
	});
});
