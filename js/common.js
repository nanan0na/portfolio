$(function () {
  // cursor
  const $window = $(window);
  const $cursor = $('.cursor');
  const $aboutCursor = $('.about-cursor');
  const $point = $('a, button, label, .info');

  $window.on('mousemove', function (e) {
    let mouseX = e.pageX;
    let mouseY = e.pageY;
    /* console.log(e); */
    $cursor.css({
      left: mouseX,
      top: mouseY,
    });
    $aboutCursor.css({
      left: mouseX,
      top: mouseY,
    });
  });

  $('#header').on('mouseenter', function () {
    $aboutCursor.css({
      width: '15px',
      height: '15px',
      opacity: 0,
    });
  });
  $('#header').on('mouseleave', function () {
    $aboutCursor.css({
      width: '270px',
      height: '270px',
      opacity: 1,
    });
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
});
