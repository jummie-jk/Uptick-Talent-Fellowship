import React from "react";
import Lawfirm from "./Images/lawfirmN.png";
import cryptous from "./Images/cryptousNN.png"
import gallery from "./Images/galleryN.png"
import herlign from "./Images/herlignN.png"
import herrands from "./Images/herrandsN.png"
import Button from "./Button";
const Projects = () => {

  return (
    <>
      <div className=" bg-blue-secondary text-white  pt-12 overflow-y-hidden font-PTSans">
        <div className="px-28">
          <p className="underline underline-offset-8 decoration-4 decoration-lightb text-[2.1rem] ">
            Projects
          </p>
        </div>
       <div>
            <div className="px-12 py-12">
                <div className="flex flex-row">
                    <div>
                        <img src={Lawfirm} alt="A lawfirm" className=""></img>
                    </div>
                    <div className="text-white pl-12 font-inter" >
                        <p className="text-[1rem]">01</p>
                        <p className="text-[1.5rem] pb-4">Samson and Gretel Law firm</p>
                        <p className="text-[0.8rem] pb-2">Samson and Gretel is your trusted legal partner, providing top-tier legal <br></br>services with a commitment to integrity and excellence.</p>
                        <p className="text-[0.8rem]">Stack/Tools: HTML, CSS, JavaScript, Vercel, Git & Github</p>
                        <div>
                        <Button
                            className="bg-lightb hover:bg-blue-700 text-white mt-8 font-bold py-2 px-6 font-inter"
                            to="/signup">
                            Open Project
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row py-12">
                    <div className="text-white font-inter" >
                        <p className="text-[1rem]">02</p>
                        <p className="text-[1.5rem] pb-4">Cryptous</p>
                        <p className="text-[0.8rem] pb-2">Cryptous provides a up-to-date daily coin information sourced from a reliable<br></br> API,also offering a glimpse into the latest trends, market data, and price 7 most search coins.</p>
                        <p className="text-[0.8rem]">Stack/Tools: React,CSS, Vercel, Coingecko API, Git & Github</p>
                        <div>
                        <a
                            href="https://crypto-website-six.vercel.app/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-lightb hover:bg-blue-700 text-white mt-8 font-bold py-2 px-6 font-inter"
                            >
                            Open Project
                        </a>
                        {/* <Button
                            className="bg-lightb hover:bg-blue-700 text-white mt-8 font-bold py-2 px-6 font-inter"
                            to="/signup">
                            Open Project
                            </Button> */}
                        </div>
                    </div>
                    <div className="pl-14">
                        <img src={cryptous} alt="A lawfirm" className=""></img>
                    </div>
                </div>
                <div className="flex flex-row">
                    <div>
                        <img src={gallery} alt="A lawfirm" className=""></img>
                    </div>
                    <div className="text-white pl-12 font-inter" >
                        <p className="text-[1rem]">03</p>
                        <p className="text-[1.5rem] pb-4">Photo Fusion</p>
                        <p className="text-[0.8rem] pb-2">A dynmaic gallery website that allows users to signIn, check beautiful pictures,<br></br> rearrange gallery and search for pictures of interest </p>
                        <p className="text-[0.8rem]">Stack/Tools: ReactJS, CSS, Unsplash API, Firebase, Vercel, Git & Github</p>
                        <div>
                        <a
                            href="https://photo-gallery-n.vercel.app/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-lightb hover:bg-blue-700 text-white mt-8 font-bold py-2 px-6 font-inter"
                            >
                            Open Project
                        </a>
                        {/* <Button
                            className="bg-lightb hover:bg-blue-700 text-white mt-8 font-bold py-2 px-6 font-inter"
                            to="/signup">
                            Open Project
                            </Button> */}
                        </div>
                    </div>
                </div>
                <div className="flex flex-row py-12">
                    <div className="text-white font-inter" >
                        <p className="text-[1rem]">04</p>
                        <p className="text-[1.5rem] pb-4">Herlign</p>
                        <p className="text-[0.8rem] pb-2">Herlign is a venture studio and a wellness gathering.<br></br>This is an official website showing all the details about the organisation.</p>
                        <p className="text-[0.8rem]">Stack/Tools: React, Tailwincss, Gatsby, Vercel, Git & Github</p>
                        <div>
                        <a
                            href="https://herlign.org/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-lightb hover:bg-blue-700 text-white mt-8 font-bold py-2 px-6 font-inter"
                            >
                            Open Project
                        </a>
                        {/* <Button
                            className="bg-lightb hover:bg-blue-700 text-white mt-8 font-bold py-2 px-6 font-inter"
                            to="/signup">
                            Open Project
                            </Button> */}
                        </div>
                    </div>
                    <div className="pl-24">
                        <img src={herlign} alt="A lawfirm" className=""></img>
                    </div>
                </div>
                <div className="flex flex-row">
                    <div>
                        <img src={herrands} alt="A lawfirm" className=""></img>
                    </div>
                    <div className="text-white pl-12 font-inter" >
                        <p className="text-[1rem]">05</p>
                        <p className="text-[1.5rem] pb-4">Herrands</p>
                        <p className="text-[0.8rem] pb-2">This is a website where you can sriders on errands while you save time.</p>
                        <p className="text-[0.8rem]">Stack/Tools: ReactJS, CSS, Vercel, Git & Github</p>
                        <div>
                        <a
                            href="https://herrands-website.vercel.app/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-lightb hover:bg-blue-700 text-white mt-8 font-bold py-2 px-6 font-inter"
                            >
                            Open Project
                        </a>
                        {/* <Button
                            className="bg-lightb hover:bg-blue-700 text-white mt-8 font-bold py-2 px-6 font-inter"
                            to="/signup">
                            Open Project
                         </Button> */}
                        </div>
                    </div>
                </div>
            </div>
       </div>
      </div>
    </>
  );
};

export default Projects;