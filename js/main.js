window.addEventListener('load', () => {
  /* 배경 나타나기 효과 */
  const tl = gsap.timeline();
  tl.to('.visual-img', {
    width: '100%',
    delay: 2,
    onComplete: () => {
      document.querySelector('.next-button').classList.add('on');
    },
  });
  tl.to('.visual-text', { color: '#fff' }, '<');
  tl.to('.sub-img1', { autoAlpha: 1, y: 30 }, '-=.1');
  tl.to('.sub-img2', { autoAlpha: 1, x: -20 }, '<');
  tl.to('.sub-img3', {
    autoAlpha: 1,
    onComplete: () => {
      moving();
      document.querySelector('.visual-text h2 strong:nth-child(1)').classList.add('creative');
      initAllGlitch();
      update();
    },
  });

  /* splitting */
  const chars = '😀?ΣΠ#!¯→↓↑←0279BFHJQSVXTZ';
  var Glitch = function (selector, index, numberOfGlitchedLetter, timeGlitch, timePerLetter, timeBetweenGlitch) {
    this.selector = selector;
    this.index = index;
    this.numberOfGlitchedLetter = numberOfGlitchedLetter;
    this.innerText;
    this.charArray = [];
    this.charIndex = [];
    this.timeGlitch = timeGlitch;
    this.timeBetweenGlitch = timeBetweenGlitch;
    this.timePerLetter = timePerLetter;
    this.maxCount = Math.floor(this.timeGlitch / this.timePerLetter);
    this.count = 0;
  };

  Glitch.prototype.init = function () {
    this.innerText = this.selector.innerText;
    this.charArray = this.innerText.split('');
    if (this.numberOfGlitchedLetter == undefined || this.numberOfGlitchedLetter > this.innerText.length) {
      this.numberOfGlitchedLetter = this.innerText.length;
    }
    this.defineCharIndexToRandomize();
  };

  Glitch.prototype.defineCharIndexToRandomize = function () {
    this.charIndex = [];
    for (let i = 0; i < this.numberOfGlitchedLetter; i++) {
      let randCharIndex = Math.floor(Math.random() * this.charArray.length);
      this.charIndex.push(randCharIndex);
    }
  };

  Glitch.prototype.randomize = function () {
    let randomString = Array.from(this.charArray);

    //randomize char
    for (let i = 0; i < this.numberOfGlitchedLetter; i++) {
      let randIndex = Math.floor(Math.random() * chars.length);
      let randCharIndex = this.charIndex[i];
      if (randomString[randCharIndex] !== ' ') {
        randomString[randCharIndex] = chars[randIndex];
      }
    }
    this.selector.innerText = randomString.join('');
  };

  Glitch.prototype.update = function (interval) {
    if (this.count >= this.maxCount - 1) {
      this.selector.innerText = this.innerText;
      this.defineCharIndexToRandomize();
      let ctx = this;
      let wait = setTimeout(function () {
        ctx.count = 0;
      }, this.timeBetweenGlitch);
    } else {
      this.randomize();
      this.count++;
    }
  };

  Glitch.prototype.glitch = function () {
    let ctx = this;
    let interval = setInterval(function () {
      ctx.update(this);
    }, this.timePerLetter);
  };

  var arrayElements;
  var glitchArray = [];

  function initAllGlitch() {
    arrayElements = document.querySelectorAll('.title');
    for (let i = 0; i < arrayElements.length; i++) {
      let selector = arrayElements[i];
      let randLetterNumber = 3 + Math.floor(Math.random() * 8);
      let randGlitchTime = 500 + Math.floor(Math.random() * 800);
      let randGlitchPauseTime = 1000 + Math.floor(Math.random() * 4000);
      let glitch = new Glitch(selector, i, randLetterNumber, 200, 80, randGlitchPauseTime);
      glitch.init();
      glitchArray.push(glitch);
    }
  }

  function update() {
    for (let i = 0; i < glitchArray.length; i++) {
      let glitch = glitchArray[i];
      glitch.glitch();
    }
  }

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
