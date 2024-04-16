/*
	Jquery에서 css 속성 변경 : css()
		
							animate()
*/

$(function() {
	$("p#intro").animate({
		padding		:"20px",
		fontSize	:"30px"
	}, 1000);
	
	$("#navigation > ul > li").hover(function() {
		$(this).animate({ 
			paddingLeft		:"+=15px"
		 }, 300);
	}, function() {
		$(this).animate({ 
			paddingLeft	:"-=15px"
		 }, 300);
	});
});