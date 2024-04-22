<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<script  type="text/javascript"  src="libs/jquery-1.9.1.min.js"> </script>
<script type="text/javascript">
	$(function() {
		let param = { cate : "book", name : "kim" };
		
		$.ajax({
			type 	: "post",
			data	: param,
			url		: "02_server.jsp",
			success	: function(result) {
				alert(result);
				var aryData = result.split("|");
				for(var i = 0; i < aryData.length; i++){
					var keyValue = aryData[i].split("=");
					if(keyValue[0].trim() == "cate") {
						$("#cate").val(keyValue[1]);
					}
				}
			},
			error	: function() {
				alert("서버전송 실패");
			}
		});
	});
</script>

</head>


<body>
서버로부터 넘겨받은 데이터<br/>
첫번째 데이터 : <input type="text" name="" id="cate"/><br/>
두번째 데이터 : <input type="text" name="" id="name"/><br/>
</body>
</html>


