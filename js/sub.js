$(function () {
  /* web 슬라이드 */
  const conList1 = new Swiper('.con-list1', {
    loop: true,
    // autoplay: {
    //   delay: 3000,
    //   pauseOnMouseEnter: true,
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

  // script
  // gsap.from('.wrap2 figure', {
  //   clipPath: 'inset(0 0 100% 0)',
  //   duration: 2,
  //   ease: 'power4.inOut',
  // });

  // css
  // .wrap figure {
  //   clip-path: inset(0 100% 0 0);
  //   animation: ani 3s both;
  // }
  // @keyframes ani {
  //   to {
  //     clip-path: inset(0 0 0 0);
  //   }
  // }

  // 1
  // $('.about-list li:nth-child(1)').on('click', () => {
  //   $('.profile').addClass('on');
  //   aboutTL
  //     .to('.about-wrap', { opacity: 0, x: window.innerWidth }, '<')
  //     .from('.profile-title', { autoAlpha: 0, x: -10, delay: 0.3 })
  //     .from('.profile-text ', { autoAlpha: 0 }, '-=0.1');

  //   aboutTL.play();
  // });

  // clip-path가 33.333퍼센트에 머무르다가,
  // 클릭하면 확장되고,
  // 원래있던 배경은 밀려나가면서(동시),
  // 글자들은 하나 둘씩 생겨간다

  // back-btn을 누르면 100%로 확장되어 있던
  // clip-path가 33.3333퍼센트까지 줄어들면서 hidden되게 만든다,
  // 글자는 동시에 사라진다(동시)
  // 밀려나갔던 원래 있던 배경이 다시 나온다

  // 수정중
  $('.about-list li:nth-child(1)').on('click', () => {
    aboutTL
      .from('.profile', {
        autoAlpha: 0,
        clipPath: 'inset(0 33.3% 0 0)',
        duration: 2,
      })
      .to('.about-wrap', { opacity: 0, x: window.innerWidth, clipPath: 'inset(0 0 0 100%)' }, '<')
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

// 함수를 사용하여 섹션 애니메이션 생성
// 나중에 함수로 담을 거
// function createSectionAnimation(sectionSelector, titleSelector, textSelector) {
//   return aboutTL
//     .from(sectionSelector, { autoAlpha: 0, clipPath: 'inset(0 33.3% 0 0)', duration: 2 })
//     .to('.about-wrap', { opacity: 0, x: window.innerWidth, clipPath: 'inset(0 0 0 100%)' }, '<')
//     .from(titleSelector, { autoAlpha: 0, x: -10, delay: 0.3 })
//     .from(textSelector, { autoAlpha: 0 }, '-=0.1');
// }

// // 1번 섹션 클릭 시 애니메이션
// $('.about-list li:nth-child(1)').on('click', () => {
//   createSectionAnimation('.profile', '.profile-title', '.profile-text');
//   aboutTL.play();
// });
