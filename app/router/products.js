const express = require('express');

const { tasksManagerConnection } = require('../db');
const { defaultCallback } = require('../utils/dbUtils');

const router = express.Router();

router.get('/products', (req, res) => {
    tasksManagerConnection.execute('SELECT * FROM products', (err, result) => defaultCallback(err, result, res));
    // res.json([
    //     {
    //         "id": 1,
    //         "title": "iPhone 9",
    //         "description": "An apple mobile which is nothing like apple",
    //         "price": 549,
    //         "discountPercentage": 12.96,
    //         "rating": 4.69,
    //         "stock": 94,
    //         "brand": "Apple",
    //         "category": "smartphones",
    //         "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    //     }
    // ]);
});

module.exports = router;