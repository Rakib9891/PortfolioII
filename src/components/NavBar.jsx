import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <header className="navbar flex gap-0 max-w-fit rounded-4xl border border-gray-600 overflow-hidden bg-[#01cd74]  my-2 relative top-2 left-[50%] translate-x-[-50%] shadow z-50">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `nav-link ${isActive ? "text-cyan-400" : "text-black"}`
        }
      >
        Home
      </NavLink>

      <NavLink
        to="/Profile"
        className={({ isActive }) =>
          `nav-link ${isActive ? "text-cyan-400" : "text-black"}`
        }
      >
        Profile
      </NavLink>

      <NavLink
        to="/Projects"
        className={({ isActive }) =>
          `nav-link ${isActive ? "text-cyan-400" : "text-black"}`
        }
      >
        Projects
      </NavLink>

      <NavLink
        to="/Contact"
        className={({ isActive }) =>
          `nav-link ${isActive ? "text-cyan-400" : "text-black"}`
        }
      >
        Contact
      </NavLink>
    </header>
  );
}

export default NavBar;
