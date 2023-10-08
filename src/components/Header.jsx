import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut().then().catch();
  };
  const menuItems = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "active text-[#CD5C08]" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive ? "active text-[#CD5C08]" : ""
          }
        >
          Services
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "active text-[#CD5C08]" : ""
          }
        >
          About Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "active text-[#CD5C08]" : ""
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar max-w-7xl px-5 py-4 mx-auto">
      <div className="navbar-start">
        <div className="dropdown pr-3">
          <label tabIndex={0} className="lg:hidden">
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
            tabIndex={0}
            className="dropdown-content mt-3 z-[1] p-6 shadow bg-base-100 rounded-box w-52 text-base flex flex-col gap-4"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/">
          <img
            src="https://i.ibb.co/jDsZ7NZ/festive-fusion-logo.png"
            alt="Festive Fusion"
            className="w-48"
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex gap-10">{menuItems}</ul>
      </div>
      <div className="navbar-end gap-4">
        {user ? (
          <div className="flex gap-4">
            <img
              src="https://i.ibb.co/2FnX2rf/user.png"
              alt=""
              className="w-8"
            />
            <button
              onClick={handleSignOut}
              className="text-base text-[#CD5C08] border border-[#CD5C08] px-4 py-[5px] rounded-md hover:bg-[#CD5C08] hover:text-white"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login">
            <button className="text-base text-[#CD5C08] border border-[#CD5C08] px-4 py-[5px] rounded-md hover:bg-[#CD5C08] hover:text-white">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
