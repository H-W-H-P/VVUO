import $ from 'jquery'
import 'owl.carousel'

$(document).ready(function () {
  $('.main_slider__right').owlCarousel({
    items: 1,
    loop: true,
    dots: false,
    nav: true
  })

  $('.header__toggle').click(function () {
    $('.nav_top').toggleClass('open')
    return false
  })

  $('.catalog_wr__item').click(function () {
    $('.catalog_open_wr__item').removeClass('active')
    $('.catalog_open_wr__item').eq($(this).index()).addClass('active')
    return false
  })
})
