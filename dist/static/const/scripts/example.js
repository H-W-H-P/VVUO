
/*
 * Camera Buttons
 */
let listItem = {};
let listItem2 = {};
let listItem3 = {};
let objForIvan = {};

var CameraButtons = function(blueprint3d) {

  var orbitControls = blueprint3d.three.controls;
  var three = blueprint3d.three;
  var threes = blueprint3d;

  var panSpeed = 30;
  var directions = {
    UP: 1,
    DOWN: 2,
    LEFT: 3,
    RIGHT: 4
  }

  function init() {
    // Camera controls

     $("#zoom-in").on('click', function(EO) {
     	EO.preventDefault();
     	return zoomIn();
     });

      $("#zoom-out").on('click', function(EO) {
     	EO.preventDefault();
     	return zoomOut();
     });


    $("#zoom-in").dblclick(preventDefault);
    $("#zoom-out").dblclick(preventDefault);

    $("#reset-view").click(three.centerCamera)

    $("#move-left").click(function(){
      pan(directions.LEFT)
    })
    $("#move-right").click(function(){
      pan(directions.RIGHT)
    })
    $("#move-up").click(function(){
      pan(directions.UP)
    })
    $("#move-down").click(function(){
      pan(directions.DOWN)
    })

    $("#move-left").dblclick(preventDefault);
    $("#move-right").dblclick(preventDefault);
    $("#move-up").dblclick(preventDefault);
    $("#move-down").dblclick(preventDefault);

    // $('.conf_wr__order_btn').on('click', function(EO) {
    //   return orbitControls.changeViewe_2d();
    // });

    $('#constructor_2d').on('click', function(EO) {
    	EO.preventDefault();
    	return orbitControls.changeViewe_2d();
    });

     $('#constructor_3d, .config__next, .clearConstr').on('click', function(EO) {
    	EO.preventDefault();
    	return orbitControls.changeViewe_3d();
    });

    $('.constructor__controlViwe').on('click', function(EO) {
      let parent = EO.target;
      if ($(parent).hasClass('constructor__controlViwe_blue')) {
      	$('.constructor__controlViwe_wh').addClass('constructor_3d_active')
      	if ($(parent).hasClass('constructor_2d_active')) {
      		return;
      	} else {
      		$(parent).addClass('constructor_2d_active')
      	}
      } else {
      	$('.constructor__controlViwe_blue').removeClass('constructor_2d_active')
      	$('.constructor__controlViwe_wh').removeClass('constructor_3d_active')
      }
    });

  }

  function preventDefault(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  function pan(direction) {
    switch (direction) {
      case directions.UP:
        orbitControls.panXY(0, panSpeed);
        break;
      case directions.DOWN:
        orbitControls.panXY(0, -panSpeed);
        break;
      case directions.LEFT:
        orbitControls.panXY(panSpeed, 0);
        break;
      case directions.RIGHT:
        orbitControls.panXY(-panSpeed, 0);
        break;
    }
  }

  function zoomIn(e) {
    orbitControls.dollyIn(1.1);
    orbitControls.update();
  }

  function zoomOut(e) {
    orbitControls.dollyOut(1.1);
    orbitControls.update();
  }

  init();

}

/*
 * Context menu for selected item
 */

var ContextMenu = function(blueprint3d) {
  var curPrice;
  var allPrice = 0;

  function removeItemFromList(props) {
    let nameGoods = props.name;
    listItem[nameGoods]--;
    console.log(listItem)
    var counter = 0;
    $.each(listItem, function (index, value) {
      counter++;
      if (value) {
        curPrice = (Number(listItem2[index]) * Number(value));
        allPrice = allPrice + curPrice;
      }
    });
    $('.confPrice').html(allPrice);
    allPrice = 0;
    $.each(listItem, function (i, v) {
      objForIvan[i]['number'] = v;
    })
    $('.list_items').attr('data-val', JSON.stringify(listItem))
    $('.list_items').val(JSON.stringify(objForIvan))
    // $('.list_items').val(JSON.stringify(listItem))
    // console.table(listItem)
  }

  var scope = this;
  var selectedItem;
  var three = blueprint3d.three;

  function init() {

    $("#context-menu-delete").click(function(event) {
      if ((selectedItem.name == 'door') || (selectedItem.name == 'window')) {

      } else {
        removeItemFromList(selectedItem);
      }
      selectedItem.remove();
    });

    three.itemSelectedCallbacks.add(itemSelected);
    three.itemUnselectedCallbacks.add(itemUnselected);

    initResize();

    $("#fixed").click(function() {
        var checked = $(this).prop('checked');
        selectedItem.setFixed(checked);
    });
  }

  function cmToIn(cm) {
    return cm / 2.54;
  }

  function inToCm(inches) {
    return inches * 2.54;
  }

  function itemSelected(item) {
    selectedItem = item;

    $("#context-menu-name").text(item.metadata.itemName);

    $("#item-width").val(cmToIn(selectedItem.getWidth()).toFixed(0));
    $("#item-height").val(cmToIn(selectedItem.getHeight()).toFixed(0));
    $("#item-depth").val(cmToIn(selectedItem.getDepth()).toFixed(0));

    $("#div").val(cmToIn(selectedItem.getDepth()).toFixed(0));


    $("#context-menu").show();

    $("#fixed").prop('checked', item.fixed);
  }

  function resize() {
    selectedItem.resize(
      inToCm($("#item-height").val()),
      inToCm($("#item-width").val()),
      inToCm($("#item-depth").val())
    );
  }

  function initResize() {
    $("#item-height").change(resize);
    $("#item-width").change(resize);
    $("#item-depth").change(resize);
  }

  function itemUnselected() {
    selectedItem = null;
    $("#context-menu").hide();
  }

  init();
}

/*
 * Loading modal for items
 */

var ModalEffects = function(blueprint3d) {

  var scope = this;
  var blueprint3d = blueprint3d;
  var itemsLoading = 0;

  this.setActiveItem = function(active) {
    itemSelected = active;
    update();
  }

  function update() {
    if (itemsLoading > 0) {
      $("#loading-modal").show();
    } else {
      $("#loading-modal").hide();
    }
  }

  function init() {
    blueprint3d.model.scene.itemLoadingCallbacks.add(function() {
      itemsLoading += 1;
      update();
    });

     blueprint3d.model.scene.itemLoadedCallbacks.add(function() {
      itemsLoading -= 1;
      update();
    });

    update();
  }

  init();
}

/*
 * Side menu
 */

var SideMenu = function(blueprint3d, floorplanControls, modalEffects) {
  $('#constructor_3d, .config__next, .clearConstr').on('click', function(EO) {
    EO.preventDefault();
    blueprint3d.model.floorplan.update();
  })
  var blueprint3d = blueprint3d;
  var floorplanControls = floorplanControls;
  var modalEffects = modalEffects;

  var ACTIVE_CLASS = "active";

  var tabs = {
    // "FLOORPLAN" : $("body"),
    "SHOP" : $("#items_tab"),
    "DESIGN" : $("#design_tab")
  }

  var scope = this;
  this.stateChangeCallbacks = $.Callbacks();

  this.states = {
    "DEFAULT" : {
      "div" : $("#viewer"),
      "tab" : tabs.DESIGN
    },
    "FLOORPLAN" : {
      "div" : $("#floorplanner"),
      "tab" : tabs.FLOORPLAN
    },
    "SHOP" : {
      "div" : $("#add-items"),
      "tab" : tabs.SHOP
    }
  }

    var triggerAddItem = true;


    // click handlers
    $('.instruction__link').on('click', function (EO) {
      EO.preventDefault();
      EO.stopPropagation();
      closeInstruction();
    })

    function closeInstruction() {
      var domElement = document.getElementById('viewer');
      domElement.style.cursor = 'url(/wp-content/themes/unnell/web/static/img/icons/coursor/default-default.svg) 20 0, auto';
      $('.instruction').addClass('instruction--animationClose');
      triggerAddItem = false;
      setTimeout(() => {
        $('.instruction').addClass('instruction--closed');
      }, 1000)
    }

  // sidebar state
  var currentState = scope.states.FLOORPLAN;

  function init() {

    var wallA = 700;
    var wallB = 400;

    var dataRoomWall = $('.constructor').attr('data-room');
    if (dataRoomWall) {
      var parseRoomWall = JSON.parse(dataRoomWall);
      var nameCoor = Object.keys(parseRoomWall.floorplan.corners)[2]
      wallA = parseRoomWall.floorplan.corners[nameCoor]['x'];
      wallB = parseRoomWall.floorplan.corners[nameCoor]['y'];
      $('.config__top_line .config__number').text(wallA);
      $('.config__left_line .config__number').text(wallB);
    } else {
      wallA = 700;
      wallB = 400;
    }

    $('.confWallA-desk').val(wallA);
    $('#confWallA').val(wallA);
    $('.confWallB-desk').val(wallB);
    $('#confWallB').val(wallB);
    $('.config__input_height').val(250);
    $('.config__input_height_mobile').val(250);
    for (var tab in tabs) {
      var elem = tabs[tab];
      elem.click(tabClicked(elem));
    }

    $("#update-floorplan").click(floorplanUpdate);

    $('.config__next').click(function () {
      $('.constructor__controlViwe').removeClass('activeState constructor_2d_active constructor_3d_active')
      $('#constructor_3d').addClass('activeState')
      closeInstruction();
      // check and set min wall height if < 2.1m
      var wallHeight = $('.config__input_height_mobile').val() > 210 ? $('.config__input_height_mobile').val() : 250;
      // wallHeight = $('.config__input_height').val() > 210 ? $('.config__input_height').val() : 250;
      // $('.config__input_height').val(wallHeight);
      $('.config__input_height_mobile').val(wallHeight);
      // check and set min wallA length if < 3m
      wallA = $('#confWallA').val() > 300 ? $('#confWallA').val() : 300;
      // wallA = $('.confWallA-desk').val() > 300 ? $('.confWallA-desk').val() : 300;
      $('.confWallA-desk').val(wallA);
      $('#confWallA').val(wallA);
      // check and set min wallB height if < 3m
      wallB = $('#confWallB').val() > 300 ? $('#confWallB').val() : 300;
      // wallB = $('.confWallB-desk').val() > 300 ? $('.confWallB-desk').val() : 300;
      $('.confWallB-desk').val(wallB);
      $('#confWallB').val(wallB);

      $('.config__top_line .config__number').text(wallA);
      $('.config__left_line .config__number').text(wallB);
      var rommSize = wallA + 'x' + wallB;
      console.log(wallB, wallA)
      $('.list_room_size').val(rommSize)
      $('.conf_wr_filters__plan, .planWrap').addClass('closed')

      setTimeout(function() {
        setCurrentState(scope.states.FLOORPLAN);
        floorplanUpdate();
        // $('.config__input').val('');
      }, 10);
      return false;
    })

    $('.clearConstr').click(function () {
      $('.conf_wr_filters-side__reset').removeClass('visible')
      $('.constructor__controlViwe').removeClass('activeState constructor_2d_active constructor_3d_active')
      $('#constructor_3d').addClass('activeState')
      $(this).closest('.pop_up__wr').removeClass('pop_up_active')
      $('html, body').removeClass('pop_up_cond')
      blueprint3d.model.loadSerialized('{"floorplan":{"corners":{"8f4a050d-e102-3c3f-5af9-3d9133555d76":{"x":0,"y":0,"pos":"left-bot"},"4e312eca-6c4f-30d1-3d9a-a19a9d1ee359":{"x":0,"y":' + wallB + ',"pos":"left-top"},"11d25193-4411-fbbf-78cb-ae7c0283164b":{"x":' + wallA + ',"y":' + wallB + ',"pos":"right-top"},"edf0de13-df9f-cd6a-7d11-9bd13c36ce12":{"x":' + wallA + ',"y":0,"pos":"right-bot"}},"walls":[{"corner1":"8f4a050d-e102-3c3f-5af9-3d9133555d76","corner2":"4e312eca-6c4f-30d1-3d9a-a19a9d1ee359"},{"corner1":"8f4a050d-e102-3c3f-5af9-3d9133555d76","corner2":"edf0de13-df9f-cd6a-7d11-9bd13c36ce12"},{"corner1":"edf0de13-df9f-cd6a-7d11-9bd13c36ce12","corner2":"11d25193-4411-fbbf-78cb-ae7c0283164b"},{"corner1":"11d25193-4411-fbbf-78cb-ae7c0283164b","corner2":"4e312eca-6c4f-30d1-3d9a-a19a9d1ee359"}],"wallTextures":[],"floorTextures":{}},"items":[]}');
      $.each(listItem, function (i, v) {
        objForIvan[i]['number'] = 0;
      })
      var nullifyList = function(listItem){
        Object.keys(listItem).forEach(function(key){ listItem[key] = 0 });
        return listItem;
      }
      nullifyList(listItem)
      // console.table(listItem)
      // console.table(objForIvan)
      $('.confPrice').html(allPrice);
      return false;
    })

    initLeftMenu();

    blueprint3d.three.updateWindowSize();
    handleWindowResize();

    initItems();

    setCurrentState(scope.states.DEFAULT);
  }

  function floorplanUpdate() {
    setCurrentState(scope.states.DEFAULT);
  }

  function tabClicked(tab) {
    return function() {
      // Stop three from spinning
      blueprint3d.three.stopSpin();

      // Selected a new tab
      for (var key in scope.states) {
        var state = scope.states[key];
        if (state.tab == tab) {
          setCurrentState(state);
          break;
        }
      }
    }
  }

  function setCurrentState(newState) {

    if (currentState == newState) {
      return;
    }

    // show the right tab as active
    if (currentState.tab !== newState.tab) {
      if (currentState.tab != null) {
        currentState.tab.removeClass(ACTIVE_CLASS);
      }
      if (newState.tab != null) {
        newState.tab.addClass(ACTIVE_CLASS);
      }
    }

    // set item unselected
    blueprint3d.three.getController().setSelectedObject(null);

    // show and hide the right divs
    currentState.div.hide()
    newState.div.show()

    // custom actions
    if (newState == scope.states.FLOORPLAN) {
      floorplanControls.updateFloorplanView();
      floorplanControls.handleWindowResize();
    }

    if (currentState == scope.states.FLOORPLAN) {
      blueprint3d.model.floorplan.update();
    }

    if (newState == scope.states.DEFAULT) {
      blueprint3d.three.updateWindowSize();
    }

    // set new state
    handleWindowResize();
    currentState = newState;

    scope.stateChangeCallbacks.fire(newState);
  }

  function initLeftMenu() {
    $( window ).resize( handleWindowResize );
    handleWindowResize();
  }

  function handleWindowResize() {
    $(".sidebar").height(window.innerHeight);
    $("#add-items").height(window.innerHeight);

  };

  // TODO: this doesn't really belong here
  function initItems() {
    $("#add-items").find(".add-item").mousedown(function(e) {
      var modelUrl = $(this).attr("model-url");
      var itemType = parseInt($(this).attr("model-type"));
      var metadata = {
        itemName: $(this).attr("model-name"),
        resizable: true,
        modelUrl: modelUrl,
        itemType: itemType
      }
      console.log(metadata)

      blueprint3d.model.scene.addItem(itemType, modelUrl, metadata);
      setCurrentState(scope.states.DEFAULT);
    });
  }




  $('.config__add_window').on('click', function() {

    if (triggerAddItem) {
      closeInstruction();
      $('.conf_wr_filters-side__reset').addClass('visible')
    }
    blueprint3d.model.scene.addItem(2, '/wp-content/themes/unnell/web/static/const/models/newObj/window/window.js', {resizable: true, itemName: 'window', itemType: 2, modelUrl: '/wp-content/themes/unnell/web/static/const/models/newObj/window/window.js'}, 'window');
  });
  $('.config__add_door').on('click', function() {
    if (triggerAddItem) {
      closeInstruction();
      $('.conf_wr_filters-side__reset').addClass('visible')
    }
    blueprint3d.model.scene.addItem(9, '/wp-content/themes/unnell/web/static/const/models/newObj/door/door.js', {resizable: true, itemName: 'door', itemType: 9, modelUrl: '/wp-content/themes/unnell/web/static/const/models/newObj/door/door.js'}, 'door');

  });

  // blueprint3d.model.scene.addItem(1, '/wp-content/themes/unnell/web/static/const/models/model1/model.js', {resizable: true});
  // blueprint3d.model.scene.addItem(1, '/wp-content/themes/unnell/web/static/const/models/model1/model.js', {resizable: true});

  init();

  $(document).on('click', '.conf_wr__over, .shop_filters__block', function (EO) {
    let target = EO.target;
    if (EO.target.tagName === 'IMG') {
      if ($(EO.target).parent().hasClass('my_add_item_one')) {
        console.log('hear')
        if (triggerAddItem) {
          closeInstruction();
          $('.conf_wr_filters-side__reset').addClass('visible')
        }
        adItem(target)
        return
      }
    }
    if (!$(EO.target).hasClass('my_add_item_one')) {
      return
    }
    if (triggerAddItem) {
      closeInstruction();
      $('.conf_wr_filters-side__reset').addClass('visible')
    }
    $('.conf_wr_filters-side__reset').addClass('visible')

    adItem(target)
    EO.stopPropagation();
  })

  function adItem(e) {
    let linkJs = $(e).closest('.config__item').attr('data-js');
    let nameGoods = $(e).closest('.config__item').attr('data-goods');
    let valueFloor = $(e).closest('.config__item').attr('data-floor');
    addItemInList(nameGoods)
    // console.log(valueFloor)
    if (valueFloor === "true") {
      blueprint3d.model.scene.addItem(1, linkJs, {floor: true, resizable: true, itemName: nameGoods, itemType: 1, modelUrl: linkJs}, nameGoods);
    } else {
      blueprint3d.model.scene.addItem(1, linkJs, {floor: false, resizable: true, itemName: nameGoods, itemType: 1, modelUrl: linkJs}, nameGoods);
    }
    // blueprint3d.model.scene.addItem(1, linkJs, {floor: valueFloor, resizable: true, itemName: nameGoods, itemType: 1, modelUrl: linkJs}, nameGoods);
  }

  // $('.shop_filters').on('click', function() {
  //   blueprint3d.model.scene.addItem(1, '/wp-content/themes/unnell/web/static/const/models/model1/model.js', {resizable: true}, 'name', {'x': 100, 'y': 71, 'z': 250});
  // })

  $('.my_add_item').on('click', function(EO) {
    EO.preventDefault()
    if (triggerAddItem) {
      closeInstruction();
      $('.conf_wr_filters-side__reset').addClass('visible')
    }
    $('body, html').removeClass('pop_up_cond');
    $('.items_pop_up').removeClass('pop_up_active');
    let linkJs = $('.my_add_item').attr('data-jsLink');
    let nameGoods = $('.my_add_item').attr('data-goodsGoods');
    let valueFloor = $('.my_add_item').attr('data-floor');
    addItemInList(nameGoods)
    // blueprint3d.model.scene.addItem(1, linkJs, {floor: true, resizable: true, itemName: nameGoods, itemType: 1, modelUrl: linkJs}, nameGoods);
    if (valueFloor === "true") {
      blueprint3d.model.scene.addItem(1, linkJs, {floor: true, resizable: true, itemName: nameGoods, itemType: 1, modelUrl: linkJs}, nameGoods);
    } else {
      blueprint3d.model.scene.addItem(1, linkJs, {floor: false, resizable: true, itemName: nameGoods, itemType: 1, modelUrl: linkJs}, nameGoods);
    }
  })

  function getListSelectedItem() {
    let htmlJsn = $('.constructor').attr('data-json');
    let items = JSON.parse(htmlJsn);

    if ($('.constructor').attr('data-objModels')) {
      let htmlJsnIvan = $('.constructor').attr('data-objModels');
      let itemsIvan = JSON.parse(htmlJsnIvan);

      items.forEach((v, k) => {
        if (itemsIvan[v['name']]) {
          listItem[v['name']] = itemsIvan[v['name']]['number'];
        } else {
          listItem[v['name']] = 0;
        }
      });
    } else {
      items.forEach((v, k) => {
        listItem[v['name']] = 0;
      });
    }
    console.table(listItem)
    // htmlJsn = $('.constructor').attr('data-json');
    // items = JSON.parse(htmlJsn);
    // items.forEach((v, k) => {
    //   listItem[v['name']] = 0;
    // });

    // console.table(items)
    items.forEach((v, k) => {
      listItem2[v['name']] = v.price;
    });
    items.forEach((v, k) => {
      listItem3[v['name']] = v.id;
    });
    items.forEach((v, k) => {
      objForIvan[v['name']] = {
        'id' : v.id,
        'price' : v.price,
        'number' : 0
      };
    });
    console.log(objForIvan)
  }
  getListSelectedItem()


  var allPrice = 0;
  function addItemInList(props) {
    setTimeout(function() {
      if (variableThroughAllTheFIles) {
        listItem[props]++;
        $.each(listItem, function (i, v) {
          objForIvan[i]['number'] = v;
        })
        var counter = 0;
        $.each(listItem, function (index, value) {
          counter++;
          if (value) {
            curPrice = (Number(listItem2[index]) * Number(value));
            allPrice = allPrice + curPrice;
          }
        });
        $('.confPrice').html(allPrice);
        allPrice = 0;
        $('.list_items').attr('data-val', JSON.stringify(listItem))
        $('.list_items').val(JSON.stringify(objForIvan))
        console.table(listItem)
      }
    }, 200);
  }

}



/*
 * Change floor and wall textures
 */

var TextureSelector = function (blueprint3d, sideMenu) {

  var scope = this;
  var three = blueprint3d.three;
  var isAdmin = isAdmin;

  var currentTarget = null;

  function initTextureSelectors() {
    $(".texture-select-thumbnail").click(function(e) {
      var textureUrl = $(this).attr("texture-url");
      var textureStretch = ($(this).attr("texture-stretch") == "true");
      var textureScale = parseInt($(this).attr("texture-scale"));
      currentTarget.setTexture(textureUrl, textureStretch, textureScale);

      e.preventDefault();
    });
  }

  function init() {
    three.wallClicked.add(wallClicked);
    three.floorClicked.add(floorClicked);
    three.itemSelectedCallbacks.add(reset);
    three.nothingClicked.add(reset);
    sideMenu.stateChangeCallbacks.add(reset);
    initTextureSelectors();
  }

  function wallClicked(halfEdge) {
    currentTarget = halfEdge;
    $("#floorTexturesDiv").hide();
    $("#wallTextures").show();
  }

  function floorClicked(room) {
    currentTarget = room;
    $("#wallTextures").hide();
    $("#floorTexturesDiv").show();
  }

  function reset() {
    $("#wallTextures").hide();
    $("#floorTexturesDiv").hide();
  }

  init();
}

/*
 * Floorplanner controls
 */

var ViewerFloorplanner = function(blueprint3d) {

  var canvasWrapper = '#floorplanner';

  // buttons
  var move = '#move';
  var remove = '#delete';
  var draw = '#draw';

  var activeStlye = 'btn-primary disabled';

  this.floorplanner = blueprint3d.floorplanner;

  var scope = this;

  function init() {

    $( window ).resize( scope.handleWindowResize );
    scope.handleWindowResize();

    // mode buttons
    scope.floorplanner.modeResetCallbacks.add(function(mode) {
      $(draw).removeClass(activeStlye);
      $(remove).removeClass(activeStlye);
      $(move).removeClass(activeStlye);
      if (mode == scope.floorplanner.modes.MOVE) {
          $(move).addClass(activeStlye);
      } else if (mode == scope.floorplanner.modes.DRAW) {
          $(draw).addClass(activeStlye);
      } else if (mode == scope.floorplanner.modes.DELETE) {
          $(remove).addClass(activeStlye);
      }

      if (mode == scope.floorplanner.modes.DRAW) {
        $("#draw-walls-hint").show();
        scope.handleWindowResize();
      } else {
        $("#draw-walls-hint").hide();
      }
    });

    $(move).click(function(){
      scope.floorplanner.setMode(scope.floorplanner.modes.MOVE);
    });

    $(draw).click(function(){
      scope.floorplanner.setMode(scope.floorplanner.modes.DRAW);
    });

    $(remove).click(function(){
      scope.floorplanner.setMode(scope.floorplanner.modes.DELETE);
    });
  }

  this.updateFloorplanView = function() {
    scope.floorplanner.reset();
  }

  this.handleWindowResize = function() {
    $(canvasWrapper).height(window.innerHeight - $(canvasWrapper).offset().top);
    scope.floorplanner.resizeView();
  };

  init();
};

/*
 * Initialize!
 */

$(document).ready(function() {

  window.addEventListener("keydown", function(e) {
      // space and arrow keys
      if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
          e.preventDefault();
      }
  }, false);

  // main setup
  var opts = {
    floorplannerElement: 'floorplanner-canvas',
    threeElement: '#viewer',
    threeCanvasElement: 'three-canvas',
    widget: false
  }
  var blueprint3d = new Blueprint3d(opts);

  var modalEffects = new ModalEffects(blueprint3d);
  var viewerFloorplanner = new ViewerFloorplanner(blueprint3d);
  var contextMenu = new ContextMenu(blueprint3d);
  var sideMenu = new SideMenu(blueprint3d, viewerFloorplanner, modalEffects);
  var textureSelector = new TextureSelector(blueprint3d, sideMenu);
  var cameraButtons = new CameraButtons(blueprint3d);
  // mainControls(blueprint3d);

  // Simple hack for exporting rooms.
  $(window).dblclick(function() {
    console.log(blueprint3d.model.exportSerialized())
  })
  var dataRoomDefault = '{"floorplan":{"corners":{"8f4a050d-e102-3c3f-5af9-3d9133555d76":{"x":0,"y":0,"pos":"left-bot"},"4e312eca-6c4f-30d1-3d9a-a19a9d1ee359":{"x":0,"y":400,"pos":"left-top"},"11d25193-4411-fbbf-78cb-ae7c0283164b":{"x":700,"y":400,"pos":"right-top"},"edf0de13-df9f-cd6a-7d11-9bd13c36ce12":{"x":700,"y":0,"pos":"right-bot"}},"walls":[{"corner1":"8f4a050d-e102-3c3f-5af9-3d9133555d76","corner2":"4e312eca-6c4f-30d1-3d9a-a19a9d1ee359"},{"corner1":"8f4a050d-e102-3c3f-5af9-3d9133555d76","corner2":"edf0de13-df9f-cd6a-7d11-9bd13c36ce12"},{"corner1":"edf0de13-df9f-cd6a-7d11-9bd13c36ce12","corner2":"11d25193-4411-fbbf-78cb-ae7c0283164b"},{"corner1":"11d25193-4411-fbbf-78cb-ae7c0283164b","corner2":"4e312eca-6c4f-30d1-3d9a-a19a9d1ee359"}],"wallTextures":[],"floorTextures":{}},"items":[]}';
  var dataRoom = $('.constructor').attr('data-room');
  if (!dataRoom) {
    dataRoom = dataRoomDefault;
  }

  data = dataRoom;

  blueprint3d.model.loadSerialized(data);
})
