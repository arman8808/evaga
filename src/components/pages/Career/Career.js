import React from "react";
import aboutus from "../../../assets/Images/555 1@2x.png";
import { AiOutlineTeam } from "react-icons/ai";
import { MdMotionPhotosPaused } from "react-icons/md";
import { FaGraduationCap } from "react-icons/fa";
import { FiBarChart } from "react-icons/fi";
import JobCard from "../../utils/JobCard/JobCard";
import Footer from "../../layout/Footer/Footer";
import FadeInSection from "../../utils/FadeInSection/FadeInSection";
function Career() {
  return (
    <>
      <div className="mt-[-8rem] w-full flex items-center flex-col gap-[3rem]">
        <FadeInSection>
          <div className="w-full h-[100vh] grid grid-cols-3  bg-[white] overflow-hidden mobile:grid-cols-1 mobile:h-fit tablet:h-fit md:h-fit">
            <div className="col-span-2 w-full h-full col-span-1 mobile:h-fit">
              <img
                src={aboutus}
                alt="aboutus"
                className="w-full object-conatin"
              />
            </div>

            <div className="flex items-center justify-center flex-colw-[50%] text-[white] text-center gap-3 flex-col pr-4">
              <h1 className="text-seconderyHeading text-subHeading font-bold">
                Conference Organizer
              </h1>
              <p className="text-textColor">
                Promoting Events to Maximize Attendance and Engagement
              </p>
            </div>
          </div>
        </FadeInSection>
        <FadeInSection>
          <div className="w-11/12 grid grid-cols-4 gap-4 mobile:grid-cols-2 tablet:grid-cols-2">
            <div className="col-span-2 flex_start flex-col gap-4">
              <p className="text-mainHeading text-normalHeading font-semibold">
                Benefits
              </p>
              <h2 className="text-mainHeading text-seconderyHeading font-semibold">
                Why you Should Join Our Awesome Team
              </h2>
              <p className="text-textColor text-para font-semibold">
                we want to feel like home when you are working at JMC(Japan
                Marketing & Consultancy Limited) & for that we have curated a
                great set of benefits for you.It all starts with the free lunch!
              </p>
            </div>
            <div className="flex_start gap-3 flex-col">
              <span className="flex items-center justify-center bg-[#E7F2FF] w-fit p-2 rounded-md">
                <AiOutlineTeam className="text-[3rem]" />
              </span>
              <h6>Team work</h6>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry.
              </p>
            </div>
            <div className="flex_start gap-3 flex-col">
              <span className="flex items-center justify-center bg-[#F1F7E8] w-fit p-2 rounded-md">
                <MdMotionPhotosPaused className="text-[3rem]" />
              </span>
              <h6>Secured Future</h6>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry.
              </p>
            </div>{" "}
            <div className="flex_start gap-3 flex-col">
              <span className="flex items-center justify-center bg-[#EFF2F5] w-fit p-2 rounded-md">
                <FaGraduationCap className="text-[3rem]" />
              </span>
              <h6>Learning Opportunity</h6>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry.
              </p>
            </div>{" "}
            <div className="flex_start gap-3 flex-col">
              <span className="flex items-center justify-center bg-[#FFEEED] w-fit p-2 rounded-md">
                <FiBarChart className="text-[3rem]" />
              </span>
              <h6>Upgrate Skills</h6>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry.
              </p>
            </div>
          </div>
        </FadeInSection>
        <FadeInSection>
          <div className="w-11/12 grid grid-cols-3 gap-4 mobile:grid-cols-1 tablet:grid-cols-1">
            <JobCard />
            <JobCard />
            <JobCard />
          </div>
        </FadeInSection>
      </div>
      <Footer />
    </>
  );
}

export default Career;
