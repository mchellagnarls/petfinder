var db = require("../models");

//show 
module.exports = function (app) {
    app.get("/api/pets", function (req, res) {
        db.Pets.findAll({}).then(function (response) {
            res.json(response);
        });
    });

    // create new pet record
    app.post("/api/pets", function (req, res) {
        console.log("This is req in create new pet")
        console.log(req);
        db.Pets.create(req.body).then(function (response) {
            res.json(response);
        });
    });

    // delete pets by id
    app.delete("/api/pets/:id", function (req, res) {
        db.Pets.destroy({ where: { id: req.params.id } }).then(function (response) {
            res.json(response);
        });
    });
    //return by breed
    // app.get("/api/pets", function(req, res) {
    //     db.Pets.findAll({
    //         where: {
    //             //req.body.pet_breed
    //         }
    //     }).then(function(response) {
    //         res.json(response);
    //     });
    // });
}