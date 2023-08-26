const express = require('express');

const router = express.Router();

const{getAllProducts}= require("../controllers/product");

router.route("/").get(getAllProducts);


module.exports = router;



// //get express
// const express = require('express');

// //to get router
// //express: node.js framework used to build web application
// //.Router() : this is a function provided by express module. It creates a new router object that we can use to define fifferent routes of our application
// const router = express.Router();

// //importing our function

// const {getAllProducts, getAllProductsTesting} = require('../controllers/product');

// //defining our routes

// router.route("/").get(getAllProducts);
// router.route("/testing").get(getAllProductsTesting);

// module.exports = router;