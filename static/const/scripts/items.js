// add items to the "Add Items" tab

$(document).ready(function() {

  var items = [
   {
      "name" : "Closed Door",
      "image" : "https://blueprint-dev.s3.amazonaws.com/uploads/item_picture/image/646/thumbnail_Screen_Shot_2014-10-27_at_8.04.12_PM.png",
      "model" : "https://blueprint-dev.s3.amazonaws.com/uploads/item_model/model/617/closed-door28x80_baked.js",
      "type" : "7",
      "type": "chair"
    },
    {
      "name" : "table",
      "image" : "static/const/models/model1/model.png",
      "model" : "static/const/models/model1/model.js",
      "type" : "1",
      "type": "chair"
    },
    {
      "name" : "table",
      "image" : "static/const/models/model1/model.png",
      "model" : "static/const/models/model1/model.js",
      "type" : "1",
      "type": "table"
    }
   //  {
   //    "name" : "Blue Rug",
   //    "image" : "https://blueprint-dev.s3.amazonaws.com/uploads/item_picture/image/467/thumbnail_cb-blue-block60x96.png",
   //    "model" : "https://blueprint-dev.s3.amazonaws.com/uploads/item_model/model/440/cb-blue-block-60x96.js",
   //    "type" : "8"
   //  },
   //  {
   //    "name" : "NYC Poster",
   //    "image" : "https://blueprint-dev.s3.amazonaws.com/uploads/item_picture/image/111/thumbnail_nyc2.jpg",
   //    "model" : "https://blueprint-dev.s3.amazonaws.com/uploads/item_model/model/77/nyc-poster2.js",
   //    "type" : "2"
   //  }
  ];

  // $('.config__owl').owlCarousel({
  //     items: 4,
  //     loop: false,
  //     dots: false,
  //     nav: true,
  //     responsive: {
  //       1024: {
  //         items: 5
  //       }
  //     }
  //   })

   let type = [];
   let objType = {};

   let label = $('.conf_wr_filters-side__chbx').each((value, key) => {
    if ($(key).attr('data-type')) {
      type.push($(key).attr('data-type'))
    }
  });

   type.forEach((value, key) => {
    let i = 0;
    objType[value] = i;

    items.forEach((valueItem, key) => {
      if (valueItem['types'] === value) {
        i++;
        objType[value] = i;
      }
    });

  });


   for (let key in objType) {
    $('.conf_wr_filters-side__chbx').each((valueLabel, keyLabel) => {
      if ($(keyLabel).attr('data-type') === key) {
        $(keyLabel).attr('data-amount', `${objType[key]}`)
      }
    });
  }




  $('.conf_wr_filters-side__chbx').on('clicks', function(EO) {
    $('.config__owl').empty();

    let htmlItem = `<a href='#' class='config__item'>
    <div class='config__img_wr'></div>
    <img src='static/img/pictures/shop2.png' class='config__icon>
    <div class='config__arrow'>
    <img src='static/img/icons/gray-arr.svg' class='config__icon'>
    <img src='static/img/icons/white-arr.svg' class='config__icon config__icon-hov'>
    </div>
    <p class='config__name'>Стол для учителя</p>
    <p class='config__desc'>100х36 см</p>
    <p class='config__price'>1200 ₽</p>
    </a>`;

    // $('.config__owl').append(htmlItem);


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

  


  })



  var itemsDiv = $("#items-wrapper")
  for (var i = 0; i < items.length; i++) {
    var item = items[i];
    var html = '<div class="col-sm-4">' +
    '<a class="thumbnail add-item" model-name="' + 
    item.name + 
    '" model-url="' +
    item.model +
    '" model-type="' +
    item.type + 
    '"><img src="' +
    item.image + 
    '" alt="Add Item"> '+
    item.name +
    '</a></div>';
    itemsDiv.append(html);
  }

});
