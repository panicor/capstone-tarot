import React from "react";
import "./CardImg.css";

function CardImg({
  name = "The Fool",
  image = "https://i.imgur.com/MC6A1jc.jpg",
}) {
  console.log(image);
  let flip = Math.floor(Math.random() * 2);
  let flipStyle = flip ? { transform: "rotate(180deg)" } : {};
  return (
    <div>
      <img className="Card" alt={name} src={image} style={flipStyle} />;
      {flip ? <p>You drew {name} in reverse</p> : <p>You drew {name}</p>}
    </div>
  );
}

export default CardImg;
