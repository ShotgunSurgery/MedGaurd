const mongoose = require('mongoose');

const doctor_registration_schema = new mongoose.Schema({
    name: { type: String, required: true},
    exp: { type: Number, required: true},
    sp: { type: String, required: true},
    atill: { type: String, required: true},
    aform: { type: String, required: true},
    Degrees: { type: String, require: true},    
});

module.exports = mongoose.model('Doctor_Schema', doctor_registration_schema);