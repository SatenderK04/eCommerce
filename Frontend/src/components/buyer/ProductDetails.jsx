import React from "react";
import "../../css/buyer/ProductDetails.css";
import { GiCrossedBones } from "react-icons/gi";
import { FaCartArrowDown } from "react-icons/fa";
import { GiElectric } from "react-icons/gi";
import img from "../../assets/images/makeup.jpg";

const ProductDetails = ({ setShowDetails, selectedProduct }) => {
  //   const [showDetails, setShowDetails] = useState(false);

  return (
    <div className="container">
      <p
        className="close"
        onClick={() => {
          setShowDetails(false);
        }}
      >
        <GiCrossedBones /> {/*❌*/}
      </p>
      <div className="left-container">
        <div className="images">
          <img src={img} alt="item-image" />
        </div>
        <div className="buttons-container">
          <div className="btn">
            <button className="add-to-cart">
              <FaCartArrowDown className="icons" /> Add to Cart
            </button>
            <button className="buy-now">
              <GiElectric className="icons" /> Buy Now
            </button>
          </div>
        </div>
      </div>
      <div className="right-container">
        <p className="title">{selectedProduct.name}</p>
        {/* <p className="rating">{}</p> */}
        <p className="description">{selectedProduct.description}</p>
        <p className="price">{selectedProduct.price}</p>
        <p className="highlights">{selectedProduct.highlights}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
