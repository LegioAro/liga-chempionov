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
    550: { perPage: 1 },
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
    550: { perPage: 1 },
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
