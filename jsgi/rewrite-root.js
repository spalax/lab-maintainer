var rewriter = require("pintura/jsgi/rewrite").Rewrite('/', '/index.html');
exports.RewriteRoot = function(app){
	return function(request){
		if(request.pathInfo == "/"){
			return rewriter(request);
		}
		return app(request);
	};
};
