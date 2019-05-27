//jq地区选择jq版本必须1.9以上

$.extend({
	areaChoose: function(options) {
		var _self = options.el;
		var Hyphen=options.Hyphen;
		var callback=options.callback;
		var defaultdata=options.defaultdata || "";
		var closefunction=options.close;
		var eachclickfunction=options.eachclick;
		var defaultdatanum=1;
		if($(".area_choose")) {
			$(".area_choose").remove();
		}
		var str = '<div class="area_choose">' +
			'<ul id="" class="area_choose_title clearfix">' +
			'<li class="active">省份</li><li>城市</li><li>区县</li><li class="btn-cancel">&times;</li>' +
			'</ul>' +
			'<ul class="area_choose_content">' +
			'<li class="clearfix"></li><li class="clearfix"></li><li class="clearfix"></li>' +
			'</ul>' +
			'</div>';
		$("body").append(str);
		options.before();

		function createspan(data) {
			var html = '';
			for(var i = 0; i < data.length; i++) {
				html += "<span data='" + data[i].id + "'>" + data[i].name + "</span>";
			}
			return html;
		}
		function ajaxgetdata(obj,dataid) {
			var data={"id":dataid}
//			var num=2;
			$.ajax({
				url: "http://dihe.cn/regionapi/linkage",
				data: data,
				dataType: "jsonp",
				success: function(data) {
					$(obj).html(createspan(data));
					if(defaultdata!=""&&defaultdatanum<=3){
						
						var dataid=defaultdata.substring(0,defaultdatanum*2);
						if(dataid==11||dataid==12||dataid==31||dataid==50){
							
							$(obj).find("span").each(function(index,key){
								if($(this).attr("data")==dataid){
									$(this).trigger("click");
								}
							})
							defaultdatanum+=2;
						}else{
							var dataid=defaultdata.substring(0,defaultdatanum*2);
							$(obj).find("span").each(function(index,key){
								if($(this).attr("data")==dataid){
									$(this).trigger("click");
								}
							})
							defaultdatanum++;
						}
						// console.log(dataid)
						var index=$(obj).index();
						
						// console.log(index);
					}
				}
			})
		};
		ajaxgetdata(".area_choose_content li:eq(0)","0") ;
		$(".area_choose_title li").not(".btn-cancel").on("click", function() {
			//头部选择事件
			var index = $(this).index();
			$(this).addClass("active").siblings().removeClass("active");
			$(".area_choose_content li").hide().eq(index).show();
		});

		$(_self).on("click", function() {
			//触发显示
			$(".area_choose").show();
			var _selfleft = $(_self).offset().left;
			var _selftop = $(_self).offset().top;
			var _selfheight = $(_self).outerHeight();
			$(".area_choose").css({
				"left": _selfleft,
				"top": _selftop + _selfheight
			})
		});
		var choosetext1="";
		var choosetext2="";
		var choosetext3="";
		var dataid1=null;
		var dataid2=null;
		var dataid3=null;
		$(".area_choose_content li:eq(0)").on("click", "span", function() {
			////第一级选择事件
			$(this).addClass("active").siblings().removeClass("active");
			var data = $.trim($(this).attr("data"));
			dataid1=data;
			var text=$.trim($(this).text());
			choosetext1=text;
			$(_self).val(text);
			//北京-上海-天津-重庆特殊化
			if(data==11||data==12||data==31||data==50){
				ajaxgetdata(".area_choose_content li:eq(2)",data);
				$(".area_choose_title li").eq(2).trigger("click");
				$(".area_choose_content li:eq(1)").html("");
				choosetext2="";
				dataid2=null;
				dataid3=null;
				choosetext3="";
			}else{
				ajaxgetdata(".area_choose_content li:eq(1)",data);
				$(".area_choose_title li").eq(1).trigger("click");
				$(".area_choose_content li:eq(2)").html("");
				choosetext2="";
				dataid2=null;
				dataid3=null;
				choosetext3="";
			}
			eachclickfunction(text,data)
		});
		
		$(".area_choose_content li:eq(1)").on("click", "span", function() {
			////第二级选择事件
			$(this).addClass("active").siblings().removeClass("active");
			var data = $.trim($(this).attr("data"));
			var text=$.trim($(this).text());
			choosetext2=text;
			dataid2=data;
//			console.log(data);
			ajaxgetdata(".area_choose_content li:eq(2)",data);
			$(_self).val(choosetext1+Hyphen+text);
			$(".area_choose_title li").eq(2).trigger("click");
			choosetext3="";
			dataid3=null;
			eachclickfunction(text,data)
		});
		
		$(".area_choose_content li:eq(2)").on("click", "span", function() {
			////第三级选择事件
			$(this).addClass("active").siblings().removeClass("active");
			var data = $.trim($(this).attr("data"));
			dataid3=data;
			var text=$.trim($(this).text());
			eachclickfunction(text,data)
			choosetext3=text;
			if(dataid1==11||dataid1==12||dataid1==31||dataid1==50){
				$(_self).val(choosetext1+Hyphen+choosetext3);
			}else{
				$(_self).val(choosetext1+Hyphen+choosetext2+Hyphen+choosetext3);
			}

			$(".area_choose").hide();
			callback(text,data);
		});
		$(".area_choose_title .btn-cancel").on("click",function(){
			$(this).parent().parent().hide();
			closefunction(choosetext1,choosetext2,choosetext3,dataid1,dataid2,dataid3);
		})
	}
});