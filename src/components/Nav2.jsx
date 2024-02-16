import React from 'react'
import { Link } from 'react-router-dom'

const Nav2 = () => {
    return (
        <div>
           <nav className="bg-white fixed-top  w-full py-2">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between  h-16">
                <div className="flex-shrink-0">
                  <Link to="/" className="text-black text-md  font-bold">
                    #VANLIFE
                  </Link>
                </div>
                <div className="">
                  <div className="ml-10 flex items-baseline ">
                  
                      <Link
                        to="/host"
                        className="text-gray-600 px-3 py-2 rounded-md text-sm font-semibold"
                      >
                        Host
                      </Link>
                    
                    <Link
                      to="/about"
                      className="text-gray-600 px-3 py-2 rounded-md text-sm font-semibold"
                    >
                      About
                    </Link>
                    <Link
                      to="/vans"
                      className="text-gray-600 text-decoration-underline text-2md px-3 py-2 rounded-md text-sm font-semibold"
                    >
                      Vans
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </nav>  
        </div>
      )
}

export default Nav2