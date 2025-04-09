import express from 'express';
import userController from '../controllers/UserController.js';

const UserRouter = express.Router();

UserRouter.route('/user')
  .post((req, res) => userController.createUser(req, res))
  .get((req, res) => {}); // aqui você pode implementar depois

UserRouter.route('/user/:id')
  .get((req, res) => userController.getUserById(req, res))
  .delete((req, res) => userController.deleteUser(req, res))
  .put((req, res) => userController.updateUser(req, res));

export default UserRouter;

