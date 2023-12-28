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

  /* about */

  // 타임라인을 일시 중지 상태로 시작
  const aboutTL = gsap.timeline({ paused: true });

  // 1
  $('.about-list li:nth-child(1)').on('click', () => {
    $('.profile').addClass('on');
    aboutTL
      .to('.about-wrap', { opacity: 0, x: window.innerWidth }, '<')
      .from('.profile-title', { autoAlpha: 0, x: -10, delay: 0.3 })
      .from('.profile-text ', { autoAlpha: 0 }, '-=0.1');

    aboutTL.play();
  });

  // 2
  $('.about-list li:nth-child(2)').on('click', () => {
    $('.more-about').addClass('on');
    aboutTL
      .to('.about-wrap', { opacity: 0, x: window.innerWidth }, '<')
      .from('.more-about-title', { autoAlpha: 0, opcity: 1, x: -10, delay: 0.3 })
      .from('.more-about-text ', { autoAlpha: 0, opcity: 1 }, '-=0.1');

    aboutTL.play();
  });

  // 3
  $('.about-list li:nth-child(3)').on('click', () => {
    $('.epilogue').addClass('on');
    aboutTL
      .to('.about-wrap', { opacity: 0, x: window.innerWidth }, '<')
      .from('.epilogue-title', { autoAlpha: 0, x: -10, delay: 0.3 })
      .from('.epilogue-text ', { autoAlpha: 0 }, '-=0.1');

    aboutTL.play();
  });

  // backBtn 누를 때
  const backBtn = gsap.utils.toArray(document.querySelectorAll('.back-btn'));

  backBtn.forEach((item) => {
    item.addEventListener('click', () => {
      $('section').removeClass('on');

      aboutTL /* .to('.profile', { ease: 'power1.out' }) */
        .to('.about-wrap', { opacity: 1, x: 0, ease: 'power1.out' }, '<');
      aboutTL.play();
    });
  });
});
