import {Router} from 'express';
import { getUsers, getUser } from '../controllers/userController.js';
import authorize from '../middleware/authMiddleware.js';

const userRouter = Router();

userRouter.get('/', getUsers);
userRouter.get('/:id', authorize, getUser);
userRouter.post('/', (req, res) => res.send({ title: 'create user' }));

userRouter.put('/:id', (req, res) => res.send({ title: 'update user by id' }));

userRouter.delete('/:id', (req, res) => res.send({ title: 'delete user by id' }));

export default userRouter;