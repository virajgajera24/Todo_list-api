var {admindb,employedb,taskdb} = require('../model/adminmodel')
exports.register =async (req,res) =>{
    var data =await admindb.create(req.body)
    res.status(200).json(
        {
            status:"success",
            data
        }
    )
}
exports.login = async (req, res) =>{
 
    var data = await admindb.findOne({name:req.body.name})
    res.status(200).json(
        {
            status:"success",
            data
        }
    )
}
exports.add_emp = async (req, res) =>{
    var data = await employedb.create(req.body)
    res.status(200).json(
        {
            status:"success",
            data
        }
    )
}
exports.view_emp = async (req, res) =>{
 
    var data = await employedb.find()
    res.status(200).json(
        {
            status:"success",
            data
        }
    )
}

exports.manage_select_emp = async (req, res) =>{
    var id = req.params.id;
    var data = await employedb.findById(id)
    res.status(200).json(
        {
            status:"success",
            data
        }
    )

}
exports.manage_update_emp = async (req, res) =>{
    var id = req.params.id;
    var data = await employedb.findByIdAndUpdate(id,req.body)
    res.status(200).json(
        {
            status:"success",
            data
        }
    )

}

exports.add_task = async (req, res) =>{
    var data = await taskdb.create(req.body);

    res.status(200).json(
        {
            status:"success",
            data
        }
    )
}
exports.view_task = async (req, res) =>{
 
    var data = await taskdb.find()
    res.status(200).json(
        {
            status:"success",
            data
        }
    )
}
exports.manage_task = async (req, res) =>{
    var user_id = req.params.user_id;
    
    var data = await taskdb.findOneAndUpdate({user_id:user_id}, req.body)
    res.status(200).json(
        {
            status:"success",
            data
        }
    )
}