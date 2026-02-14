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
        <Route path="/volunteer" element={<h1>Volunteer</h1>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/donate" element={<h1>Donate</h1>} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default App;
