const express = require('express');
const router = express.Router();
import { Category, Product } from '../domain/repository/dbContext';

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

router.get('/', function(req, res, next) {
    res.json({});
});

router.get('/categories', function(req, res, next) {
    Category.findAll().then(categories => res.json(categories));
});

router.get('/product/:id', function(req, res, next) {
    Product.findById(req.params.id).then(product => res.json(product));
});


module.exports = router;