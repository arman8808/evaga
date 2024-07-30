import React, { useRef } from "react";
import heroVideo from "../../../assets/Videos/2361938-hd_1920_1080_30fps.mp4";
import poster from "../../../assets/Images/2361938-hd_1920_1080_30fps-0 (1).jpg";
import Counter from "../../utils/Counter/Counter";
import img from "../../../assets/Images/group-of-business-people-drinking-together-2023-11-27-05-18-31-utc.png";
import img1 from "../../../assets/Images/first-i-gave-you-my-heart-now-i-give-you-this-rin-2023-11-27-05-32-30-utc.png";
import img2 from "../../../assets/Images/image 17.png";
import img3 from "../../../assets/Images/pikaso_enhance__custom_2K_Standard_r93_c53_ 1.png";
import img4 from "../../../assets/Images/Exclusive Events.png";
import img5 from "../../../assets/Images/Bespoke Events.png";
import gallery from "../../../assets/Images/Rectangle 10.png";
import gallery1 from "../../../assets/Images/Rectangle 12.png";
import gallery3 from "../../../assets/Images/Rectangle 13.png";
import gallery4 from "../../../assets/Images/Rectangle 16.png";
import gallery5 from "../../../assets/Images/Rectangle 17.png";
import gallery6 from "../../../assets/Images/Rectangle 19.png";
import vector from "../../../assets/Images/Vector.png";
import vector1 from "../../../assets/Images/Vector-2.png";
import vector2 from "../../../assets/Images/logoipsum-246 1.png";
import vector3 from "../../../assets/Images/Vector-1.png";
import counterBackground from "../../../assets/Images/section.png";
import aboutSection from "../../../assets/Images/img  bg.png";
import testimonailBackground from "../../../assets/Images/Container.png";
import ImageCard from "../../utils/ImageCard/ImageCard";
import MarqueeComponet from "../../utils/Marquee/Marquee";
import favicon from "../../../assets/Images/favicon.png";
import image from "../../../assets/Images/image.png";
import image1 from "../../../assets/Images/image1.png";
import {
  IoIosArrowForward,
  IoIosArrowRoundBack,
  IoIosArrowRoundForward,
} from "react-icons/io";
import TestimonailCard from "../../utils/TestimonailCard/TestimonailCard";
import ImageCarosal from "../../utils/ImageCarosal/ImageCarosal";
import BackgroundImage from "../../utils/BackgroundImage/BackgroundImage";
import ContactUs from "../../layout/ContactUs/ContactUs";
import AccordionComponent from "../../utils/Accordion/Accordion";
import { ImageList, ImageListItem } from "@mui/material";
import Footer from "../../layout/Footer/Footer";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { useForm } from "react-hook-form";
import FadeInSection from "../../utils/FadeInSection/FadeInSection";
import { useNavigate } from "react-router-dom";
function HomePage() {
  const imageCarddata = [
    {
      image: img,
      title: "Corporate Events",
      para: "Evaga excels in handling corporate events by expertly managing intricate details, smoothly coordinating various elements, and comprehending the diverse needs and expectations of both clients and attendees.",
    },
    {
      image: img1,
      title: "Wedding Planner",
      para: "At Evaga, we specialize in wedding event planning by intricately blending the couple's dreams, emotions, and preferences into a seamless and magical experience.",
    },
    {
      image: img2,
      title: "Community Events",
      para: "At Evaga, our proficiency in community events stems from our profound understanding of the unique dynamics and requirements of various communities.",
    },
    {
      image: img3,
      title: "Government Events",
      para: "Evaga has mastered the art of organizing governmental and institutional events, which require a thorough understanding of protocols and strict adherence to security measures.",
    },
    {
      image: img4,
      title: "Exclusive Events",
      para: "Exclusive events are custom-designed gatherings crafted to match the unique preferences, tastes, and needs of each client or guest.",
    },
    {
      image: img5,
      title: "Bespoke Events",
      para: "At Evaga, we excel in crafting these unique occasions by skillfully combining creativity, meticulous attention to detail, and strategic planning.",
    },
  ];
  const marqueedata = [
    {
      image: favicon,
      title: "The Evaga Corporate Events",
    },
    {
      image: favicon,
      title: "The Evaga Wedding Planner",
    },
    {
      image: favicon,
      title: "The Evaga Community Events",
    },
    {
      image: favicon,
      title: "The Evaga Government Events",
    },
    {
      image: favicon,
      title: "The Evaga Exclusive Events",
    },
    {
      image: favicon,
      title: "The Evaga Bespoke Events",
    },
  ];
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
  const marqueedataThird = [
    {
      image: favicon,
      title: "Frequently Asked Questions",
    },
    {
      image: favicon,
      title: "Frequently Asked Questions",
    },
    {
      image: favicon,
      title: "Frequently Asked Questions",
    },
    {
      image: favicon,
      title: "Frequently Asked Questions",
    },
  ];
  const marqueedataFourth = [
    {
      image: vector,
      title: "Logoipsum",
    },
    {
      image: vector1,
      title: "Logoipsum",
    },
    {
      image: vector2,
      title: "Logoipsum",
    },
    {
      image: vector3,
      title: "Logoipsum",
    },
  ];
  const testimonialData = [
    {
      name: "Prabhu Dayal",
      review:
        "We are thrilled to recount our experience with Evaga Entertainment. From the outset of our 500-person, two-day internal event, Evaga Entertainment impressed us. Their comprehensive proposals and professionalism instilled confidence in us throughout the planning phase. The event surpassed all expectations, hailed by our team and partners as the best in a decade. Evaga Entertainment’s proficiency in MICE and hospitality ensured a truly memorable experience. We appreciate their outstanding work and eagerly anticipate future successful collaborations. Thank you, Evaga Entertainment!",
    },
    {
      name: "Arpita Jain",
      review:
        "Working with Evaga Entertainment has been an outstanding experience for us at MEI. They are among the top event management companies we've partnered with. Collaborating with the entire team at Evaga Entertainment has been remarkable due to their responsiveness to our ongoing feedback. They demonstrate exceptional skill in organizing activities for children, and their commitment shines through in every event we've hosted together. Our enduring partnership with Evaga Entertainment has been exceptional, and we sincerely thank everyone involved in this exemplary organization.",
    },
    {
      name: "Manju Srivastava ",
      review:
        "I want to extend my sincere gratitude for organizing such an incredible event! Everything went flawlessly, and it was truly enjoyable. A special acknowledgment to the exceptional coordinators who ensured smooth operations, and to the talented musicians whose outstanding performances illuminated the stage. Their dedication and skill were instrumental in making the event exceptional, and I deeply appreciate their efforts. I eagerly anticipate more fantastic events with your team! Thank you for an outstanding event!",
    },
  ];
  const faqData = [
    {
      question: "What are the Services Covered in Event Management?",
      answer:
        "A: We provide a wide array of event management services, encompassing venue selection, theme conceptualization, decor and design, catering, entertainment booking, logistics coordination, and on-site event supervision.",
    },
    {
      question: "Can You Help you With Both Social and Corporate Events?",
      answer:
        "A: Certainly, we specialize in organizing both corporate and social events. Whether you are arranging a corporate conference, wedding, birthday party, or any other type of event, we possess the expertise and capabilities to transform your vision into reality.",
    },
    {
      question: "Is There Any Customized Packages for Event Management?",
      answer:
        "A: Certainly! We recognize that each event is distinct, which is why we provide personalized packages designed to meet your specific requirements, preferences, and financial considerations.",
    },
    {
      question:
        "Do You Also Provide Event Coordination Service On the Day of Event?",
      answer:
        "A: Certainly! Our team will be present onsite throughout your event to ensure seamless execution according to your plans. From coordinating vendors to overseeing setup and teardown, we will manage every detail, allowing you to relax and fully enjoy your event. ",
    },
    {
      question: "What Type of Venues are Selected for the Events?",
      answer:
        "A: We maintain partnerships with a diverse array of venues, such as hotels, conference centers, banquet halls, outdoor locations, and beyond. Whatever your preferences may be, we will assist you in discovering the ideal venue that matches your event's style and size.",
    },
    {
      question: "How to Start Planning for My Event?",
      answer:
        "A: Starting is straightforward! Just contact us via our contact page or by phone, and one of our skilled event planners will assist you every step of the way.",
    },
  ];
  const itemData = [
    gallery,
    gallery1,
    gallery3,
    gallery4,
    gallery5,
    gallery6,
    gallery3,
    gallery1,
  ];
  const responsive = {
    0: {
      items: 1,
    },
    1024: {
      items: 1,
      itemsFit: "contain",
    },
  };
  const CustomPrevButton = ({ onClick }) => (
    <button
      onClick={onClick}
      className="custom-prev-button text-[4rem] text-[#BFBFBF] hover:text-[#3D3D3D] font-normal"
    >
      <IoIosArrowRoundBack />
    </button>
  );

  const CustomNextButton = ({ onClick }) => (
    <button
      onClick={onClick}
      className="custom-next-button text-[4rem] text-[#BFBFBF] hover:text-[#3D3D3D] font-normal"
    >
      <IoIosArrowRoundForward />
    </button>
  );
  const carouselRef = useRef(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const whatsappMessage = `
      *Evaga Entertainment Enquiry*
      *Event Type:* ${data.EventType}
      *Phone Number:* ${data.phone}
  
      We look forward to making your event a success! 
    `;
    const whatsappURL = `https://wa.me/+918296157611?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(whatsappURL, "_blank");
  };
  const history = useNavigate();

  return (
    <>
      <div className="mt-[-8rem] w-full flex items-center flex-col gap-[3rem] mobile:gap-[2rem]">
        <div className=" w-full h-[100vh] flex items-center justify-center flex-col relative ">
          <video
            controls={false}
            muted
            autoPlay={true}
            loop
            poster={poster}
            className="w-full h-full object-cover"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
          <div className="overlay  absolute flex items-center justify-center flex-col w-[50%] mobile:w-[90%] md:w-[70%] tablet:w-[90%] text-[white] text-center gap-3">
            <h1 className="text-seconderyHeading font-bold">
              Transforming Visions into Unforgettable Experiences!
            </h1>
            <p className="text-[white] w-[50%] md:w[70%] lg:w-[60%] mobile:w-[90%]">
              What can you expect when Evaga Entertainment handles your events?
              We bring your vision to life, surpassing your expectations and
              creating an unforgettable event that makes a lasting impression.
            </p>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="glass-effect flex items-center justify-center gap-2 mobile:flex-col mobile:w-11/12 md:w-[100%] liner_grident_border"
            >
              <span className=" flex items-start justify-center flex-col w-[10rem]">
                <select
                  className="bg-transparent outline-none   border-b-2 p-1 w-full  mobile:w-full "
                  {...register("EventType", {
                    required: true,

                    validate: (value) => {
                      return !!value.trim();
                    },
                  })}
                >
                  <option
                    value=""
                    className="bg-transparent outline-none  border-none text-subHeading"
                  >
                    Select Event
                  </option>
                  <option
                    value="Corporate Events"
                    className="bg-transparent outline-none  border-none text-subHeading"
                  >
                    Corporate Events
                  </option>
                  <option
                    value="Wedding Planner"
                    className="bg-transparent outline-none  border-none text-subHeading"
                  >
                    Wedding Planner
                  </option>
                  <option
                    value="Community Events"
                    className="bg-transparent outline-none  border-none text-subHeading"
                  >
                    Community Events
                  </option>
                  <option
                    value="Government Events"
                    className="bg-transparent outline-none  border-none text-subHeading"
                  >
                    Government Events
                  </option>
                  <option
                    value="Exclusive Events"
                    className="bg-transparent outline-none  border-none text-subHeading"
                  >
                    Exclusive Events
                  </option>
                  <option
                    value="Bespoke Events"
                    className="bg-transparent outline-none  border-none text-subHeading"
                  >
                    Bespoke Events
                  </option>
                </select>

                {errors.EventType && (
                  <p className="loginFormError  mobile:w-11/12 tablet:w-9/12 text-[white] text-[0.8rem]">
                    This Field is required*
                  </p>
                )}
              </span>
              <span className=" flex items-start justify-center flex-col">
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="bg-transparent  outline-none border-b-2 p-1 mobile:w-full"
                  {...register("phone", {
                    required: true,
                    pattern: /^[0-9+-]+$/,
                    minLength: 10,
                    maxLength: 10,
                  })}
                />
                {errors.phone && (
                  <p className="loginFormError  mobile:w-11/12 tablet:w-9/12 text-[white] text-[0.8rem]">
                    This Field is required*
                  </p>
                )}
              </span>

              <button className="normal border-2 rounded-md p-1">
                Book Now
              </button>
            </form>
          </div>
        </div>
        <FadeInSection>
          <div
            className="w-11/12 h-fit mobile:w-11/12 mt-[-6rem] z-50"
            style={{ background: `url("${counterBackground}")` }}
          >
            <Counter />
          </div>
        </FadeInSection>
        <FadeInSection>
          <div className="w-11/12 flex items-start justify-start flex-col gap-4">
            <span>
              <h2 className="text-seconderyHeading font-semibold text-mainHeading">
                Transforming Events:
                <span className="text-mainHeading text-marqueColor">
                  &nbsp;Creating Lasting Memories &nbsp;
                </span>
              </h2>
              <p className="text-para text-marqueColor">
                Evaga Entertainment is a renowned event planning and organizing
                company located in Bangalore. Our mission began with the aim of
                offering comprehensive solutions for all your event-related
                concerns.
              </p>
            </span>
            <div className="grid grid-cols-3 gap-4 mobile:grid-cols-1">
              {imageCarddata?.map((item) => (
                <ImageCard
                  image={item?.image}
                  title={item?.title}
                  para={item?.para}
                />
              ))}
            </div>
          </div>
        </FadeInSection>
        <FadeInSection>
          <div className="w-11/12">
            <MarqueeComponet data={marqueedata} />
          </div>
        </FadeInSection>
        <FadeInSection>
          <div className="w-11/12 grid grid-cols-2 gap-4 mobile:flex mobile:flex-col-reverse mobile:gap-1">
            <div className="flex items-start justify-start flex-col gap-4">
              <h6 className="text-normalHeading text-subHeading font-semibold">
                About Evaga Entertainment
              </h6>
              <h2 className="text-seconderyHeading text-mainHeading font-semibold">
                Delivering Excellence & Creating Unforgettable Memories!
              </h2>
              <p className="text-textColor">
                At Evaga Entertainment, we transform visions into reality
                through a fusion of creativity, a relentless pursuit of
                excellence, and precise execution. For us, the focus is on both
                the minutiae and the overarching vision. We are always ready to
                go the extra mile to perfect every detail and surpassing
                expectations.
              </p>
              <p className="text-textColor">
                Crafting memorable experiences is not only our passion but is
                also ingrained in our very essence.
              </p>
              <button
                onClick={() => history("/aboutus")}
                className="button normal flex items-center justify-center border-2 px-2 py-1 rounded-md text-[#5D5D5D] hover:bg-[#5D5D5D] hover:text-[white] hover:animate-bounceIn hover:transition ease-in-out delay-150 "
              >
                <IoIosArrowForward /> Know More
              </button>
            </div>
            <div className="flex items-center justify-center">
              <img
                src={aboutSection}
                alt="aboutSection"
                className="h-[32rem] object-contain mobile:object-cover"
              />
            </div>
          </div>
        </FadeInSection>

        <div
          className="w-full h-[30rem] mobile:h-[37rem] flex items-center justify-start flex-col gap-4 py-4"
          style={{
            background: `url('${testimonailBackground}')`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
          }}
        >
          <span className="flex items-center justify-center flex-col">
            <img src={favicon} alt="favicon" />
            <h6 className="text-subHeading text-normalHeading font-semibold">
              Testimonials
            </h6>
          </span>
          <FadeInSection>
            <div className="flex items-center justify-center w-[50%] mobile:w-[85%] tablet:w-[80%]">
              <AliceCarousel
                mouseTracking
                responsive={responsive}
                disableDotsControls
                ref={carouselRef}
                renderPrevButton={({ isDisabled }) => (
                  <CustomPrevButton
                    onClick={() => carouselRef.current.slidePrev()}
                  />
                )}
                renderNextButton={({ isDisabled }) => (
                  <CustomNextButton
                    onClick={() => carouselRef.current.slideNext()}
                  />
                )}
              >
                {testimonialData?.map((item) => (
                  <TestimonailCard name={item?.name} review={item?.review} />
                ))}
              </AliceCarousel>
            </div>
          </FadeInSection>
        </div>

        <div className="w-11/12 flex items-start justify-start flex-col gap-3">
          <span>
            <h2 className="text-seconderyHeading text-mainHeading font-semibold">
              Our Signature Events Where Elegance Meets Expertise
            </h2>
            <p className="text-textColor">
              A Gallery of Our Most Exquisite Events
            </p>
          </span>

          <FadeInSection>
            <ImageCarosal />
          </FadeInSection>
        </div>
        <FadeInSection>
          <div className="w-full">
            <BackgroundImage />
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
        <FadeInSection>
          <div className="w-11/12 flex flex-col items-center justify-center gap-3">
            <FadeInSection>
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
                      creative event immersion. More than 350 leaders,
                      innovators, and top names in the wedding and event
                      industry gather for an unparalleled level of energy and
                      inspiration. Each summit offers specialized tracks based
                      on industry experience, market segment, and area of focus,
                      ensuring a tailored and enriching experience for all
                      attendees.
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
                      10+ Years
                    </p>
                    <p className="text-start border-b-2 border-[#454545] p-2 mb-2 text-[#6D6D6D]">
                      Engaging Networking
                    </p>
                    <p className="text-start border-b-2 border-[#454545] p-2 mb-2 text-[#6D6D6D]">
                      Creative Event Immersion
                    </p>
                    <p className="p-2 text-textColor leading-9">
                      Our events provide engaging networking and creative
                      immersion for weddings, corporate gatherings, government
                      functions, and community events. With 350+ attendees
                      including industry leaders, innovators, and professionals,
                      each event inspires and energizes. Tailored tracks ensure
                      valuable insights. Craft unforgettable moments, deliver
                      professional excellence, uphold standards with precision,
                      and celebrate diversity—every event is a success
                    </p>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </FadeInSection>
        <FadeInSection>
          <div className="w-full origin-center rotate-180">
            <BackgroundImage />
          </div>
        </FadeInSection>
        <FadeInSection>
          <div className="w-11/12 flex items-start justify-start flex-col">
            <MarqueeComponet data={marqueedataThird} />
          </div>
        </FadeInSection>
        <FadeInSection>
          <div className="w-11/12 grid grid-cols-2 mobile:grid-cols-1">
            <div className="mobile:hidden">
              <ImageList variant="masonry" cols={3} gap={10}>
                {itemData.map((item) => (
                  <ImageListItem key={item.img}>
                    <img
                      srcSet={`${item}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      src={`${item}?w=248&fit=crop&auto=format`}
                      alt={item.title}
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </div>
            <div className="flex items-center justify-center flex-col ml-[-3rem] mobile:ml-0 z-50">
              <div className="w-full h-fit bg-[#F3F5F6] p-[1.5rem] rounded-md flex flex-col gap-1">
                {faqData?.map((item) => (
                  <AccordionComponent
                    question={item?.question}
                    answer={item?.answer}
                  />
                ))}
              </div>
            </div>
          </div>
        </FadeInSection>
        {/* <FadeInSection>
          <div className="w-11/12">
            <MarqueeComponet data={marqueedataFourth} />
          </div>
        </FadeInSection> */}
        <FadeInSection>
          <div className="w-full">
            <ContactUs />
          </div>
        </FadeInSection>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
