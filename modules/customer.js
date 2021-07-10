const Joi = require('joi');
const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String,
        required: true

    },
    mobile_number: {
        type: String,
        required: true
    },
    
});

function validateCustomer(Customer) {
    const schema = {
        first_name: Joi.string().min(5).max(50).required(),
        last_name: Joi.string().min(5).max(50).required(),
        mobile_number: Joi.string().min(5).max(50).required(),
        email:Joi.string().min(5).max(50).required(),

    };

    return Joi.validate(Customer, schema);
}
module.exports = mongoose.model('Customer', customerSchema)
module.exports.validateCustomer = validateCustomer;