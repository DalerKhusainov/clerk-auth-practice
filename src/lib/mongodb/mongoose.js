import mongoose from "mongoose";

const initialized = false;

export async function connectDb() {
  mongoose.set("strictQuery", true);

  if (initialized) {
    console.log("MongoDB already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "clerk-auth-practice",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
    initialized = true;
  } catch (error) {
    console.error("MongoDB connection error: ", error);
  }
}
