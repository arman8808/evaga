import React, { useRef } from "react";
import heroVideo from "../../../assets/Videos/herosection.mp4";
import poster from "../../../assets/Images/Screenshot 2024-07-08 171201.png";
import Counter from "../../utils/Counter/Counter";
import img from "../../../assets/Images/card top sev.png";
import img1 from "../../../assets/Images/card top sev-2.png";
import img2 from "../../../assets/Images/card top sev-4.png";
import img3 from "../../../assets/Images/card top sev-5.png";
import img4 from "../../../assets/Images/card top sev-1.png";
import img5 from "../../../assets/Images/card top sev-3.png";
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
function HomePage() {
  const imageCarddata = [
    {
      image: img,
      title: "Elegant Weddings",
      para: "Crafting Unforgettable Moments of Love and Joy",
    },
    {
      image: img1,
      title: "Elegant Weddings",
      para: "Crafting Unforgettable Moments of Love and Joy",
    },
    {
      image: img2,
      title: "Elegant Weddings",
      para: "Crafting Unforgettable Moments of Love and Joy",
    },
    {
      image: img3,
      title: "Elegant Weddings",
      para: "Crafting Unforgettable Moments of Love and Joy",
    },
    {
      image: img4,
      title: "Elegant Weddings",
      para: "Crafting Unforgettable Moments of Love and Joy",
    },
    {
      image: img5,
      title: "Elegant Weddings",
      para: "Crafting Unforgettable Moments of Love and Joy",
    },
  ];
  const marqueedata = [
    {
      image: favicon,
      title: "The Evaga Weddings ",
    },
    {
      image: favicon,
      title: "The Evaga Weddings ",
    },
    {
      image: favicon,
      title: "The Evaga Weddings ",
    },
    {
      image: favicon,
      title: "The Evaga Weddings ",
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
    console.log(data);
  };
  return (
    <>
      <div className="mt-[-8rem] w-full flex items-center flex-col gap-[3rem] mobile:gap-[2rem]">
        <div className="w-full h-[100vh] flex items-center justify-center flex-col relative ">
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
          <div className="absolute flex items-center justify-center flex-col w-[50%] mobile:w-[90%] md:w-[70%] tablet:w-[90%] text-[white] text-center gap-3">
            <h1 className="text-seconderyHeading font-bold">
              Experience Luxury and Elegance in Every Event
            </h1>
            <p className="text-[white]">
              Lorem ipsum dolor sit amet consectetur adipiscing elitsed eiusmod
              tempor incididunt dolore magna ali scelerisque in dictum non
              consectetur.
            </p>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="glass-effect flex items-center justify-center gap-2 mobile:flex-col mobile:w-11/12 md:w-[100%] liner_grident_border"
            >
              <input
                type="text"
                placeholder="Event"
                className="bg-transparent  outline-none border-b-2 p-1 mobile:w-full"
                {...register("EventType", {
                  required: true,

                  validate: (value) => {
                    return !!value.trim();
                  },
                })}
              />
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
              <button className="normal border-2 rounded-md p-1">
                Book Now
              </button>
            </form>
          </div>
        </div>
        <div
          className="w-10/12 h-fit mobile:w-11/12 mt-[-6rem] z-50"
          style={{ background: `url("${counterBackground}")` }}
        >
          <Counter />
        </div>
        <div className="w-11/12 flex items-start justify-start flex-col gap-4">
          <span>
            <h2 className="text-seconderyHeading font-semibold text-mainHeading">
              Creators of luxury
              <span className="text-mainHeading text-marqueColor">
                &nbsp; events and experiences&nbsp;
              </span>
              that are legendary
            </h2>
            <p className="text-para text-marqueColor">
              We’re an award-winning creative agency that executes exceptional
              events and brand experiences worldwide.
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
        <div className="w-11/12">
          <MarqueeComponet data={marqueedata} />
        </div>
        <div className="w-11/12 grid grid-cols-2 gap-4 mobile:flex mobile:flex-col-reverse mobile:gap-1">
          <div className="flex items-start justify-start flex-col gap-4">
            <h6 className="text-normalHeading text-subHeading font-semibold">
              ABOUT Consession
            </h6>
            <h2 className="text-seconderyHeading text-mainHeading font-semibold">
              Delivering Excellence and Class in Every Detail
            </h2>
            <p className="text-textColor">
              Lorem ipsum dolor sit amet consectetur adipiscing elitsed eiusmod
              tempor incididunt dolore magna ali Scelerisque in dictum non
              consectetur eget lobortis mattis aliqua sapien sagittis aliquam
              malesuada bibendum arcu vitae.
            </p>
            <p className="text-textColor">
              Lorem ipsum dolor sit amet consectetur adipiscing elitsed eiusmod
              tempor incididunt dolore magna ali Scelerisque in dictum non
              consectetur eget lobortis mattis aliqua sapien sagittis aliquam
              malesuada bibendum arcu vitae.
            </p>
            <button className="button normal flex items-center justify-center border-2 px-2 py-1 rounded-md text-[#5D5D5D]">
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
        <div
          className="w-full h-[30rem] flex items-center justify-start flex-col gap-4 py-4"
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
              <TestimonailCard />
              <TestimonailCard />
              <TestimonailCard />
              <TestimonailCard />
            </AliceCarousel>
          </div>
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
          <ImageCarosal />
        </div>
        <div className="w-full">
          <BackgroundImage />
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
        <div className="w-full origin-center rotate-180">
          <BackgroundImage />
        </div>
        <div className="w-11/12 flex items-start justify-start flex-col">
          <MarqueeComponet data={marqueedataThird} />
        </div>
        <div className="w-11/12 grid grid-cols-2 mobile:grid-cols-1">
          <div className="mobile:hidden">
            <ImageList variant="masonry" cols={3} gap={8}>
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
              <AccordionComponent />
              <AccordionComponent />
              <AccordionComponent />
              <AccordionComponent />
              <AccordionComponent />
              <AccordionComponent />
              <AccordionComponent />
            </div>
          </div>
        </div>
        <div className="w-11/12">
          <MarqueeComponet data={marqueedataFourth} />
        </div>

        <div className="w-full">
          <ContactUs />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
