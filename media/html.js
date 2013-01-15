/**
* Media handler for generating HTML
*/
var escapeHTML = function(string) {
        return String(string)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");};

require("pintura/media/html").setupMediaHandler({
	defaultQuality: 1,
	createContext: function(object, mediaParams, request, response){
	    object.some && console.log(object.some(function (data){
	               console.log("INSIDE ", data.getName());
	    }));
	    
	    console.log("Create context", request.pathInfo, object, response.headers.location);
	    
		return {
			pageName: escapeHTML(decodeURIComponent(request.pathInfo.replace(/^\/Test\//, ''))),
			content: "<p>"+object.name+"</p>",
			location: response.headers.location
		}
	}
});
