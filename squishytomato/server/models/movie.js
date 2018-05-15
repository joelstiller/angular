const mongoose = require('mongoose');
const { Schema } = mongoose;

const movieSchema = new Schema({
  title: {
    type: String,
    required: [true, 'You must enter a title!'],
    minlength: [3, 'The movie title must be at least 3 characters']
  }
});

module.exports = mongoose.model('Movie', movieSchema);
