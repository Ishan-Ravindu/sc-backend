const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const billSchema = new mongoose.Schema({
  bilTotal: {
    type: Number,
    required: true,
  },
  isDelivered: {
    type: Boolean,
    required: false,
  },
  bil: {
    type: Array,
    required: true,
  },

  postDate: {
    type: Date,
    required: false,
  },
  deliveredDate: {
    type: Date,
    required: false,
  },
});

billSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Bill", billSchema);
