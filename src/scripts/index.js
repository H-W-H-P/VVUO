import $ from 'jquery'
import 'owl.carousel'

$(document).ready(function () {
  $('.main_slider__right').owlCarousel({
    items: 1,
    loop: true,
    dots: false,
    nav: true
  })
})
