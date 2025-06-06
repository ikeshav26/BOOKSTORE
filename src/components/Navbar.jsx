import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import Logout from "./Logout";

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [sticky, setSticky] = useState(false);
  const [authuser, setauthuser] = useAuth();

  useEffect(() => {
    // Apply the theme to the document
    document.documentElement.setAttribute("data-theme", theme);

    // Save the theme to localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleThemeChange = (e) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/course">Course</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div
        className={`navbar z-9999 fixed top-0 left-0 right-0 max-w-screen shadow-sm mx-auto md:px-20 px-4 py-4 transition-all duration-300 ease-in-out ${
          sticky
            ? theme === "dark"
              ? "bg-base-300"
              : "bg-base-200"
            : "bg-base-100"
        }`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navItems}
            </ul>
          </div>
          <a className="text-2xl font-bold cursor-pointer">BOOKSTORE</a>
        </div>
        <div className="navbar-end flex gap-5">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 flex gap-3 text-lg">
              {navItems}
            </ul>
          </div>
          <div>
            <label
              className={`input  rounded-xl hidden md:flex gap-5 ${theme === "light" ? "border-2 border-black " : "border 2 border-white"}`}
            >
              <svg
                className="h-[1.3em]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                type="search"
                className={`grow   ${theme === "light" ? "placeholder:text-black " : "placeholder:text-white"}   `}
                placeholder="Search"
              />
            </label>
          </div>
          <div>
            <label className="swap swap-rotate text-center">
              {/* Hidden checkbox to control the state */}
              <input
                type="checkbox"
                className="theme-controller"
                onChange={handleThemeChange}
                checked={theme === "dark"}
              />

              {/* Sun icon */}
              <svg
                className="swap-off h-7 w-7 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* Moon icon */}
              <svg
                className={`swap-on h-7 w-7 fill-current `}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </div>
          {authuser ? (
            <Logout />
          ) : (
            <div>
              {/* Trigger the modal */}
              <a
                onClick={() =>
                  document.getElementById("my_modal_3").showModal()
                }
                className={`btn hover:opacity-65 px-4 rounded-xl ${theme === "light" ? "bg-zinc-800 text-white" : "bg-white text-black"}`}
              >
                Login
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
