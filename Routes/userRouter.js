const express = require("express");
const router = express.Router()
const users = require("../usescases/users");

router.get("/", async (req, res, next) => {
    try {
        const allUsers = await users.get()
        res.json({
            ok: true,
            message: "Done!",
            payload: { allUsers },
        });
    } catch (err) {
        next(err)
    };
});

router.post ("/", 
async (request, response, next)=> {
  try { 
    const userData = request.body; 
    const userCreated = await users.create(userData);

    response.status(201).json({ 
      ok:true,
      message: "New user created", 
      payload: userCreated,
      
    });
  }catch (error){
    next(error);
  }
}); 


router.patch("/:id", async (req, res) => {
    const { id } = req.params;
    const { 
        account, 
        accountDetails, 
        name, 
        lastName, 
        age, 
        birthDay, 
        gender, 
        email,
        initialTime,
        status,
        mobileNumber,
        state,
        city,
        avatar,
    } = req.body;
    
    let checkUser = await users.getById(id)
    let newUser = {}

    if(name) newUser = {...newUser, name}
    if(lastName) newUser = {...newUser, lastName}
    if(age) newUser = {...newUser, age}
    if(birthDay) newUser = {...newUser, birthDay}
    if(gender) newUser = {...newUser, gender}
    if(email) newUser = {...newUser, email}
    if(initialTime) newUser = {...newUser, initialTime}
    if(status) newUser = {...newUser, status}
    if(mobileNumber) newUser = {...newUser, mobileNumber}
    if(state) newUser = {...newUser, state}
    if(city) newUser = {...newUser, city}
    if(avatar) newUser = {...newUser, avatar}

    if(checkUser.account === 1) { 

        if(account && account !== 1) {
            newUser = {...newUser, account}

            if(account === 2) {
                const coachCreated = await coach.create(accountDetails);     
                updatedUser = {...updatedUser, accountDetails: coachCreated}
            } else if (account === 3) {
                const studentCreated = await student.create(accountDetails);
                updatedUser = {...updatedUser, accountDetails: studentCreated};
            };
        };
    };

    let updatedUser = await users.updateUser(id, newUser)
    
    res.json({
        ok: true,
        message: `User updated successfully!`,
        payload: { updatedUser },
    });
});




module.exports = router;