import React from "react";
import { useHover } from "../../hooks";

function Card(props) {
  const [hoverRef, isHovered] = useHover();
  return (
    <div
      className="Card"
      ref={hoverRef}
      style={{ backgroundImage: `url(${props.image})` }}
    >
      {isHovered ? (
        <div className="CardDetails">
          <h2 className="title">{props.title}</h2>
          <p className="subtitle">{props.tech}</p>
          <button className="Infobutton">More Info</button>
        </div>
      ) : null}
    </div>
  );
}

export default Card;
