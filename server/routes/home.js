const express = require('express');
const router = express.Router();

router.get('/home', (req, res) => {
    res.send('<h1>This is your home page</h1>');
});


