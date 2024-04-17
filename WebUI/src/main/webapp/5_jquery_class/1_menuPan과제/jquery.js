$(function() {
	$(".menus > td > img").on("click", function() {
		let name 	= $(this).next().next().attr("value");
		let amount	= $(this).parent().find(".menuCount").val();
		let price 	= $(this).next().next().next().attr("value");
		
		// 이미 주문된 메뉴인지 확인
		let exOrder = $("#listTable td:first-child").filter(function() {
			return $(this).text() === name;
		}).parent("tr");
		
		insertOrder(name, amount);
		totalPrice(price, amount);
		
		$("#listTable").on("click", ".dButton", function() {
			$(this).parents("tr").remove();
		});
	});
});

function totalPrice(price, amount) {
	let currentTotal 	= parseInt($("#total").val() || 0);
	let orderPrice		= parseInt(price) * parseInt(amount);
	let updateTotal		= currentTotal + orderPrice;
	$("#total").val(updateTotal);
}

function insertOrder(name, amount) {
	let tr		= $("<tr></tr>");
		
	tr.append("<td>"+name+"</td>");
	tr.append("<td>"+amount+"</td>");
	tr.append("<td><input type='button' class='dButton' value='삭제'/></td>");
	$("#listTable").append(tr);
}