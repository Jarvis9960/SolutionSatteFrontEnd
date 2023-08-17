import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Newsletter = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:5000/api/v1/crm/makeusersubscribe",
        data: {
          name: name,
          email: email,
        },
      });

      if (response.data.status) {
        toast(response.data.message);
      }
    } catch (error) {
      toast(error.response.data.message);
    }
  };

  return (
    <div>
      <ToastContainer />
      <div className="xxs:w-sceen  ">
        <div
          class="px-6  mx-auto my-40 w-3/5 w-auto xxs:w-full xl:container "
          style={{ backgroundColor: "hsl(218, 41%, 15%)" }}
        >
          <section class="mb-32 text-gray-800 background-radial-gradient  ">
            <div class="px-0 py-16 md:px-12 text-center lg:text-left   ">
              <div class="container mx-auto xl:px-32">
                <div class="grid lg:grid-cols-3 gap-12  items-center  ">
                  <div class="mt-12 lg:mt-0 ">
                    <h1
                      class="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12  "
                      style={{ color: "hsl(218, 81%, 95%)" }}
                    >
                      Do not miss <br />{" "}
                      <span style={{ color: "hsl(218, 81%, 75%)" }}>
                        any updates
                      </span>
                    </h1>
                    <p
                      class="mb-4 opacity-70 lead"
                      style={{ color: "hsl(218, 81%, 85%)" }}
                    >
                      We will write rarely and only high-quality content.
                    </p>
                  </div>
                  <div class="mb-12 lg:mb-0">
                    <div class="block rounded-lg shadow-lg bg-white px-6 py-12 md:px-12">
                      <h2 class="text-3xl font-bold mb-12">
                        Subscribe to the newsletter
                      </h2>

                      <div class="form-group mb-6">
                        <input
                          type="text"
                          class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          id="exampleInput90"
                          placeholder="Name"
                          onChange={(e) => {
                            setName(e.target.value);
                          }}
                        />
                      </div>
                      <div class="form-group mb-6">
                        <input
                          type="email"
                          class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                          id="exampleInput91"
                          placeholder="Email address"
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                        />
                      </div>
                      <div class="form-group form-check text-center mb-6">
                        <input
                          type="checkbox"
                          class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
                          id="exampleCheck96"
                          checked
                        />
                        <label
                          class="form-check-label inline-block text-gray-800"
                          for="exampleCheck96"
                        >
                          I have read and agree to the terms
                        </label>
                      </div>
                      <button
                        class="w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                        onClick={(e) => {
                          handleSubmit(e);
                        }}
                      >
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
