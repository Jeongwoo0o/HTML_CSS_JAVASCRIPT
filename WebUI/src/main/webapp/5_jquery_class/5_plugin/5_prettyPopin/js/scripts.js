$(function() {
	// 첫번째 <a>에 prettyPopin() 호출
	$("a[rel='prettyPopin']:eq(0)").prettyPopin({
		width:500
	});
	
	// 두번째 <a>에 prettyPopin() 호출
	$("a[rel='prettyPopin']:eq(1)").prettyPopin({
		width:500,
		callback:function(){
			
		}
	});
});