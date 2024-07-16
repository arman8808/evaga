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
              <h1 className="text-seconderyHeading text-subHeading font-bold text-start">
                Unlock the Door to Your Next Adventure!
              </h1>
              <p className="text-textColor text-start w-full">
                Unlock the Door to Your Next Adventure!
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
                Enjoy the Exclusive Perks at Evaga!
              </h2>
              <p className="text-textColor text-para font-semibold">
                Gain hands-on experience in executing ideas, crafting proposals,
                managing budgets, and handling real-world client briefs. As you
                progress, you'll become a master of your craft, creating
                unforgettable memories, stories and innovating in the event
                management scenes.
              </p>
              <p className="text-textColor text-para font-semibold">
                At Evaga Entertainment, your career growth is driven by your
                passion and the excitement of turning ideas into awe-inspiring
                events.
              </p>
            </div>
            <div className="flex_start gap-3 flex-col">
              <span className="flex items-center justify-center bg-[#E7F2FF] w-fit p-2 rounded-md">
                <AiOutlineTeam className="text-[3rem]" />
              </span>
              <h6>Freedom to be Creative</h6>
              <p>
                Evaga Entertainment champions your creative freedom, giving you
                the autonomy to explore and realize your ideas. Whether you're a
                developer, artist, writer, or marketer, you can unleash your
                creativity and contribute to groundbreaking projects in the
                entertainment industry.
              </p>
            </div>
            <div className="flex_start gap-3 flex-col">
              <span className="flex items-center justify-center bg-[#F1F7E8] w-fit p-2 rounded-md">
                <MdMotionPhotosPaused className="text-[3rem]" />
              </span>
              <h6>Vibrant Team Environment:</h6>
              <p>
                At Evaga, you'll join a dynamic, collaborative team where we
                harness the power of teamwork to achieve outstanding results.
                Working alongside dedicated individuals who share your passion,
                you'll contribute to creating exceptional entertainment
                experiences.
              </p>
            </div>{" "}
            <div className="flex_start gap-3 flex-col">
              <span className="flex items-center justify-center bg-[#EFF2F5] w-fit p-2 rounded-md">
                <FaGraduationCap className="text-[3rem]" />
              </span>
              <h6>Cutting-Edge Projects:</h6>
              <p>
                Evaga offers the chance to engage in pioneering projects that
                redefine entertainment. Whether crafting immersive virtual
                reality experiences or producing captivating multimedia content,
                our diverse portfolio presents limitless opportunities to
                contribute to groundbreaking and innovative endeavors that
                captivate global audiences.
              </p>
            </div>{" "}
            <div className="flex_start gap-3 flex-col">
              <span className="flex items-center justify-center bg-[#FFEEED] w-fit p-2 rounded-md">
                <FiBarChart className="text-[3rem]" />
              </span>
              <h6>Dedication to Diversity and Inclusion:</h6>
              <p>
                Evaga Entertainment is dedicated to cultivating a diverse and
                inclusive workplace where everyone feels valued, respected, and
                empowered to share their unique perspectives. We believe that
                diversity enhances creativity and innovation, and we actively
                foster an inclusive culture where individuals from diverse
                backgrounds can flourish and achieve success.
              </p>
            </div>{" "}
            <div className="flex_start gap-3 flex-col">
              <span className="flex items-center justify-center bg-[#FFEEED] w-fit p-2 rounded-md">
                <FiBarChart className="text-[3rem]" />
              </span>
              <h6>Growth and Advancement Opportunities:</h6>
              <p>
                Discover the benefits of joining us, where growth and personal
                development take center stage. At Evaga, we nurture a culture
                that promotes ongoing learning, offers pathways for career
                progression, and encourages both professional and personal
                growth. Join us and unleash your full potential on an exciting
                career path.
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
