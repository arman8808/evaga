import React from "react";
import background from "../../../assets/Images/Mask group.png";
function BackgroundImage() {
  return (
    <div
      className="w-full h-[20rem] mobile:h-[10rem]"
      style={{
        background: `url('${background}')`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    ></div>
  );
}

export default BackgroundImage;
