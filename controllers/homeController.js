//homeController.js
(function(homeController){

    var express  = require("express");
    var hc = express();

    homeController.init = function(app)
    {
        hc = app;
        var _path = __dirname;
        
        hc.get("/",function(req,res){
            res.render("index",{title:"Angular.PoC"});
        });

    };

})(module.exports);