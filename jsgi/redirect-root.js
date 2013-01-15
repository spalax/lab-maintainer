var redirector = require("pintura/jsgi/redirect").Redirect();
exports.RedirectRoot = function(app){
	return function(request){
		if(request.pathInfo == "/"){
			return redirector(request);
		}
		return app(request);
	};
};
