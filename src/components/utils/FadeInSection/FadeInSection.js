import React from "react";
import { useInView } from "react-intersection-observer";

function FadeInSection({ children }) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  return (
    <div
      ref={ref}
      className={`fade ${
        inView
          ? "fade-in w-full flex items-center justify-center"
          : " w-full flex items-center justify-center"
      }`}
    >
      {children}
    </div>
  );
}

export default FadeInSection;
