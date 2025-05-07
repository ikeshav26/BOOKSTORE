import React from "react";
import Login from "./Login";
import { useAuth } from "../context/AuthProvider";
import Logout from "./Logout";

const Banner = () => {
  const [authuser, setauthuser] = useAuth();
  return (
    <>
      <div className="bg-base-100 max-w-screen shadow-sm mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
        <div className="md:w-1/2 order-2 md:order-1 mt-12 md:mt-32">
          <div className="space-y-12">
            <h1 className="text-4xl tracking-tight">
              Hello, welcomes here to learn
              <span className="inline-block">
                {" "}
                something{" "}
                <span className="text-pink-500">new everyday !!!</span>
              </span>
            </h1>
            <p className="tracking-tighter">
              Welcome to our online bookstore – your one-stop destination for
              books and educational courses! We offer a wide range of titles
              across various subjects, along with expertly designed courses to
              help you grow and learn at your own pace. Whether you're a student
              or a lifelong learner, you'll find the resources you need here.
            </p>
            {authuser ? (
              <div>
                <Logout />
              </div>
            ) : (
              <div>
                <label className="input validator border-2 border-gray-500 w-full">
                  <svg
                    className="h-[1.3em] "
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <g
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2.5"
                      fill="none"
                      stroke="currentColor"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 border 0 1-2.06 0L2 7"></path>
                    </g>
                  </svg>
                  <input
                    className={`placeholder:text-gray-500  `}
                    type="email"
                    placeholder="Enter your email to login"
                    required
                  />
                </label>
                <div className="validator-hint hidden">
                  Enter valid email address
                </div>
                <button
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                  className="btn btn-secondary rounded-xl mt-6 px-6 py-2"
                >
                  Login
                </button>
                <Login />
              </div>
            )}
          </div>
        </div>
        <div className="w-full order-1 md:order-2 md:w-1/2 flex justify-center items-center">
          <img
            className="bg-cover mt-20 md:ml-10 w-[20em] h-[20em] md:w-[27em] md:h-[27em]"
            src="/Banner.png"
          ></img>
        </div>
      </div>
    </>
  );
};

export default Banner;
