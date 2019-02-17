import React from "react";
import { useHover } from "../../hooks";

function Card(props) {
  const backgroundSettings = {
    backgroundImage: `url(${props.image})`,
    backgroundSize: "cover"
  };
  const [hoverRef, isHovered] = useHover();

  return (
    <div className="Card" ref={hoverRef} style={backgroundSettings}>
      {isHovered ? (
        <div className="CardDetails">
          <div className="slide-top">
            <h2 className="title">{props.title}</h2>
            <p className="subtitle">{props.tech}</p>
            <button className="Infobutton">More Info</button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Card;
