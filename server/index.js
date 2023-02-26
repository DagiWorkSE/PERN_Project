const express = require("express");
const app = express();
const cors = require("cors");
const conn = require("./dbs");
app.use(express.json());
app.use(cors());

// app.post("/createAccount",async (req,res))

app.listen(5000,()=>{
    console.log("SERVER ACTIVE ON 5000");
});
