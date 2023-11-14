import React from "react";
import "./CardImg.css";

function CardImg({ name = "Ace of Cups", image="https://imgur.com/a/VkbI1u5" }) {
console.log(image);
  return <img
      className="Card"
      alt={name}
      src={image} />;
}

export default CardImg;