const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    product: {
        type: mongoose.Types.ObjectId,
        ref: 'Product',
        required: true
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    }
},
    {
        timestamps: true
    }
);

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;