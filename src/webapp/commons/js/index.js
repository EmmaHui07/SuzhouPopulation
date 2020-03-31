$(function () {
    initToolbar();
});

function showMap() {
    $("#iframe_map").css("display","inline-block");
    $("#iframe").css("display","none");
}

function changeIframe(menuName) {
    switch (menuName) {
        case "普查数据台账":
            $("#iframe_map").css("display","none");
            $("#iframe").css("display","inline-block");
            $("#iframe").attr("src","./data.html");
            break;
        case "统计数据台账":
            $("#iframe_map").css("display","none");
            $("#iframe").css("display","inline-block");
            $("#iframe").attr("src","./data.html");
            break;

    }
}
window.changeIframe=changeIframe;

//主页左侧下拉菜单
function initToolbar() {
    $(".leftsidebar_box .main_dd").hide();
    $(".leftsidebar_box .middle_dd").hide();
    $(".leftsidebar_box .child_dd").hide();
    /*主下拉框控制*/
    $(".main_dt").click(function(){
        $(".main_dt").css({"background-color":"#1b2431"});
        $(this).css({"background-color": "#214f61"});
        $(this).parent().find('.main_dd').removeClass("menu_chioce");
        $(this).parent().find('.middle_dd').removeClass("menu_chioce");
        //下拉菜单切换右侧箭头
        if( $(this).parent().find('.main_img').length > 0){
            if($(this).parent().find('.main_img').attr('src').indexOf("select_xl01") > 0){
                $(this).parent().find('.main_img').attr("src","commons/image/index/select_xl.png");
            }else {
                $(this).parent().find('.main_img').attr("src","commons/image/index/select_xl01.png");
            }
        }
        $(".menu_chioce").slideUp();
        $(this).parent().find('.main_dd').slideToggle();//打开对应子菜单
        $(this).parent().find('.middle_dd').slideToggle();//打开对应子菜单
        // $(this).parent().find('.main_dd').addClass("menu_chioce");  //切换菜单隐藏菜单栏
    });
    /*子下拉框控制*/
    $(".child_dt").click(function () {
        $(".child_dt").css({"background-color":"#1b2431"});
        $(this).parent().find('.middle_dd').css({"background-color": "#214f61"});
        $(this).parent().find('.child_dd').removeClass("menu_chioce");
        $(".menu_chioce").slideUp();
        $(this).parent().find('.child_dd').slideToggle();//打开对应子菜单
        $(this).parent().find('.child_dd').addClass("menu_chioce");  //切换菜单隐藏菜单栏
    });
}
//左侧菜单栏隐藏/显示控制
function menuController() {
    $("#leftbar").toggleClass("leftsidebar_box_hide");
    $("#btn_popup").toggleClass("btn_left_hide");
    $("#right_part").toggleClass("right_fullfill");
}
