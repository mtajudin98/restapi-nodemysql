var mysql = require('mysql');

//membuat koneksi
const conn = mysql.createConnection({
        host:'localhost',
        user: 'root',
        password: '',
        database: 'db_api'
});

conn.connect((err)=>{
    if(err) throw err;
    console.log('mysql terkoneksi');
});
module.exports = conn;