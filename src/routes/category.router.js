const { getAll, create, remove } = require('../controllers/category.controller');
const express = require('express');
const { verifyJwt } = require('../utils/verifyJWT');



const routerCategory = express.Router();

routerCategory.route('/')
    .get(getAll)
    .post(verifyJwt, create);// privada🔒

routerCategory.route('/:id')
    .delete(verifyJwt, remove) // privada🔒
    
module.exports = routerCategory;