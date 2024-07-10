import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/pages/HomePage/HomePage";
import AboutUs from "./components/pages/AboutUs/AboutUs";
import Service from "./components/pages/Service/Service";
import Gallery from "./components/pages/Gallery/Gallery";
import Career from "./components/pages/Career/Career";
import Contact from "./components/pages/Contact/Contact";
import Navbar from "./components/layout/Navbar/Navbar";
import Footer from "./components/layout/Footer/Footer";
import GoToTop from "./GoToTop";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <GoToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/service" element={<Service />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contactus" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
