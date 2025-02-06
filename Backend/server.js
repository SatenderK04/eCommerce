import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { connectDB } from "./config/initDB.js";
import userRoutes from "./routes/userRoutes.js";
import sellerRoutes from "./routes/sellerRoutes.js";

const app = express();

app.use(cookieParser());
app.use(express.json());
const port = 3000;
app.use(
  cors({
    origin: "http://localhost:5173",
    method: ["GET", "PUT", "DELETE", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true, // necessar to send cookies
  })
);

//  DATABASE CONNECTION
connectDB();

// ROUTES
app.use("/users", userRoutes);
app.use("/seller", sellerRoutes);

app.listen(port, () => {
  console.log(`server is active on ${port}`);
});
