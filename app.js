var Model   = require('perstore/model').Model,
    MongoDB = require('mongodb');

require("./media/html");
//require("pintura/media/json");
var database = new MongoDB.Db('test', new MongoDB.Server('localhost', 27017), {safe: false});

var fullModel = {
     page: require("./model/page").Page,
     product: require("./model/product").Product(database)
};

//initialize the data model
require('pintura/pintura').config.getDataModel = function(request){
    return fullModel;
};

require("perstore/model").initializeRoot(fullModel);