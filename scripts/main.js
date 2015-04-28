/**
 * Created by waylau.com on 2015/4/19.
 */
$(function(){
    NProgress.start();

    $(window).scroll(function(){  //只要窗口滚动,就触发下面代码
        var scrollt = document.documentElement.scrollTop + document.body.scrollTop; //获取滚动后的高度
        if( scrollt >200 ){  //判断滚动后高度超过200px,就显示
            $("#goToTop").fadeIn(400); //淡出
        }else{
            $("#goToTop").stop().fadeOut(400); //如果返回或者没有超过,就淡入.必须加上stop()停止之前动画,否则会出现闪动
        }
    });
    $("#goToTop").click(function(){ //当点击标签的时候,使用animate在200毫秒的时间内,滚到顶部
        $("html,body").animate({scrollTop:"0px"},200);
    });
    NProgress.done();
});
