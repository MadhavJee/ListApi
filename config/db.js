
import mongoose from "mongoose";

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI);
//     console.log("✅ MongoDB connected");
//   } catch (error) {
//     console.error("❌ MongoDB connection failed:", error.message);
//     process.exit(1);
//   }
// };

const connectDB = async () => {
  console.log("MONGO_URI VALUE:", process.env.MONGO_URI);

  if (!process.env.MONGO_URI) {
    throw new Error("❌ MONGO_URI IS NOT SET IN RENDER");
  }

  await mongoose.connect(process.env.MONGO_URI);
  console.log("✅ MongoDB connected");
};

export default connectDB;
