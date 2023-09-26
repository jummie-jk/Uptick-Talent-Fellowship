import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <div className="pt-8">
        <nav className=" flex flex-row justify-between font-PTSans">
          <div >
            <p className="text-lightb text-lg font-bold">{`<Jummie/>`}</p>
          </div>
          <div>
            <ul className="flex flex-row font-medium text-base">
              <li>
                <Link to="/about" className="px-8">
                  About
                </Link>
              </li>
              <li>
                <Link to="/projects" className="px-8">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/technologies" className="px-8">
                  Technologies
                </Link>
              </li>
              <li>
                <Link to="contact" className="px-8">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/resume" className="px-8">
                  Resume
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;