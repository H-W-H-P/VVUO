import $ from 'jquery'
import 'owl.carousel'
import ymaps from 'ymaps'

require('jquery-ui-bundle')
require('jquery-ui-touch-punch')
require('slick-carousel')
require('jquery-mask-plugin')

const YTPlayer = require('yt-player')

// const create360Viewer = require('360-image-viewer')
// const canvasFit = require('canvas-fit')

$(document).ready(function () {
  // click handlers

  $('.input_decore').focusout(function () {
    $(this).removeClass('hasCont')
    if ($(this).val()) {
      $(this).addClass('hasCont')
    }
  })

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
    left: 1,
    right: 50
  }

  $('.prFil').on('input', function (e) {
    var priceVal = $(this).val()
    // curValue / maxPrice * 1000000
    if ($(this).hasClass('prFilLeft')) {
      $('.ui-slider-handle:nth-last-child(2) .price').text(priceVal)
      priceLimits.left = priceVal / 100
    } else {
      $('.ui-slider-handle:last-child .price').text(priceVal)
      priceLimits.right = priceVal / 100
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
    if ((!$(this).closest('.conf_wr_filters').length) && (windWidthResize > 1023)) {
      $(this).closest('.shop_filters__block').find('.shop_filters__cat_wr').toggleClass('closed')
      $(this).toggleClass('closed')
      if (windWidthResize >= 1440) {
        if ($(this).hasClass('conf_wr_filters__plan')) $(this).addClass('closed')
      }
    }
    return false
  })

  $('.conf_wr_filters-side__chbx').click(function () {
    $('.config').removeClass('config-cond1').addClass('config-cond2')
    $('.conf_wr_filters-side').addClass('conf_wr_filters-side-cond2')
    return false
  })

  $('.conf_wr_filters-side__reset').click(function () {
    $('.config').addClass('config-cond1').removeClass('config-cond2')
    $('.conf_wr_filters-side').removeClass('conf_wr_filters-side-cond2')
    return false
  })

  $('.conf_wr_filters__plan').click(function () {
    $('.config').addClass('config-cond1').removeClass('config-cond2')
    $('.conf_wr_filters-side').removeClass('conf_wr_filters-side-cond2')
    return false
  })

  resizing1()

  function resizing1 () {
    if (windWidthResize <= 1440) {
      $('.conf_wr__plan .shop_filters__cat_wr, .conf_wr_filters__plan').removeClass('closed')
    } else {
      $('.conf_wr__plan .shop_filters__cat_wr, .conf_wr_filters__plan').addClass('closed')
    }
  }

  // $(window).resize(resizing2)
  // resizing2()

  // function resizing2 () {
  //   if (windWidthResize <= 767) {
  //     $('.conf_wr_filters').removeClass('opened')
  //   }
  // }

  // pop ups

  $('.popUpCall').click(function () {
    var popUpName = $(this).data('pop_up')
    popUping(popUpName)
    return false
  })

  function popUping (_popUpName) {
    $('html, body').addClass('pop_up_cond')
    $(_popUpName).addClass('pop_up_active')
  }

  $('.pop_up__toggle').click(function () {
    $(this).closest('.pop_up__wr').removeClass('pop_up_active')
    $('html, body').removeClass('pop_up_cond')
    return false
  })

  var zoomImgToggle = true
  $('.imgZoom').click(function () {
    if (zoomImgToggle) {
      popUping()
      $(this).closest('.zoomImgWr').addClass('zoomed')
      zoomImgToggle = false
    } else {
      $('html, body').removeClass('pop_up_cond')
      $(this).closest('.zoomImgWr').removeClass('zoomed')
      zoomImgToggle = true
    }
    return false
  })

  if ($('.player').length) {
    var player = new YTPlayer('.player', {
      autoplay: true,
      controls: false,
      info: false,
      annotations: false,
      modestbranding: false,
      related: false
    })
  }

  $('.videoZoom').click(function () {
    if ($(this).hasClass('video-on')) {
      $(this).removeClass('video-on')
      player.stop()
      player.destroy()
    } else {
      player = new YTPlayer('.player', {
        autoplay: true,
        controls: false,
        info: false,
        annotations: false,
        modestbranding: false,
        related: false
      })
      var dataVideo = $(this).data('video')
      player.load(dataVideo)
      player.play()
      $(this).addClass('video-on')
    }
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
    // change: function (event, ui) {
    //   // probably would needed later
    //   console.log(event, ui)
    // },
    slide: function (event, ui) {
      // probably would needed later
      var curValue = ui.value
      var curPrice = curValue / maxPrice * 1000000
      $('.ui-slider-handle.ui-state-active .price').html(curPrice)
      if (ui.handleIndex === 1) $('.prFilRight').val(curPrice)
      else $('.prFilLeft').val(curPrice)
    }
  })

  var maxPrice = 10000

  $('.ui-slider-handle:nth-last-child(2)').append('<div class="shop_filters__price_cont"><span class="price">100</span> ₽</div>')
  $('.ui-slider-handle:last-child').append('<div class="shop_filters__price_cont"><span class="price">5000</span> ₽</div>')

  $('.input_decore[type=tel]').mask('(000) 000-0000')

  // owls
  $('.main_slider__right').owlCarousel({
    items: 1,
    loop: false,
    dots: false,
    nav: true,
    onInitialized: callback,
    onChanged: callback2
  })

  function callback (event) {
    var items = event.item.count
    if (items < 10) items = '0' + items
    $('.main_slider__comm_numb').text(items)
  }

  function callback2 (event) {
    var item = event.currentTarget
    var items = event.item.index
    item = $(item).find('.main_slider__image').eq(items)
    var dataTitle = item.data('title')
    var dataSrc = item.data('src')
    var dataCat = item.data('cat')
    var dataPrice = item.data('price')
    $('.main_slider__title').html(dataTitle)
    $('.main_slider__btn').attr('href', dataSrc)
    $('.main_slider__desc').html(dataCat)
    $('.main_slider__price').html(dataPrice)
    if (!dataPrice) $('.main_slider__price').html('')
    items = items + 1
    if (items < 10) items = '0' + items
    var allItems = event.item.count
    var progBarWidth = items / allItems * 100
    progBarWidth = progBarWidth + '%'
    $('.main_slider__curr_numb').text(items)
    $('.main_slider__progr').width(progBarWidth)
  }

  // $('.config__owl').owlCarousel({
  //   items: 4,
  //   loop: false,
  //   dots: false,
  //   nav: true,
  //   responsive: {
  //     1024: {
  //       items: 5
  //     }
  //   }
  // })

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
    vertical: true,
    draggable: false,
    cssEase: 'cubic-bezier(.17, 0, .58, 1)'
  })

  let slide2 = $('.slider_middle__slide_b').slick({
    infinite: true,
    dots: false,
    arrows: false,
    draggable: false,
    cssEase: 'cubic-bezier(.69, .40, .58, 1)'
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

  // search

  $('.search_slider_catalog').owlCarousel({
    items: 1,
    // loop: true,
    dots: false,
    nav: false,
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

  $('.search_slider_news').owlCarousel({
    items: 1,
    // loop: true,
    dots: false,
    nav: false,
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

  $('.search_slider_other').owlCarousel({
    items: 1,
    // loop: true,
    dots: false,
    nav: false,
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

  function bwer () {
    let ua = navigator.userAgent
    console.log(ua.search(/Chrome/))

    if (ua.search(/Firefox/) > 0) return 'Firefox'
    if (ua.search(/Opera/) > 0) return 'Opera'
    if (ua.search(/Chrome/) > 0) return 'Google Chrome'
    if (ua.search(/Safari/) > 0) return 'Safari'
    if (ua.search(/Konqueror/) > 0) return 'Konqueror'
    if (ua.search(/Iceweasel/) > 0) return 'Debian Iceweasel'
    if (ua.search(/SeaMonkey/) > 0) return 'SeaMonkey'
  }
  console.log(bwer())
  // map
  ymaps.load().then(maps => {
    // const map = new maps.Map('contacts_page__map', {
    //   center: [55.76, 37.64],
    //   zoom: 12
    // })
    // map.panes.get('ground').getElement().style.filter = 'grayscale(100%)'
  }).catch(error => console.log('Failed to load Yandex Maps', error))

  $('.news__link').on('click', function (EO) {
    EO.preventDefault()
    $.ajax('link', {
      type: 'GET',
      dataType: 'json',
      success: dataLoaded,
      error: errorHandler
    })
    dataLoaded()
  })

  function dataLoaded (date) {
    let htmlTemplate = `
      <a href='#' class='news__not_slide news__item news_page__item news__item-big'>
      <img class="news__image news__image-big" src="static/img/pictures/bg.jpg">
      <p class="news__date">13/12/2018</p>
      <h7 class="news__desc news_page__desc">Kаборатория Современных телекоммуникационных технологий</h7>
      <p class="news__text news_page__text">В Петербурге прошло ведущее промышленное мероприятие Северо-Запада «Петербургская  техническая ярмарка 2018»</p>
      </a>`
    for (let i = 0; i < 2; i++) {
      $('.news__pad_top').append(htmlTemplate)
    }
  }

  function errorHandler (jqXHR, statusStr, errorStr) {
    console.log(statusStr + ' ' + errorStr)
  }

  $('.simple_title_wr_5__inp').focusout('click', function () {
    $('.list_name_proj').val($(this).val())
  })

  $('.conf_wr__order_btn').on('click', function (EO) {
    console.log($('.list_items').val())
    if (!$('.list_name_proj').val()) {
      EO.preventDefault()
      $('.simple_title_wr_5__inp_wr').addClass('invalid')
      setTimeout(() => {
        $('.simple_title_wr_5__inp_wr').removeClass('invalid')
      }, 1000)
      return false
    }
  })
})
