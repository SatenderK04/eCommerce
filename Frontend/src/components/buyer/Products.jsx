import React, { useState } from "react";
import "../../css/buyer/Products.css";
import ProductPost from "./ProductPost";
import ProductDetails from "./ProductDetails";

const Products = ({ products, showDetails, setShowDetails }) => {
  const [selectedProduct, setSelectedProduct] = useState({});
  return (
    <div className="products-container">
      {showDetails && (
        <ProductDetails
          setShowDetails={setShowDetails}
          selectedProduct={selectedProduct}
        />
      )}
      <h2>Products for You</h2>
      <ProductPost
        products={products}
        setShowDetails={setShowDetails}
        setSelectedProduct={setSelectedProduct}
      />
      <h2>Just Arrived – Be the First to Own!</h2>
      <ProductPost products={products} />
      <h2>Festive Specials – Celebrate in Style</h2>
      <ProductPost products={products} />
    </div>
  );
};

export default Products;
