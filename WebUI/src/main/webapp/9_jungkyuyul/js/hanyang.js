$(function(){
  var totalPrice = 0; // 총 가격 전역 변수로 이동

  $('.menuCount').change(function() {
    var nameTd = $(this).closest(".menu");
    var priceTd = $(this).closest(".menu");
    var menuId = nameTd.find(".mname").attr("value");
    var count = parseInt($(this).val());
    var price = priceTd.find(".mprice").attr("value");
    createTable(menuId, count, price);
    totalp += price * count;
    $("#total").val(totalp);
  });

  $('#btn').click(function() {
    alert('총 주문 금액은 ' + totalPrice + '원입니다.'); // 총 주문 금액을 totalPrice 변수로 변경
  });
  
  $("#listTable").on("click", ".btn", function() {
    var tr = $(this).closest("tr");
    var count = parseInt(tr.find("td:eq(1)").text()); // 갯수를 정수로 변환
    var price = parseInt(tr.find("td:eq(2)").text()); // 가격을 정수로 변환
    totalPrice -= count * price;
    $('#total').val(totalPrice); // 텍스트로 설정
    tr.remove();
  });
});

function updateTotal() {
  totalPrice += totalp; // 총 가격에 새로운 메뉴의 총 가격을 추가
  $("#total").val(totalPrice);
}

function createTable(menuId, count, price) {
  var tr = $("<tr></tr>");
  tr.append("<td>" + menuId + "</td>");
  tr.append("<td>" + count + "</td>");
  tr.append("<td>" + price + "</td>");
  tr.append("<td><input type='button' class='btn' value='삭제'/></td>");
  $("#listTable").append(tr);
}