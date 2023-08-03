// Assuming you have defined the User model
const bcrypt = require('bcrypt');
const express = require('express');
const router = express.Router();
const User = require("../Models/User");

// Register
router.post("/register", async (req, res) => {
    try {
        const { username, email, password } = req.body;
        
        // Check if any argument is missing
        if (!username || !email || !password) {
            return res.status(400).json({ error: "Please provide all required fields: username, email, and password." });
        }
        
        // Check if the email or username already exists in the database
        const existingUser = await User.findOne({ $or: [{ email: email }, { username: username }] });
        if (existingUser) {
            return res.status(400).json({ error: "User with the provided email already exists." });
        }
        
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        
        const newUser = new User({
            username: username,
            email: email,
            password: hashedPassword,
        });
        
        const user = await newUser.save();
        res.status(200).json(user);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = router;

