'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
  name: {
    type: String,
    Required: 'Kindly enter the name'
  },
  Last_Spot: {
    type: Date,
    default: Date.now
  },
  Total_Spots: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model('User', UserSchema);
