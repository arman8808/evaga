import React, { useState } from "react";
import background from "../../../assets/Images/Frame.png";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useForm } from "react-hook-form";
function ContactUs() {
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
      const whatsappMessage = `
      *Evaga Entertainment Enquiry*
      *Event Type:* ${data.EventType}
      *Name:* ${data.name}
      *Phone Number:* ${data.phone}
      *Email Address:* ${data.email}
      *Message:*
          ${data.message}
    
      We look forward to making your event a success! 
    `;
      const whatsappURL = `https://wa.me/+918296157611?text=${encodeURIComponent(
        whatsappMessage
      )}`;
      window.open(whatsappURL, "_blank");
      reset({
        phone: "",
        EventType: "",
      });
    }, 1000);
  };
  return (
    <div
      className="w-full min-h-[40rem] flex items-center justify-center"
      style={{
        background: `url("${background}")`,
        backgroundColor: "#110015",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <form
        className="w-11/12 flex items-center justify-center flex-col p-4 pt-[3rem] gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-white text-seconderyHeading">Contact Us</h2>
        <input
          type="text"
          placeholder="Event Type"
          className="w-6/12 border-b-2 border-[white] bg-transparent pb-3 text-[white] outline-none mb-4 mobile:w-11/12 tablet:w-9/12"
          {...register("EventType", {
            required: true,

            validate: (value) => {
              return !!value.trim();
            },
          })}
        />
        {errors.EventType && (
          <p className="loginFormError w-6/12 mobile:w-11/12 tablet:w-9/12 text-[red]">
            Please Enter Valid Event
          </p>
        )}
        <input
          type="text"
          placeholder="Full  Name*"
          className="w-6/12 border-b-2 border-[white] bg-transparent pb-3 text-[white] outline-none mb-4 mobile:w-11/12 tablet:w-9/12"
          {...register("name", {
            required: true,
            maxLength: 30,
            validate: (value) => {
              return !!value.trim();
            },
          })}
        />
        {errors.name && (
          <p className="loginFormError w-6/12 mobile:w-11/12 tablet:w-9/12 text-[red]">
            Please Enter Valid Name
          </p>
        )}
        <input
          type="text"
          placeholder="Email"
          className="w-6/12 border-b-2 border-[white] bg-transparent pb-3 text-[white] outline-none mb-4 mobile:w-11/12 tablet:w-9/12"
          {...register("email", {
            required: true,
            pattern:
              /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          })}
        />{" "}
        {errors.email && (
          <p className="loginFormError w-6/12 mobile:w-11/12 tablet:w-9/12 text-[red]">
            Please Enter Valid Email
          </p>
        )}
        <input
          type="text"
          placeholder="Mobile Number * "
          className="w-6/12 border-b-2 border-[white] bg-transparent pb-3 text-[white] outline-none mb-4 mobile:w-11/12 tablet:w-9/12"
          {...register("phone", {
            required: true,
            pattern: /^[0-9+-]+$/,
            minLength: 10,
            maxLength: 10,
          })}
        />
        {errors.phone && (
          <p className="loginFormError w-6/12 mobile:w-11/12 tablet:w-9/12 text-[red]">
            Please Enter Valid Number
          </p>
        )}
        <input
          type="text"
          placeholder="Write your comment here "
          className="w-6/12 border-b-2 border-[white] bg-transparent pb-3 text-[white] outline-none mb-4 mobile:w-11/12 tablet:w-9/12"
          {...register("message", {})}
        />
        <span className="flex items-center justify-start w-6/12 gap-2 text-[white] mobile:w-11/12 tablet:w-9/12 mobile:justify-center">
          {!loading ? (
            <button className="button normal border-[1px] py-2 px-2 rounded-md flex items-center justify-center gap-1 hover:animate-bounceIn">
              Send Enquiry <FaLongArrowAltRight />
            </button>
          ) : (
            <div className=" flex items-center justify-center">
              <span class="loader"></span>
            </div>
          )}
        </span>
      </form>
    </div>
  );
}

export default ContactUs;
