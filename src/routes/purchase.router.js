const { getAll, create } = require('../controllers/purchase.controllers');
const express = require('express');

const routerPurcahse = express.Router();

routerPurcahse.route('/')
    .get(getAll)
    .post(create)

module.exports = routerPurcahse;