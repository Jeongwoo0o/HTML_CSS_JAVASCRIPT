<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title></title>
<script  type="text/javascript"  src="libs/jquery-1.9.1.min.js"> </script>
<script type="text/javascript">
	$(function() {
		// 서버로 보낼 데이터
		let param = { cate : "book", name : "kim" };
		
		// 비동기방식으로 서버 전송
		$.ajax({
			type		: "get",
			data		: param,
			url			: "03_server.jsp",	// 서버로 보내는 데이터
			dataType	: "xml",			// 응답데이터 종류(text/html/xml/json...)
			success 	: parseData
		});
	
		function parseData(result) {
			alert(result);
			$("#cate").val( $(result).find("first").text() );
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


