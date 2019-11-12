//Will put html page logic for server here
var express = require("express");
var exphbs = require("express-handlebars");
//Putting express functions into app
var app = express();

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var db = require("../models");


animalQueryingDB = function() {
    matchingObject = req.body;
    db.Humans.findAll({
        where: {
            pet_breed: matchingObject.pet_breed
        }
    });
    returningMatches = [];
    db.Humans.findAll({
        where: {
            pet_size: matchingObject.pet_size,
            pet_type: matchingObject.pet_type,
            residence: matchingObject.residence,
            hypo: matchingObject.hypo,
            activity: matchingObject.activity,
            pet_age: matchingObject.pet_age
        }
    }); 
};

humanQueryingDB = function() {
    matchingObject = req.body;
    db.Pets.findAll({
        where: {
            pet_breed: matchingObject.pet_breed,
        }
    });
    returningMatches = [];
    db.Pets.findAll({
        pet_size: matchingObject.pet_size,
        pet_type: matchingObject.pet_type,
        residence: matchingObject.residence,
        hypo: matchingObject.hypo,
        activity: matchingObject.activity,
        pet_age: matchingObject.pet_age
    });
};
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

    app.get("/results-pets/:id", function(req,res){

        console.log(req.param.id);
        db.Humans.findOne({
            where: {
                id: req.params.id
            }
        }).then(function(results){
            console.log("results:" + results);
            console.log(results.pet_size);
            console.log(results.residence)
           db.Pets.findAll({ where: {
                        kid_friendly: results.has_kids,
                        pet_type: results.pet_type,
                        pet_size: results.pet_size,
                        
                    }
                }).then(function(results){
                    res.render("partials/results-humans", {humanMatches: results});
                })
        });
    });

    app.get("/results-humans/:id", function(req,res){

        console.log(req.params.id);

        db.Pets.findOne({
            where: {
                id: req.params.id
            }
        }).then(function(results){
            console.log("results:" + results);
            console.log(results.pet_size);
            console.log(results.residence)
           db.Humans.findAll({ where: {
                        has_kids: results.kid_friendly,
                        pet_type: results.pet_type,
                        pet_size: results.pet_size,
                        
                    }
                }).then(function(results){
                    res.render("partials/results-humans", {humanMatches: results});
                })
        });


        
    });
}

module.exports = htmlRoutes;