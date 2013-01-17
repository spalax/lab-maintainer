define([
    "dojo/_base/declare",
    "dojo/_base/lang",
    "dijit/layout/StackContainer",
    "dojo/router",
    "dojo/hash",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/Container.html"
], function(declare, lang, StackContainer, router, hash, _TemplatedMixin, template) {
// module:
//      app/Container
    
    return declare([ StackContainer, _TemplatedMixin ], {
        templateString: template,

        // summary:
        //      This is container for displaying menu page with 
        //      all it is states.
        postCreate: function () {
            try {
                hash() == '' && hash('#/dashboard');
                require(['app/pages/Dashboard'], lang.hitch(this, '_registerNewPage'));
                require(['app/pages/Detectors'], lang.hitch(this, '_registerNewPage'));
                require(['app/pages/Panels'], lang.hitch(this, '_registerNewPage'));
            } catch (e) {
                console.error(this.declaredClass+" "+arguments.callee.nom, arguments, e);
                throw e;
            }
        },
        
        _registerNewPage: function (page) {
            try {
                var pageObject = new page();
                this.addChild(pageObject);
                var _self = this;
                router.register(pageObject.get('path') || '', function () {
                    try {
                        if (document && document.title) {
                            document.title = 'Labaratory Maintainer - '+pageObject.title
                        }
                        _self.selectChild(pageObject);
                    } catch (e) {
                        console.error(this.declaredClass+" "+arguments.callee.nom, arguments, e);
                        throw e;
                    }
                });
            } catch (e) {
                console.error(this.declaredClass+" "+arguments.callee.nom, arguments, e);
                throw e;
            }
        },
        
        startup: function () {
            try {
                this.inherited(arguments);
                router.startup();
            } catch (e) {
                console.error(this.declaredClass+" "+arguments.callee.nom, arguments, e);
                throw e;
            }
        }
    });
});