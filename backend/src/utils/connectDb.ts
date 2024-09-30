/**
 * @file This file contains the function to connect to the MongoDB database based on the configuration provided
 *
 * Purpose:
 * - Connect to the database
 */
import mongoose from "mongoose";
import { config } from '../config';

export const connectDb = async () => {
	try {
		const CONNECTION_STRING = config.db.connection_string
		await mongoose.connect(CONNECTION_STRING, {
			connectTimeoutMS: 20000,
			socketTimeoutMS: 45000,
		  });

	} catch (error) {
		console.log(error)
	}
}