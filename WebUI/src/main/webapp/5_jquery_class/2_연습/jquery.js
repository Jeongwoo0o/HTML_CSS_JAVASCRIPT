$(function() {
	// "+" 버튼 클릭
	$(".fontSize > button:eq(0)").click(function() {
		$("#txt").css({ 
			fontSize:"+=1"
		});
	});
	// "-" 버튼 클릭
	$(".fontSize > button:eq(1)").click(function() {
		$("#txt").css({ 
			fontSize:"-=1"
		});
	});
	
	// 글씨체 변경
	$("#fontstyle").on("change", function() {
		$("#txt").css({
			fontFamily:$(this).val()
		});
	});
});