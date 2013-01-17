define([
    "dojo/_base/declare",
    "dojo/hash",
    "dijit/_Widget",
    "dijit/_Container",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/MenuContainer.html",
    "dojo/text!./templates/MenuItem.html"
], function(declare, hash, _Widget, _Container, _TemplatedMixin, templateContainer, templateItem) {
// module:
//      app/Menu
    var MenuItem = declare([_Widget, _TemplatedMixin ], {
        templateString: templateItem,
        hash: '#',
        
        postCreate: function () {
            try {
                var _self = this;
                require('dojo/topic').subscribe('/dojo/hashchange', function (newHash){
                    console.log("Changed to >>> ", newHash, " My hash is >>", _self.get('hash'));
                    _self.set('active', newHash == _self.get('hash'));
                });
            } catch (e) {
                console.error(this.declaredClass+" "+arguments.callee.nom, arguments, e);
                throw e;
            }
        },
        
        startup: function () {
            try {
                this.set('active', hash() == this.get('hash'));
            } catch (e) {
                console.error(this.declaredClass+" "+arguments.callee.nom, arguments, e);
                throw e;
            }
        },
        
        _setHashAttr: function (hash) {
            try {
                require('dojo/dom-attr').set(this.linkNode, 'href', '#'+hash);
            } catch (e) {
                console.error(this.declaredClass+" "+arguments.callee.nom, arguments, e);
                throw e;
            }
        },
        
        _setActiveAttr: function (flag) {
            try {
                var action = flag ? 'add' : 'remove';
                require('dojo/dom-class')[action](this.domNode, 'active');
            } catch (e) {
                console.error(this.declaredClass+" "+arguments.callee.nom, arguments, e);
                throw e;
            }
        },
        
        _setNameAttr: function (name) {
            try {
                require('dojo/dom-attr').set(this.linkNode, 'innerHTML', name);
            } catch (e) {
                console.error(this.declaredClass+" "+arguments.callee.nom, arguments, e);
                throw e;
            }
        }
    });
    
    return declare([ _Widget, _Container, _TemplatedMixin ], {
        templateString: templateContainer,

        // summary:
        //      This is container for displaying menu page with 
        //      all it is states.
        postCreate: function () {
            try {
                this.addChild(new MenuItem({name: 'Dashboard', hash: '/dashboard'}));
                this.addChild(new MenuItem({name: 'Detectors', hash: '/detectors'}));
                this.addChild(new MenuItem({name: 'Panels', hash: '/panels'}));
            } catch (e) {
                console.error(this.declaredClass+" "+arguments.callee.nom, arguments, e);
                throw e;
            }
        },
        
        addChild: function (menuItem) {
            try {
                var domAttr = require('dojo/dom-attr');
                if (!domAttr.get(this.primaryLinkNode, 'href')) {
                    domAttr.set(this.primaryLinkNode, 'href', '#'+menuItem.get('hash'));
                }
                this.inherited(arguments);
            } catch (e) {
                console.error(this.declaredClass+" "+arguments.callee.nom, arguments, e);
                throw e;
            }
        }
    });
});