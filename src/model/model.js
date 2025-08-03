let conn=require("../config/db.js");

exports.registerUser=(name,email,password,address,role)=>{

    return new Promise((resolve,reject)=>{
           conn.query("insert into users (name, email, password, address, role) values(?,?,?,?,?)",[name,email,password,address,role],(err,result)=>{
            if(err){
                    reject(err);
                    
            }else{
                resolve(result);
               
            }
           });     
    })
}

exports.logindb=(email,password)=>{
    return new Promise((resolve,reject)=>{
        conn.query("select * from users where email=? and password=?",[email,password],(err,result)=>{
            if(err){
                    reject(err);
            }else{
                resolve(result);
                console.log("result");
            }
    });
    });
    
}