$(function () {
    $.ajax({
        url: '../data/goods.json',
        type: 'get',
        data: 'type=3',
        dataType: 'json',
        success: function (json) {
            $.each(json, function (index, item) {
                var goodsDom = `
                <li>
                <dl>
                <dt><img src="${item.imgurl}" alt=""></dt>
                    <dd>
                        <p>${item.title}</p>
                        <span>${item.price}</span>
                        <i>领劵</i>
                    </dd>
                    <a code=${item.code} class="shopcar" href="javascript:;"><i class="iconfont icon-shoucangjiagou "></i></a>
                    <a class="find" href="javascript:;">找相似</a>
                </dl>
                </li>
                `
                $('.more01').append(goodsDom)
            })
        }
    })

    $.ajax({
        url: '../data/goods2.json',
        type: 'get',
        data: 'type=3',
        dataType: 'json',
        success: function (json) {
            $.each(json, function (index, item) {
                var goodsDom = `
                <li>
                <dl>
                <dt><img src="${item.imgurl}" alt=""></dt>
                    <dd>
                        <p>${item.title}</p>
                        <span>${item.price}</span>
                        <i>领劵</i>
                    </dd>
                    <a code=${item.code} class="shopcar" href="javascript:;"><i class="iconfont icon-shoucangjiagou "></i></a>
                    <a class="find" href="javascript:;">找相似</a>
                </dl>
                </li>
                `
                $('.more02').append(goodsDom)
            })
        }
    })

    $.ajax({
        url: '../data/goods3.json',
        type: 'get',
        data: 'type=3',
        dataType: 'json',
        success: function (json) {
            $.each(json, function (index, item) {
                var goodsDom = `
                <li>
                <dl>
                <dt><img src="${item.imgurl}" alt=""></dt>
                    <dd>
                        <p>${item.title}</p>
                        <span>${item.price}</span>
                        <i>领劵</i>
                    </dd>
                    <a code=${item.code} class="shopcar" href="javascript:;"><i class="iconfont icon-shoucangjiagou "></i></a>
                    <a class="find" href="javascript:;">找相似</a>
                </dl>
                </li>
                `
                $('.more03').append(goodsDom)
            })
        }
    })


    //点击加入购物车
    $('.more03,.more01,.more02').on('click', 'li .shopcar', function () {
        //把点击的商品编号记录下来
        // localStorage key=>val
        if (localStorage.getItem('goods')) {
            var goodsArr = JSON.parse(localStorage.getItem('goods'))
        } else {
            var goodsArr = []
        }

        //获取当前点击商品的商品编码
        var code = $(this).attr('code')
        // console.log(code);

        //记录是否加入过购物车
        var hasCode = false


        //遍历数组,判断是否已经加入购物车
        $.each(goodsArr, function (index, item) {

            if (item.code === code) {
                item.num++
                hasCode = true
            }
        })
        if (!hasCode) {
            goodsArr.push({ "code": code, "num": 1 })
        }

        var strArr = JSON.stringify(goodsArr)
        localStorage.setItem('goods', strArr)

        alert('加入购物车成功')

    })

})