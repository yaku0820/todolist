const mysql=require('mysql2');

const pool=mysql.createPool({
    host:'localhost',
    user:'root',
    database:'mgl-site',
    password:'88560820',
    connectionLimit:2,
}).promise();
module.exports=pool