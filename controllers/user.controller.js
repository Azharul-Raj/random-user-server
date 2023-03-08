const { ObjectId } = require("mongodb");
const { Users } = require("../config/connectDB");

// get a random user
module.exports.getAUser=async(req,res)=>{
    // const data=await Users.find({}).toArray()
    // const id=Math.ceil(Math.random()*data.length)
    // const random=await Users.findOne({id})
    const [random]=await Users.aggregate([{$sample:{size:1}}]).toArray()
    res.send(random);
}
// get all users
module.exports.getAllUsers=async(req,res)=>{
    const result=await Users.find({}).limit(2).toArray();
    res.send(result);
}
// add a user
module.exports.addUser=async(req,res)=>{
    const data=req.body;
    const result=await Users.insertOne(data);
    res.send(result);
}


// delete a user
module.exports.deleteUser=async(req,res)=>{
    const {id}=req.params;
    console.log(id);
    const result=await Users.deleteOne({_id:new ObjectId(id)});
    res.send(result);
}
