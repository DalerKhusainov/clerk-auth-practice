import mongoose from "mongoose";

let initialized = false;

export async function connect() {
    mongoose.set("strictQuery", true);

    if (initialized) {
        console.log("MongoDB already connected!")
        return
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: process.env.MONGODB_PROJECT_NAME,
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("MongoDB connected")
        initialized = true
    } catch (error) {
        console.error("MongoDB connection error: ", error)
    }
}