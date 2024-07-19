import React from "react";
import aboutus from "../../../assets/Images/wedding  pic about us2.png";
import aboutus1 from "../../../assets/Images/pexels-joshsorenson-976866.webp";
import aboutus2 from "../../../assets/Images/pexels-teddy-2263436.webp";
import aboutus3 from "../../../assets/Images/pexels-wendywei-1190297.webp";
import service from "../../../assets/Images/Group 52.png";
import Rectangle from "../../../assets/Images/Rectangle 99.png";
import BannerCard from "../../utils/BannerCard/BannerCard";
import ImageCarosal from "../../utils/ImageCarosal/ImageCarosal";
import Footer from "../../layout/Footer/Footer";
import FadeInSection from "../../utils/FadeInSection/FadeInSection";
function Service() {
  return (
    <>
      <div className="mt-[-8rem] w-full flex items-center flex-col gap-[3rem] mobile:gap-[2rem]">
        <FadeInSection>
          <div className="w-full h-[100vh] flex items-center justify-center flex-col relative ">
            <img
              src={aboutus}
              alt="aboutus"
              className="w-full h-full object-cover"
            />

            <div className="absolute flex items-center justify-center flex-col w-[50%] text-[white] text-center gap-3 mobile:w-[90%]">
              <h1 className="text-seconderyHeading font-bold">
                You Dream It, We Make it True!
              </h1>
              <p className="text-[white] text-normalHeading font-semibold">
                Service
              </p>
            </div>
          </div>
        </FadeInSection>
        <FadeInSection>
          <div className="w-11/12 grid grid-cols-3 gap-4 mobile:grid-cols-1 tablet:grid-cols-1">
            <div className="flex items-center justify-center w-full">
              <img src={service} alt="service" className="object-contain" />
            </div>
            <div className="col-span-2 flex items-center justify-center flex-col gap-4">
              <div className="flex items-start justify-start gap-2 flex-col">
                <h3 className="text-mainHeading text-normalHeading font-normalHeading">
                  Wedding Planner
                </h3>
                <p>
                  At Evaga, we specialize in crafting weddings that intricately
                  blend the dreams, emotions, and preferences of each couple
                  into a seamless and enchanting experience. Our strength lies
                  in capturing the unique narrative and vision of every pair,
                  designing personalized weddings that authentically reflect
                  their love story and personalities. We excel in orchestrating
                  the delicate balance of love and celebration, ensuring each
                  moment is filled with beauty, significance, and happiness,
                  creating lasting memories for the newlyweds and their guests.
                </p>
              </div>{" "}
              <div className="flex items-start justify-start gap-2 flex-col">
                <h3 className="text-mainHeading text-normalHeading font-normalHeading">
                  Corporate Event
                </h3>
                <p>
                  Evaga excels in managing corporate events, adeptly handling
                  intricate details, seamlessly coordinating numerous elements,
                  and meeting the diverse needs and expectations of clients and
                  attendees. We orchestrate events like a finely tuned symphony,
                  ensuring every aspect harmonizes to deliver a memorable and
                  impactful experience for everyone involved.
                </p>
              </div>{" "}
              <div className="flex items-start justify-start gap-2 flex-col">
                <h3 className="text-mainHeading text-normalHeading font-normalHeading">
                  Community Events
                </h3>
                <p>
                  Evaga's proficiency in community events stems from our
                  thorough grasp of each community's distinct dynamics and
                  needs. We specialize in crafting events that reflect the
                  values, interests, and aspirations of community members,
                  fostering inclusive and meaningful experiences for all
                  participants. Our approach is grounded in empathy,
                  collaboration, and a sincere dedication to making a positive
                  impact, ensuring each event makes a lasting impression and
                  enhances community enrichment and cohesion.
                </p>
              </div>
            </div>
          </div>
        </FadeInSection>
        <FadeInSection>
          <div className="w-11/12 grid grid-cols-3 gap-4 mobile:flex mobile:flex-col-reverse tablet:flex tablet:flex-col-reverse">
            <div className="col-span-2 flex items-center justify-center flex-col gap-4">
              <div className="flex items-start justify-start gap-2 flex-col">
                <h3 className="text-mainHeading text-normalHeading font-normalHeading">
                  Government Events
                </h3>
                <p>
                  Evaga has demonstrated excellence in orchestrating
                  governmental and institutional events, requiring a profound
                  grasp of protocols and security protocols. Our expertise spans
                  organizing high-profile gatherings and managing events at a
                  VVIP level, ranging from diplomatic meetings to defense
                  conferences. We prioritize precision, formality, and
                  meticulous planning, ensuring each event reflects dignity and
                  impeccable execution.
                </p>
              </div>{" "}
              <div className="flex items-start justify-start gap-2 flex-col">
                <h3 className="text-subHeading text-normalHeading font-normalHeading">
                  Let’s Create Memories Together!
                </h3>
                <p>
                  For questions, event planning assistance, or collaboration
                  discussions, Evaga Entertainment is here to help. Provide your
                  details and specific requirements, and we’ll promptly offer
                  exceptional solutions.
                </p>
                <button className="buttonNormal hover:bg-[#5D5D5D] hover:text-[white] hover:animate-bounceIn hover:transition ease-in-out delay-150">
                  Make a Enquiry
                </button>
              </div>
            </div>
            <div className="flex items-center justify-center w-full">
              <img src={aboutus1} alt="service" className="object-contain" />
            </div>
          </div>
        </FadeInSection>
        <FadeInSection>
          <div className="w-11/12 grid grid-cols-2 gap-4">
            <div className="w-full flex items-center justify-center">
              <img src={aboutus2} alt={Rectangle} className="object-contain" />
            </div>
            <div className="w-full flex items-center justify-center">
              <img src={aboutus3} alt={Rectangle} className="object-contain" />
            </div>
          </div>
        </FadeInSection>
        <FadeInSection>
          <div className="w-11/12 flex items-start justify-start flex-col gap-3">
            <ImageCarosal />
          </div>
        </FadeInSection>
        <FadeInSection>
          <div className="w-11/12">
            <BannerCard />
          </div>
        </FadeInSection>
      </div>
      <Footer />
    </>
  );
}

export default Service;
