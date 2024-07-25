import mongoose, { Mongoose } from 'mongoose';
export const DB_NAME = 'bluedrycleaning';
const connectDB =  async () => {
    try {
            const connectiondb = await mongoose.connect('mongodb+srv://akashsocialcults:cGqu1MKYyIKmnYJH@bluedrycleaner.7qbwbki.mongodb.net/', {
            dbName: DB_NAME,
        });
        console.log(`DB connection successful and it seems like ${connectiondb}`);
    } catch (error) {
        console.log(error);
    
    }
};

export default connectDB;