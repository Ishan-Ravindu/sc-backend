const Joi = require('joi');
const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
    item: {
        type: String,
        required: true,
    },
    current_level: {
        type: String,
        required: true,

    },
    full_level: {
        type: String,
        required: true,
    },
    reorder_level: {
        type: String,
        required: true,
    },
    
});

function validateStock(Stock) {
    const schema = {
        item: Joi.string().min(5).max(50).required(),
        current_level: Joi.number().min(5).max(50).required(),
        full_level: Joi.number().min(5).max(50).required(),
        reorder_level:Joi.number().min(5).max(50).required(),

    };

    return Joi.validate(Stock, schema);
}
module.exports = mongoose.model('Stock', stockSchema)
module.exports.validateStock = validateStock;