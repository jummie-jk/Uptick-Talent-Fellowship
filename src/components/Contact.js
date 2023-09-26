import React from "react";
// import Button from "./Button";
// import resume from "./Images/myresume.pdf"

const Contact = () => {
    // const handleDownload = () => {
    //     // const resumeUrl = './Images/myresume.pdf';
    //     const link = document.createElement('a');
    //     link.href = resume;
    //     link.target = '_blank'; 
    //     link.download = 'myresume.pdf'; // Specifies the default file name
    
    //     link.click();
    //   };
  return (
    <>
      <div className=" bg-blue-primary text-white  pt-12 overflow-y-hidden font-PTSans">
        <div className="px-28">
          <p className="underline underline-offset-8 decoration-4 decoration-lightb text-[2.1rem] ">
            Contact me
          </p>
        </div>
        <div className=" font-inter py-8 pl-28">
            <p><span className="font-500">Email: </span>jumokeipoola2019@gmail.com</p>
            <p><span>Phone Number:</span> +234-907-219-809-0</p>
            <div className="pt-4">
            <a
                            href="https://docs.google.com/document/d/1nviURhtmUNJsEEUAk0awVtIyBpEVjlW6ff-XL5OOfms/edit?usp=drivesdk" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-lightb hover:bg-blue-700 text-white mt-8 font-bold py-2 px-6 font-inter"
                            >
                            Resume
                        </a>
                {/* <Button
                    onClick={handleDownload}
                    className="bg-lightb hover:bg-blue-700 text-white mt-2 font-bold py-2 px-6 font-inter">
                    Download Resume
                </Button> */}
            </div>
        </div>
      </div>
    </>
  );
};

export default Contact;