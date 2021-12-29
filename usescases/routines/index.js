const routinesDetail = require("../../models/Routines").model;
const Routines = require("../../models/Routines");
const encrypt = require("../../lib/encrypt");
const MUUID = require("uuid-mongodb");

const get = async () => {
    const allRoutines = await routinesDetail.find({}).exec();
    return allRoutines;
};

const getById = async (id) => {

    return await Routines.model.findById(
      id
    ).exec();
  };
  
  
const create = async (routineData) => {
    const {
            title,
            idUser,
            idCoach,
            typeRoutine,
            daysTrained,
            exercise,
            iconType,
            laps,
            repetitions,
            rest,
            link,
            cardio,
            comments
            } = routineData;
    
    const uuid = MUUID.v1();
    const today = new Date();
    const status = true;
    const daysTraining = [];

    function sumarDias(day, days){
      days = parseInt(days);
      var i = 1;
      day = new Date();
      day.setDate(day.getDate() + 1);
      initialDate = day;

      while (i < days) {
        day = new Date();
        day.setDate(day.getDate() + i);
        daysTraining.push(day)
        i = i + 1;
      }
      day = new Date();
      days = days - 1;
      day.setDate(day.getDate() + days);
      finishDate = day;
    }

    if (typeRoutine === "15 Days"){
      const days = 15;
      sumarDias(today, days);
    } else {
      const days = 30;
      sumarDias(today, days);
    }

    
    const routine = new Routines.model({
        title,
        idUser,
        idCoach,
        dateCreation: today,
        initialDate,
        finishDate,
        typeRoutine,
        daysTraining,
        daysTrained,
        exercise,
        iconType,
        laps,
        repetitions,
        rest,
        link,
        cardio,
        comments,
        status
    });
    return await routine.save();
};

const update = async (id, routineData) => {

    const {title,
        idUser,
        idCoach,
        initialDate,
        finishDate,
        typeRoutine,
        daysTraining,
        daysTrained,
        exercise,
        cardio,
        comments } = routineData;
  
    return await Routines.model.findByIdAndUpdate(id, {title,
        idUser,
        idCoach,
        initialDate,
        finishDate,
        typeRoutine,
        daysTraining,
        daysTrained,
        exercise,
        cardio,
        comments}).exec();
  
  };
 
 
const updateByStatus = async (id) => {
        const status = false;

    return await Routines.model.findByIdAndUpdate(id, {status}).exec();
  
  };
  

module.exports = {
    get,
    create,
    getById,
    update,
    updateByStatus,
};