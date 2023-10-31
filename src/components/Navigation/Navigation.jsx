import { Link } from "react-router-dom";
import logo from '../../assets/logo.svg'
import {AiOutlineShopping} from 'react-icons/ai'
import { IoIosSearch } from "react-icons/io";
import { useContext } from "react";
import { Authcontext } from "../../AuthProvider/AuthProvider";
const Navigation = () => {

    const {users,logOut,loading} = useContext(Authcontext);

    if(loading){
      return (
        <span className=" loading loading-lg text-2xl loading-spinner absolute left-1/2 top-1/2 text-gray-800"></span>
      );
    }


   

    const handleLogout = () => {
      logOut()
      .then(() => {})
      .catch(erorr => {erorr})
    }

    

    const navLinks = (
      <>
        <li>
          <Link>Home</Link>
        </li>
        <li>
          <Link>About</Link>
        </li>
        <li>
          <Link>Service</Link>
        </li>
        <li>
          <Link>Blog</Link>
        </li>
        <li>
          <Link>Contact</Link>
        </li>
        {users?.email ? (
          <div className="flex items-center gap-5">
            <li onClick={handleLogout}>
              <Link>Logout</Link>
            </li>
            <Link to="/yourorders">Your Order</Link>
          </div>
        ) : (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
      </>
    );
    return (
      <div className=" navbar bg-base-100">
        <div className="navbar-start ">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <Link className="btn btn-ghost  h-max normal-case text-xl">
            <img src={logo} alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex items-center">
          <ul className="menu menu-horizontal px-1 text-lg">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <AiOutlineShopping className="text-3xl cursor-pointer mr-5"></AiOutlineShopping>
          <IoIosSearch className="text-3xl cursor-pointer mr-5" />
          <button className="border border-[#FF3811] rounded-md py-2 px-3 hover:bg-[#FF3811] transition-all hover:text-white">
            Secondary
          </button>
          
        </div>
      </div>
    );
};

export default Navigation;