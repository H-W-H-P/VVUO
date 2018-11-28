// add items to the "Add Items" tab

$(document).ready(function() {
  var items = [
   {
      "name" : "Closed Door",
      "image" : "https://blueprint-dev.s3.amazonaws.com/uploads/item_picture/image/646/thumbnail_Screen_Shot_2014-10-27_at_8.04.12_PM.png",
      "model" : "https://blueprint-dev.s3.amazonaws.com/uploads/item_model/model/617/closed-door28x80_baked.js",
      "type" : "7"
    },
    {
      "name" : "Bedside table - White",
      "image" : "models/model1.png",
      "model" : "models/model1.js",
      "type" : "1"
    },
    {
      "name" : "telescope",
      "image" : "models/model3.png",
      "model" : "models/model7.js",
      "type" : "1"
    },
    {
      "name" : "table",
      "image" : "models/model4.png",
      "model" : "models/model4.js",
      "type" : "1"
    },
    {
      "name" : "laptop",
      "image" : "models/model6.png",
      "model" : "models/model6.js",
      "type" : "1"
    },
    {
      "name" : "desk",
      "image" : "models/model8.png",
      "model" : "models/model8.js",
      "type" : "1"
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
  ]



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