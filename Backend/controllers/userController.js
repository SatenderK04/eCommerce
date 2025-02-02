import { db } from "../config/initDB.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const jwt_secret =
  "d19a2f5c7197a5096ae5cc2af16683a3d690b532c338617efafaac9bbe3fdae6";

const createUser = async (req, res) => {
  const { username, email, password, role } = req.body;
  try {
    const hashPassword = await bcrypt.hash(password, 10);
    const query = `INSERT INTO ${role}s (name, email, password, role) VALUES (?,?,?,?)`;
    db.query(query, [username, email, hashPassword, role], (err, result) => {
      if (err) {
        console.error("Error creating user", err);
        return res.status(500).json({ message: "Error Signing up" });
      }

      // Generate TOKEN
      const token = jwt.sign({ userId: result.insertId, email }, jwt_secret, {
        expiresIn: "2h",
      });

      res.cookie("jwt", token, { httpOnly: true, secure: false }); // set secure to true in production ("false"  allows to send cookie through http also)
      res.status(201).json({
        message: "User created Successfully",
        userId: result.insertId,
      });
    });
  } catch (err) {
    console.log("Something went wrong", err);
  }
};

export { createUser };
