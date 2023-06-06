import mongoose from "mongoose";

// userSchema

const UserSchema = mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
			trim: true,
		},

        email: {
            type: String,
            required: true,
            trim: true
        },

        password: {
            type: String,
            required: true
        },

        
        profile_picture: {
            type: String
        }
	},
	{
		timestamps: true,
	}
);
export default mongoose.model("User", UserSchema);
