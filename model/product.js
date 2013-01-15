exports.Product = require("perstore/model")(require("perstore/store/mongodb").MongoDB({collection: "product"}), {
            properties: {
                key: String,
                name: String
            },
            
            prototype: {
                getKey: function() {
                    return this.key;
                },
                
                getName: function() {
                    return this.name;
                }
            }
});