$(function () {

  // setInterval(() => {
  //   if ($(window).scrollTop() > 0 && $('.nav__row').hasClass('nav__row--open') === false) {
  //     $('.burger').addClass('burger--follow')
  //   } else {
  //     $('.burger').removeClass('burger--follow')
  //   }
  // }, 0)

  // $('.burger, .overlay, .header__top a').on('click', function (e) {
  $('.burger, .overlay, .header__nav a').on('click', function (e) {
    e.preventDefault()
    $('.nav__row').toggleClass('nav__row--open')
    $('.overlay').toggleClass('overlay--show')
    $('.header').toggleClass('header--cross')

  })

  if (window.innerWidth < "1100") {
    $('.customers__items').slick({
      arrows: false,
      dots: true,
      appendDots: $('.customers__dots'),
      speed: 200,
      // responsive:
      //   [
      //     {
      //       breakpoint: 700,
      //       settings: {

      //       },
      //     },
      //   ],
    })
  }

  $('.pricing__plan-show--slide').on('click', function () {
    $(this).prev().slideToggle()
  })

  $('.footer__top-title--slide').on('click', function () {
    $(this).next().slideToggle()
    $(this).toggleClass('footer__top-title--arrow')
  })

});