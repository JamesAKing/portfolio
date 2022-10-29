import "./Hero.scss";
import React, { useState, useRef, useEffect } from "react";

function Hero() {
  const containerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const callback = (entries) => {
    const [entry] = entries;
    setIsVisible(entry.isIntersecting);
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
  }, [containerRef]);

  return (
    <section className="hero">
      <div className="hero__content">
        <div className="hero__heading">
          <h1 className="hero__text">FULL STACK DEVELOPER</h1>
          <p>MY NAME IS</p>
          <p
            className={`hero__text hero__name ${
              isVisible ? "hero__name--animate" : ""
            }`}
          >
            JAMES KING
          </p>
          <div
            className={`hero__line ${isVisible ? "hero__line--animate" : ""}`}
            ref={containerRef}
          ></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
