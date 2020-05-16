const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
import { environmentConfiguration } from '../enviornment/environment.local';

const jwtKey = environmentConfiguration.secret_key;

export const getToken = (payload) => {
    return jwt.sign(payload, jwtKey, { expiresIn: 60 * 60 })
}

export const refreshToken = async function (req, res, next) {
    try {
        const headers = req.headers.token;
        const token = headers.split(' ')[1];
        let decoded = jwt.verify(token, jwtKey);
        console.log("decoded: ", decoded);
        const nowUnixSeconds = Math.round(Number(new Date()) / 1000)
        if (decoded.exp - nowUnixSeconds > 60) {
            return res.status(400).send({ message: 'Token not yet expired' })
        }
        let refreshToken = jwt.sign({ username: decoded.username }, jwtKey, { expiresIn: 60 * 60 })
        res.status(401).send({ refreshToken: refreshToken });
    } catch (error) {
        res.status(401).send(error.message);
    }

}

export const hashPassword = async (password) => {
    const hashPass = await bcrypt.hash(password, 10);
    return hashPass;
}

export const decryptPass = async (password,hash) => {
    const matchPass = bcrypt.compare(password, hash);
    return matchPass;
}