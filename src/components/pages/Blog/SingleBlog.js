import React, { useEffect, useState } from "react";
import image from "../../../assets/Images/Frame 64.png";
import Footer from "../../layout/Footer/Footer";
import FadeInSection from "../../utils/FadeInSection/FadeInSection";
import { useParams } from "react-router-dom";
import { blogData } from "../../../blogdata";
function SingleBlog() {
  const { Id } = useParams();
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    const filter = blogData?.filter((item) => item?.title === Id);
    setBlog(filter && filter);
  }, [Id]);

  return (
    <>
      <div className=" w-full flex items-center flex-col gap-[3rem] mobile:gap-[2rem]">
        <FadeInSection>
          <div className="w-11/12 grid grid-cols-3 gap-4  mobile:grid-cols-1 tablet:grid-cols-1">
            <img src={image} alt="banner" className="col-span-2" />
            <div className="flex items-start justify-end flex-col gap-3">
              <h2 className="text-normalHeading font-semibold">
                {blog?.[0]?.title
                  ? blog?.[0]?.title
                  : "Planning the Perfect Wedding"}
              </h2>
              <p className="leading-7">
                {blog?.[0]?.decsription
                  ? blog?.[0]?.decsription
                  : " Discover essential tips and creative ideas to make your wedding planning process smooth"}
              </p>
            </div>
          </div>
        </FadeInSection>
        <FadeInSection>
          <div className="w-11/12 grid grid-cols-1 gap-4">
            {blog?.[0]?.subTitle?.map((item) => (
              <div className="w-11/12 grid grid-cols-1 gap-2">
                <h6 className="text-normalHeading font-semibold">
                  {" "}
                  {item?.title}
                </h6>
                <p>{item?.subDes}</p>
              </div>
            ))}
          </div>
        </FadeInSection>
      </div>
      <Footer />
    </>
  );
}

export default SingleBlog;
