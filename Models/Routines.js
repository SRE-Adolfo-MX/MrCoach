const mongoose = require("mongoose"); 
const Schema = mongoose.Schema;

const schema= new Schema({
    uuid:{
        type: String,
        maxlength:10,
        minlength: 1,

    },
    idRoutine: {
        type:String,
         maxlength:10,
        minlength: 1,
    },
    title: {
        type:String,
         maxlength:40,
        minlength: 1,
    },
    idUser: {
        type:String,
         maxlength:10,
        minlength: 1,
    },
    idCoach: {
        type:String,
         maxlength:10,
        minlength: 1,
    },
    dateCreation: {
         timestamp: true

    },
    initialDate: {
       timestamp: true
    },
    finishDate: {
        timestamp: true
    },
    typeRoutine: {
      type:String,
         maxlength:10,
        minlength: 1,
    },
    daysTraining: {
        type:String,
         maxlength:250,
    },
    daysTrained: {
        type:String,
         maxlength:250,
        
    },
    iconType: {
        type:String,
         maxlength:250,
        minlength: 1,
    },
    laps: {
        type:Number,
        maxlength:2,

    },
    repetitions: {
       type:Number,
        maxlength:2,
    },
    rest: {
        type:Number,
         maxlength:2,

    },
    link: {
        type:Number,
          maxlength:250,
        minlength: 1,

    },
    cardio: {
        type:String,
         maxlength:250,

    },
    comments: {
        type:String,
         maxlength:150,

    },
    
}); 

module.exports= {
    model: mongoose.model("routine", schema),
    schema,
}