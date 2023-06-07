import express from 'express';
import { me, userLoggout, userLogin } from '../controller/authController.js';
import { tokenVerify } from '../middleware/tokenVerify.js';
const authRouter = express.Router();

authRouter.route("/login").post(userLogin);
authRouter.route("/me").post(tokenVerify,me);
authRouter.route("/logout").post(userLoggout);

export default authRouter;