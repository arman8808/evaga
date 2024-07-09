import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import image from "../../../assets/Images/card top sev-1.png";
function ImageCarosal() {
  const responsive = {
    0: {
      items: 1,
    },

    600: {
      items: 2,
      itemsFit: "contain",
    },
    720: {
      items: 3,
      itemsFit: "contain",
    },
    1024: {
      items: 4,
      itemsFit: "contain",
    },
  };
  return (
    <AliceCarousel
      responsive={responsive}
      disableButtonsControls
      disableDotsControls
      mouseTracking
      autoPlay
      autoPlayInterval={5000}
      infinite
    >
      <img src={image} className="mr-3" alt="ImageCarosal" />
      <img src={image} className="mr-3" alt="ImageCarosal" />
      <img src={image} className="mr-3" alt="ImageCarosal" />
      <img src={image} className="mr-3" alt="ImageCarosal" />
      <img src={image} className="mr-3" alt="ImageCarosal" />
      <img src={image} className="mr-3" alt="ImageCarosal" />
    </AliceCarousel>
  );
}

export default ImageCarosal;