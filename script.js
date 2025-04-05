// slideshow
const visuals = document.querySelectorAll('.visual');
let index = 1;
function slideshow(){
    visuals.forEach((visual) => {
        visual.classList.add('hidden');
    })
    if(index < visuals.length){
        visuals[index].classList.remove('hidden');
    }else{
        index = 0;
        visuals[index].classList.remove('hidden');
    }
    index++;
}
setInterval(slideshow,5000);



// スクロールでふわっと表示
// アニメーションさせたい要素にjs-animationクラスを付与、cssで要素.anime-onを用意
function animation(entries){
    entries.forEach((entry) => {
        if(entry.isIntersecting === true){
            entry.target.classList.add('anime-on');
        }
    })
}
const options = {
    rootMargin: '0px 0px -15% 0px'
    // 要素がビューポートの下から30%の位置に入ったらisIntersecting===true
}
const observer = new IntersectionObserver(animation,options);
const aniElements = document.querySelectorAll('.js-animation');
aniElements.forEach((element) => {
    observer.observe(element);
})

// floatingBtn途中から表示
const floatingBtn = document.getElementById('js-floatingBtn');
window.addEventListener('scroll', () => {
    if(window.scrollY > window.innerHeight){
        floatingBtn.classList.remove('hidden');
    }else{
        floatingBtn.classList.add('hidden');
    }
})


// jqueryでアコーディオン
$(function(){
    // アコーディオンメニューのラベルがクリックされた場合
    $(".faq_flex dl dt").on("click", function() {
      // labelクラスの次の要素（detailクラス）の表示・非表示を切り替える
      $(this).next().slideToggle();
      // labelクラスにopenクラスを追加したり削除したりする
      // openクラスの追加、削除を行うことでラベルの「－」と「＋」の切り替えを行う
      $(this).toggleClass("open");
    });
  });