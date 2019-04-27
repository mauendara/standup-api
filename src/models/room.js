const mongoose = require('mongoose');

const roomModel = mongoose.Schema({
  name: { type: String, required: '{PATH} is required!' }
}, {
    timestamps: true
  });

module.exports = mongoose.model('Room', roomModel);
