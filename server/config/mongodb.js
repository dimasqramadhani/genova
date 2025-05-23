import mongoose from "mongoose";

const connectDB = async () => {

    mongoose.connection.on('connected', () => {
        console.log("Database Terhubung")
    })


    await mongoose.connect(`${process.env.MONGODB_URI}/genova`)
}

export default connectDB