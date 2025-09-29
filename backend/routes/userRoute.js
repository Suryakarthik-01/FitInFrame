import express from 'express'
import { loginUser, registerUser, adminUser} from '../cotrollers/userController.js'

const userRouter = express.Router();

userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)
userRouter.post('/admin', adminUser)

export default userRouter;