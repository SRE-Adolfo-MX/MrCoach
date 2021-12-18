const mongoose = require("mongoose"); 
const Schema = mongoose.Schema;

const schema= new Schema({
    uuid:{
        type: String,
        required:true,
        maxlength:10,
        minlength: 1,

    },
    idUser: {
        type:String,
         maxlength:10,
        minlength: 1,
    },
    dateNotifications: {
        timestamp: true
    },
    comments: {
        type:String,
         maxlength:150,
        minlength: 1,
    },
    
}); 

module.exports= {
    model: mongoose.model("notifications", schema),
    schema,
}