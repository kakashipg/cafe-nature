
$(function () {

    // ハンバーガーメニュー
    $(".toggle_btn").on("click", function () {
        ($("#header").toggleClass("open"));
    });
    //  function:実行する
    // .toggleClass:要素のクラス属性に指定したクラスを追加または削除する

    // #maskのエリアをクリックした時にメニューを閉じる
    $("#mask").on("click", function () {
        $("#header").removeClass("open");
    });
    // removeClass:クラスを削除する

    // リンクをクリックした時にメニューを閉じる
    $("#navi a").on("click", function () {
        $("#header").removeClass("open");
    });

      /*=================================================
  スムーススクロール
  ===================================================*/
  // ページ内のリンクをクリックした時に動作する
  $('a[href^="#"]').click(function () {
    // クリックしたaタグのリンクを取得
    let href = $(this).attr("href");
    // ジャンプ先のid名をセット hrefの中身が#もしくは空欄なら,htmlタグをセット
    let target = $(href == "#" || href == "" ? "html" : href);
    // ページトップからジャンプ先の要素までの距離を取得
    let position = target.offset().top;
    // animateでスムーススクロールを行う   ページトップからpositionだけスクロールする
    // 600はスクロール速度で単位はミリ秒  swingはイージングのひとつ
    $("html, body").animate({ scrollTop: position }, 600, "swing");
    // urlが変化しないようにfalseを返す
    return false;   
  });





    //   フェードイン
    $(window).scroll(function () {
        // fadeinクラスに対して順に処理を行う
        $(".menu-fadein").each(function () {
            // スクロールした距離
            let scroll = $(window).scrollTop();
            // fadeinクラスの要素までの距離
            let target = $(this).offset().top;
            // 画面の高さ
            let windowHeight = $(window).height();
            // fadeinクラスの要素が画面下にきてから200px通過した
            // したタイミングで要素を表示
            if (scroll > target - windowHeight + 200) {
                $(this).css("opacity", "1");
                $(this).css("transform", "translateY(0)");
            }
        });
    });

    //アコーディオン（news +)をクリックした時の動作
    $('.title').on('click', function () {//タイトル要素をクリックしたら
        var findElm = $(this).next(".box");//直後のアコーディオンを行うエリアを取得し
        $(findElm).slideToggle();//アコーディオンの上下動作

        if ($(this).hasClass('close')) {//タイトル要素にクラス名closeがあれば
            $(this).removeClass('close');//クラス名を除去し
        } else {//それ以外は
            $(this).addClass('close');//クラス名closeを付与
        }
    });

    //ページが読み込まれた際にopenクラスをつけ、openがついていたら開く動作※不必要なら下記全て削除
    $(window).on('load', function () {
        $('.accordion-area li:first-of-type section').addClass("open"); //accordion-areaのはじめのliにあるsectionにopenクラスを追加
        $(".open").each(function (index, element) { //openクラスを取得
            var Title = $(element).children('.title'); //openクラスの子要素のtitleクラスを取得
            $(Title).addClass('close');       //タイトルにクラス名closeを付与し
            var Box = $(element).children('.box'); //openクラスの子要素boxクラスを取得
            $(Box).slideDown(500);          //アコーディオンを開く
        });
    });

});


function slideAnime() {
    //====左に動くアニメーションここから===
    $('.leftAnime').each(function () {
        var elemPos = $(this).offset().top - 50;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            //左から右へ表示するクラスを付与
            //テキスト要素を挟む親要素（左側）とテキスト要素を元位置でアニメーションをおこなう
            $(this).addClass("slideAnimeLeftRight"); //要素を左枠外にへ移動しCSSアニメーションで左から元の位置に移動
            $(this).children(".leftAnimeInner").addClass("slideAnimeRightLeft");  //子要素は親要素のアニメーションに影響されないように逆の指定をし元の位置をキープするアニメーションをおこなう
        } else {
            //左から右へ表示するクラスを取り除く
            $(this).removeClass("slideAnimeLeftRight");
            $(this).children(".leftAnimeInner").removeClass("slideAnimeRightLeft");

        }
    });

}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
    slideAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
    slideAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述
