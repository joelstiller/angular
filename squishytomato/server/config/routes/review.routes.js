const reviewController = require('../../controllers/reviews');

const router = require('express').Router();

router
  .get('/', reviewController.index)
  .post('/', reviewController.create)
  .get('/:reviewID', reviewController.show)
  .put('/:reviewID', reviewController.update)
  .delete('/:reviewID', reviewController.destroy)
  .get('/bymovie/:movieID', reviewController.bymovie);

module.exports = router;
