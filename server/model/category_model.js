const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    category_name: {
        type: String,
        required: true,
    },
})

const Categorydb = mongoose.model('categorydb', schema);

module.exports = Categorydb;