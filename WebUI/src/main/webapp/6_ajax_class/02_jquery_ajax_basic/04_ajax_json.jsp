<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title></title>
<script  type="text/javascript"  src="libs/jquery-1.9.1.min.js"> </script>
<script>
	$(function() {
		// 서버로 보낼 데이터
		let param = { cate : "book", name : "kim" };
		
		// 비동기방식으로 서버 전송
		$.ajax({
			type		: "get",
			data		: param,
			url			: "04_server.jsp",	// 서버로 보내는 데이터
			dataType	: "text",			// 응답데이터 종류(text/html/xml/json...)
		// 추후에는 여기 "json"이여야 함
		// json 변환 라이브러리 필요!!!!
			success 	: parseData
		});
	
		function parseData(result) {
			alert(result);
			
			// 추후에는 json 변환 라이브러리 필요
			// 지금은 편법으로 json 객체를 만들어 봄
			var obj = {};
			obj = eval("(" +result+ ")");
			
			$("#cate").val(obj.first);
			$("#name").val(obj.second);
		}
	});
</script>
</head>

<body>
서버로부터 넘겨받은 데이터<br/>
첫번째 데이터 : <input type="text" name="" id="cate"/><br/>
두번째 데이터 : <input type="text" name="" id="name"/><br/>
</body>
</html>


