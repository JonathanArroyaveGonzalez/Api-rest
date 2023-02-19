/* Dto */
const osDto = require("../../model/dto/os.dto");
const config = require("config");


exports.createOs = (req, res, next) => {
  let os = {
    name: req.body.name,
    kernel: req.body.kernel,
    driver: req.body.driver,
    devices: req.body.devices,
    memory: req.body.memory,
    requirements: req.body.requirements,
    interface: req.body.interface,
    cache: req.body.cache
  };
  osDto.create(os, (err, data) => {
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

exports.updateOs = (req, res, next) => {
  let os = {
    name: req.body.name,
    kernel: req.body.kernel,
    driver: req.body.driver,
    devices: req.body.devices,
    memory: req.body.memory,
    requirements: req.body.requirements,
    interface: req.body.interface,
    cache: req.body.cache
  };
  osDto.update({ _id: req.body.id }, os, (err, data) => {
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
  osDto.getAll({}, (err, data) => {
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

exports.getByName = (req, res, next) => {
  osDto.getByName({ name: req.params.name }, (err, data) => {
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


exports.deleteOs = (req, res) => {

  osDto.delete({ name: req.body.name }, (err, data) => {
    if (err) {
      return res.status(400).json({
        error: err
      });
    }

    res.status(204).json({
      info: data 
    });
  });
};