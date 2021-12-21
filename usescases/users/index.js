const userDetail = require("../../models/UserDetail").model;
const User = require("../../models/UserDetail");
const encrypt = require("../../lib/encrypt");
const MUUID = require("uuid-mongodb");

const get = async () => {
    const allUsersDetail = await userDetail.find({}).exec();
    return allUsersDetail;
};

const getById = async (id) => {

    return await User.model.findById(
      id
    ).exec();
  };
  
  
const create = async (userData) => {
    const {userName, lastName, password, age, birthDay, gender, email, mobileNumber, state, city, avatar} = userData;
    const uuid = MUUID.v1();
    const today = new Date();
    const account = 1;
    const status = 1;
    const hash = await encrypt.hashPassword(password);

    const user = new User.model({
        uuid,
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

const getByUsername = async (username) => {
    return await User.model.findOne({ username }).exec();
};

const authenticate = async (user, password) => {
    const hash = user.password;
  
    return await encrypt.verifyPassword(password, hash);
  };
  
const updateUser = async (id, userData) => {
  
    const {userName, 
           lastName, 
           password, 
           age, 
           birthDay, 
           gender, 
           email,
           mobileNumber, 
           state, 
           city, 
           avatar}= userData;
  
    const hash = await encrypt.hashPassword(password);
  
    return await User.model.findByIdAndUpdate(id, {userName, 
        lastName, 
        password: hash, 
        age, 
        birthDay, 
        gender, 
        email,
        mobileNumber, 
        state, 
        city, 
        avatar}).exec();  
};

const disableUser = async (id) => {
  
      const status=false
      //const hash = await encrypt.hashPassword(password);
  
    return await User.model.findByIdAndUpdate(id, {status}).exec();  
};

module.exports = {
    get,
    create,
    getById,
    updateUser,
    disableUser,
    getByUsername,
    authenticate,
};