let express=require("express");
let regctrl=require("../controller/regctrl.js");
let router=express.Router();



router.post("/login",regctrl.login);

router.post("/register",regctrl.register);
router.get("/viewusers",regctrl.viewusers);


router.get("/ownerdata",regctrl.ownerData);
router.post("/addstore",regctrl.addstore);
router.get("/viwestore",regctrl.viwestore);
router.get("/deleteStore/:id",regctrl.deleteStore);



router.post("/addRating",regctrl.addRating);


router.get("/avgRating",regctrl.avgRating);
router.get("/allRating",regctrl.allRating);




module.exports=router;