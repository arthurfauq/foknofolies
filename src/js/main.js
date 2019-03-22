// @ts-nocheck

const initCountdown = () => {
  const days = moment('2019-06-08').diff(moment().format('YYYY-MM-DD'), 'days');

  const counter = {
    $element: null,
    count: 0,
    maxCount: days,
    interval: null,
    init(element) {
      this.$element = element;

      this.run();

      this.interval = setInterval(() => counter.run(), 20);
    },
    run() {
      if (this.maxCount >= 0) this.$element.html(`- ${this.count}`);
      else this.$element.html(`+ ${this.count}`);

      if (this.count === this.maxCount) window.clearInterval(this.interval);
      else this.count = this.count + 1;
    }
  };

  $.fn.counter = function() {
    counter.init(this);
  };

  $('.info-box').each(function() {
    $(this)
      .fadeIn()
      .css('display', 'flex');
  });

  setTimeout(() => {
    $('#remaining-days').counter();
  }, 500);
};

function initFullPage() {
  $('#full-page').fadeIn('fast');

  $('#full-page').fullpage({
    menu: '#v-nav',
    css3: false,
    scrollingSpeed: 600,
    autoScrolling: true,
    fitToSection: true,
    controlArrows: true,
    slidesNavigation: true,
    slidesNavPosition: 'bottom',
    verticalCentered: false,
    sectionSelector: '.section',
    fixedElements: '#logo-line',
    normalScrollElements: '#maps, .owl-item',
    afterRender() {
      $('.owl-container')
        .find('img')
        .css('display', 'none')
        .fadeOut();

      const carousel = $('.owl-carousel').owlCarousel({
        items: 1,
        startPosition: 0,
        margin: 25,
        stagePadding: 25,
        nav: true,
        loop: true,
        lazyload: true,
        lazyLoadEager: 2,
        autoWidth: true,
        autoHeight: true,
        center: true,
        navText: [
          '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
          '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
        ]
      });

      $('.owl-container')
        .find('.owl-nav')
        .css('opacity', 0);

      carousel.waitForImages(() => {
        $('.owl-container')
          .find('.owl-nav')
          .animate({ opacity: 1 });
        $('.owl-container')
          .find('img')
          .css('display', 'block');
        $('.owl-container').css('background-image', 'none');
      });

      initMap();
    },
    onLeave(n, e, o) {
      for (
        let i = $('#logo-line')
            .find('svg')
            .children().length,
          t = e - 1,
          a = t;
        a < i;
        a += 1
      ) {
        $('#logo-line')
          .find('svg')
          .children()
          .eq(a)
          .css('opacity', 0);

        for (let s = 0; s < t; s += 1) {
          $('#logo-line')
            .find('svg')
            .children()
            .eq(s)
            .css('opacity', 0.35);
          $('#logo-line')
            .find('svg')
            .children()
            .eq(i - 1 - s)
            .css('opacity', 0.35);
        }
      }

      if (n === 1) {
        setTimeout(() => {
          $('#accueil-section .background-image')
            .eq(0)
            .removeClass('fadeInDown');
        }, 500);
      } else if (e === 1) {
        $('#accueil-section .background-image')
          .eq(0)
          .addClass('fadeInDown');
      }

      if (n === 6) {
        setTimeout(() => {
          $('#contact-section .background-image')
            .eq(0)
            .removeClass('fadeInUp');
        }, 500);
      } else if (e === 6) {
        $('#contact-section .background-image')
          .eq(0)
          .addClass('fadeInUp');
      }
    },
    afterLoad(n, e) {
      const o = $('#programme-section.fp-section.active').find('.fp-slide.active');
      o.find('.description-text').addClass('fadeInUp');
      o.find('.description-title').addClass('fadeIn');
      o.find('.playlist').addClass('fadeInUp');
      o.find('hr.fadeRight').addClass('fadeInRight');
      o.find('hr.fadeLeft').addClass('fadeInLeft');
      o.find('.description-icon').addClass('bounceIn');
    },
    afterSlideLoad(n, e, o, i) {
      const t = $('#programme-section.fp-section.active').find('.fp-slide.active');
      t.find('.description-text').addClass('fadeInUp');
      t.find('.description-title').addClass('fadeIn');
      t.find('.playlist').addClass('fadeInUp');
      t.find('hr.fadeRight').addClass('fadeInRight');
      t.find('hr.fadeLeft').addClass('fadeInLeft');
      t.find('.description-icon').addClass('bounceIn');
    }
  });
}

$(document).ready(() => {
  let n = false;

  window.location.replace('#');

  setTimeout(() => {
    $('.loading-icon').fadeOut('slow');
    $('#logo-animation')
      .fadeIn('fast')
      .css('display', 'flex');
  }, 500);

  $('#skip').on('click', () => {
    initFullPage();
    $('#logo-animation').fadeOut('slow');
    setTimeout(() => initCountdown(), 500);
    n = true;
  });

  setTimeout(() => {
    if (n === false) {
      initFullPage();
      setTimeout(() => $('#logo-animation').fadeOut('slow'), 500);
      setTimeout(() => initCountdown(), 1500);
      n = true;
    }
  }, 8500);

  $('#programme-section')
    .find('.description-icon, .description-text, .description-title, hr, .playlist')
    .addClass('animated')
    .css('opacity', 0);

  $('.background-image').css('display', 'none');
  $('.background-image').on('load', function() {
    $(this).fadeIn();
  });
});
