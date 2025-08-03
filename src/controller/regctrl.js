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

  


exports.addstore=(req,res)=>{
 let {name,address,owner_id}=req.body;

    let result=model.addstore(name,address,owner_id);

    result.then( (r)=>{
       if(r.affectedRows>0){
        res.send("Store Addaed Successfully");
       }
       else{
        res.send("Store not Added");
       }

    }).catch((err)=>{
       console.log(err);
    })
}



exports.viwestore = (req, res) => {

  model.viewStore().then((result) => {
      res.send(result);
    }).catch(err => {
      res.status(500).json({ error: err.message });
    });
};




exports.addRating=(req,res)=>{

  let {store_id,user_id,rating}=req.body;

  model.addRating(store_id,user_id,rating).then((r)=>{
   
    if(r.affectedRows > 0)
    {
      res.send("Rating Added Succesfully");
    }
    else{
      res.send("Rating not Added Try Again");
    }

  });

}