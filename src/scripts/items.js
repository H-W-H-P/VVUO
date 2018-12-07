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
    'types': 'Home',
    'category': 'Home',
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
    'name': 'Closed Door',
    'image': 'static/img/pictures/shop2.png',
    'model': 'https://blueprint-dev.s3.amazonaws.com/uploads/item_model/model/617/closed-door28x80_baked.js',
    'type': '7',
    'types': 'мебель1',
    'category': 'мебель',
    'size': '900'
  },
  {
    'name': 'Closed Door',
    'image': 'https://blueprint-dev.s3.amazonaws.com/uploads/item_picture/image/646/thumbnail_Screen_Shot_2014-10-27_at_8.04.12_PM.png',
    'model': 'https://blueprint-dev.s3.amazonaws.com/uploads/item_model/model/617/closed-door28x80_baked.js',
    'type': '7',
    'types': 'мебель1',
    'category': 'мебель',
    'size': '200'
  },
  {
    'name': 'table',
    'image': 'static/const/models/model1/model.png',
    'model': 'static/const/models/model1/model.js',
    'type': '1',
    'types': 'мебель2',
    'category': 'мебель',
    'size': 'мебель2'
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

let nameCategory = {}
// Узнаем Категории
function searchTypesAndCategory (propItems, propsCategory) {
  propItems.forEach((value) => {
    nameCategory[value['category']] = 1
  })
  createCotegory(propsCategory)
}

searchTypesAndCategory(items, nameCategory)

// Создаем Категории
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
  createTypes(items, nameCategoryNew)
}

// Создаем ПодКатегорий
function createTypes (propItems, propsCategory) {
  let nameTypes
  let counter = 0
  // -
  propsCategory.forEach((value, key) => {
    nameTypes = {}
    propItems.forEach((v, k) => {
      if (value === v['category']) {
        nameTypes[v['types']] = 1
      }
    })
    createTypesLabel(nameTypes)
  })

  // Создаем ПодКатегорий добавление в html
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
}

// s
// s
// s
// Работа с кликами Попапом Слайдером

// - ищем все Label
let type = []
$('.conf_wr_filters-side__chbx').each((value, key) => {
  if ($(key).attr('data-type')) {
    type.push($(key).attr('data-type'))
  }
})

// - узнаем сколько из в объекте Items
let objType = {}
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

// - проставляем каждому label кол-во найден совпадений (кол-во товаров)
for (let key in objType) {
  $('.conf_wr_filters-side__chbx').each((valueLabel, keyLabel) => {
    if ($(keyLabel).attr('data-type') === key) {
      $(keyLabel).attr('data-amount', `${objType[key]}`)
    }
  })
}

// - по клику на Label создаем карусель и показываем items
let courOwl
$('.conf_wr_filters-side__chbx').on('click', function (EO) {
  $('.conf_wr__preloader_wrap').removeClass('conf_wr__preloader_wrap-disable')
  if (courOwl) {
    courOwl.trigger('destroy.owl.carousel')
  }
  $('.config__owl').empty()

  let htmlItem
  let nameFilter = $(EO.target).attr('data-type')
  let numItem = 1
  let self

  if ($(window).width() < 1439) {
    let htmlTemplateWrapOwl = `<div class='conf_wr__over-filters conf_wr__over'>
      <div class='config__owl owl-carousel slider_T1 config__owl-filter'>
      </div>
      </div>`
    $(this).closest('.shop_filters__cat_wr').append(htmlTemplateWrapOwl)
    self = this
  }

  items.forEach((valueItem, key) => {
    if (valueItem['types'] !== nameFilter) {
      return
    }
    htmlItem = `<a href='#' class='config__item popUpCall' id="items-wrapper add-items" data-item="${numItem}" data-pop_up=".pop_up__items">
      <div class='config__img_wr add-item'   >
      <img src='${valueItem['image']}' class='items_pop_up__img_items'>
      <div class='config__arrow'>
      <img src='static/img/icons/gray-arr.svg' class='config__icon'>
      <img src='static/img/icons/white-arr.svg' class='config__icon config__icon-hov'>
      </div>
      </div>
      <p class='config__name'>Стол для учителя</p>
      <p class='config__desc'>100х36 см</p>
      <p class='config__price'>${valueItem['size']} ₽</p>
      </a>`
    if ($(window).width() < 1439) {
      console.log($(self).parent())
      $(self).parent().parent().find('.config__owl').append(htmlItem)
    } else {
      $('.config__owl').append(htmlItem)
    }
    numItem++
  })

  courOwl = $('.config__owl').owlCarousel({
    items: 4,
    loop: false,
    dots: false,
    nav: true,
    onInitialized: callbackOwl,
    responsive: {
      1024: {
        items: 5
      }
    }
  })
  function callbackOwl () {
    setTimeout(function () {
      $('.conf_wr__preloader_wrap').addClass('conf_wr__preloader_wrap-disable')
    }, 500)
  }
})

// - работа с попапом
// -
// - клик по карточки - открытие попапа
$('.conf_wr__over').on('click', function (EO) {
  EO.preventDefault()
  let item = $(EO.target).closest('.config__item')
  if (!$(item).hasClass('config__item')) {
    return
  }
  createContentItem(item)
  $(item).addClass('item_select')
  $('.pop_up__items').addClass('pop_up_active')
  $('body').addClass('pop_up_cond')
  $('html').addClass('pop_up_cond')
  slideItem()
})

// - заполнение попапа (img ptice)
function createContentItem (prop) {
  let itemImg = $(prop).find('.items_pop_up__img_items').clone()
  let itemPrice = $(prop).find('.config__price').html()
  $('.items_pop_up__wrap_img').html(itemImg)
  $('.items_pop_up__price').html(itemPrice)
}

// -
// -
// - попап next - prev
function slideItem (prop) {
  let dataItemSelect
  let itemNext
  let lengthItem = $('.config__item').length
  let counter = 0
  // l
  // l
  function slideItemBtn (e, val) {
    e.preventDefault()
    let selectItem = $('.item_select').eq(0)
    // -
    // - листаем карточки товаров
    if (val === 'next') {
      dataItemSelect = $(selectItem).attr('data-item')
      dataItemSelect++
      if (dataItemSelect) {
        counter = dataItemSelect
      }
      if (counter > lengthItem) {
        return
      }
      $(selectItem).removeClass('item_select')
    } else {
      dataItemSelect = $(selectItem).attr('data-item')
      dataItemSelect--
      if (dataItemSelect) {
        counter = dataItemSelect
      }
      if (dataItemSelect === 0) {
        return
      }
      $(selectItem).removeClass('item_select')
    }
    itemNext = $(`.config__item[data-item="${dataItemSelect}"]`)
    $(itemNext).addClass('item_select')
    // -
    // l // - заполнение попапа (img ptice)
    createContentItem(itemNext)
  }
  // -
  // - вешаем обраюотчики на кнопки
  $('.slider_middle_next').on('click', function (EO) {
    let e = EO
    slideItemBtn(e, 'next')
  })
  $('.slider_middle_prev').on('click', function (EO) {
    let e = EO
    slideItemBtn(e, 'prev')
  })
  function closePopUp () {
    $('.item_select').removeClass('item_select')
    counter = 0
    $('.slider_middle_prev').unbind()
    $('.slider_middle_next').unbind()
  }
  $('.pop_up__toggle').on('click', function () {
    closePopUp()
  })
  $('.my_add_item').on('click', function (EO) {
    EO.preventDefault()
    closePopUp()
  })
}
