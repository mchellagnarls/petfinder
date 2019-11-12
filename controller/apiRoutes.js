var db = require("../models");

var matchingObject = {};
var returningMatches = [];

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
        animalQueryingDB();
        db.Pets.create(req.body).then(function(humanMatches) {
            res.render(humanMatches);
        });
    });
    // create new human record
    app.post("/api/humans", function(req, res) {
        humanQueryingDB();
        db.Humans.create(req.body).then(function(petMatches) {
            res.render("results/partials/resultspets" ,{petMatches: petMatches});
        });
    });
};