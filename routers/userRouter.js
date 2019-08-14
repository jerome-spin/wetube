import express from 'express';
import routes from '../routes';
import {
  userDetail,
  getEditProfile,
  getChangePassword,
  postEditProfile,
  postChangepassword,
} from '../controllers/userController';
import { onlyPrivate, uploadAvatar } from '../middlewares';

const userRouter = express.Router();

userRouter.get(routes.editProfile, onlyPrivate, getEditProfile);
userRouter.post(routes.editProfile, onlyPrivate, uploadAvatar, postEditProfile);

userRouter.get(routes.changePassword, onlyPrivate, getChangePassword);
userRouter.post(routes.changePassword, onlyPrivate, postChangepassword);

userRouter.get(routes.userDetail(), userDetail);

export default userRouter;
