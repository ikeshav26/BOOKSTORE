import React from "react";
import Login from "./Login";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import backendUri from "../config";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate(); // Initialize useNavigate

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };
    await axios
      .post(`${backendUri}/signup`, userInfo)
      .then((res) => {
        console.log(res.data);
        if (res.data) {
          toast.success("User registered successfully");
          localStorage.setItem("user", JSON.stringify(res.data.user));
          navigate("/"); // Navigate to the home page
          window.location.reload();
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("User already exists. Signup error.");
      });
  };

  return (
    <>
      <Link to="/">
        <button className="absolute top-10 right-10 text-2xl hover:cursor-pointer hover:bg-base-300 rounded-[50%] px-2 py-1">
          ✕
        </button>
      </Link>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-[350px] md:w-[400px] border-2 rounded-xl flex items-center justify-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-10 md:px-5 py-4"
          >
            <h3 className="font-bold text-4xl">Signup</h3>
            <div className="flex flex-col gap-5 justify-center">
              <div className="flex flex-col gap-2">
                <span className="inline-block">Name:</span>
                <input
                  {...register("fullname", { required: true })}
                  type="text"
                  className="border-1 px-3 py-2 rounded-xl"
                  placeholder="Enter your fullname"
                />
                {errors.fullname && (
                  <span className="text-red-800">This field is required*</span>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <span className="inline-block">Email:</span>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  className="border-1 px-3 py-2 rounded-xl"
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <span className="text-red-800">This field is required*</span>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <span className="inline-block">Password:</span>
                <input
                  {...register("password", { required: true })}
                  type="password"
                  className="border-1 px-3 py-2 rounded-xl"
                  placeholder="Enter your password"
                />
                {errors.password && (
                  <span className="text-red-800">This field is required*</span>
                )}
              </div>
            </div>
            <div className="flex justify-around items-center">
              <button className="bg-pink-600 px-4 py-2 rounded-xl cursor-pointer hover:bg-pink-500">
                Signup
              </button>
              <h4>
                Already registered?{" "}
                <span
                  onClick={() =>
                    document.getElementById("my_modal_3").showModal()
                  }
                  className="text-blue-500 underline text-center cursor-pointer"
                >
                  Login
                </span>
                <Login />
              </h4>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
