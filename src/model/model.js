let conn=require("../config/db.js");

exports.registerUser=(name,email,password,address,role)=>{

    return new Promise((resolve,reject)=>{
           conn.query("insert into users (name, email, password, address, role) values(?,?,?,?,?)",[name,email,password,address,role],(err,result)=>{
            if(err){
                    reject(err);
                    //  console.log(" not Save");
            }else{
                resolve(result);
                // console.log("Save");
            }
           });     
    })
}