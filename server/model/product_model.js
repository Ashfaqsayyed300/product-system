const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    product_name : {
        type : String,
        required: true
    },
    product_price: {
        type: Number,
        required: true,
    },
    category_name: {
        type: String,
        required: true,
    },
})

const Productdb = mongoose.model('productdb', schema);

module.exports = Productdb;