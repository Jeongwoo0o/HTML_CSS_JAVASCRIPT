$(function() {
	$("#signup  form").validate({
		// 폼의 유효성 검사 => validate 플러그인 사용
		rules : {
			name 		: { required 	: true },
			email 		: { email 		: true,
							required 	: true },
			website		: { url			: true,
							required	: true },
			password	: { minlength	: 6,
							maxlength	: 14 },
			passconf	: { equalTo		: "#password" }
		},
		success : function(label) {
			label.addClass("valid");
			label.text("성공");	// 이 코드가 없으면 녹색체크가 안뜸
		}
	});
	
	// 선택사항
	$(".check-all").click(function() {
		let agree = $(".agree");
		agree.prop("checked", $(this).is(":checked"));
		/*
			[참고] attr() 문제 발생 시
			
			attr() ---> prop()
		*/
	});
	
	$(".agree").click(function() {
		/*
			[참고] attr() 문제 발생 시
			
			attr() ---> prop()
		*/
		let result = $(".agree").length === $(".agree:checked").length;
		$(".check-all").prop("checked", result);
	});
});