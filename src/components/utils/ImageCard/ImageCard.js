import React from "react";

function ImageCard({ image, title, para }) {
  return (
    <div className="flex items-center justify-center relative imageCard rounded-md">
      <img src={image} alt="work which we do" className="rounded-md" />
      <span className="absolute blur-effect w-full h-full flex items-center justify-center flex-col text-center text-[white] cardInnerText">
        <h6 className="text-para font-[700]">{title}</h6>
        <p className="text-[0.8rem] font-medium">{para}</p>
      </span>
    </div>
  );
}

export default ImageCard;
