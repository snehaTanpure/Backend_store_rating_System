
let mysql=require("mysql2");
let dbenv=require("dotenv");

let conn=mysql.createConnection({
   host:"localhost",
   user:"root",
   password:"Sneha0412",
   database:"store_rating_system"
});

conn.connect( (err)=>{
 
    if(err)
    {
      console.log("Database not connected");
    }
    else
    {
        console.log("Database Connected");
    }

});


module.exports=conn;
