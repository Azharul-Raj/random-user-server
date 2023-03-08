const express=require("express");
const cors=require("cors");
const app=express();
app.use(express.json());
app.use(cors());
const getAUserRouter=require("./routes/v1/user.route");
const { connectDB } = require("./config/connectDB");

const port=3001;

app.listen(port,()=>{
    console.log("Server is running");
})
connectDB();

app.use("/v1/random-user",getAUserRouter);
















app.all("*",(req,res)=>{
    res.send("OPPS!!! This route is not found.")
})