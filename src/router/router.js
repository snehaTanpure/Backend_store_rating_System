let express=require("express");
let regctrl=require("../controller/regctrl.js");
let router=express.Router();



router.post("/login",regctrl.loginctrl);

router.post("/register",regctrl.register);


router.post("/addstore",regctrl.addstore);
router.get("/viwestore",regctrl.viwestore);


router.post("/addRating",regctrl.addRating);




module.exports=router;