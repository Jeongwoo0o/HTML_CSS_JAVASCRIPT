window.onload = function() {
	let item = document.querySelectorAll(".item");
	
	let st = [item.length];
	for(let i = 0; i < item.length; i++) {	// 메뉴별 선택 수량을 위한 변수 (0으로 채움)
		st[i] = 0;
	}
	
	for(let i = 0; i < item.length; i++) {
		item[i].onclick = function() {
			let menuname 	= this.getAttribute("data-name");
			let menuprice 	= this.getAttribute("data-price");
			st[i]++;			// 메뉴 선택 시, 수량 카운트
			let menuamount	= st[i];
			
			if(st[i] <= 1) {	// 주문이 없을 때, 테이블 데이터 추가
				insertOrder(menuname, menuamount, menuprice);
			} else {			// 주문이 있을 때, 테이블 데이터 업데이트
				updateAmount(menuname, menuamount, menuprice);
			}
			totalPrice();
		}
	}
 }
 
 // 주문테이블 추가 함수
 function insertOrder(menuname, menuamount, menuprice) {
	let orderlist 	= document.querySelector("#orderlist");
	let tr			= document.createElement("tr");
	let td1			= document.createElement("td");
	let td2			= document.createElement("td");
	let td3			= document.createElement("td");
	
	let txt1		= document.createTextNode(menuname);
	let txt2		= document.createTextNode(menuamount);
	let txt3		= document.createTextNode(menuprice);
	
	td1.appendChild(txt1);
	td2.appendChild(txt2);
	td3.appendChild(txt3);
	
	tr.appendChild(td1);
	tr.appendChild(td2);
	tr.appendChild(td3);
	
	tr.classList.add("newitem");
	
	orderlist.appendChild(tr);
 }
 
 // 수량, 가격 업데이트 함수
 function updateAmount(menuname, menuamount, menuprice) {
	 let orderlist 	= document.querySelector("#orderlist");
	 let row		= orderlist.querySelectorAll("tr");
	 
	 for(let i = 0; i < row.length; i++) {
		 if(row[i].querySelector("td:first-child").textContent === menuname) {
			 row[i].querySelector("td:nth-child(2)").textContent = menuamount;
			 row[i].querySelector("td:nth-child(3)").textContent = (menuprice * menuamount);
			 break;
		 }
	 }
 }
 
 // 총 가격 함수
 function totalPrice() {
	let orderlist 	= document.querySelector("#orderlist");
	let row			= orderlist.querySelectorAll("tr");
	let totalprice 	= 0;
	
	for(let i = 1; i < row.length; i++) {
		let price = row[i].querySelector("td:nth-child(3)").textContent;
		totalprice += parseInt(price);
	}
	document.querySelector(".totalprice").textContent = totalprice;
 }