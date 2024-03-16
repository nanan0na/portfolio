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

  // 그래픽

  const $dim = $('.dim');
  const $popup = $('.popup');
  const $galleryContent = $('.gallery-content');
  const $btnClose = $('.btn-close');
  const $gallery = $('.graphic-list > li');
  const $window = $(window);
  let currentIndex = 0;

  function showImage(index) {
    const $target = $gallery.eq(index).find('img');
    const imgSrc = $target.attr('src');
    const imgTitle = $target.attr('alt');

    const loadImage = $('<img/>').on('load', function () {
      const $image = $(this);
      $galleryContent.html($image);
      $image.css({
        'object-fit': 'cover',
        height: '90%',
        'max-width': '100%',
      });

      const windowWidth = $window.width();
      const maxPopupWidth = Math.min(windowWidth * 0.9);
      $popup.css('max-width', maxPopupWidth);

      // 중복 제거
      $image.off('load');
      $galleryContent.append('<div class="prev-btn"></div><div class="next-btn"></div>');
    });

    loadImage.attr('src', imgSrc);
    $galleryContent.prepend(`<div class="title">${imgTitle}</div>`);
  }

  $gallery.on('click', function () {
    $dim.fadeIn();
    $popup.addClass('active');

    const $target = $(this).find('img');
    const imgSrc = $target.attr('src');
    const imgTitle = $target.attr('alt');

    if (imgSrc) {
      showImage($gallery.index(this));
    }
  });

  // 좌우버튼
  function showNextImage() {
    currentIndex = (currentIndex + 1) % $gallery.length;
    showImage(currentIndex);
  }
  function showPrevImage() {
    currentIndex = (currentIndex - 1 + $gallery.length) % $gallery.length;
    showImage(currentIndex);
  }

  $galleryContent.on('click', '.next-btn', function () {
    showNextImage();
  });
  $galleryContent.on('click', '.prev-btn', function () {
    showPrevImage();
  });
  $(document).keydown(function (e) {
    if ($popup.hasClass('active')) {
      if (e.keyCode == 37) {
        showPrevImage();
      } else if (e.keyCode == 39) {
        showNextImage();
      }
    }
  });

  // 닫을 떄
  function close() {
    $dim.fadeOut();
    $popup.removeClass('active');
    $galleryContent.html('');
    $popup.css('width', '');
  }
  $dim.on('click', function () {
    close();
  });
  $btnClose.on('click', function () {
    close();
  });
  // esc 누를 때 지워짐
  $(document).keydown(function (e) {
    if (e.keyCode == 27) {
      close();
    }
  });

  /* about */

  // 타임라인을 일시 중지 상태로 시작
  const aboutTL = gsap.timeline({ paused: true });

  // clip-path가 33.333퍼센트에 머무르다가,
  // 클릭하면 확장되고,
  // 원래있던 배경은 밀려나가면서(동시),
  // 글자들은 하나 둘씩 생겨간다

  // 1
  $('.about-list li:nth-child(1)').on('click', () => {
    $('.profile').addClass('on');
    aboutTL
      .to('.profile', { opacity: 1 }, '<')
      .to('.about-wrap', { opacity: 0 }, '<')
      .to('.profile-title', { autoAlpha: 1, x: -10, delay: 0.3 })
      .to('.profile-text ', { autoAlpha: 1 }, '-=0.1');

    aboutTL.play();
  });

  // 2
  $('.about-list li:nth-child(2)').on('click', () => {
    $('.more-about').addClass('on');
    aboutTL
      .to('.more-about', { opacity: 1 }, '<')
      .to('.about-wrap', { opacity: 0 }, '<')
      .to('.more-about-title', { autoAlpha: 1, x: -10, delay: 0.3 })
      .to('.more-about-text ', { autoAlpha: 1 }, '-=0.1');

    aboutTL.play();
  });

  // 3
  $('.about-list li:nth-child(3)').on('click', () => {
    $('.epilogue').addClass('on');
    aboutTL
      .to('.epilogue', { opacity: 1 }, '<')
      .to('.about-wrap', { opacity: 0 }, '<')
      .to('.epilogue-title', { autoAlpha: 1, x: -10, delay: 0.3 })
      .to('.epilogue-text ', { autoAlpha: 1 }, '-=0.1');

    aboutTL.play();
  });

  // backBtn 누를 때

  // back-btn을 누르면 100%로 확장되어 있던
  // clip-path가 33.3333퍼센트까지 줄어들면서 hidden되게 만든다,
  // 글자는 동시에 사라진다(동시)
  // 밀려나갔던 원래 있던 배경이 다시 나온다

  const backBtn = gsap.utils.toArray(document.querySelectorAll('.back-btn'));
  backBtn.forEach((item) => {
    item.addEventListener('click', () => {
      aboutTL.to('.about-title', { autoAlpha: 0, x: -10 });
      aboutTL.to('.about-text ', { autoAlpha: 0 });
      aboutTL.to('section', {
        onComplete: () => {
          $('section').removeClass('on');
        },
      });
      aboutTL.to(
        'section',
        {
          opacity: 0,
          delay: 0.3,
        },
        '-=.2'
      );
      aboutTL.to('.about-wrap', { opacity: 1 }, '-=.7');

      aboutTL.play();
    });
  });
});
