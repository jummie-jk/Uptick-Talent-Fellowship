import React from "react";
import Button from "./Button";


const Contact = () => {

  return (
    <>
      <div className=" bg-blue-primary text-white  pt-12 overflow-y-hidden font-PTSans">
        <div className="px-28">
          <p className="underline underline-offset-8 decoration-4 decoration-lightb text-[2.1rem] ">
            Contact me
          </p>
        </div>
        <div className=" font-inter py-8 pl-28">
            <p><span>Email: </span>jumokeipoola2019@gmail.com</p>
            <p><span>Phone Number:</span> +234-907-219-809-0</p>
            <div>
                <Button
                    className="bg-lightb hover:bg-blue-700 text-white mt-2 font-bold py-2 px-6 font-inter"
                    to="/signup">
                    Download Resume
                </Button>
            </div>
        </div>
      </div>
    </>
  );
};

export default Contact;