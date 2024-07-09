const express = require('express');
const router = express.Router();
const User = require('../model/userSchema');

// Route to create a new user
router.post('/', async (req, res) => {
    try {
        console.log('Received data:', req.body);
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            return res.status(400).send({ message: "All fields are required" });
        }

        const newUser = new User({ name, email, password });
        await newUser.save();
        res.status(201).send({ message: "User created successfully", newUser });
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: "Server error" });
    }
});

// Route to update user's password
router.put('/:id/password', async (req, res) => {
    try {
        const { password } = req.body;
        const userId = req.params.id;

        if (!password) {
            return res.status(400).send({ message: "Password is required" });
        }

        const updatedUser = await User.findByIdAndUpdate(userId, { password: password }, { new: true });

        if (!updatedUser) {
            return res.status(404).send({ message: "User not found" });
        }

        res.status(200).send({ message: "Password updated successfully", updatedUser });
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: "Server error" });
    }
});

// Route to delete a user
router.delete('/:id', async (req, res) => {
    try {
        const userId = req.params.id;

        const deletedUser = await User.findByIdAndDelete(userId);

        if (!deletedUser) {
            return res.status(404).send({ message: "User not found" });
        }

        res.status(200).send({ message: "User deleted successfully", deletedUser });
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: "Server error" });
    }
});

// Route to fetch all users
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).send(users);
    } catch (err) {
        console.error(err);
        res.status(500).send({ message: "Server error" });
    }
});

module.exports = router;
