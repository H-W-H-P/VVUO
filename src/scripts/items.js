import $ from 'jquery'

var items = [
  {
    'name': 'Closed Door',
    'image': 'https://blueprint-dev.s3.amazonaws.com/uploads/item_picture/image/646/thumbnail_Screen_Shot_2014-10-27_at_8.04.12_PM.png',
    'model': 'https://blueprint-dev.s3.amazonaws.com/uploads/item_model/model/617/closed-door28x80_baked.js',
    'type': '7',
    'types': 'мебель1',
    'category': 'мебель',
    'size': '600'
  },
  {
    'name': 'Closed Door',
    'image': 'https://blueprint-dev.s3.amazonaws.com/uploads/item_picture/image/646/thumbnail_Screen_Shot_2014-10-27_at_8.04.12_PM.png',
    'model': 'https://blueprint-dev.s3.amazonaws.com/uploads/item_model/model/617/closed-door28x80_baked.js',
    'type': '7',
    'types': 'мебель1',
    'category': 'мебель',
    'size': '600'
  },
  {
    'name': 'Closed Door',
    'image': 'https://blueprint-dev.s3.amazonaws.com/uploads/item_picture/image/646/thumbnail_Screen_Shot_2014-10-27_at_8.04.12_PM.png',
    'model': 'https://blueprint-dev.s3.amazonaws.com/uploads/item_model/model/617/closed-door28x80_baked.js',
    'type': '7',
    'types': 'мебель1',
    'category': 'мебель',
    'size': '600'
  },
  {
    'name': 'table',
    'image': 'static/const/models/model1/model.png',
    'model': 'static/const/models/model1/model.js',
    'type': '1',
    'types': 'мебель2',
    'category': 'мебель',
    'size': '500'
  },
  {
    'name': 'table',
    'image': 'static/const/models/model1/model.png',
    'model': 'static/const/models/model1/model.js',
    'type': '1',
    'types': 'мебель3',
    'category': 'мебель',
    'size': '500'
  },
  {
    'name': 'table',
    'image': 'static/const/models/model1/model.png',
    'model': 'static/const/models/model1/model.js',
    'type': '1',
    'types': 'мебель4',
    'category': 'мебель',
    'size': '500'
  },
  {
    'name': 'table',
    'image': 'static/const/models/model1/model.png',
    'model': 'static/const/models/model1/model.js',
    'type': '1',
    'types': 'мебель5',
    'category': 'мебель',
    'size': '500'
  },
  {
    'name': 'table',
    'image': 'static/const/models/model1/model.png',
    'model': 'static/const/models/model1/model.js',
    'type': '1',
    'types': 'мебель6',
    'category': 'мебель',
    'size': '500'
  },
  {
    'name': 'table',
    'image': 'static/const/models/model1/model.png',
    'model': 'static/const/models/model1/model.js',
    'type': '1',
    'types': 'препораты2',
    'category': 'препораты',
    'size': '500'
  },
  {
    'name': 'table',
    'image': 'static/const/models/model1/model.png',
    'model': 'static/const/models/model1/model.js',
    'type': '1',
    'types': 'мебель7',
    'category': 'мебель',
    'size': '500'
  },
  {
    'name': 'table',
    'image': 'static/const/models/model1/model.png',
    'model': 'static/const/models/model1/model.js',
    'type': '1',
    'types': 'мебель8',
    'category': 'мебель',
    'size': '500'
  },
  {
    'name': 'table',
    'image': 'static/const/models/model1/model.png',
    'model': 'static/const/models/model1/model.js',
    'type': '1',
    'types': 'препораты',
    'category': 'препораты',
    'size': '500'
  },
  {
    'name': 'table',
    'image': 'static/const/models/model1/model.png',
    'model': 'static/const/models/model1/model.js',
    'type': '1',
    'types': 'мебель9',
    'category': 'мебель',
    'size': '500'
  },
  {
    'name': 'table',
    'image': 'static/const/models/model1/model.png',
    'model': 'static/const/models/model1/model.js',
    'type': '1',
    'types': 'мебель10',
    'category': 'мебель',
    'size': '500'
  },
  {
    'name': 'table',
    'image': 'static/const/models/model1/model.png',
    'model': 'static/const/models/model1/model.js',
    'type': '1',
    'types': 'мебель11',
    'category': 'мебель',
    'size': '500'
  },
  // {
  //   'name': 'table',
  //   'image': 'static/const/models/model1/model.png',
  //   'model': 'static/const/models/model1/model.js',
  //   'type': '1',
  //   'types': 'Пончики',
  //   'category': 'Пончики',
  //   'size': '500'
  // },
  {
    'name': 'table',
    'image': 'static/const/models/model1/model.png',
    'model': 'static/const/models/model1/model.js',
    'type': '1',
    'types': 'другое',
    'category': 'другое',
    'size': '1500'
  },
  {
    'name': 'table',
    'image': 'static/const/models/model1/model.png',
    'model': 'static/const/models/model1/model.js',
    'type': '1',
    'types': 'другое',
    'category': 'другое',
    'size': '1500'
  },
  {
    'name': 'table',
    'image': 'static/const/models/model1/model.png',
    'model': 'static/const/models/model1/model.js',
    'type': '1',
    'types': 'другое',
    'category': 'другое',
    'size': '1500'
  }
]

let type = []
let objType = {}

let nameCategory = {}
let itemsTypes = []
var time = performance.now()

function searchTypesAndCategory (propItems, propsCategory, propsTypes) {
  propItems.forEach((value) => {
    nameCategory[value['category']] = 1
  })

  createCotegory(propsCategory)
}

function createCotegory (prop) {
  let nameCategoryNew = Object.getOwnPropertyNames(prop)
  let tamplateCatrgory
  $('.wrap_filter').empty()
  nameCategoryNew.forEach((value, key) => {
    tamplateCatrgory = `<div class='shop_filters__block conf_wr__block shop_filters__block_wrap'>
      <a href='#' class='shop_filters__cat bold css_arr closed conf_wr__cat item_category'>${value}</a>
      <div class="conf_wr_filters__cat_wr shop_filters__cat_wr closed"></div>
      </div>`
    $('.wrap_filter').append(tamplateCatrgory)
  })
  createTypes(items, nameCategory)
}

function createTypes (propItems, propsCategory) {
  let nameCategoryNew = Object.getOwnPropertyNames(propsCategory)
  let nameTypes
  let counter = 0
  // 5
  function createTypesLabel (props) {
    let nameTypesNew = Object.getOwnPropertyNames(props)
    let tamplateTypesLabel
    nameTypesNew.forEach((v, k) => {
      tamplateTypesLabel = `<div class='shop_filters__input_wr conf_wr_filters__input_wr'>
        <input type='checkbox' class="checkbox" id='${k}'>
        <label for='input${k}' class="conf_wr_filters-side__chbx label_checkbox" data-type="${v}">${v}</label>
        </div>`
      $('.wrap_filter .shop_filters__block_wrap').eq(counter).find('.conf_wr_filters__cat_wr.shop_filters__cat_wr.closed').append(tamplateTypesLabel)
    })
    counter++
  }

  nameCategoryNew.forEach((value, key) => {
    nameTypes = {}
    propItems.forEach((v, k) => {
      if (value === v['category']) {
        nameTypes[v['types']] = 1
      }
    })
    createTypesLabel(nameTypes)
  })
}

searchTypesAndCategory(items, nameCategory, itemsTypes)

// s
// s
// s
// s

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

    htmlItem = `<a href='#' class='config__item thumbnail add-item thumbnail add-item' model-name="Closed Door" model-type="7">
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

time = performance.now() - time
console.log('Время выполнения = ', time)
