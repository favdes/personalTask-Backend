const TASK_ROLE = require('../model/taskRoleModel');

// post users, C-- for create
const create_task =  async (req, res)=>{
    try{
        await TASK_ROLE.create(req.body);
        res.status(201).json({msg:"created successfully"})

    }catch(error){
        console.log(error);
        res.status(500).json({msg:error})
    }
};
// get users, R-- for read

const getAll_tasks = async(req,res)=>{
    try{
        // const {id:userId}= 
       const tasks = await TASK_ROLE.find({});
        if(tasks.length <1)return res.json({msg:"No users found"})
        res.status(200).json({tasks})

    }catch(error){
        console.log(error);
        res.status(500).json({msg:error})
    }
}; 
// update users, u-- for update

const update_task = async(req, res)=>{
    try{
        const {id:taskId}= req.params 
        const task = await TASK_ROLE.findOneAndUpdate
        ({_id:taskId}, req.body,{
            new:true,
            runValidators:true
        })
        res.status(200).json({task})

    }catch(error){
        console.log(error);
        res.status(500).json({msg:error})
    }
};
// Delete users, D-- for Delete

const delete_task = async(req,res)=>{
    try{
        const {id:taskId}= req.params 
        const task = await TASK_ROLE.findOneAndDelete
        ({_id:taskId})
        res.status(200).json({task})

    }catch(error){
        console.log(error);
        res.status(500).json({msg:error})
    }
}

// params route for getting single page

const single_page = async (req, res) => {

    try {
        const {id:taskId}= req.params 
      const task = await TASK_ROLE.findOne({_id:taskId});
      res.status(200).json({task})
    }catch(error){
        console.log(error);
        res.status(500).json({msg:error})
    }
  };



module.exports = {
    create_task,
    getAll_tasks,
    update_task,
    delete_task,
    single_page,
}