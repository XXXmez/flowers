document.addEventListener("DOMContentLoaded", () => {
  const flowersSlider = new Swiper('.flowers-slider', {
    // Optional parameters
    loop: true,
    slidesPerView: 6,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    //Настройки для адаптива
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 3,
      },
      // when window width is >= 640px
      /*576: {
        slidesPerView: 4,
      },*/
      992: {
        slidesPerView: 6,
      }
    }
  });
  const reviewsSlide = new Swiper('.reviews-slide', {
    // Optional parameters
    loop: true,
    slidesPerView: 1,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  $('#reviews-1').on('click', function() {
    $.fancybox.open([
      {
        src  : '/../img/reviews/fanc/reviews1-1.jpg',
        opts : {
          caption : 'First caption',
          thumb   : '1_s.jpg'
        }
      },
      {
        src  : 'img/reviews/fanc/reviews1-2.jpg',
        opts : {
          caption : 'Second caption',
          thumb   : '2_s.jpg'
        }
      },
      {
        src  : '../img/reviews/fanc/reviews1-3.jpg',
        opts : {
          caption : 'Second caption',
          thumb   : '2_s.jpg'
        }
      }
    ], {
      loop : true,
      thumbs : {
        autoStart : false
      }
    });
  });
});