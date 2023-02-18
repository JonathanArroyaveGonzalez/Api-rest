const controller = require("../controller/logic/mobile_device.controller");
/* module .exports para solucionar invocacion en app.js */
exports.mobileDeviceRoutes = (app) => {
  console.log("Loading routes of Mobile device")
  app.get("/mobile", (req, res, next) => {
    controller.getAll(req, res, next);
  });

  app.get("/mobile/bycode/:code", (req, res, next) => {
    console.log("getting mobile device by code");
    controller.getByCode(req, res, next);
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