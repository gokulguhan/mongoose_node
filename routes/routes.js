
var express = require('express');
// this express router
const router = express.Router();
const { moviesGet, moviesInsert, moviesUpdate, moviesdel } = require('../controllers/movies_controller.js')
// this import product controller
const { addProduct, getProduct } = require('../controllers/product_controller.js')
// this get data 
router.get('/get', moviesGet);
// this insert data       
router.post('/im', moviesInsert);
// this update data 
router.post('/um', moviesUpdate);
// this delete data 
router.post('/dm', moviesdel)


router.post('/addProduct', addProduct);
router.get('/getProduct', getProduct);

module.exports = router;