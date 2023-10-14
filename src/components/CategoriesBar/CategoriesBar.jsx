import React, { useState } from "react";
import "./_cate.scss";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const CategoriesBar = () => {
  const keywords = [
    "All",
    "Cricket",
    "Valorant",
    "Tarik",
    "PUBG",
    "Gaming",
    "Football",
    "Sports",
    "News",
    "React Js",
    "Fireship",
    "Shroud",
    "Html",
    "Books",
    "Movies",
    "Anime",
    "Coding",
    "Exercise",
    "Comedy",
  ];
  // const keywords = [
  //   "All",
  //   "Cricket",
  //   "Valorant",
  //   "Tarik",
  //   "PUBG",
  //   "Gaming",
  //   "Football",
  //   "Sports",
  //   "News",

  // ];
  const [activeItem, setActiveItem] = useState("All");
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isLeftArrowVisible, setIsLeftArrowVisible] = useState(false);

  const handlePrevClick = () => {
    if (scrollPosition > 0) {
      setScrollPosition(scrollPosition - 1);
      if (!isLeftArrowVisible) {
        setIsLeftArrowVisible(true);
      }
    } else {
      setIsLeftArrowVisible(false);
    }
  };

  const handleNextClick = () => {
    if (scrollPosition < keywords.length - 3) {
      setScrollPosition(scrollPosition + 1);
      setIsLeftArrowVisible(true);
    }
  };
  return (
    <div className="categories-bar">
      <span
        className="prev"
        onClick={handlePrevClick}
        style={{ display: (isLeftArrowVisible) ? "block" : "none" }}
      >
        <AiOutlineLeft />
      </span>
      {keywords.map((item, i) => (
        <span
          key={i}
          onClick={() => setActiveItem(item)}
          className={activeItem === item ? "active" : "notActive"}
        >
          {item}
        </span>
      ))}
      <span className="next" onClick={handleNextClick}
      style={{ display: (scrollPosition === 0) ? 'block' : 'none' }}>
        <AiOutlineRight />
      </span>
    </div>
  );
};

export default CategoriesBar;
