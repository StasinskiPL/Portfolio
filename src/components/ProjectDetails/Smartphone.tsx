import React, { useRef, useEffect } from "react";
import { gsap, Power3 } from "gsap";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { EffectFade, Navigation } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/effect-fade/effect-fade.scss";

SwiperCore.use([EffectFade, Navigation]);

interface Props {
  images: Array<string>;
}

const Smartphone: React.FC<Props> = ({ images }) => {
  const smartphoneRef = useRef<HTMLDivElement>(null!);
  useEffect(() => {
    gsap.from(smartphoneRef.current, {
      duration: 1.5,
      delay: 0.5,
      opacity: 0,
      y: -50,
      ease: Power3.easeInOut,
    });
  });

  const renderSlides = images.map((image, index) => {
    return (
      <SwiperSlide key={index}>
        <img loading="lazy" className="smartphone-img" src={image} alt="projectImage" />
      </SwiperSlide>
    );
  });

  return (
    <>
      <div ref={smartphoneRef} className="smartphone">
        <div className="content">
          <Swiper
            updateOnWindowResize={false}
            autoHeight={true}
            children={renderSlides}
            effect="fade"
            loop={true}
            navigation={{
              nextEl: ".smartphone-next",
              prevEl: ".smartphone-prev",
            }}
          />
        </div>
      </div>
      <div className="smartphone-nav smartphone-next">
        <FaArrowRight />
      </div>
      <div className=" smartphone-nav smartphone-prev">
        <FaArrowLeft />
      </div>
    </>
  );
};

export default Smartphone;
