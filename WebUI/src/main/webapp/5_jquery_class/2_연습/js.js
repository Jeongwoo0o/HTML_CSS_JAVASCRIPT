$(function() {
	$("#bInsert").on("click", function() {
		let name 	= $("#name").val();
		let age 	= $("#age")	.val();
		let tel 	= $("#tel")	.val();
		let addr 	= $("#addr").val();
		let tr		= $("<tr></tr>");
		tr.append("<td>"+name+"</td>");
		tr.append("<td>"+age+"</td>");
		tr.append("<td>"+tel+"</td>");
		tr.append("<td>"+addr+"</td>");
		tr.append("<td><input type='button' class='dButton' value='삭제'/></td>");
		$("#listTable").append(tr);
		
		$("#listTable").css({
			textAlign:"center"
		});
		
		
	});
	$("#listTable").on("click", ".dButton", function() {
		// $(this).closest("tr").remove();
		$(this).parents("tr").remove();
	});
});