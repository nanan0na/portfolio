$(function () {
  /* web 슬라이드 */
  const conList1 = new Swiper('.con-list1', {
    loop: true,
    // autoplay: {
    //   delay: 3000,
    //   /*  pauseOnMouseEnter: true, */
    // },
    loopedSlides: 5,
    slidesPerView: 4,
    spaceBetween: 0,
    slideToClickedSlide: true,
    on: {
      slideChange: function () {
        const idx = this.realIndex;
        const workCategory = $(this.slides[idx]).data('category');
        // console.log(this.slides[idx]);

        // h2에 접근해서 idx의 data-category를 텍스트로 넣기
        $('.con-title > h2').text(workCategory);
      },
    },
  });
  const conList2 = new Swiper('.con-list2', {
    loop: true,
    slidesPerView: 1,
    loopedSlides: 5,
    slideToClickedSlide: true,
    navigation: {
      nextEl: '.btn-next',
      /*   prevEl: '.btn-prev', */
    },
    grabCursor: true,
  });
  conList1.controller.control = conList2;
  conList2.controller.control = conList1;
});
