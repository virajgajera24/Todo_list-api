var  { employedb,taskdb} = require('../model/adminmodel');
const storage = require('node-persist');

exports.login =async (req,res) =>{
  var data = await employedb.find({password:req.body.password,email:req.body.email});
 if(data.length != 0){

  await storage.init( /* options ... */ );
await storage.setItem('userid',data[0].id);

  res.status(200).json(
    {
        status:"success login",
        data
    }
  )
 }
 else{
  res.status(200).json(
    {
        status:"try again",
        data
    }
  )
 }

}

exports.dashboard = async (req, res) => {
  await storage.init( /* options ... */ );
  var userid = await storage.getItem('userid');

  var data = await taskdb.find({user_id:userid})
  res.status(200).json(
    {
        status:"success login",
        data
    }
  )
}
exports.magtask = async (req, res) => {
  var id = req.params.id;
  var process = req.params.status;
  console.log(process);
  var data = await taskdb.findByIdAndUpdate(id,{process:process})
  res.status(200).json(
    {
        status:"success login",
        data
    }
  )
}