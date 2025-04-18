import React from "react";
import Header from "./components/header/Header";
import HeroSection from "./components/herosection/HeroSection";
import Projects from "./components/projects/Projects";
import AboutUs from "./components/aboutus/AboutUs";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <AboutUs />
      <Projects />
      <div className="app">
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default App;

//rafce
