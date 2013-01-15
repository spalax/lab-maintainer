// helpful for debugging
var pinturaApp,
    Static = require("pintura/jsgi/static").Static,
    start = require("pintura/start-node").start;


function setPinturaApp(){
    pinturaApp = require("pintura/pintura").app;
    require("./app");
}

require.reloadable ? require.reloadable(setPinturaApp) : setPinturaApp();
start(
      require("pintura/jsgi/rewriter").Rewriter(/^\/$/, '/public/index.html', 
        require("pintura/jsgi/cascade").Cascade([
                Static({urls:["/public"], root: "public", directoryListing: true}),
                pinturaApp
        ])
     )
); 
