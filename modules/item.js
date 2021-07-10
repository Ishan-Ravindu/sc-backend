//const Joi = require('joi');
// const joi= require('joi');
const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    item_name: {
        type: String,
        required: true,
    },
    item_price: {
        type: String,
        required:true,
        
    },
    quantity: {
        type: String,
        required: true,
        
    }
});

function validateItem(Item) {
    const schema = {
        item_name: Joi.string().min(1).max(50).required(),
        item_price: Joi.number().min(1).max(50).required(),
        quantity: Joi.number().min(1).max(50).required()
       

    };

    return Joi.validate(Item, schema);
}
module.exports = mongoose.model('Item', itemSchema)
module.exports.validateItem = validateItem;