$(function() {
	// 테이블에서 짝수행에 css 적용
	$("#celebs > .data > tbody > tr:odd").addClass("table_striping");
	
	// 테이블에 마우스가 올라갔을 때 td_mouseover 클래스 속성을 적용하고
	// 마우스가 내려가면 td_mouseover 클래스 속성을 제거
	$("#celebs > table > tbody > tr").hover(function() {
		$(this).addClass("td_mouseover");
	}, function() {
		$(this).removeClass("td_mouseover");
	});
	
	// 감추기 버튼이 눌렸을 때
	$("#hideButton").click(function() {
		// $("#intro > img").hide();
		// $("#intro > img").fadeOut(1000);
		$("#intro > img").slideUp(1000);
	});
	// 보이기 버튼이 눌렸을 때
	$("#showButton").click(function() {
		// $("#intro > img").show();
		// $("#intro > img").fadeIn(1000);
		$("#intro > img").slideDown(1000);
	});
	// 감추기/보이기 버튼이 눌렸을 때
	$("#toggleButton").click(function() {
		// $("#intro > img").Toggle();
		// $("#intro > img").fadeToggle(1000);
		// $("#intro > img").slideToggle(1000);
		
		var img = $("#intro > img");
		if(img.is(":visible")) {
			// img.hide();
			img.fadeOut(1000);
			$(this).val("보이기");
		}else{
			// img.show();
			img.fadeIn(1000);
			$(this).val("안보이기");
		}
	});
});