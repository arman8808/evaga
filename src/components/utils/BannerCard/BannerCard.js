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
      className=" w-full h-[20rem] rounded-md grid grid-cols-3 p-4 text-[white] mt-[4rem] mobile:grid-cols-1"
    >
      <div className="col-span-2 mobile:col-span-1 p-4 pt-[3rem] gap-[3rem] mobile:gap-[1rem] flex flex-col items-start justify-start">
        <div className="flex flex-col items-start justify-start gap-4">
          <h2 className="text-seconderyHeading font-semibold">
            The Celebration of Our Love
          </h2>
          <p className="text-[white]">
            We’re here to help! Get in touch with us for any inquiries or
            assistance
          </p>
        </div>

        <span className="flex items-center justify-center gap-2">
          <button className="buttonNormal py-[1.5rem] text-[1rem] font-semibold hover:bg-[white] hover:text-[#4D0C6C] hover:transition ease-in-out delay-150  hover:animate-bounceIn ">
            Call With Us
          </button>
          <button className="buttonNormal py-[1.5rem] text-[1rem] font-semibold hover:bg-[white] hover:text-[#4D0C6C] hover:transition ease-in-out delay-150 hover:animate-bounceIn">
            Mail Us
          </button>
        </span>
      </div>
      <div className="relative mobile:hidden">
        <img
          src={women}
          alt="women"
          className="absolute top-[-6rem] h-[25rem] "
        />
      </div>
    </div>
  );
}

export default BannerCard;
