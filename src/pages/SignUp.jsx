import React, { useState } from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
      // Process form submission here (e.g., API call)
    },
    // Optionally, add validation
  });

  return (
    <div>
      <Nav />
      <div className="container shadow-lg bg-orange-50 h-auto mt-3 py-5">
        <div className="mb-5">
          <form onSubmit={formik.handleSubmit}>
            <div className="relative mb-4 md:w-1/2 w-full mx-auto">
              <h5 className="text-center fw-bold mt-5 mb-3 text-2xl">
                Create an account
              </h5>
              {/* Inputs and form fields */}
              {/* Firstname input */}
              <input
                placeholder="Firstname"
                type="text" // Changed type to text
                {...formik.getFieldProps("firstname")}
                className="w-full border-orange-500 bg-white rounded border focus:ring-2 focus:ring-orange-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              {/* Error message for firstname */}
              {formik.touched.firstname && formik.errors.firstname && (
                <small className="text-danger text-center mx-auto mt-2 p-4">
                  {formik.errors.firstname}
                </small>
              )}
              {/* Lastname input */}
              <input
                placeholder="Lastname"
                type="text"
                {...formik.getFieldProps("lastname")}
                className="w-full border-orange-500 bg-white mt-3 rounded border focus:ring-2 focus:ring-orange-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              {/* Error message for lastname */}
              {formik.touched.lastname && formik.errors.lastname && (
                <small className="text-danger text-center mx-auto mt-2 p-4">
                  {formik.errors.lastname}
                </small>
              )}

              {/* Email input */}
              <input
                placeholder="Email address"
                type="email"
                {...formik.getFieldProps("email")}
                className="w-full border-orange-500 mt-3 bg-white rounded border focus:ring-2 focus:ring-orange-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
              {/* Error message for email */}
              {formik.touched.email && formik.errors.email && (
                <small className="text-danger text-center mx-auto mt-2 p-4">
                  {formik.errors.email}
                </small>
              )}

              {/* Password input */}
              <input
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                {...formik.getFieldProps("password")}
                className="w-full bg-white mt-3 rounded focus:ring-2 border focus:ring-orange-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out pr-10"
              />
              {/* Toggle password visibility icon */}
              <i
                onClick={togglePasswordVisibility}
                className={`bi absolute ${
                  showPassword ? "bi-eye-slash-fill" : "bi-eye-fill"
                } text-2xl text-orange-500 top-[calc(100%-3.5rem)] transform -translate-y-1/2 right-2 cursor-pointer`}
              ></i>
              {/* Error message for password */}
              {formik.touched.password && formik.errors.password && (
                <small className="text-danger text-center mx-auto mt-2 p-4">
                  {formik.errors.password}
                </small>
              )}
              <button
                type="submit"
                className="btn hover:bg-orange-500 bg-orange-500 text-white w-full border-orange-500 md:mt-2 mt-3" >
                Sign up
              </button>
              <p className="mt-3 text-center">
                Already have an account?
                <span className="text-orange-500">
                  <Link to={"/in"}> Login</Link>{" "}
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

export default SignUp;
