let express=require("express");
let loginctrl=require("../controller/loginctrl.js");
let regctrl=require("../controller/regctrl.js");
let router=express.Router();

router.get("/",loginctrl.loginctrl);
router.post("/register",regctrl.register);




module.exports=router;