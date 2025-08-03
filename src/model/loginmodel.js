let conn=require("../config/db.js");

exports.logindb=(email,password)=>{
    return new Promise((resolve,reject)=>{
        conn.query("select * from users where email=? and password=?",[email,password],(err,result)=>{
            if(err){
                    reject(err);
            }else{
                resolve(result);
            }
    });
    });
    
}