import React from "react";
import aboutus from "../../../assets/Images/wedding  pic about us.png";
import MarqueeComponet from "../../utils/Marquee/Marquee";
import favicon from "../../../assets/Images/favicon.png";
import Counter from "../../utils/Counter/Counter";
import image from "../../../assets/Images/image.png";
import woman from "../../../assets/Images/woman image.png";
import Group from "../../../assets/Images/bgimg.png";
import ImageCarosal from "../../utils/ImageCarosal/ImageCarosal";
import BannerCard from "../../utils/BannerCard/BannerCard";
import Footer from "../../layout/Footer/Footer";
function AboutUs() {
  const marqueedataSecond = [
    {
      image: favicon,
      title: "Milestones and Achievements",
    },
    {
      image: favicon,
      title: "Milestones and Achievements",
    },
    {
      image: favicon,
      title: "Milestones and Achievements",
    },
    {
      image: favicon,
      title: "Milestones and Achievements",
    },
  ];
  return (
    <>
      <div className="mt-[-8rem] w-full flex items-center flex-col gap-[3rem] mobile:gap-[2rem]">
        <div className="w-full h-[100vh] flex items-center justify-center flex-col relative ">
          <img
            src={aboutus}
            alt="aboutus"
            className="w-full h-full object-cover"
          />

          <div className="absolute flex items-center justify-center flex-col w-[50%] text-[white] text-center gap-3 mobile:w-[90%]">
            <h1 className="text-seconderyHeading font-bold">
              Experience Luxury and Elegance in Every Event
            </h1>
            <p className="text-[white] text-normalHeading font-semibold">
              About us
            </p>
          </div>
        </div>
        <div className="w-11/12 grid grid-cols-2 gap-1 mobile:flex mobile:flex-col-reverse">
          <div className="flex items-start justify-start flex-col gap-3 w-full h-fit">
            <h2 className="text-subHeading  text-seconderyHeading font-semibold">
              Chronicle Quest
            </h2>
            <p className="text-textColor leading-8">
              We are a passionate team dedicated to capturing the most beautiful
              moments of your special day. Our mission is to create timeless
              memories that you will cherish forever.
            </p>
            <p className="text-textColor leading-8">
              We are a passionate team dedicated to capturing the most beautiful
              moments of your special day. Our mission is to create timeless
              memories that you will cherish forever.
            </p>
            <p className="text-textColor leading-8">
              We are a passionate team dedicated to capturing the most beautiful
              moments of your special day. Our mission is to create timeless
              memories that you will cherish forever.
            </p>
            <img src={Group} alt="snake skin" className="mobile:hidden" />
          </div>
          <div className="flex items-center justify-center">
            <img src={woman} alt="about" className="h-[25rem] " />
          </div>
        </div>
        <div className="w-10/12">
          <Counter />
        </div>
        <div className="w-11/12 flex items-start justify-start flex-col">
          <span>
            <h2 className="text-seconderyHeading text-mainHeading font-semibold">
              Our Rich Legacy of Excellence
            </h2>
            <p className="text-textColor">
              A Timeline of Milestones and Achievements
            </p>
          </span>
          <MarqueeComponet data={marqueedataSecond} />
        </div>
        <div className="w-11/12 flex flex-col items-center justify-center gap-3">
          <div className="flex flex-col items-center justify-center gap-3">
            <h3 className="text-normalHeading text-mainHeading font-semibold">
              Major Event
            </h3>
            <div className="grid grid-cols-2 mobile:flex mobile:flex-col-reverse mobile:gap-4">
              <div className="border-r-2 border-[#454545] flex flex-col gap-1">
                <p className="text-end border-b-2 border-[#454545] p-2 mb-2 text-[#6D6D6D]">
                  350+ Attendees
                </p>
                <p className="text-end border-b-2 border-[#454545] p-2 mb-2 text-[#6D6D6D]">
                  High-Energy Inspiration
                </p>
                <p className="text-end border-b-2 border-[#454545] p-2 mb-2 text-[#6D6D6D]">
                  Industry-Specific Programming
                </p>
                <p className="text-textColor leading-9">
                  Our summits are the epitome of impactful networking and
                  creative event immersion. More than 350 leaders, innovators,
                  and top names in the wedding and event industry gather for an
                  unparalleled level of energy and inspiration. Each summit
                  offers specialized tracks based on industry experience, market
                  segment, and area of focus, ensuring a tailored and enriching
                  experience for all attendees.
                </p>
              </div>
              <div className="flex items-center justify-center">
                <img src={image} alt="marjor" className="h-[22rem]" />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-3">
            <h3 className="text-normalHeading text-mainHeading font-semibold">
              EXPERIENCES
            </h3>
            <div className="grid grid-cols-2 mobile:flex mobile:flex-col mobile:gap-4">
              <div className="flex items-center justify-center">
                <img src={image} alt="marjor" className="h-[22rem]" />
              </div>
              <div className="border-l-2 border-[#454545] flex flex-col gap-1">
                <p className="text-start border-b-2 border-[#454545] p-2 mb-2 text-[#6D6D6D]">
                  10+ Years
                </p>
                <p className="text-start border-b-2 border-[#454545] p-2 mb-2 text-[#6D6D6D]">
                  Engaging Networking
                </p>
                <p className="text-start border-b-2 border-[#454545] p-2 mb-2 text-[#6D6D6D]">
                  Creative Event Immersion
                </p>
                <p className="p-2 text-textColor leading-9">
                  Our events provide engaging networking and creative immersion
                  for weddings, corporate gatherings, government functions, and
                  community events. With 350+ attendees including industry
                  leaders, innovators, and professionals, each event inspires
                  and energizes. Tailored tracks ensure valuable insights. Craft
                  unforgettable moments, deliver professional excellence, uphold
                  standards with precision, and celebrate diversity—every event
                  is a success
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-11/12 flex items-start justify-start flex-col gap-3">
          <ImageCarosal />
        </div>
        <div className="w-11/12">
          <BannerCard />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutUs;
