import React from "react";
import CountUp from "react-countup";
import bg from "../../../assets/Images/section.png";
import { useInView } from "react-intersection-observer";

function Counter() {
  const { ref, inView } = useInView({ triggerOnce: false });

  return (
    <div
      className="w-full h-fit flex items-center justify-center"
      style={{
        background: `url("${bg}")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      ref={ref}
    >
      <div className="w-11/12 flex items-center justify-between  p-[2rem] border-[1px] border-subHeading rounded-2xl boxShadow bg-[white]  mobile:grid mobile:grid-cols-2 mobile:gap-4 tablet:grid tablet:grid-cols-2">
        <span className="flex items-center justify-center gap-1 mobile:justify-start">
          <strong className="text-seconderyHeading text-mainHeading md:text-normalHeading mobile:text-normalHeading">
            {inView && <CountUp start={0} end={45} duration={10} />}
            K+
          </strong>
          <p className="text-marqueColor text-normalHeading font-semibold md:text-para mobile:text-para">
            Attendees
          </p>
        </span>
        <span className="flex items-center justify-center gap-1 mobile:justify-start">
          <strong className="text-seconderyHeading text-mainHeading md:text-normalHeading mobile:text-normalHeading">
            {inView && <CountUp start={0} end={300} duration={10} />}+
          </strong>
          <p className="text-marqueColor text-normalHeading font-semibold md:text-para mobile:text-para">
            Weddings
          </p>
        </span>
        <span className="flex items-center justify-center gap-1 mobile:justify-start">
          <strong className="text-seconderyHeading text-mainHeading md:text-normalHeading mobile:text-normalHeading">
            {inView && <CountUp start={0} end={120} duration={10} />}+
          </strong>
          <p className="text-marqueColor text-normalHeading font-semibold md:text-para mobile:text-para">
            Corporate Events
          </p>
        </span>
        <span className="flex items-center justify-center gap-1 mobile:justify-start">
          <strong className="text-seconderyHeading text-mainHeading md:text-normalHeading mobile:text-normalHeading">
            {inView && <CountUp start={0} end={100} duration={10} />}+
          </strong>
          <p className="text-marqueColor text-normalHeading font-semibold md:text-para mobile:text-para">
            Sessions
          </p>
        </span>
      </div>
    </div>
  );
}

export default Counter;
