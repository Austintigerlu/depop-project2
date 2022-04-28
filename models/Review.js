const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5,
    },
    description: {
        type: String,
        required: true,
    },
    product: {
        type: mongoose.Types.ObjectId,
        ref: 'Product'
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
},
    {
        timestamps: true
    }
);

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;