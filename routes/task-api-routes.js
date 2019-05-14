var db = require("../models");

module.exports = function (app) {

    app.get("/api/Tasks", function (req, res) {
        var query = {};
        if (req.query.user_id) {
            query.UserId = req.query.user_id;
        }
        db.Tasks.findAll({
            where: query,
            include: [db.Users]
        }).then(function (dbTask) {
            res.json(dbTask);
        });
    });

    app.get("/api/Tasks/:id", function (req, res) {
        db.Tasks.findOne({
            where: {
                id: req.params.id
            },
            include: [db.Users]
        }).then(function (dbTasks) {
            res.json(dbTasks);
        });
    });

    app.post("/api/Tasks", function (req, res) {

        //not sure if "body" is the best param to use below, i want to make sure it sybolizes the correct thing for easy reading.
        db.Tasks.create(req.body).then(function (dbTask) {
            res.json(dbTask);
        });
    });

    app.delete("/api/Tasks/:id", function (req, res) {
        db.Tasks.destroy({
            where: {
                id: req.params.id
            }
        }).then(function (dbTasks) {
            res.json(dbTasks);
        });
    });

    app.put("/api/Tasks", function (req, res) {
        db.Tasks.update(
            req.body, {
                where: {
                    id: req.body.id
                }
            }).then(function (dbTasks) {
            res.json(dbTasks);
        });
    });
};