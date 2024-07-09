const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  name: { type: String, required: true },
  publisher: { type: String, required: true },
  description: { type: String, required: true },
  author_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Author', required: true }
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
