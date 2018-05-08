const mongoose = require('mongoose');
const { Schema } = mongoose;

const reviewSchema = new Schema({
  user: {
    type: String,
    required: true
  },
  stars: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  review: {
    type: String,
    required: true
  },
  movieID: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Review', reviewSchema);
