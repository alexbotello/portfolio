import React from "react";

function SocialItem(props) {
  return (
    <li className="Item">
      <a href={props.url}>
        <img className={props.class} src={props.src} alt="" />
      </a>
    </li>
  );
}

export default SocialItem;
