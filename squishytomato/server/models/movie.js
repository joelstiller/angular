const mongoose = require('mongoose');
const { Schema } = mongoose;

const movieSchema = new Schema({
  title: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Movie', movieSchema);
