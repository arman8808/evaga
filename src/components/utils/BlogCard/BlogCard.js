import React from "react";
import background from "../../../assets/Images/Frame 64.png";
import { useNavigate } from "react-router-dom";
function BlogCard({ image, title, para }) {
  const history = useNavigate();
  return (
    <div
      className="blur-effect  w-full  h-full min-h-[15rem] p-4 flex items-start justify-end flex-col text-[white] rounded-md gap-2"
      style={{
        background: `url('${image ? image : background}')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <h6>{title ? title : "Planning the Perfect Wedding"}</h6>
      <p className="text-[white]">
        {para
          ? para
          : "Discover essential tips and creative ideas to make your wedding planning process smooth"}
      </p>
      <button
        className="buttonNormal border-[white]"
        style={{ borderColor: "white" }}
        onClick={() => history(`/blog/Planning the Perfect Wedding`)}
      >
        Know More
      </button>
    </div>
  );
}

export default BlogCard;