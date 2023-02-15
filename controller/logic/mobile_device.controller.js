/* Dto */
const mobile_deviceDto = require("../../model/dto/mobile_device.dto");
const config = require("config");
/* Helper */ //falta inplementar helpers
//const helper = require("../helpers/general.helper");
//const notHelper = require("../helpers/notification.helper");

exports.createMobile_device = (req, res, next) => {
  let std = {
    name: req.body.name,
    os: req.body.os,
    ram: req.body.ram,
    rom: req.body.rom,
    model: req.body.model,
    serial: req.body.serial,
    memory: req.body.memory,
    battery: req.body.battery
  };
  mobile_deviceDto.create(std, (err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
  });
};

exports.updateMobile_device = (req, res, next) => {
  let std = {
    name: req.body.name,
    os: req.body.os,
    ram: req.body.ram,
    rom: req.body.rom,
    model: req.body.model,
    serial: req.body.serial,
    memory: req.body.memory,
    battery: req.body.battery
  };
  mobile_deviceDto.update({ _id: req.body.id }, std, (err, data) => {
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
  mobile_deviceDto.getAll({}, (err, data) => {
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
  mobile_deviceDto.getByCode({ code: req.params.code }, (err, data) => {
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

exports.deleteMobile_device = () => {
  mobile_deviceDto.delete({ _id: req.body.id }, (err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }

    res.status(204).json();
  });
};