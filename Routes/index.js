const routineRouter = require("./routineRouter");
const userRouter = require("./userRouter");
const alumnRouter = require("./alumnRouter");
const coachRouter = require("./coachRouter");

const apiRouter = (app) => {
    app.use("/routines", routineRouter);
    app.use("/user", userRouter);
    app.use("/student", alumnRouter);
    app.use("/coach", coachRouter);
};


module.exports = apiRouter;



