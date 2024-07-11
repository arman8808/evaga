import React from "react";

function ImageCard({ image, title, para }) {
  return (
    <div className="flex items-center justify-center relative imageCard rounded-md">
      <img src={image} alt="work which we do" className="rounded-md" />
      <span className="rounded-md absolute blur-effect w-full h-full flex items-center justify-center flex-col text-center text-[white] cardInnerText gap-2">
        <h6 className="text-para font-[700]">{title}</h6>
        <p className="text-[0.8rem] font-medium text-[white]">{para}</p>
        <button className="bg-white outline-none text-mainHeading py-1 px-1 rounded-md">
          Send Enquiry
        </button>
      </span>
    </div>
  );
}

export default ImageCard;
