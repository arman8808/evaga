import React from "react";
import aboutus from "../../../assets/Images/wedding  pic about us.png";
import MarqueeComponet from "../../utils/Marquee/Marquee";
import favicon from "../../../assets/Images/favicon.png";
import Counter from "../../utils/Counter/Counter";
import image from "../../../assets/Images/image.png";
import image1 from "../../../assets/Images/image1.png";
import founder from "../../../assets/Images/Group 69.png";
import Group from "../../../assets/Images/bgimg.png";
import ImageCarosal from "../../utils/ImageCarosal/ImageCarosal";
import BannerCard from "../../utils/BannerCard/BannerCard";
import Footer from "../../layout/Footer/Footer";
import FadeInSection from "../../utils/FadeInSection/FadeInSection";
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
        <FadeInSection>
          <div className="w-full h-[100vh] flex items-center justify-center flex-col relative ">
            <img
              src={aboutus}
              alt="aboutus"
              className="w-full h-full object-cover"
            />

            <div className="absolute flex items-center justify-center flex-col w-[50%] text-[white] text-center gap-3 mobile:w-[90%]">
              <h1 className="text-seconderyHeading font-bold">
                Transforming Moments into Remarkable Experiences!
              </h1>
              <p className="text-[white] text-normalHeading font-semibold">
                About us
              </p>
            </div>
          </div>
        </FadeInSection>
        <FadeInSection>
          <div className="w-11/12 grid grid-cols-2 gap-1 mobile:flex mobile:flex-col-reverse tablet:flex tablet:flex-col-reverse">
            <div className="flex items-start justify-start flex-col gap-3 w-full h-fit">
              <h2 className="text-subHeading  text-seconderyHeading font-semibold">
                Our Founder!
              </h2>
              <p className="text-textColor leading-8">
                Arroon is a seasoned business executive with more than 15 years
                of experience in the corporate sector. He is a visionary leader
                passionate about the event management industry. With a profound
                grasp of industry dynamics and emerging trends, he set out to
                establish a company that would revolutionize event management.
                Through his innovative vision, strategic guidance, and
                unwavering commitment, he has transformed Evaga into a
                well-regarded and influential name in the events industry.
              </p>
              <p className="text-textColor leading-8">
                His dedication to creativity, storytelling, and pushing the
                limits of innovation remains a source of inspiration for the
                team and fuels the company's achievements. As an innovative
                entrepreneur, the founder's legacy is built on his capacity to
                turn concepts into immersive experiences that captivate
                audiences and make a lasting impression in the events industry.
              </p>
              <p className="text-textColor leading-8">
                The founder actively organizes and hosts personal events,
                ranging from intimate gatherings to large-scale functions, where
                he channels his creativity and expertise beyond the professional
                sphere. Overall, his hobbies are intricately linked to his
                passion for event management, reinforcing his continuous
                dedication to crafting memorable experiences for clients.
              </p>
              <img
                src={Group}
                alt="snake skin"
                className="mobile:hidden h-[7rem] object-cover w-full"
              />
            </div>
            <div className="flex items-start justify-center">
              <img src={founder} alt="about" className="h-[30rem] " />
            </div>
          </div>
        </FadeInSection>
        <div className="w-full flex items-center justify-center bg-[black]">
          <FadeInSection>
            <div className="w-10/12 p-4 py-[3rem] flex items-start justify-start flex-col gap-3">
              <h2 className="text-subHeading  font-normal text-seconderyHeading">
                ~ WHO WE ARE
              </h2>
              <h3 className="text-[#fff]  font-normal text-seconderyHeading">
                About Evaga Entertainment!
              </h3>
              <p className="w-10/12 text-[#fff] mobile:w-full">
                Combining strategic planning with innovative creativity, we
                achieve a harmonious blend of analytical thinking and artistic
                inspiration. Our team of experienced professionals shares a
                passion for crafting memorable events that make a significant
                impact.
              </p>
              <p className="w-10/12 text-[#fff] mobile:w-full">
                At Evaga Entertainment, we are dedicated to creating purposeful
                experiences. Each event we design is meticulously planned to
                captivate, inspire, and actively engage attendees. From initial
                concept to flawless execution, we integrate creativity,
                precision, and seamless logistics to ensure every detail
                surpasses expectations.
              </p>
            </div>
          </FadeInSection>
        </div>
        <FadeInSection>
          <div className="w-10/12">
            <Counter />
          </div>
        </FadeInSection>
        <FadeInSection>
          <div className="w-11/12 flex items-start justify-start flex-col">
            <span>
              <h2 className="text-seconderyHeading text-mainHeading font-semibold">
                Our Legacy of Excellence!
              </h2>
              <p className="text-textColor">
                The Achievements and Milestones Achieved!
              </p>
            </span>
            <MarqueeComponet data={marqueedataSecond} />
          </div>
        </FadeInSection>

        <div className="w-11/12 flex flex-col items-center justify-center gap-3">
          <FadeInSection>
            <div className="flex flex-col items-center justify-center gap-3">
              <h3 className="text-normalHeading text-mainHeading font-semibold">
                Recent Major Event
              </h3>
              <div className="grid grid-cols-2 mobile:flex mobile:flex-col-reverse mobile:gap-4">
                <div className="border-r-2 border-[#454545] flex flex-col gap-1">
                  <p className="text-end border-b-2 border-[#454545] p-2 mb-2 text-[#6D6D6D]">
                    Corporate Family Day
                  </p>
                  <p className="text-end border-b-2 border-[#454545] p-2 mb-2 text-[#6D6D6D]">
                    High-Energy Inspiration
                  </p>
                  <p className="text-end border-b-2 border-[#454545] p-2 mb-2 text-[#6D6D6D]">
                    Evaga Entertainment Pvt Ltd recently orchestrated an
                    unforgettable Corporate Family Day for a prestigious
                    company, accommodating 800 participants. The event was
                    hosted at a luxurious 5-star property, featuring a vibrant
                    Hawaiian theme.
                  </p>{" "}
                  <p className="text-end border-b-2 border-[#454545] p-2 mb-2 text-[#6D6D6D]">
                    Event Highlights:
                  </p>
                  <p className="text-start border-b-2 border-[#454545] p-2 mb-2 text-[#6D6D6D]">
                    Hawaiian Welcome: Guests were greeted with a traditional
                    Hawaiian welcome, setting the tone for a day full of fun and
                    relaxation.
                  </p>
                  <p className="text-start border-b-2 border-[#454545] p-2 mb-2 text-[#6D6D6D]">
                    Engaging Activities: The event included a variety of games,
                    stalls, and fun activities designed for both kids and
                    adults, ensuring everyone had a great time.
                  </p>
                  <p className="text-start border-b-2 border-[#454545] p-2 mb-2 text-[#6D6D6D]">
                    Themed Entertainment: The day was packed with captivating
                    shows, including a Hawaiian bar, Poi Pixel performances, a
                    live music band, a magic show, and DIY activities.
                  </p>
                  <p className="text-start border-b-2 border-[#454545] p-2 mb-2 text-[#6D6D6D]">
                    Accommodation: With stays arranged for over 400 people,
                    guests could enjoy the event without any worries.
                  </p>
                  <p className="text-start  p-2 mb-2 text-[#6D6D6D]">
                    Exquisite Cuisine: A diverse and delicious set of cuisines
                    was available, adding to the overall experience.
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <img src={image} alt="marjor" className="h-[22rem]" />
                </div>
              </div>
            </div>
          </FadeInSection>
          <FadeInSection>
            <div className="flex flex-col items-center justify-center gap-3">
              <h3 className="text-normalHeading text-mainHeading font-semibold">
                EXPERIENCES
              </h3>
              <div className="grid grid-cols-2 mobile:flex mobile:flex-col mobile:gap-4">
                <div className="flex items-center justify-center">
                  <img src={image1} alt="marjor" className="h-[22rem]" />
                </div>
                <div className="border-l-2 border-[#454545] flex flex-col gap-1">
                  <p className="text-start border-b-2 border-[#454545] p-2 mb-2 text-[#6D6D6D]">
                    3 Years
                  </p>
                  <p className="text-start border-b-2 border-[#454545] p-2 mb-2 text-[#6D6D6D]">
                    Unforgettable Event Experiences with Evaga Entertainment
                  </p>
                  {/* <p className="text-start border-b-2 border-[#454545] p-2 mb-2 text-[#6D6D6D]">
                      Creative Event Immersion
                    </p> */}
                  <p className="p-2 text-textColor leading-9">
                    At Evaga Entertainment Pvt Ltd, we believe that every event
                    is a unique story waiting to be told. With our expertise and
                    passion for creating memorable moments, we transform your
                    vision into reality. Our comprehensive range of services and
                    dedicated team ensure that every detail is meticulously
                    planned and flawlessly executed.
                  </p>
                </div>
              </div>
            </div>
          </FadeInSection>
        </div>

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

export default AboutUs;
