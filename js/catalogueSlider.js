const swiper3 = new Swiper(".swiper3", {
  slidesPerView: 5,
  spaceBetween: 10,
  slidesPerGroup: 5,
  loop: true,
  /*   loopFillGroupWithBlank: true, */
  resizeObserver: "false",
  pagination: {
    el: ".swiper-pagination-3",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    300: {
      slidesPerView: 3,
      spaceBetween: 10,
      slidesPerGroup: 1,
    },
    412: {
      slidesPerView: 3,
      spaceBetween: 55,
      slidesPerGroup: 1,
    },
    428: {
      initialSlide: 0,
      slidesPerView: 3,
      spaceBetween: 55,
      slidesPerGroup: 1,
    },
    640: {
      slidesPerView: 4,
      spaceBetween: 0,
      slidesPerGroup: 1,
    },
    /*768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      }, */
  },
});
