import { useState } from "react";

function useWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  function onResize() {
    setWidth(window.innerWidth);
  }

  window.addEventListener("resize", onResize, false);

  return { width };
}

export { useWidth };
