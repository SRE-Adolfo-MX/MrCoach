const CoachDetail = require("../../models/CoachDetail").model;
const Coach = require("../../models/CoachDetail");


const get = async () => {
    const allCoachesDetail = await CoachDetail.find({}).exec();
    return allCoachesDetail;
};


const create = async (coachData) => {
    const { 
        discipline,
        studyCertificate,
        paymentService,
        initialTimeCouch,
        comments,
        scoreStudent,
        video1,
        video2,
     } = coachData;
    const coach = new CoachDetail({ 
        discipline,
        studyCertificate,
        paymentService,
        initialTimeCouch,
        comments,
        scoreStudent,
        video1,
        video2,
    })
    const savedCoach = await coach.save();

    return savedCoach;
}


const updateCoach = async (id, coachData) => {
    return await CoachDetail.findByIdAndUpdate(id, coachData, { new: true })
}