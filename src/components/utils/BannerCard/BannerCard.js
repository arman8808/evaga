import React from "react";
import women from "../../../assets/Images/portrait-of-india-women-on-red-saree-2023-11-27-05-35-18-utc 1.png";
import Group from "../../../assets/Images/bg.png";

function BannerCard() {
  return (
    <div
      style={{
        background: `url(${Group})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
      className=" w-full h-[20rem] rounded-md grid grid-cols-3 p-4 text-[white] mt-[4rem]"
    >
      <div className="col-span-2 p-4 pt-[3rem] gap-4 flex flex-col items-start justify-start">
        <h2 className="text-seconderyHeading font-semibold">
          The Celebration of Our Love
        </h2>
        <p>
          We’re here to help! Get in touch with us for any inquiries or
          assistance
        </p>
        <span>
          <button>Call With Us</button>
          <button>Mail Us</button>
        </span>
      </div>
      <div className="relative ">
        <img
          src={women}
          alt="women"
          className="absolute top-[-7rem] h-[25rem] "
        />
      </div>
    </div>
  );
}

export default BannerCard;
