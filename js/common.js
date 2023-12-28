$(function () {
  // cursor
  const $window = $(window);
  const $cursor = $('.cursor');
  const $point = $('a, button, label, .info');

  $window.on('mousemove', function (e) {
    let mouseX = e.pageX;
    let mouseY = e.pageY;
    /* console.log(e); */
    $cursor.css({
      left: mouseX,
      top: mouseY,
    });
    /* about */
    $('.cursor.event').css({
      left: mouseX,
      top: mouseY,
    });
  });

  /* about 상세에 들어가면 마우스 커서 바뀌게 */
  $('#header').on('mouseenter', function () {
    $('.cursor').removeClass('event');
  });
  $('#header').on('mouseleave', function () {
    $('.cursor').addClass('event');
  });
  $window.on('mousedown', function () {
    $cursor.addClass('click');
  });

  $point.on('mouseover', function () {
    $cursor.addClass('point');
  });
  $point.on('mouseout', function () {
    $cursor.removeClass('point');
  });

  $window.on('mouseup', function () {
    $cursor.removeClass('click');
  });

  $window.on('click', function () {
    $cursor.addClass('click');
    setTimeout(function () {
      $cursor.removeClass('click');
    }, 400);
  });
  const aboutExp = $('.about-list li');
  const backBtn = $('.back-btn');
  // about page cursor
  aboutExp.on('click', function () {
    $cursor.addClass('event');
  });
  backBtn.on('click', function () {
    $cursor.removeClass('event');
  });
});
