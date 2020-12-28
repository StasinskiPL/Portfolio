import React, { useEffect, useRef } from "react";
import {FaArrowDown} from "react-icons/fa"
import { gsap, Power2 } from "gsap";

const Hero: React.FC = () => {
  let textRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    gsap.from([textRef.current?.children[0], textRef.current?.children[1]], {
      duration: 1.75,
      y: 50,
      opacity: 0,
      ease: Power2.easeInOut,
      stagger: 1,
    });

    gsap.to(textRef.current, {
      duration: 1,
      textShadow: "-6px -6px rgba(241, 241, 230, 0.1)",
      delay: 2,
      ease: Power2.easeInOut,
      stagger: 1,
    });
  }, []);
  return (
    <section className="hero">
      <div className="hero__center">
        <div className="hero__content">
          <div ref={textRef} className="hero__content-text">
            <span className="hero__content-name">Dawid</span>
            <span className="hero__content-lastName"> Stasiński</span>
          </div>
        </div>
        <a href="#projects" className="hero-arrow">
        <FaArrowDown ></FaArrowDown>
        </a>
      </div>
    </section>
  );
};

export default Hero;
