const Review = require('mongoose').model('Review');

module.exports = {
  index(request, response) {
    console.log('Requesting Reviews from server');
    Review.find({})
      .then(reviews => response.json(reviews))
      .catch(console.log);
  },
  show(request, response) {
    Review.findById(request.params.reviewID)
      .then(review => response.json(review))
      .catch(console.log);
  },
  update(request, response) {
    Review.findByIdAndUpdate(request.params.reviewID, request.body, {
      new: true
    })
      .then(review => response.json(review))
      .catch(console.log);
  },
  create(request, response) {
    Review.create(request.body)
      .then(review => response.json(review))
      .catch(error => {
        const errors = Object.keys(error.errors).map(
          key => error.errors[key].message
        );
        response.json(errors);
      });
  },
  destroy(request, response) {
    Review.findByIdAndRemove(request.params.reviewID)
      .then(review => response.json(review))
      .catch(console.log);
  },
  bymovie(request, response) {
    Review.find({ movieID: request.params.movieID })
      .then(review => response.json(review))
      .catch(console.log);
  }
};
