import React from "react";
import "./CardImg.css";

function CardImg({ name = "Ace of Cups", image="https://i.imgur.com/MC6A1jc.jpg" }) {
console.log(image);
  return <img
      className="Card"
      alt={name}
      src={image} />;
}

export default CardImg;