import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const db = async () => {
	const mongo = process.env.MONGODB_URI;
	const database = await mongoose.connect(mongo);
	console.log(mongo);
};
export default db;
