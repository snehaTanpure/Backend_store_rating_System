let model=require("../model/model.js");

exports.register=(req,res)=>{

  let {name,email,password,address,role}=req.body;
  let result=model.registerUser(name,email,password,address,role);
  result.then((r)=>{
    if(r. affectedRows>0){
          res.send("Data added successfully");
    }else{
      res.send("Data not added");
    }
  })
  .catch(err=>console.log(err))
}


exports.login = (req, res) => {
    const { email, password } = req.body;

    model.logindb(email, password).then((result) => {
            if (result.length > 0) {
                console.log(result)
               res.send(result[0]);
            } else {
                res.send("User not found");
            }
        })
        .catch((err) => {
            console.error("Login error:", err);
        });
};
