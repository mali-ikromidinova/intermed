var swiper2 = new Swiper(".swiper2", {
  slidesPerView: 3,
  slidesPerColumn: 3,
  slidesPerGroup: 2,
  grid: {
    rows: 2,
    fill: "row",
    slidesPerColumnFill: "row",
    direction: "horizontal",
  },
  pagination: {
    el: ".swiper-pagination-2",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    360: {
      slidesPerView: 1,
      spaceBetween: 10,
      slidesPerGroup: 1,
      grid: {
        rows: 1,
      },
    },
    428: {
      slidesPerView: 1.2,
      spaceBetween: 30,
      slidesPerGroup: 1,
      grid: {
        rows: 1,
      },
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 0,
      slidesPerGroup: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
      grid: {
        rows: 2,
      },
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
      slidesPerGroup: 1,
      grid: {
        rows: 2,
      },
      pagination: {
        el: ".swiper-pagination-2",
        clickable: true,
      },
    },
    1440: {
      slidesPerView: 3,
      spaceBetween: 20,
      slidesPerGroup: 1,
      grid: {
        rows: 2,
      },
      pagination: {
        el: ".swiper-pagination-2",
        clickable: true,
      },
    },
    1728: {
      slidesPerView: 2,
      spaceBetween: 20,
      slidesPerGroup: 1,
      grid: {
        rows: 2,
      },
      pagination: {
        el: ".swiper-pagination-2",
        clickable: true,
      },
    },
    2048: {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 1,
    },
  },
});
