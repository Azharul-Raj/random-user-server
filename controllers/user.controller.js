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
    const {limit}=req.query
    const result=await Users.find({}).limit(limit).toArray();
    res.send(result);
}
// add a user
module.exports.addUser=async(req,res)=>{
    const data=req.body;
    const {name,gender,contact,address,photoUrl}=data;
    let result=[];
    if(name && gender && contact&& address && photoUrl){
        result.push(await Users.insertOne(data));
    }else{        
        if(!name){
            result.push("Please provide name")
        }
        if(!gender){
            result.push("Please provide gender")
        }
        if(!contact){
            result.push("Please provide contact")
        }
        if(!address){
            result.push("Please provide address")
        }
        if(!photoUrl){
            result.push("Please Provide photo")
        }

    }
    res.send(result);
}
//update a user
module.exports.updateUser=async(req,res)=>{
    const {id}=req.params;
    const data=req.body;
    const filter={_id:new ObjectId(id)}
    const updatedDoc={
        $set:data
    }
    const result=await Users.updateOne(filter,updatedDoc);
    // console.log(data);
    res.send(result)
}
// update multiple data
module.exports.updateMultiple=async(req,res)=>{
    
    const {ids,data}=req.body;
    const result=await Users.updateMany({_id:{$in:ids.map(id=>new ObjectId(id))}},{$set:data})
    res.send(result);
}

// delete a user
module.exports.deleteUser=async(req,res)=>{
    const {id}=req.params;
    if(id.length!==24){
       return res.send("provide a valid id")
    }
    const result=await Users.deleteOne({_id:new ObjectId(id)});
    res.send(result);
}
