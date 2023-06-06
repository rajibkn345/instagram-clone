import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoDBConnection from "./config/db.js";
import errorHandler from "./middleware/errorHandler.js";
import userRouter from "./routes/userRoute.js";
import colors from "colors";
// environment variables

dotenv.config();
const PORT = process.env.PORT || 5050;
const app = express();

/**
 * set middleware configuration
 */
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// routes

app.use("/api/v1/user", userRouter);

// error handlers

app.use(errorHandler);
/**
 * server listening
 */

app.listen(PORT, () => {
	mongoDBConnection();
	console.log(`server listening on port ${PORT}`.bgGreen.bold);
});
