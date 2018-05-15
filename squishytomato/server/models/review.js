const mongoose = require('mongoose');
const { Schema } = mongoose;

const reviewSchema = new Schema({
  user: {
    type: String,
    required: [true, 'A name is required'],
    minlength: [3, 'Your name must be at least 3 characters long'],
    trim: true
  },
  stars: {
    type: Number,
    required: [true, 'Please select a rating 1 to 5 stars'],
    min: 1,
    max: 5
  },
  review: {
    type: String,
    required: [true, 'You must submit a review!'],
    minlength: [10, 'Your review must be at least 10 characters long']
  },
  movieID: {
    type: String,
    required: [true, 'You must include the movie ID'],
    unique: true
  }
});

module.exports = mongoose.model('Review', reviewSchema);
