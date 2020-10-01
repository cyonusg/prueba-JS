'use strict';

const Champions = require('../models/Champions');
const { apiResponse } = require('../utils/common');

const create = async (req, res, next) => {
  try {
    const champion = new Champions(req.body);
    await champion.save()
    return res.json(apiResponse({status:'200',data:champion,message:"Campeon Agregado exitosamente" }));
  } catch(error) {
    return next(res.json({status:'400',message: 'Error al guardar en la BD' } ));
  }
}

const getAll = async (req, res, next) => {
  try {
    const allChampion = await Champions.find();
    return res.json(apiResponse({status:200, data: allChampion }));

  } catch(error) {
    return next(error);
  }
}

const get = async (req, res, next) => {
  try {
    const champion = await Champions.findById(req.params.id);
    return res.json(apiResponse({status:200, data: champion }));

  } catch(error) {
    return next(error);
  }
}

const deleteC = async (req, res, next) => {
  try {
    const champion = await Champions.findById(req.params.id);
    champion.deleteOne();

    return res.json(apiResponse({status:200, data:champion, message:"Campeon elimado exitosamente"}));

  } catch(error) {
    return next(error);
  }
}

module.exports = {
  create,
  getAll,
  get,
  deleteC
}
