const express = require('express');
const ReviewsCtrl = require('./reviewsController');

const router = express.Router();

router.get('/movie/:id', ReviewsCtrl.apiGetReviews);

router.post('/new', ReviewsCtrl.apiPostReview);

router.route('/:id')
       .get(ReviewsCtrl.apiGetReview)
       .put(ReviewsCtrl.apiUpdateReview)
       .delete(ReviewsCtrl.apiDeleteReview)


module.exports = router;