var flag = 1;
$('#floatbg').click(function(){
	online();
});
// 滑动滚动条
$(window).scroll(function(){
	$(window).scrollTop() >= 200 ? $(".toTop").show() : $(".toTop").hide();
});
function online() {
	if(flag==0){
		$("#floatDivBoxs").animate({right: '-250px'},300);
		$("#rightArrow").animate({right: '0px'},300);
		$("#rightArrow").css('background-position','-50px 0');
		$("#floatbg").hide();
		$("#rightNav").css('display','block');
		flag=1;
	}else{
		$("#floatDivBoxs").animate({right: '0'},300);
		$("#rightArrow").animate({right: '220px'},300);
		$("#rightArrow").css('background-position','0px 0');
		$("#floatbg").show();
		$("#rightNav").css('display','none');
		flag=0;
	}
}
function goNav(div) {
	var  h = $(div).offset().top;
	$('body,html').animate({ scrollTop: h },500);
}