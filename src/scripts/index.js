import $ from 'jquery'
import 'owl.carousel'
import '../../node_modules/slick-1.8.1/slick/slick.js'

require('jquery-ui-bundle')
require('jquery-ui-touch-punch')

$(document).ready(function () {
  // click handlers

  $('.header__toggle').click(function () {
    $('.header').toggleClass('open')
    $(this).toggleClass('active')
    return false
  })

  $('.shop_filters__toggle').click(function () {
    $('.shop_filters').toggleClass('opened')
    $(this).toggleClass('opened')
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

  var priceLimits = {
    left: 10,
    right: 50
  }

  $('.prFil').on('input', function (e) {
    var priceVal = $(this).val()
    if ($(this).hasClass('prFilLeft')) {
      priceLimits.left = priceVal
    } else {
      priceLimits.right = priceVal
    }
    $('.shop_filters__price').slider('option', 'values', [ priceLimits.left, priceLimits.right ])
  })

  // slider creating

  // jquery UI
  $('.shop_filters__price').slider({
    range: true,
    values: [priceLimits.left, priceLimits.right],
    change: function (event, ui) {
      // probably would needed later
      console.log(event, ui)
    }
  })

  // owls
  $('.main_slider__right').owlCarousel({
    items: 1,
    loop: true,
    dots: false,
    nav: true
  })

  $('.shop_filters__mob_wr').owlCarousel({
    items: 1,
    loop: false,
    dots: false,
    nav: false
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

  $('.cooperating_slider').owlCarousel({
    // loop: true,
    dots: false,
    nav: true,
    responsive: {
      1440: {
        items: 4
      },
      1439: {
        items: 3
      },
      1024: {
        items: 3
      },
      767: {
        items: 2
      },
      650: {
        items: 2
      },
      0: {
        items: 1
      }
    }
  })

  let slide1 = $('.slider_middle__slide_a').slick({
    infinite: true,
    dots: false,
    arrows: false,
    vertical: true
  })

  let slide2 = $('.slider_middle__slide_b').slick({
    infinite: true,
    dots: false,
    arrows: false
  })

  // let counter = 0

  $('.slider_middle_prev').on('click', function () {
    slide1.slick('slickPrev')
    slide2.slick('slickPrev')
  })

  $('.slider_middle_next').on('click', function () {
    slide1.slick('slickNext')
    slide2.slick('slickNext')
  })
})
