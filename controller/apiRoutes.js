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
            res.json(response);
        });
    });
    // create new human record
    app.post("/api/humans", function(req, res) {
        db.Humans.create(req.body).then(function(response) {
            res.json(response);
        });
    });
    // delete pets by id
    app.delete("/api/pets/:id", function(req, res) {
        db.Pets.destroy({ where: { id: req.params.id } }).then(function(response) {
            res.json(response);
        });
    });
    // delete humans by id
    app.delete("/api/humans/:id", function(req, res) {
        db.Humans.destroy({ where: { id: req.params.id } }).then(function(response) {
            res.json(response);
        });
    });
};