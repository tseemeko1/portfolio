import React from "react";
import { BiHomeAlt, BiUser } from "react-icons/bi";
import {
  BsClipboardData,
  BsBriefcase,
  BsChatSquareText,
  BsBarChart,
  BsPhone,
  BsAward,
} from "react-icons/bs";
import { Link } from "react-scroll";

const Nav = () => {
  const navItems = [
    { to: "home", icon: BiHomeAlt, label: "Home" },
    { to: "about", icon: BiUser, label: "About" },
    { to: "services", icon: BsClipboardData, label: "Services" },
    { to: "webapps", icon: BsBriefcase, label: "Web Apps" },
    { to: "dataanalytics", icon: BsBarChart, label: "Analytics" },
    { to: "mobileapps", icon: BsPhone, label: "Mobile" },
    { to: "certificates", icon: BsAward, label: "Certificates" },
    { to: "contact", icon: BsChatSquareText, label: "Contact" },
  ];

  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        {/* nav inner */}
        <div className="w-full bg-black/20 backdrop-blur-2xl rounded-full mx-auto px-3 lg:px-5 flex justify-between items-center text-xl lg:text-2xl text-white/50 overflow-x-auto scrollbar-hide max-w-[600px] lg:max-w-[800px] h-[80px] lg:h-[96px]">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.to}
                to={item.to}
                activeClass="active"
                smooth={true}
                spy={true}
                offset={-200}
                className="cursor-pointer w-[45px] h-[45px] lg:w-[50px] lg:h-[50px] flex items-center justify-center hover:text-accent transition-colors flex-shrink-0 relative group"
                title={item.label}
              >
                <Icon />
                <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
