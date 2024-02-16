import React from 'react'
import { Link } from 'react-router-dom';
import Footer from './Footer';
import image from '/src/assets/images/9b62f902c3de6d1b54b3a5d23341752c.png'

const Home = () => {
    return (
        <div>
          <div className="mt-md-5 mt-5">
            <div className="col-md-6 col-10 mx-auto">
              <p className="fw-bold col-md-6 col-10 fs-1 absolute mx-auto  mt-20 text-white">
                You got the travel plans, we got the travel vans.
                <p className="absolute mt-3 " style={{ fontSize: "18px" }}>
                  Add adventure to your life by joining the #vanlife movement. Rent
                  the perfect van to make your perfect road trip. <br />
                  <button className="w-100 mt-5 bg-orange-400 rounded-md py-3 absolute text-md mx-auto">
                    <Link to={"/van"}>
                    Find your vans
                    </Link>
                  </button>
                </p>
              </p>
            </div>
            <img
              className="col-12 mt-4 homeImg"
              src={image}
              alt=""
            />
          </div>
          <Footer/>
        </div>
      );
};

export default Home;