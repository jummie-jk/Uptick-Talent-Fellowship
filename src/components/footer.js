import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLinkedin,
    faFacebook,
    faTwitter,
  } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {


  return (
    <>
      <div className=" bg-blue-secondary text-white  py-12 overflow-y-hidden font-PTSans">
        <div className="px-28 section-mobile flex flex-row justify-between">
         <div>
            <p>Copyright 2023</p>
         </div>
         <div className="flex flex-row">
            <a href="http://www.linkedin.com/in/olajumokeipoola" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://www.facebook.com/olajumoke.ipoola.7" target="_blank" rel="noopener noreferrer" className="px-12">
                <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="https://twitter.com/Jummie_jk?t=rzCwLg7tncoEiY_0TWwNUA&s=08" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} />
            </a>
        </div>
         {/* <div className="flex flex-row">
            <p>Linkedln</p>
            <p className="px-12">Twiter</p>
            <p>Facebook</p>
         </div> */}
        </div>
       
      </div>
    </>
  );
};

export default Footer;