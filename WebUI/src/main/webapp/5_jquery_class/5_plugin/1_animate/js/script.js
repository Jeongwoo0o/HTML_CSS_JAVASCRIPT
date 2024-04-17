$(function() {
	$("#bio > div").hide();
	$("#bio > div").first().show();
	$("#bio > h3").css({"cursor":"pointer"});
	
	let titles = $("#bio > h3");
	
	titles.click(function() {
		// $(this).next().toggle();
		$(this).next().animate({ "height":"toggle" }, "fast", "easeOutElastic");
	});
});