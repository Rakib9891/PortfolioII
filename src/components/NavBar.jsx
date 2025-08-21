import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <header className="navbar flex gap-0 max-w-fit border border-gray-500 overflow-hidden   my-2 relative top-2 left-[50%] translate-x-[-50%] shadow z-50">

      <NavLink
        to="/"
        className={({ isActive }) =>
          `nav-link ${isActive ? "text-cyan-400" : "text-gray-400"}`
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/Profile"
        className={({ isActive }) =>
          `nav-link ${isActive ? "text-cyan-400" : "text-gray-400"}`
        }
      >
        Profile
      </NavLink>

      <NavLink
        to="/Projects"
        className={({ isActive }) =>
          `nav-link ${isActive ? "text-cyan-400" : "text-gray-400"}`
        }
      >
        Projects
      </NavLink>

      <NavLink
        to="/Contact"
        className={({ isActive }) =>
          `nav-link ${isActive ? "text-cyan-400" : "text-gray-400"}`
        }
      >
        Contact
      </NavLink>
    </header>
  );
}

export default NavBar;
