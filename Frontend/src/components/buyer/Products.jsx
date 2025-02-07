import React from "react";
import "../../css/buyer/Products.css";
import ProductPost from "./ProductPost";
import ProductDetails from "./ProductDetails";

const Products = ({ products, showDetails, setShowDetails }) => {
  return (
    <div className="products-container">
      {showDetails && <ProductDetails setShowDetails={setShowDetails} />}
      <h2>Products for You</h2>
      <ProductPost
        products={products}
        // showDetails={showDetails}
        setShowDetails={setShowDetails}
      />
      <h2>Just Arrived – Be the First to Own!</h2>
      <ProductPost products={products} />
      <h2>Festive Specials – Celebrate in Style</h2>
      <ProductPost products={products} />
    </div>
  );
};

export default Products;
