import { Backdrop, Box, Fade, Modal, Typography } from "@mui/material";
import React from "react";
import logo1 from "../../../assets/Images/logo-2.png";
function ImageCard({ image, title, para }) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    border: "0px solid transparent",
    boxShadow: 24,
    p: 4,
    outline: "none",
    borderRadius: "8px",
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="flex items-center justify-center relative imageCard rounded-md">
      <img src={image} alt="work which we do" className="rounded-md" />
      <span className="rounded-md absolute blur-effect w-full h-full flex items-center justify-center flex-col text-center text-[white] cardInnerText gap-2">
        <h6 className="text-para font-[700]">{title}</h6>
        <p className="text-[0.8rem] font-medium text-[white]">{para}</p>
        <button
          className="bg-white outline-none text-mainHeading py-1 px-2 rounded-md hover:animate-bounceIn"
          onClick={() => handleOpen()}
        >
          Send Enquiry
        </button>
      </span>
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
        <Fade in={open}>
          <Box sx={style} className="w-[450px] mobile:w-[380px]">
            <Typography
              id="transition-modal-title"
              variant="h6"
              component="h2"
              className="flex items-center justify-center gap-4"
            >
              <img src={logo1} alt="logo" className="h-[5rem] object-contain" />
              <p className="text-para text-textColor">
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
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default ImageCard;
