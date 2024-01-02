window.addEventListener('load', () => {
  /* 배경 나타나기 효과 */
  const tl = gsap.timeline();
  tl.to(
    '.visual-img',
    {
      width: '100%',
      delay: 1.2,
      onComplete: () => {
        document.querySelector('.next-button').classList.add('on');
      },
    },
    3
  );
  tl.to('.visual-text', { color: '#fff' }, '<');
  tl.to('.sub-img1', { autoAlpha: 1, y: 30 }, '-=.1');
  tl.to('.sub-img2', { autoAlpha: 1, x: -20 }, '<');
  tl.to('.sub-img3', {
    autoAlpha: 1,
    onComplete: () => moving(),
  });

  /* 마우스에 따라 사진 움직이기 */
  let x;
  let y;
  let mx;
  let my;

  function moving() {
    $('.sub-img1').css({
      transform: `translate(${mx}px, ${my}px)`,
    });
    $('.sub-img2').css({
      transform: `translate(+${mx}px, -${my}px)`,
    });
    $('.sub-img3').css({
      transform: `translate(-${mx}px, -${my}px)`,
    });
    window.requestAnimationFrame(moving);
  }

  $(document).on('mousemove', function (e) {
    x = e.pageX;
    y = e.pageY;

    // 6, 코드일 때
    // x = Math.max(-100, Math.min(200, e.pageX - $window.innerWidth() / 2));
    // y = Math.max(-100, Math.min(100, e.pageY - $window.outerHeight() / 2));

    const ancho = $(window).width() / 2;
    const largo = $(window).height() / 2;

    mx = (ancho + x) * (1 / 90);
    my = (largo + y) * (1 / 80);
  });
});
