const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    age: {
        type: String
    },
    Hometown: {
        type: String
    },
    phone: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },

})
module.exports = mongoose.model('Users', userSchema)