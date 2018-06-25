/*手机大小缩放到一定程度时候，图片相互无缝替换*/

(function() {
  $(window).resize(function() {
    var W = $(window).width();
    if (W <= 640) {
      $(".img-1").attr("src", "images/banner-640-01.jpg");
      $(".img-2").attr("src", "images/banner-640-01.jpg");
    } else {
      $(".img-1").attr("src", "images/banner-2000-01.jpg");
      $(".img-2").attr("src", "images/banner-2000-02.jpg");
    }
  })
}());

/*
/!*固定导航条*!/
$(window).scroll(function(){
  var H = $(document).scrollTop();
  if ( H>=500 ){
    $(".header .navbar").addClass(".navbar-fixed-top");
  }
  else {
    $(".header .navbar").removeClass(".navbar-fixed-top");
  }
});*/

/*/!*nav  鼠标事件*!/
$(".navbar-default .navbar-nav>li").ready(function () {
  var navLi=$(".navbar-default .navbar-nav>.active");
  var navA=$(".navbar-default .navbar-nav>li a");
  navLi.css("background","transparent");
  navA.css("background","transparent");
});*/


/*导航栏 t跳转到相应的楼层*/

(function() {
  $('#header > .navbar-static-top ul li').eq(0).on('click', function() {
    $('html,body').animate({
      scrollTop: $('#header').offset().top - 80
    }, 500);
  });
  $('#header > .navbar-static-top ul li').eq(1).on('click', function() {
    $('html,body').animate({
      scrollTop: $('#page02').offset().top - 80
    }, 500);
  });
  $('#header > .navbar-static-top ul li').eq(2).on('click', function() {
    $('html,body').animate({
      scrollTop: $('#page03').offset().top - 80
    }, 500);
  });
  $('#header > .navbar-static-top ul li').eq(3).on('click', function() {
    $('html,body').animate({
      scrollTop: $('#page04').offset().top - 80
    }, 500);
  });
  $('#header > .navbar-static-top ul li').eq(4).on('click', function() {
    $('html,body').animate({
      scrollTop: $('#page06').offset().top - 80
    }, 500);
  });
}());



/*屏幕缩放到一定大小时，进行图片左右滑动 上下一张*/

var startX = 0,
  startM = 0;
startEnd = 100;

$(".carousel").on("touchstart", function(ev) {
  startX = ev.originalEvent.touches[0].clientX;
});


$(".carousel").on("touchmove", function(ev) {

  startM = ev.originalEvent.touches[0].clientX;
});


$(".carousel").on("touchend", function(ev) {

  if (Math.abs(startX - startM) > startEnd) {

    if (startX - startM == 0) return;
    $(".carousel").carousel(startX > startM ? "next" : "prev");
  }

});


/*分享按钮*/



/*WOW.js  animate.css 可视区域内切换页面效果*/


/*wow 小写是自定义 WOW是自带 大写*/
/*
属性/方法 类型  默认值 说明
boxClass  字符串 ‘wow’ 需要执行动画的元素的 class
animateClass  字符串 ‘animated’  animation.css 动画的 class
offset  整数  0 距离可视区域多少开始执行动画
mobile  布尔值 true  是否在移动设备上执行动画
live  布尔值 true  异步加载的内容是否有效
*/

/*
可以加入 data-wow-duration（动画持续时间）和 data-wow-delay（动画延迟时间）属性，如：

<div class="wow slideInLeft" data-wow-duration="2s" data-wow-delay="5s"></div>
<div class="wow slideInRight" data-wow-offset="10"  data-wow-iteration="10"></div>

*/

/*var wow = new WOW({
  boxClass:'wow',  ///需要执行动画的元素的 class
  animateClass:'animated',   //animation.css 动画的 class
  offset:-300,  //距离可视区域多少开始执行动画
  mobile:true,
  live:true,
})
alert();
wow().init();*/
