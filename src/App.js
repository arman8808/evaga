import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar/Navbar";
import GoToTop from "./GoToTop";
import { lazy, Suspense, useState } from "react";
import Loader from "./components/utils/Loader/Loader";
import SendEnquiry from "./components/utils/SendEnquiry/SendEnquiry";
import TermsAndCondition from "./components/pages/TermsAndCondition/TermsAndCondition";
import PrivacyPolicy from "./components/pages/PrivacyPolicy/PrivacyPolicy";
import wahtsappIcon from "./assets/Images/icons8-whatsapp.svg";

const HomePage = lazy(() => import("./components/pages/HomePage/HomePage"));
const AboutUs = lazy(() => import("./components/pages/AboutUs/AboutUs"));
const Service = lazy(() => import("./components/pages/Service/Service"));
const Gallery = lazy(() => import("./components/pages/Gallery/Gallery"));
const Career = lazy(() => import("./components/pages/Career/Career"));
const Contact = lazy(() => import("./components/pages/Contact/Contact"));
const Blog = lazy(() => import("./components/pages/Blog/Blog"));
const SingleBlog = lazy(() => import("./components/pages/Blog/SingleBlog"));
function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="App relative">
      <BrowserRouter>
        <Navbar />
        <GoToTop />
        <Link to="https://wa.me/+918296157611" target="_blank">
          <img
            src={wahtsappIcon}
            alt="wahtsappIcon"
            className="whatsapp-icon fixed  left-4  bottom-3 z-50 h-[3.5rem] hover:scale-125 transition delay-150 duration-400 ease-in-out cursor-pointer"
          />
        </Link>

        <button
          onClick={() => setOpen(true)}
          className="button-normal border-marqueColor border-2 outline-none rounded-md py-1 px-2 fixed bg-[white] z-50 bottom-3 right-4 "
        >
          Make an Enquiry
        </button>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<Loader />}>
                <HomePage />
              </Suspense>
            }
          />
          <Route
            path="/aboutus"
            element={
              <Suspense fallback={<Loader />}>
                <AboutUs />
              </Suspense>
            }
          />
          <Route
            path="/service"
            element={
              <Suspense fallback={<Loader />}>
                <Service />
              </Suspense>
            }
          />
          <Route
            path="/gallery"
            element={
              <Suspense fallback={<Loader />}>
                <Gallery />
              </Suspense>
            }
          />
          <Route
            path="/career"
            element={
              <Suspense fallback={<Loader />}>
                <Career />
              </Suspense>
            }
          />
          <Route
            path="/contactus"
            element={
              <Suspense fallback={<Loader />}>
                <Contact />
              </Suspense>
            }
          />
          <Route
            path="/blog"
            element={
              <Suspense fallback={<Loader />}>
                <Blog />
              </Suspense>
            }
          />
          <Route
            path="/blog/:Id"
            element={
              <Suspense fallback={<Loader />}>
                <SingleBlog />
              </Suspense>
            }
          />{" "}
          <Route
            path="/termandcondition"
            element={
              <Suspense fallback={<Loader />}>
                <TermsAndCondition />
              </Suspense>
            }
          />
          <Route
            path="/privacypolicy"
            element={
              <Suspense fallback={<Loader />}>
                <PrivacyPolicy />
              </Suspense>
            }
          />
        </Routes>
        <SendEnquiry setOpen={setOpen} open={open} />
      </BrowserRouter>
    </div>
  );
}

export default App;
