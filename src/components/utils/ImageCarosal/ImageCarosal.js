import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import image from "../../../assets/Images/images.png";
import image1 from "../../../assets/Images/Rectangle 81.png";
import image2 from "../../../assets/Images/Rectangle 82.png";
import image3 from "../../../assets/Images/Rectangle 83.png";
import image4 from "../../../assets/Images/Rectangle 85.png";
import image5 from "../../../assets/Images/pexels-thatguycraig000-2306279.jpg";
import image6 from "../../../assets/Images/pexels-wendywei-1540406.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
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
      items: 3,
      itemsFit: "contain",
    },
  };
  const data = [
    {
      id: 1,
      img: image,
    },
    {
      id: 2,
      img: image1,
    },
    {
      id: 3,
      img: image2,
    },
    {
      id: 4,
      img: image3,
    },
    {
      id: 5,
      img: image4,
    },
    {
      id: 6,
      img: image5,
    },
    {
      id: 7,
      img: image6,
    },
  ];
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
      {data?.map((item) => (
        // <img
        //   src={item?.img}
        //   className="w-[90%] h-[32rem] mobile:h-[25rem] rounded-md cursor-pointer"
        //   alt="ImageCarosal"
        //   key={item?.id}
        //   loading="lazy"
        // />
        <LazyLoadImage
          alt={item?.img}
          src={item?.img}
          className="w-[90%] h-[32rem] mobile:h-[25rem] rounded-md cursor-pointer"
        />
      ))}
    </AliceCarousel>
  );
}

export default ImageCarosal;
