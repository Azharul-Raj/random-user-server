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
    const result=await Users.find({}).toArray();
    res.send(result);
}