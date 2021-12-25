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
            dateCreation,
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
            comments
            } = routineData;

    const uuid = MUUID.v1();
    const today = new Date();
    const status = true;

    const routine = new Routines.model({
        uuid,
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
 
 
const deleteByStatus = async (id) => {
        const status = false;

    return await Routines.model.findByIdAndUpdate(id, {status}).exec();
  
  };
  

module.exports = {
    get,
    create,
    getById,
    update,
    deleteByStatus,
};