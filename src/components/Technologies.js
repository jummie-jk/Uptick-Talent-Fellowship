import React from "react";


const Technologies = () => {

  return (
    <>
      <div className=" bg-blue-primary text-white  pt-12 h-[25rem] overflow-y-hidden font-PTSans">
        <div className="px-28">
          <p className="underline underline-offset-8 decoration-4 decoration-lightb text-[2.1rem] ">
            Technologies
          </p>
          <p className="text-[1rem] font-inter pt-2">
            Over the years, I have worked with a list of vast technologies
            <br />
            which includes HTML, JavaScript, React, CSS, SASS, Tailwincss, git
            and github e.t.c{" "}
          </p>
        </div>
        <div className="marquee-container overflow-hidden pt-12 px-12">
          <div className="marquee">
            <div className="marquee-text text-xl animate-marquee flex flex-row justify-between">
              <div className="bg-blue-secondary shadow-xl h-[8rem] w-[8rem] rounded-lg text-center pt-12 mx-4">
                <p>Html</p>
              </div>
              <div className="bg-blue-secondary shadow-xl h-[8rem] w-[8rem] rounded-lg text-center pt-12 mx-4">
                CSS
              </div>
              <div className="bg-blue-secondary shadow-xl  h-[8rem] w-[8rem] rounded-lg text-center pt-12 mx-4">
                JavaScript
              </div>
              <div className="bg-blue-secondary h-[8rem] w-[8rem] rounded-lg text-center pt-12 mx-4">
                Tailwindcss
              </div>
              <div className="bg-blue-secondary h-[8rem] w-[8rem] rounded-lg text-center pt-12 mx-4">
                SASS
              </div>
              <div className="bg-blue-secondary h-[8rem] w-[8rem] rounded-lg text-center pt-12 mx-4">
                React
              </div>
              <div className="bg-blue-secondary h-[8rem] w-[8rem] rounded-lg text-center pt-12 mx-4">
                Git
              </div>
              <div className="bg-blue-secondary h-[8rem] w-[8rem] rounded-lg text-center pt-12 mx-4">
                Netlify
              </div>
              <div className="bg-blue-secondary h-[8rem] w-[8rem] rounded-lg text-center pt-12 mx-4">
                Vercel
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Technologies;