const express=require("express");
const { ObjectId } = require("mongodb");
const { Users } = require("../../config/connectDB");

const router=express.Router();
const userController=require("../../controllers/user.controller")

router.get("/:random",userController.getAUser);
router.get("/",userController.getAllUsers);
router.post("/:save",userController.addUser);
router.patch("/:id",userController.updateUser)
router.patch("/",userController.updateMultiple)
router.delete("/:id",userController.deleteUser)


module.exports=router;