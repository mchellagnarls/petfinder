//Will put html page logic for server here
var express = require("express");
var exphbs = require("express-handlebars");
//Putting express functions into app
var app = express();

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var db = require("../models");
htmlRoutes = function (app) {
    // Just a reminder from handlebars exercise
    // app.get("/lunches", function(req, res) {
    //     res.render("all-lunches", {
    //       foods: lunches,
    //       eater: "david"
    //     });
    //   });
    //wildcard for redirecting everything back to the home page
    app.get("/", function (req, res) {
        res.render("partials/index");
    });

    app.get("/view-humans", function (req, res) {
        db.Humans.findAll({}).then(function(dbHumans) {
            res.render("partials/view-humans", {
              humans: dbHumans
            });
          });
    });
    app.get("/view-pets", function (req, res) {
        db.Pets.findAll({}).then(function(dbPets) {
            res.render("partials/view-pets", {
              pets: dbPets
            });
          });
    });

    app.get("/survey", function (req, res) {
        res.render("partials/survey");
    });

    app.get("/sign-up", function (req, res) {
        res.render("partials/sign-up");
    });

    app.get("/login", function (req, res) {
        res.render("partials/login");
    });

    app.get("/add-pet", function (req, res) {
        res.render("partials/petsurvey");
    });

    app.get("/add-human", function(req,res){
        res.render("partials/humansurvey");
    });

    app.get("/results-pets", function(req,res){
        res.render("partials/results-pets");
    });

    app.get("/results-humans", function(req,res){
        res.render("partials/results-humans");
    });
}

module.exports = htmlRoutes;