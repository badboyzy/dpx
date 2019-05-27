(function() {

    //地区选择插件初始化
    $("._entrust_region").areaSelect({
        max_code_len : 6,
        after_selected: function() {}, 
        show_result: function() {
            var self = this;
            var $self = $(self);
            $self.val("");
            var paths = self.getPaths();
            for (var i = 0; i < paths.length; i++) {
                $self.val($self.val() + paths[i].name + " ");
            }
            if (self.selectItem) {
                $self.val($self.val() + self.selectItem.name);
            }
            $("[name=region_code]").val(self.selectItem.id);
            syncGoogleMap($self.val());
        }
    });
    
    //同步google的经纬度和地址，用于地图标注定位
    function syncGoogleMap(val) {
        if(val==='全国'){return;}
        var lat_input = $('input[name="gcj_lat"]');
        var lng_input = $('input[name="gcj_lng"]');
        var coordinates_input = $("input[name='coordinates']");
        val = val.split(' ', 4);
        var last_val = val.pop();
        last_val = last_val.replace('村民委员会', '村').replace('村委会', '村');
        val = val.join('') + last_val;
        $('._googleMap').data('address', val);
        $.ajax({
            url: 'http://www.google.cn/maps/api/geocode/json',
            dataType: "json",
            data: {
                address: val,
            },
            success: function(result) {
                if (result.status === 'OK') {
                    var address = result.results.shift();
                    var location = address.geometry.location;
                    lat_input.val(location.lat);
                    lng_input.val(location.lng);
                }
                return;
            },
        });
        coordinates_input.val('');
    }
    
    //自动生成描述
    $("#shengcheng").on("click", function() {
        // alert();
        var diqu = $(".areaChoose").val().replace(/-/,"");
        var mianji = $("#Area_mu").val();
        var year = $("input[name='remaining_year']").val();
        var transfer_fee = $("input[name='transfer_fee']").val();
        var rent_fee = $("input[name='rent_fee']").val();
        var input_style_val=$(".input_style .active input").val();
        var mianyichecked=$("#price").is(":checked");
        if(input_style_val>3 || mianyichecked){
            transfer_fee="";
            rent_fee="";
        }

        var address = $("input[name='address']").val();
        
        var str = '';
        var str1= '';
        if(diqu != ''){
            str += diqu + $.trim($("input[name='transfer']:checked").parent().text()) + '\r\n'+"<br>";
            str1 += diqu + $.trim($("input[name='transfer']:checked").parent().text()) + '\r\n';
        }
        if(mianji != ''){
            str += '面积：' + mianji + $("input[name='area_unit']").val() + '\r\n'+"<br>";
            str1 += '面积：' + mianji + $("input[name='area_unit']").val() + '\r\n';
        }
        if(year != ''){
            str += '可流转年限：' + year + '年\r\n'+"<br>";
            str1 += '可流转年限：' + year + '年\r\n';
        }
        if(transfer_fee != ''){
            str += '转让费：'+transfer_fee+'万元\r\n'+"<br>";
            str1 += '转让费：'+transfer_fee+'万元\r\n';
        }else{
            str += '转让费：面议\r\n'+"<br>";
            str1 += '转让费：面议\r\n';
        }
        if(rent_fee != ''){
            str += '租金：'+rent_fee+'元/'+$("input[name='area_unit']").val()+'/年\r\n'+"<br>";
            str1 += '租金：'+rent_fee+'元/'+$("input[name='area_unit']").val()+'/年\r\n';
        }else{
            str += '租金：面议\r\n'+"<br>";
            str1 += '租金：面议\r\n';
        }
        if(address != ''){
            str += '地址：'+address+'\r\n'+"<br>";
            str1 += '地址：'+address+'\r\n';
        }
        
        $("#block_ass_in_text").html(str);
        $("textarea[name='content']").val(str1);
        $("#block_ass_in_text").trigger("blur");

    });
    // 谷歌地图标注
    $('._googleMap').googleMap({
        callback : function() {
            var area = this.GetArea(this.myField);
            $('._area_tips').html('');
            if (area > 0) {
                var tips = '面积参考：' + area + ' 亩';
                $('._area_tips').html(tips);
            }
            $('#supply_form').data('bootstrapValidator').revalidateField('coordinates');
            $('#supply_form').bootstrapValidator('revalidateField', 'coordinates');
        }
    });
    //防止supply_form表单提交
    $("#supply_form").on("click","button",function(){return false});
    // // 地区选择插件初始化
    // $("._user_entrust_region_selector").areaSelect({
    //     after_selected : function() {
    //         // console.log("ok");
    //     },
    //     show_result : function() {
    //         var self = this;
    //         var $self = $(self);
    //         $self.val("");
    //         var paths = self.getPaths();
    //         for (var i = 0; i < paths.length; i++) {
    //             $self.val($self.val() + paths[i].name + " ");
    //         }
    //         if (self.selectItem) {
    //             $self.val($self.val() + self.selectItem.name);
    //         }
    //         $(this).next("input").val(self.selectItem.id);
            
    //     },
    //     sumit : function() {
    //         var self = this;
    //         self.show_result()
    //         self.close();
    //     }
    // });
    
    // })
    $.areaChoose({
        "el":".areaChoose",//目标
        "Hyphen":"-",//连字符
        "defaultdata":null,//默认值比如"360726"
        "close":function(text1,text2,text3,data1,data2,data3){
            // 点击关闭时返回的数据
        },
        "before":function(){
            
        },
        "eachclick":function(text,data){
            // 每一次选择数据
            $("#planaddress").val(data);
            $(".areaChoose").trigger("blur");
            // syncGoogleMap($(".areaChoose").val().replace(/-/g," "));
        },
        "callback":function(text,data){  
            //最后返回数据
            $("#planaddress").val(data);
            $(".areaChoose").trigger("blur");
            syncGoogleMap($(".areaChoose").val().replace(/-/g," "));
        }
    })
    // 当选择入股、互换、挂招牌 费用为面议显示租金转让费隐藏
    $(".consult").click(function() {
        $(".block_hide").hide();
        $("input[name='transfer']").prop('checked', false);
        $(this).children('input').prop('checked', true);
        $("input[name='mianyi']").prop('checked', true);
        // $(".block_ass_img").css("background", "url(/static/pc/images/two_merge/my.png");
        $(".fy_show").show();
    })
    $(".consult_hide").click(function() {
        $(".fy_show").hide();
        $("input[name='transfer']").prop('checked', false);
        $(this).children('input').prop('checked', true);
        $("input[name='mianyi']").prop('checked', false);
        // $(".block_ass_img").css("background", "url(/static/pc/images/two_merge/m.png");
        $(".block_hide").show();
    })

    var bol = true;
    $(".block_ass_img").click(function() {
        if (bol) {
            $(this).children('input').prop("checked", true);
            $(this).addClass("block_ass_img_active");
            bol = !bol;
            $("#block_prop ,#input_prop").prop("disabled" , true).val("");             
        } else {
            $(this).children('input').prop("checked", false);
            $(this).removeClass("block_ass_img_active")
            bol = !bol;
            $("#block_prop ,#input_prop").prop("disabled" , false);
        }
    });
    (function() {
        var id_arr = [];
        var zhi = null;
        $("#block_area_change").on("click", function() {
            var text = $(this).prev().text();
            if (text == "亩") {
                $(".alert-message-mu").show();
            } else {
                $(".alert-message-mi").show();
            }

        });

        // 下拉框选择单位事件
        $(".alert-message").on("click", ".alert-select-ul li", function() {
            var index = $(this).index();
            var text = $(this).text();
            $(this).parent().parent().find(".Company").text(text);
        });
        // 隐藏下拉框事件
        $(".alert-message").on("click", function() {
            $(this).find(".alert-select-ul").hide();
        })
        // 下拉框触发事件
        $(".alert-message .alert-select").on("click", function(event) {
            var display = $(".alert-select-ul").css("display")
            if (display == "block") {
                $(".alert-select-ul").hide();
                event.stopPropagation();
            } else {
                $(".alert-select-ul").show();
                event.stopPropagation();
            }
        });
        // 确定事件
        $(".alert-message .message-ensure").on("click", function() {
            var index = $(this).index(".alert-message .message-ensure")
            $("#Area_mu").val(zhi);
            $(".alert-message").eq(index).hide();
            $("#Area_mu").trigger("blur")
        })
        // input输入值转换亩单位事件
        $(".alert-message-mu .alert-input").on("input propertychange", function() {
            var val = $.trim($(this).val());
            var text = $(this).next().find(".Company").text();
            if (isFinite(val) && val) {
                if (text == "平方米") {
                    zhi = (val * 0.0015).toFixed(4);
                    $(this).parent().parent().find(".message-change").text(val + "平方米(㎡)=" + zhi + "亩")
                } else {
                    zhi = (val * 15).toFixed(4);
                    $(this).parent().parent().find(".message-change").text(val + "(公顷ha)=" + zhi + "亩")
                }
            }
        });
        // input输入值转换平方米单位事件
        $(".alert-message-mi .alert-input").on("input propertychange", function() {
            var val = $.trim($(this).val());
            var text = $(this).next().find(".Company").text();
            if (isFinite(val) && val) {
                if (text == "亩") {
                    zhi = (val * 667).toFixed(0);
                    $(this).parent().parent().find(".message-change").text(val + "亩=" + zhi + "平方米(㎡)")
                } else {
                    zhi = (val * 10000).toFixed(0);
                    $(this).parent().parent().find(".message-change").text(val + "(公顷ha)=" + zhi + "平方米(㎡)")
                }
            }
        });// 删除弹窗事件
        $(".alert-message .alert-del").on("click", function() {
            $(this).parent().parent().parent().hide();
        });
        //页面弹回上传图片栏
        $("#supplement").on("click", function() {
            $('html, body').animate({  
                scrollTop: $("#aa").offset().top  
            }, 1000); 
        });
        //提交表单
        $("#fabu").on("click", function() {
            $("#supply_form").submit();
        });
        // 补充图片点击事件
        $(".alert-message .alert-option").on("click", function() {
            $(".alert-message-photo").hide();
        });
        // 继续发布事件
        $(".alert-message .alert-option").on("click", function() {
            $(".alert-message-photo").hide();
        })
        // 单选事件
        $(".block_bar_type").click(function() {
            $(this).addClass("active").siblings().removeClass("active")
        })

        
        $(".alert-message .message-ensure1").on("click",function() {
            $(this).parent().parent().parent().hide();
        });
        $(document).on("keydown",function(e){
            var e=e||window.event;
            var display=$(".alert_error_tips").css("display");
            if(display!="none"){
                $(".alert_error_tips").hide();
            }
        });

        $(".img-upload img").on("click", function() {
            $("#img-upload").trigger("click");
        });

        $("#img-upload").fileupload(
                {
                    dataType : 'json',
                    type : "POST",
                    url : '/accessoryapi/addnologin',
                    beforeSend:function(e){
                        if(id_arr.length<10){
                            var html12 = '<div class="photo_list_img loadload"><img width="100%" src="/static/script/common/plupload/js/jquery.ui.plupload/img/loading.gif">'+'</div>';
                            $(".photo_list .photo_list_img:last").before(html12);
                        }

                    },
                    done : function(e, data) {
                        if (data.result.label == "success") {
                            if(id_arr.length<10){
                                var imga=new Image();
                                imga.onload=function(){
                                    $(".photo_list").find(".loadload").eq(0).remove();
                                    if(id_arr.length==0){
                                        var html = '<div class="photo_list_img"><img width="100%" src="' + data.result.info.file.file_url + '">' + '<div class="photo_list_img_del">'
                                                + '<img src="/static/pc/images/two_merge/del.png" alt="">' + '</div>'
                                                +'<div class="photo_list_img_setcover  photo_list_img_cover photo_list_img_setcoverno">设为封面</div>'
                                                +'<div class="photo_list_img_coverok photo_list_img_cover" style="display:block;">封面</div>'
                                                +'</div>';
                                         $(".photo_list .photo_list_img:last").before(html);    
                                        id_arr.push(data.result.info.file.id);
                                        var id_val = id_arr.join();
                                        $("#files_id").val(id_val);
                                    }else if(id_arr.length<10){
                                        var html = '<div class="photo_list_img"><img width="100%" src="' + data.result.info.file.file_url + '">' + '<div class="photo_list_img_del">'
                                                + '<img src="/static/pc/images/two_merge/del.png" alt="">' + '</div>'
                                                +'<div class="photo_list_img_setcover  photo_list_img_cover">设为封面</div>'
                                                +'<div class="photo_list_img_coverok photo_list_img_cover">封面</div>'
                                                +'</div>';
                                        $(".photo_list .photo_list_img:last").before(html);    
                                        id_arr.push(data.result.info.file.id);
                                        var id_val = id_arr.join();
                                        $("#files_id").val(id_val);
                                    }
                                }
                                imga.src=data.result.info.file.file_url;
                            }
                            else{
                                $(".photo_list").find(".loadload").remove();
                                errorTips("图片上传不能超过十张");

                            }     
                        }else{
                            $(".photo_list").find(".loadload").remove();
                            errorTips(data.result.brief);
                        }
                    }
                });
        $(".photo_list").on("click", ".photo_list_img_del", function() {
            var index = $(this).index(".photo_list .photo_list_img_del");
            $(this).parent().remove();
            var spliceval=id_arr.splice(index, 1);
            var id_val = id_arr.join();
            $("#files_id").val(id_val);
            if(spliceval[0]==$("#cover").val()){
                $("#cover").val("");
            }
        })
        $(".photo_list").on("click", ".photo_list_img_setcover", function() {
            var index = $(this).index(".photo_list .photo_list_img_setcover");
            $(".photo_list .photo_list_img_setcover").removeClass("photo_list_img_setcoverno");
            $(this).addClass("photo_list_img_setcoverno");
            $(".photo_list_img_coverok").hide();
            $(".photo_list_img_coverok").eq(index).show();
            $("#cover").val(id_arr[index]);
        })

        
        //3-30日修正-----
        // 必须为数字的input输入框
        var isnumber=function(el,str){
            var val=$(el).val();
            if(isFinite(val)){

            }else{
                errorTips(str);
                $(el).val("").get(0).focus();
            }
        };
        // $("input[name=rent_fee]").on("blur",function(){
        //     isnumber("input[name=rent_fee]","请输入数字金额");
        // });
        // $("input[name=rent_fee],input[name=transfer_fee]").on("blur",function(){
        //     isnumber("input[name=transfer_fee]","请输入数字金额");
        // });

        //标题的自动生成
        var input_area="";
        var input_class=$.trim($(".input_class b").text());
        var input_adress="全国";
        var input_style="转让";
        var mianji=$("input[name=area_unit]").val();
       
        $(".areaChoose").on("input propertychange blur",function(){
                input_adress=$.trim($(this).val()) || "全国";
                input_adress=input_adress.replace(/\s+/g,"").replace(/-/g,"");
                if(input_area!=""&&isFinite(input_area)){
                   $("input[name=title]").val(input_adress+""+input_area+mianji+""+input_class+""+input_style);
                }else{
                   $("input[name=title]").val(input_adress+""+input_class+""+input_style);
                }
            // }, 1000);    
        });

        $(".block_bar_p b").eq(1).text($(".block_bar_p b").eq(1).text().replace(/,/g,"、"));
        // $(".input_adr").on("click",function(){
        //     input_adress=$.trim($(this).val());
        //     setTimeout(function(){
        //         if(input_area!=""&&isFinite(input_area)){
        //            $("input[name=title]").val(input_adress+"    "+input_area+mianji+"    "+input_class+"    "+input_style);
        //         }else{
        //            $("input[name=title]").val(input_adress+"    "+input_class+"    "+input_style);
        //         }
        //     },2000);
            
        // });
        $("#Area_mu").on("blur",function(){
            input_area=$.trim($(this).val());
            if(input_area!=""&&isFinite(input_area)){
               $("input[name=title]").val(input_adress+""+input_area+mianji+""+input_class+""+input_style);
            }else{
               $("input[name=title]").val(input_adress+""+input_class+""+input_style);
            }
        })
        // getstr("#areaSelect_item_1",input_area)
        $(".input_style div").on("click",function(){
             var text=$.trim($(this).text());
             input_style=text;
            if(input_area!=""&&isFinite(input_area)){
               $("input[name=title]").val(input_adress+""+input_area+mianji+""+input_class+""+input_style);
            }else{
               $("input[name=title]").val(input_adress+""+input_class+""+input_style);
            }
        })
        //-----3-30日修正
        
    })();

    //3-29日修正总金额
    $(window).on("load",function(){
        var val=$("input[name=area_unit]").val();
    });
    $("input[name=rent_fee]").on("blur",function(){
        var val1=$(this).val();
        var val2=$("#Area_mu").val();
        if(isFinite(val1) && isFinite(val2)){
            $("#wyuan_year").text((val1*val2/10000).toFixed(4));
        }else{
            $("#wyuan_year").text(0);
        }
    });
    $("#Area_mu").on("blur",function(){
        var val1=$(this).val();
        var val2=$("input[name=rent_fee]").val();
        if(isFinite(val1) && isFinite(val2) ){
            $("#wyuan_year").text((val1*val2/10000).toFixed(4));
        }else{
            $("#wyuan_year").text(0);
        }
    });
    //3-29日修正   
})();

/* 获取验证码 */
function sendMessage() {
    if ($("#getcode").attr('disabled') == 'disabled') {
        return false;
    }

    var mobile = $("#mobile").val();
    var pc = Check.mobile(mobile);
    if (!pc) {
        alert('请输入正确的手机号');
        return false;
    }
    // 验证图片
    var captcha = $("#_captcha");
    if (captcha.val() == '') {
        alert('请输入正确的图片验证码');
        captcha.focus();
        return false;
    }

    // 设置button效果，开始计时
    curCount = 60;
    $.ajax({
        url : '/smsapi/gettickettow',
        type : 'POST',
        dataType : 'json',
        data : {
            mobile : mobile,
            captcha : captcha.val(),
        },
        success : function(data) {
            if (data.label == "success") {
                $("#getcode").attr("disabled", "true");
                $("#getcode").html(curCount + "秒");
                InterValObj = window.setInterval(SetRemainTime, 1000); // 启动计时器，1秒执行一次
            } else {
                get_captcha();
                errorTips("图片验证码错误"); $("#_captcha")[0].focus();
                return false;
            }
        }
    });

}

// timer处理函数
function SetRemainTime() {
    if (curCount == 1) {
        window.clearInterval(InterValObj);// 停止计时器
        $("#getcode").removeAttr("disabled");// 启用按钮
        $("#getcode").html("重新发送");
    } else {
        curCount--;
        $("#getcode").html(curCount + "秒");
    }
}

function get_captcha() {
    /* 不能使用 $("._captcha").click() 否则会触发两次更新 */
    var img = $('._captcha');
    img.attr("src", "/captcha/" + Math.random());
}
$("._captcha").click(get_captcha);

function errorTips(str){
    var text=str||"";
    $("#alert_tips_content").text(text);
    $(".alert_error_tips").show();

    //埋点处理
    var sn = '';
    switch(str)
    {
        case '请输入数字土地面积': sn = 'error_area_number_type';break;
        case '请输入土地面积': sn = 'error_area_number_emptly';break;
        case '年限不能大于70年': sn = 'error_remaining_year_lt';break;
        case '请输入数字流转年限': sn = 'error_remaining_year_type';break;
        case '请输入流转年限': sn = 'error_remaining_year_emptly';break;
        case '请最少选择至区县': sn = 'error_region_code_emptly';break;
        case '请输入信息标题': sn = 'error_title_emptly';break;
        case '描述详情中含有敏感词': sn = 'error_checkargumentbol';break;
        case '请输入两个以上的中文联系人': sn = 'error_link_man_type';break;
        case '请输入土地联系人': sn = 'error_link_man_emptly';break;
        case '请输入11位数字手机号码': sn = 'error_mobile_type';break;
        case '请输入手机号码': sn = 'error_mobile_emptly';break;
        case '请输入图片验证码': sn = 'error_captcha_emptly';break;
        case '请输入图片验证码': sn = 'error_captcha_emptly';break;
        case '图片验证码错误': sn = 'error_captcha_false';break;
        case '图片上传不能超过十张': sn = 'error_picture_max';break;
        case '请输入数字金额': sn = 'error_money_type';break;
    }

    if ( sn !='' && isTdzyw ) {
        var key = $("input[name='buriedpointkey']").val();    
        $.ajax({
            type:"post",
            url:tdzyw_ajax_url+"/buriedpointapi/add",
            data:{
                "sn":sn,
                "source":'dihe',
                "key":key
            },
            dataType:"jsonp",
            success:function(msg){
                
            },
        });
    }
};

//4-6敏感词修改
var checkargumentbol=false;//敏感词全局变量
$().ready(function(){
    function checkargument(argument) {
        $.ajax({
            type:"post",
            url:"/badwordapi/check",
            data:{
                "content":argument
            },
            dataType:"json",
            success:function(msg){
                if(msg.label=="success"){
                    if(msg.info.badCount>0){
                        checkargumentbol=true;
                        for(var i=0;i<msg.info.badCount;i++){
                            argument=argument.replace(msg.info.badWords[i],"<span style='color:red'>"+msg.info.badWords[i]+"</span>")
                        }
                        $("#block_ass_in_text").html(argument);
                        $("#tip_mg").show();
                    }else{
                        checkargumentbol=false;
                        $("#tip_mg").hide();
                    }
                }
            },
            error:function(xhr){
                // console.log(xhr.status);
            }
        });
    }
    $("#block_ass_in_text").on("focus input onpropertychange",function(){
        var text=$.trim($(this).text());
        $("textarea[name='content']").val($(this).text());
        $("#placeholder1").hide()
        
    })    
    $("#block_ass_in_text").on("blur",function(){
        var text=$.trim($(this).text());
        $("textarea[name='content']").val($(this).text());
        var argument=$(this).html();
        checkargument(argument);
        if($.trim(argument).length>0){
            $("#placeholder1").hide()
        }else{
            $("#placeholder1").show();
        }
        
    });
})



// <!--2017年5月11日新增加-->
$().ready(function(){
    //
        $(".block_ass_img").click(function(){
            
            $("#tip_zj ,#tip_zrf").hide();
            $("#input_prop ,#block_prop").css("border-color","#e7e7e7");
        })
        
            
        //土地面积的判断
        $("#Area_mu:input").blur(function(){
            var val=$.trim($("#Area_mu").val());
            if(val==""){
                $(this).css("border-color","red");
                $("#tip_mj").show();
            }else{
                if(val>0){
//                    这里是数字的时候
                    $(this).css("border-color","#e7e7e7"); 
                    $("#tip_mj").hide(); 
                }else{
//                   不是数字写这里
                                       
                    $(this).css("border-color","red");
                    $("#tip_mj").show();
                }
               
            }
            
        })
        //租金的判断
        $("#input_prop:input").blur(function(){
            var val=$.trim($("#input_prop").val());
            if(val==""){
                $(this).css("border-color","red");
                $("#tip_zj").show();
            }else{
               if(isFinite(val)){
//                    这里是数字的时候
                    $(this).css("border-color","#e7e7e7"); 
                    $("#tip_zj").hide(); 
                }else{
//                   不是数字写这里
                    $(this).css("border-color","red");
                    $("#tip_zj").show();
                }  
            }
        })
        //转让费判断
        $("#price").on("click",function(){
            $(this).css("border-color","#e7e7e7");
             $("#tip_zrf").hide(); 
        })
        $("#block_prop").blur(function(){
            var val=$.trim($("#block_prop").val());
            if(val){
                if(isFinite(val)){
//                    这里是数字的时候
                    $(this).css("border-color","#e7e7e7"); 
                    $("#tip_zrf").hide(); 
                }else{
                   //                   不是数字写这里
                    $(this).css("border-color","red");
                    $("#tip_zrf").show(); 
                }
            }else{
                $(this).css("border-color","red");
                $("#tip_zrf").show();
            }
        })
        //可流转年限费判断
        $("#ass_input").blur(function(){
            var val=$.trim($(this).val());
            if(val && val>0 && val<=70){
                $(this).css("border-color","#e7e7e7"); 
                $("#tip_nx").hide();
            }else{
              
                   //                   不是数字写这里
                    $(this).css("border-color","red");
                    $("#tip_nx").show(); 
                
            }
        })
        //土地联系人的判断
        //
        $("input[name=link_man]").blur(function(){
        
        if($("input[name=link_man]").val()){
            var chineseExg=/^[\u4e00-\u9fa5]{2,100}$/;
            if(chineseExg.test($("input[name=link_man]").val())){
                 $("#tip_lxr").hide();
                 $(this).css("border-color","#e7e7e7");
            }else{
                $("#tip_lxr").show();
                $(this).css("border-color","red");
            }
        }else{
            $("#tip_lxr").show();
            $(this).css("border-color","red");
        }
        })
        //
        $("#mobile").blur(function(){
            var val=$.trim($("#mobile").val())
            if(val){
                var phoneexg=/^0?(13[0-9]|15[012356789]|17[013678]|18[0-9]|14[57])[0-9]{8}$/;
                if(phoneexg.test(val)){
                    $("#tip_hm").hide();
                    $(this).css("border-color","#e7e7e7");
                }else{
                    $("#tip_hm").show();
                    $(this).css("border-color","red");
                }
            }else{
                $("#tip_hm").show();
                $(this).css("border-color","red");
            }
        })
        //
})


;(function (){
    // alert()
    $(".div_land_use_tags").on("click",".tags11",function(){
        
        var text=$.trim($(this).text());
        var val=$.trim($("#supply_land_building_tag").val());

        if($(this).hasClass("clickactive")){
            $(this).removeClass("clickactive");
            var val1=val.replace(text,"");
            $.trim(val1);
            $("#supply_land_building_tag").val(val1);
            return;
        }
        if(val.indexOf(text)>-1) return ;

        $("#supply_land_building_tag").val(val+" "+text+" ");
        $("#supply_land_building_tag")[0].focus();
        $("#supply_land_building_tag")[0].blur();
        $(this).addClass("clickactive");
        if(val){
            val=val.replace(/\s+/g,",");
            $("input[name='land_use_tags']").val(val+","+text);

        }else{
            $("input[name='land_use_tags']").val(text);
        }
    })
    $("#supply_land_building_tag").on("input propertychange",function(){
        var _supply_land_building_tag=this;
        var val=$.trim($(this).val());
        var string=$("#supply_land_building_tag").val().replace(/\s+/g,",");
         $("input[name='land_use_tags']").val(string);
        land_use_tags_arr=string.split(",");
        $(".div_land_use_tags .tags11").removeClass("clickactive");
        for(var i=0;i<land_use_tags_arr.length;i++){
            $(".div_land_use_tags .tags11").each(function(key,index){
                if($.trim($(this).text())==land_use_tags_arr[i]){
                    $(this).addClass("clickactive");
                }
            })
        }
    });

    //6-16悬浮框固定
    var suspension_offset_top=$("#suspension").offset().top;
    // var window_ua=window.navigator.userAgent.toLocaleLowerCase();
    $(window).on("scroll",function(){
        var scrollTop=$("body").scrollTop();
        if(scrollTop>suspension_offset_top){
            // var suspensiontop=scrollTop-suspension_offset_top+23;
            // $("#suspension").css("top",suspensiontop+"px"); 
            $("#suspension").css({
                "position":"fixed",
                "top":0
            });

        }else{
            $("#suspension").css("position","absolute");
            $("#suspension").css("top","23px");  
        }
    })
   
})()