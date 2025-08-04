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

exports.viewusers=()=>{

    return new Promise((resolve,reject)=>{
           conn.query("select * from users where role!=?",['admin'],(err,result)=>{
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


exports.ownerData=()=>{

    return new Promise((resolve,reject)=>{
           conn.query("select * from users where role=?",['owner'],(err,result)=>{
            if(err){
                    reject(err);
                    
            }else{
                resolve(result);
            }
           });     
    })  
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
    conn.query("SELECT s.id,s.name,s.address,u.name as owner  FROM stores s join users u on u.id=s.owner_id", (err, result) => {
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
 


 exports.avgRating = () => {
  return new Promise((resolve, reject) => {
    conn.query("select s.name,s.address,avg(r.rating) as avg,sum(r.rating) as sum from stores s join ratings r on r.store_id=s.id group by s.name,s.address", (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};


 exports.allRating = () => {
  return new Promise((resolve, reject) => {
    conn.query("select u.name,r.rating,r.created_at from users u join ratings r on  r.user_id=u.id  ", (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};





 exports.deleteStore = (id) => {
  return new Promise((resolve, reject) => {
    conn.query("delete from stores where id=?",[id], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};


