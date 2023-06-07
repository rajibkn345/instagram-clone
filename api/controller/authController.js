import bcrypt from "bcrypt";
import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import User from "../models/UserSchema.js";
/**
 * user login method
 * @POST /Login
 * @access public
 */

export const userLogin = asyncHandler(async (req, res) => {
	const { email, password } = req.body;
	if (!email || !password)
		return res.status(400).json({
			success: false,
			message: "Invalid email or password",
		});

	// check user
	const checkUser = await User.findOne({ email });
	if (!checkUser) return res.status(404).json({ message: "User not found" });

	// password match
	const passwordMatch = await bcrypt.compare(password, checkUser.password);
	if (!passwordMatch)
		return res.status(404).json({ message: "Password does not match" });

	// access token
	// access Token
	const accessToken = jwt.sign(
		{
			email: checkUser.email,
		},
		process.env.ACCESS_TOKEN_SECRET_KEY,
		{
			expiresIn: process.env.ACCESS_TOKEN_EXPIRY_SECRET_KEY,
		}
	);
	res.cookie("accessToken", accessToken, {
		httpOnly: false,
		secure: false,
		maxAge: 7 * 24 * 60 * 60 * 1000,
	});
	res.status(200).json({
		token: accessToken,
		user: checkUser,
	});
});

/**
 * @desc me controller
 * @rotue Post /Me
 * @access Private
 */

export const me = (req, res) => {
	if (!req.me)
		return res.status(404).json({
			message: "user not found",
		});
	res.status(200).json({
		me: req.me,
	});
};

/**
 * @desc loggout controller
 * @rotue Post /Me
 * @access Private
 */

export const userLoggout = asyncHandler(async (req, res) => {
	const cookies = req.cookies;
	if (!cookies?.accessToken)
		return res.status(400).json({
			message: "Already loggout",
		});
	res
		.clearCookie("accessToken", {
			httpOnly: false,
			secure: false,
		})
		.json({
			message: "loggout successfully",
		});
});
