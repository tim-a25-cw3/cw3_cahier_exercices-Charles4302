import Icons from './utils/Icons.js';
import Swiper from 'swiper/bundle';

class Main {
  constructor() {
    this.init();
  }

  init() {
    Icons.load();
    this.initSwiperPage();
  }

  initSwiperPage() {
    const target = document.querySelector('.js-swiper-page');

    if (target) {
      new Swiper(target, {
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
        },
      });
    }
  }
}

new Main();
