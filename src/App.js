import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar/Navbar";
import Footer from "./components/layout/Footer/Footer";
import GoToTop from "./GoToTop";
import { lazy, Suspense } from "react";
import Loader from "./components/utils/Loader/Loader";
const HomePage = lazy(() => import("./components/pages/HomePage/HomePage"));
const AboutUs = lazy(() => import("./components/pages/AboutUs/AboutUs"));
const Service = lazy(() => import("./components/pages/Service/Service"));
const Gallery = lazy(() => import("./components/pages/Gallery/Gallery"));
const Career = lazy(() => import("./components/pages/Career/Career"));
const Contact = lazy(() => import("./components/pages/Contact/Contact"));
const Blog = lazy(() => import("./components/pages/Blog/Blog"));
const SingleBlog = lazy(() => import("./components/pages/Blog/SingleBlog"));
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <GoToTop />
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
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
