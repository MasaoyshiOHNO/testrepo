window.onhashchange = () => {
  if (window.location.hash === '#top') {
    window.history.replaceState(null, '', window.location.pathname + window.location.search);
  }
};

$(".openbtn1").click(function () {//ボタンがクリックされたら
  $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
    $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".openbtn1").removeClass('active');//ボタンの activeクラスを除去し
    $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});


$(function(){
    $(window).scroll(function (){

      $(".question-img01").each(function(){
        var imgPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > imgPos - windowHeight + windowHeight/5){
          $(this).addClass("slideIn");
        } else {
          $(this).removeClass("slideIn");
        }
      });

      $("h3 img.anim01").each(function(){
        var imgPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > imgPos - windowHeight + windowHeight/5){
          $(this).addClass("fadeIn");
        } else {
          $(this).removeClass("fadeIn");
        }
      });
      $("div.anim01").each(function(){
        var imgPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > imgPos - windowHeight + windowHeight/5){
          $(this).addClass("fadeIn");
        } else {
          $(this).removeClass("fadeIn");
        }
      });
      $("h3 img.anim06").each(function(){
        var imgPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > imgPos - windowHeight + windowHeight/5){
                  $(this).addClass("fadeIn2");
        } else {
          $(this).removeClass("fadeIn2");
        }
      });
      $("div.anim06").each(function(){
        var imgPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > imgPos - windowHeight + windowHeight/5){
                  $(this).addClass("fadeIn2");
        } else {
          $(this).removeClass("fadeIn2");
        }
      });

      $("li.anim02").each(function(){
        var imgPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > imgPos - windowHeight + windowHeight/5){
                  $(this).addClass("slideIn2");
        } else {
          $(this).removeClass("slideIn2");
        }
      });
      $("li.anim03").each(function(){
        var imgPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > imgPos - windowHeight + windowHeight/5){
                  $(this).addClass("slideIn3");
        } else {
          $(this).removeClass("slideIn3");
        }
      });
      $("li.anim04").each(function(){
        var imgPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > imgPos - windowHeight + windowHeight/5){
                  $(this).addClass("slideIn4");
        } else {
          $(this).removeClass("slideIn4");
        }
      });
      $("li.anim05").each(function(){
        var imgPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > imgPos - windowHeight + windowHeight/5){
                  $(this).addClass("slideIn5");
        } else {
          $(this).removeClass("slideIn5");
        }
      });

      $("li.anim07").each(function(){
        var imgPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > imgPos - windowHeight + windowHeight/5){
                  $(this).addClass("slideIn7");
        } else {
          $(this).removeClass("slideIn7");
        }
      });


      $("li.anim08").each(function(){
        var imgPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > imgPos - windowHeight + windowHeight/5){
                  $(this).addClass("fadeIn3");
        } else {
          $(this).removeClass("fadeIn3");
        }
      });

      $("li.anim09").each(function(){
        var imgPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > imgPos - windowHeight + windowHeight/5){
                  $(this).addClass("fadeIn4");
        } else {
          $(this).removeClass("fadeIn4");
        }
      });
      $("li.anim10").each(function(){
        var imgPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > imgPos - windowHeight + windowHeight/5){
                  $(this).addClass("fadeIn5");
        } else {
          $(this).removeClass("fadeIn5");
        }
      });
      $("li.anim11").each(function(){
        var imgPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > imgPos - windowHeight + windowHeight/5){
                  $(this).addClass("fadeIn6");
        } else {
          $(this).removeClass("fadeIn6");
        }
      });
      $("li.anim12").each(function(){
        var imgPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > imgPos - windowHeight + windowHeight/5){
                  $(this).addClass("fadeIn7");
        } else {
          $(this).removeClass("fadeIn7");
        }
      });
      $("li.anim13").each(function(){
        var imgPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > imgPos - windowHeight + windowHeight/5){
                  $(this).addClass("fadeIn8");
        } else {
          $(this).removeClass("fadeIn8");
        }
      });


      $("li.anim14").each(function(){
        var imgPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > imgPos - windowHeight + windowHeight/3){
                  $(this).addClass("fadeIn4");
        } else {
          $(this).removeClass("fadeIn4");
        }
      });
      $("li.anim15").each(function(){
        var imgPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > imgPos - windowHeight + windowHeight/3){
                  $(this).addClass("fadeIn5");
        } else {
          $(this).removeClass("fadeIn5");
        }
      });
      $("li.anim16").each(function(){
        var imgPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > imgPos - windowHeight + windowHeight/3){
                  $(this).addClass("fadeIn6");
        } else {
          $(this).removeClass("fadeIn6");
        }
      });
      $("li.anim17").each(function(){
        var imgPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > imgPos - windowHeight + windowHeight/3){
                  $(this).addClass("fadeIn7");
        } else {
          $(this).removeClass("fadeIn7");
        }
      });


    });
  });