import React, { useEffect, useState } from "react";

export const SectionZero = () => {
  const [hideScrollText, setHideScrollText] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 100;

      if (window.scrollY > scrollThreshold) {
        setHideScrollText(true);
      } else {
        setHideScrollText(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="intro">
      <h1 className="name">RAINER AHI</h1>
      <h1 className="title">
        <span className="exp">DEV</span>ELOPER <br /> FOR WEB <br />
        <span className="exp">EXPERIENCES</span>
      </h1>
      <div
        className="scroll"
        style={{
          opacity: hideScrollText ? 0 : 1,
          transition: "opacity 0.3s ease-in-out", // Smooth transition effect
          pointerEvents: hideScrollText ? "none" : "auto", // Disable pointer events when hidden
        }}
      >
        <h1>
          PLEASE <br /> SCROLL
        </h1>
      </div>
    </section>
  );
};