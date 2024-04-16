$(function() {
	$(".header > .menu > li > .rollover > img").hover(function() {
		$(this).attr("src", $(this).attr("src").replace("menu01_off", "menu01_on"));
		$(this).attr("src", $(this).attr("src").replace("menu02_off", "menu02_on"));
		$(this).attr("src", $(this).attr("src").replace("menu03_off", "menu03_on"));
	}, function() {
		$(this).attr("src", $(this).attr("src").replace("menu01_on", "menu01_off"));
		$(this).attr("src", $(this).attr("src").replace("menu02_on", "menu02_off"));
		$(this).attr("src", $(this).attr("src").replace("menu03_on", "menu03_off"));
	});
});