//Will put html page logic for server here
var express = require("express");
var exphbs = require("express-handlebars");
//Putting express functions into app
var app = express();

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


htmlRoutes = function (app) {
    // Just a reminder from handlebars exercise
    // app.get("/lunches", function(req, res) {
    //     res.render("all-lunches", {
    //       foods: lunches,
    //       eater: "david"
    //     });
    //   });
    //wildcard for redirecting everything back to the home page
    app.get("/", function(req,res) {
        res.render("partials/index");
    });

    app.get("/view-pets",function(req,res){
        res.render("partials/view-pets");
    });

    app.get("/survey", function(req,res){
        res.render("partials/survey")
    });
};

module.exports =htmlRoutes;