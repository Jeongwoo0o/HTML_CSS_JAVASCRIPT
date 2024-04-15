/**
 * 
 */

 window.onload = function() {
	var item = document.querySelectorAll(".item");
	 
	for(var i = 0; i < item.length; i++) {
		item[i].onclick = function() {
			alert("OK");
			var price = this.getAttribute("data-price");
		 	alert(price);
		}
	}
 }