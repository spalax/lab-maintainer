define([
    "dojo/_base/declare",
    "dijit/layout/ContentPane",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/Panels.html"
], function(declare, ContentPane, _TemplatedMixin, template) {
// module:
//      app/pages/Panels
    return declare([ ContentPane, _TemplatedMixin ], {
        templateString: template,
        path: '/panels',
        title: 'Panels'
        
    });
});