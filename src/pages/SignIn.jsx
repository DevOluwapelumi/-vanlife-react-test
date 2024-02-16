import React, { useState } from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const SignIn = () => {
  const [showPass, setShowPass] = useState(false);

  const togglePasswordVisibility = () => setShowPass(!showPass);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
      // Handle submission here (e.g., API call)
    },
    // Add validation schema or validate function here
  });

  return (
    <div>
      <Nav />
      <div className="container shadow-lg bg-orange-50 h-full mt-5 py-5">
        <div className="mb-5">
          <form onSubmit={formik.handleSubmit}>
            <div className="relative mb-4 md:w-1/2 w-full mx-auto">
              <h5 className="text-center fw-bold mt-5 mb-5 text-2xl">
                Sign in to your account
              </h5>
              <input
                placeholder="Email address"
                type="email"
                {...formik.getFieldProps("email")}
                className="w-full bg-white rounded border border-gray-300 focus:ring-orange-300 focus:ring-2 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              {formik.touched.email && formik.errors.email && (
                <small className="text-danger text-center mx-auto mt-2 p-4">
                  {formik.errors.email}
                </small>
              )}
              <input
                placeholder="Password"
                type={showPass ? "text" : "password"}
                {...formik.getFieldProps("password")}
                className="w-full bg-white mt-3 rounded focus:ring-2 border focus:ring-orange-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out pr-10"
              />
              <i
                onClick={togglePasswordVisibility}
                className={`bi absolute py-6 mr-1 ${
                  showPass ? "bi-eye-slash-fill" : "bi-eye-fill"
                } text-2xl top-40 transform -translate-y-1/2 right-2 text-orange-500 cursor-pointer`}
              ></i>
              {formik.touched.password && formik.errors.password && (
                <small className="text-danger text-center mx-auto mt-2 p-4">
                  {formik.errors.password}
                </small>
              )}
              <button
                className="btn hover:bg-orange-500 bg-orange-500 text-white w-full md:mt-4 mt-5"
                type="submit"
              >
                Sign in
              </button>
              <p className="mt-3 text-center">
                Don’t have an account?{" "}
                <span className="text-orange-500">
                  <Link to={"/up"}>Create one now</Link>
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignIn;
