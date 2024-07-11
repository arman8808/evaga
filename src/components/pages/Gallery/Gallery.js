import React from "react";
import aboutus from "../../../assets/Images/wedding  pic about us.png";
import background from "../../../assets/Images/bg  img.png";
import gallery from "../../../assets/Images/Frame 51.png";
import gallery1 from "../../../assets/Images/Frame 52.png";
import gallery2 from "../../../assets/Images/Frame 53.png";
import gallery3 from "../../../assets/Images/Frame 54.png";
import gallery4 from "../../../assets/Images/Frame 55.png";
import gallery5 from "../../../assets/Images/Frame 58.png";
import gallery6 from "../../../assets/Images/Frame 61.png";
import gallery7 from "../../../assets/Images/traditional-beauty-face-2023-11-27-04-57-31-utc 1.png";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Footer from "../../layout/Footer/Footer";
function Gallery() {
  const itemData = [
    { img: gallery },
    { img: gallery1 },
    { img: gallery2 },
    { img: gallery3 },
    { img: gallery4 },
    { img: gallery5 },
    { img: gallery6 },
    { img: gallery7 },
  ];
  return (
    <>
      <div className="mt-[-8rem] w-full flex items-center flex-col gap-[3rem] mobile:gap-[2rem]">
        <div className="w-full h-[100vh] flex items-center justify-center flex-col relative ">
          <img
            src={aboutus}
            alt="aboutus"
            className="w-full h-full object-cover"
          />

          <div className="absolute flex items-center justify-center flex-col w-[50%] mobile:w-[90%] text-[white] text-center gap-3">
            <h1 className="text-seconderyHeading font-bold">
              Experience Luxury and Elegance in Every Event
            </h1>
            <p className="text-[white] text-normalHeading font-semibold">
              Gallery
            </p>
          </div>
        </div>
        <div
          className="w-11/12 h-fit flex items-center justify-center"
          style={{
            background: `url("${background}")`,

            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="w-8/12 gallery grid grid-cols-1 gap-4 mobile:w-11/12 tablet:w-11/12">
            <ImageList variant="masonry" cols={3} gap={8}>
              {itemData.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    alt={item?.title}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Gallery;
