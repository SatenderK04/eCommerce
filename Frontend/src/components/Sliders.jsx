import React, { useState, useEffect } from "react";
import "../css/Sliders.css";
import "../App.css";

const Sliders = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      id: 1,

      img: "../../src/assets/images/header img4.png",
      title: "New Collection",
      subtitle1: "Find Your New,",
      subtitle2: "Favourite Clothing",
    },
    {
      id: 2,

      img: "../../src/assets/images/header img3.png",
      title: "Your",
      subtitle1: "Everyday Essentials,",
      subtitle2: "are here",
    },
    {
      id: 3,

      img: "../../src/assets/images/header img2.png",
      title: "Maximize Trendy Vibes",
      subtitle1: "Be Fashion,",
      subtitle2: "Forward",
    },
    {
      id: 4,

      img: "../../src/assets/images/header img1.png",
      title: "New Collection",
      subtitle1: "All you need,",
      subtitle2: "Is here",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="slider">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`slide ${index === currentIndex ? "active" : ""} ${
            `slide` + slide.id
          }`}
        >
          <div className={`white-circle${slide.id}`}></div>
          <img src={slide.img} alt="fashion model" className="img" />
          <div className="description">
            <p>{slide.title}</p>
            <h2>{slide.subtitle1}</h2>
            <h2>{slide.subtitle2}</h2>
            <button>Explore</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sliders;
