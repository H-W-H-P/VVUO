import $ from 'jquery'
$(document).ready(function () {
  var itemsState = [
    {
      'name': 'table',
      'image': 'static/const/models/newObj//o1/model.png',
      'model': 'static/const/models/newObj/o1/model.js',
      'type': '1',
      'types': 'мебель1',
      'category': 'мебель',
      'size': '520'
    },
    {
      'name': 'table',
      'image': 'static/const/models/newObj//o2/model.png',
      'model': 'static/const/models/newObj/o2/model.js',
      'type': '1',
      'types': 'другое',
      'category': 'другое',
      'size': '520'
    }
  ]
  let items
  let htmlJsn = $('.constructor').attr('data-json')
  if (htmlJsn) {
    items = JSON.parse(htmlJsn)
  } else {
    items = itemsState
  }

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
      tamplateCatrgory = `<div class='shop_filters__block conf_wr__block shop_filters__block_wrap' data-wrapOwl="${key}">
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

  // CONTROLS STATE CATALOG
  let stateCatalog = {
    open: false,
    catalog: false,
    label: false
  }
  // RESET STATE CATALOG
  function resetStateCatalog (obj) {
    for (let key in obj) {
      obj[key] = false
    }
  }

  $('.conf_wr_filters-side__reset').on('click', function () {
    resetStateCatalog(stateCatalog)
  })
  // - по клику на Label создаем карусель и показываем items
  $('.conf_wr_filters-side__chbx').on('click', function (EO) {
    $('.conf_wr__preloader_wrap').removeClass('conf_wr__preloader_wrap-disable')
    stateCatalog['open'] = true
    stateCatalog['catalog'] = $(EO.target).closest('.shop_filters__block_wrap').attr('data-wrapOwl')
    stateCatalog['label'] = $(this).attr('data-type')
    // -
    if (window.innerWidth >= 1440) {
      createOwlDesktop(this)
    } else {
      createOwlMoboles(this)
      return false
    }
    createOwl()
  })
  // CREATE
  function createOwlDesktop (e) {
    $('.config__owl_desktop').empty()
    createItemforSlider()
  }
  // -
  function createOwlMoboles (EO) {
    stateCatalog['open'] = true
    stateCatalog['catalog'] = $(EO).parent().parent().parent().attr('data-wrapowl')
    stateCatalog['label'] = $(EO).attr('data-type')
    createWrapMobile('1')
  }
  // createItemforSlider
  function createItemforSlider (nameOwl) {
    let numItem = 1
    let htmlItem
    let pushHear
    let nameFilter = stateCatalog['label']

    if (!nameOwl) {
      pushHear = '.config__owl'
    } else {
      pushHear = '.config__owl_mobiles'
    }
    // -
    items.forEach((valueItem, key) => {
      if (valueItem['types'] !== nameFilter) {
        return
      }
      htmlItem = `<a href='#' class='config__item popUpCall' id="items-wrapper add-items" data-item="${numItem}" data-pop_up=".pop_up__items" data-js="${valueItem['model']}">
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
      $(pushHear).append(htmlItem)
      numItem++
    })
  }
  // createOwl
  let courOwl
  let courOwlMob
  function createOwl (val) {
    $('.config__owl').addClass('config__owl-visible')
    if (courOwl) {
      courOwl.trigger('destroy.owl.carousel')
    }
    if (val) {
      if (courOwlMob) {
        courOwlMob.trigger('destroy.owl.carousel')
      }
    }

    if (val) {
      courOwlMob = $('.config__owl_mobiles').owlCarousel({
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
    } else {
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
    }
    function callbackOwl () {
      setTimeout(function () {
        $('.conf_wr__preloader_wrap').addClass('conf_wr__preloader_wrap-disable')
        $('.config__owl').removeClass('config__owl-visible')
      }, 500)
    }
  }
  // // -
  let wrapM
  function createWrapMobile (mob) {
    if (!wrapM) {
      wrapM = `<div class='conf_wr__wrap_slider conf_wr__wrap_slider_mob'>
        <div class='conf_wr__preloader_wrap'>
        <div class='conf_wr__preloader'>
        <div class='bigSqr'>
        <div class='square first'></div>
        <div class='square second'></div>
        <div class='square third'></div>
        <div class='square fourth'></div>
        </div>
        <div class='text'>loading</div>
        </div>
        </div>
        <div class='config__owl owl-carousel slider_T1 config__owl_mobiles'></div>
        </div> `
    }
    if ($(`[data-wrapowl="${stateCatalog['catalog']}"]`).find('.conf_wr__wrap_slider').length) {
      if (!mob) {
        return false
      } else {
        clearMobSlider()
        $(`[data-wrapowl="${stateCatalog['catalog']}"]`).append(wrapM)
        createItemforSlider('1')
        createOwl('1')
      }
    } else {
      $(`[data-wrapowl="${stateCatalog['catalog']}"]`).append(wrapM)
      createItemforSlider('1')
      createOwl('1')
    }
  }
  // resize
  $(window).resize(function () {
    if (window.innerWidth < 1440) {
      resizeStateONMobile()
      tabToogle()
      st = true
    } else {
      resizeStateOnDesk()
      $('.owl-carousel.owl-hidden').removeClass('owl-hidden')
      if (!$('.conf_wr_filters__plan').next().hasClass('closed')) {
        $('.conf_wr_filters__plan').next().toggleClass('closed')
        $('.conf_wr_filters__plan').addClass('closed')
      }
    }
  })
  // resize
  function closePanel () {
    $('.conf_wr_filters__plan').next().addClass('closed')
    $('.conf_wr_filters__plan').addClass('closed')
  }
  // resize
  $(document).ready(function () {
    closePanel()
  })
  // resize
  function resizeStateONMobile () {
    if (stateCatalog['open']) {
      createWrapMobile()
    }
  }

  let st = false
  function resizeStateOnDesk () {
    clearMobSlider()
    if (stateCatalog['open']) {
      if (st) {
        createOwlDesktop()
        createOwl()
        st = false
        if (!$('.config').hasClass('config-cond2')) {
          $('.config').addClass('config-cond2').removeClass('config-cond1')
          $('.shop_filters').addClass('conf_wr_filters-side-cond2')
        }
      }
    } else {
      if (st) {
        if ($('.config').hasClass('config-cond2')) {
          $('.config').removeClass('config-cond2').addClass('config-cond1')
          $('.shop_filters').removeClass('conf_wr_filters-side-cond2')
        }
        st = false
      }
    }
  }
  // resize
  function clearMobSlider () {
    $('.conf_wr__wrap_slider_mob').remove()
    courOwlMob = null
  }
  // < 1440
  $('.item_category').on('click', function () {
    let _this = this
    if (window.innerWidth >= 1440) {
      return false
    }
    if (!$(this).hasClass('closed')) {
      clearMobSlider()
      resetStateCatalog(stateCatalog)
      return false
    } else {
      clearMobSlider()
      resetStateCatalog(stateCatalog)
      cloneWrap = firstClOnTabMobele(_this)
      _this = null
      $('.item_category').each((v, k) => {
        if (!$(k).parent().find('.conf_wr__wrap_slider_mob').length) {
          $(k).addClass('closed')
          $(k).next().addClass('closed')
        }
      })
    }
    if (!_this) {
      return
    }
    if (cloneWrap) {
      cloneWrap(_this)
    } else {
      cloneWrap = firstClOnTabMobele(_this)
    }
  })
  // resize
  let cloneWrap
  function firstClOnTabMobele (self) {
    let _self = self
    // -
    function baz (self) {
      if (stateCatalog['open']) {
        // return false
      } else {
        stateCatalog['open'] = true
        stateCatalog['catalog'] = $(self).parent().attr('data-wrapOwl')
        stateCatalog['label'] = $(self).parent().find('.shop_filters__cat_wr div:first-child').find('label').attr('data-type')
        createWrapMobile()
      }
    }
    baz(_self)
    return baz
  }
  // Tab
  function tabToogle () {
    if (window.innerWidth < 1440) {
      if (stateCatalog['catalog']) {
        if (!$('.conf_wr_filters__plan').hasClass('closed')) {
          $('.conf_wr_filters__plan').addClass('closed')
          $('.conf_wr_filters__plan').next().addClass('closed')
        }
      }
      if (stateCatalog['open']) {
        $('.item_category').each((v, k) => {
          if ($(k).parent().attr('data-wrapowl') !== stateCatalog['catalog']) {
            if (!$(k).hasClass('closed')) {
              $(k).toggleClass('closed')
              $(k).next().toggleClass('closed')
            }
          }
        })
      } else {
        $('.item_category').each((v, k) => {
          if (!$(k).hasClass('closed')) {
            $(k).toggleClass('closed')
            $(k).next().toggleClass('closed')
          }
        })
      }
    }
  }
  // Tab
  $('.conf_wr_filters__plan').on('click', function () {
    if (window.innerWidth >= 1440) {
      $(this).next().toggleClass('closed')
    } else {
      $('.item_category').each((v, k) => {
        if (!$(k).hasClass('closed')) {
          $(k).toggleClass('closed')
          $(k).next().toggleClass('closed')
        }
      })
    }
    clearMobSlider()
    resetStateCatalog(stateCatalog)
  })

  // - клик по карточки - открытие попапа
  $('.conf_wr__over, .conf_wr__wrap_slider').on('click', function (EO) {
    let _this = this
    EO.preventDefault()
    let item = $(EO.target).closest('.config__item')
    if (!$(item).hasClass('config__item')) {
      return
    }
    createContentItem(item)
    addLinkJs(item)
    $(item).addClass('item_select')
    $('.pop_up__items').addClass('pop_up_active')
    $('body').addClass('pop_up_cond')
    $('html').addClass('pop_up_cond')
    slideItem(_this)
  })

  // - заполнение попапа (img ptice)
  function createContentItem (prop) {
    let itemImg = $(prop).find('.items_pop_up__img_items').clone()
    let itemPrice = $(prop).find('.config__price').html()
    $('.items_pop_up__wrap_img').html(itemImg)
    $('.items_pop_up__price').html(itemPrice)
  }

  function addLinkJs (prop) {
    let linkJs = $(prop).attr('data-js')
    $('.my_add_item').attr('data-jsLink', linkJs)
  }

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
})
