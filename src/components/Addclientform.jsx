import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const schema = yup
  .object()
  .shape({
    first_name: yup.string().min(2).required(),
    remark: yup.string(),
    last_name: yup.string().required(),
    middlename: yup.string().optional(),
    city: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.number().min(10).required(),
    aadhar: yup.number().min(12).required(),
    pan: yup.string().min(10).required(),
    gst: yup.string().min(6).required(),
    zip: yup.number().min(6).required(),
    state: yup.string().required(),
    gender: yup.string().required(),
    dob: yup.date()
    .max(new Date(Date.now() - 567648000000), "You must be at least 18 years")
    .required("Required"),
  })
  .required();

const Addclientform = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const tokenData = localStorage.getItem("token");
  const token = JSON.parse(tokenData).usertoken;


  const onSubmit = async (data) => {
    console.log(data)
    try {
      const response = await axios({
        method: "post",
        url: "https://api.solutionsathee.com/api/v1/crm/addclient",
        data: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response) {
        toast.success(response.data.message, {
          position: toast.POSITION.TOP_RIGHT
        })
        setTimeout(() => {
          navigate("/myclient")
        }, 2000);
      }
    } catch (error) {
      if(error.response){
        if(error.response.status===500){
          toast("something went wrong");
        }
        else if(error.response.data.message===422)
        {
        toast(error.response.data.message);
        }
      }
      
      // toast.error(error.response.data.message, {
      //   position: toast.POSITION.TOP_RIGHT});
    }
  };

  return (
    <>
      <form className="w-full md:w-1/3   xl:w-2/3 lg:w-1/4 mt-12 mx-auto" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-wrap mx-3 mb-6 justify-center items-center ">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              First Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder=""
              {...register("first_name")}
            />
            <small className="text-red-600">{errors.first_name?.message}</small>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Middle Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder=""
              {...register("middlename")}
            />
            <small className="text-red-600">{errors.middlename?.message}</small>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Last Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder=""
              {...register("last_name")}
            />
            <small className="text-red-600">{errors.last_name?.message}</small>
          </div>
        </div>
        <div className="flex flex-wrap mx-3 mb-6 justify-center items-center">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Email
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="email"
              placeholder=""
              {...register("email")}
            />
            <small className="text-red-600">{errors.email?.message}</small>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Mobile Number
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="number"
              placeholder=""
              {...register("phone")}
            />
            <small className="text-red-600">{errors.phone?.message}</small>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              PAN Number
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder=""
              {...register("pan")}
            />
            <small className="text-red-600">{errors.pan?.message}</small>
          </div>
        </div>
        <div className="flex flex-wrap mx-3 mb-6 justify-center items-center">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Aadhar Number
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="number"
              placeholder=""
              {...register("aadhar")}
            />
            <small className="text-red-600">{errors.aadhar?.message}</small>
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              GST Number
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder=""
              {...register("gst")}
            />
            <small className="text-red-600">{errors.gst?.message}</small>
          </div>
        </div>
        <div className="flex flex-wrap mx-3 mb-6 justify-center items-center">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-state"
            >
              Gender
            </label>
            <div className="relative">
              <select
                name=""
                {...register("gender")}
                className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                id="grid-state"
              >
                <option value="Select Gender">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">Others</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
            {errors.gender && (
              <small className="text-red-600">{errors.gender.message}</small>
            )}
          </div>
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              DOB
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="date"
              placeholder=""
              {...register("dob")}
            />
            <small className="text-red-600">{errors.dob?.message}</small>
          </div>
        </div>
        <div className="flex flex-wrap mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-city"
            >
              City
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-city"
              type="text"
              placeholder=""
              {...register("city")}
            />
            <small className="text-red-600">{errors.city?.message}</small>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-state"
            >
              State
            </label>
            <div className="relative">
              <select
                name=""
                {...register("state")}
                className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                id="grid-state"
              >
                <option value="Uttar Pradesh">Select State</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Delhi">Delhi</option>
                <option value="Delhi">Madhya Pradesh</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Mumbai">Bihar</option>
                <option value="Mumbai">Chhattishgarh</option>
                <option value="Mumbai">Goa</option>
                <option value="Mumbai">Nagaland</option>
                <option value="Mumbai">Tamil Nadu</option>
                <option value="Mumbai">Maharashtra</option>
                <option value="Mumbai">Punjab</option>
                <option value="Mumbai">Andra Pradesh</option>
                <option value="Mumbai">Karnataka</option>
                <option value="Mumbai">Rajasthan</option>
                <option value="Mumbai">Mizoran</option>
                <option value="Mumbai">Himanchal Pradesh</option>
                <option value="Mumbai">West bengal</option>
                <option value="Mumbai">Haryana</option>
                <option value="Mumbai">Kerla</option>
                <option value="Mumbai">Odisha</option>
                <option value="Mumbai">Arunachal Pradesh</option>
                <option value="Mumbai">Tripura</option>
                <option value="Mumbai">Gujarat</option>
                <option value="Mumbai">Meghalaya</option>
                <option value="Mumbai">Manipur</option>
                <option value="Mumbai">Jharkhand</option>
                <option value="Mumbai">Uttarakhand</option>
                <option value="Mumbai">Assam</option>
                <option value="Mumbai">Jummu & kashmir</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
            {errors.state && (
              <small className="text-red-600">{errors.state.message}</small>
            )}
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-zip"
            >
              Zip
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-zip"
              type="number"
              placeholder=""
              {...register("zip")}
            />
            <small className="text-red-600">{errors.zip?.message}</small>
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-zip"
            >
              Remark
            </label>
            <textarea
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-zip"
              type="text"
              placeholder=""
              {...register("remark")}
            />
            <small className="text-red-600">{errors.remark?.message}</small>
          </div>
        </div>
        <div className="flex justify-center  mt-5">
          <input
            type="submit"
            className="rounded-none bg-blue-600 text-white p-3 cursor-pointer"
          />
        </div>
      </form>
      < ToastContainer />
    </>
  );
};

export default Addclientform;
