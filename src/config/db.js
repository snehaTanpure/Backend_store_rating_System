
let mysql=require("mysql2");
let dbenv=require("dotenv");



let conn=mysql.createConnection({
   host:process.env.DB_HOST,
   user:process.env.DB_USER,
   password:process.env.DB_PASSWORD,
   database:process.env.DB_Database
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
