import { useRef, useState, useEffect } from "react";

export const useHover = () => {
  const [value, setValue] = useState(false);

  const ref = useRef(null);

  const handleMouseOver = () => setValue(true);
  const handleMouseOut = () => setValue(false);

  useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener("mouseenter", handleMouseOver);
      node.addEventListener("mouseleave", handleMouseOut);

      return () => {
        node.removeEventListener("mouseenter", handleMouseOver);
        node.removeEventListener("mouseleave", handleMouseOut);
      };
    }
  }, [ref]);

  return [ref, value];
};

export const isComponentInView = elementId => {
  let el = document.getElementById(elementId);
  let rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight ||
        document.documentElement.clientHeight) /*or $(window).height() */ &&
    rect.right <=
      (window.innerWidth ||
        document.documentElement.clientWidth) /*or $(window).width() */
  );
};
