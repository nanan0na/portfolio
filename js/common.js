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

  // about page cursor
  const backBtn = $('.back-btn');

  $('.about section').on('mouseenter', function () {
    $cursor.addClass('event');
    // 헤더에 마우스가 올라가면 event 클래스 제거
    $('#header').on('mouseenter', function () {
      $cursor.removeClass('event');
    });
    $('#header').on('mouseleave', function () {
      $cursor.addClass('event');
    });
  });

  backBtn.on('click', function () {
    $cursor.removeClass('event');
    // 헤더에 마우스가 올라가면 event 클래스 제거
    $('#header').on('mouseleave', function () {
      $cursor.removeClass('event');
    });
  });

  // darkMode
  const selectMode = $('#selectMode');
  const darkSelectors = `
      .con-title,
      .con-title h2,
      .con-list1 ul li,
      .con-list1 ul li::before,
      .web-view figure,
      .web-exp .web-view-title,
      .web-exp .web-view-title .page-link a,
      .graphic-list li img,
      .about-wrap,
      .about-list li,
      .about-list li:hover .about-list-text,
      #header,
      #footer,
      body,
      .loading,
      #header .logo,
      .cursor
    `;
  const $darkSelectors = $(darkSelectors);

  const isDarkMode = localStorage.getItem('darkMode') === 'true';
  selectMode.prop('checked', isDarkMode);
  $darkSelectors.toggleClass('dark', isDarkMode);

  // 저장
  selectMode.on('click', function () {
    const isChecked = $(this).prop('checked');
    localStorage.setItem('darkMode', isChecked);
    $darkSelectors.toggleClass('dark', isChecked);
  });

  if (isDarkMode) {
    $darkSelectors.addClass('dark');
    selectMode.prop('checked', true);
  } else {
    $darkSelectors.removeClass('dark');
    selectMode.prop('checked', false);
  }
});
