const jsonwebtoken = require("jsonwebtoken");

const sign = async (payload) => {
    const secret = process.env.SECRET;
    return await jsonwebtoken.sign(payload, secret, {expiresIn: "60s"});
};

const verify = async (token) => {
    const secret = process.env.SECRET;

    try {
        return await jsonwebtoken.verify(token, secret);
    } catch (error) {
        console.log("Invalid Token")
    }
};

module.exports = {
    sign,
    verify,
};