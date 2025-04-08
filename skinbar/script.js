// スライドショー
const visuals = document.querySelectorAll('.mainvisuals');
let index = 1;
visuals[0].animate({opacity: [0, 1]}, 1000)
visuals[0].animate({transform: ["scale(1.1)", "scale(1.0)"]}, 5000)
function slideshow(){
    visuals.forEach((visual) => {
        visual.classList.add('hidden');
    })
    if(index < visuals.length){
        visuals[index].classList.remove('hidden');
        visuals[index].animate({opacity: [0, 1]}, 1000)
        visuals[index].animate({transform: ["scale(1.1)", "scale(1.0)"]}, 4500)
    }else{
        index = 0;
        visuals[index].classList.remove('hidden');
        visuals[index].animate({opacity: [0, 1]}, 1000)
        visuals[index].animate({transform: ["scale(1.1)", "scale(1.0)"]}, 4500)
    }
    index++;
}
setInterval(slideshow,5000);

// 最初にページ開いた時のアニメーション
const nav = document.querySelector('.header_nav');
const text = document.querySelector('.mainvisual_text');
const ctaBtn = document.querySelector('.ctaButton');
const scrollbar = document.querySelector('.scroll');
const hamBtn = document.getElementById('hamBtn');

nav.animate({opacity: [0, 1]}, {duration: 1000, delay: 1100, fill: "both"});
text.animate({opacity: [0, 1]}, {duration: 1000, delay: 1000, fill: "both"});
ctaBtn.animate({opacity: [0, 1]}, {duration: 1000, delay: 1200, fill: "both"});
scrollbar.animate({opacity: [0, 1]}, {duration: 1000, delay: 1500, fill: "both"});
hamBtn.animate({opacity: [0, 1]}, {duration: 1000, delay: 1500, fill: "both"});

// FAQのアコーディオン
const faqBtns = document.querySelectorAll('.faq_btn');
const faqPanels = document.querySelectorAll('.faq_answer');

const slideIn = {
    transform: ['translateY(-100%)', 'translateY(0)']
};
const options = {
    duration: 300,
    direction: 'reverse',
}
faqBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        if(btn.nextElementSibling.classList.value === 'answer_wrapper hidden'){
            btn.nextElementSibling.children[0].animate(slideIn,300);
            btn.nextElementSibling.classList.remove('hidden');
            btn.children[0].style.transform = 'rotateX(180deg)';
            btn.style.borderRadius = "10px 10px 0 0";
        }else{
            btn.nextElementSibling.children[0].animate(slideIn,options);
            btn.nextElementSibling.classList.add('hidden');
            btn.children[0].style.transform = 'rotateX(0)';
            btn.style.borderRadius = "10px";

        }
    })
})

// プロダクト横スライド
// コンテナの現在位置left座標を取得し、それにリストの横幅+マージンぶん足してトランスレートさせる仕組み。
// 現在位置left座標が０の時はprevボタンを無効に、現在位置right座標がinnerwidthより小さくなったらnextボタンを無効に。
// 高速でクリックしたら崩れてしまう問題→クリックしたらすぐにボタンを無効化し、トランジション0.5秒が過ぎたらボタンを有効にもどす。
const productsBox = document.getElementById('js-productsBox');
const products = document.querySelectorAll('#js-productsBox li');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const margin = parseFloat(window.getComputedStyle(products[0]).marginRight);

nextBtn.addEventListener('click', () => {
    nextBtn.disabled = true;
    prevBtn.disabled = true;
    const width = products[0].clientWidth + (margin * 2);
    console.log(width);
    let left = productsBox.getBoundingClientRect().left;
    let right = productsBox.getBoundingClientRect().right;
    const translateX = left + -width;
    productsBox.style.transform = `translateX(${translateX}px)`;
    setTimeout(() => {
        prevBtn.disabled = false;
        if(right - width < innerWidth){
            nextBtn.disabled = true;
        }else{
            nextBtn.disabled = false;
        }    
      }, 500);
})
prevBtn.disabled = true; // ページロードした時点ではprevボタンは無効
prevBtn.addEventListener('click', () => {
    nextBtn.disabled = true;
    prevBtn.disabled = true;
    const width = products[0].clientWidth + (margin * 2);
    let left = productsBox.getBoundingClientRect().left;
    const translateX = left + width;
    productsBox.style.transform = `translateX(${translateX}px)`;
    setTimeout(() => {
        nextBtn.disabled = false;
        if(left + width == 0){
            prevBtn.disabled = true;
        }else{
            prevBtn.disabled = false;
        }    
      }, 500);
})
window.addEventListener('resize', () => { // 途中で画面サイズを変えたら崩れるのでリセットする
    prevBtn.disabled = true;
    nextBtn.disabled = false;
    productsBox.style.transform = 'translateX(0px)';
})


// ハンバーガー
// const hamBtn = document.getElementById('hamBtn');
const closeBtn = document.getElementById('closeBtn');
const hamPanel = document.getElementById('hamPanel');
const hamLinks = document.querySelectorAll('#hamPanel a');

hamBtn.addEventListener('click', () => {
    hamPanel.classList.add('show');
    hamPanel.animate({opacity:[0, 1]},500);
})
closeBtn.addEventListener('click', () => {
    hamPanel.classList.remove('show');
})
hamLinks.forEach((link) => {
    link.addEventListener('click', () => {
        hamPanel.classList.remove('show');
    })
})



// トップへ戻るボタン、オンクリック属性使う
function scrollToTop() {
    scrollTo(0, 0);
   }

// トップへ戻るボタンはある程度スクロールしてから出現させる
const toTopBtn = document.getElementById('top');
window.addEventListener('scroll', () =>{
    let scrollY = window.scrollY;
    let vph = window.innerHeight;
    if(scrollY > vph){
        toTopBtn.classList.remove('hidden');
    }else{
        toTopBtn.classList.add('hidden');
    }
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
const optionsForScroll = {
    rootMargin: '0px 0px -15% 0px'
    // 要素がビューポートの下から30%の位置に入ったらisIntersecting===true
}
const observer = new IntersectionObserver(animation, optionsForScroll);
const aniElements = document.querySelectorAll('.js-animation');
aniElements.forEach((element) => {
    observer.observe(element);
})

// 背景遅延パララックス。ずっとスクロールイベントを発生させるのは重いので監視APIと併用する。
const midVisual = document.getElementById('mid_visual');
function plx(entry){
    if(entry[0].isIntersecting === true){
        window.addEventListener('scroll', () => {
            const midVisualTop = midVisual.getBoundingClientRect().top;
            midVisual.style.backgroundPosition = "center " + midVisualTop * 0.5 + "px";
        }) 
    }
}
const observer2 = new IntersectionObserver(plx);
observer2.observe(midVisual);