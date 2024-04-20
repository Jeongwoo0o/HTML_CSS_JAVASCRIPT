$(function() {
	// (1) 오늘 날짜 출력 (10점) fin
	let currentDate = new Date();
	
	let year 	= currentDate.getFullYear();
	let month 	= currentDate.getMonth()+1;
	let date 	= currentDate.getDate();
	
	$(".year")	.text(year);
	$(".month")	.text(month);
	$(".date")	.text(date);
	
	// (2) 포커스 가면 ‘검색어를 입력하세요’를 안보이고 다시 포커스가 없으면 다시 출력 (10점) fin
	$("#keyword").focus(function(){
		// 검색창에 포커스 됐을 때 글씨가 없다면 힌트 지우기
		if($("#keyword").val() == "") {
			$("#keyword").css({"background-position":"0 -500px"});
		}
    }).blur(function() {
		// 검색창에 포커스가 빠질 때 글씨가 없다면 힌트 생성
		if($("#keyword").val() == "") {
			$("#keyword").css({"background-position":"0 0"});
		}
	});
	
	// (3) 탭팬 구현 (10점) fin
	// 초기에 첫 번째 탭을 활성화
    $("#tabmenu dt:first-child").addClass("active");
    $("#tabmenu dd:first-child").show();
    
    // 탭 버튼 클릭 시 이벤트
    let tabAlldd = $("#tabmenu dd");
    $("#tabmenu img").click(function(){
		let src = $("#tabmenu img").filter("[src*='over']");
		src.attr("src", src.attr("src").replace("over", "out"));
		$(this).attr("src", $(this).attr("src").replace("out", "over"));
		
        tabAlldd.hide();
        $(this).parents("dt").next().show();
    });
	
	// (4) 이미지슬라이드 구현 (10점) fin
	$("#best_bg ul").bxSlider({
	    minSlides : 5,
		maxSlides : 5,
		slideMargin : 10,
		slideWidth : 160,
		moveSlides : 1,
		auto : true
  	});
  	$(".prev_btn").click(function() {
		$("#best_bg ul").bxSlider({
			minSlides : 5,
			maxSlides : 5,
			slideMargin : 10,
			slideWidth : 160,
			moveSlides : 1,
			auto : false
  		});
	});
	$(".next_btn").click(function() {
		$("#best_bg ul").bxSlider({
			minSlides : 5,
			maxSlides : 5,
			slideMargin : 10,
			slideWidth : 160,
			moveSlides : 1,
			auto : false
  		});
	});
	
	// (5) [로그인]을 누르면 로그인 창이 보이고 [Close]를 누르면 다시 안 보임 (20점) fin
	$(".login_wrap").click(function(evt) {
		$("#login_f").css({"top":"25px"});
		evt.stopPropagation();
	});
	$(".login_close_btn").on("click", function(evt) {
		$("#login_f").css({"top":"-500px"});
		evt.stopPropagation();
	});
	
	// (6) [전체메뉴]를 선택하면 전체메뉴가 보이고 [Close] 누르면 다시 안 보임 (20점) fin
	$("#total_btn").click(function() {
		$("#total_menu").css({"display":"inline"});
	});
	$("#total_close").on("click", function() {
		$("#total_menu").css({"display":"none"});
	});
	
	// (7) 그 외 추가적으로 구현하면 해당 화면 캡쳐 파일을 추가로 업로드 합니다. (20점)
	// (7-1)프린트 버튼
	$(".print_btn").click(function() {
		window.print();
	});
	
	// (7-2)화면크기
	// 화면크기 최대 확대율 200%
	var nowZoom = 100;
	$(".zoom_in").click(function() {
		nowZoom = nowZoom + 20;
	  	if(nowZoom >= 200){
	    	nowZoom = 200;
	    }
	  	zooms();
	});
	// 화면크기 최소 축소율 70%
	$(".zoom_out").click(function() {
		nowZoom = nowZoom -10;
	  	if(nowZoom <= 70){
	    	nowZoom = 70;
	    }
	  	zooms();
	});
	// 화면크기 100%
	$(".zoom_return").click(function() {
		nowZoom = 100;
	  	zooms();
	});
	function zooms() {
		$("body").css("zoom", nowZoom + "%");
	}
	
	// (7-3)알림판선택
	let bannerAlldd = $("#roll_banner_wrap dd");
	let banner = $("#roll_banner_wrap > dl > dt > a > img");
	banner.click(function() {
		let src = banner.filter("[src*='over']");
		src.attr("src", src.attr("src").replace("over", "out"));
		$(this).attr("src", $(this).attr("src").replace("out", "over"));
		
		bannerAlldd.hide();
		$(this).parents("dt").next().show();
	});
	
	// (7-4) 로그인폼의 아이디, 비밀번호 포커스가면 힌트 안보이고 포커스 풀리면 힌트 보이기
	$("#user_id").focus(function(){
		// 아이디에 포커스 됐을 때 글씨가 없다면 힌트 지우기
		if($("#user_id").val() == "") {
			$("p.user_id img").remove();
		}
    }).blur(function() {
		// 아이디에 포커스가 빠질 때 글씨가 없다면 힌트 생성
		if($("#user_id").val() == "") {
			$("<img>").attr("src", "images/login_title_id.gif").appendTo("p.user_id > label");
		}
	});
	$("#user_pw").focus(function(){
		// 비밀번호에 포커스 됐을 때 글씨가 없다면 힌트 지우기
		if($("#user_pw").val() == "") {
			$("p.user_pw img").remove();
		}
    }).blur(function() {
		// 비밀번호에 포커스가 빠질 때 글씨가 없다면 힌트 생성
		if($("#user_pw").val() == "") {
			$("<img>").attr("src", "images/login_title_pw.gif").appendTo("p.user_pw > label");
		}
	});
});

