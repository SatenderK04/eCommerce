import React from "react";
import "../../css/buyer/Categories.css";
import img1 from "../../assets/images/bag.jpg";
import img2 from "../../assets/images/bag2.jpg";
import img3 from "../../assets/images/makeup.jpg";
import img4 from "../../assets/images/Profile.jpg";

const Categories = () => {
  const categories = [
    {
      title: "Electronics & Gadgets",
      image: img1,
      link: "/categories/electronics",
    },
    {
      title: "Fashion & Apparel",
      image: img2,
      link: "/categories/fashion",
    },
    {
      title: "Home & Kitchen",
      image: img3,
      link: "/categories/home-kitchen",
    },
    {
      title: "Beauty & Personal Care",
      image: img1,
      link: "/categories/beauty",
    },
    {
      title: "Health & Wellness",
      image: img1,
      link: "/categories/health",
    },
    {
      title: "Grocery & Food",
      image: img1,
      link: "/categories/grocery",
    },
    {
      title: "Books & Stationery",
      image: img1,
      link: "/categories/books",
    },
    {
      title: "Baby & Kids",
      image: img4,
      link: "/categories/baby",
    },
    {
      title: "Sports & Outdoor",
      image: img1,
      link: "/categories/sports",
    },
    {
      title: "Automotive & Accessories",
      image: img1,
      link: "/categories/automotive",
    },
  ];

  return (
    <>
      <h2 className="main-heading">Items Available for You</h2>
      <div className="product-container">
        <div className="categories">
          {categories.map((category, index) => (
            <a key={index} href={category.link} className="category-item">
              <img src={category.image} alt={category.title} />
              <p>{category.title}</p>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Categories;
