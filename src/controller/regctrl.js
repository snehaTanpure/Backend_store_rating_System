exports.register=(req,res)=>{
  let {name,email,password,address,role}=req.body;
  console.log(name,email,password,address,role);
}