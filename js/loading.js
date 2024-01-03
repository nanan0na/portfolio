$(function () {
  // 대상을 변수로 저장
  const $window = $(window);
  const $body = $('body');
  const $loading = $('.loading');

  // body에 맨끝(마지막) 부분에 집어넣기
  $body.append($loading);
  const $target = $('.loading');

  // 로딩이 완료되면
  // 시간 수정해야 함
  $window.on('load', function () {
    setTimeout(function () {
      $target.fadeOut();
      setTimeout(function () {
        $target.remove();
      }, 1000);
    }, 1000);
  });
});
