import React from "react";
import "../../css/Products.css";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { FaStarHalfAlt } from "react-icons/fa"; // Importing half-star icon

const Products = () => {
  let Products = [
    { img: "watch.jpg", name: "Classic Women Watches" },
    { img: "shoes.jpg", name: "Stylish Shoes" },
    { img: "bag.jpg", name: "Trendy Handbag" },
    { img: "sandles.jpg", name: "Elegant Sandals" },
    { img: "specs.jpg", name: "Fashionable Specs" },
    { img: "shoes2.jpg", name: "Sporty Shoes" },
    { img: "watch2.jpg", name: "Luxury Watch" },
    { img: "bag2.jpg", name: "Designer Bag" },
    { img: "makeup.jpg", name: "Makeup Kit" },
  ];
  return (
    <>
      {/* <h2 className="main-heading">Products For You</h2> */}
      <div className="categories"></div>
      {/* <section className="main-content" id="shop">
        {Products.map((product, index) => (
          <div className="product-card" key={index}>
            <div className="img">
              <img
                src={`../../src/assets/images/${product.img}`}
                alt="product image"
                className="product-img"
              />
            </div>
            <div className="product-description">
              <h3>{product.name}</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
              <div className="star-rating">
                <u>ratings..</u>
                <AiFillStar size={18} />
                <AiFillStar size={18} />
                <AiFillStar size={18} />
                <FaStarHalfAlt size={18} />
                <p className="rating"></p>
              </div>
              <h2>Rs. 1999 /-</h2>
              <span>buy now</span>
            </div>
          </div>
        ))}
      </section> */}
    </>
  );
};

export default Products;
