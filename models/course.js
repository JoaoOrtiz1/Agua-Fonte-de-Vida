'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    video: {
        type: String
    }
});

module.exports = mongoose.model('Course', schema);