const mongoose = require("mongoose"); 
const Schema = mongoose.Schema;

const schema= new Schema({
  
    idUser: {
        type: String,
        maxlength:10,
        minlength: 1,
    },
    
    timeExperience: {
        type:Number,
        maxlength:2
        
    },
    
    discipline: {
        type:String,
        maxlength:5,
        minlength: 1,
        
    },
    studyCertificate: {
         type:String,
        maxlength:150,
        minlength: 1,

        
    },
    paymentService: {
        type:Number,
        maxlength:20,
        
    },
    initialTimeCouch: {
      timestamps: { currentTime: () => Math.floor(Date.now() / 1000) }
        
    },
    comments: {
        type:String,
        maxlength:150,
        minlength: 1,
        
    },
    scoreStudent: {
        type:Number,
        maxlength:2,
        
    },
    video1: {
        type:String,
        maxlength:150,
        minlength: 1,
        
    },
    video2: {
        type:String,
        maxlength:150,
        minlength: 1,
        
    },
    
}); 

module.exports= {
    model: mongoose.model("coachDetail", schema),
    schema,
}