import React from "react";
import image from "../../../assets/Images/Frame 64.png";
import Footer from "../../layout/Footer/Footer";
function SingleBlog() {
  return (
    <>
      <div className=" w-full flex items-center flex-col gap-[3rem] mobile:gap-[2rem]">
        <div className="w-11/12 grid grid-cols-3 gap-4  mobile:grid-cols-1">
          <img src={image} alt="banner" className="col-span-2" />
          <div className="flex items-start justify-end flex-col gap-3">
            <h2>Planning the Perfect Wedding</h2>
            <p>
              Discover essential tips and creative ideas to make your wedding
              planning process smooth
            </p>
            <p>
              Discover essential tips and creative ideas to make your wedding
              planning process smooth
            </p>
          </div>
        </div>
        <div className="w-11/12 grid grid-cols-1 gap-4">
          <p>
            Discover essential tips and creative ideas to make your wedding
            planning process smooth and enjoyable. From budget-friendly hacks to
            timeline management, we've got you covered."
          </p>{" "}
          <p>
            Discover essential tips and creative ideas to make your wedding
            planning process smooth and enjoyable. From budget-friendly hacks to
            timeline management, we've got you covered."
          </p>{" "}
          <p>
            Discover essential tips and creative ideas to make your wedding
            planning process smooth and enjoyable. From budget-friendly hacks to
            timeline management, we've got you covered."
          </p>{" "}
          <p>
            Discover essential tips and creative ideas to make your wedding
            planning process smooth and enjoyable. From budget-friendly hacks to
            timeline management, we've got you covered."
          </p>{" "}
          <p>
            Discover essential tips and creative ideas to make your wedding
            planning process smooth and enjoyable. From budget-friendly hacks to
            timeline management, we've got you covered."
          </p>{" "}
          <p>
            Discover essential tips and creative ideas to make your wedding
            planning process smooth and enjoyable. From budget-friendly hacks to
            timeline management, we've got you covered."
          </p>{" "}
          <p>
            Discover essential tips and creative ideas to make your wedding
            planning process smooth and enjoyable. From budget-friendly hacks to
            timeline management, we've got you covered."
          </p>{" "}
          <p>
            Discover essential tips and creative ideas to make your wedding
            planning process smooth and enjoyable. From budget-friendly hacks to
            timeline management, we've got you covered."
          </p>{" "}
          <p>
            Discover essential tips and creative ideas to make your wedding
            planning process smooth and enjoyable. From budget-friendly hacks to
            timeline management, we've got you covered."
          </p>{" "}
          <p>
            Discover essential tips and creative ideas to make your wedding
            planning process smooth and enjoyable. From budget-friendly hacks to
            timeline management, we've got you covered."
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SingleBlog;
