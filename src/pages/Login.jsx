import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginNavbar from "../components/LoginNavbar";
import imgFive from "../../public/Images/saathlogo";

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

  return (
    <div className="xxs:bg-slate-900 md:bg-slate-900">
      <div className="xl:h-screen 2xl:h-screen lg:h-screen md:h-screen sm:h-screen xs:h-screen xxs:h-screen md:pt-12 sm:pt-12 xs:pt-12 xxs:pt-12">
        <div className="xl:bg-slate-900 2xl:bg-slate-900 lg:bg-slate-900 relative">
          <img
            src="../../public/Images/saathlogo.jpeg"
            alt=""
            className="xl:h-screen 2xl:h-screen lg:h-screen w-1/2 md:m-auto sm:m-auto xs:m-auto xxs:m-auto md:rounded-full sm:rounded-full xs:rounded-full xxs:rounded-full"
          />
        </div>
        <div className=" xl:absolute lg:absolute 2xl:absolute top-32 md:h-1/3 md:mt-12 right-32 w-full sm:mt-12 xs:mt-12 xxs:mt-12 md:w-4/5 xxs:w-4/5 xxs:m-auto md:m-auto xl:w-1/3 lg:w-1/3 p-6  bg-white bg-opacity-75 rounded-md shadow-md lg:max-w-xl ">
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
