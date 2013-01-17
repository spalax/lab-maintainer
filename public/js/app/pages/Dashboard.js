define([
    "dojo/_base/declare",
    "dijit/layout/ContentPane",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/Dashboard.html"
], function(declare, ContentPane, _TemplatedMixin, template) {
// module:
//      app/pages/Dashboard
    return declare([ ContentPane, _TemplatedMixin ], {
        templateString: template,
        path: '/dashboard',
        title: 'Dashboard'
    });
});