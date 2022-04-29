const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    name: {
        type: String,
        ref: 'Product',
        required: true
    },
    price: {
        type: Number,
        ref: 'Product',
        required: true,
    },
    image: {
        type: String,
        ref: 'Product',
    },
},
    {
        timestamps: true
    }
);

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;