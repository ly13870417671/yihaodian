$("#btn").click(function () {
    //一、前端验证
    if ($("#username").val() == "") {
        alert("请输入账号和密码");
        return;
    }
    if ($("#pass").val() == "") {
        alert("请输入账号和密码");
        return;
    }

    // 二、后端处理
    $.get("../php/loginCheck.php", {
        "username": $("#username").val(),
        "userpass": $("#pass").val()
    }, show);
});

function show(data) {
    if (data == "1") {
        // alert("登录成功")
        $("#msg").css({ "color": "green" }).html("登录成功，<a href='index.html'>首页</a>")
        setCookie({
            key: 'user',
            val: $("#username").val(),
            days: 7
        })

    } else if (data == "0") {
        // alert("登录失败，用户名或者密码不正确")
        $("#msg").css({ "color": "red" }).html("登录失败，用户名或者密码不正确");
    }
}
