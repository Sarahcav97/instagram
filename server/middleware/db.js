import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const db = async () => {
	try {
		const mongo = process.env.MONGODB_URI;
		const database = await mongoose.connect(mongo);
		console.log('database is connected');
		return database;
	} catch (error) {
		return console.error(error);
	}
};
export default db;
