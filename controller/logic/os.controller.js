/* Dto */
const osDto = require("../../model/dto/os.dto");
const config = require("config");
/* Helper */ //falta inplementar helpers
//const helper = require("../helpers/general.helper");
//const notHelper = require("../helpers/notification.helper");

exports.createOs = (req, res, next) => {
  let std = {
    name: req.body.name,
    kernel: req.body.kernel,
    driver: req.body.driver,
    devices: req.body.devices,
    memory: req.body.memory,
    requirements: req.body.requirements,
    interface: req.body.interface,
    cache: req.body.cache
  };
  osDto.create(std, (err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }

    res.status(200).json({
      info: data,
    });
    
  });
};

exports.updateOs = (req, res, next) => {
  let std = {
    name: req.body.name,
    kernel: req.body.kernel,
    driver: req.body.driver,
    devices: req.body.devices,
    memory: req.body.memory,
    requirements: req.body.requirements,
    interface: req.body.interface,
    cache: req.body.cache
  };
  osDto.update({ _id: req.body.id }, std, (err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }

    res.status(201).json({
      info: data,
    });
  });
};

exports.getAll = (req, res, next) => {
  osDto.getAll({}, (err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }

    res.status(200).json({
      info: data,
    });
  });
};

exports.getByCode = (req, res, next) => {
  osDto.getByCode({ code: req.params.code }, (err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }

    res.status(200).json({
      info: data,
    });
  });
};

exports.deleteOs = () => {
  osDto.delete({ _id: req.body.id }, (err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }

    res.status(204).json();
  });
};