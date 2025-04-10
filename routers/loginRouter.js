import express from 'express';
import { loginUser } from '../controllers/loginController.js';

const UserRouter = express.Router();

UserRouter.route('/login')
  .post((req, res) => loginUser(req, res))

export default UserRouter;

