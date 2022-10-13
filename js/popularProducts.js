const swiper1 = new Swiper(".swiper1", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination-1",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    300: {
      slidesPerView: 1,
      centeredSlides: true,
      spaceBetween: 30,
      slidesPerGroup: 1,
    },
    428: {
      slidesPerView: 1,
      spaceBetween: 30,
      slidesPerGroup: 1,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 30,
      slidesPerGroup: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    990: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1280: {
      centeredSlides: true,
      slidesPerView: 3,
      spaceBetween: 20,
    },
    2048: {
      centeredSlides: true,
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});
