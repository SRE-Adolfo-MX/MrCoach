const mongoose = require("mongoose"); 
const Schema = mongoose.Schema;

const schema= new Schema({
    uuid:{
        type: String,
        maxlength:10,
        minlength: 1,
     
    },
    idChat: {
        type:Number,
        maxlength:4,
        
    },
    
    idUserCreator: {
        type:String,
        maxlength:10,
        minlength: 1,
        
    },
    
    idUserReceptor: {
        type:String,
        maxlength:10,
        minlength: 1,
        
    },
    dateChat: {
        timestamp: true

        
    },
    message: {
        type:String,
        maxlength:250,
        minlength: 1,
        
    },
    
}); 

module.exports= {
    model: mongoose.model("chat", schema),
    schema,
}