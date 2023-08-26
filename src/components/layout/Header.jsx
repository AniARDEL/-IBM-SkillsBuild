import React, { useState } from "react";
import { IoFastFoodOutline } from "react-icons/io5";
import "../../styles/dropdownMenu.scss";

import { motion } from "framer-motion";
import DropdownMenu from "./DropdownMenu";

import { NavLink } from "react-router-dom";

const Header = ({ isAuthenticated = false }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <nav id="nav" className="navbar">
      <div className="logo">
        <motion.div initial={{ x: "-100%" }} whileInView={{ x: 0 }}>
          <IoFastFoodOutline  />
        </motion.div>
      </div>
      <div className={`menu-items ${showMobileMenu ? "mobile" : "desktop"}`}>
        <NavLink to="/" activeClassName="active">
          Home
        </NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/cart" className="icon-link">
          <svg
            width="25"
            height="28"
            viewBox="0 0 14 13"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.5625 0.5H1.64062C2.1875 0.53125 2.57812 0.78125 2.8125 1.25H12.4453C12.7578 1.26563 13.0078 1.39062 13.1953 1.625C13.3672 1.85938 13.4219 2.125 13.3594 2.42188L12.3984 6.00781C12.2891 6.38281 12.0859 6.67969 11.7891 6.89844C11.4922 7.13281 11.1484 7.25 10.7578 7.25H4.00781L4.125 7.92969C4.20312 8.21094 4.39062 8.35938 4.6875 8.375H11.4375C11.7812 8.40625 11.9688 8.59375 12 8.9375C11.9688 9.28125 11.7812 9.46875 11.4375 9.5H4.6875C4.26562 9.5 3.90625 9.375 3.60938 9.125C3.29688 8.85938 3.10156 8.53125 3.02344 8.14062L1.80469 1.78906C1.78906 1.67969 1.73438 1.625 1.64062 1.625H0.5625C0.21875 1.59375 0.03125 1.40625 0 1.0625C0.03125 0.71875 0.21875 0.53125 0.5625 0.5ZM3.07031 2.375L3.79688 6.125H10.7578C11.0391 6.10938 11.2188 5.96875 11.2969 5.70312L12.2109 2.375H3.07031ZM4.125 12.5C3.70312 12.4844 3.375 12.2969 3.14062 11.9375C2.95312 11.5625 2.95312 11.1875 3.14062 10.8125C3.375 10.4531 3.70312 10.2656 4.125 10.25C4.54688 10.2656 4.875 10.4531 5.10938 10.8125C5.29688 11.1875 5.29688 11.5625 5.10938 11.9375C4.875 12.2969 4.54688 12.4844 4.125 12.5ZM12 11.375C11.9844 11.7969 11.7969 12.125 11.4375 12.3594C11.0625 12.5469 10.6875 12.5469 10.3125 12.3594C9.95312 12.125 9.76562 11.7969 9.75 11.375C9.76562 10.9531 9.95312 10.625 10.3125 10.3906C10.6875 10.2031 11.0625 10.2031 11.4375 10.3906C11.7969 10.625 11.9844 10.9531 12 11.375Z"
              fill="white"
            />
          </svg>
          </NavLink>
        <DropdownMenu />
      </div>
      <div className={`mobile-menu-icon ${showMobileMenu ? "open" : ""}`} onClick={toggleMobileMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Header;