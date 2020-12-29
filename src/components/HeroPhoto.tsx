import React, { useEffect, useRef, useState } from "react";
import HeroImg from "../assets/images/HeroImage.svg";
import { gsap, Power4 } from "gsap";

const HeroPhoto: React.FC = () => {
  // const [showAbout, setshowAbout] = useState<boolean>(false);
  let imageRef = useRef<HTMLHeadingElement | null>(null);
  let dialogue = useRef<HTMLHeadingElement | null>(null);
  let circle1 = useRef<HTMLHeadingElement | null>(null);
  let circle2 = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    if (imageRef.current) {
      gsap.from(imageRef.current.firstElementChild, {
        duration: 3,
        opacity: 0,
        ease: Power4.easeIn,
        transformOrigin: "top left",
      });
      gsap.from(imageRef.current.lastElementChild, {
        duration: 1,
        delay: 2,
        opacity: 0,
        ease: Power4.easeOut,
      });
    }
  }, []);

  //  useEffect(()=>{
  //    if(showAbout){

  //    }

  //  },[showAbout])

  const clickHandler = () => {
    // setshowAbout(true);
    gsap.to(dialogue.current, {
      visibility: "visible",
    });
    if (dialogue.current) {
      gsap.to(circle2.current, {
        opacity: 1,
        duration: 0.5,
        scale: 1,
      });
      gsap.to(circle1.current, {
        opacity: 1,
        duration: 0.5,
        delay: 0.5,
        scale: 1,
      });
      gsap.to(dialogue.current.firstElementChild, {
        opacity: 1,
        duration: 0.5,
        delay: 1,
      });
    }
  };

  return (
      <div ref={imageRef} className="hero-imageBox">
        <img className="hero-image" src={HeroImg} alt="profilImage" />
        <div ref={dialogue} className="about">
          <div className="about-context">I'm Circular speech bubble</div>
          <div ref={circle1} className="circle1"></div>
          <div ref={circle2} className="circle2"></div>
        </div>
        <button onClick={clickHandler} className="hero-image-btn">
          Tell me something
        </button>
      </div>
  );
};

export default HeroPhoto;
