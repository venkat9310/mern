// routes/authors.js

const express = require('express');
const router = express.Router();
const Author = require('../model/authorSchema'); // Assuming this points to your author schema file

// Route to create a new author
router.post('/authors', async (req, res) => {
    try {
        const { name, publisher, description, author_id } = req.body;
        // Assuming Author.create() method from Mongoose schema
        const newAuthor = await Author.create({ name, publisher, description, author_id });
        res.status(201).send(newAuthor); // 201 status for successful creation
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: "Server error" });
    }
});

module.exports = router;
