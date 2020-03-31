$(function () {
    var userinfo =  window.sessionStorage.getItem("userinfo");
    var username = $(".username").val();
    //密码是否显示
    if ($(".pwdBtnShow").attr("isshow") == "false") {
        var password = $(".password").val();
    }
    else {
        var password = $(".password1").val();
    }
    //若为空，表示没有登录
    if(!userinfo){
        window.location.href = 'login.html';
    }

});

