import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <header className="flex border py-2 my-2 justify-center rounded-2xl gap-6 bg-gray-100 text-[1rem]">
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
