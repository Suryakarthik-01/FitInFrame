import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on('connected', () => {
      console.log("DB connected");
    });

    mongoose.connection.on('error', (err) => {
      console.log("DB connection error:", err);
    });

    await mongoose.connect(process.env.MONGODB_URI);

  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  }
};

export default connectDB;
