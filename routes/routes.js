
var express = require('express');

// module.exports = function (app) {


const router = express.Router();
const {moviesGet, moviesInsert, moviesUpdate, moviesdel} =require('../controllers/movies_controller.js')

// this get data 
    router.get('/get',moviesGet);
 // this insert data       
    router.post('/im',moviesInsert);
    // this update data 
    router.post('/um',moviesUpdate);
    // this delete data 
    router.post('/dm',moviesdel)
    
// }

module.exports = router;