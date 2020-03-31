//登录检查
function checkLogin() {
    var username = $(".username").val();
    //密码是否显示
    if ($(".pwdBtnShow").attr("isshow") == "false") {
        var password = $(".password").val();
    }
    else {
        var password = $(".password1").val();
    }

    if (!username || username.trim() == "") {
        $(".username").parent().addClass("errorC");
        $(".error1").html("请输入账户名");
        $(".error1").css("display", "block");
    }
    else if (!password || password.trim() == "") {
        $(".password").parent().addClass("errorC");
        $(".error3").html("请填写密码");
        $(".error3").css("display", "block");
    }

    var userinfo = {};
    if(username.trim() == "admin" && password.trim() == "123456"){
        userinfo.name="admin";
        userinfo.psw="123456";
        window.sessionStorage.setItem("userinfo",JSON.stringify(userinfo));
        window.location.href = encodeURI(encodeURI("index.html?username="+userinfo.name));
    }

}
