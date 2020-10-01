'use strict';

const express = require('express');
const { create, getAll, get, deleteC } = require('../controllers/champions');

const router = express.Router();

router.post('/champions', create);
router.get('/champions', getAll);
router.get('/champions/:id', get);
router.delete('/champions/:id', deleteC);

module.exports = router;
