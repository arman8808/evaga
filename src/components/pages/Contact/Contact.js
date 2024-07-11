import React from "react";
import aboutus from "../../../assets/Images/wedding  pic about us.png";
import ContactUs from "../../layout/ContactUs/ContactUs";
import ImageCarosal from "../../utils/ImageCarosal/ImageCarosal";
import Footer from "../../layout/Footer/Footer";
function Contact() {
  return (
    <>
      <div className="mt-[-8rem] w-full flex items-center flex-col gap-[3rem] mobile:gap-[2rem]">
        <div className="w-full h-[100vh] flex items-center justify-center flex-col relative ">
          <img
            src={aboutus}
            alt="aboutus"
            className="w-full h-full object-cover"
          />

          <div className="absolute flex items-center justify-center flex-col w-[50%] mobile:w-[90%] text-[white] text-center gap-3">
            <h1 className="text-seconderyHeading font-bold">
              Experience Luxury and Elegance in Every Event
            </h1>
            <p className="text-[white] text-normalHeading font-semibold">
              Contact Us
            </p>
          </div>
        </div>
        <div className="w-full">
          <ContactUs />
        </div>
        <div className="w-11/12 rounded-md">
          <iframe
            title="Address"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.6694449699194!2d77.63031727460319!3d12.928954415812832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1460d1af3721%3A0x7547770171fb3d5!2sWeWork!5e0!3m2!1sen!2sin!4v1720599166209!5m2!1sen!2sin"
            style={{ width: "100%", height: "20rem" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="rounded-md"
          ></iframe>
        </div>
        <div className="w-11/12 flex items-start justify-start flex-col gap-3">
          <ImageCarosal />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
