const controller = require("../controller/logic/mobile_device.controller");


exports.mobileDeviceRoutes = (app) => {
  app.get("/mobile", (req, res, next) => {
    controller.getAll(req, res, next);
  });

  app.get("/mobile/byserial/:serial", (req, res, next) => {
    controller.getBySerial(req, res, next);
  });

  app.post("/mobile", (req, res, next) => {
    controller.createMobile_device(req, res, next);
  });

  app.put("/mobile", (req, res, next) => {
    controller.updateMobile_device(req, res, next);
  });

  app.delete("/mobile", (req, res, next) => {
    controller.deleteMobile_device(req, res, next);
  });
};