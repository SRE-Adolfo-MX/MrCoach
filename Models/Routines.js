const { json } = require("express");
const mongoose = require("mongoose"); 
const Schema = mongoose.Schema;

const schema= new Schema({
    title: {
        type:String,
         maxlength:40,
        minlength: 1,
    },
    idUser: {
        type:String,
         maxlength:50,
        minlength: 1,
    },
    idCoach: {
        type:String,
         maxlength:50,
        minlength: 1,
    },
    dateCreation: {
         type:Date,
    },
    initialDate: {
        type:Date,
    },
    finishDate: {
        type:Date,
    },
    typeRoutine: {
      type:String,
         maxlength:10,
        minlength: 1,
    },
    daysTraining: {
        type:JSON,
    },
    daysTrained: {
        type:JSON,        
    },
    exercise: {
        type:JSON,
    },
    cardio: {
        type:JSON,

    },
    comments: {
        type:String,
         maxlength:150,

    },
    status: {
        type:Boolean,
    },
}); 

module.exports= {
    model: mongoose.model("routine", schema),
    schema,
}