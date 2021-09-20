const mongoose = require('mongoose');
const productSchema = mongoose.Schema({
    title: String,
    description: String,
    currency: String,
    price: String,
    image: String,
    url: String,
    createdAt: {
        type: Number,
        default: () => Date.now()
    }
});

module.exports = mongoose.model('Product', productSchema);