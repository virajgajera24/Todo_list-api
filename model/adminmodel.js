const mongoose = require('mongoose');

const admin = new mongoose.Schema({
  
    name: { type: String},
    email:{ type:String},
    password:{ type:String}
  });
  
  const employe = new mongoose.Schema({
    name: { type: String},
    email: { type:String},
    password: { type:String},
    contact:{ type:String},
    permit:{ type:String, default:'active'}
  })
  
  const task = new mongoose.Schema({
    user_id: { type: String},
    task: { type:String},
    process:{ type:String, default:"pending"}
  })
  
  var admindb = mongoose.model('admin', admin)
  var employedb = mongoose.model('employe', employe)
  var taskdb = mongoose.model('task', task)

  module.exports = {admindb,employedb,taskdb};