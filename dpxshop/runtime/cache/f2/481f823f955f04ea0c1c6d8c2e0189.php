<?php
//000000000000s:73721:"<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>首页-大棚侠农家蔬菜联盟</title>
    <meta name="keywords" content="大棚侠农家蔬菜联盟"/>
    <meta name="description" content="大棚侠农家蔬菜联盟"/>
    <link rel="stylesheet" type="text/css" href="/dpxshop/template/pc/rainbow/static/css/alone_index.css"/>
    <link rel="stylesheet" type="text/css" href="/dpxshop/template/pc/rainbow/static/css/common.css"/>
    <script src="/dpxshop/template/pc/rainbow/static/js/jquery-1.11.3.min.js" type="text/javascript" charset="utf-8"></script>
    <script src="/dpxshop/public/js/global.js"></script>
    <link rel="shortcut icon" type="image/x-icon" href="/dpxshop/public/static/images/favicon.ico" media="screen"/>
    <!-- 新浪获取ip地址 -start-->
            <script src="http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=js&ip=0.0.0.0"></script>
        <script type="text/JavaScript">
            doCookieArea(remote_ip_info);
        </script>
    </head>
<body class="gray_f5">
    <!--header-s-->
    <div class="tpshop-tm-hander tp_h_alone p">
        <!--导航栏-s-->
        <div class="top-hander p">
            <div class="w1224 pr p">
                <div class="fl">
                    <!-- 收货地址，物流运费 -start-->
                    <link rel="stylesheet" href="/dpxshop/template/pc/rainbow/static/css/location.css" type="text/css"><!-- 收货地址，物流运费 -->
                    <div class="sendaddress pr fl">
                        <span>送货至：</span>
                        <span>
                            <ul class="list1">
                                <li class="summary-stock though-line">
                                    <div class="dd" style="border-right:0px;width:200px;">
                                        <div class="store-selector add_cj_p">
                                            <div class="text"><div></div><b></b></div>
                                            <div onclick="$(this).parent().removeClass('hover')" class="close"></div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </span>
                    </div>
                    <!-- 收货地址，物流运费 -end-->
                        <div class="fl nologin">
                            <a class="red" href="/dpxshop/Home/user/login.html">Hi.请登录</a>
                            <a href="/dpxshop/Home/user/reg.html">免费注册</a>
                        </div>
                        <div class="fl islogin">
                            <a class="red userinfo" href="/dpxshop/Home/user/index.html" ></a>
                            <a  href="/dpxshop/Home/user/logout.html"  title="退出" target="_self">安全退出</a>
                        </div>
                </div>
                
                <div class="top-ri-header fr">
                    <ul>
                        <li><a target="_blank" href="/dpxshop/Home/User/order_list.html">我的订单</a></li>
                        <li class="spacer"></li>
                        <li><a target="_blank" href="/dpxshop/Home/User/visit_log.html">我的浏览</a></li>
                        <li class="spacer"></li>
                        <li><a target="_blank" href="/dpxshop/Home/User/coupon.html">我的优惠券</a></li>
                        <li class="spacer"></li>
                        <li><a target="_blank" href="/dpxshop/Home/User/goods_collect.html">我的收藏</a></li>
                        <li class="spacer"></li>
                        <li><a target="_blank" title="点击这里给我发消息" href="/dpxshop/Home/Article/detail/article_id/22.html" target="_blank">QQ在线客服</a></li>
                        <li class="spacer"></li>
                         <li class="hover-ba-navdh">
                            <div class="nav-dh">
                                <span>网站导航</span>
                                <i class="share-a_a1"></i>
                                <div class="conta-hv-nav">
                                    <ul>
                                        <li>
                                            <a href="/dpxshop/Home/Activity/group_list.html">团购</a>
                                        </li>
                                        <li>
                                            <a href="/dpxshop/Home/Activity/flash_sale_list.html">抢购</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
        <!--导航栏-e-->
        <div class="nav-middan-z p">
            <div class="header w1224 p">
                <div class="ecsc-logo">
                    <a href="/dpxshop/home/Index/index.html" class="logo"> <img src="/public/upload/logo/2017/10-19/a54ce6b684b8a39f064e92b353f6b823.png"></a>
                </div>
                <!--搜索-s-->
                <div class="ecsc-search">
                    <form id="searchForm" name="" method="get" action="/dpxshop/Home/Goods/search.html" class="ecsc-search-form">
                        <input autocomplete="off" name="q" id="q" type="text" value="" placeholder="搜索关键字" class="ecsc-search-input">
                        <button type="submit" class="ecsc-search-button" onclick="if($.trim($('#q').val()) != '') $('#searchForm').submit();"><i></i></button>
                        <div class="candidate p">
                            <ul id="search_list"></ul>
                        </div>
                        <script type="text/javascript">
                            ;(function($){
                                $.fn.extend({
                                    donetyping: function(callback,timeout){
                                        timeout = timeout || 1e3;
                                        var timeoutReference,
                                                doneTyping = function(el){
                                                    if (!timeoutReference) return;
                                                    timeoutReference = null;
                                                    callback.call(el);
                                                };
                                        return this.each(function(i,el){
                                            var $el = $(el);
                                            $el.is(':input') && $el.on('keyup keypress',function(e){
                                                if (e.type=='keyup' && e.keyCode!=8) return;
                                                if (timeoutReference) clearTimeout(timeoutReference);
                                                timeoutReference = setTimeout(function(){
                                                    doneTyping(el);
                                                }, timeout);
                                            }).on('blur',function(){
                                                doneTyping(el);
                                            });
                                        });
                                    }
                                });
                            })(jQuery);

                            $('.ecsc-search-input').donetyping(function(){
                                search_key();
                            },500).focus(function(){
                                var search_key = $.trim($('#q').val());
                                if(search_key != ''){
                                    $('.candidate').show();
                                }
                            });
                            $('.candidate').mouseleave(function(){
                                $(this).hide();
                            });

                            function searchWord(words){
                                $('#q').val(words);
                                $('#searchForm').submit();
                            }
                            function search_key(){
                                var search_key = $.trim($('#q').val());
                                if(search_key != ''){
                                    $.ajax({
                                        type:'post',
                                        dataType:'json',
                                        data: {key: search_key},
                                        url:"/dpxshop/Home/Api/searchKey.html",
                                        success:function(data){
                                            if(data.status == 1){
                                                var html = '';
                                                $.each(data.result, function (n, value) {
                                                    html += '<li onclick="searchWord(\''+value.keywords+'\');"><div class="search-item">'+value.keywords+'</div><div class="search-count">约'+value.goods_num+'个商品</div></li>';
                                                });
                                                html += '<li class="close"><div class="search-count">关闭</div></li>';
                                                $('#search_list').empty().append(html);
                                                $('.candidate').show();
                                            }else{
                                                $('#search_list').empty();
                                            }
                                        }
                                    });
                                }
                            }
                        </script>
                    </form>
                    <div class="keyword">
                        <ul>
                                                            <li>
                                    <a href="/dpxshop/Home/Goods/search/q/%E8%94%AC%E8%8F%9C.html" target="_blank">蔬菜</a>
                                </li>
                                                            <li>
                                    <a href="/dpxshop/Home/Goods/search/q/%E6%B0%B4%E6%9E%9C.html" target="_blank">水果</a>
                                </li>
                                                            <li>
                                    <a href="/dpxshop/Home/Goods/search/q/%E8%8F%9C%E8%B0%B1.html" target="_blank">菜谱</a>
                                </li>
                                                            <li>
                                    <a href="/dpxshop/Home/Goods/search/q/%E7%B2%AE%E6%B2%B9.html" target="_blank">粮油</a>
                                </li>
                                                            <li>
                                    <a href="/dpxshop/Home/Goods/search.html" target="_blank"></a>
                                </li>
                                                    </ul>
                    </div>
                </div>
                <!--搜索-e-->
                <!--购物车-s-->
                
                <div class="shopingcar-index fr">
                    <div class="u-g-cart fr fixed" id="hd-my-cart">
                        <a href="/dpxshop/Home/Cart/cart.html">
                            <div class="c-n fl" >
                                <i class="share-shopcar-index"></i>
                                <span>我的购物车<em class="sc_z" id="cart_quantity"></em></span>
                            </div>
                        </a>
                        <div class="u-fn-cart u-mn-cart" id="show_minicart"></div>
                    </div>
                </div>
                <!--购物车-e-->
            </div>
        </div>
        <!--商品分类-s-->
        <div class="nav p">
            <div class="w1224 p">
                <div class="categorys2 home_categorys">
                    <div class="dt">
                        <a href="/dpxshop/Home/Goods/all_category.html" target="_blank"><i class="share-a_a2"></i>全部商品</a>
                    </div>
                    <!--全部商品分类-s-->
                    <div class="dd">
                        <div class="cata-nav">
                            <!-- 外层循环点-->
                                                        <div class="item fore1">
                                                                <div class="item-left">
                                    <div class="cata-nav-name">
                                        <h3>
                                            <div class="contiw-cer"><span class="share-icon-1"></span></div>
                                            <a href="/dpxshop/Home/Goods/goodsList/id/1.html" title="优选鲜果">优选鲜果</a>
                                        </h3>
                                    </div>
                                    <b>&gt;</b>
                                </div>
                                                                <div class="cata-nav-layer">
                                    <div class="cata-nav-left">
                                        <div class="subitems">
                                                                                            <dl><!-- 2级循环点-->
                                                    <dt>
                                                        <a href="/dpxshop/Home/Goods/goodsList/id/12.html" target="_blank">浆果类<i>&gt;</i></a>
                                                    </dt>
                                                    <dd>
                                                                                                                    <a href="/dpxshop/Home/Goods/goodsList/id/100.html" target="_blank">草莓</a>                                                            <a href="/dpxshop/Home/Goods/goodsList/id/101.html" target="_blank">蓝莓</a>                                                            <a href="/dpxshop/Home/Goods/goodsList/id/102.html" target="_blank">葡萄</a>                                                    </dd>
                                                </dl>
                                                                                                <dl><!-- 2级循环点-->
                                                    <dt>
                                                        <a href="/dpxshop/Home/Goods/goodsList/id/13.html" target="_blank">柑橘类<i>&gt;</i></a>
                                                    </dt>
                                                    <dd>
                                                                                                                    <a href="/dpxshop/Home/Goods/goodsList/id/103.html" target="_blank">蜜橘</a>                                                            <a href="/dpxshop/Home/Goods/goodsList/id/104.html" target="_blank">砂糖橘</a>                                                            <a href="/dpxshop/Home/Goods/goodsList/id/105.html" target="_blank">金橘</a>                                                            <a href="/dpxshop/Home/Goods/goodsList/id/106.html" target="_blank">柚子</a>                                                            <a href="/dpxshop/Home/Goods/goodsList/id/107.html" target="_blank">柠檬</a>                                                    </dd>
                                                </dl>
                                                                                                <dl><!-- 2级循环点-->
                                                    <dt>
                                                        <a href="/dpxshop/Home/Goods/goodsList/id/14.html" target="_blank">核果类<i>&gt;</i></a>
                                                    </dt>
                                                    <dd>
                                                                                                                    <a href="/dpxshop/Home/Goods/goodsList/id/108.html" target="_blank">桃</a>                                                            <a href="/dpxshop/Home/Goods/goodsList/id/109.html" target="_blank">李子</a>                                                            <a href="/dpxshop/Home/Goods/goodsList/id/110.html" target="_blank">樱桃</a>                                                            <a href="/dpxshop/Home/Goods/goodsList/id/111.html" target="_blank">杏</a>                                                    </dd>
                                                </dl>
                                                                                                <dl><!-- 2级循环点-->
                                                    <dt>
                                                        <a href="/dpxshop/Home/Goods/goodsList/id/15.html" target="_blank">仁果类<i>&gt;</i></a>
                                                    </dt>
                                                    <dd>
                                                                                                                    <a href="/dpxshop/Home/Goods/goodsList/id/112.html" target="_blank">苹果</a>                                                            <a href="/dpxshop/Home/Goods/goodsList/id/113.html" target="_blank">梨</a>                                                            <a href="/dpxshop/Home/Goods/goodsList/id/114.html" target="_blank">柿子</a>                                                            <a href="/dpxshop/Home/Goods/goodsList/id/115.html" target="_blank">猕猴桃</a>                                                    </dd>
                                                </dl>
                                                                                                <dl><!-- 2级循环点-->
                                                    <dt>
                                                        <a href="/dpxshop/Home/Goods/goodsList/id/16.html" target="_blank">瓜类<i>&gt;</i></a>
                                                    </dt>
                                                    <dd>
                                                                                                                    <a href="/dpxshop/Home/Goods/goodsList/id/845.html" target="_blank">哈密瓜</a>                                                            <a href="/dpxshop/Home/Goods/goodsList/id/116.html" target="_blank">西瓜</a>                                                            <a href="/dpxshop/Home/Goods/goodsList/id/117.html" target="_blank">香瓜</a>                                                    </dd>
                                                </dl>
                                                                                                <dl><!-- 2级循环点-->
                                                    <dt>
                                                        <a href="/dpxshop/Home/Goods/goodsList/id/17.html" target="_blank">其他<i>&gt;</i></a>
                                                    </dt>
                                                    <dd>
                                                                                                                    <a href="/dpxshop/Home/Goods/goodsList/id/118.html" target="_blank">菠萝</a>                                                            <a href="/dpxshop/Home/Goods/goodsList/id/119.html" target="_blank">芒果</a>                                                            <a href="/dpxshop/Home/Goods/goodsList/id/120.html" target="_blank">香蕉</a>                                                            <a href="/dpxshop/Home/Goods/goodsList/id/121.html" target="_blank">椰子</a>                                                            <a href="/dpxshop/Home/Goods/goodsList/id/122.html" target="_blank">石榴</a>                                                    </dd>
                                                </dl>
                                                                                            
                                        </div>
                                    </div>
                                   
                                </div>
                            </div>
                                                        <div class="item fore1">
                                                                <div class="item-left">
                                    <div class="cata-nav-name">
                                        <h3>
                                            <div class="contiw-cer"><span class="share-icon-2"></span></div>
                                            <a href="/dpxshop/Home/Goods/goodsList/id/2.html" title="新鲜蔬菜">新鲜蔬菜</a>
                                        </h3>
                                    </div>
                                    <b>&gt;</b>
                                </div>
                                                                <div class="cata-nav-layer">
                                    <div class="cata-nav-left">
                                        <div class="subitems">
                                                                                            <dl><!-- 2级循环点-->
                                                    <dt>
                                                        <a href="/dpxshop/Home/Goods/goodsList/id/19.html" target="_blank">根菜类<i>&gt;</i></a>
                                                    </dt>
                                                    <dd>
                                                                                                                    <a href="/dpxshop/Home/Goods/goodsList/id/125.html" target="_blank">萝卜</a>                                                            <a href="/dpxshop/Home/Goods/goodsList/id/126.html" target="_blank">胡萝卜</a>                                                            <a href="/dpxshop/Home/Goods/goodsList/id/127.html" target="_blank">大头菜</a>                                                    </dd>
                                                </dl>
                                                                                                <dl><!-- 2级循环点-->
                                                    <dt>
                                                        <a href="/dpxshop/Home/Goods/goodsList/id/20.html" target="_blank">白菜类<i>&gt;</i></a>
                                                    </dt>
                                                    <dd>
                                                                                                                    <a href="/dpxshop/Home/Goods/goodsList/id/130.html" target="_blank">白菜</a>                                                            <a href="/dpxshop/Home/Goods/goodsList/id/131.html" target="_blank">芥菜</a>                                                            <a href="/dpxshop/Home/Goods/goodsList/id/132.html" target="_blank">花椰菜</a>                                                            <a href="/dpxshop/Home/Goods/goodsList/id/133.html" target="_blank">青花菜</a>                                                    </dd>
                                                </dl>
                                                                                                <dl><!-- 2级循环点-->
                                                    <dt>
                                                        <a href="/dpxshop/Home/Goods/goodsList/id/21.html" target="_blank">绿叶蔬菜<i>&gt;</i></a>
                                                    </dt>
                                                    <dd>
                                                                                                                    <a href="/dpxshop/Home/Goods/goodsList/id/135.html" target="_blank">莴苣</a>                                                            <a href="/dpxshop/Home/Goods/goodsList/id/136.html" target="_blank">芹菜</a>                                                            <a href="/dpxshop/Home/Goods/goodsList/id/137.html" target="_blank">菠菜</a>                                                            <a href="/dpxshop/Home/Goods/goodsList/id/138.html" target="_blank">茼蒿</a>                                                    </dd>
                                                </dl>
                                                                                                <dl><!-- 2级循环点-->
                                                    <dt>
                                                        <a href="/dpxshop/Home/Goods/goodsList/id/22.html" target="_blank">葱蒜类<i>&gt;</i></a>
                                                    </dt>
                                                    <dd>
                                                                                                                    <a href="/dpxshop/Home/Goods/goodsList/id/139.html" target="_blank">洋葱</a>                                                            <a href="/dpxshop/Home/Goods/goodsList/id/140.html" target="_blank">大蒜</a>                                                            <a href="/dpxshop/Home/Goods/goodsList/id/141.html" target="_blank">大葱</a>                                                            <a href="/dpxshop/Home/Goods/goodsList/id/142.html" target="_blank">香葱</a>                                                            <a href="/dpxshop/Home/Goods/goodsList/id/143.html" target="_blank">韭菜</a>                                                    </dd>
                                                </dl>
                                                                                                <dl><!-- 2级循环点-->
                                                    <dt>
                                                        <a href="/dpxshop/Home/Goods/goodsList/id/23.html" target="_blank">茄果类<i>&gt;</i></a>
                                                    </dt>
                                                    <dd>
                                                                                                                    <a href="/dpxshop/Home/Goods/goodsList/id/144.html" target="_blank">番茄</a>                                                            <a href="/dpxshop/Home/Goods/goodsList/id/145.html" target="_blank">辣椒</a>                                                            <a href="/dpxshop/Home/Goods/goodsList/id/146.html" target="_blank">茄子</a>                                                    </dd>
                                                </dl>
                                                                                            
                                        </div>
                                    </div>
                                   
                                </div>
                            </div>
                                                        <div class="item fore1">
                                                                <div class="item-left">
                                    <div class="cata-nav-name">
                                        <h3>
                                            <div class="contiw-cer"><span class="share-icon-3"></span></div>
                                            <a href="/dpxshop/Home/Goods/goodsList/id/3.html" title="肉禽蛋品">肉禽蛋品</a>
                                        </h3>
                                    </div>
                                    <b>&gt;</b>
                                </div>
                                                                <div class="cata-nav-layer">
                                    <div class="cata-nav-left">
                                        <div class="subitems">
                                                                                            <dl><!-- 2级循环点-->
                                                    <dt>
                                                        <a href="/dpxshop/Home/Goods/goodsList/id/24.html" target="_blank">肉类<i>&gt;</i></a>
                                                    </dt>
                                                    <dd>
                                                                                                                    <a href="/dpxshop/Home/Goods/goodsList/id/154.html" target="_blank">牛肉</a>                                                            <a href="/dpxshop/Home/Goods/goodsList/id/155.html" target="_blank">猪肉</a>                                                            <a href="/dpxshop/Home/Goods/goodsList/id/156.html" target="_blank">羊肉</a>                                                    </dd>
                                                </dl>
                                                                                                <dl><!-- 2级循环点-->
                                                    <dt>
                                                        <a href="/dpxshop/Home/Goods/goodsList/id/25.html" target="_blank">禽类<i>&gt;</i></a>
                                                    </dt>
                                                    <dd>
                                                                                                                    <a href="/dpxshop/Home/Goods/goodsList/id/161.html" target="_blank">鸡肉</a>                                                            <a href="/dpxshop/Home/Goods/goodsList/id/162.html" target="_blank">鸭肉</a>                                                            <a href="/dpxshop/Home/Goods/goodsList/id/163.html" target="_blank">鹅肉</a>                                                    </dd>
                                                </dl>
                                                                                                <dl><!-- 2级循环点-->
                                                    <dt>
                                                        <a href="/dpxshop/Home/Goods/goodsList/id/26.html" target="_blank">蛋品<i>&gt;</i></a>
                                                    </dt>
                                                    <dd>
                                                                                                                    <a href="/dpxshop/Home/Goods/goodsList/id/178.html" target="_blank">鸡蛋</a>                                                            <a href="/dpxshop/Home/Goods/goodsList/id/179.html" target="_blank">鸭蛋</a>                                                            <a href="/dpxshop/Home/Goods/goodsList/id/180.html" target="_blank">鹅蛋</a>                                                    </dd>
                                                </dl>
                                                                                            
                                        </div>
                                    </div>
                                   
                                </div>
                            </div>
                                                        <div class="item fore1">
                                                                <div class="item-left">
                                    <div class="cata-nav-name">
                                        <h3>
                                            <div class="contiw-cer"><span class="share-icon-4"></span></div>
                                            <a href="/dpxshop/Home/Goods/goodsList/id/4.html" title="粮油副食">粮油副食</a>
                                        </h3>
                                    </div>
                                    <b>&gt;</b>
                                </div>
                                                                <div class="cata-nav-layer">
                                    <div class="cata-nav-left">
                                        <div class="subitems">
                                                                                            <dl><!-- 2级循环点-->
                                                    <dt>
                                                        <a href="/dpxshop/Home/Goods/goodsList/id/31.html" target="_blank">食用油<i>&gt;</i></a>
                                                    </dt>
                                                    <dd>
                                                                                                                    <a href="/dpxshop/Home/Goods/goodsList/id/227.html" target="_blank">大豆油</a>                                                            <a href="/dpxshop/Home/Goods/goodsList/id/228.html" target="_blank">玉米油</a>                                                            <a href="/dpxshop/Home/Goods/goodsList/id/229.html" target="_blank">花生油</a>                                                            <a href="/dpxshop/Home/Goods/goodsList/id/230.html" target="_blank">菜籽油</a>                                                            <a href="/dpxshop/Home/Goods/goodsList/id/233.html" target="_blank">芝麻油</a>                                                    </dd>
                                                </dl>
                                                                                                <dl><!-- 2级循环点-->
                                                    <dt>
                                                        <a href="/dpxshop/Home/Goods/goodsList/id/32.html" target="_blank">米面杂粮<i>&gt;</i></a>
                                                    </dt>
                                                    <dd>
                                                                                                                    <a href="/dpxshop/Home/Goods/goodsList/id/234.html" target="_blank">玉米面</a>                                                            <a href="/dpxshop/Home/Goods/goodsList/id/235.html" target="_blank">黑米面</a>                                                            <a href="/dpxshop/Home/Goods/goodsList/id/236.html" target="_blank">玉米</a>                                                            <a href="/dpxshop/Home/Goods/goodsList/id/237.html" target="_blank">小米</a>                                                            <a href="/dpxshop/Home/Goods/goodsList/id/238.html" target="_blank">红米</a>                                                            <a href="/dpxshop/Home/Goods/goodsList/id/239.html" target="_blank">黑米</a>                                                            <a href="/dpxshop/Home/Goods/goodsList/id/240.html" target="_blank">高梁</a>                                                            <a href="/dpxshop/Home/Goods/goodsList/id/241.html" target="_blank">燕麦</a>                                                    </dd>
                                                </dl>
                                                                                                <dl><!-- 2级循环点-->
                                                    <dt>
                                                        <a href="/dpxshop/Home/Goods/goodsList/id/33.html" target="_blank"> 调味料<i>&gt;</i></a>
                                                    </dt>
                                                    <dd>
                                                                                                                    <a href="/dpxshop/Home/Goods/goodsList/id/249.html" target="_blank">胡椒</a>                                                            <a href="/dpxshop/Home/Goods/goodsList/id/250.html" target="_blank">花椒</a>                                                            <a href="/dpxshop/Home/Goods/goodsList/id/251.html" target="_blank">八角</a>                                                    </dd>
                                                </dl>
                                                                                            
                                        </div>
                                    </div>
                                   
                                </div>
                            </div>
                                                        <div class="item fore1">
                                                                <div class="item-left">
                                    <div class="cata-nav-name">
                                        <h3>
                                            <div class="contiw-cer"><span class="share-icon-5"></span></div>
                                            <a href="/dpxshop/Home/Goods/goodsList/id/5.html" title="土货特产">土货特产</a>
                                        </h3>
                                    </div>
                                    <b>&gt;</b>
                                </div>
                                                                <div class="cata-nav-layer">
                                    <div class="cata-nav-left">
                                        <div class="subitems">
                                                                                            <dl><!-- 2级循环点-->
                                                    <dt>
                                                        <a href="/dpxshop/Home/Goods/goodsList/id/846.html" target="_blank">北京特产<i>&gt;</i></a>
                                                    </dt>
                                                    <dd>
                                                                                                                    <a href="/dpxshop/Home/Goods/goodsList/id/847.html" target="_blank">冰糖葫芦</a>                                                            <a href="/dpxshop/Home/Goods/goodsList/id/848.html" target="_blank">驴打滚</a>                                                    </dd>
                                                </dl>
                                                                                                <dl><!-- 2级循环点-->
                                                    <dt>
                                                        <a href="/dpxshop/Home/Goods/goodsList/id/39.html" target="_blank">云南特产<i>&gt;</i></a>
                                                    </dt>
                                                    <dd>
                                                                                                                    <a href="/dpxshop/Home/Goods/goodsList/id/849.html" target="_blank">天麻</a>                                                            <a href="/dpxshop/Home/Goods/goodsList/id/319.html" target="_blank">鲜花饼</a>                                                            <a href="/dpxshop/Home/Goods/goodsList/id/320.html" target="_blank">绿豆糕</a>                                                            <a href="/dpxshop/Home/Goods/goodsList/id/321.html" target="_blank">糖果</a>                                                    </dd>
                                                </dl>
                                                                                                <dl><!-- 2级循环点-->
                                                    <dt>
                                                        <a href="/dpxshop/Home/Goods/goodsList/id/40.html" target="_blank">新疆特产<i>&gt;</i></a>
                                                    </dt>
                                                    <dd>
                                                                                                                    <a href="/dpxshop/Home/Goods/goodsList/id/352.html" target="_blank">葡萄干</a>                                                            <a href="/dpxshop/Home/Goods/goodsList/id/353.html" target="_blank">新疆红枣</a>                                                            <a href="/dpxshop/Home/Goods/goodsList/id/354.html" target="_blank">羊肉串</a>                                                            <a href="/dpxshop/Home/Goods/goodsList/id/355.html" target="_blank">新疆枸杞</a>                                                    </dd>
                                                </dl>
                                                                                                <dl><!-- 2级循环点-->
                                                    <dt>
                                                        <a href="/dpxshop/Home/Goods/goodsList/id/41.html" target="_blank">四川特产<i>&gt;</i></a>
                                                    </dt>
                                                    <dd>
                                                                                                            </dd>
                                                </dl>
                                                                                            
                                        </div>
                                    </div>
                                   
                                </div>
                            </div>
                                                    </div>
                    </div>
                    <!--全部商品分类-e-->
                </div>
                <!--导航栏-s-->
                 <div class="navitems" id="nav">
                    <ul>
                        <li class="index_modify">
                            <a href="/dpxshop/home/Index/index.html" class="selected">首页</a>
                        </li>
                                                    <li class="page"><a href="/Home/goods/farm_see" <span>大棚监控</span></a></li>
                                                    <li class="page"><a href="/Home/goods/farm_login.html" <span>大棚联盟</span></a></li>
                                                    <li class="page"><a href="/Home/Goods/farm.html" <span>农家乐</span></a></li>
                                                    <li class="page"><a href="/Home/goods/connect" <span>论坛</span></a></li>
                                                    <li class="page"><a href="/Home/Article/all//article_id/1434.html" <span>关于我们</span></a></li>
                                                    <li class="page"><a href="/Home/Goods/goodsList/id/850" <span>营养菜谱</span></a></li>
                                                    <li class="page"><a href="/index.php?m=Home&amp;c=Goods&amp;a=integralMall" <span>积分商城</span></a></li>
                                                    <li class="page"><a href="/index.php?m=Home&amp;c=Activity&amp;a=group_list" <span>团购</span></a></li>
                                                    <li class="page"><a href="/index.php?m=Home&amp;c=Activity&amp;a=promoteList" <span>促销商品</span></a></li>
                                            </ul>
                    <!-- <div class="wrap-line" style="width: 72px; left: 20px;">
                        <span style="left:15px;"></span>
                    </div> -->
                </div>
                <!--导航栏-e-->
            </div>
        </div>
        <!--商品分类-e-->
    </div>
    <!--header-e-->
    <!--轮播图-s-->
    <div id="myCarousel" class="carousel slide p header-tp" data-ride="carousel">
        <ol class="carousel-indicators">

        </ol>
        <div class="carousel-inner">
        	                <div class="item active" style="background:;">
                    <a href=""  >
                        <img  src="/public/upload/ad/2017/10-14/2d8d58a902728e2feea0b5015b4c6083.jpg" title="" style="">
                    </a>
                </div>
                            <div class="item " style="background:;">
                    <a href=""  >
                        <img  src="/public/upload/ad/2017/10-14/8e48a0cf6a9c50d345c35b1e13836e9f.jpg" title="" style="">
                    </a>
                </div>
                    </div>
        <a class="carousel-control left" href="#myCarousel" data-slide="prev">&lsaquo;</a>
        <a class="carousel-control right" href="#myCarousel" data-slide="next">&rsaquo;</a>
        <!--轮播图右侧广告-s-->
        
        <!--轮播图右侧广告-e-->
    </div>
    <!--轮播图-e-->
    <!--轮播图底部广告-s-->
    <div class="adv3 p">
        <div class="w1224">
            <ul>
                            </ul>
        </div>
    </div>
    <!--轮播图底部广告-e-->
    <div class="adver_line">
        <div class="w1224">
                    </div>
    </div>

<!--------楼层-开始-------------->
        <!--商品楼层-s-->
        <div class="layer-floor " id="floor1">
            <div class="w1224">
            <div class="top_title_layer p">
                <div class="part-title">优选鲜果</div>
                <div class="part-hot">
                    <ul>
                                                    <li>
                                <a href="/dpxshop/Home/Goods/goodsList/id/12.html">浆果类</a>
                            </li>
                                                    <li>
                                <a href="/dpxshop/Home/Goods/goodsList/id/13.html">柑橘类</a>
                            </li>
                                                    <li>
                                <a href="/dpxshop/Home/Goods/goodsList/id/14.html">核果类</a>
                            </li>
                                                    <li>
                                <a href="/dpxshop/Home/Goods/goodsList/id/15.html">仁果类</a>
                            </li>
                                                    <li>
                                <a href="/dpxshop/Home/Goods/goodsList/id/16.html">瓜类</a>
                            </li>
                                                    <li>
                                <a href="/dpxshop/Home/Goods/goodsList/id/17.html">其他</a>
                            </li>
                                            </ul>
                </div>
            </div>
            <div class="main_layer p">
                <div class="hoste_le">  
					                    
                </div>
                <div class="hoste_ri">
                    <ul>
                                                        <li>
                                    <a href="/dpxshop/Home/Goods/goodsInfo/id/144.html">
                                        <img class="picture_main" src="/public/upload/goods/thumb/144/goods_thumb_144_200_200.gif"/>
                                        <span class="name_main">西瓜（1个装）</span>
                                        <!--<span class="intro_main">西瓜</span>-->
                                        <span class="price_main"><i>￥</i>12.00</span>
                                    </a>
                                </li>
                                                            <li>
                                    <a href="/dpxshop/Home/Goods/goodsInfo/id/145.html">
                                        <img class="picture_main" src="/public/upload/goods/thumb/145/goods_thumb_145_200_200.gif"/>
                                        <span class="name_main">哈密瓜（1 个装）</span>
                                        <!--<span class="intro_main">哈密瓜</span>-->
                                        <span class="price_main"><i>￥</i>12.00</span>
                                    </a>
                                </li>
                                                            <li>
                                    <a href="/dpxshop/Home/Goods/goodsInfo/id/146.html">
                                        <img class="picture_main" src="/public/upload/goods/thumb/146/goods_thumb_146_200_200.gif"/>
                                        <span class="name_main">菠萝（1个装）</span>
                                        <!--<span class="intro_main">菠萝</span>-->
                                        <span class="price_main"><i>￥</i>16.00</span>
                                    </a>
                                </li>
                                                            <li>
                                    <a href="/dpxshop/Home/Goods/goodsInfo/id/147.html">
                                        <img class="picture_main" src="/public/upload/goods/thumb/147/goods_thumb_147_200_200.gif"/>
                                        <span class="name_main">草莓/盘（400g）装</span>
                                        <!--<span class="intro_main">草莓</span>-->
                                        <span class="price_main"><i>￥</i>18.00</span>
                                    </a>
                                </li>
                                                            <li>
                                    <a href="/dpxshop/Home/Goods/goodsInfo/id/148.html">
                                        <img class="picture_main" src="/public/upload/goods/thumb/148/goods_thumb_148_200_200.gif"/>
                                        <span class="name_main">泥猴桃(2个装)</span>
                                        <!--<span class="intro_main">猕猴桃</span>-->
                                        <span class="price_main"><i>￥</i>10.00</span>
                                    </a>
                                </li>
                                                            <li>
                                    <a href="/dpxshop/Home/Goods/goodsInfo/id/149.html">
                                        <img class="picture_main" src="/public/upload/goods/thumb/149/goods_thumb_149_200_200.jpeg"/>
                                        <span class="name_main">梨（3个装）</span>
                                        <!--<span class="intro_main">梨</span>-->
                                        <span class="price_main"><i>￥</i>5.00</span>
                                    </a>
                                </li>
                                                            <li>
                                    <a href="/dpxshop/Home/Goods/goodsInfo/id/150.html">
                                        <img class="picture_main" src="/public/upload/goods/thumb/150/goods_thumb_150_200_200.gif"/>
                                        <span class="name_main">芒果（2个装）</span>
                                        <!--<span class="intro_main">芒果</span>-->
                                        <span class="price_main"><i>￥</i>10.00</span>
                                    </a>
                                </li>
                                                            <li>
                                    <a href="/dpxshop/Home/Goods/goodsInfo/id/151.html">
                                        <img class="picture_main" src="/public/upload/goods/thumb/151/goods_thumb_151_200_200.jpeg"/>
                                        <span class="name_main">橘子（4个装）</span>
                                        <!--<span class="intro_main">蜜橘</span>-->
                                        <span class="price_main"><i>￥</i>5.00</span>
                                    </a>
                                </li>
                                                </ul>
                </div>
            </div>
        </div>
        </div>
    <!--商品楼层-e-->
        <!--商品楼层-s-->
        <div class="layer-floor " id="floor2">
            <div class="w1224">
            <div class="top_title_layer p">
                <div class="part-title">新鲜蔬菜</div>
                <div class="part-hot">
                    <ul>
                                                    <li>
                                <a href="/dpxshop/Home/Goods/goodsList/id/19.html">根菜类</a>
                            </li>
                                                    <li>
                                <a href="/dpxshop/Home/Goods/goodsList/id/20.html">白菜类</a>
                            </li>
                                                    <li>
                                <a href="/dpxshop/Home/Goods/goodsList/id/21.html">绿叶蔬菜</a>
                            </li>
                                                    <li>
                                <a href="/dpxshop/Home/Goods/goodsList/id/22.html">葱蒜类</a>
                            </li>
                                                    <li>
                                <a href="/dpxshop/Home/Goods/goodsList/id/23.html">茄果类</a>
                            </li>
                                            </ul>
                </div>
            </div>
            <div class="main_layer p">
                <div class="hoste_le">  
					                    
                </div>
                <div class="hoste_ri">
                    <ul>
                                                        <li>
                                    <a href="/dpxshop/Home/Goods/goodsInfo/id/159.html">
                                        <img class="picture_main" src="/public/upload/goods/thumb/159/goods_thumb_159_200_200.gif"/>
                                        <span class="name_main">小葱（200g装）</span>
                                        <!--<span class="intro_main">香葱</span>-->
                                        <span class="price_main"><i>￥</i>10.00</span>
                                    </a>
                                </li>
                                                            <li>
                                    <a href="/dpxshop/Home/Goods/goodsInfo/id/160.html">
                                        <img class="picture_main" src="/public/upload/goods/thumb/160/goods_thumb_160_200_200.gif"/>
                                        <span class="name_main">韭菜（100g装）</span>
                                        <!--<span class="intro_main">韭菜</span>-->
                                        <span class="price_main"><i>￥</i>6.00</span>
                                    </a>
                                </li>
                                                            <li>
                                    <a href="/dpxshop/Home/Goods/goodsInfo/id/161.html">
                                        <img class="picture_main" src="/public/upload/goods/thumb/161/goods_thumb_161_200_200.gif"/>
                                        <span class="name_main">茄子(200g装)</span>
                                        <!--<span class="intro_main">茄子</span>-->
                                        <span class="price_main"><i>￥</i>6.00</span>
                                    </a>
                                </li>
                                                            <li>
                                    <a href="/dpxshop/Home/Goods/goodsInfo/id/162.html">
                                        <img class="picture_main" src="/public/upload/goods/thumb/162/goods_thumb_162_200_200.gif"/>
                                        <span class="name_main">尖椒(100g装）</span>
                                        <!--<span class="intro_main">辣椒</span>-->
                                        <span class="price_main"><i>￥</i>5.00</span>
                                    </a>
                                </li>
                                                            <li>
                                    <a href="/dpxshop/Home/Goods/goodsInfo/id/163.html">
                                        <img class="picture_main" src="/public/upload/goods/thumb/163/goods_thumb_163_200_200.gif"/>
                                        <span class="name_main">胡萝卜(2个装)</span>
                                        <!--<span class="intro_main">胡萝卜</span>-->
                                        <span class="price_main"><i>￥</i>5.00</span>
                                    </a>
                                </li>
                                                            <li>
                                    <a href="/dpxshop/Home/Goods/goodsInfo/id/164.html">
                                        <img class="picture_main" src="/public/upload/goods/thumb/164/goods_thumb_164_200_200.gif"/>
                                        <span class="name_main">大白菜（200g）</span>
                                        <!--<span class="intro_main">白菜</span>-->
                                        <span class="price_main"><i>￥</i>6.00</span>
                                    </a>
                                </li>
                                                            <li>
                                    <a href="/dpxshop/Home/Goods/goodsInfo/id/173.html">
                                        <img class="picture_main" src="/public/upload/goods/thumb/173/goods_thumb_173_200_200.jpeg"/>
                                        <span class="name_main">洋葱（2个装）</span>
                                        <!--<span class="intro_main">洋葱</span>-->
                                        <span class="price_main"><i>￥</i>5.00</span>
                                    </a>
                                </li>
                                                            <li>
                                    <a href="/dpxshop/Home/Goods/goodsInfo/id/174.html">
                                        <img class="picture_main" src="/public/upload/goods/thumb/174/goods_thumb_174_200_200.jpeg"/>
                                        <span class="name_main">西红柿（2个装）</span>
                                        <!--<span class="intro_main">番茄</span>-->
                                        <span class="price_main"><i>￥</i>4.00</span>
                                    </a>
                                </li>
                                                </ul>
                </div>
            </div>
        </div>
        </div>
    <!--商品楼层-e-->
        <!--楼层导航-s-->
    <div class="floornav_left">
        <ul>
                            <li class="elevators">
                    <a >1F<span class="cofin_floor">优选鲜果</span></a>
                </li>
                            <li class="elevators">
                    <a >2F<span class="cofin_floor">新鲜蔬菜</span></a>
                </li>
                    </ul>
    </div>
    <!--楼层导航-e-->
<!--------楼层-结束-------------->

    <!--footer-s-->
    <div class="foot-alone tp_h_alone">
       <div class="banner">
        <ul id="service_icons">
            <li class="icons" id="icon_01">
                <img src="/dpxshop/template/pc/rainbow/static/images/icon_vertical.png" alt="">

                <h3 style="font-size: 16px; color: #289031;">全球精选</h3>
                <span>一站式生鲜农产品批发</span>
            </li>
            <li class="icons" id="icon_02">
                <img src="/dpxshop/template/pc/rainbow/static/images/icon_vertical.png" alt="">

                <h3 style="font-size: 16px; color: #289031;">源头直采</h3>
                <span>精选优质好食材</span>
            </li>
            <li class="icons" id="icon_03">
                <img src="/dpxshop/template/pc/rainbow/static/images/icon_vertical.png" alt="">

                <h3 style="font-size: 16px; color: #289031;">优质服务</h3>
                <span>全心全意的为您服务</span>
            </li>
            <li class="icons" id="icon_04">
                <img src="/dpxshop/template/pc/rainbow/static/images/icon_vertical.png" alt="">

                <h3 style="font-size: 16px; color: #289031;">安全保证</h3>
                <span>健全的检疫检测机构</span>
            </li>
        </ul>
    </div>
        <div class="foot-main">
            <div class="w1224">
                <div class="sum_main">
                                            <dl class="foot-con">
                            <dt>售后服务</dt>
                                                        <dd>
                                <a target="_blank" href="/dpxshop/Home/Article/detail/article_id/1.html">联系卖家</a>
                            </dd>
                                                        <dd>
                                <a target="_blank" href="/dpxshop/Home/Article/detail/article_id/1413.html">常见问题</a>
                            </dd>
                                                        <dd>
                                <a target="_blank" href="/dpxshop/Home/Article/detail/article_id/1414.html">投诉管理</a>
                            </dd>
                                                        <dd>
                                <a target="_blank" href="/dpxshop/Home/Article/detail/article_id/1412.html">退货申请</a>
                            </dd>
                                                    </dl>
                                            <dl class="foot-con">
                            <dt>新手上路</dt>
                                                        <dd>
                                <a target="_blank" href="/dpxshop/Home/Article/detail/article_id/1415.html">用户服务</a>
                            </dd>
                                                        <dd>
                                <a target="_blank" href="/dpxshop/Home/Article/detail/article_id/1416.html">账户服务</a>
                            </dd>
                                                        <dd>
                                <a target="_blank" href="/dpxshop/Home/Article/detail/article_id/1417.html">购买流程</a>
                            </dd>
                                                    </dl>
                                            <dl class="foot-con">
                            <dt>农户之家</dt>
                                                        <dd>
                                <a target="_blank" href="/dpxshop/Home/Article/detail/article_id/1421.html"> 农户开店</a>
                            </dd>
                                                        <dd>
                                <a target="_blank" href="/dpxshop/Home/Article/detail/article_id/1422.html">申请说明</a>
                            </dd>
                                                        <dd>
                                <a target="_blank" href="/dpxshop/Home/Article/detail/article_id/1423.html">关于土地</a>
                            </dd>
                                                    </dl>
                                            <dl class="foot-con">
                            <dt>关于我们</dt>
                                                        <dd>
                                <a target="_blank" href="/dpxshop/Home/Article/detail/article_id/1418.html">联系我们</a>
                            </dd>
                                                        <dd>
                                <a target="_blank" href="/dpxshop/Home/Article/detail/article_id/1419.html">人才招聘</a>
                            </dd>
                                                        <dd>
                                <a target="_blank" href="/dpxshop/Home/Article/detail/article_id/1420.html">公司介绍</a>
                            </dd>
                                                    </dl>
                                            <dl class="foot-con">
                            <dt>支付方式</dt>
                                                        <dd>
                                <a target="_blank" href="/dpxshop/Home/Article/detail/article_id/1424.html">支付宝支付</a>
                            </dd>
                                                        <dd>
                                <a target="_blank" href="/dpxshop/Home/Article/detail/article_id/1425.html">在线支付</a>
                            </dd>
                                                        <dd>
                                <a target="_blank" href="/dpxshop/Home/Article/detail/article_id/1426.html">积分支付</a>
                            </dd>
                                                    </dl>
                                        <dl class="foot-con continue">
                        <dt>客服热线</dt> 
                        <dd>
                            <span class="cellphone_con">123456789</span>
                            <span class="time_con">周一至周日8:00-18:00</span>
                            <span class="cost_con">（仅收市话费）</span>
                            <span class ="kefu"style="color:#FFF; width:120px; height:30px;margin-top:10px; background-color:#6ca96e; margin-left:2px; line-height:30px;">八小时在线客服</span>
                        </dd>
                    </dl>
                </div>
            </div>
        </div>
        <div class="foot-bottom">
            <p>Copyright © 2017-2025 大棚侠农家蔬菜联盟 版权所有 保留一切权利 备案号:辽12345678号</p>
        </div>
    </div>
    <!--侧边栏-s-->
    <div class="tp_h_alone">
        <div class="slidebar_alo">
            <ul>
                <li class="re_cuso"><a title="点击这里给我发消息" href="tencent://message/?uin=123456789&amp;Site=TPshop商城&amp;Menu=yes" target="_blank">客服服务</a></li>
                <li class="re_wechat">
                    <a target="_blank" href="" >微信关注</a>
                    <div class="rtipscont" style="">
                        <span class="arrowr-bg"></span>
                        <span class="arrowr"></span>
                        <img src="/dpxshop/template/pc/rainbow/static/images/wei.jpg" />
                        <p class="tiptext">扫码关注官方微信<br>先人一步知晓促销活动</p>
                    </div>
                </li>
                <li class="re_phone">
                    <a target="_blank" href="/dpxshop/Mobile/Index/index.html" >手机商城</a>
                    <div class="rtipscont rstoretips" style="">
                        <span class="arrowr-bg"></span>
                        <span class="arrowr"></span>
                        <img src="/dpxshop/template/pc/rainbow/static/images/wei.jpg" />
                        <p class="tiptext">扫码关注官方微信<br>先人一步知晓促销活动</p>
                    </div>
                </li>
                <li class="re_top"><a target="_blank" href="javascript:void(0);" >回到顶部</a></li>
            </ul>
        </div>
    </div>
    <!--侧边栏-e-->
    <!--footer-e-->
    <script src="/dpxshop/template/pc/rainbow/static/js/common.js" type="text/javascript" charset="utf-8"></script>
    <script src="/dpxshop/template/pc/rainbow/static/js/carousel.js" type="text/javascript" charset="utf-8"></script>
    <script src="/dpxshop/template/pc/rainbow/static/js/transition.js" type="text/javascript" charset="utf-8"></script>
    <script src="/dpxshop/template/pc/rainbow/static/js/headerfooter_alone.js" type="text/javascript" charset="utf-8"></script>
    <!--------收货地址，物流运费-开始-------------->
    <script src="/dpxshop/template/pc/rainbow/static/js/location.js"></script>
    <!--------收货地址，物流运费--结束-------------->
    <script type="text/javascript">
        $(function() {
            //首页商品分类显示
            $('.categorys2 .dd').show();

                var uname= getCookie('uname');
                if(uname == ''){
                    $('.islogin').hide();
                    $('.nologin').show();
                }else{
                    $('.nologin').hide();
                    $('.islogin').show();
                    //获取用户名
                    $('.userinfo').html(decodeURIComponent(uname));
                }
        })
        $(function() { //轮播自动播放
            $(".carousel").carousel({interval: 2000});
        });
        $(function() { //floor分类鼠标滑动
            $(".f_tab li").each(function() {
                $(this).hoverDelay({
                    hoverEvent: function() {
                        $(this).addClass('ft');
                        $(this).siblings().removeClass('ft');
                    },
//			    		outEvent: function(){
//			        		$(this).siblings().removeClass('ft'); 
//			    		}
                });
            })
        });
        /**
         * 鼠标移动端到头部购物车上面 就ajax 加载
         */
        // 鼠标是否移动到了上方
        var header_cart_list_over = 0;
        $("#hd-my-cart > .c-n").hover(function(){
            if(header_cart_list_over == 1)
                return false;
            header_cart_list_over = 1;
            $.ajax({
                type : "GET",
                url:"/index.php?m=Home&c=Cart&a=header_cart_list",//+tab,
                success: function(data){
                    $("#show_minicart").html(data);
                }
            });
        }).mouseout(function(){

            (typeof(t) == "undefined") || clearTimeout(t);
            t = setTimeout(function () {
                header_cart_list_over = 0; /// 标识鼠标已经离开
            }, 1000);
        });
    //楼层按钮
        //楼层添加data-mid
    $(function(){
        var Dum = {};
        Dum.brand = {
            i:0,
            ri:function(e){
                $(e).each(function(){
                    $(this).attr('id','brand_' + Dum.brand.i);
                    Dum.brand.i++
                })
                Dum.brand.i = 0;
                return Dum.brand.i;
            },
        }
        Dum.brand.ri(".layer-floor");
    })
    //侧边导航
    $(function(){
        $(window).scroll(function(){
            var main_brand = $('.adv3').offset().top;
            var scr = $(document).scrollTop();
            if(scr >= main_brand){
                $('.floornav_left').addClass('showfloornav');
            }else{
                $('.floornav_left').removeClass('showfloornav');
            }
        })

        var _index=0;
        var scr = $(document).scrollTop();
        $(".floornav_left ul li").click(function(){
            _index=$(this).index();
            //通过拼接字符串获取元素，再取得相对于文档的高度
            var _top=$("#brand_"+_index).offset().top + 1;//Firefox有1px的误差
            //scrollTop滚动到对应高度
            $("body,html").animate({scrollTop:_top},500);
        });
        $(window).scroll(function(){
            var tj = [];
            var strlength = $('.layer-floor').length;
            var stheigh = $('.layer-floor').eq(strlength - 1).height();//最后一个楼层的高度
            var scr = $(document).scrollTop();
            $('.layer-floor').each(function(i){
                var sthei = $(this).offset().top;
                tj.push(sthei);//楼层距离顶部的高度添加进数组
            })
            for(var n = 0;n < strlength;n++){
                if(scr >= tj[n] && scr <= tj[n] + stheigh){
                    $(".floornav_left ul li").eq(n).addClass("darkshow").siblings().removeClass("darkshow");
                }
            }
        });
    })
    </script>
</body>
</html>
";
?>