import * as express from 'express';
import * as AuthController from '../controllers/auth';
import { validate } from '../middlewares/auth';
import { refreshToken } from '../helpers/token.helper';

const router = express.Router();

router.post('/login', AuthController.login);
router.get('/refreshToken', validate, refreshToken);
router.get('/refresh', AuthController.refresh);

export default router;