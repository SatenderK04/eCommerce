import React from "react";
import "../../css/buyer/ProductDetails.css";

const ProductDetails = ({ setShowDetails }) => {
  //   const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="container">
      <p
        className="close"
        onClick={() => {
          setShowDetails(false);
        }}
      >
        x
      </p>
      <div className="left-container">
        <div className="images"></div>
        <div className="actions">
          <button>Add to Cart</button>
          <button>Buy Now</button>
        </div>
      </div>
      <div className="right-container">
        <p className="title"></p>
        <p className="rating"></p>
        <p className="price"></p>
      </div>
    </div>
  );
};

export default ProductDetails;
