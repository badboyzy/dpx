(function(){
	$(".header-qrcode-box").hover(function(){
		$(".header-qr-code").show();
		$(this).find(".header-btn-down").attr("src", "/static/pc/images/header/up.png");
	}, function(){
		$(".header-qr-code").hide();
		$(this).find(".header-btn-down").attr("src", "/static/pc/images/header/down.png");
	});
	$(".header-mydihe").on("mouseenter", function(){
		$(".header-mydihe-nav").show();
		$(this).find(".header-btn-down").attr("src", "/static/pc/images/header/up.png");
	});
	$(".header-mydihe").on("mouseleave", function(){
		$(".header-mydihe-nav").hide();
		$(this).find(".header-btn-down").attr("src", "/static/pc/images/header/down.png");
	})

	$("._ivr_button").click(function(){
		$("#chatBtn").click();
	});
})()

//导航高亮
$(".nav_header_common .nav_header_main ul li").each(function(i){
    var obj = $(this);
    var url = $(this).find('a').attr("href");
    url = url.replace(/\//g,'');
    if(_target.indexOf(url) > 0 ){
            obj.addClass('active');
    }
    if ( _target == '/index' && i==0 ) {
            obj.addClass('active');
    }
});

//下拉菜单 没有登录跳转到登录页面
$('.header-component').click(function(){
    if ( !isLogin() ) {
        if ( typeof(indexDomain)=='undefined' ) {
            var url = '/login'; 
        } else {
            var url = indexDomain + '/login'; 
        }
            window.location.href = url; 
            return false;
    }

});

//统计导航点击数
$("#webNav a").click(function(){
    var id = $(this).data('id');
    var href = $(this).attr('href');
    $.get("/headnavapi/clickcount", { id: id }, function(data){
//       window.open(href);
    });
//    return false;
});
