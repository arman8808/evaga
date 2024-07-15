import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import image from "../../../assets/Images/pexels-bohlemedia-1114425.jpg";
import image1 from "../../../assets/Images/pexels-f4photography-1317374.jpg";
import image2 from "../../../assets/Images/pexels-harrisonhaines-2834154.jpg";
import image3 from "../../../assets/Images/pexels-lalu-fatoni-228553-724500.jpg";
import image4 from "../../../assets/Images/pexels-suvan-chowdhury-37305-1616228.jpg";
import image5 from "../../../assets/Images/pexels-thatguycraig000-2306279.jpg";
import image6 from "../../../assets/Images/pexels-wendywei-1540406.jpg";
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
        <img
          src={item?.img}
          className="w-[90%] h-[32rem] mobile:h-[25rem] rounded-md cursor-pointer"
          alt="ImageCarosal"
          key={item?.id}
          loading="lazy"
        />
      ))}
    </AliceCarousel>
  );
}

export default ImageCarosal;
