import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Mission from "./components/Mission";
import Initiatives from "./components/Initiatives";
import Stats from "./components/Stats";
import Volunteers from "./components/Volunteers";
import Hero from "./components/Hero";
import OurStory from "./components/OurStory";
import Contact from "./components/Contact";
import VolunteerSection from "./components/VolunteerSection";


const Home = () => (
  <>
    
    <Hero/>
    <Mission />
    <Initiatives />
    <Stats />
    <Volunteers />
  </>
);

const App = () => {
  return (
    <BrowserRouter>
    
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story" element={<OurStory/>} />
        <Route path="/initiatives" element={<Initiatives />} />
        <Route path="/volunteers" element={<VolunteerSection/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/donate" element={<></>} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
