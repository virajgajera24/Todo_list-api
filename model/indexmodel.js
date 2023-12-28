const employe = new mongoose.Schema({
    name: { type: String},
    email:{ type:String},
    password:{ type:String},
    contact:{ type:String},
    permit:{ type:String, defaultValue:'active'}
  });

  const MyModel = mongoose.model('employe', employe);