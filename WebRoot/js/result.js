$(function () {
    //顶部广告加单击事件开始
    $('#top_fixed .content img').click(function () {
        $('#top_fixed').stop().fadeOut(600);
    })
    //顶部广告加单击事件结束
    //定位模块悬浮层开始
    $('#nav_fixed .content .nav_con .place').hover(function () {
        $('#nav_fixed .content .nav_con .place .submenu').stop().fadeIn(500);
    }, function () {
        $('#nav_fixed .content .nav_con .place .submenu').stop().fadeOut(500, function () {
            //鼠标移出后隐藏悬浮层,防止影响到其他效果
            $('#nav_fixed .content .nav_con .place .submenu').css({'display': 'none'});
        });
    })
    //定位模块悬浮层结束
    // 我的京东悬浮层开始
    $('#nav_fixed .content .nav_con .my_jd').hover(function () {
        $('#nav_fixed .content .nav_con .my_jd .submenu').stop().fadeIn(500);
    }, function () {
        $('#nav_fixed .content .nav_con .my_jd .submenu').stop().fadeOut(500, function () {
            $('#nav_fixed .content .nav_con .my_jd .submenu').css({'display': 'none'});
        });
    });
    // 我的京东悬浮层结束
    // 客户服务悬浮层开始
    $('#nav_fixed .content .nav_con .service').hover(function () {
        $('#nav_fixed .content .nav_con .service .submenu').stop().fadeIn(500);
    }, function () {
        $('#nav_fixed .content .nav_con .service .submenu').stop().fadeOut(500, function () {
            $('#nav_fixed .content .nav_con .service .submenu').css({'display': 'none'});
        });
    });
    // 客户服务悬浮层结束
    // 网站导航悬浮层开始
    $('#nav_fixed .content .nav_con .navigation').hover(function () {
        $('#nav_fixed .content .nav_con .navigation .submenu').stop().fadeIn(500);
    }, function () {
        $('#nav_fixed .content .nav_con .navigation .submenu').stop().fadeOut(500);
    }, function () {
        $('#nav_fixed .content .nav_con .navigation .submenu').css({'display': 'none'});
    })
    // 网站导航悬浮层结束
    // 手机京东悬浮层开始
    $('#nav_fixed .content .nav_con .p_jd').hover(function () {
        $('#nav_fixed .content .nav_con .p_jd .submenu').stop().fadeIn(500);
    }, function () {
        $('#nav_fixed .content .nav_con .p_jd .submenu').stop().fadeOut(500);
    })
    // 手机京东悬浮层结束
    // 左侧动画广告效果开始
    $('#carousel_fixed .content .ad_left').mouseenter(function () {
        //鼠标移入后清理定时器,解决定时器叠加的bug
        clearTimeout(timer);
        $('#carousel_fixed .content .ad_con').css({'display': 'block'});
        $('#carousel_fixed .content .ad_con img').stop().animate({'left': '0px'}, 350);

    });
    $('#carousel_fixed .content').mouseleave(function () {

        $('#carousel_fixed .content .ad_con img').stop().animate({'left': '-990px'}, 350);
        //设置定时器,让鼠标移出content1秒后让ad_con的display设为none,解决链接覆盖的bug
        timer = setTimeout(function () {
            $('#carousel_fixed .content .ad_con').css({'display': 'none'});
        }, 1000);

    })
    // 左侧动画广告效果结束
    //左侧悬浮层的实现开始

    $('#carousel_fixed .content .left_menu li').hover(function () {
        //获得当前li的序号并存到变量c里
        var c = $(this).index();
        $('#carousel_fixed .content .left_menu li .submenu').eq(c).css({'display': 'block'});
    }, function () {
        //获得当前li的序号并存到变量c里
        var c = $(this).index();
        $('#carousel_fixed .content .left_menu li .submenu').eq(c).css({'display': 'none'});
    });
    //左侧悬浮层的实现结束
    // 搜索框的placeholder动态修改开始

    //抓取placeholder
    var inp = $('#inp');
    //使用定时器动态改变inp的placeholder值
    //定义一个数组存取要展示的placeholder内容
    var arr = ['iPhone', '小米手机', '化妆品', '卡姿兰BB霜', '华为手机', '云米保温杯', '悦米机械键盘', '小米6', '小爱同学'];
    setInterval(function () {
        //使用随机数,将产生的随机数存到数组里,每一秒产生一次随机数,将产生的随机数写入到placeholder里
        var con = Math.floor(Math.random() * (arr.length + 1 - 0) + 0);
        inp.attr({'placeholder': arr[con]});
        // for(var i=0;i<arr.length;i++){
        //     if(i==arr.length){
        //         i=0;
        //     }else{
        //         i=arr.length;
        //     }
        //     inp.attr({'placeholder':arr[i]});
        // }
    }, 1700);
    //点击图片打开上传框开始
    //先定义一个函数为file的上传框点击事件
    function F_Open() {
        $('#btn').click();
    }

    //找到要执行上传事件的div加单击事件,单击后执行定义好的F_open函数
    $('#carousel_fixed .content .search .box .pic_ico').click(F_Open);
    //点击图片打开上传框结束
    // 我的购物车悬浮层开始
    $('#carousel_fixed .content .search .box .my_shopping').hover(function () {
        $('#carousel_fixed .content .search .box .my_shopping .submenu').css({'display': 'block'});
    }, function () {
        $('#carousel_fixed .content .search .box .my_shopping .submenu').css({'display': 'none'});
    })
    // 我的购物车悬浮层结束
    // 搜索框的placeholder动态修改结束

    // 轮播图区域开始
    $('#carousel_fixed .content .take_Turns_pic').hover(function () {
        $('#carousel_fixed .content .take_Turns_pic .left_btn').css({'display': 'block'});
        $('#carousel_fixed .content .take_Turns_pic .right_btn').css({'display': 'block'});
    }, function () {
        $('#carousel_fixed .content .take_Turns_pic .left_btn').css({'display': 'none'});
        $('#carousel_fixed .content .take_Turns_pic .right_btn').css({'display': 'none'});
    });
    var c = 0;

    function run() {
        c++;
        if (c == 8) {
            c = 0;
        }
        $('#carousel_fixed .content .take_Turns_pic .pic_box li').eq(c).stop().fadeIn(500).siblings('li').stop().fadeOut(500);
        $('#carousel_fixed .content .take_Turns_pic .circle li').eq(c).css({'background': 'red'}).siblings('li').css({'background': 'white'});
    };
    var timers = setInterval(run, 2000);

    //手动轮播开始 鼠标移入后清理定时器,移出启动定时器
    $('#carousel_fixed .content .take_Turns_pic').hover(function () {
        clearInterval(timers);
    }, function () {
        timers = setInterval(run, 2000);
    });
    //鼠标移入后,让图片显示,兄弟元素隐藏
    $('#carousel_fixed .content .take_Turns_pic .circle li').mouseenter(function () {
        c = $(this).index();
        $('#carousel_fixed .content .take_Turns_pic .circle li').eq(c).css({'background': 'red'}).siblings('li').css({'background': 'white'});
        $('#carousel_fixed .content .take_Turns_pic .pic_box li').eq(c).stop().fadeIn(500).siblings('li').stop().fadeOut(500);
    });

    //左按钮点击事件
    $('#carousel_fixed .content .take_Turns_pic .left_btn').click(function () {
        c--;
        if (c <= 0) {
            c = 0;
        }
        $('#carousel_fixed .content .take_Turns_pic .pic_box li').eq(c).stop().fadeIn(500).siblings('li').stop().fadeOut(500);

        $('#carousel_fixed .content .take_Turns_pic .circle li').eq(c).css({'background': 'red'}).siblings('li').css({'background': 'white'});
    });
    //右按钮点击事件
    $('#carousel_fixed .content .take_Turns_pic .right_btn').click(function () {
        c++;
        if (c == 8) {
            c = 0;
        }
        $('#carousel_fixed .content .take_Turns_pic .pic_box li').eq(c).stop().fadeIn(500).siblings('li').stop().fadeOut(500);

        $('#carousel_fixed .content .take_Turns_pic .circle li').eq(c).css({'background': 'red'}).siblings('li').css({'background': 'white'});
    });
    //手动轮播结束
    //促销tab选项卡
    $('#carousel_fixed .content .right_con .two .content .menu span').eq(1).mouseenter(function () {
        $('#carousel_fixed .content .right_con .two .content .submenu').css({'display': 'none'});
        $('#carousel_fixed .content .right_con .two .content .menu span').eq(0).css({'border-bottom': 'solid 1px white'});
        $(this).css({'border-bottom': 'solid 1px red'});
        $('#carousel_fixed .content .right_con .two .content .submenu_1').css({'display': 'block'});
    });
    ///公告tab选项卡
    $('#carousel_fixed .content .right_con .two .content .menu span').eq(0).mouseenter(function () {
        $('#carousel_fixed .content .right_con .two .content .submenu_1').css({'display': 'none'});
        $('#carousel_fixed .content .right_con .two .content .menu span').eq(1).css({'border-bottom': 'solid 1px white'});
        $(this).css({'border-bottom': 'solid 1px red'});
        $('#carousel_fixed .content .right_con .two .content .submenu').css({'display': 'block'});
    });
    // 右边三级悬浮层
    $('#carousel_fixed .content .right_con .three .content li .submenu .con .menu li').mouseenter(function () {
        var c = $(this).index();
        if (c == 0) {
            $('#carousel_fixed .content .right_con .three .content li .submenu .con .form_1').css({'display': 'block'});
            $('#carousel_fixed .content .right_con .three .content li .submenu .con .form_2').css({'display': 'none'});
            $('#carousel_fixed .content .right_con .three .content li .submenu .con .form_3').css({'display': 'none'});
        }
        if (c == 1) {
            $('#carousel_fixed .content .right_con .three .content li .submenu .con .form_2').css({'display': 'block'});
            $('#carousel_fixed .content .right_con .three .content li .submenu .con .form_1').css({'display': 'none'});
            $('#carousel_fixed .content .right_con .three .content li .submenu .con .form_3').css({'display': 'none'});
        }
        if (c == 2) {
            $('#carousel_fixed .content .right_con .three .content li .submenu .con .form_3').css({'display': 'block'});
            $('#carousel_fixed .content .right_con .three .content li .submenu .con .form_2').css({'display': 'none'});
            $('#carousel_fixed .content .right_con .three .content li .submenu .con .form_1').css({'display': 'none'});
        }

    })
    // 机票三级悬浮层开始
    $('#carousel_fixed .content .right_con .three .content li .submenu_1 .con .menu li').mouseenter(function () {
        var c = $(this).index();
        if (c == 0) {
            $('#carousel_fixed .content .right_con .three .content li .submenu_1 .con .form_1').css({'display': 'block'});
            $('#carousel_fixed .content .right_con .three .content li .submenu_1 .con .form_2').css({'display': 'none'});
            $('#carousel_fixed .content .right_con .three .content li .submenu_1 .con .form_3').css({'display': 'none'});
        }
        if (c == 1) {
            $('#carousel_fixed .content .right_con .three .content li .submenu_1 .con .form_2').css({'display': 'block'});
            $('#carousel_fixed .content .right_con .three .content li .submenu_1 .con .form_1').css({'display': 'none'});
            $('#carousel_fixed .content .right_con .three .content li .submenu_1 .con .form_3').css({'display': 'none'});
        }
        if (c == 2) {
            $('#carousel_fixed .content .right_con .three .content li .submenu_1 .con .form_3').css({'display': 'block'});
            $('#carousel_fixed .content .right_con .three .content li .submenu_1 .con .form_2').css({'display': 'none'});
            $('#carousel_fixed .content .right_con .three .content li .submenu_1 .con .form_1').css({'display': 'none'});
        }

    })

    // 酒店3级悬浮层开始
    $('#carousel_fixed .content .right_con .three .content li .submenu_2 .con .menu li').mouseenter(function () {
        var c = $(this).index();
        if (c == 0) {
            $('#carousel_fixed .content .right_con .three .content li .submenu_2 .con .form_1').css({'display': 'block'});
            $('#carousel_fixed .content .right_con .three .content li .submenu_2 .con .form_2').css({'display': 'none'});
            $('#carousel_fixed .content .right_con .three .content li .submenu_2 .con .form_3').css({'display': 'none'});
        }
        if (c == 1) {
            $('#carousel_fixed .content .right_con .three .content li .submenu_2 .con .form_2').css({'display': 'block'});
            $('#carousel_fixed .content .right_con .three .content li .submenu_2 .con .form_1').css({'display': 'none'});
            $('#carousel_fixed .content .right_con .three .content li .submenu_2 .con .form_3').css({'display': 'none'});
        }
        if (c == 2) {
            $('#carousel_fixed .content .right_con .three .content li .submenu_2 .con .form_3').css({'display': 'block'});
            $('#carousel_fixed .content .right_con .three .content li .submenu_2 .con .form_2').css({'display': 'none'});
            $('#carousel_fixed .content .right_con .three .content li .submenu_2 .con .form_1').css({'display': 'none'});
        }
        ;

    })
    // 酒店3级悬浮层结束
    // 话费/机票/酒店/火车票悬浮层开始
    $('#sub_1').mouseenter(function () {
        $('#carousel_fixed .content .right_con .three .content li .submenu').css({'display': 'block'});
    });
    //悬浮层内部的话费/机票/酒店/火车票的悬浮层的展示

    // 点击关闭
    $('#carousel_fixed .content .right_con .three .content li .submenu .con .close').click(function () {
        $('#carousel_fixed .content .right_con .three .content li .submenu').css({'display': 'none'});
    });
    // 机票
    $('#sub_2').mouseenter(function () {
        $('#carousel_fixed .content .right_con .three .content li .submenu_1').css({'display': 'block'});
    });
    // 点击关闭
    $('#carousel_fixed .content .right_con .three .content li .submenu_1 .con .close').click(function () {
        $('#carousel_fixed .content .right_con .three .content li .submenu_1').css({'display': 'none'});
    });
    //酒店
    $('#sub_3').mouseenter(function () {
        $('#carousel_fixed .content .right_con .three .content li .submenu_2').css({'display': 'block'});
    });
    // 点击关闭
    $('#carousel_fixed .content .right_con .three .content li .submenu_2 .con .close').click(function () {
        $('#carousel_fixed .content .right_con .three .content li .submenu_2').css({'display': 'none'});
    });
    //火车票
    $('#sub_4').mouseenter(function () {
        $('#carousel_fixed .content .right_con .three .content li .submenu_3').css({'display': 'block'});
    });
    // 点击关闭
    $('#carousel_fixed .content .right_con .three .content li .submenu_3 .con .close').click(function () {
        $('#carousel_fixed .content .right_con .three .content li .submenu_3').css({'display': 'none'});

    });
    // 话费/机票/酒店/火车票悬浮层结束
    // 轮播图区域结束

    // 京东秒杀模块开始
    var hour = $('#Sale_fixed .content .nav_box .right_time .count_down_box .hour p');
    var minute = $('#Sale_fixed .content .nav_box .right_time .count_down_box .minute p');
    var second = $('#Sale_fixed .content .nav_box .right_time .count_down_box .second p');
    var i = 2017;
    var j = 11;
    var k = 18;

    //倒计时函数
    function down() {
//          自定义的时间
        var custom_time = new Date(i, j, k, 15,15, 0);
        //当前系统时间
        var system_time = new Date();
//        现在系统时间距自定义时间相差的毫秒数
        var now_time = custom_time.getTime() - system_time.getTime();
        //如果now_time小于0时,让k++;
        if (now_time < 0) {
            now_time = 0;
            k++;
            if (k > 31) {
                k = 1;
                j++;
                if (j == 11) {
                    i++;
                }
            }
            // if((j==1)&&(i%4==0)&&(i%100==0)&&(i%400==0))
            // {
            //     k++;
            //     //如果是闰年，k的最大值是29，执行完以后，让k=1，让j++
            //     k.max(29);
            //     k=1;
            //     j++;
            // }
            // else{
            //     k++;
            //     k.max(28);
            //     k=1;
            //     j++;
            // }
            // if((j==0)||(j==2)||(j==4)||(j==6)||(j==7)||(j==9)||(j==11))
            // {
            //     k++;
            //     k.max(31);
            //     k=1;
            //     j++;
            //     //如果j的值大于11，让i++，j=0
            //     if(j>11)
            //     {
            //         i++;
            //         j=0;
            //     }
            // }
            // else
            // {
            //     k++;
            //     k.max(30);
            //     k=1;
            //     j++;
            // }

        }
        //计算天
        var day = parseInt(now_time / (24 * 60 * 60 * 1000));
        //获得计算完天后所剩余的毫秒数
        now_time = now_time % (24 * 60 * 60 * 1000);
        //计算小时
        var hours = parseInt(now_time / (60 * 60 * 1000));
        //获得计算完小时后剩余的毫秒数
        now_time = now_time % (60 * 60 * 1000);
        //计算分钟
        var min = parseInt(now_time / (60 * 1000));
        //获得计算完分钟后剩余的总毫秒数
        now_time = now_time % (60 * 1000);
        //计算秒
        var seconds = parseInt(now_time / 1000);
        if (hours < 10) {
            hour.html("0" + hours);
        }
        else {
            hour.html(hours);
        }
        if (min < 10) {
            minute.html('0' + min);
        }
        else {
            minute.html(min);
        }
        if (seconds < 10) {
            second.html('0' + seconds);
        }
        else {
            second.html(seconds);
        }

    }

//    函数调用
    down();
    //定时器
    setInterval(down, 1000);


    $('#Sale_fixed .content .product_display li').hover(function () {
        $(this).find('img').stop().animate({'top': '10px'}, 200);
        $(this).find('.top_content .introduce p').css({'color': 'red'});

    }, function () {
        $(this).find('img').stop().animate({'top': '20px'}, 200);
        $(this).find('.top_content .introduce p').css({'color': '#a1adb6'});
    })
    // 右边手动轮播开始
    $('#Sale_fixed .content .product_display .right_carousel .circle_box li').mouseenter(function () {
        var c = $(this).index();
        $(this).css({'background': '#D0382B'}).siblings('li').css({'background': '#362F31'});
        $('#Sale_fixed .content .product_display .right_carousel img').eq(c).css({'display': 'block'}).siblings('img').css({'display': 'none'});
    });
    var c_1 = 0;

    function lunbo() {
        c_1++;
        if (c_1 > 1) {
            c_1 = 0;
        }
        $('#Sale_fixed .content .product_display .right_carousel img').eq(c_1).fadeIn().siblings('img').fadeOut();
        $('#Sale_fixed .content .product_display .right_carousel .circle_box li').eq(c_1).css({'background': '#D0382B'}).siblings('li').css({'background': '#362F31'});

    };
    var timers_2 = setInterval(lunbo, 4000);
    $('#Sale_fixed .content .product_display .right_carousel .circle_box li').hover(function () {
        clearInterval(timers_2);
    }, function () {
        timers_2 = setInterval(lunbo, 4000);
    });
    //右边手动轮播结束
    // 京东秒杀模块结束

    // 发现好货开始
    $('#discover_fixed .content .module_one .product_display .product_list_box li').hover(function () {
        $(this).find('.pic').stop().animate({'left':'95px'},240,'linear');
    },function () {
        $(this).find('.pic').stop().animate({'left':'102px'},240,'linear');
    });
    // 发现好货结束


    // 会买专辑模块开始
    var c_2 = 0;
    $('#discover_fixed .content .module_two .special_product_box  .praduct_right_btn').click(function () {
        c_2++;
        if(c_2>2)
        {
            c_2=0;
        }

        $('#discover_fixed .content .module_two .special_product_box .product').eq(c_2).css({'display':'block'}).siblings('.product').css({'display':'none'});
        $('#discover_fixed .content .module_two .special_product_box .circle_box li').eq(c_2).css({'background':'red'}).siblings('li').css({'background':'#C7C7C7'});
    });
    $('#discover_fixed .content .module_two .special_product_box .praduct_left_btn').click(function () {
        c_2--;
        if(c_2<0)
        {
            c_2=2;
        }
        $('#discover_fixed .content .module_two .special_product_box .product').eq(c_2).css({'display':'block'}).siblings('.product').css({'display':'none'});
        $('#discover_fixed .content .module_two .special_product_box .circle_box li').eq(c_2).css({'background':'red'}).siblings('li').css({'background':'#C7C7C7'});
    });
    // 鼠标移入后显示按钮 清理定时器
    $('#discover_fixed .content .module_two .special_product_box').hover(function () {
        $('#discover_fixed .content .module_two .special_product_box .praduct_left_btn').css({'display':'block'});
        $('#discover_fixed .content .module_two .special_product_box .praduct_right_btn').css({'display':'block'});
        clearInterval(hmzj_timer);
    },function () {
        $('#discover_fixed .content .module_two .special_product_box .praduct_left_btn').css({'display':'none'});
        $('#discover_fixed .content .module_two .special_product_box .praduct_right_btn').css({'display':'none'});
         hmzj_timer = setInterval(hmzj_run,3000);
    });
    //鼠标移入小圆点
    $('#discover_fixed .content .module_two .special_product_box .circle_box li').mouseenter(function () {
        c_2 = $(this).index();
        $('#discover_fixed .content .module_two .special_product_box .product').eq(c_2).css({'display':'block'}).siblings('.product').css({'display':'none'});
        $('#discover_fixed .content .module_two .special_product_box .circle_box li').eq(c_2).css({'background':'red'}).siblings('li').css({'background':'#C7C7C7'});
    });
    //自动轮播
    function hmzj_run() {
        c_2++;
        if(c_2>2)
        {
            c_2=0;
        }

        $('#discover_fixed .content .module_two .special_product_box .product').eq(c_2).stop().fadeIn().siblings('.product').stop().fadeOut();
        $('#discover_fixed .content .module_two .special_product_box .circle_box li').eq(c_2).css({'background':'red'}).siblings('li').css({'background':'#C7C7C7'});
    };
    var hmzj_timer = setInterval(hmzj_run,3000);

    // 排行榜模块
    $('#discover_fixed .content .module_three .praduct_show .top_menu li').mouseenter(function () {
        $(this).css({'border-bottom':'solid 2px red'}).siblings('li').css({'border-bottom':'none'});
        var phb_c = $(this).index();
        $('#discover_fixed .content .module_three .praduct_show .list_pic').eq(phb_c).css({'display':'block'}).siblings('.list_pic').css({'display':'none'});
    });
    $('#discover_fixed .content .module_three .praduct_show .list_pic li').hover(function () {
        $(this).find('a').css({'color':'red'});
    },function () {
        $(this).find('a').css({'color':'#747474'});
    });
    // 会买专辑模块结束
    // 领券中心模块开始
    $('#neck_fixed .content .product_show_box .product_list li').hover(function () {
        $(this).find('img').stop().animate({'left':'50px'},300);
    },function () {
        $(this).find('img').stop().animate({'left':'40px'},300);
    });
    // 领券中心模块结束
    // 觅me开始
    var me_c = 0;
    $('#neck_fixed .content .right_btn').click(function () {
        me_c++;
        if(me_c>4)
        {
            me_c=0;
        }

        $('#neck_fixed .content .seek_product_box .seek_list li').eq(me_c).css({'display':'block'}).siblings('li').css({'display':'none'});
        $('#neck_fixed .content .seek_product_box .circle_box li').eq(me_c).css({'background':'red'}).siblings('li').css({'background':'#C6C6C6'});
    });
    var me_c = 0;
    $('#neck_fixed .content .left_btn').click(function () {
        me_c--;
        if(me_c<0)
        {
            me_c=4;
        }

        $('#neck_fixed .content .seek_product_box .seek_list li').eq(me_c).css({'display':'block'}).siblings('li').css({'display':'none'});
        $('#neck_fixed .content .seek_product_box .circle_box li').eq(me_c).css({'background':'red'}).siblings('li').css({'background':'#C6C6C6'})
    });
    function me_run() {
        me_c++;
        if(me_c>4)
        {
            me_c=0;
        }
        $('#neck_fixed .content .seek_product_box .seek_list li').eq(me_c).stop().fadeIn().siblings('li').stop().fadeOut();
        $('#neck_fixed .content .seek_product_box .circle_box li').eq(me_c).css({'background':'red'}).siblings('li').css({'background':'#C6C6C6'});
    };
    var me_timer = setInterval(me_run,3000);
    //小圆点轮播
    $('#neck_fixed .content .seek_product_box').hover(function () {
        clearInterval(me_timer);
        $('#neck_fixed .content .left_btn').css({'display':'block'});
        $('#neck_fixed .content .right_btn').css({'display':'block'});
    },function () {
        me_timer = setInterval(me_run,3000);
        $('#neck_fixed .content .left_btn').css({'display':'none'});
        $('#neck_fixed .content .right_btn').css({'display':'none'});
    });
    $('#neck_fixed .content .seek_product_box .circle_box li').hover(function () {
        me_c = $(this).index();
        $('#neck_fixed .content .seek_product_box .seek_list li').eq(me_c).stop().fadeIn().siblings('li').stop().fadeOut();
        $('#neck_fixed .content .seek_product_box .circle_box li').eq(me_c).css({'background':'red'}).siblings('li').css({'background':'#C6C6C6'});
    });
    // 觅me结束
    // 广告1开始
    $('#advertising_fixed .content ul li').hover(function () {
        $(this).find('.mask').css({'display':'block'});
    },function () {
        $(this).find('.mask').css({'display':'none'});
    });
    // 广告2开始
    $('#advertising1_fixed .content ul li').hover(function () {
        $(this).find('.mask').css({'display':'block'});
    },function () {
        $(this).find('.mask').css({'display':'none'});
    });
    //广告3开始
    $('#loveLive_fixed .content .advertising1_fixed .content ul li').hover(function () {
        $(this).find('.mask').css({'display':'block'});
    },function () {
        $(this).find('.mask').css({'display':'none'});
    });
    // 广告3结束
    // 广告4开始
    $('#advertising4_fixed .content ul li').hover(function () {
        $(this).find('.mask').css({'display':'block'});
    },function () {
        $(this).find('.mask').css({'display':'none'});
    });

    //固定搜索栏开始
    //抓取placeholder
    var text = $('#search_bar .content .search_box .text');
    //使用定时器动态改变inp的placeholder值
    //定义一个数组存取要展示的placeholder内容
    var arr = ['iPhone', '小米手机', '化妆品', '卡姿兰BB霜', '华为手机', '云米保温杯', '悦米机械键盘', '小米6', '小爱同学'];
    setInterval(function () {
        //使用随机数,将产生的随机数存到数组里,每一秒产生一次随机数,将产生的随机数写入到placeholder里
        var con = Math.floor(Math.random() * (arr.length + 1 - 0) + 0);
        text.attr({'placeholder': arr[con]});
        // for(var i=0;i<arr.length;i++){
        //     if(i==arr.length){
        //         i=0;
        //     }else{
        //         i=arr.length;
        //     }
        //     inp.attr({'placeholder':arr[i]});
        // }
    }, 1700);
    //给浏览器加滚动条事件
    $(window).scroll(function () {
        //获得当前已经滚动上去的距离
        var t = $(document).scrollTop();
        if(t>660){
            //让导航条固定定位
            $('#search_bar').fadeIn();
        }else{
            //取消导航条固定定位
            $('#search_bar').fadeOut();
        }
    });
    // 固定搜索栏结束
    // 右边固定开始
    $('#right_fixed .list_1 li').hover(function () {
        $(this).css({'background':'#B9352B'}).find('.submenu').css({'display':'block'})
    },function () {
        $(this).css({'background':'#786E6E'}).find('.submenu').css({'display':'none'});
    });

    $('#right_fixed .list_2 li').hover(function () {
        $(this).css({'background':'#B9352B'}).find('.submenu').css({'display':'block'})
    },function () {
        $(this).css({'background':'#786E6E'}).find('.submenu').css({'display':'none'});
    });
    // 右边固定结束
    // 享品质开始
    $('#AlwaysFu .content .product_box .list_left li').hover(function () {
        $(this).find('.right_con img').stop().animate({'left':'-140px'});
    },function () {
        $(this).find('.right_con img').stop().animate({'left':'-130px'});
    })
    // 享品质结束
    // 京东直播开始
    var live_c = 0;
    $('#AlwaysFu .content .live_box .list_1 .left_btn').click(function () {
        live_c--;
        if(live_c<0)
        {
            live_c=4;
        }
        $('#AlwaysFu .content .live_box .list_1 li').eq(live_c).css({'display':'block'}).siblings('li').css({'display':'none'});
        $('#AlwaysFu .content .live_box .list_2 li').eq(live_c).css({'background':'red'}).siblings('li').css({'background':'white'});
    });
    $('#AlwaysFu .content .live_box .list_1 .right_btn').click(function () {
        live_c++;
        if(live_c>4)
        {
            live_c=0;
        }
        $('#AlwaysFu .content .live_box .list_1 li').eq(live_c).css({'display':'block'}).siblings('li').css({'display':'none'});
        $('#AlwaysFu .content .live_box .list_2 li').eq(live_c).css({'background':'red'}).siblings('li').css({'background':'white'});
    });
    //小圆点
    $('#AlwaysFu .content .live_box .list_2 li').mouseenter(function () {
        live_c = $(this).index();
        $('#AlwaysFu .content .live_box .list_1 li').eq(live_c).css({'display':'block'}).siblings('li').css({'display':'none'});
        $('#AlwaysFu .content .live_box .list_2 li').eq(live_c).css({'background':'red'}).siblings('li').css({'background':'white'});
    });
    //自动轮播开始
    function live_run() {
        live_c++;
        if(live_c>4)
        {
            live_c=0;
        }
        $('#AlwaysFu .content .live_box .list_1 li').eq(live_c).stop().fadeIn().siblings('li').stop().fadeOut();
        $('#AlwaysFu .content .live_box .list_2 li').eq(live_c).css({'background':'red'}).siblings('li').css({'background':'white'});
    };
    var live_timer = setInterval(live_run,3000);
    $('#AlwaysFu .content .live_box').hover(function () {
        clearInterval(live_timer);
    },function () {
        live_timer = setInterval(live_run,3000);
    })
    // 自动轮播结束
    //设计师推荐/全球尖货开始
    $('#AlwaysFu .content .product_right ul li').hover(function () {
        $(this).find('img').stop().animate({'left':'-10px'});
    },function () {
        $(this).find('img').stop().animate({'left':'0px'});
    });
    //设计师推荐/全球尖货结束
    // 京东直播结束
    // 爱逛开始
    $('#loveLive_fixed .content .product_box .product .con_box .top .left img').hover(function () {
        $(this).stop().animate({'left':'-10px'});
    },function () {
        $(this).stop().animate({'left':'0px'});
    });
    $('#loveLive_fixed .content .product_box .product .con_box .top ul li').hover(function () {
      $(this).find('.pic img').stop().animate({'left':'-10px'});
    },function () {
        $(this).find('.pic img').stop().animate({'left':'0px'});
    });
    $('#loveLive_fixed .content .product_box .product .con_box .bottom ul li').hover(function () {
        $(this).find('img').stop().animate({'left':'-10px'});
    },function () {
        $(this).find('img').stop().animate({'left':'0px'});
    })
    // 爱逛结束
    // 还没逛够模块开始
    $('#stroll_fixed .content .product_box ul li').hover(function () {
        $(this).find('p').eq(0).css({'color':'red'});
    },function () {
        $(this).find('p').eq(0).css({'color':'#666666'});
    })
    // 还没逛够模块结束

    // 左边固定导航开始
    // var cb = $(window).scrollTop();
    // console.log("当前cb="+cb);
    $('#left_list_fixed ul li').mouseover(function () {
        $(this).css({'background':'red'}).siblings('li').css({'background':'#918888'});
    });
    $(window).scroll(function () {
        //获得当前已经滚动上去的距离
        var t = $(document).scrollTop();
        if(t>1920){
            //让导航条固定定位 添加.f属性
            $('#left_list_fixed').fadeIn();
        }else{
            //取消导航条固定定位 添加.f属性
            $('#left_list_fixed').fadeOut();
        };
        if(t>1980)
        {
            $('#left_list_fixed ul li').eq(0).css({'background':'red'}).siblings('li').css({'background':'#918888'});
        }
        if(t>=2660){
            $('#left_list_fixed ul li').eq(1).css({'background':'red'}).siblings('li').css({'background':'#918888'});
        }
        if(t>=3260){
            $('#left_list_fixed ul li').eq(2).css({'background':'red'}).siblings('li').css({'background':'#918888'});
        }
        if(t>=3840){
            $('#left_list_fixed ul li').eq(3).css({'background':'red'}).siblings('li').css({'background':'#918888'});
        }
        if(t>=4360){
            $('#left_list_fixed ul li').eq(4).css({'background':'red'}).siblings('li').css({'background':'#918888'});
        }
        if(t>=5040){
            $('#left_list_fixed ul li').eq(5).css({'background':'red'}).siblings('li').css({'background':'#918888'});
        }
        if(t>=5580){
            $('#left_list_fixed ul li').eq(6).css({'background':'red'}).siblings('li').css({'background':'#918888'});
        }
        if(t>=6120){
            $('#left_list_fixed ul li').eq(7).css({'background':'red'}).siblings('li').css({'background':'#918888'});
        }

        if(t>=6700){
            $('#left_list_fixed ul li').eq(8).css({'background':'red'}).siblings('li').css({'background':'#918888'});
        }
        if(t>=7260){
            $('#left_list_fixed ul li').eq(9).css({'background':'red'}).siblings('li').css({'background':'#918888'});
        }
        if(t>=8220){
            $('#left_list_fixed ul li').eq(10).css({'background':'red'}).siblings('li').css({'background':'#918888'});
        }
    });
    $('#left_list_fixed ul li').click(function () {
        var c = $(this).index();
        $(this).css({'background':'red'}).siblings('li').css({'background':'#918888'});
       switch (c)
       {
           case 0:
               $(window).scrollTop(1920);
               break;
           case 1:
               $(window).scrollTop(2660);
               break;
           case 2:
               $(window).scrollTop(3260);
               break;
           case 3:
               $(window).scrollTop(3840);
               break;
           case 4:
               $(window).scrollTop(4360);
               break;
           case 5:
               $(window).scrollTop(5040);
               break;
           case 6:
               $(window).scrollTop(5580);
               break;
           case 7:
               $(window).scrollTop(6120);
               break;
           case 8:
               $(window).scrollTop(6700);
               break;
           case 9:
               $(window).scrollTop(7260);
               break;
           case 10:
               $(window).scrollTop(8220);
               break;
           case 11:
               $(window).scrollTop(0);
               $(this).css({'background':'#5E4A4A'});
               break;
       }
    });
    // 左边固定导航结束
    // 登录页面效果开始
    $('#third .con .login_form .mc .ewm .left').hover(function () {
        $(this).stop().animate({'left':'0px'},500,function () {
            $('#third .con .login_form .mc .ewm .right').css({'display':'block'});
        });
    },function () {
        $('#third .con .login_form .mc .ewm .right').css({'display':'none'});
        $(this).stop().animate({'left':'60px'},500,function () {
            $('#third .con .login_form .mc .ewm .right').css({'display':'none'});
        });
    });
    $('#third .con .login_form .menu li').eq(0).click(function () {
        $('#third .con .login_form .mc_1').css({'display':'none'});
        $('#third .con .login_form .mc').css({'display':'block'});
        $('#smdl').css({'font-weight':'600','color':'#E4393C'});
        $('#zhdl').css({'font-weight':'100','color':'#666666'});
    });
    $('#third .con .login_form .menu li').eq(1).click(function () {
        $('#third .con .login_form .mc').css({'display':'none'});
        $('#third .con .login_form .mc_1').css({'display':'block'});
        $('#smdl').css({'font-weight':'100','color':'#666666'});
        $('#zhdl').css({'font-weight':'600','color':'#E4393C'});

    });
    // 登录页面效果结束
});
