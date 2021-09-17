let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let countrySchema = new Schema({});

let Country = mongoose.model('country', countrySchema);

module.exports = Country;
