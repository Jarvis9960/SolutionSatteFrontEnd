import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object()
  .shape({
    password: yup
      .string()
      .required("Password is required")
      .min(5, "Password length should be at least 5 characters")
      .max(12, "Password should not more than 12 characters"),
    cPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  })
  .required();

const Updatepassword = ({ Profiledata, id }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await axios({
        method: "patch",
        url: `https://api.solutionsathee.com/api/v1/crm/updatepassword/${Profiledata._id}`,
        data: data,
      });

      if (response.data.success) {
        toast(response.data.message);
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 500) {
          toast("something went wrong");
        } else if (error.response.status === 422) {
          toast(error.response.data.message);
        }
      }
    }
  };


  console.log(Profiledata)

  return (
    <form className="w-full max-w-xs" onSubmit={handleSubmit(onSubmit)}>
      <div className="">
        <ToastContainer />
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Username
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
            defaultValue={Profiledata.first_name}
          />
        </div>
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="Employee ID"
          >
            Employee ID
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="empId"
            type="number"
            placeholder="Employee-ID"
            defaultValue={Profiledata.employeeid}
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
            {...register("password")}
          />
          <small className="text-red-600">{errors.password?.message}</small>
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            for="password"
          >
            Confirm Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
            {...register("cPassword")}
          />
        <small className="text-red-600">{errors.cPassword?.message}</small>
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default Updatepassword;
