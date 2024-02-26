const express = require('express');
const routerUser = require('./user.router');
const routerCategory = require('./category.router');
const routerProduct = require('./product.router');
const routerCart = require('./cart.router');
const verifyJWT = require('../utils/verifyJWT');
const routerPurcahse = require('./purchase.router');
const router = express.Router();


// colocar las rutas aquí
router.use('/users', routerUser)
router.use('/categories', routerCategory)
router.use('/products', routerProduct)
router.use('/cart',verifyJWT, routerCart) // protegida
router.use('/purchase',verifyJWT, routerPurcahse)  //protegida


module.exports = router;