const express = require('express');
const router = express.Router();
const User = require('../models/User.js');

router.post('/register', async (req, res) => {
    const { name, age, gender, email, password } = req.body;
    const exists = await User.findOne({ email: email });
    if (!exists) {
        try {
            await User.create({ name, age, gender, email, password });
            res.json({ message: "User registered successfully!" });
        } catch (err) {
            res.status(500).json({ error: "Registration failed", details: err.message });
        }
    }
    else{
        res.status(409).json({ error: "Conflict"});
    }

});

module.exports = router; 