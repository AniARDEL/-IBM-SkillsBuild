import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/dropdownMenu.scss";

function DropdownMenu() {
  const [navLinks, setNavLinks] = useState([]);

  useEffect(() => {
    const navs = [
      { name: "Login", path: "/login" },
      { name: "Orders", path: "/myorders" },
      { name: "Logout", path: "/login" },
    ];
    setNavLinks(navs);
  }, []);

 
 

  return (
    <div>
      <nav className="navbar ">
        <div className="container">

          <div className="btn-group">
            <button
              type="button"
              id="button-menu"
              className="btn btn-outline-primary btn-lg dropdown-toggle"
              data-bs-toggle="dropdown"
              data-bs-display="static"
              aria-expanded="false"
             
            >
              Account
            </button>
            <ul className="dropdown-menu dropdown-menu-end">
              {navLinks.map((d, i) => (
                <li key={i}>
                  <Link to={d.path}>
                    <button className="dropdown-item" type="button">
                      {d.name}
                    </button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default DropdownMenu;
