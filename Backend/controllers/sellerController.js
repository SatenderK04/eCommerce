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
  const { seller_id } = req.query; // Extract seller_id from query params (e.g., ?seller_id=123)

  if (!seller_id) {
    return res.status(400).json({ message: "Seller ID is required!" });
  }

  const query = `SELECT * FROM products WHERE seller_id = ?`;

  try {
    db.query(query, [seller_id], (err, result) => {
      if (err) {
        console.error("Error fetching products:", err);
        return res.status(500).json({ message: "Product fetch failed!" });
      }

      res
        .status(200)
        .json({ message: "Products fetched successfully", products: result });
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    return res
      .status(500)
      .json({ message: "Something went wrong (Product fetch)" });
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
const editProduct = (req, res) => {
  const { id } = req.params;
  const { name, description, price, stock, category_id } = req.body;

  if (!name || !price || !stock) {
    return res
      .status(400)
      .json({ message: "Name, price, and stock are required fields!" });
  }

  const query = `
    UPDATE products 
    SET name = ?, description = ?, price = ?, stock = ?, category_id = ?
    WHERE id = ?
  `;

  try {
    db.query(
      query,
      [name, description, price, stock, category_id, id],
      (err, result) => {
        if (err) {
          console.error("Error updating product:", err);
          return res.status(500).json({ message: "Error updating product" });
        }

        if (result.affectedRows === 0) {
          return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json({ message: "Product updated successfully" });
      }
    );
  } catch (error) {
    console.error("Error updating product:", error);
    res.status(500).json({ message: "Server Error (updating the product)" });
  }
};

export { addProduct, getProducts, deleteProduct, editProduct };
