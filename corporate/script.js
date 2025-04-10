// スライドショー
const slides = document.querySelectorAll('.js-slideshow');
let index = 0;
function slideshow(){
    slides.forEach((slide) => {
        slide.classList.remove('show');
    })
    index++;
    if(index < slides.length){
        slides[index].classList.add('show');
    }else{
        index = 0;
        slides[index].classList.add('show');
    }
}
setInterval(slideshow, 3000);

// ハンバーガーメニュー
const hamBtn = document.getElementById('js-hamBtn');
const closeBtn = document.getElementById('js-closeBtn');
const hamPanel = document.getElementById('js-hamPanel');
const mask = document.getElementById('mask');
const links = document.querySelectorAll('#js-hamPanel li');
const logo = document.querySelector('.logo');

hamBtn.addEventListener('click', () => {
    hamPanel.classList.remove('hidden');
    mask.classList.add('is-on');
})
closeBtn.addEventListener('click', () => {
    hamPanel.classList.add('hidden');
    mask.classList.remove('is-on');
})
mask.addEventListener('click', () => { // マスク部分クリックしても画面閉じる
    hamPanel.classList.add('hidden');
    mask.classList.remove('is-on');
})
links.forEach((link) => { // リンククリックしても画面閉じる
    link.addEventListener('click', () => {
        hamPanel.classList.add('hidden');
        mask.classList.remove('is-on');    
    })
})
logo.addEventListener('click', () => { // ロゴ部分クリックしても画面閉じる
    hamPanel.classList.add('hidden');
    mask.classList.remove('is-on');
})

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
    rootMargin: '0px 0px -30% 0px'
    // 要素がビューポートの下から30%の位置に入ったらisIntersecting===true
}
const observer = new IntersectionObserver(animation,options);
const aniElements = document.querySelectorAll('.js-animation');
aniElements.forEach((element) => {
    observer.observe(element);
})

// オープニングアニメGSAP使用
const openingBg = document.querySelector('.opening_bg');
const openingTx = document.querySelector('.opening_text');
const header = document.getElementById('js-header');
gsap.set(openingTx, {
    opacity: 0,
});
gsap.set(openingBg, {
    y: 0,
});
gsap.set(header, {
    opacity: 0,
    y: -50,
});
gsap.timeline().to(openingTx,{
        opacity: 1,
        duration: 0.5,
        delay: 0.5,
    }).to(openingTx, {
        opacity: 0,
        duration: 1,
        delay: 1,
    }).to(openingBg, {
        x: "100%",
        duration: 0.5,
        delay: 0.5,
    }).to(header, {
        opacity: 1,
        duration: .5,
        y: 0,
        delay: 0.5,
    });
