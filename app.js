var Model   = require('perstore/model').Model;

require("pintura/media/json");
var fullModel = {
     page: require("./model/page").Page,
     product: require("./model/product").Product
};

//initialize the data model
require('pintura/pintura').config.getDataModel = function(request){
    return fullModel;
};

require("perstore/model").initializeRoot(fullModel);