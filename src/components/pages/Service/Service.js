import React from "react";
import aboutus from "../../../assets/Images/wedding  pic about us.png";
import service from "../../../assets/Images/Group 52.png";
import Rectangle from "../../../assets/Images/Rectangle 99.png";
import BannerCard from "../../utils/BannerCard/BannerCard";
import ImageCarosal from "../../utils/ImageCarosal/ImageCarosal";
import Footer from "../../layout/Footer/Footer";
function Service() {
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
              Service
            </p>
          </div>
        </div>
        <div className="w-11/12 grid grid-cols-3 gap-4 mobile:grid-cols-1 tablet:grid-cols-1">
          <div className="flex items-center justify-center w-full">
            <img src={service} alt="service" className="object-contain" />
          </div>
          <div className="col-span-2 flex items-center justify-center flex-col gap-4">
            <div className="flex items-start justify-start gap-2 flex-col">
              <h3 className="text-mainHeading text-normalHeading font-normalHeading">
                Unforgettable Weddings
              </h3>
              <p>
                Make your dream wedding a reality. We handle everything from
                décor and venues to catering and coordination. Enjoy a magical
                day that you and your guests will remember forever.
              </p>
            </div>{" "}
            <div className="flex items-start justify-start gap-2 flex-col">
              <h3 className="text-mainHeading text-normalHeading font-normalHeading">
                Exceptional Corporate Events
              </h3>
              <p>
                Impress clients and colleagues with a flawlessly organized
                corporate event. From conferences to team-building activities,
                we ensure your event reflects your brand and values.
              </p>
            </div>{" "}
            <div className="flex items-start justify-start gap-2 flex-col">
              <h3 className="text-mainHeading text-normalHeading font-normalHeading">
                Distinguished Government Events
              </h3>
              <p>
                We specialize in government functions, ensuring every detail
                meets the highest standards. Whether it's an official ceremony
                or a community outreach program, we deliver with expertise and
                discretion.
              </p>
            </div>
          </div>
        </div>
        <div className="w-11/12 grid grid-cols-3 gap-4 mobile:flex mobile:flex-col-reverse tablet:flex tablet:flex-col-reverse">
          <div className="col-span-2 flex items-center justify-center flex-col gap-4">
            <div className="flex items-start justify-start gap-2 flex-col">
              <h3 className="text-mainHeading text-para font-normalHeading">
                Spectacular Special Events
              </h3>
              <p>
                Celebrate milestones with a unique touch. Be it birthdays,
                anniversaries, galas, or fundraisers, we turn your vision into
                an unforgettable reality.
              </p>
            </div>{" "}
            <div className="flex items-start justify-start gap-2 flex-col">
              <h3 className="text-mainHeading text-para font-normalHeading">
                Engaging Community Events
              </h3>
              <p>
                Celebrate milestones with a unique touch. Be it birthdays,
                anniversaries, galas, or fundraisers, we turn your vision into
                an unforgettable reality.
              </p>
            </div>{" "}
            <div className="flex items-start justify-start gap-2 flex-col">
              <h3 className="text-subHeading text-normalHeading font-normalHeading">
                Let Us Create Your Perfect Event
              </h3>
              <p>
                No matter the occasion, our dedicated team will handle
                everything to ensure a seamless and stress-free experience.
                Share your vision with us, and we'll make it unforgettable.
              </p>
              <button className="buttonNormal">Make a Enquiry</button>
            </div>
          </div>
          <div className="flex items-center justify-center w-full">
            <img src={Rectangle} alt="service" className="object-contain" />
          </div>
        </div>
        <div className="w-11/12 grid grid-cols-2 gap-4">
          <div className="w-full flex items-center justify-center">
            <img src={Rectangle} alt={Rectangle} className="object-contain" />
          </div>
          <div className="w-full flex items-center justify-center">
            <img src={Rectangle} alt={Rectangle} className="object-contain" />
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

export default Service;
