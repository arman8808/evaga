import React, { useState } from "react";
import aboutus from "../../../assets/Images/wedding  pic about us2.png";
import aboutus1 from "../../../assets/Images/Rectangle 99.png";
import aboutus2 from "../../../assets/Images/Rectangle 100.png";
import aboutus3 from "../../../assets/Images/Rectangle 101.png";
import service from "../../../assets/Images/Group 52.png";
import Rectangle from "../../../assets/Images/Rectangle 99.png";
import BannerCard from "../../utils/BannerCard/BannerCard";
import ImageCarosal from "../../utils/ImageCarosal/ImageCarosal";
import Footer from "../../layout/Footer/Footer";
import FadeInSection from "../../utils/FadeInSection/FadeInSection";
import { Backdrop, Box, Modal, Slide, Typography } from "@mui/material";
import logo1 from "../../../assets/Images/logo-2.png";
import logo from "../../../assets/Images/favicon.png";
import girlImage from "../../../assets/Images/Rectangle 103.png";
import { HomePagePopup } from "../../utils/Style/Style";
import { useForm } from "react-hook-form";
function Service() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    setLoading(true);
    console.log(data);
    setTimeout(() => {
      setLoading(false);
      reset({
        phone: "",
        EventType: "",
      });
      handleClose();
    }, 1000);
  };

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
                <h3 className="text-mainHeading text-normalHeading font-normalHeading">
                  Exclusive Events
                </h3>
                <p>
                  At Evaga, we specialize in designing exclusive events by
                  carefully tailoring every detail, including venue choice,
                  decor, entertainment, and catering, to align with our clients'
                  distinctive vision and preferences. Our strength lies in our
                  capacity to grasp and foresee the unique needs and
                  expectations of each client, ensuring that every element is
                  meticulously customized to deliver an exceptional and
                  profoundly memorable experience.
                </p>
              </div>{" "}
              <div className="flex items-start justify-start gap-2 flex-col">
                <h3 className="text-mainHeading text-normalHeading font-normalHeading">
                  Bespoke Events
                </h3>
                <p>
                  Our team excels at grasping the unique goals and audience
                  characteristics of each event, adjusting our strategy to
                  maximize impact and engagement. By utilizing our broad network
                  of industry contacts, creative concepts, and advanced
                  technologies, we create remarkable experiences that captivate
                  audiences and surpass expectations.
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
                <button
                  onClick={handleOpen}
                  className="buttonNormal hover:bg-[#5D5D5D] hover:text-[white] hover:animate-bounceIn hover:transition ease-in-out delay-150"
                >
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
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Slide direction="up" in={open}>
          <Box
            sx={HomePagePopup}
            className="w-[800px] mobile:w-[380px] grid grid-cols-2 gap-4 mobile:grid-cols-1"
          >
            <div className="flex items-start justify-center flex-col gap-3">
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
                className="flex items-center justify-center gap-4"
              >
                <img
                  src={logo1}
                  alt="logo"
                  className="h-[5rem] object-contain"
                />
                <p className="text-[0.8rem] text-textColor">
                  We’re an award-winning creative agency that executes
                  exceptional events and brand experiences worldwide.
                </p>
              </Typography>
              <form
                className="w-full mt-4 flex items-start justify-start flex-col gap-4"
                onSubmit={handleSubmit(onSubmit)}
              >
                <select
                  className="bg-transparent outline-none   p-1 w-full  mobile:w-full outline-none border-2 border-[#A9A9A9] w-full rounded-md pl-2 h-[2.3rem] "
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
                  <p className="loginFormError  mobile:w-11/12 tablet:w-9/12 text-[red] text-[0.8rem]">
                    This Field is required*
                  </p>
                )}
                <input
                  type="text"
                  placeholder="Contact Number"
                  className="outline-none border-2 border-[#A9A9A9] w-full rounded-md pl-2 h-[2.3rem]"
                  {...register("phone", {
                    required: true,
                    pattern: /^[0-9+-]+$/,
                    minLength: 10,
                    maxLength: 10,
                  })}
                />
                {errors.phone && (
                  <p className="loginFormError  mobile:w-11/12 tablet:w-9/12 text-[red] text-[0.8rem]">
                    This Field is required*
                  </p>
                )}
                {!loading ? (
                  <button className="w-full h-[2.3rem] outline-none border-2 border-[#A9A9A9] rounded-md text-[#A9A9A9]">
                    Enquiry Now
                  </button>
                ) : (
                  <div className="w-full flex items-center justify-center">
                    <span class="loader"></span>
                  </div>
                )}
              </form>
              <div className="w-full mt-3 flex items-center justify-between text-[0.8rem]">
                <p>+91 8296157611</p>
                <p>info@evagaentertainment.com</p>
              </div>
              <div className="w-full mt-3 flex items-center justify-center gap-1">
                <img
                  src={logo}
                  alt="logo"
                  className="h-[4rem] object-contain"
                />
                <h6 className="text-para text-marqueColor font-semibold">
                  The Evaga Entertainment
                </h6>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <img
                src={girlImage}
                alt="girlImage"
                className="rounded-md boxShadow h-[25rem] mobile:hidden"
              />
            </div>
          </Box>
        </Slide>
      </Modal>
      <Footer />
    </>
  );
}

export default Service;
