const controller = require("../controller/logic/os.controller");

exports.osRoutes = (app) => {
  console.log("Loading routes of OS")
  app.get("/os", (req, res, next) => {
    controller.getAll(req, res, next);
  });

  app.get("/os/bycode/:code", (req, res, next) => {
    console.log("getting OS by code");
    controller.getByCode(req, res, next);
  });

  app.post("/os", (req, res, next) => {
    controller.createMobile_device(req, res, next);
  });

  app.put("/os", (req, res, next) => {
    controller.updateMobile_device(req, res, next);
  });

  app.delete("/os", (req, res, next) => {
    controller.deleteMobile_device(req, res, next);
  });
};