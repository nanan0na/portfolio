$(function () {
  /* web 슬라이드 */
  const conList1 = new Swiper('.con-list1', {
    loop: true,
    autoplay: {
      delay: 300,
    },
    slidesPerView: 4,
    spaceBetween: 0,
    navigation: {
      nextEl: '.btn-next',
      /*   prevEl: '.btn-prev', */
    },
    slideToClickedSlide: true,
  });
  const conList2 = new Swiper('.con-list2', {
    slidesPerView: 1,
    grabCursor: true,
    pauseOnMouseEnter: true,
  });
  conList1.controller.control = conList2;
  conList2.controller.control = conList1;
});
