import asyncHandler from "express-async-handler";

/**
 * user login method
 * @POST /Login
 * @access public
 */

const userLogin = asyncHandler(async (req, res) => {
	const { email, password } = req.body;
	if (!email || !password)
		return res.status(400).json({
			success: false,
			message: "Invalid email or password",
		});

    // check user
    const checkUser = await User.findOne({email});
    if (!checkUser) return res.status(404).json({message: "User not found"});

    // password match 
});
