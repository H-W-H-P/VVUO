import $ from 'jquery'

var items = [
  {
    'name': 'Closed Door',
    'image': 'https://blueprint-dev.s3.amazonaws.com/uploads/item_picture/image/646/thumbnail_Screen_Shot_2014-10-27_at_8.04.12_PM.png',
    'model': 'https://blueprint-dev.s3.amazonaws.com/uploads/item_model/model/617/closed-door28x80_baked.js',
    'type': '7',
    'types': 'chair',
    'size': '600'
  },
  {
    'name': 'table',
    'image': 'static/const/models/model1/model.png',
    'model': 'static/const/models/model1/model.js',
    'type': '1',
    'types': 'chair',
    'size': '500'
  },
  {
    'name': 'table',
    'image': 'static/const/models/model1/model.png',
    'model': 'static/const/models/model1/model.js',
    'type': '1',
    'types': 'table',
    'size': '1500'
  }
]

let type = []
let objType = {}

$('.conf_wr_filters-side__chbx').each((value, key) => {
  if ($(key).attr('data-type')) {
    type.push($(key).attr('data-type'))
  }
})

type.forEach((value, key) => {
  let i = 0
  objType[value] = i

  items.forEach((valueItem, key) => {
    if (valueItem['types'] === value) {
      i++
      objType[value] = i
    }
  })
})

for (let key in objType) {
  $('.conf_wr_filters-side__chbx').each((valueLabel, keyLabel) => {
    if ($(keyLabel).attr('data-type') === key) {
      $(keyLabel).attr('data-amount', `${objType[key]}`)
    }
  })
}

let courOwl

$('.conf_wr_filters-side__chbx').on('click', function (EO) {
  if (courOwl) {
    courOwl.trigger('destroy.owl.carousel')
  }
  $('.config__owl').empty()

  let htmlItem
  let nameFilter = $(EO.target).attr('data-type')

  items.forEach((valueItem, key) => {
    if (valueItem['types'] !== nameFilter) {
      return
    }

    htmlItem = `<a href='#' class='config__item'>
      <div class='config__img_wr'></div>
      <img src='static/img/pictures/shop2.png' class='config__icon>
      <div class='config__arrow'>
      <img src='static/img/icons/gray-arr.svg' class='config__icon'>
      <img src='static/img/icons/white-arr.svg' class='config__icon config__icon-hov'>
      </div>
      <p class='config__name'>Стол для учителя</p>
      <p class='config__desc'>100х36 см</p>
      <p class='config__price'>${valueItem['size']} ₽</p>
      </a>`
    $('.config__owl').append(htmlItem)
  })

  courOwl = $('.config__owl').owlCarousel({
    items: 4,
    loop: false,
    dots: false,
    nav: true,
    responsive: {
      1024: {
        items: 5
      }
    }
  })
})

console.log(objType)
console.log(items)
