import { db } from "../config/initDB.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const jwt_secret =
  "d19a2f5c7197a5096ae5cc2af16683a3d690b532c338617efafaac9bbe3fdae6";

//// SIGN UP USERS
const createUser = async (req, res) => {
  const { username, email, password, role } = req.body;
  if (!email || !password || !username) {
    return res.status(400).json({ message: "All fields are required" });
  }
  try {
    const hashPassword = await bcrypt.hash(password, 10);
    const query = `INSERT INTO users (name, email, password, role) VALUES (?,?,?,?)`;
    db.query(query, [username, email, hashPassword, role], (err, result) => {
      if (err) {
        console.error("Error creating user", err);
        return res.status(500).json({ message: "Error Signing up" });
      }

      // const user = result;
      // console.log(result);
      // Generate TOKEN
      const token = jwt.sign({ id: result.insertId, email, role }, jwt_secret, {
        expiresIn: "2h",
      });

      res.cookie("jwt", token, { httpOnly: true, secure: false }); // set secure to true in production ("false"  allows to send cookie through http also)
      const query = `SELECT * FROM users WHERE email = ?`;
      db.query(query, [email], async (err, result) => {
        if (err) {
          console.error("Error occurred:", err);
          return res.status(500).json({ message: "Internal Server Error" });
        }
        const user = result[0];
        // console.log(result);
        res.status(200).json({
          message: "User Created successfully",
          user: {
            id: user.id,
            email: user.email,
            role: user.role,
            username: user.name,
          },
        });
      });

      // res.status(201).json({
      //   message: "User created Successfully",
      //   user: {
      //     id: user.insertId,
      //   },
      // });
    });
  } catch (err) {
    console.log("Something went wrong", err);
  }
};

//// SIGN IN USERS
const logInUser = (req, res) => {
  const { email, password, role } = req.body;

  if (!email || !password || !role) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const query = `SELECT * FROM users WHERE email = ?`;
  db.query(query, [email], async (err, result) => {
    if (err) {
      console.error("Error occurred:", err);
      return res.status(500).json({ message: "Internal Server Error" });
    }
    if (result.length === 0) {
      return res.status(401).json({ message: "User not found" });
    }
    const user = result[0];

    if (user.role !== role) {
      return res.status(403).json({ message: "Access denied for this role !" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Generate JWT Token
    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      jwt_secret,
      { expiresIn: "2h" }
    );

    // Set token as HTTP-only cookie
    res.cookie("jwt", token, {
      httpOnly: true,
      secure: false, // Set to `true` in production (HTTPS only)
      sameSite: "Strict",
    });

    // Send response after successful login
    return res.status(200).json({
      message: "Login successful",
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
        username: user.name,
      },
    });
  });
};

// GET CURRENT USER
const getCurrentUser = (req, res) => {
  res.status(200).json(req.user);
  // console.log(req.user);
};

const logOutUser = (req, res) => {
  try {
    res.clearCookie("jwt", {
      httpOnly: true,
      secure: false,
    });
    res.status(201).json({ message: "User Logged Out" });
  } catch (err) {
    console.log(err);
    return res.status(401).json({ message: "Somethin went wrong", err });
  }
};
export { createUser, logInUser, getCurrentUser, logOutUser };
