$(function() {
	$(".accordion").each(function() {
		let allDt = $(this).find("dt");
		let allDd = $(this).find("dd");

		allDd.hide();
		allDd.first().show();
		allDt.css({ "cursor":"pointer" });
		
		allDt.mouseover(function() {
			$(this).css({ "background"	:"hotpink",
						  "border"		:"hotpink" });
		});
		allDt.mouseout(function() {
			$(this).css({ "background"	:"#444444",
						  "border"		:"#444" });
		});
		
		allDt.click(function() {
			allDd.hide();
			// 이벤트 발생한 것의 다음요소(dd)가 열리기
			$(this).next().show();
			// $(this).next().slideToggle();
		});
	});
});