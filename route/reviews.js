const express = require('express');
const bodyParser = require('body-parser')
const path = require('path')
const app = express();

const route = express.Router();

const reviewController = require('../controller/index')

route.get('/', reviewController.mainPage);

route.post('/review', reviewController.postReview);

route.post('/getReviews', reviewController.getReview);

route.use('/givereview', reviewController.giveReview);

route.use('/viewreview', reviewController.viewReview);

module.exports = route;