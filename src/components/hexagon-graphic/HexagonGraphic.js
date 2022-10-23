import "./HexagonGraphic.scss";
import React, { useState, useRef, useEffect } from "react";

function HexagonGraphic() {
  const containerRef = useRef(null);
  const [isVisible, setIsVisable] = useState(false);
  // const [ animated, setAnimated ] = useState(false)

  const callback = (entries) => {
    const [entry] = entries;
    setIsVisable(entry.isIntersecting);
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };

    const observer = new IntersectionObserver(callback, options);
    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  return (
    <div className="graphics">
      <div
        className={`graphics__line ${
          isVisible ? "graphics__line--animate" : ""
        }`}
        ref={containerRef}
      ></div>
      <div className="graphics__hexagons">
        <div className="graphics__hexagon graphics__hexagon--outer"></div>
        <div className="graphics__hexagon graphics__hexagon--inner"></div>
      </div>
    </div>
  );
}

export default HexagonGraphic;
