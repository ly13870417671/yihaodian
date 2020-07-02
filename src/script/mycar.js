$(function () {
    if (localStorage.getItem('goods')) {

        //购物车中的数据
        var goodsDta = JSON.parse(localStorage.getItem('goods'))

        //根据商品code获取数据
        $.ajax({
            url: '../data/goods.json',
            type: 'get',
            dataType: 'json',
            success: function (json) {

                $.each(goodsDta, function (index, item) {
                    $.each(json, function (i, obj) {
                        if (obj.code == item.code) {
                            var goodsDom = `
                                <div class="car_list list01">
                                <div class="car_tit">
                                    <input type="checkbox" class="ck check_all">
                                    <a class="shop_name " href="">${obj.shopname}</a>
                                </div>
                    
                                <ul class="car_box">
                                    <li class="car_con">
                                        <div class="active">
                                            <input type="checkbox" class="ck check_all">
    
                                            <span class="tag">换购</span>
                                            <span class="tit">指定商品满1元加19.9元换购商品 </span>
                                            <b>|</b>
                                            <span class="state"> 已购1件，还差<em>1</em> 件</span>
                                            <a class="activing" href="">查看活动></a>
                                        </div>
                    
                    
                                    </li>
                                    <li class="car_con">
                                        <div class="car_main">
                    
                                            <div class="car_item">
                    
                                                <div class="item_box">
                                                    <input type="checkbox" class="ck check_all">

                                                    <a class="item_pic" href=""><img src=${obj.imgurl} alt=""></a>
                                                    <a class="item_tit" href="">
                                                        ${obj.title}</a>
                                                    <div class="item_price">
                                                        <span id="item_price">${obj.price}</span>
                                                    </div>
                                                    <div class="item_num">
                                                        <div class="num_act">
                                                            <input class="reduceBtn" type="button" value="-">
                                                            <input class="num_txt" type="text" value=${item.num}>
                                                            <input class="addBtn" type="button" value="+">
                                                        </div>

                                                    </div>
                                                    <div class="item_amount">
                                                        <div class="item_money">${obj.price}</div>
                                                        <div class="item_weight">
                                                            <span id="item_weight" data-weight="${obj.weight}" >${obj.weight}</span> <em>kg</em>
                                                        </div>
                                                    </div>
                                                    <div class="item_act">
                                                        <a class="likeBtn" href="javascript:;"><i class="iconfont icon-xinaixin "></i></a>
                                                        <span class="delBtn" code=${obj.code}><i class="iconfont icon-shanchufenlei"></i></span>
                                                    </div>
                    
                                                </div>
                                                <div class="item_edit">
                                                    <div class="edit_server">
                                                        <i title="支持七天无理由退货" class="server_btn">7</i>
                                                    </div>
                                                    <div class="edit_txt">
                                                        <span>${obj.des}</span>

                                                    </div>
                                                    <div class="edit_tig">
                                                        <i class="iconfont icon-bianji-copy"> </i>
                                                    </div>
                                                    


                                                    <div class="tip_diaLog">
                                                <div class="diaLog_wrap">
                                                    <div class="diaLog_inner">
                                                        <div class="prop_item color_list clear_fix">
                                                            <label for="">颜色</label>
                                                            <ul class="prop_list">
                                                                <li class="seri_attr color_attr">
                                                                    <a class="cur" href="javascript:;">白黑
                                                                    <i></i>
                                                                    </a>
                                                                    
                                                                </li>
                                                                <li class="seri_attr color_attr">
                                                                    <a href="javascript:;">黑橘
                                                                    <i></i></a>
                                                                
                                                                </li>
                                                            </ul>
                                                        </div>

                                                        <div class="prop_item color_list clear_fix">
                                                            <label for="">尺码</label>
                                                            <ul class="prop_list">
                                                                <li class="seri_attr size_attr">
                                                                    <a class="cur" href="javascript:;">39
                                                                    <i></i></a>
                                                                    
                                                                </li>
                                                                <li class="seri_attr size_attr" >
                                                                    <a href="javascript:;">40
                                                                    <i></i></a>
                                                                
                                                                </li>
                                                                <li class="seri_attr size_attr">
                                                                    <a href="javascript:;">41
                                                                    <i></i></a>
                                                                    
                                                                </li>
                                                                <li class="seri_attr size_attr">
                                                                    <a href="javascript:;">42
                                                                    <i></i></a>
                                                                    
                                                                </li>
                                                                <li class="seri_attr size_attr">
                                                                    <a href="javascript:;">43
                                                                    <i></i></a>
                                                                    
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div id="btn_boxs">
                                                            <a href="javascript:;" class="confirm unable">确定</a>
                                                            <a href="javascript:;" class="cancel close">取消</a>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
             
                                        </div>
                                    </li>
                    
                                </ul>
                                <div class="car_amount">
                                    <div class="amount">
                                        商品总价：<em>￥</em><span class="alll">0</span>
                                        
                                    </div>
                                </div>
                            </div>
                                `

                            $('.con-wrap').append(goodsDom)
                        }

                    })
                    $('.likeBtn').click(function () {
                        // alert('您还没登录哦!')
                        $(this).children("i").css({
                            "color": "red"
                        })
                    })


                })

                $(".edit_tig").click(function () {
                    $(this).siblings(".tip_diaLog").show(300)
                })
                $(".close").click(function () {
                    $(this).closest(".tip_diaLog").hide(300)
                })

                $(".color_attr a").click(function () {
                    $('.color_attr a').removeClass("cur")
                    $(this).addClass('cur')
                })
                $(".size_attr a").click(function () {
                    $('.size_attr a').removeClass("cur")
                    $(this).addClass('cur')
                })
                $(".confirm").click(function () {
                    $(this).closest(".tip_diaLog").hide()

                })

                $(document).ready(function () {

                    $('.count_num').text($('.num_txt').val())
                });


                //点击全选
                $('.all').click(function () {
                    if ($(this).prop('checked')) {
                        $('.car_list .ck').prop('checked', true)

                    }
                    else {
                        $('.car_list .ck').prop('checked', false)
                    }

                })

                //选择全选

                $('.car_list').on('click', '.ck', function () {

                    var selectArr = []
                    $('.car_list .ck').each(function (index, item) {
                        if ($(item).prop('checked')) {
                            selectArr.push('a')
                        }
                        else {
                            selectArr.push('b')
                        }
                    })
                    if (selectArr.indexOf('b') == -1) {
                        $('.all').prop('checked', true)
                    }
                    else {
                        $('.all').prop('checked', false)
                    }

                })

                $(function () {
                    allCheck()
                    $('.car_list .ck,.check_all').prop('checked', true)

                    totalPrice()
                    $(document).on('click', '.num_act .addBtn', function () {
                        var _input = $(this).siblings('.num_txt');
                        $(this).siblings('.num_txt').val(parseInt(_input.val()) + 1);
                        $(this).closest('.item_box').find('.ck').prop('checked', true)
                        // $('.car_list .ck').prop('checked', true)
                        totalPrice();
                        allCheck()
                    });

                    $(document).on('click', '.num_act .reduceBtn', function () {

                        var _input = $(this).siblings('.num_txt');
                        var _val = parseInt(_input.val()) - 1;
                        if (_val < 1) {
                            $(this).siblings('.num_txt').val('0');
                        } else {
                            $(this).siblings('.num_txt').val(_val);
                        }
                        totalPrice();
                        allCheck()
                    });
                    //input 输入事件
                    $('.num_txt').keyup(function () {
                        totalPrice();
                        allCheck()
                    });

                    //input失焦事件
                    $('.num_txt').blur(function () {
                        var this_val = $(this).val();
                        if (this_val == '' || this_val == 'undefind') {
                            $(this).val('0');
                        } else {
                            $(this).val(this_val);
                        }
                    });


                    function totalPrice() {

                        var now_total = 0;
                        $('.car_list .item_box').each(function (index) {
                            //单价
                            var pp = $(this).find('#item_price').text()
                            var nowPrice = pp.substring(1)
                            //数量
                            var numbers = $(this).find('.num_txt').val();
                            //重量

                            var nowWeight = $(this).find('#item_weight').attr("data-weight")
                            //总价
                            var now_price_total = (nowPrice * numbers)

                            var allweight = nowWeight * numbers
                            $(this).find("#item_weight").text((allweight).toFixed(2))
                            if (now_price_total == 0) {
                                $(this).find('.item_money').html((now_price_total).toFixed(2));
                            } else {
                                $(this).find('.item_money').html('¥' + (now_price_total).toFixed(2));

                            }
                            now_total += now_price_total;
                            console.log('总价：' + now_total);

                            $(this).closest('.item_box').parents('.car_box').siblings('.car_amount').find('.alll').text((now_price_total).toFixed(2));
                            $(this).closest('.item_box').parents('.con-wrap').siblings('#pay').find('#all_money').text((now_total).toFixed(2))

                        })


                    }

                    function allCheck() {
                        var num_total = 0
                        $('.car_list .item_box').each(function (index) {
                            var numbers = $(this).find('.num_txt').val();
                            var numss = parseInt(numbers)
                            num_total += numss
                            $(this).closest('.item_box').parents('.con-wrap').siblings('#pay').find('.count_num').html(num_total)
                        })
                    }

                })

            }

        })



        //删除购物车商品
        var counts = 0
        $('.con-wrap').on('click', '.car_list .delBtn', function () {
            counts++
            $(this).closest('.car_list').remove()
            $("#dels").text(counts)

            var code = $(this).attr('code')
            //splic(起始位置下标，删除几个)
            $.each(goodsDta, function (index, item) {
                if (item.code == code) {
                    goodsDta.splice(index, 1)
                    return false
                }
            })

            if (goodsDta.length > 0) {
                //更新到本地存储中的数据
                localStorage.setItem('goods', JSON.stringify(goodsDta))
            }
            else {
                localStorage.clear()
                var noDate = '<div class="car_list" style="text-align: center; line-height: 250px; font-size:20px">购物车空空如也<a href="index.html" style="font-size:16px;color:#ff4444">去加购宝贝吧!</a></div>'
                $('.con-wrap').append(noDate)
            }

        })


    } else {
        var noDate = '<div class="car_list" style="text-align: center; line-height: 250px; font-size:20px">购物车空空如也<a href="index.html" style="font-size:16px;color:#ff4444">去加购宝贝吧!</a></div>'
        $('.con-wrap').append(noDate)
    }


})
$(document).ready(function () {

    let txt = '欢迎，' + `<span>${getCookie('user')}</span>` + `<a class='btn_close' href="javascript:;">退出</a>`

    $('.msgs').html(txt)

    if (!getCookie('user')) {
        $(".msgs").html(`  <li class="login">欢迎，请 <a href="login.html">登录</a></li>
        <li class="reg"><a href="reg.html">注册</a></li>`)
    }
    $(".btn_close").click(function () {
        removeCookie("user")
        $(".msgs").html(`  <li class="login">欢迎，请 <a href="login.html">登录</a></li>
        <li class="reg"><a href="reg.html">注册</a></li>`)
    })
})