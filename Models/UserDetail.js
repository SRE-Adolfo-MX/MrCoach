const mongoose = require("mongoose"); 
const Schema = mongoose.Schema;

const schema= new Schema({
    uuid:{
        type: String,
        maxlength:10,
        minlength: 1,

    },
    id: {
        type:String,
         maxlength:10,
        minlength: 1,
    },
    name: {
         maxlength:40,
        minlength: 1,
    },
    lastName: {
        type:String,
         maxlength:50,
        minlength: 1,
    },
    age: {
        type:Number,
         maxlength:2,
        minlength: 1,
    },
    birthDay: {
         timestamp: true

    },
    gender: {
        type:String,
         maxlength:10,
        minlength: 1,
    },
    email: {
        type:String,
         maxlength:50,
        minlength: 1,
    },
    initialTime: {
      timestamp: true
    },
    status: {
        type:Boolean,
    },
    mobileNumber: {
        type:String,
         maxlength:20,
        minlength: 1,
    },
    state: {
        type:String,
         maxlength:30,
        minlength: 1,
    },
    city: {
        type:String,
         maxlength:30,
        minlength: 1,
    },
    avatar: {
        type:String,
         maxlength:150,
        minlength: 1,
    },
    account: {
        type:Number,
         maxlength:2,
        minlength: 1,
    },
    
}); 

module.exports= {
    model: mongoose.model("userDetail", schema),
    schema,
}