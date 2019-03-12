import $ from 'jquery'
$(document).ready(function () {
  if (!$('.constructor')[0]) {
    return false
  }
  let items
  let htmlJsn = $('.constructor').attr('data-json')
  items = JSON.parse(htmlJsn)

  function modulCreateFilter () {
    let nameCategory = {}
    let nameCategoryArr = []
    // Узнаем Категории
    function searchCategory (propItems) {
      propItems.forEach((value) => {
        nameCategory[value['category']] = 1
      })
      nameCategoryArr = Object.getOwnPropertyNames(nameCategory)
      createCotegory()
    }
    searchCategory(items)
    // Создаем Категории
    function createCotegory () {
      let tamplateCatrgory
      $('.wrap_filter').empty()
      nameCategoryArr.forEach((value, key) => {
        tamplateCatrgory = `<div class='shop_filters__block conf_wr__block shop_filters__block_wrap' data-wrapOwl="${key}">
          <a href='#' class='shop_filters__cat bold css_arr closed conf_wr__cat item_category'>${value}</a>
          <div class="conf_wr_filters__cat_wr shop_filters__cat_wr closed">
          </div>
          </div>`
        $('.wrap_filter').append(tamplateCatrgory)
      })
      createTypes(items)
    }
    // Создаем ПодКатегорий
    function createTypes () {
      let nameTypes
      let counter = 0
      nameCategoryArr.forEach((value, key) => {
        nameTypes = {}
        items.forEach((v, k) => {
          if (value === v['category']) {
            nameTypes[v['types']] = 1
          }
        })
        createTypesLabel(nameTypes, value)
      })
      // Создаем ПодКатегорий добавление в html
      function createTypesLabel (props, nameCategory) {
        let nameTypesNew = Object.getOwnPropertyNames(props)
        let tamplateTypesLabel
        nameTypesNew.forEach((v, k) => {
          tamplateTypesLabel = `<div class='shop_filters__input_wr conf_wr_filters__input_wr'>
            <a href="" class="pop_up__toggle cross cross_constr">
            <span class="cross_one cross_lane"></span>
            <span class="cross_two cross_lane"></span>
            </a>
            <input type='checkbox' class="checkbox" id='${k}'>
            <label for='input${k}' class="conf_wr_filters-side__chbx label_checkbox" data-type="${v}">${v}</label>
            </div>`
          $('.wrap_filter .shop_filters__block_wrap').eq(counter).find('.conf_wr_filters__cat_wr.shop_filters__cat_wr.closed').append(tamplateTypesLabel)
        })
        counter++
      }
    }
  }
  modulCreateFilter()
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

  function deleteActiveTabColor () {
    $('.conf_wr_filters_active').each((v, k) => {
      $(k).removeClass('conf_wr_filters_active')
    })
  }

  $('.conf_wr_filters-side__reset').on('click', function () {
    resetStateCatalog(stateCatalog)
    deleteActiveTabColor()
  })

  // - по клику на Label создаем карусель и показываем items
  $('.conf_wr_filters-side__chbx').on('click', function (EO) {
    let nameCat = $(this).html()
    $('.config-cond2__title').html(nameCat)
    // $('.conf_wr_filters_active').each((v, k) => {
    //   $(k).removeClass('conf_wr_filters_active')
    // })
    deleteActiveTabColor()
    $(this).toggleClass('conf_wr_filters_active')
    $('.conf_wr__preloader_filter').removeClass('conf_wr__preloader_wrap-disable')
    stateCatalog['open'] = true
    stateCatalog['catalog'] = $(EO.target).closest('.shop_filters__block_wrap').attr('data-wrapOwl')
    stateCatalog['label'] = $(this).attr('data-type')
    // -
    if (window.innerWidth >= 1440) {
      // createOwlDesktop(this)
      createOwlMoboles(this)
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
    let nameCatalog = $(`[data-wrapowl=${stateCatalog['catalog']}]`).find('.item_category').html()
    let valueFloor = false

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
      if (valueItem['category'] !== nameCatalog) {
        return
      }
      let moreImg
      if (valueItem['imgMore']) {
        moreImg = JSON.stringify(valueItem['imgMore'])
      } else {
        moreImg = 0
      }
      if (valueItem['floor']) {
        valueFloor = true
      }
      htmlItem = `<a href='#' class='config__item popUpCall' id="items-wrapper add-items" data-floor="${valueFloor}" data-item="${numItem}" data-pop_up=".pop_up__items" data-state="${valueItem['type']}" data-goods="${valueItem['name']}" data-js="${valueItem['model']}" data-description="${valueItem['description']}" data-moreImg=${moreImg}>
        <div class='config__img_wr add-item'   >
        <img src='${valueItem['image']}' class='items_pop_up__img_items'>
        <div class='config__arrow my_add_item_one'>
        <img src='static/img/icons/gray-arr.svg' class='config__icon'>
        <img src='static/img/icons/white-arr.svg' class='config__icon config__icon-hov'>
        </div>
        </div>
        <p class='config__name'>${valueItem['name']}</p>
        <p class='config__desc'>${valueItem['size']}</p>
        <p class='config__price' data-price="${valueItem['price']}">${valueItem['price']} ₽</p>
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
      callbackOwl()
    } else {
      callbackOwl()
    }
    function callbackOwl () {
      setTimeout(function () {
        $('.conf_wr__preloader_filter').addClass('conf_wr__preloader_wrap-disable')
        $('.config__owl').removeClass('config__owl-visible')
      }, 500)
    }
  }
  // // -
  let wrapM = `<div class='conf_wr__wrap_slider conf_wr__wrap_slider_mob'>
        <div class='conf_wr__preloader_wrap conf_wr__preloader_filter'>
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

  function createWrapMobile (mob) {
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
    // if (window.innerWidth < 1440) {
    resizeStateONMobile()
    tabToogle()
    st = true
    // } else {
    //   resizeStateOnDesk()
    //   $('.owl-carousel.owl-hidden').removeClass('owl-hidden')
    //   if (!$('.conf_wr_filters__plan').next().hasClass('closed')) {
    //     $('.conf_wr_filters__plan').next().toggleClass('closed')
    //     $('.conf_wr_filters__plan').addClass('closed')
    //   }
    // }
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
  console.log(resizeStateOnDesk)
  // resize
  function clearMobSlider () {
    $('.conf_wr__wrap_slider_mob').remove()
    courOwlMob = null
  }
  // < 1440
  $('.item_category, .cross_constr').on('click', function () {
    let _this = this
    // if (window.innerWidth >= 1440) {
    //   return false
    // }
    deleteActiveTabColor()
    if (!$('.conf_wr_filters__plan').hasClass('closed')) {
      $('.conf_wr_filters__plan').addClass('closed')
      $('.conf_wr_filters__plan').next().addClass('closed')
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
        $(self).parent().find('.conf_wr_filters-side__chbx').eq(0).addClass('conf_wr_filters_active')
      }
    }
    baz(_self)
    return baz
  }
  // Tab
  function tabToogle () {
    // if (window.innerWidth < 1440) {
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
    // }
  }
  // Tab
  $('.cross_constr').on('click', function (e) {
    $('.item_category').each((v, k) => {
      if (!$(k).hasClass('closed')) {
        $(k).toggleClass('closed')
        $(k).next().toggleClass('closed')
      }
    })
  })
  $('.conf_wr_filters__plan').on('click', function () {
    if (window.innerWidth >= 1440) {
      // $(this).next().toggleClass('closed')
      // deleteActiveTabColor()
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
})
