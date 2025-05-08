import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


// Define MONGODB from environment variables
const MONGODB = process.env.MONGODB;

import userRouter from "./routes/userRoutes.js";
import authRouter from "./routes/authRouter.js";
import subscriptionRouter from "./routes/subscriptionRoute.js";
import errorMiddleware from "./middleware/error.middleware.js";

const PORT = process.env.PORT || 3000;

app.use("/api/v1/users", userRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/subscriptions", subscriptionRouter);
app.use(errorMiddleware);

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

mongoose
  .connect(MONGODB)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB Connection Error:", err.message);
    process.exit(1);
  });
