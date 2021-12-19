const userDetail = require("../../models/UserDetail").model;
const User = require("../../models/UserDetail");
const encrypt = require("../../lib/encrypt");
const MUUID = require("uuid-mongodb");

const get = async () => {
    const allUsersDetail = await userDetail.find({}).exec();
    return allUsersDetail;
};

const create = async (userData) => {
    const {userName, lastName, password, age, birthDay, gender, email, mobileNumber, state, city, avatar} = userData;
    const id = MUUID.v1();
    const today = new Date();
    const account = 1;
    const status = 1;
    const hash = await encrypt.hashPassword(password);

    const user = new User.model({
        id,
        userName,
        lastName,
        password: hash,
        age,
        birthDay,
        gender,
        email,
        initialTime: today,
        status,
        mobileNumber,
        state,
        city,
        avatar,
        account
    });
    return await user.save();
};

module.exports = {
    get,
    create,
  };