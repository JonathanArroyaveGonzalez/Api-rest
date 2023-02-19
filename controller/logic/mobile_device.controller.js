/* Dto */
const mobile_deviceDto = require("../../model/dto/mobile_device.dto");
const config = require("config");


exports.createMobile_device = (req, res, next) => {

  let mobile = {
    name: req.body.name,
    os: req.body.os,
    ram: req.body.ram,
    rom: req.body.rom,
    model: req.body.model,
    serial: req.body.serial,
    memory: req.body.memory,
    battery: req.body.battery
  };
  mobile_deviceDto.create(mobile, (err, data) => {
    if (err) {
      return res.status(400).json({
        error: err
      });
    }
    
    res.status(200).json({
      info: data
    });

  });
};

exports.updateMobile_device = (req, res, next) => {
  let mobile = {
    name: req.body.name,
    os: req.body.os,
    ram: req.body.ram,
    rom: req.body.rom,
    model: req.body.model,
    serial: req.body.serial,
    memory: req.body.memory,
    battery: req.body.battery
  };
  mobile_deviceDto.update({ _id: req.body.id }, mobile, (err, data) => {
    if (err) {
      return res.status(400).json({
        error: err
      });
    }

    res.status(201).json({
      info: data
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

exports.getBySerial = (req, res, next) => {
  mobile_deviceDto.getBySerial({ serial: req.params.serial }, (err, data) => {
    if (err) {
      return res.status(400).json({
        error: err
      });
    }

    res.status(200).json({
      info: data
    });
  });
};



exports.deleteMobile_device = (req, res) => {

  mobile_deviceDto.delete({ serial: req.body.serial }, (err, data) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }

    return res.status(204).json({
      info: data
    });
  });
};