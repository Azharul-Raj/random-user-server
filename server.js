const express=require("express");
const cors=require("cors");
const app=express();
app.use(express.json());
app.use(cors());
const getAUserRouter=require("./routes/v1/user.route");
const { connectDB } = require("./config/connectDB");
// const { MongoClient } = require("mongodb");

const port=3001;

app.listen(port,()=>{
    console.log(`server is running at ${port}`);
})
// const uri="mongodb://127.0.0.1:27017"
// const client=new MongoClient(uri);
// const connectDB=async()=>{
//     try {
//         await client.connect();
//         console.log("Database connected");
//     } catch (error) {
//         console.log(error);
//     }
// }
connectDB()
// const Users= client.db("random_users").collection("users")
// app.get('/all',async(req,res)=>{
//     const result=await Users.find({}).toArray()
//     res.send(result)
// })

app.use("/v1/users",getAUserRouter);
















app.all("*",(req,res)=>{
    res.send("OPPS!!! This route is not found.")
})