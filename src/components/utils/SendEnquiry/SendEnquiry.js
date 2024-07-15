import { Backdrop, Box, Modal, Slide, Typography } from "@mui/material";
import React from "react";
import logo1 from "../../../assets/Images/logo-2.png";
import logo2 from "../../../assets/Images/favicon.png";
import girlImage from "../../../assets/Images/Rectangle 103.png";
import { HomePagePopup } from "../Style/Style";
function SendEnquiry({ setOpen, open }) {
  //   const [open, setOpen] = React.useState(false);
  //   const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
          className="w-[800px] mobile:w-[380px] grid grid-cols-2 gap-4 mobile:grid-cols-1"
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
            <form className="w-full mt-4 flex items-start justify-start flex-col gap-4">
              <input
                type="text"
                placeholder="Event"
                className="outline-none border-2 border-[#A9A9A9] w-full rounded-md pl-2 h-[2.3rem]"
              />
              <input
                type="text"
                placeholder="Contact Number"
                className="outline-none border-2 border-[#A9A9A9] w-full rounded-md pl-2 h-[2.3rem]"
              />
              <button className="w-full h-[2.3rem] outline-none border-2 border-[#A9A9A9] rounded-md text-[#A9A9A9]">
                Enquiry Now
              </button>
            </form>
            <div className="w-full mt-3 flex items-center justify-between">
              <p>+91 9044542535</p>
              <p>test@gmail.com</p>
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
              className="rounded-md boxShadow h-[25rem] mobile:hidden"
            />
          </div>
        </Box>
      </Slide>
    </Modal>
  );
}

export default SendEnquiry;
