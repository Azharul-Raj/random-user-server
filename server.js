const express=require("express");
const cors=require("cors");
const app=express();

app.use(express.json());
app.use(cors());

















app.all("*",(req,res)=>{
    res.send("OPPS!!! This route is not found.")
})