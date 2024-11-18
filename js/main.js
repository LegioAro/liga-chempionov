//sliders
new Splide('.reasons', {
  perPage: 3,
  perMove: 1,
  gap: 20,
  pagination: false,
  breakpoints: {
    650: { perPage: 1, padding: { right: 0 } },
    720: { perPage: 1, padding: { right: 300 } },
    850: { perPage: 2, padding: { right: 100 } },
    950: { perPage: 2, padding: { right: 200 } },
  },
}).mount();

new Splide('.feedback__slider--1', {
  type: 'loop',
  drag: 'free',
  focus: 'center',
  gap: 50,
  perPage: 4,
  pagination: false,
  arrows: false,

  autoScroll: {
    speed: 1,
  },

  breakpoints: {
    375: { perPage: 1, padding: { right: 0 } },
    550: { perPage: 1, padding: { right: 100 } },
    650: { perPage: 1, padding: { right: 200 } },
    900: { perPage: 2, padding: { right: 100 }, gap: 20 },
    1200: { perPage: 3 },
  },
}).mount(window.splide.Extensions);

new Splide('.feedback__slider--2', {
  type: 'loop',
  drag: 'free',
  focus: 'center',
  gap: 50,
  perPage: 4,
  pagination: false,
  arrows: false,

  autoScroll: {
    speed: -1,
  },
  breakpoints: {
    375: { perPage: 1, padding: { right: 0 } },
    550: { perPage: 1, padding: { right: 100 } },
    650: { perPage: 1, padding: { right: 200 } },
    900: { perPage: 2, padding: { right: 100 }, gap: 20 },
    1200: { perPage: 3 },
  },
}).mount(window.splide.Extensions);

//
const divs = document.querySelectorAll('.steps__item');

function checkDivVisibility() {
  divs.forEach((div, index) => {
    const rect = div.getBoundingClientRect();
    const halfHeight = window.innerHeight / 2;
    if (rect.top <= halfHeight && rect.bottom >= 0) {
      // divs.forEach((div) => div.classList.remove('active'));
      divs[index].classList.add('active');
    }
  });
}
document.addEventListener('scroll', checkDivVisibility);

//resize
isResize('.who__img-block', '.who__wrapper', '.who__mob', 950, 'first');

window.addEventListener('resize', () => {
  isResize('.who__img-block', '.who__wrapper', '.who__mob', 950, 'first');
});

//smooth

const scrollSmoothLinck = document.querySelectorAll('*[data-scroll-smooth]');

for (let elem of scrollSmoothLinck) {
  elem.addEventListener('click', function (e) {
    e.preventDefault();

    let blockID = elem.getAttribute('data-scroll-smooth');
    let top = document.getElementById(blockID).getBoundingClientRect().top;

    document.querySelector('html,body').scrollTo({
      top: top + window.pageYOffset - 50,
      behavior: 'smooth',
    });
  });
}

//acordeon
function acordeon(group, all = false, classActive = 'active', itemActive = false) {
  const acordeons = document.querySelectorAll(`[data-acordeon-group=${group}]`);

  if (acordeons.length > 0) {
    acordeons.forEach((item) => {
      const btn = item.querySelector('[data-acordeon-btn]');
      btn.addEventListener('click', () => handleItemAcordion(item, all));
    });

    if (itemActive) {
      acordeons[itemActive - 1].querySelector('[data-acordeon-btn]').click();
    }
  }

  function handleItemAcordion(item, all) {
    if (all === true) {
      if (item.classList.contains(classActive)) {
        item.classList.remove(classActive);
      } else {
        acordeons.forEach((acordeon) => acordeon.classList.remove(classActive));
        item.classList.add(classActive);
      }
    } else {
      item.classList.toggle(classActive);
    }
  }
}

acordeon('one', false, 'active', 1);

//fancybox
Fancybox.bind('[data-fancybox]', {
  // Your custom options
});

// вызываем функцию countdownTimer каждую секунду
let timerId = setInterval(countdownTimer, 80);

//Modal
function isModal() {
  let modalBtns = document.querySelectorAll('.modal__btn-active');

  if (modalBtns.length > 0) {
    for (let modalBtn of modalBtns) {
      modalBtn.addEventListener('click', function () {
        let modalBtnData = modalBtn.getAttribute('data-modal-src');
        let modalWindow = document.querySelector(`*[data-modal-window="${modalBtnData}"]`);
        let body = document.querySelector('body');

        if (modalWindow) {
          modalWindow.classList.add('active');
          body.classList.add('lock');
          timerId = clearInterval(timerId);
        }
      });
    }
  }
}
isModal();

function isModalClose() {
  let modalCloseBtns = document.querySelectorAll('.modal__btn-close');
  if (modalCloseBtns.length > 0) {
    for (let modalCloseBtn of modalCloseBtns) {
      modalCloseBtn.addEventListener('click', function () {
        let modalWindow = modalCloseBtn.closest('*[data-modal-window]');
        let body = document.querySelector('body');

        modalWindow.classList.remove('active');
        body.classList.remove('lock');
        timerId = setInterval(countdownTimer, 80);
      });
    }
  }
}
isModalClose();

//timer

// let dateNow = new Date();
let minutesDeadline = new Date(2024, 10, 19, 23);

// dateNow.setMinutes(dateNow.getMinutes() + minutesDeadline);

function countdownTimer() {
  const diff = minutesDeadline - new Date();

  if (diff <= 0) {
    clearInterval(timerId);
  }

  let timers = document.querySelectorAll('.timer');
  for (let timer of timers) {
    // let timerDay = timer.querySelector('[data-timer-day]');
    let timerHour = timer.querySelector('[data-timer-hour]');
    let timerMinuts = timer.querySelector('[data-timer-minuts]');
    let timerSeconds = timer.querySelector('[data-timer-seconds]');
    let timerMilSeconds = timer.querySelector('[data-timer-milseconds]');

    // let timerDayItems = timerDay.querySelectorAll('.timer__item-num');
    let timerHourItems = timerHour.querySelectorAll('.timer__item-num');
    let timerMinutesItems = timerMinuts.querySelectorAll('.timer__item-num');
    let timerSecondsItems = timerSeconds.querySelectorAll('.timer__item-num');
    let timerMilSecondsItems = timerMilSeconds.querySelectorAll('.timer__item-num');

    // const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
    const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) : 0;
    const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
    const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
    const milSeconds = diff > 0 ? Math.floor(diff) % 100 : 0;

    // let dayString = days < 10 ? '0' + days : String(days);
    let hourString = hours < 10 ? '0' + hours : String(hours);
    let minutesString = minutes < 10 ? '0' + minutes : String(minutes);
    let secondsString = seconds < 10 ? '0' + seconds : String(seconds);
    let milSecondsString = milSeconds < 10 ? '0' + milSeconds : String(milSeconds);

    // let dayArr = dayString.split('');
    let hourArr = hourString.split('');
    let minutesArr = minutesString.split('');
    let secondsArr = secondsString.split('');
    let milSecondsArr = milSecondsString.split('');

    // for (let i = 0; i < timerDayItems.length; i++) {
    //   timerDayItems[i].innerHTML = dayArr[i];
    // }
    for (let i = 0; i < timerHourItems.length; i++) {
      timerHourItems[i].innerHTML = hourArr[i];
    }
    for (let i = 0; i < timerMinutesItems.length; i++) {
      timerMinutesItems[i].innerHTML = minutesArr[i];
    }
    for (let i = 0; i < timerSecondsItems.length; i++) {
      timerSecondsItems[i].innerHTML = secondsArr[i];
    }
    for (let i = 0; i < timerMilSecondsItems.length; i++) {
      timerMilSecondsItems[i].innerHTML = milSecondsArr[i];
    }
  }
}

// вызываем функцию countdownTimer
countdownTimer();
