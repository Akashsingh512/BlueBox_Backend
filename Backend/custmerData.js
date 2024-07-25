// data request using mongoose
import mongoose, { Mongoose } from 'mongoose';

// const userSchema = (new mongoose.Schema({
//     name: String,
//     number: String,
//     email: String,
//     city: String
// }));


// export default userSchema;
const createUserSchema = () => {
    // Define the user schema
    const userSchema = new mongoose.Schema({
        name: String,
        number: String,
        email: String,
        city: String
    });

    return userSchema;
};

export default createUserSchema;