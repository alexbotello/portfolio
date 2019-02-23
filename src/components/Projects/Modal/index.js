import React from "react";
import "./index.css";

function Modal(props) {
  return (
    <div className="Modal">
      <div className="Content">
        <div className="BannerImage">
          <img src={props.image} alt="modal-img" />
        </div>
        <div className="FlexContent">
          <div className="Content-Info">
            <h1>{props.title}</h1>
            <h5>{props.subtitle}</h5>
          </div>
          <hr />
          <div className="Description">
            <br />
            <p>{props.desc}</p>
          </div>
          <div className="Actions">
            <button>
              <a href={props.url}>View</a>
            </button>
            <div className="close" onClick={() => props.toggle(!props.isOpen)}>
              x
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
