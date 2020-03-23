# Swiper
JavaScriptのスライドショー制作のためのライブラリです。

<img src="http://hareumi.com/dhjs/swiper2.png" width="600px">
<br>

参考 <br>
公式サイト https://swiperjs.com/  <br>
ガリガリコード https://garigaricode.com/swiper/
<br>

# 公式サイト→Get Startedを見ながら制作しましょう
公式サイト https://swiperjs.com/  <br><br>



## 1、使用するcssとjsの読み込み

    <link rel="stylesheet" href="https://unpkg.com/swiper/css/swiper.min.css">
    <script src="https://unpkg.com/swiper/js/swiper.min.js"></script>
    
<br>

## 2、HTMLの記述

クラス名は原則いじらないようにしましょう。class="swiper-slide"のdiv内に画像を入れましょう。
	
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="ここにパス"></div>
            <div class="swiper-slide"><img src="ここにパス"></div>
            <div class="swiper-slide"><img src="ここにパス"></div>
            <div class="swiper-slide"><img src="ここにパス"></div>
        </div>

        <!--<div class="swiper-button-prev"></div>-->
        <!--<div class="swiper-button-next"></div>-->
    </div>

<br>

## 3、cssでサイズ調整
    .swiper-container {
        width: 800px;
        height: auto;
    }
    .swiper-container img{
      width: 100%;
      height: auto;
    }
    @media screen and (max-width: 768px) {
      .swiper-container{
        width: 100%;
      }
    }

## 4、JavaScriptの記述

### デフォルト

    var swiper = new Swiper('.swiper-container');
    
### オプション autoPlay
    
    var swiper = new Swiper('.swiper-container', {
    speed: 1000,
    autoplay: {
      delay: 3000,
      /*最後のスライドまで行くと最初のスライドに戻って再生し続ける*/
      stopOnLastSlide: false,
      /*  ユーザーがスライダーを操作した後も自動再生し続ける*/
      disableOnInteraction: false,
      /* 最初のスライドから順に再生する */
      reverseDirection: false
    }
    });
  
### オプション 3枚スライド
    
    var swiper = new Swiper('.swiper-container', {
    effect: 'coverflow',
    slidesPerView: 3,
    autoplay: {
      delay: 3000,
      stopOnLastSlide: false,
      disableOnInteraction: false,
      reverseDirection: false
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
    });
    

<br>
<br>
<br>
<br>
<br>
