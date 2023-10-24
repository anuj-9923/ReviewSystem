const express = require('express');
const bodyParser = require('body-parser')
const path = require('path')
const app = express();

const router = express.Router();

const reviewController = require('../controllers/index')


router.get('/',reviewController.mainPage)

router.post('/review',reviewController.postReview);

router.post('/reviews', reviewController.getReview)

router.use('/givereview',reviewController.giveReview)

router.use('/viewreview',reviewController.viewReview)

module.exports = router;