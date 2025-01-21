import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Doctors from "./components/Doctors";
// import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ServiceDetailPage from "./components/ServiceDetailPage";
import VideoSection from "./components/VideoSection";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home /> 
              <About />
              <Services />
              <Doctors />
              <VideoSection/>
              <Contact />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
        <Route path="/doctors" element={<Doctors />} />
        {/* <Route path="/blogs" element={<Blog />} /> */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
