const jwt = require("jsonwebtoken");
import { environmentConfiguration } from '../enviornment/environment.local';

const jwtKey = environmentConfiguration.secret_key;

export const validate = async function (req, res, next) {
    try {
        const headers = req.headers.token;
        const token = headers.split(' ')[1];
        let decoded = jwt.verify(token, jwtKey);
        next();

    } catch (error) {
        res.json({status:401,message:error.message});
    }

}

