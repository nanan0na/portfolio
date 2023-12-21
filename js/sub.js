$(function () {
  /* web 슬라이드 */
  const conList1 = new Swiper('.con-list1', {
    loop: true,
    loopedSlides: 1,
    // autoplay: {
    //   delay: 3000,
    //   /*  pauseOnMouseEnter: true, */
    // },
    slidesPerView: 4,
    spaceBetween: 0,
    navigation: {
      nextEl: '.btn-next',
      /*   prevEl: '.btn-prev', */
    },
    slideToClickedSlide: true,
  });
  const conList2 = new Swiper('.con-list2', {
    loop: true,
    loopedSlides: 1,
    slidesPerView: 1,
    grabCursor: true,
  });
  conList1.controller.control = conList2;
  conList2.controller.control = conList1;

  // $('.con-list1 li:eq(2)').ready($('.web h2').text('RESPONSIVE WEB'));
  // $('.con-list1 li:eq(2)').on('ready', function () {
  // $('.web h2').text('RESPONSIVE WEB');
  // });
});
