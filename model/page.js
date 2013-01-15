
exports.Page = require("perstore/model").Model(require("perstore/stores").DefaultStore(), {
    construct: function(page, directives){
        // set initial properties on object instantiation
        page.createdBy = promiseModule.currentContext.currentUser;
        page.status = "published";
        return page;
    },
    
    put: function(page, options){ // handle puts to add to history and define attribution
    },
    
    properties: { // schema definitions for property types (these are optional)
        status: {
            type: "string",
            indexed: true
        },
        content: String,
        createdBy: {
            type: "string",
            readonly: true
        }
    },

    prototype: { // define the methods available on the model object instances
        // these are used by atom
        getTitle: function(item){
            return item.name;
        },
        getSummary: function(item){
            return item.description;
        },
        getUpdated: function(item){
            return item.uploaded;
        }
        
    }
});