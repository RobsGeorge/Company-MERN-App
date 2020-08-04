const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let companySchema = new Schema({
  name: {
    type: String
  },
  code: {
    type: Number
  },
  address: {
    type: String
  },
  isActive:{
    type: Number
  }
}, {
    collection: 'companies'
  })

module.exports = mongoose.model('Company', companySchema)
