const mongoose = require("mongoose"); 
const Schema = mongoose.Schema;

const schema= new Schema({
   
    idUser: {
        type:String,
         maxlength:10,
        minlength: 1,
    },
    dateNotifications: {
      timestamps: { currentTime: () => Math.floor(Date.now() / 1000) }
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