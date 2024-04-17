$(function() {
	let topDiv 		= $(".tabSet");
	let anchors 	= topDiv.find("ul.tabs > li > a");
	let panelDivs 	= topDiv.find("div.panel");
	
	anchors.css({ "cursor":"pointer" });
	anchors.show();
	panelDivs.hide();
	
	
	let lastAnchor 	= anchors.filter(".on");
	// console.log(lastAnchor.attr("href"));
	// console.log($(lastAnchor.attr("href")));
	// [참고]
	// $("#아이디") => $("#panel1-1")
	
	let lastPanel	= $(lastAnchor.attr("href"));
	lastPanel.show();
	
	anchors.click(function(e) {
		e.preventDefault();
		
		let currentAnchor 	= $(this);
		let currentPanel	= $(currentAnchor.attr("href"));
		
		lastPanel	.hide();
		currentPanel.show();
		
		lastAnchor		.removeClass("on");
		currentAnchor	.addClass("on");
		
		lastAnchor 	= currentAnchor;
		lastPanel	= currentPanel;
	});
});