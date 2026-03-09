import Swiper from 'swiper';

import { Navigation, Pagination, Keyboard } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import slide11desk from '../img/about-img/slide01-desk.webp';
import slide12desk from '../img/about-img/slide01-desk@2x.webp';
import slide11tab from '../img/about-img/slide01-tab.webp';
import slide12tab from '../img/about-img/slide01-tab@2x.webp';
import slide11mob from '../img/about-img/slide01-mob.webp';
import slide12mob from '../img/about-img/slide01-mob@2x.webp';

import slide21desk from '../img/about-img/slide02-desk.webp';
import slide22desk from '../img/about-img/slide02-desk@2x.webp';
import slide21tab from '../img/about-img/slide02-tab.webp';
import slide22tab from '../img/about-img/slide02-tab@2x.webp';
import slide21mob from '../img/about-img/slide02-mob.webp';
import slide22mob from '../img/about-img/slide02-mob@2x.webp';

import slide31desk from '../img/about-img/slide03-desk.webp';
import slide32desk from '../img/about-img/slide03-desk@2x.webp';
import slide31tab from '../img/about-img/slide03-tab.webp';
import slide32tab from '../img/about-img/slide03-tab@2x.webp';
import slide31mob from '../img/about-img/slide03-mob.webp';
import slide32mob from '../img/about-img/slide03-mob@2x.webp';

import slide41desk from '../img/about-img/slide04-desk.webp';
import slide42desk from '../img/about-img/slide04-desk@2x.webp';
import slide41tab from '../img/about-img/slide04-tab.webp';
import slide42tab from '../img/about-img/slide04-tab@2x.webp';
import slide41mob from '../img/about-img/slide04-mob.webp';
import slide42mob from '../img/about-img/slide04-mob@2x.webp';

import slide51desk from '../img/about-img/slide05-desk.webp';
import slide52desk from '../img/about-img/slide05-desk@2x.webp';
import slide51tab from '../img/about-img/slide05-tab.webp';
import slide52tab from '../img/about-img/slide05-tab@2x.webp';
import slide51mob from '../img/about-img/slide05-mob.webp';
import slide52mob from '../img/about-img/slide05-mob@2x.webp';

const images = [
  {
    slided1: slide11desk,
    slided2: slide12desk,
    slidet1: slide11tab,
    slidet2: slide12tab,
    slidem1: slide11mob,
    slidem2: slide12mob,
    texta:
      'Все почалося у 2015 році з кількох небайдужих людей та одного врятованого собаки. Сьогодні ми — один з найбільших притулків у регіоні, але наша мета незмінна: дати другий шанс тим, кого зрадили.',
  },
  {
    slided1: slide21desk,
    slided2: slide22desk,
    slidet1: slide21tab,
    slidet2: slide22tab,
    slidem1: slide21mob,
    slidem2: slide22mob,
    texta:
      'Ми рятуємо, реабілітуємо та знаходимо люблячі родини для безпритульних тварин. Наша мета — не просто дати прихисток, а й забезпечити кожному "хвостику" щасливе та повноцінне життя в новій родині.',
  },
  {
    slided1: slide31desk,
    slided2: slide32desk,
    slidet1: slide31tab,
    slidet2: slide32tab,
    slidem1: slide31mob,
    slidem2: slide32mob,
    texta:
      'Хатинка Лапок" — це команда професійних ветеринарів, кінологів та десятків волонтерів, які щодня вкладають свою душу та час у турботу про наших підопічних. Ми працюємо 24/7, бо їхнє життя залежить від нас.',
  },
  {
    slided1: slide41desk,
    slided2: slide42desk,
    slidet1: slide41tab,
    slidet2: slide42tab,
    slidem1: slide41mob,
    slidem2: slide42mob,
    texta:
      'Ми створили безпечний та комфортний простір. Кожна тварина отримує якісне харчування, своєчасну ветеринарну допомогу, проходить соціалізацію та гуляє на спеціально обладнаних майданчиках.',
  },
  {
    slided1: slide51desk,
    slided2: slide52desk,
    slidet1: slide51tab,
    slidet2: slide52tab,
    slidem1: slide51mob,
    slidem2: slide52mob,
    texta:
      'Ваша допомога — безцінна. Ви можете взяти тваринку додому, стати волонтером, допомогти фінансово або інформаційно. Кожен маленький внесок наближає нас до великої мети — світу без безпритульних тварин.',
  },
];

const slidu = document.querySelector('.swiper-wrapper');
function createSlides(array) {
  return array
    .map(
      image => `
      <div class="swiper-slide">
        <picture>
          <source media="(min-width: 1440px)" srcset="${image.slided1} 1x, ${image.slided2} 2x" />
          <source media="(min-width: 768px)" srcset="${image.slidet1} 1x, ${image.slidet2} 2x" />
          <source srcset="${image.slidem1} 1x, ${image.slidem2} 2x" />
          <img src="${image.slided1}" alt="Про нас" class="slide-img" loading="lazy" />
        </picture>
        <div class="slide-content">
          <p>${image.texta}</p>
        </div>
      </div>`
    )
    .join('');
}

function renderSlider() {
  const wrapper = document.querySelector('.swiper-wrapper');
  if (!wrapper) return;

  wrapper.innerHTML = createSlides(images);

  const swiperInstance = new Swiper('.about-swiper', {
    modules: [Navigation, Pagination, Keyboard],
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.about-swiper-pagination',
      clickable: true,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    observer: true,
    observeParents: true,
  });
}

renderSlider();