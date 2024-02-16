import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
  const location = useLocation();
  const isSignin = location.pathname === "/login";
   return (
    <div>
      <nav className="bg-white fixed-top w-full py-2 shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between  h-16">
            <div className="flex-shrink-0">
              <Link to="/" className="text-black text-md ms-3 font-bold">
                VANLIFE
              </Link>
            </div>
            <div className="">
              <div className="ml-10 flex items-baseline ">
                {isSignin && (
                  <Link
                    to="/host"
                    className="text-gray-600 px-3 py-2 rounded-md text-sm font-semibold"
                  >
                    Host
                  </Link>
                )}
                <Link
                  to="/about"
                  className="text-gray-600 px-3 py-2 rounded-md text-sm font-semibold"
                >
                  About
                </Link>
                <Link
                  to="/van"
                  className="text-gray-600 text-decoration-underline text-2md px-3 py-2 rounded-md text-sm font-semibold"
                >
                  Vans
                </Link>
                <Link
                  to="/in"
                  className="text-gray-600 px-3 py-2 rounded-md text-sm font-semibold"
                >
                  SignIn
                </Link>
                {isSignin && (
                  <Link
                    to={"/profile"}
                    className="text-gray-600 text-2md px-3 py-2 rounded-md text-sm font-semibold"
                  >
                    <i class="bi bi-person-circle"></i>
                  </Link>
                )} 
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;