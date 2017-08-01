'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var PeopleSchema = new Schema({
  name: {
    type: String,
    Required: 'Kindly enter the name of the parking spot concurrent'
  },
  Last_Spot: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['ativo', 'inativo']
    }],
    default: ['ativo']
  }
});

module.exports = mongoose.model('People', PeopleSchema);
