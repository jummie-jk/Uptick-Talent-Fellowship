import React from "react";


const Technologies = () => {

  return (
    <>
      <div className=" bg-blue-primary text-white  py-12 font-PTSans ">
        <div className="px-28 section-mobile">
          <p className="underline underline-offset-8 decoration-4 decoration-lightb text-[2.1rem] ">
            Technologies
          </p>
          <p className="text-[1rem] font-inter pt-2">
            Over the years, I have worked with a list of vast technologies and tools
            <br />
            which includes HTML, JavaScript, React, CSS, SASS, Tailwincss, git
            and github e.t.c{" "}
          </p>
        </div>
        <div className=" pt-12 px-12">
          <div className="">
            <div className="text-xl flex flex-row justify-between max-w-700">
              <div className="bg-blue-secondary shadow-xl w-32 h-32 rounded-lg text-center pt-12 m-4">
                <p>Html</p>
              </div>
              <div className="bg-blue-secondary shadow-xl w-32 h-32  rounded-lg text-center pt-12 m-4">
                CSS
              </div>
              <div className="bg-blue-secondary shadow-xl w-32 h-32 rounded-lg text-center pt-12 m-4">
                JavaScript
              </div>
              <div className="bg-blue-secondary w-32 h-32 rounded-lg text-center pt-12 m-4">
                Tailwindcss
              </div>
              <div className="bg-blue-secondary w-32 h-32 rounded-lg text-center pt-12 m-4">
                SASS
              </div>
              <div className="bg-blue-secondary w-32 h-32  rounded-lg text-center pt-12 m-4">
                React
              </div>
              <div className="bg-blue-secondary w-32 h-32 rounded-lg text-center pt-12 m-4">
                Git
              </div>
              <div className="bg-blue-secondary w-32 h-32 rounded-lg text-center pt-12 m-4">
                Netlify
              </div>
              <div className="bg-blue-secondary w-32 h-32 rounded-lg text-center pt-12 m-4">
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