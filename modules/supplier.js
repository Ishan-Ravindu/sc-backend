const Joi = require("joi");
const mongoose = require("mongoose");

const supplierSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },

  mobile_number: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

function validateSupplier(Supplier) {
  const schema = {
    first_name: Joi.string().min(5).max(50).required(),
    last_name: Joi.string().min(5).max(50).required(),
    mobile_number: Joi.string().min(5).max(50).required(),
    email: Joi.string().min(5).max(50).required(),
  };

  return Joi.validate(Supplier, schema);
}
module.exports = mongoose.model("Supplier", supplierSchema);
module.exports.validateSupplier = validateSupplier;
