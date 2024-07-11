import React from "react";
import background from "../../../assets/Images/Frame.png";
import { FaLongArrowAltRight } from "react-icons/fa";
function ContactUs() {
  return (
    <div
      className="w-full h-[40rem] flex items-center justify-center"
      style={{
        background: `url("${background}")`,
        backgroundColor: "#110015",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <form className="w-11/12 flex items-center justify-center flex-col p-4 pt-[3rem] gap-4">
        <h2 className="text-white text-seconderyHeading">Contact Us</h2>
        <input
          type="text"
          placeholder="Event Type"
          className="w-6/12 border-b-2 border-[white] bg-transparent pb-3 text-[white] outline-none mb-4 mobile:w-11/12"
        />
        <input
          type="text"
          placeholder="Full  Name*"
          className="w-6/12 border-b-2 border-[white] bg-transparent pb-3 text-[white] outline-none mb-4 mobile:w-11/12"
        />
        <input
          type="text"
          placeholder="Email"
          className="w-6/12 border-b-2 border-[white] bg-transparent pb-3 text-[white] outline-none mb-4 mobile:w-11/12"
        />{" "}
        <input
          type="text"
          placeholder="Mobile Number * "
          className="w-6/12 border-b-2 border-[white] bg-transparent pb-3 text-[white] outline-none mb-4 mobile:w-11/12"
        />
        <input
          type="text"
          placeholder="Write your comment here *"
          className="w-6/12 border-b-2 border-[white] bg-transparent pb-3 text-[white] outline-none mb-4 mobile:w-11/12"
        />
        <span className="flex items-center justify-start w-6/12 gap-2 text-[white] mobile:w-11/12">
          <input type="radio" />{" "}
          <p>
            I confirm that I have read and agree with the Terms &
            Conditions and Privacy Policy*
          </p>
        </span>
        <span className="flex items-center justify-start w-6/12 gap-2 text-[white] mobile:w-11/12 mobile:justify-center">
          <button className="button normal border-[1px] py-2 px-2 rounded-md flex items-center justify-center gap-1">
            Send Enquiry <FaLongArrowAltRight />
          </button>
        </span>
      </form>
    </div>
  );
}

export default ContactUs;
