var db = require("../models");

module.exports = function(app) {
  app.get("/api/Users", function(req, res) {
    
    db.Users.findAll({
      include: [db.Tasks]
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });
  
  app.get("/api/Users/:id", function(req, res) {
  
    db.Users.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Tasks]
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  app.post("/api/Users", function(req, res) {
    db.Users.create(req.body).then(function(dbUser) {
      res.json(dbUser);
    });
  });

  app.delete("/api/Users/:id", function(req, res) {
    db.Users.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  });

};
