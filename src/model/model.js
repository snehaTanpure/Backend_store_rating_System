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
            }
    });
    });
    
}

exports.addstore=(name,address,owner_id)=>{
      return new Promise((resolve,reject)=>{
        conn.query("insert into stores values('0',?,?,?)",[name,address,owner_id],(err,result)=>{
            if(err)
            {
                reject (err);
            }
            else
                {
               resolve(result);
            }
        });
    });
}


exports.viewStore = () => {
  return new Promise((resolve, reject) => {
    conn.query("SELECT * FROM stores", (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};



exports.addRating = (store_id, user_id, rating) => {
    return new Promise((resolve, reject) => {
        const query = `INSERT INTO ratings (store_id , user_id, rating, created_at) VALUES (?, ?, ?, CURDATE())`;
        conn.query(query, [store_id, user_id, rating], (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        });
    });
};
