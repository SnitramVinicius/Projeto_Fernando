const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grapCursor: true,
  spaceBetween:4,


  pagination: {
    el: '.swiper-pagination',
    clickable:true,
    dynamicBullets:true
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
      0:{
          slidersPerView:1
      },
      768:{
          slidersPerView:2
      },
      1024:{
          slidersPerView:3
      },
  }
});