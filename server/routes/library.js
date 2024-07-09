const express = require('express');
const router = express.Router();
const Book = require('../model/bookModel');
const Author = require('../model/authorModel');

// Get book by ID with author details
router.get('/:id', async (req, res) => {
  try {
    const book = await Book.findById(req.params.id).populate('author_id');
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
