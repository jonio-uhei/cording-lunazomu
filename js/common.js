//ここからパララックス
var window_h = $(window).height();
$("#wh span").text(window_h);
//スクロールイベント
$(window).on("scroll", function() {
  var scroll_top = $(window).scrollTop();
  $("#scroll span").text(scroll_top);

  //見出しが左から現れる
  $(".pararax-fromleft").each(function() {
    var elem_pos = $(this).offset().top;
    $(this).find(".box_pos span").text(Math.floor(elem_pos));
  
    //どのタイミングでフェードインさせるか
    if (scroll_top >= elem_pos - window_h+100) {
      $(this).addClass("fadein");
    } else {
      $(this).removeClass("fadein");
    }
  });

  //説明文と画像が右から現れる
  $(".pararax-fromright").each(function() {
    var elem_pos1 = $(this).offset().top;
    $(this).find(".box_pos span").text(Math.floor(elem_pos1));
  
    //どのタイミングでフェードインさせるか
    if (scroll_top >= elem_pos1 - window_h+150) {
      $(this).addClass("move");
    } else {
      $(this).removeClass("move");
    }
  });
});
//ここまでパララックス


//ここからスムーススクロール
$(function(){
  // #で始まるアンカーをクリックした場合に処理
      $('a[href^="#"]').click(function() {
          // スクロールの速度
          var speed = 500; // ミリ秒
          // 移動先を取得
          var href= $(this).attr("href");
          var target = $(href == "#" || href == "" ? 'html' : href);
          // 移動先を数値で取得
          var position = target.offset().top;
          // スムーススクロール
          $('body,html').animate({scrollTop:position}, speed, 'swing');
          return false;
      });
  });
//ここまでスムーススクロール