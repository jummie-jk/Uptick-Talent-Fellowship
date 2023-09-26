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
        className=" bg-blue-secondary text-white px-28 flex flex-row justify-between py-24 font-PTSans"
      >
        <div>
          <p className="underline underline-offset-8 decoration-4 decoration-lightb text-[2.1rem]">
            About Me
          </p>
          <p className="text-lightb font-extrabold text-[2.5rem] pt-2">Olajumoke Ipoola</p>
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
          className="w-full h-full pt-4 boxes cursor-pointer grayscale transition-transform transform pl-24"
        >
          <img src={Jummienew} alt="Olajumoke Ipoola" className="w-full h-full" />
        </motion.div>
      </motion.div>
    </>
  );
};

export default About;

// import React from "react";
// import Jummienew from "./Images/JummieNew.png";
//          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/3 pt-4 sm:pt-0 boxes cursor-pointer grayscale transition-transform transform"
// const About = () => {
//   return (
//     <>
//       <div className=" bg-blue-secondary text-white px-28 h-[35rem] flex flex-row justify-between py-24 font-PTSans">
//         <div>
//           <p className="underline underline-offset-8 decoration-4 decoration-lightb text-[2.1rem] ">
//             About Me
//           </p>
//           <p className="text-lightb font-extrabold text-[2.5rem]">Olajumoke Ipoola</p>
//           <p className="text-[1rem] font-inter">
//             I'm a passionate and creative Frontend Developer with a strong<br/>
//             desire to bring ideas to life through web development. With a love<br/>
//             for clean and elegant design, I thrive on turning complex problems<br/>
//             into beautiful and user-friendly  interfaces.<br/><br/></p>
//             <p className="text-[1rem] font-inter">
//             I believe that
//             effective communication and collaboration are the keys to <br/>
//             successful project development. I'm always excited to work alongside <br/>
//             clients, designers, and other developers to transform ideas into reality. <br/>
//             I'm a problem solver, and I enjoy tackling challenges head-on,<br/>
//             continuously learning and adapting to new technologies.
//           </p>
//         </div>
//         <div className="">
//           <img src={Jummienew}  alt="Olajumoke Ipoola" className="w-full h-full pt-4 boxes cursor-pointer grayscale transition-transform transform"/>
//         </div>
//       </div>
//     </>
//   );
// };
// export default About;
