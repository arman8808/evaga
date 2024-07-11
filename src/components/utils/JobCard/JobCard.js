import React from "react";
import logo from "../../../assets/Images/favicon.png";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { Backdrop, Box, Fade, Modal, Typography } from "@mui/material";
function JobCard() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    // width: 800,
    bgcolor: "background.paper",
    border: "0px solid transparent",
    boxShadow: 24,
    p: 4,
    outline: "none",
    borderRadius: "5px",
    overflowY: "scroll",
    zIndex: "9999999",
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className="border-2 rounded-md p-2 flex items-start justify-start gap-2">
      <img src={logo} alt="logo" className="object-contain h-[4rem]" />
      <div className="pt-3 flex_start flex-col gap-2">
        <h6 className="text-normalHeading text-mainHeading font-semibold">
          UI Web Designer
        </h6>
        <p>Key highlights, quotes, or a brief story you want to share.</p>
        <button
          className="buttonNormal flex items-center justify-center gap-2"
          onClick={handleOpen}
        >
          Apply <FaArrowUpRightFromSquare />
        </button>
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
        <Fade in={open}>
          <Box sx={style} className="w-[800px] h-[600px] mobile:w-[90%]">
            <Typography
              id="transition-modal-title"
              variant="h6"
              component="h2"
              className="border-b-2 pb-2 border-mainHeading"
            >
              Delivery Job Application Form.
            </Typography>
            <form className="flex_start flex-col gap-4 py-3 w-full">
              <div className="flex_start flex-col gap-2 w-full">
                <p>Full Name *</p>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full border-2 h-[2.5rem] rounded-full px-2 outline-none"
                />
              </div>{" "}
              <div className="flex_start flex-col gap-2 w-full">
                <p>Email *</p>
                <input
                  type="text"
                  placeholder="Email"
                  className="w-full border-2 h-[2.5rem] rounded-full px-2 outline-none"
                />
              </div>{" "}
              <div className="flex_start flex-col gap-2 w-full">
                <p>Phone Number *</p>
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full border-2 h-[2.5rem] rounded-full px-2 outline-none"
                />
              </div>
              <div className="w-full grid grid-cols-2 gap-3 mobile:grid-cols-1">
                <div className="flex_start flex-col gap-2 w-full">
                  <p>Job Location*</p>
                  <input
                    type="text"
                    placeholder="Job Location"
                    className="w-full border-2 h-[2.5rem] rounded-full px-2 outline-none"
                  />
                </div>
                <div className="flex_start flex-col gap-2 w-full">
                  <p>Employment Type*</p>
                  <select
                    className="w-full border-2 h-[2.5rem] rounded-full px-2 outline-none"
                    required
                  >
                    <option>Select One</option>
                    <option value="Full Time">Full Time</option>
                    <option value="Part Time">Part Time</option>
                    <option value="Internship">Internship</option>
                  </select>
                </div>
              </div>
              <div className="flex items-center justify-start gap-2 mobile:flex-col-reverse">
                <button className="buttonNormal rounded-full">Apply Now</button>
                <p>
                  By Clicking{" "}
                  <span className="text-textColor font-semibold">
                    Send Application
                  </span>
                  , You aAree to our Privacy Policy, and Cookie Policy.
                </p>
              </div>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default JobCard;
