function Mirror(oBox, oImgBox, obj) {
    this.oBox = oBox
    this.oImgBox = oImgBox
    let defaultObj = {
        width: 80,
        height: 120,
        multiple: 3,
        color: '#000',
        opacity: '0.3',
        left: 0,
        top: 0,
        img: "./images/avocado/imgs01.png"

    }

    for (let key in obj) {
        defaultObj[key] = obj[key]
    }
    for (let key in defaultObj) {
        this[key] = defaultObj[key]
    }

    this.createDom()
    this.addEvent()

}

Mirror.prototype.createDom = function () {
    let htmlStr = ""
    htmlStr += `
            <div style = "
        position: absolute;
        left: ${this.left}px;
        top: ${this.top}px;
        width: ${this.width}px;
        height:${this.height}px;
        background-color: ${this.color};
        opacity:${this.opacity};
        display:none;
        ">
        </div>
        `;
    let boxWidth = this.oBox.offsetWidth
    let boxHeight = this.oBox.offsetHeight
    htmlStr += `
        <div style="
        position: absolute;
        left: ${boxWidth + 20}px;
        top: 0;
        width: ${this.width * this.multiple}px;
        height: ${this.height * this.multiple}px;
        border: 1px solid #000;
        background-image: url(${this.img});
        background-size: ${boxWidth * this.multiple}px ${boxHeight * this.multiple}px;
        background-position: -${this.left * this.multiple}px -${this.top * this.multiple}px;
        display:none
        ">
        </div>
        `;

    this.oBox.innerHTML = htmlStr
}


Mirror.prototype.addEvent = function () {
    let oMirrorBox = this.oBox.lastElementChild.previousElementSibling
    let oShowBox = this.oBox.lastElementChild
    this.oBox.onmouseenter = function () {
        oMirrorBox.style.display = "block"
        oShowBox.style.display = "block"
    }
    this.oImgBox.onmouseenter = function () {
        oImgBox.style.border = "2px solid #999999"
    }

    this.oBox.onmouseleave = function () {
        oMirrorBox.style.display = "none"
        oShowBox.style.display = "none"
    }



    let boxOffsetLeft = this.oBox.offsetLeft
    let boxOffsetTop = this.oBox.offsetTop
    let boxWidth = this.oBox.offsetWidth
    let boxHeight = this.oBox.offsetHeight

    this.oBox.onmousemove = (event) => {
        let e = event || window.event

        this.left = e.pageX - boxOffsetLeft - this.width / 2
        this.top = e.pageY - boxOffsetTop - this.height / 2

        if (this.left < 0) {
            this.left = 0
        }
        else if (this.left + this.width > boxWidth) {
            this.left = boxWidth - this.width
        }

        if (this.top < 0) {
            this.top = 0
        }
        else if (this.top + this.height > boxHeight) {
            this.top = boxHeight - this.height
        }

        oMirrorBox.style.left = this.left + "px";
        oMirrorBox.style.top = this.top + "px";

        oShowBox.style.backgroundPosition = `-${this.left * this.multiple}px -${this.top * this.multiple}px`
    }

    let oLis = this.oImgBox.children
    for (let i = 0; i <= oLis.length; i++) {
        oLis[i].onmousemove = () => {
            this.img = oLis[i].firstElementChild.src
            this.oBox.style.backgroundImage = `url(${this.img})`
            oShowBox.style.backgroundImage = `url(${this.img})`
        }
    }
}






window.onload = function () {
    countDown()
    let oBox = document.getElementById('box')
    let oImgBox = document.getElementById('img-box')
    let m = new Mirror(oBox, oImgBox, {
        width: 200,
        height: 160,
        multiple: 2.5,
        img: "../imgs/imgs01.png"
    })

}


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


$.ajax({
    url: '../data/detail1.json',
    type: 'get',
    data: 'type=3',
    dataType: 'json',
    success: function (json) {
        $.each(json, function (index, item) {
            var goodsDom = `
            <li>
                <a class="list_img" href=""><img src="${item.imgurl}" alt=""></a>
                <span><a href="">${item.title}</a></span>
                <em>${item.price}</em>
            </li>
            `
            $('.right_list').append(goodsDom)
        })
    }
})

$.ajax({
    url: '../data/rank.json',
    type: 'get',
    data: 'type=3',
    dataType: 'json',
    success: function (json) {
        $.each(json, function (index, item) {
            var goodsDom = `
            <dd>
            <span>
            <a class="rank_img" href=""><img src="${item.imgurl}" alt=""></a>
            <a class="tit" href="">${item.title} </a>
            <p>${item.price}</p>
            <a class="check" href="">查看详情</a>
            </span>
            <div class="${item.names}"></div>
            </dd>
            `
            $('.ranking').append(goodsDom)
        })
    }
})

$.ajax({
    url: '../data/detail2.json',
    type: 'get',
    data: 'type=3',
    dataType: 'json',
    success: function (json) {
        $.each(json, function (index, item) {
            var goodsDom = `
            <li>
                <a class="list_img" href=""><img src=${item.imgurl} alt=""></a>
                        <span><a href="">${item.title}</a></span>
                        <p>
                            <em>${item.price}</em>
                            <a class="check" href="">查看详情</a>
                        </p>
                    </li>
            `
            $('.rr_list').append(goodsDom)
        })
    }
})

$('.choose_attr a').click(function () {
    $('.choose_attr a').removeClass("high_bg")
    $(this).addClass('high_bg')

})

$('.more').click(function () {
    $(this).siblings('.list_show').show()
})
$('.closes').click(function () {
    $(this).parents('.list_show').hide()
})
var nums = 1
$(".add").click(function () {
    nums++
    let ttt = $(this).parent('.computing_act').siblings('.txt').val(nums)
})
$(".reduce").click(function () {
    nums--
    if (nums < 1) {
        nums = 1
    }
    let ttt = $(this).parent('.computing_act').siblings('.txt').val(nums)

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
