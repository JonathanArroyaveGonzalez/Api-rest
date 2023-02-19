const controller = require("../controller/logic/os.controller");

exports.osRoutes = (app) => {
  app.get("/os", (req, res, next) => {
    controller.getAll(req, res, next);
  });

  app.get("/os/byname/:name", (req, res, next) => {
    controller.getByName(req, res, next);
  });

  app.post("/os", (req, res, next) => {
    controller.createOs(req, res, next);
  });

  app.put("/os", (req, res, next) => {
    controller.updateOs(req, res, next);
  });

  app.delete("/os", (req, res, next) => {
    controller.deleteOs(req, res, next);
  });
};