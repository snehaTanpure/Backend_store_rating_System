let mysql = require("mysql2");


require("dotenv").config();

let conn = mysql.createConnection({
   host: process.env.DB_HOST,
   user: process.env.DB_USER,
   password: process.env.DB_PASSWORD,
   database: process.env.DB_NAME
});

conn.connect((err) => {
    if (err) {
        console.log("Database not connected", err);
    } else {
        console.log("Database Connected");
    }
});

module.exports = conn;

