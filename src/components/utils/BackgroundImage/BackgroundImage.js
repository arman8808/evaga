import React from "react";
import background from "../../../assets/Images/Mask group.png";
function BackgroundImage() {
  return (
    <div
      className="w-full h-[15rem]"
      style={{
        background: `url('${background}')`,
        backgroundPosition: "cover",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    ></div>
  );
}

export default BackgroundImage;
