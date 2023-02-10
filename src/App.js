import "./App.css";
import React from "react";
import Topbar from "./components/TopBar/Topbar";

import Footer from "./components/Footer/Footer";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";
import Features from "./pages/features/features";
import Services from "./pages/services/services";

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import InfoSection from "./components/InfoSection/InfoSection";
import Header from "./components/Header/Header";
import Login from "./pages/login/login";
import Careers from "./pages/careers/careers";
import Privacy from "./pages/privacy/privacy";
import Terms from "./pages/terms/terms";



function App() {
  return (
    <div className="container-box">
      <Topbar />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/features" element={<Features />} />
        <Route path="/services" element={<Services />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/privacy" element={<Privacy />}/>
        <Route path="/terms" element={<Terms />}/>
        <Route path="/login" element={<Login />} />
    </Routes>
    <InfoSection />
      <Footer />
    </div>
  );
}


export default App;
