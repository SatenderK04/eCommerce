import express from "express";
import cors from "cors";
import connectDB from "../Backend/config/initDB.js";

const app = express();
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

app.post("/signup", (req, res) => {
  res.send("Singup successful(backend)");
});
// app.get("/", (req, res) => {
//   res.send("hello");
// });
app.listen(port, () => {
  console.log(`server is active on ${port}`);
});
