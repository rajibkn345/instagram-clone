import mongoose from "mongoose";

// userSchema

const CommentSchema = mongoose.Schema(
	{
		user_id: {
			type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
			required: true,
		},
        post_id: {
           type: mongoose.Schema.Types.ObjectId,
            ref: 'Post',
            required:true
        },
        text: {
            type: String,
        },
        {
       
	},
	{
		timestamps: true,
	}
);
export default mongoose.model("Comment", CommentSchema);
