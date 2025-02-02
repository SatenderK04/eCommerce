import mysql from "mysql2";

const connectDB = () => {
  const db = mysql.createPool({
    host: "localhost", // default port 3306
    user: "root",
    password: "Hello@2004",
    database: "eCommerce",
    connectionLimit: 10,
  });

  db.getConnection((err, connection) => {
    if (err) {
      console.error("Error connecting to DATABASE ", err);
    } else {
      console.log("Connected to DATABASE");
      connection.release();
    }
  });
};

export default connectDB;
