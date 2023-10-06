import React from "react";
import { motion } from "framer-motion";
import Jummienew from "./Images/JummieNew.png";

const About = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className=" bg-blue-secondary text-white px-28 section-mobile flex flex-row justify-between max-w-700 py-24 font-PTSans"
      >
        <div>
          <p className="underline underline-offset-8 decoration-4 decoration-lightb text-[2.1rem] main-text-mobile">
            About Me
          </p>
          <p className="text-lightb font-extrabold text-[2.5rem] mobile-text pt-2">Olajumoke Ipoola</p>
          <p className="text-1rem font-inter pt-4">
            I'm a passionate and creative Frontend Developer with a strong
            desire to bring ideas to life through web development. With a love
            for clean and elegant design, I thrive on turning complex problems
            into beautiful and user-friendly interfaces.<br></br>
          </p>
          <p className="text-1rem font-inter pt-4">
            I believe that effective communication and collaboration are the keys to
            successful project development. I'm always excited to work alongside
            clients, designers, and other developers to transform ideas into reality.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="w-full h-full pt-4 boxes cursor-pointer grayscale transition-transform transform image-main pl-24"
        >
          <img src={Jummienew} alt="Olajumoke Ipoola" className="w-full h-full" />
        </motion.div>
      </motion.div>
    </>
  );
};

export default About;

