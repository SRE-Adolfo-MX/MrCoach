const mongoose = require("mongoose"); 
const Schema = mongoose.Schema;

const schema= new Schema({
   
    idUser: {
        type: String,
        maxlength:10,
        minlength: 1,
    },
    
    idCoach: {
        type: String,
        maxlength:10,
        minlength: 1,
        
    },
    
    healthGoal: {
        type:String,
        maxlength:20,
        minlength: 1,
        
    },
    experience: {
         type:Boolean,

        
    },
    timeExperience: {
        type:String,
        maxlength:20,
        minlength: 1,
        
    },
    timeInicial: {
        type:String,
        maxlength:20,
        minlength: 1,
        
    },
    payment: {
        type:String,
        maxlength:20,
        minlength: 1,
        
    },
    paymentStatus: {
        type:Boolean,
        
    },
    metricSystem: {
        type:String,
        maxlength:30,
        minlength: 1,
        
    },
    comments: {
        type:String,
        maxlength:150,
        minlength: 1,
        
    },
    scoreCoach: {
        type:Number,
        maxlength:2,
        
        
    },
    height: {
        type:Number, 
        
    },
    weight: {
       type:Number,
        
    },
    photoBody1: {
        type:String,
        maxlength:150,
        minlength: 1,
        
    },
    photoBody2: {
        type:String,
        maxlength:150,
        minlength: 1,
        
    },
    photobody3: {
        type:String,
        maxlength:150,
        minlength: 1,
        
    },
  
    
}); 

module.exports= {
    model: mongoose.model("studentDetail", schema),
    schema,
}