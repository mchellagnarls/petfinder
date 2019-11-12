var db = require("../models");

module.exports = function(app) {
    // get all pets
    app.get("/api/pets", function(req, res) {
        db.Pets.findAll({}).then(function(response) {
            res.json(response);
        });
    });
    // get all humans
    app.get("/api/humans", function(req, res) {
        db.Humans.findAll({}).then(function(response) {
            res.json(response);
        });
    });
    // create new pet record
    app.post("/api/pets", function(req, res) {
        db.Pets.create(req.body).then(function(response) {
            //logic for matches
            
            res.redirect("/partials/results-humans", 
            // object of matches to pass to handlebars
            )
        });
    });
    // create new human record
    app.post("/api/humans", function(req, res) {
        db.Humans.create(req.body).then(function(response) {
            //logic for matches
            
            res.redirect("/partials/results-pets", 
            // object of matches to pass to handlebars
            )
        });
    });
};