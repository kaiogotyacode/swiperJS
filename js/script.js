const swiper = new Swiper('.swiper', {
  // Optional parameters
  
  // Slides por View > Apply Control Method

  slidesPerView: 3,
  spaceBetween: 15,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  
});