let ord = 0
let myTimer = null
let $img = $("#img-box>img")
let $li = $("#banner>ul>li")
let hrefs = ["https://www.baidu.com",
    "http://www.1000phone.com",
    "./banner.html"]
function autoPlay() {
    myTimer = setInterval(function () {
        goImg(ord + 1)
    }, 3000)
}

function goImg(transOrd) {
    if (transOrd == ord) {
        return
    }


    let outOrd = ord
    ord = transOrd

    //边界处理
    if (ord > $img.length - 1) {
        ord = 0;
    } else if (ord < 0) {
        ord = $img.length - 1;
    }

    //让一张图片淡出，一张图片淡入
    /* $img.eq(outOrd).animate({
        "opacity": 0
    }, 1000)

    $img.eq(ord).animate({
        "opacity": 1
    }, 1000) */

    $img.eq(outOrd).animate({ "opacity": 0 }, 1500);
    $img.eq(ord).animate({ "opacity": 1 }, 1500);


    //让豆豆变颜色
    $li.eq(outOrd).css({
        "background-color": "#fff",
        "color": "#000"
    }
    )
    $li.eq(ord).css({
        "background-color": "#333333",
        "color": "#ffffff"
    })
}
/*  function stopPlay() {
        window.clearInterval(myTimer)
     myTimer = null
 } */
function stopPlay() {
    window.clearInterval(myTimer);
    myTimer = null;
}

$(function () {
    //自动播放
    autoPlay()

    //点击豆豆跳转到相应的图片
    $("#banner>ul>li").mouseover(function () {
        stopPlay()
        goImg($(this).index())
    })


    //鼠标放入停止
    $("#img-box").mouseover(function () {
        stopPlay()
    })

    //鼠标离开继续播放
    $("#img-box").mouseout(function () {
        autoPlay()
    })


    $("#img-box").click(function () {
        window.open(hrefs[ord])
    });

})


//倒计时
function countDown() {
    var date = new Date()
    var now = date.getTime()
    var str = '2020-8-1 00:00:00'
    var endDate = new Date(str)
    var end = endDate.getTime()
    var timer = end - now
    if (timer >= 0) {
        // var d = parseInt(timer / 1000 / 60 / 60 / 24)
        var h = parseInt(timer / 1000 / 60 / 60 % 24)
        var m = parseInt(timer / 1000 / 60 % 60)
        var s = parseInt(timer / 1000 % 60)
    }
    // document.getElementById('day').innerHTML = buling(d)
    document.getElementById('hour').innerHTML = buling(h)
    document.getElementById('minute').innerHTML = buling(m)
    document.getElementById('second').innerHTML = buling(s)
    setTimeout(countDown, 1000)
}

function buling(num) {
    return num < 10 ? '0' + num : num
}
window.onload = function () {
    countDown()
}


//全部类目

$("#all_class").mouseenter(function () {
    $("#all_class").siblings(".open").css({
        "opacity": "1"
    })
})
$(".open").mouseleave(function () {
    $(".open").css({
        "opacity": "0"
    })
})

$(".tit1").click(function () {
    window.open("list.html", "_blank")
})

//送货地址
$("#address").click(function (event) {
    $(".hd_city").show()
    event.stopPropagation()
})

$(".city_close").click(function () {
    $(".hd_city").hide()
})

$(document).click(function () {
    $(".hd_city").hide()
})



$(".hd_city a").click(function () {
    let city = $(this).html()
    $("#local_city").text(city)

    $(".hd_hotcity a").click(function () {
        // $(this).css({
        //     "color": "green"
        // })
        let arr = $(this).html()
        var subarr = arr.substring(0, 2)
        $("#local_city").text(subarr)
    })

})



// $("#backTop").click(function () {
//     $("#appfixed").slideUp("slow");
// })

$('#backTop').click(function () {
    $('html,body,#appfixed').animate({ scrollTop: 500 }, 300);
    return false;
});

// if (scrollTop < 1000) {
//     $("##appfixed").hide()
// }

$("#search_txt").click(function () {
    $(".search_history").show()
})

$(".search_history").mouseleave(function () {
    $(".search_history").hide()
})

$(".shoppingCar").click(function () {
    location.href = "shoppingcar.html"
})

$(document).ready(function () {

    let txt = '欢迎，' + `<span>${getCookie('user')}</span>` + `<a class='btn_close' href="javascript:;">退出</a>`

    $('.msgs').html(txt)

    if (!getCookie('user')) {
        $(".msgs").html(`  <li class="login">Hi，请 <a href="login.html">登录</a></li>
        <li class="reg"><a href="reg.html">注册</a></li>`)
    }
    $(".btn_close").click(function () {
        removeCookie("user")
        $(".msgs").html(`  <li class="login">Hi，请 <a href="login.html">登录</a></li>
        <li class="reg"><a href="reg.html">注册</a></li>`)
    })
})


function fnUP() {
    var speed = 100
    var timer = setInterval(function () {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        document.documentElement.scrollTop = document.body.scrollTop = (scrollTop - speed)
        speed += 30
        if (scrollTop <= 200) {
            clearInterval(timer)
            backTop.style.display = "none"
        }

    }, 30)
}
backTop.onclick = function () {
    fnUP()
}

$(window).bind("scroll", function () {
    var top = $(this).scrollTop(); // 当前窗口的滚动距离
    if (top >= 800) {
        backTop.style.display = "block"
    }
    var juli = $(document).scrollTop();
    if (juli > 300) {
        $('#logo2').show()
        $('#logo2').addClass('logo_active');

    } else {
        $('#logo2').removeClass('logo_active');
        $('#logo2').hide()
    }
});

// $(window).scroll(function () {
//     var juli = $(document).scrollTop();
//     if (juli > 300) {
//         $('#logo2').addClass('logo_active');
//     } else {
//         $('#logo2').removeClass('logo_active');
//     }
// })