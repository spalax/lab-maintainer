define([
    "dojo/_base/declare",
    "dijit/layout/ContentPane",
    "dijit/_TemplatedMixin",
    "dojo/text!./templates/Detectors.html"
], function(declare, ContentPane, _TemplatedMixin, template) {
// module:
//      app/pages/Detectors
    return declare([ ContentPane, _TemplatedMixin ], {
        templateString: template,
        path: '/detectors',
        title: 'Detectors'
    });
});