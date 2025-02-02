import express from "express";
import cors from "cors";

import { connectDB } from "./config/initDB.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();
app.use(express.json());
const port = 3000;
app.use(
  cors({
    origin: "http://localhost:5173",
    method: ["GET", "PUT", "DELETE", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

//  DATABASE CONNECTION
connectDB();

// ROUTES
app.use("/users", userRoutes);

app.listen(port, () => {
  console.log(`server is active on ${port}`);
});
