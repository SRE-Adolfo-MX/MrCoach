const mongoose = require("mongoose");
const config = require("dotenv").config();

const connect = () => new Promise((resolve, reject)=>{
    mongoose.connect(
        `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.CLUSTER}/${process.env.DB}?retryWrites=true&w=majority`,
    {
        useNewUrlParser: true,
    }
    );

console.log("enviroment", process.env)

    const db = mongoose.connection;

    db.on("open", () => {
        console.log("Connection successfull");
        resolve(mongoose);
    });

    db.on("error", (error) => {
        console.error("Concention failed", error);
        reject(error);
    });
});


module.exports = {
    connect,
};