$(function() {
	$("#menutable img")	.css({ "cursor":"pointer" });
	$(".btn")			.css({ "cursor":"pointer" });
    $("#menutable .item").on("click", function() {
        let name 	= $(this).attr("data-name");
        let price 	= $(this).attr("data-price");
        let amount	= 1;
        // 이미 주문된 메뉴인지 확인
        let existingOrder = $("#orderlist td:first-child").filter(function() {
            return $(this).text() === name;
        }).closest("tr");

        if (existingOrder.length > 0) {
            // 이미 주문된 메뉴인 경우 수량과 가격을 수정
            let existingAmount = parseInt(existingOrder.find("td:nth-child(2)").text());
            let newAmount = existingAmount + amount;
            let newPrice = price * newAmount;
            existingOrder.find("td:nth-child(2)").text(newAmount);
            existingOrder.find("td:nth-child(3)").text(newPrice);
        } else {
            // 새로운 주문인 경우 행 추가
            insertOrder(name, amount, price);
        }
        updateTotal();
    });

    $("#orderlist").on("click", ".btn", function() {
        $(this).parents("tr").remove();
        updateTotal();
    });
    
    $('.bxslider').bxSlider({
		  minSlides: 1,
		  maxSlides: 4,
		  slideWidth: 216,
		  slideMargin: 10,
		  ticker: true,
		  speed: 5000
	});
});

function updateTotal() {
    let total = 0;
    $("#orderlist td:nth-child(3)").each(function() {
		total += parseInt($(this).text());
	})
    
    $(".pricetable .totalprice").text(total);
}

function insertOrder(name, amount, price) {
    let tr = $("<tr></tr>");
    tr.append("<td>" + name + "</td>");
    tr.append("<td>" + amount + "</td>");
    tr.append("<td>" + (price * amount) + "</td>");
    tr.append("<td><input type='button' class='btn' value='삭제'/></td>");
    $("#orderlist")	.append(tr);
    $(".btn")		.css({ "cursor":"pointer" });
}