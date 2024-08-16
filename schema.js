const mongoose = require('mongoose');

const mySchema = new mongoose.Schema({
firstname:String,
lastname:String,
email:String,
phonenumber:String,
massage:String
});

module.exports = mongoose.model('datadetails', mySchema);

 