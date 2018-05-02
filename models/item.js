const mongoose = require('mongoose');

module.exports = mongoose.model(
    'Item',
    mongoose.Schema({
        ticketNo: {
            type: String,
            required: true
        },
        status: {
            type: String,
            required: true
        },
        assignee: {
            type: String,
            required: true
        },
        verifier: {
            type: String,
            required: true
        },
        startedOn: {
            type: String,
            required: true
        },
        shortDesc: {
            type: String,
            required: true
        },
        priority: {
          type: String,
          required: true
        }
    })
);
