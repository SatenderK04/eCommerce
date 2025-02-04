import jwt from "jsonwebtoken";

const jwt_secret =
  "d19a2f5c7197a5096ae5cc2af16683a3d690b532c338617efafaac9bbe3fdae6";

const authUser = (req, res, next) => {
  const token = req.cookies.jwt;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  try {
    const decoded = jwt.verify(token, jwt_secret);

    req.user = decoded;
    next(); // allow access to the next route/middleware
  } catch (err) {
    console.log("Error Occured", err);
    return res.status(500).json({ message: "Unauthorized: Invalid token" });
  }
};

export default authUser;
