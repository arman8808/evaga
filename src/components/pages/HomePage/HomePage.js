import React, { useEffect, useRef, useState } from "react";
import heroVideo from "../../../assets/Videos/herosection.mp4";
import poster from "../../../assets/Images/Screenshot 2024-07-08 171201.png";

function HomePage() {
  return (
    <div className="mt-[-8rem] w-full">
      <div className="w-full h-[100vh] flex items-center justify-center flex-col relative ">
        <video
          controls={false}
          muted
          autoPlay={true}
          loop
          poster={poster}
          className="w-full h-full object-cover"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute flex items-center justify-center flex-col w-[50%] text-[white] text-center gap-3">
          <h1 className="text-seconderyHeading font-bold">
            Experience Luxury and Elegance in Every Event
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elitsed eiusmod
            tempor incididunt dolore magna ali scelerisque in dictum non
            consectetur.
          </p>
          <form className="glass-effect flex items-center justify-center gap-2">
            <input
              type="text"
              placeholder="Event"
              className="bg-transparent  outline-none border-b-2 p-1"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="bg-transparent  outline-none border-b-2 p-1"
            />
            <button className="normal border-2 rounded-md p-1">Book Now</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
