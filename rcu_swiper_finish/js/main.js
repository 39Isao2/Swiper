// htmlを読み込んだら
$(function(){

    // デフォルト
    //var swiper = new Swiper('.swiper-container');


    // オプション autoplay
    
   // var swiper = new Swiper('.swiper-container', {
   //      speed: 1000,
   //      autoplay: {
   //        delay: 3000,
   //        /*最後のスライドまで行くと最初のスライドに戻って再生し続ける*/
   //        stopOnLastSlide: false,
   //        /*  ユーザーがスライダーを操作した後も自動再生し続ける*/
   //        disableOnInteraction: false,
   //        /* 最初のスライドから順に再生する */
   //        reverseDirection: false
   //      }
   //  });


   // ページネーション
    //  var mySwiper = new Swiper('.swiper-container', {
    //     pagination: {
    //         el: '.swiper-pagination',
    //         type: 'bullets',
    //         clickable: true
    //     }
    // });

    // ページネーション
    var mySwiper = new Swiper('.swiper-container', {
      autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: false,
        reverseDirection: false
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      }
    });



});