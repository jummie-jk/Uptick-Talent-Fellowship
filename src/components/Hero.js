import React from "react";
import Navbar from "./Navbar";
import heroImg from './Images/hero-img.png';
import Button from "./Button";
import About from "./About";
import Technologies from "./Technologies";

function HeroSection() {
  return (
    <>

    <div className=" bg-blue-primary text-white px-16 h-[36rem]">
      <Navbar />
      <div className="flex flex-row justify-between main">
        <div className="font-normal pt-20">
            <h1 className="text-[2.3rem] font-PTSans">
            Hi,
            <br /> I am <span className="text-lightb">J</span>ummieeeeeeeeeeeeeeeeeee,
            <br /> A Creative{" "}
            <span className="text-lightb font-extrabold">Frontend Developer</span>
            </h1>
            <Button className="bg-lightb hover:bg-blue-700 text-white mt-8 font-bold py-2 px-6 font-inter" to="/signup">
              See Projects
            </Button>
        </div>
        <div className="pt-16">
            <img src={heroImg} alt="A lady on a computer"/>
        </div>
      </div>
    </div>
    <About/>
    <Technologies/>
    </>
  );
}

export default HeroSection;