import React from "react";
import Marquee from "react-fast-marquee";

function MarqueeComponet({ data }) {
  return (
    <Marquee autoFill pauseOnHover>
      {data?.map((item) => (
        <span className="flex items-center justify-center mx-[2rem]">
          <img
            src={item?.image}
            alt="marquee logo"
            className="h-[4.5rem] object-contain"
          />
          <h6 className="text-normalHeading font-semibold text-marqueColor cursor-pointer">
            {item?.title}
          </h6>
        </span>
      ))}
    </Marquee>
  );
}

export default MarqueeComponet;
