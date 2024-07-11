import React from "react";
import CountUp from "react-countup";

function Counter() {
  return (
    <div className="w-full flex items-center justify-between  p-[2rem] border-[1px] border-subHeading rounded-2xl boxShadow bg-[white] mobile:flex-col mobile:items-start">
      <span className="flex items-center justify-center gap-1">
        <strong className="text-seconderyHeading text-mainHeading ">
          <CountUp start={0} end={45} duration={10} />
          K+
        </strong>
        <p className="text-marqueColor text-normalHeading font-semibold">
          Attendees
        </p>
      </span>
      <span className="flex items-center justify-center gap-1">
        <strong className="text-seconderyHeading text-mainHeading ">
          <CountUp start={0} end={25} duration={10} />
          K+
        </strong>
        <p className="text-marqueColor text-normalHeading font-semibold">
          Speakers
        </p>
      </span>
      <span className="flex items-center justify-center gap-1">
        <strong className="text-seconderyHeading text-mainHeading ">
          <CountUp start={0} end={50} duration={10} />
          K+
        </strong>
        <p className="text-marqueColor text-normalHeading font-semibold">
          Sessions
        </p>
      </span>
      <span className="flex items-center justify-center gap-1">
        <strong className="text-seconderyHeading text-mainHeading ">
          <CountUp start={0} end={3} duration={10} />
          K+
        </strong>
        <p className="text-marqueColor text-normalHeading font-semibold">
          Participans
        </p>
      </span>
    </div>
  );
}

export default Counter;
