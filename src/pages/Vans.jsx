import React from 'react'
import Nav from '../components/Nav';
import Footer from '../components/Footer';

const Vans = () => {
    return (
      <div>
        <Nav />

          
          <div className="container mb-5 mt-20 h-auto px-4 py-2 bg-orange-50 ">
            <h1 className="mt-4 md:text-4xl  fw-bold">Explore our van options</h1>
            <div className="d-flex gap-md-5 gap-2 mt-4">
              <button className="btn bg-orange-200">Simple</button>
              <button className="btn bg-orange-200">Luxury</button>
              <button className="btn bg-orange-200">Rugged</button>
              <p className="mt-3 text-decoration-underline text-sm ">
                <a href="">Clear filters</a>
              </p>
            </div>
          </div>
        <Footer />
      </div>
    );
}

export default Vans;