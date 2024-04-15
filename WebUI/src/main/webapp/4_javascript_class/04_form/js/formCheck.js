window.onload = function(){
	var frm = document.getElementById('frm');
	var inputs = document.querySelectorAll("input");

	// 폼의 submit 이벤트가 발생했을 때
	/*frm.onsubmit = function(e) {
		// 기본 이벤트 역할 막기
		e.preventDefault();
		e.stopPropagation();
		
		// 유효성 검사
		let agree = frm.agree;
		if(!agree.checked) {
			alert("반드시 약관에 동의하셔야합니다.");
			return;
		}
		frm.submit();
	}*/
	
	// 버튼이 클릭됐을 때
	let btn = document.querySelector("#btn");
	btn.onclick = function(e) {
		// 기본 이벤트 역할 막기
		e.preventDefault();
		e.stopPropagation();
		
		// 유효성 검사를 해주지 않기 때문에 직접 유효성 검사 필요
		let agree = frm.agree;
		if(!agree.checked) {
			alert("반드시 약관에 동의하셔야합니다.");
			return;
		}
		frm.submit();
	}
}