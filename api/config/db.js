import mongoose from "mongoose";
mongoose.set("debug", false);
mongoose.set("strictQuery", false);
const options = {
	strict: "throw",
	strictQuery: false,
};

// mongodb connection
const mongoDBConnection = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI);
		console.log(`MongoDB Connected`.bgYellow.bgBlue);
	} catch (error) {
		console.log(error.message.bgRed.black);
	}
};

export default mongoDBConnection;
