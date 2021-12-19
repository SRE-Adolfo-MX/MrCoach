const { response } = require("express");
const express = require("express");
const app = express();
const port = 8000;
const db = require("./lib/db");
const apiRouter = require("./routes");
//app.listen(port);

app.use(express.json())

apiRouter(app);

app.listen(port, ()=>{

    console.log("Listening on port:", port)
    db.connect().then(()=>{
        console.log("DB Connect");
    }).catch((err)=> {
        console.error("Connection error", err)
    })

});