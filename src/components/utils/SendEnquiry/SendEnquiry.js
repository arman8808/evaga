import { Backdrop, Box, Modal, Slide, Typography } from "@mui/material";
import React, { useState } from "react";
import logo1 from "../../../assets/Images/logo-2.png";
import logo2 from "../../../assets/Images/favicon.png";
import girlImage from "../../../assets/Images/Rectangle 103.png";
import { HomePagePopup } from "../Style/Style";
import { useForm } from "react-hook-form";
function SendEnquiry({ setOpen, open }) {
  //   const [open, setOpen] = React.useState(false);
  //   const handleOpen = () => setOpen(true);
  const [loading, setLoading] = useState(false);
  const handleClose = () => setOpen(false);
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
          className="w-[800px] mobile:w-[380px] grid grid-cols-2 gap-4 mobile:grid-cols-1 tablet:w-[480px] tablet:grid-cols-1"
        >
          <div className="flex items-start justify-center flex-col gap-3">
            <Typography
              id="transition-modal-title"
              variant="h6"
              component="h2"
              className="flex items-center justify-center gap-4"
            >
              <img src={logo1} alt="logo" className="h-[5rem] object-contain" />
              <p className="text-[0.8rem] text-textColor">
                We’re an award-winning creative agency that executes exceptional
                events and brand experiences worldwide.
              </p>
            </Typography>
            <form
              className="w-full mt-4 flex items-start justify-start flex-col gap-4"
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                type="text"
                placeholder="Event"
                className="outline-none border-2 border-[#A9A9A9] w-full rounded-md pl-2 h-[2.3rem]"
                {...register("EventType", {
                  required: true,

                  validate: (value) => {
                    return !!value.trim();
                  },
                })}
              />
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
              <img src={logo2} alt="logo" className="h-[4rem] object-contain" />
              <h6 className="text-para text-marqueColor font-semibold">
                The Evaga Entertainment
              </h6>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              src={girlImage}
              alt="girlImage"
              className="rounded-md boxShadow h-[25rem] mobile:hidden tablet:hidden"
            />
          </div>
        </Box>
      </Slide>
    </Modal>
  );
}

export default SendEnquiry;
