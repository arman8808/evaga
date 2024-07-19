import React from "react";
import BlogCard from "../../utils/BlogCard/BlogCard";
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
                image={item?.image}
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
