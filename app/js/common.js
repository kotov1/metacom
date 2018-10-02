$(function() {


	$('.js-foldable').find('.js-toggle__box').hide();
	$('.js-foldable__title').click(function () { 
		$(this).toggleClass('opened');
		$(this).closest('.js-foldable').find('.js-toggle__box').slideToggle(200);
	 })
	

});