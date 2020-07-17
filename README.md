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

    <link rel="stylesheet" href="https://unpkg.com/swiper/swiper-bundle.min.css">
    <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>
    
<br>

## 2、HTMLの記述

クラス名は原則いじらないようにしましょう。class="swiper-slide"のdiv内に画像を入れましょう。
	
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide"><img src="images/mainvisual1.jpg" alt=""></div>
            <div class="swiper-slide"><img src="images/mainvisual2.jpg" alt=""></div>
            <div class="swiper-slide"><img src="images/mainvisual3.jpg" alt=""></div>
        </div>

	    <!-- If we need pagination -->
	    <div class="swiper-pagination"></div>

	    <!-- If we need navigation buttons -->
	    <div class="swiper-button-prev"></div>
	    <div class="swiper-button-next"></div>

	    <!-- If we need scrollbar -->
	    <div class="swiper-scrollbar"></div>
    </div>

<br>

## 3、cssでサイズ調整


```
/* ここから */

.swiper-container {
    width: 100%;
    height: 700px;
}

@media (max-width:767px) {
.swiper-wrapper img {
        width: 100%;
        height: 700px;

        /* 素晴らしい呪文 
        画像の縦横比を維持したままボックスを埋めたい時
        */
       object-fit: cover;
       
       /* 少し上級 */
       object-position: 20% top;
    }
}
```



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
  
### オプション ページネーション


```
/* ここから */
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
```
    

<br>
<br>
<br>
<br>
<br>
