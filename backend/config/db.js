
import mongoose from 'mongoose'
//import dotenv from 'dotenv';
//dotenv.config();
//require('dotenv').config({ path: 'MONGO_URI' });
const connectDB = async () => {
    try {
        const conn =  await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
        })

        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
    } catch (error) {
        console.error(`Error: ${error.message}`.red.underline.bold)
        process.exit(1)
    }
}

export default connectDB