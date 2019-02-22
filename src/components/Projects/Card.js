import React, { useState } from "react";
import { useHover } from "../../hooks";

import Modal from "./Modal";

function Card(props) {
  let backgroundSettings = {
    backgroundImage: `url(${props.image})`,
    backgroundSize: "cover"
  };
  const [hoverRef, isHovered] = useHover();
  const [modalIsOpen, toggleModal] = useState(false);
  const modalProps = { ...props, toggle: toggleModal };

  return (
    <div className="Card" id="card" ref={hoverRef} style={backgroundSettings}>
      {isHovered ? (
        <div className="CardDetails">
          <div className="slide-top">
            <h2 className="title">{props.title}</h2>
            <p className="subtitle">{props.tech}</p>
            <button
              className="Infobutton"
              onClick={() => toggleModal(!modalIsOpen)}
            >
              More Info
            </button>
          </div>
        </div>
      ) : null}
      {modalIsOpen ? <Modal {...modalProps} /> : null}
    </div>
  );
}

export default Card;
