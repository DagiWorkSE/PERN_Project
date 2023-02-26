const Pool = require("pg").Pool;
const conn = new Pool({
    user:"postgres",
    password:"123",
    port:5432,
    host:"localhost",
    database:"project"
})