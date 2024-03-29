const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
  userId: { type: String, required: false, unique: false },
  password: { type: String, required: true },
  email: { type: String, required: false },

  // imagePath: { type: String , required:true }

});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);
