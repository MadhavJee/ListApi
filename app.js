import express from "express";
//import productroutes from "./routes/productroutes";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

const app = express();
dotenv.config();
connectDB();

//app.use("/api/posts", postRouter);

app.use(express.json());

// BASE ROUTE
app.get("/", (req, res) => {
  res.send("List API is running");
});

// USER ROUTES
//app.use("/api/users", userRouter);

export default app;
