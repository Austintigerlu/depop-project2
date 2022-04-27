const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    cart: {
        type: mongoose.Types.ObjectId,
        ref: 'Product'
    },
    forSale: {
        type: mongoose.Types.ObjectId,
        ref: 'Product'
    }
},
    {
        timestamps: true
    }
);

const User = mongoose.model('User', userSchema);

module.exports = User;