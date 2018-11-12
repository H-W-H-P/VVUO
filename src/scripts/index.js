import $ from 'jquery'
import 'owl.carousel'

$(document).ready(function () {
  // click handlers

  $('.header__toggle').click(function () {
    $('.header').toggleClass('open')
    $(this).toggleClass('active')
    return false
  })

  $('.catalog_wr__item').click(function () {
    if (!$(this).closest('.header__slide').length) {
      $('.catalog_open_wr__item').removeClass('active')
      $('.catalog_open_wr__item').eq($(this).index()).addClass('active')
      return false
    }
  })

  var windWidthResize = window.innerWidth

  window.addEventListener('resize', function (event) {
    windWidthResize = window.innerWidth
  })

  // slider creating

  $('.main_slider__right').owlCarousel({
    items: 1,
    loop: true,
    dots: false,
    nav: true
  })

  $('.clientsOwl').owlCarousel({
    items: 4,
    loop: true,
    dots: false,
    nav: true,
    responsive: {
      1439: {
        items: 7
      },
      1024: {
        items: 6
      },
      767: {
        items: 5
      }
    }
  })

  $('.shopSlider').owlCarousel({
    items: 1,
    // loop: true,
    dots: false,
    nav: true,
    responsive: {
      1439: {
        items: 4
      },
      1024: {
        items: 3
      },
      767: {
        items: 2
      }
    }
  })

  function createSlider () {
    if (windWidthResize < 768) {
      $('.supplyOwl').owlCarousel({
        items: 2,
        loop: false,
        dots: false,
        nav: true
      })
    }
    if (windWidthResize >= 768) {
      $('.supplyOwl').trigger('destroy.owl.carousel').addClass('off')
    }
  }

  createSlider()
  $(window).resize(createSlider)

  function createSlider2 () {
    // console.log($(window).width())
    if (windWidthResize < 1024) {
      $('.news__slider').owlCarousel({
        items: 1,
        loop: false,
        dots: false,
        nav: true,
        autoHeight: true,
        responsive: {
          768: {
            items: 2
          }
        }
      })
    }
    if (windWidthResize >= 1024) {
      $('.news__slider').trigger('destroy.owl.carousel').addClass('off')
    }
  }

  createSlider2()
  $(window).resize(createSlider2)
})
