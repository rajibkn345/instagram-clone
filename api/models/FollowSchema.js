import mongoose from "mongoose";

// userSchema

const FollowSchema = mongoose.Schema({
	follower_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
	following_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
		required: true,
	},
});
export default mongoose.model("Follow", FollowSchema);
