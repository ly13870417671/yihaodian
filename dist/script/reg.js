
$("#userName").click(function () {
    $("#userName+.same_label").css({
        "left": "-62px",
        "top": "0px"
    })

    $("#userName+.same_label").parent().siblings(".regsit_tips").show()
})

$("#phone").click(function () {
    $("#phone+.same_label").css({
        "left": "-62px",
        "top": "0px"
    })
    $("#phone+.same_label").parent().siblings(".regsit_tips").show()
})

$("#getRandom").click(function () {
    $("#getRandom+.same_label").css({
        "top": "0px",
        "left": "-96px"
    })
    $("#getRandom+.same_label").parent().siblings(".regsit_tips").show()
})

$("#pass").click(function () {
    $("#pass+.same_label").css({
        "top": "0px",
        "left": "-76px"
    })
    $("#pass+.same_label").parent().siblings(".regsit_tips").show()
})

$("#pass2").click(function () {
    $("#pass2+.same_label").css({
        "top": "0px",
        "left": "-76px"
    })
    $("#pass2+.same_label").parent().siblings(".regsit_tips").show()
})


// let isRight = [0, 0, 0, 0]
let isCheckUser = false
// 用户名
$("#userName").blur(function () {
    // $("#userName").parent().siblings(".regsit_tips").children("tips_box").show()
    isUser()
})
//电话号码
$("#phone").blur(function () {
    isPhone()
})
//密码
$("#pass").blur(function () {
    isPass()
})
//确认密码
$("#pass2").blur(function () {
    isPass2()
})

//用户名
function isUser(cb) {
    //前端验证
    let reg = /[\u4e00-\u9fa5 a-zA-Z0-9\-]{4,20}/
    let atr = $("#userName").val()
    if (reg.test(atr)) {

        $("#userName").parent().siblings(".regsit_tips").children(".tips_rel").show()
        $("#userName").parent().siblings(".regsit_tips").css({
            "background-color": "transparent",
            "color": "transparent",
        })
        $("#userName").parent().siblings(".regsit_tips>.tips_box").hide()
        // $("#userName").parent().siblings(".tips_right").css({
        //     "display": "none",
        //     "font-size": "0px",
        // })
        $("#userName").parent().siblings(".tips_right").hide()
        $(".border_left").css({
            "border-color": "transparent",
        })
        return
    }

    else {

        $("#userName").parent().siblings(".regsit_tips").children(".tips_rel").hide()
        $("#userName").parent().siblings(".tips_right").show()
        $("#userName").parent().siblings(".tips_right").html("请输入正确的用户名,用户名应为4-20位字符")
        $("#userName").parent(".tab_item").css({ "border": "1px solid #ff3c3c" })
        $("#userName").parent().siblings(".regsit_tips").css({
            "color": "#666666",
            "background-color": "#fff4d7",
            // "box-sizing": "border-box",
            // "padding": "10px",
        })
        $(".border_left").css({
            "border-color": "transparent #fff4d7 transparent transparent",
        })
    }

    //后端验证 验证用户名是否存在

    $.get("../php/checkUser.php", {
        "username": $("#userName").val()
    }, function (data) {
        if (data == "0") {
            isCheckUser = true
            $("#userName").parent().siblings(".regsit_tips>.tips_box").show()
            // $("#userName").parent().siblings(".regsit_tips").children(".tips_rel").show()
            $("#userName").parent().siblings(".regsit_tips").children(".tips_box").hide()
            $("#userName").parent().siblings(".regsit_tips").css({
                "background-color": "transparent"
            })
            cb && cb();

        }
        else {
            isCheckUser = false
            $("#userName").parent().siblings(".regsit_tips").children(".tips_rel").hide()
            $("#userName").parent().siblings(".regsit_tips").children(".tips_same").show()
            $(".tips_same").html("您输入的用户名已存在，请重新输入")
            $("#userName").parent().siblings(".regsit_tips").children(".tips_same").css({
                "z-index": 999,
                "color": "#666666",
                "box-sizing": "border-box",
                "padding": "10px",
            })
            return
        }

    })

}


//电话号码
function isPhone() {
    var reg = /^[1][3,4,5,7,8][0-9]{9}$/
    let atr1 = $("#phone").val()
    if (reg.test(atr1)) {
        // isRight[1] = 1
        $("#phone").parent().siblings(".regsit_tips").children(".tips_rel").show()
        $("#phone").parent().siblings(".regsit_tips").children(".tips_box").css({
            "display": "none",
        })
        $("#phone").parent().siblings(".regsit_tips").css({
            "background-color": "transparent"
        })
    }
    else {
        // isRight[2] = 0
        $("#phone").parent(".tab_item").css({ "border": "1px solid #ff3c3c" })
        $("#phone").parent().siblings(".regsit_tips").css({
            "color": "#666666",
            "background-color": "#fff4d7",
            "box-sizing": "border-box",
            "padding": "10px",

        })
        $("#phone").parent().siblings(".regsit_tips").html("格式错误，请输入正确的手机号码")

    }
}


//密码
$("#pass").keyup(function () {
    // isRight[2] = 1
    $("#pass").parent().siblings(".regsit_tips").css({
        "display": "none"
    })
    $("#pass").siblings(".passs").css({
        "display": "block"
    })
    $("#weak").css({
        "background-color": "#fa5921"
    })
    $("#normal").css({
        "background-color": "#fafafa"
    })
    $("#strong").css({
        "background-color": "#fafafa"
    })

    //弱
    var regNum = /^\d{6,20}$/
    var regLetter = /^\[a-zA-Z]{6,20}$/
    var regF = /^([\?!]){6,20}$/

    //中
    var regNumAndLetter = /^[0-9a-zA-Z]{6,20}$/
    var regNumAndF = /^[0-9?!]{6,20}$/
    var regLetterAndF = /^[a-zA-Z?!]{6,20}$/

    //强
    var regStrong = /^[0-9a-zA-Z?!]{6,20}$/


    if (regNum.test(this.value) || regLetter.test(this.value) || regF.test(this.value)) {

        $("#weak").css({
            "background-color": "#fa5921"
        })
        $(".tips_txt").html("低")
    }
    else if (regNumAndLetter.test(this.value) || regNumAndF.test(this.value) || regLetterAndF.test(this.value)) {

        $("#weak").css({
            "background-color": "#f6ba52"
        })
        $("#normal").css({
            "background-color": "#f6ba52"
        })
        $(".tips_txt").html("中")
    }
    else if (regStrong.test(this.value)) {

        $("#weak").css({
            "background-color": "#78ce21"
        })
        $("#normal").css({
            "background-color": "#78ce21"
        })
        $("#strong").css({
            "background-color": "#78ce21"
        })
        $(".tips_txt").html("高")

    }
})

function isPass() {
    var atr3 = $("#pass").val()
    if (atr3 == "") {
        // isRight[2] = 0
        $(".passs").css({
            "display": "none"
        })
        $("#pass").parent().siblings(".regsit_tips").html("密码不能为空")
        $("#pass").parent(".tab_item").css({ "border": "1px solid #ff3c3c" })
        $("#pass").parent().siblings(".regsit_tips").css({
            "width": "92px",
            "height": "40px",
            "top": "5px",
            "color": "#666666",
            "background-color": "#fff4d7",
            "box-sizing": "border-box",
            "padding": "10px",

        })
    }

    else {
        // isRight[2] = 0
        $(".passs").css({
            "display": "none"
        })
        $("#pass").parent(".tab_item").css({ "border": "1px solid #ff3c3c" })
        $("#pass").parent().siblings(".regsit_tips").html("密码应为6-20位字符")

        $("#pass").parent().siblings(".regsit_tips").css({
            "width": "129px",
            "height": "40px",
            "top": "5px",
            "color": "#666666",
            "background-color": "#fff4d7",
            "box-sizing": "border-box",
            "padding": "10px",

        })

    }
}

//确认密码
function isPass2() {
    var atr3 = $("#pass").val()
    var atr4 = $("#pass2").val()
    if (atr3 == atr4) {
        // isRight[3] = 1
        $("#pass2").parent().siblings(".regsit_tips").children(".tips_rel").show()
        $("#pass2").parent().siblings(".regsit_tips").children(".tips_box").css({
            "display": "none",
        })
        $("#pass2").parent().siblings(".regsit_tips").css({
            "background-color": "transparent"
        })
    }
    else {
        // isRight[3] = 0
        $("#pass2").parent(".tab_item").css({ "border": "1px solid #ff3c3c" })
        $("#pass2").parent().siblings(".regsit_tips").css({
            "color": "#666666",
            "background-color": "#fff4d7",
            "box-sizing": "border-box",
            "padding": "10px",

        })
        $("#pass2").parent().siblings(".regsit_tips").html("两次密码不一致")

    }
}



$("#btnReg").click(function () {
    $.post("../php/regSave.php", {
        "username": $("#userName").val(),
        "userpass": $("#pass").val(),
    }, function (data) {
        if (data == "1") {
            $("#message-box")
                .html("注册成功，请<a href='login.html'>登录</a>")
                .css({
                    color: "green"
                })
        }
        else if (data == "0") {
            $("#message-box")
                .html(alert("注册失败"))
                .css({
                    color: "red"
                })
        }
    }
    )

    if ($("#userName").val() == "") {
        alert("用户名不能为空")
        return
    }
    if ($("#phone").val() == "") {
        alert("手机号不能为空")
        return
    }
    if ($("#pass").val() == "") {
        alert("密码不能为空")
        return
    }
    if ($("#pass").val() !== $("#pass2").val()) {
        $("#pass2").parent().siblings(".regsit_tips").html("两次密码不一致")
        return
    }

    if (!isCheckUser) {
        isUser()
        return
    }
    //     let sum = 0
    //     isRight.forEach((item) => {
    //         sum += item
    //         if (sum == 4) {

})
