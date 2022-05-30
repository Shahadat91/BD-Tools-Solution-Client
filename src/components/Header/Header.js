import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
  const menuItems = (
    <>
      <li>
        <Link to="/" className="text-white no-underline">
          Home
        </Link>
      </li>
      <li>
        <Link to="/blogs" className="text-white no-underline">
          Blogs
        </Link>
      </li>
      <li>
        <Link to="/addreview" className="text-white no-underline">
          Add Review
        </Link>
      </li>
      <li>
        <Link to="/order" className="text-white no-underline">
          Order
        </Link>
      </li>
      <li>
        <Link to="/portfolio" className="text-white no-underline">
          Portfolio
        </Link>
      </li>
      <li>
        <Link to="/dashboard" className="text-white no-underline">
          Dashboard
        </Link>
      </li>
      <li>
        {user ? (
          <button className="btn btn-ghost text-white" onClick={logout}>
            Log Out
          </button>
        ) : (
          <Link to="/login" className="text-white no-underline text-lg">
            Login
          </Link>
        )}
      </li>
    </>
  );
  return (
    
    <div className="bg-gray-600 ">
      <div className="navbar mx-auto lg:px-12">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-danger lg:hidden">
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
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <Link
            to={"/"}
            className="btn btn-ghost text-xl text-white"
          >
            BD Tools Solution
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuItems}</ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
