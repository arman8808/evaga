import React from "react";
import BlogCard from "../../utils/BlogCard/BlogCard";
import background from "../../../assets/Images/Frame 64.png";
import background1 from "../../../assets/Images/event image.png";
import background2 from "../../../assets/Images/Frame 65.png";
import background3 from "../../../assets/Images/Frame 66.png";
import background4 from "../../../assets/Images/Frame 67.png";
import background5 from "../../../assets/Images/Frame 68.png";
import background6 from "../../../assets/Images/Frame 69.png";
import Footer from "../../layout/Footer/Footer";
function Blog() {
  return (
    <>
      <div className="w-full flex items-center justify-center flex-col gap-[3rem]">
        <div className="w-10/12 gap-4 grid grid-cols-2 mobile:grid-cols-1">
          <div>
            <BlogCard
              image={background}
              title={"Planning the Perfect Wedding"}
              para={
                "Discover essential tips and creative ideas to make your wedding planning process smooth"
              }
            />
          </div>
          <div className="w-full gap-4 grid grid-cols-1">
            <BlogCard
              image={background1}
              title={"Unique Wedding Themes"}
              para={
                "Discover essential tips and creative ideas to make your wedding planning process smooth"
              }
            />
            <BlogCard
              image={background2}
              title={"Unique Wedding Themes"}
              para={
                "Discover essential tips and creative ideas to make your wedding planning process smooth"
              }
            />
          </div>
        </div>
        <div className="w-10/12 gap-4 grid grid-cols-2  mobile:grid-cols-1">
          <BlogCard
            image={background3}
            title={"Planning the Perfect Wedding"}
            para={
              "Discover essential tips and creative ideas to make your wedding planning process smooth"
            }
          />
          <BlogCard
            image={background4}
            title={"Planning the Perfect Wedding"}
            para={
              "Discover essential tips and creative ideas to make your wedding planning process smooth"
            }
          />
          <BlogCard
            image={background5}
            title={"Planning the Perfect Wedding"}
            para={
              "Discover essential tips and creative ideas to make your wedding planning process smooth"
            }
          />
          <BlogCard
            image={background6}
            title={"Planning the Perfect Wedding"}
            para={
              "Discover essential tips and creative ideas to make your wedding planning process smooth"
            }
          />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Blog;
