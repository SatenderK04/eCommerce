import { db } from "../config/initDB.js";

const getAllProducts = async (req, res) => {
  const query = `SELECT * FROM products`;
  try {
    db.query(query, (err, result) => {
      if (err) {
        console.log("error occured while products fetch (buyer side)");
        return res
          .status(401)
          .json({ message: "error occured while fetch products" });
      }

      const products = result;

      res.status(200).json({
        message: "Products fetched succefully",
        products,
        // : {
        //   name: products.name,
        //   description: products.description,
        //   price: products.price,
        //   stock: products.stock,
        //   category_id: products.category_id,
        //   seller_id: products.seller_id,
        // },
      });
      console.log(products);
    });
  } catch (error) {
    console.log("error occured ", error);
    res.status(500).json("Product Server Error !", err);
  }
};

export { getAllProducts };
