import bcrypt from "bcrypt";
import asyncHandler from "express-async-handler";
import User from "../models/UserSchema.js";
import { makeHash } from "../utility/hash.js";
/**
 * @desc get all users
 * @rotue GET /users
 * @access public
 */

export const getAllUsers = asyncHandler(async (req, res) => {
	const users = await User.find().select("-password").lean();
	if (!users.length) return res.status(404).json({ message: "user not found" });
	res.json(users);
});

/**
 * @desc create a new user
 * @rotue POST /user
 * @access public
 */

export const createUser = asyncHandler(async (req, res) => {
	const { username, email, password } = req.body;

	// check validate
	if (!username || !email || !password)
		return res.status(400).json({
			message: "All fields are required !",
		});

	// email exist

	const emailCheck = await User.findOne({ email });
	if (emailCheck)
		return res.status(400).json({
			message: "Email already exists",
		});

	// hash password


	const user = await User.create({
		username: username,
		email: email,
		password: makeHash(password)
	});

	if (user) {
		return res.status(200).json({ message: "user created successfully" });
	} else {
		return res.status(400).json({ message: "user create fail" });
	}
});

/**
 * @desc get a single user
 * @rotue get /user
 * @access public
 */

export const getSingleUser = asyncHandler(async (req, res) => {
	const { id } = req.params;
	const user = await User.findById(id).select("-password").lean();
	if (!user) return res.status(404).json({ message: "User not found" });
	return res.status(200).json(user);
});

/**
 * @desc Update user
 * @rotue PATCH /users/:id
 * @access public
 */

export const updateUser = asyncHandler(async (req, res) => {
	const { id } = req.params;
	const { username, email, password } = req.body;

	// check validit
	// check validate
	if (!username || !email || !password)
		return res.status(400).json({
			message: "All fields are required !",
		});

	const user = await User.findById(id);
	if (!user)
		return res.status(404).json({
			message: "user not found",
		});
	user.username = username;
	user.email = email;
	user.password = makeHash(password);;

	const updateUser = await User.findByIdAndUpdate(id, {
		username,
		email,
		password,
	});
	if (!updateUser) return res.status(404).json({ message: "user not found" });
	return res.status(200).json({ message: "user update successfully" });
});

/**
 * @desc delete user
 * @rotue Delete /user
 * @access public
 */

export const deleteUser = asyncHandler(async (req, res) => {
	const { id } = req.params;
	const user = await User.findByIdAndDelete(id);
	if (!user) return res.status(404).json({ message: "user not found" });
	return res.status(200).json({ message: "Delete user successfully" });
});
