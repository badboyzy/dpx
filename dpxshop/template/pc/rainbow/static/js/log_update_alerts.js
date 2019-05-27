
(function($) {
    // cookie操作
    function  cookie(){
    }
    cookie.prototype = {
        addCookie : function(name,value,hours,path,domain,secure){
            var cdata = name + "=" + value;
            if(hours){
                var d = new Date();
                d.setHours(d.getHours() + hours);
                cdata += "; expires=" + d.toGMTString();
            }
            cdata +=path ? ("; path=" + path) : "" ;
            cdata +=domain ? ("; domain=" + domain) : "" ;
            cdata +=secure ? ("; secure=" + secure) : "" ;
            document.cookie = cdata;
        },
        getCookieValue:function(name){  /**获取cookie的值，根据cookie的键获取值**/
        //用处理字符串的方式查找到key对应value
        var name = escape(name);
            //读cookie属性，这将返回文档的所有cookie
            var allcookies = document.cookie;
            //查找名为name的cookie的开始位置
            name += "=";
            var pos = allcookies.indexOf(name);
            //如果找到了具有该名字的cookie，那么提取并使用它的值
            if (pos != -1){                                  //如果pos值为-1则说明搜索"version="失败
                var start = pos + name.length;               //cookie值开始的.位置
                var end = allcookies.indexOf(";",start);     //从cookie值开始的位置起搜索第一个";"的位置,即cookie值结尾的位置
                if (end == -1) end = allcookies.length;      //如果end值为-1说明cookie列表里只有一个cookie
                var value = allcookies.substring(start,end); //提取cookie的值
                return (value);                              //对它解码
            }else{  //搜索失败，返回空字符串
                return "";
            }
        },
        removeCookie:function(name,path,domain){
            this.addCookie(name,"",-1,path,domain);
        }
    }

    // 判断是否有更新
    var setCookie = new cookie();
    var remindState = setCookie.getCookieValue("remind");
    if(remindState){
        $('.remind').hide();  // 保存cookie后不显示提醒按钮
    }else{
        $.ajax({
            'url': "/changelogapi/getremind",
            'type': "POST",
            'dataType': "json",
            'success': function (data) {
                if(data.info.list.create_time){
                    $('.changelog').attr('href',data.info.list.url);  // 无记录过用户操作log才可显示
                    $('.remind').show();
                }else{
                    $('.remind').hide();  // 已记录过用户操作log的不显示第二次
                }
            }
        });
    }

    $('.remind').click(function(){
        if (isLogin()) {
            $.ajax({
                'url': "/changelogapi/addrecord",
                'type': "POST",
                'dataType': "json",
                'success': function (data) {
                    if(data.info.list){
                        // 对登录用户进行记录，如已记录则不再写入
                        var setCookie = new cookie();
                        setCookie.addCookie("remind","stated",11*24);
                        $('.remind').hide();
                    }
                }
            });
        }else{
            // 对于未登录用户，不写库，只写cookie隐藏点击记录事件
            var setCookie = new cookie();
            setCookie.addCookie("remind","stated",10*24);
            $('.remind').hide();
        }
    });
})(jQuery);




