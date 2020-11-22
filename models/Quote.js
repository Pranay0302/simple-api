'use-strict'

const mongoose = require('mongoose');

const quoteSchema = new mongoose.Schema({
    quotes: {
        type: String,
        trim: true,
        required: true
    },
    description: {
        type: String
    }

})

module.exports = new mongoose.model('Quote', quoteSchema)