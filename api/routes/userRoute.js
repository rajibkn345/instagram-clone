import express from "express";
import {
	createUser,
	getAllUsers,
	getSingleUser,
    deleteUser,
    updateUser,
} from "../controller/UserController.js";
import { profile_pic } from "../utility/multer.js";
const userRouter = express.Router();
//routing
userRouter.route("/").get(getAllUsers);
userRouter.route("/create").post(profile_pic,createUser);
userRouter
	.route("/:id")
	.get(getSingleUser)
	.delete(deleteUser)
	.patch(updateUser);


export default userRouter;
