import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const schema = yup
  .object()
  .shape({
    password: yup
      .string()
      .required("Password is required")
      .min(4, "Password length should be at least 4 characters")
      .max(12, "Password cannot exceed more than 12 characters"),
    email: yup.string().email().required(),
  })
  .required();

const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const res = await axios.post(
        "https://api.solutionsathee.com/api/v1/crm/employeelogin",
        data
      );
      if (res.data.success) {
        localStorage.setItem("token", JSON.stringify(res.data.Token));
        localStorage.setItem("role", res.data.role);
        toast.success(res.data.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
        setTimeout(() => {
          navigate("/dashboard");
        }, 2000);
      } else {
        toast.error(res.data.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } catch (error) {
      toast.error("Incorrect password or email", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const url =
    "https://miro.medium.com/v2/resize:fit:5000/1*IZxH_61JHDeAAK7QqtS2zA.jpeg";
  return (
    <div
      className="relative top-1 flex flex-col justify-center min-h-screen overflow-hidden"
      style={{ backgroundImage: `url(${url})`, backgroundSize: "cover", }}
    >
      <div className="flex flex-col items-center ">
      <div className="w-full  xl:w-1/3 lg:w-1/3 p-6 m-auto bg-white bg-opacity-75 rounded-md shadow-md lg:max-w-xl">
          <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
            Sign in
          </h1>
          <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-gray-800"
              >
                Email
              </label>
              <input
                type="email"
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                {...register("email")}
              />
              <small className="text-red-600">{errors.email?.message}</small>
            </div>
            <div className="mb-2">
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-gray-800"
              >
                Password
              </label>
              <input
                type="password"
               
                className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
                {...register("password")}
              />
              <small className="text-red-600">{errors.password?.message}</small>
            </div>
          
            <div className="mt-6">
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                Login
              </button>
            </div>
          </form>
          <ToastContainer />
         
        </div>
      </div>
    </div>
  );
};

export default Login;