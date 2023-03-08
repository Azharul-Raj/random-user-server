const express=require("express");

const router=express.Router();
const userController=require("../../controllers/user.controller")

router.get("/:id",userController.getAUser);
router.get("/all",)

module.exports=router;