$(function () {
    // $("table :checkbox:eq(0)").check($("table :checkbox:gt(0)"))
    // $(":checkbox").click(function () {
    //     totalMoney()
    // })

    //添加按钮
    $(".addBtn").click(function () {
        //数量
        let count = $(this).prev().val()
        count++
        $(this).prev().val(count)

        //单价
        let price = $(this).parents(".item_num").siblings(".item_price").children().html()

        //小计
        let money = parseFloat(price * count).toFixed(2)
        $(this).parents(".item_num").next(".item_amount").children(".item_money").html(money)

        let weight = 1.2
        let allweight = parseFloat(weight * count).toFixed(2)
        $(this).parents(".item_num").next(".item_amount").children(".item_weight").children("#item_weight").html(allweight)

        //总金额
        let aa = $(this).parents(".car_box").siblings(".car_amount").children("amount").children().children(".totalPrice").html()
        let goods_price = parseFloat(aa * money * count)
        console.log(goods_price * money)
        // totalMoney()
    })

    //减少按钮
    $(".reduceBtn").click(function () {
        //数量
        let count = $(this).next().val()
        count--
        if (count < 1) {
            count = 0
        }
        $(this).next().val(count)
        //单价
        let price = $(this).parents(".item_num").siblings(".item_price").children().html()
        //小计
        let money = parseFloat(price * count).toFixed(2)
        $(this).parents(".item_num").next(".item_amount").children(".item_money").html(money)

        if (count == 0) {
            // $(this).parent().parent().find(":checkbox").prop("checked,false")
        }
        //重量
        let weight = 0.5
        let allweight = parseFloat(weight * count).toFixed(2)
        $(this).parents(".item_num").next(".item_amount").children(".item_weight").children("#item_weight").html(allweight)

        //总金额
        totalMoney()
    })


    $(".delBtn").click(function () {
        if (confirm("真的要删除吗？请三思")) {
            $(this).parents(".car_list").remove()
            // $(".list01").remove()
            // totalMoney()
            let ss = $("#dels").html()
            ss++
            $("#dels").html(ss)
        }
    })

})

function totalMoney() {
    let money = 0
    let $tr = $("table tr:gt(0)").not("table tr:last")
    $tr.each(function () {
        if ($(this).find(":checkbox").prop("checked")) {
            money += parseFloat($(this).find("td").eq(5).html())
        }
    })

    $("table tr:last").find("span").html(money)
}

function totalMoney() {
    // let goods_price=$(this).
}






//配送地址
class Tab {
    constructor(selecor, obj) {
        this.$box = $(selecor)
        this.$ulTitle = this.$box.children().eq(0)
        this.$liTitle = this.$ulTitle.find("li")
        this.$ulContent = this.$box.children().eq(1);
        this.$liContent = this.$ulContent.find("li");

        let defaulObj = {
            // titleWidth: 60,
            titleHeight: 33,
            titleColor: "#f7f7f7",
            titleHighColor: "#ffffff",
            contentColor: "#fff",
            contentWidth: this.$box.width(),//内容的宽度等于盒子的宽度
            contentHeight: this.$box.height() - 40//内容的高度等于盒子的高度-标题的高度
        }
        for (let key in obj) {
            defaulObj[key] = obj[key]
        }

        for (let key in defaulObj) {
            this[key] = defaulObj[key]
        }

        this.render()
        this.addEvent()
    }

    render() {
        //ul
        this.$ulTitle.css({
            "width": this.$box.width(),
            "height": this.titleHeight,
            "background-color": this.titleColor
        })

        //li
        this.$liTitle.css({
            "float": "left",
            "width": this.titleWidth,
            "height": this.titleHeight,
            "line-height": this.titleHeight + "px",
            "text-align": "center",
            "background-color": this.titleColor,

        })
        // 给标题li的第一个赋值为高亮颜色
        this.$liTitle.eq(2).css({
            "background-color": this.titleHighColor
        })

        //内容部分的css
        //1)ul
        this.$ulContent.css({
            "width": this.contentWidth,
            "height": this.contentHeight,
            "box-sizing": "border-box"
        })

        //2)li
        this.$liContent.css({
            "width": this.contentWidth,
            "height": this.contentHeight,
            "background-color": this.contentColor,
            // "border": "1px solid black",
            "box-sizing": "border-box",
            "display": "none"
        })
        this.$liContent.eq(2).css({
            "display": "block"
        })

    }

    addEvent() {

        this.$liTitle.click((event) => {
            //改变标题的颜色
            this.$liTitle.css({
                "background-color": this.titleColor,
                "border-bottom": 0
            })
            //让点击的li变成高亮
            $(event.target).css({
                "background-color": this.titleHighColor
            })

            //改变内容显示
            this.$liContent.css({
                "display": "none"
            })
            //获取点击的标题li的下标
            let index = $(event.target).index()
            this.$liContent.eq(index).css({
                "display": "block"
            })
        })
    }



}

new Tab("#box", {})

$(".tab_list").children("li").eq(2).children("dd").click(function () {
    $(".tab_list").children("li").eq(2).children("dd").removeClass("bg");
    $(this).addClass('bg')
    let txt = $(this).html()
    $(this).parents(".tab_list").prev().children("li").eq(2).text(txt)
    $(".threecity").text(txt)
    $("#box").hide()
})

$(".tab_list").children("li").eq(1).children("dd").click(function () {
    $(".tab_list").children("li").eq(1).children("dd").removeClass("bg");
    $(this).addClass('bg')
    let txt = $(this).html()
    $(this).parents(".tab_list").prev().children("li").eq(1).text(txt)
    $(".twocity").text(txt)
    $("#box").hide()
})

$(".tab_list").children("li").eq(0).children("dl").children("dd").click(function () {
    $(".tab_list").children("li").eq(0).children("dl").children("dd").removeClass("bg");
    $(this).addClass('bg')
    let txt = $(this).html()
    $(this).parents(".tab_list").prev().children("li").eq(0).text(txt)
    $(".onecity").text(txt)
    $("#box").hide()
})

$(".address").click(function () {
    $("#box").show()
    event.stopPropagation()
})
$(".tab_close").click(function () {
    $("#box").hide()
})

$(document).click(function (e) {
    var _con = $('#box');   // 设置目标区域
    if (!_con.is(e.target) && _con.has(e.target).length === 0) {
        $('#box').hide();
    }
});




$.ajax({
    url: '../data/like.json',
    type: 'get',
    data: 'type=3',
    dataType: 'json',
    success: function (json) {
        $.each(json, function (index, item) {
            var goodsDom = `
            <dl class="sale_item">
                   <dt>
                  <a href=""><img src=${item.imgurl} alt=""></a>
                  <div class="add_shopcar">
                    <i class="iconfont icon-shoucangjiagou "></i>
                  </div>
                    <p class="car_inner" code=${item.code}>加入购物车</p>
                 </dt>
                <dd>
           <p class="p_price">
                  <span>${item.price}</span>
                  </p>

                  <p class="p_tit">
                   <a href="">${item.title}</a>
                  </p>
             </dd>
             </dl>
            `
            $('.sale_scroll').append(goodsDom)
        })
    }
})



