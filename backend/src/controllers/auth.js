import { getToken, refreshToken, decryptPass } from '../helpers/token.helper';
import { fetchData,queryCheck } from '../modules/lib/products';

export const login = async function (req, res, next) {
    try {
        if (req.body) {
            const {username,password} = req.body;
            const data = {
                username: username
            }
            const clientLogin = await fetchData(data);           
            if (!clientLogin) {
                throw new Error('Error Occured')
            }
            const passwordCheck = await decryptPass(password,clientLogin.password);
            const token = getToken(data);
            data.token = token;
            return res.send({ status: "success", data: data })
        }
        return res.send({ status: "fail", data: 'Please send all the details' })
    }
    catch (e) {
        throw new Error(e);
    }
}

export const refresh = async function (req, res, next) {
    try {
        let token = await refreshToken();
        res.status(401).send({ refreshToken: token });
    } catch (error) {
        res.status(401).send(error.message);
    }
}