import React from 'react';
import Logo from "../assets/logo.png";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className=" py-8" >
        <div className="container mx-auto">
          <div className='flex justify-between items-center '>
            {/* {logo} */}
            <a href="#">
              <img src={Logo} alt="logo-name" />
            </a>
            {/* buton */}
            <button className='btn btn-sm' on>
            <Link to="contact" className=" cursor-pointer" >  Work with me </Link></button>
          </div>
        
        </div>
      </header>
      );
};

export default Header;
