//x, y, z
//transform: translateX()

Splitting();
gsap.from(".main-visual__txt .char", {
  opacity: 0,
  y: 100,
  duration: 1,
  stagger: 0.02,
});

const btnAuto = document.querySelector(".btn--auto");
btnAuto.addEventListener("click", function () {
  if (mainVisualSwiper.autoplay.paused) {
    mainVisualSwiper.autoplay.run();
    btnAuto.classList.remove("off");
  } else {
    mainVisualSwiper.autoplay.pause();
    btnAuto.classList.add("off");
  }
});

const header = document.querySelector(".header");
const gnb = document.querySelector(".gnb");
gnb.addEventListener("mouseenter", function () {
  //console.log("gnb에 마우스 올라감");

  //header가 가지고 있는 클래스 리스트를 보여줌
  header.classList.add("on");
});
gnb.addEventListener("mouseleave", function () {
  header.classList.remove("on");
});

const mainVisualSwiper = new Swiper(".main-visual", {
  //내가 정한 사진 넓이,높이에 자동으로 맞춰달라
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".main-visual .pagination .pagination-box",
    type: "bullets",
    clickable: true,
  },
});
