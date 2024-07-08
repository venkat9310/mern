const express = require('express');
const router = express.Router();
const Book = require('../model/bookModel');

// Add a new book
router.post('/', async (req, res) => {
  try {
    const { name, publisher, description, author_id } = req.body;
    const newBook = new Book({ name, publisher, description, author_id });
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all books with their authors
router.get('/', async (req, res) => {
  try {
    const books = await Book.find().populate('author_id');
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

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

// Update a book
router.put('/:id', async (req, res) => {
  try {
    const { name, publisher, description, author_id } = req.body;
    const book = await Book.findByIdAndUpdate(req.params.id, { name, publisher, description, author_id }, { new: true });
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
