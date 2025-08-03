let express=require("express");
let regctrl=require("../controller/regctrl.js");
let router=express.Router();



router.post("/login",regctrl.loginctrl);

router.post("/register",regctrl.register);




module.exports=router;