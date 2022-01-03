const mongoose = require("mongoose"); 
const Schema = mongoose.Schema;

const schema = new Schema({
    uuid: {
        type: String,
        maxlength: 150,
        minlength: 1,
    },
    userName: {
        type: String,
        maxlength: 40,
        minlength: 1,
    },
    firstName: {
        type: String,
        maxlength: 40,
        minlength: 1,
    },
    lastName: {
        type: String,
        maxlength: 50,
        minlength: 1,
    },
    age: {
        type: Number,
        max: 2,
        min: 1,
    },
    birthDate: {
        type: Date,
    },
    gender: {
        type: String,
        maxlength: 10,
        minlength: 1,
    },
    email: {
        type: String,
        maxlength: 50,
        minlength: 1,
    },
    initialTime: {
        type: Date,
    },
    status: {
        type: Boolean,
    },
    mobileNumber: {
        type: String,
        maxlength: 20,
        minlength: 1,
    },
    state: {
        type: String,
        maxlength: 30,
        minlength: 1,
    },
    city: {
        type: String,
        maxlength: 30,
        minlength: 1,
    },
    avatar: {
        type: String,
        maxlength: 150,
        minlength: 1,
    },
    account: {
        type: Number,
        max: 2,
        min: 1,
    },
    // Falta la importación del "date", "timestamp" o como se llame...
}); 

module.exports= {
    model: mongoose.model("userDetail", schema),
    schema,
}