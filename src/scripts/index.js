import $ from 'jquery'
import 'owl.carousel'

require('jquery-ui-bundle')
require('jquery-ui-touch-punch')

// const create360Viewer = require('360-image-viewer')
// const canvasFit = require('canvas-fit')

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

  $('.comp_title__arrow').click(function () {
    var $nextSect = $(this).closest('section').next()
    $('html, body').animate({ scrollTop: $nextSect.offset().top }, 1000)
    return false
  })

  $(document).on('click', '.complex_slider .owl-next', function () {
    labSlider.trigger('next.owl.carousel')
  })

  $(document).on('click', '.complex_slider .owl-prev', function () {
    labSlider.trigger('prev.owl.carousel')
  })

  $('.shop_filters__cat').click(function () {
    if (!$(this).closest('.conf_wr_filters').length) {
      $(this).closest('.shop_filters__block').find('.shop_filters__cat_wr').toggleClass('closed')
      $(this).toggleClass('closed')
    }
    return false
  })

  // 360 creating

  // load your image
  // const image = new Image()
  // // image.src = 'static/img/pictures/image6.jpg'
  // image.src = 'static/img/pictures/image8.jpg'

  // image.onload = function () {
  //   // when the image is loaded, setup the viewer
  //   const viewer = create360Viewer({
  //     image: image
  //   })

  //   // attach canvas to body
  //   $('.big_image__360_wr').append(viewer.canvas)

  //   // setup fullscreen canvas sizing
  //   const fit = canvasFit(viewer.canvas, window, window.devicePixelRatio)
  //   window.addEventListener('resize', fit, false)
  //   fit()

  //   // start the render loop
  //   viewer.start()
  // }

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

  $('.config__owl').owlCarousel({
    items: 5,
    loop: false,
    dots: false,
    nav: true
  })

  $('.big_image__wr2').owlCarousel({
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

  $('.labSlider2').owlCarousel({
    items: 1,
    // loop: true,
    dots: false,
    nav: true,
    responsive: {
      1439: {
        items: 2
      }
    }
  })

  var labSlider = $('.labSlider').owlCarousel({
    items: 1,
    // loop: true,
    dots: false,
    nav: true,
    mouseDrag: false,
    touchDrag: false,
    slideBy: 2,
    responsive: {
      1439: {
        items: 4,
        slideBy: 4
      },
      1024: {
        items: 3,
        slideBy: 5
      },
      767: {
        items: 2,
        slideBy: 5
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
    items: 4,
    dots: false,
    nav: true,
    responsive: {
      1439: {
        items: 3
      },
      767: {
        items: 3
      },
      0: {
        items: 2
      }
    }
  })
})
