import { db } from "../config/initDB.js";

const addProduct = (req, res) => {
  const { name, description, price, stock, category_id, seller_id } = req.body;
  if (!name || !price || !stock) {
    return res.status(401).json({ message: "All fields are required !" });
  }
  try {
    const query = `INSERT INTO products (name, description, price, stock, category_id, seller_id) VALUES (?,?,?,?,?,?)`;
    db.query(
      query,
      [name, description, price, stock, category_id, seller_id],
      (err, result) => {
        if (err) {
          return res.status(401).json({ message: "Error Adding product" });
        }
        const product = result;
        res.status(200).json({ message: "Product Added", product });
      }
    );
  } catch (err) {
    console.log("Product not added !!", err);
    res.status(500).json("Product Server Error !", err);
  }
};

/// GET ALL THE PRODUCTS

const getProducts = (req, res) => {
  const query = `SELECT * FROM products WHERE seller_id = ?`;
  try {
    db.query(query, [33], (err, result) => {
      if (err) {
        return res.status(401).josn({ message: "Product fetch failed !" });
      }
      const products = result;
      res
        .status(200)
        .json({ message: "Products fetched succesffully", products });
    });
  } catch (error) {
    console.log("Error fetching Products", error);
    return res
      .status(500)
      .json({ message: "Something went Wrong (Product fetch)" });
  }
};

const deleteProduct = (req, res) => {
  const { id } = req.params;
  const query = `DELETE FROM products WHERE id = ?`;
  try {
    db.query(query, [id], (err, result) => {
      if (err) {
        console.log("Error occured deleting product", err);
        return res.status(401).json({ message: "Erro deleting product" });
      }

      const deleteResponse = result;
      res.status(200).json({ message: "product deleted", deleteResponse });
    });
  } catch (err) {
    console.log("Error Deleting !!");
    return res
      .status(500)
      .json({ message: "Server Error (deleting the product)" });
  }
};

export { addProduct, getProducts, deleteProduct };
