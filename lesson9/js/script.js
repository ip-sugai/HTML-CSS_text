// jQuery(function(e){e(".gallery").each(function(){e(this).modaal({type:"image"})}),e(".header-button").on("click",function(){e("body").toggleClass("open")})});

//JSの中で、ボタンを制御できるようにする　.header-buttonを取得してきて、変数navBtnとしてコントロールできるようにする 代入という
const navBtn = $('.header-button')

//ナビゲーションも取得する
const gnav = $('.header-gnav')

//ナビの開閉のほか×にする動き、２つの動きがある。
// なのでheader-gnavではなく、bodyそのものにクラスをつけて、2つの要素を総括して動かす
const body = $('body')

//クラス名をつける・外すでナビゲーションメニューを出したりひっこめたりしたい
//1.ボタンをクリックしたら 2.header-gnavにクラスを追加・もしくは削除する
//console.log('クリック')でいったんコンソールログを確認　検証ツールのコンソールにクリックと表示させて、効いていることを確認してから。
//.header-gnav に追加するクラスを　activeというクラス
//JSはクラスのつけ外しをするだけで、開閉の動きは、CSS側でやる(activeクラスを持っていたらtransform:translatex(0)にする)
// navBtn.on('click', () => {
// console.log('クリック')
// gnav.addClass('active')
//付けたり外したりするのがtoggleClass　持ってたら削除し、なかったら取りける
// 押すごとに変わる
// gnav.toggleClass('active')

// })

navBtn.on('click', () => {
  body.toggleClass('active')
})


