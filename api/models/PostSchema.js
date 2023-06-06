import mongoose from "mongoose";

// userSchema

const PostSchema = mongoose.Schema(
	{
		user_id: {
			type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
			required: true,
		},
        image_url: {
            type: String,
            required: true,
        },
        caption: {
            type: String,
        },
        {
       likes: {
        type:Number
     }
	},
	{
		timestamps: true,
	}
);
export default mongoose.model("Post", PostSchema);
