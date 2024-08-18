const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost',
    prot:887
    user: 'rksetup_blue',
    password: 'rksetup_blue',
    database: 'rksetup_blue',
});
export default connection;