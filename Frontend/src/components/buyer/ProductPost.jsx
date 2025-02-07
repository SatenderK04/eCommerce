import React, { useState } from "react";
import "../../css/buyer/ProductPost.css";
import img1 from "../../assets/images/bag.jpg";

const ProductPost = ({ products, setShowDetails }) => {
  if (!Array.isArray(products)) {
    console.error("Expected 'products' to be an array but received:", products);
    return null;
  }
  // Truncate description to 30 characters
  const truncateText = (text, limit) => {
    return text.length > limit ? text.substring(0, limit) + "..." : text;
  };

  //   const handleShowDetails = () => {};

  return (
    <div className="post-container">
      {products.map((product) => (
        <div key={product.id} className="post">
          <div className="post-image">
            <img src={img1} alt={product.name} />
          </div>
          <h3 className="post-name">{product.name}</h3>
          <p className="post-description">
            {truncateText(product.description, 40)}
          </p>
          {/* <p>ratings</p> */}
          <p className="post-price">Rs. {product.price}</p>
          <button
            className="post-button"
            onClick={() => {
              setShowDetails(true);
            }}
          >
            View Details
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductPost;
