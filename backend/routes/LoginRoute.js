const express = require('express');
const router = express.Router();
const User = require('../models/User.js'); 

router.post('/login', async (req, res) => {
    const { email, password } = req.body; 
    try {
        const user = await User.findOne({ email: email });
        if (user && user.password === password) {
            res.send({ message: 'login successful!'});
        } else {
            res.status(401).send({ message: 'Invalid credentials' });
        }
    } catch (err) {
        res.status(500).json({ error: 'Login failed!' });
    }
});
module.exports = router;