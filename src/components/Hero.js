import React from "react";
import Navbar from "./Navbar";
import heroImg from './Images/hero-img.png';
import Button from "./Button";
import About from "./About";
import Technologies from "./Technologies";
import Projects from "./Projects";
import { motion } from "framer-motion";
import Contact from "./Contact";
import Footer from "./footer";

function HeroSection() {
  return (
    <>
      <div className="bg-blue-primary text-white px-16 h-[36rem]">
        <Navbar />
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col sm:flex-row justify-between items-center"
        >
          <div className="font-normal text-center sm:text-left pt-12 sm:pt-12">
            <h1 className="text-[2.7rem] font-PTSans">
              Hi,
              <br /> I am <span className="text-lightb">J</span>ummie,
              <br /> A Creative{" "}
              <span className="text-lightb font-extrabold">Frontend Developer</span>
            </h1>
            <Button
              className="bg-lightb hover:bg-blue-700 text-white mt-8 font-bold py-2 px-6 font-inter"
              to="/signup"
            >
              See Projects
            </Button>
          </div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="pt-24 sm:pt-12"
          >
            <img src={heroImg} alt="A lady on a computer" />
          </motion.div>
        </motion.div>
      </div>
      <About />
      <Technologies />
      <Projects />
      <Contact/>
      <Footer/>
    </>
  );
}

export default HeroSection;