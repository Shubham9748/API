const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {

        id: { type: String, required: true },
        name: { type: String, required: true },
        company: { type: String, required: true },
        price: { type: Number, required: true },
        colors: [{ type: String }],
        image: { type: String },
        description: { type: String },
        category: { type: String, required: true },
        shipping: { type: Boolean },
        featured: { type: Boolean }
    }
);

module.exports = mongoose.model('Product', productSchema);