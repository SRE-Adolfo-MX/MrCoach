const express = require("express");
const app = express();
const port = 8000;
const db = require("./lib/db");
//app.listen(port);


app.listen(port, ()=>{

    console.log("Listening on port:", port)
    db.connect().then(()=>{
        console.log("DB Connect");
    }).catch((err)=> {
        console.error("Connection error", err)
    })

});