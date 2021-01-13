var swiper = new Swiper('.swiper-container', {
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: 'true',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

  // $('#bujar-back').click(swiper,function(){
  //   swiper.slideTo(2)}),
});

const slides = document.querySelectorAll('.swiper-slide');

slides.forEach((slide, i) => {
  const currentUrl = location.href;
  slideId = '#' + slide.getAttribute('id');
  if (currentUrl.endsWith(slideId)) {
    swiper.slideTo(i, 0);
  }
});

var scrollTop = function () {
  window.scrollTo(0, 0);
};
// document.querySelector('#bruja').addEventListener('click', () => {
//   mySwiper.slideTo(2);
// });
