import React from "react";

function Counter() {
  return (
    <div className="w-full flex items-center justify-between  p-[2rem] border-[1px] border-subHeading rounded-2xl boxShadow">
      <span className="flex items-center justify-center gap-1">
        <strong className="text-seconderyHeading text-mainHeading ">
          45K+
        </strong>
        <p className="text-marqueColor text-normalHeading font-semibold">
          Attendees
        </p>
      </span>
      <span className="flex items-center justify-center gap-1">
        <strong className="text-seconderyHeading text-mainHeading ">
          25K+
        </strong>
        <p className="text-marqueColor text-normalHeading font-semibold">
          Speakers
        </p>
      </span>
      <span className="flex items-center justify-center gap-1">
        <strong className="text-seconderyHeading text-mainHeading ">
          50K+
        </strong>
        <p className="text-marqueColor text-normalHeading font-semibold">
          Sessions
        </p>
      </span>
      <span className="flex items-center justify-center gap-1">
        <strong className="text-seconderyHeading text-mainHeading ">3K+</strong>
        <p className="text-marqueColor text-normalHeading font-semibold">
          Participans
        </p>
      </span>
    </div>
  );
}

export default Counter;
