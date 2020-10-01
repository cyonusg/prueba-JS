'use strict';

const { Schema, model } = require('mongoose');

const ChampionsSchema = new Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true },
  rol: { type: Array, required: true },
  info: { type: Object, required: true },
  blurb: { type: String, required: true },
});

module.exports = model('Champions', ChampionsSchema, 'champions');
