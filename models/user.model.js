const mongoose = require("mongoose")

//User Schema
let UserSchema = mongoose.Schema({
  firstName: {type:String, required:true},
  lastName: {type:String, required:true},
  email: {type:String, required:true},
  Password: {type:String, required:true},
  registrationDate: {type: Date, default: Date.now} // Added registrationDate field
})
let UserModel = mongoose.model('amia-database', UserSchema, 'user_collection');
module.exports = UserModel