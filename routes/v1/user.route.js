const express=require("express");
const { Users } = require("../../config/connectDB");

const router=express.Router();
const userController=require("../../controllers/user.controller")

router.get("/:random",userController.getAUser);
router.get("/",userController.getAllUsers)


module.exports=router;