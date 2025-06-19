const express = require('express');
const router = express.Router();
const Doctor_Schema = require('../models/Doctor_registration_Schema');

router.post('/doctor_registration', async (req, res) => {
    const name = req.body.name;
    const exp = req.body.exp;
    const sp = req.body.sp;
    const aform = req.body.aform;
    const atill = req.body.atill;
    const Degrees = req.body.Degrees;
    const exists = await Doctor_Schema.findOne({ name: name });
    if (!exists) {
        try {
            await Doctor_Schema.create({ name, exp, sp, aform, atill, Degrees });
            res.json({ message: "Doctor registered successfully!" });
        } catch (err) {
            res.status(500).json({ error: "Doctor Registration failed", details: err.message });
        }
    }
    else {
        res.status(409).json({ error: "Conflict" });
    }
});

module.exports = router; 