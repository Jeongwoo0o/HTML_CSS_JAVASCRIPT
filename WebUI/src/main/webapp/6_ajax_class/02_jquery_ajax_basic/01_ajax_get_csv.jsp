<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<script  type="text/javascript"  src="libs/jquery-1.9.1.min.js"> </script>
<script type="text/javascript">
	$(function() {
		let param = { cate : "book", name : "kim" };
		
		// 비동기통신 (ajax)
		// 화면은 가만히 있는 상태에서 서버에 요청하고 그 결과를 받아오기
		$.ajax({
			type	: "get",			// 명확하게 지정할 것!
			url 	: "02_server.jsp",
			data 	: param,
			success : parseData,
			error	: function() {
				alert("에러발생");
				console.log(err);
			}
		});
		
		// $.get("02_server.jsp", param, parseData);	// ajax 축약형 (권장 X)
		
		//7. CSV포맷  데이터 처리.
		function parseData(strText){
			// alert( strText );
			var aryData = strText.split("|");
						
			for(var i=0;i<aryData.length;i++){
				var param  = aryData[i].split("=");				
				if( param[0].trim() == 'cate'){  // 공백제거를 하지 않으면 처음에 공백에 들어와서 cate를 찾지 못함
					 document.getElementById("cate").value = param[1];
				}
				
				if( param[0].trim() == 'name'){
					document.getElementById("name").value = param[1];
				}
			}
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


