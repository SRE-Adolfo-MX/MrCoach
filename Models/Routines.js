const { json } = require("express");
const mongoose = require("mongoose"); 
const Schema = mongoose.Schema;

const schema= new Schema({
    uuid:{
        type: String,
        maxlength:150,
        minlength: 1,

    },
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
       type:String,
       maxlength: 250,
    },
    finishDate: {
        type:String,
        maxlength: 250,
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