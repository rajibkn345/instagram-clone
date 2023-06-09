import { useState, useEffect } from "react";
import { useFormik } from "formik";
import { FaFacebook } from "react-icons/fa";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";

const images = [p1, p2, p3, p4];

const SignIn = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    // Update the image every 5 seconds
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 3500);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, [images.length]);

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="flex justify-center items-center md:m-4 md:p-4">
      <div className="w-1/2 min-h-screen flex justify-end items-center">
        <div className="flex items-center bg-phone w-3/4 h-screen relative">
          <img
            className="absolute md:w-[53%] md:h-[88%] md:right-14 md:top-4 md:me-1"
            src={images[currentImage]}
            alt={`image-${currentImage}`}
          />
        </div>
      </div>
      <div className="w-2/6">
        <form
          onSubmit={formik.handleSubmit}
          className="w-full shadow-md max-w-sm p-3 m-1  px-10"
        >
          <h2 className="text-2xl font-semibold text-center mt-12 mb-6">
            Instagram
          </h2>
          <div className="mb-4">
            <input
              id="username"
              name="username"
              type="text"
              placeholder="Phone number, username or email"
              onChange={formik.handleChange}
              value={formik.values.username}
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-6">
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              onChange={formik.handleChange}
              value={formik.values.password}
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 w-full hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline"
          >
            log In
          </button>
          <div className="flex items-center justify-center my-4">
            <hr className="border-t-1 border-gray-200 flex-grow" />
            <span className="mx-4 text-gray-500 font-semibold">OR</span>
            <hr className="border-t-1 border-gray-200 flex-grow" />
          </div>
          <div className="flex items-center justify-center text-blue-900 gap-2 my-6">
            <FaFacebook />
            <span>Login with Facebook</span>
          </div>
          <span className=" flex items-center justify-center mb-6">
            <a className="text-center" href="#">
              Forgot password?
            </a>
          </span>
        </form>
        <div className="font-light flex items-center justify-center w-full p-4 m-1 gap-2 shadow-md">
          <span>Don't have account?</span>
          <span className="text-blue-950">
            <a href="#">Sign up</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
