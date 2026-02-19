const mongoose = require('mongoose');


//Define the personschema
const personschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number
    },
    phoneNumber: {
        type: String,
        required: true,
        match: /^[0-9]{11}$/   // Exactly 11 digits
    },
    university: {
        type: String,
    },
    Village: {
        type: String,
        required: true,
        enum: ["THALLAY", "BALGHAR"]
    },

});

const person = mongoose.model('person', personschema);
module.exports = person;