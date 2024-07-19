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
import FadeInSection from "../../utils/FadeInSection/FadeInSection";
import { blogData } from "../../../blogdata";
function Blog() {
  return (
    <>
      <div className="w-full flex items-center justify-center flex-col gap-[3rem]">
        <FadeInSection>
          <div className="w-10/12 gap-4 grid grid-cols-2 mobile:grid-cols-1 tablet:grid-cols-1">
            <div>
              <BlogCard
                image={blogData?.[0]?.image}
                title={blogData?.[0]?.title}
                para={blogData?.[0]?.decsription}
              />
            </div>
            <div className="w-full gap-4 grid grid-cols-1">
              <BlogCard
                image={blogData?.[1]?.image}
                title={blogData?.[1]?.title}
                para={blogData?.[1]?.decsription}
              />
              <BlogCard
                image={blogData?.[2]?.image}
                title={blogData?.[2]?.title}
                para={blogData?.[2]?.decsription}
              />
            </div>
          </div>
        </FadeInSection>
        <FadeInSection>
          <div className="w-10/12 gap-4 grid grid-cols-2  mobile:grid-cols-1 tablet:grid-cols-1">
            {blogData?.slice(3)?.map((item) => (
              <BlogCard
                image={background3}
                title={item?.title}
                para={item?.decsription}
              />
            ))}
          </div>
        </FadeInSection>
      </div>
      <Footer />
    </>
  );
}

export default Blog;
