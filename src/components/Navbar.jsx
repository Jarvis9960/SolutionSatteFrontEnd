import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import SmallLogo from "../../public/Images/smallLogo.jpeg"
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const location = useLocation();

  function handleLogout() {
    // e.preventDefault();
    console.log("run");
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    setIsLogged(false);
  }

  return (
    <div>
      <Disclosure as="nav" className=" bg-[#172236] md:bg-white sm:bg-white xs:bg-white xxs:bg-white">
        {({ open }) => (
          <>
            <div className="mx-auto  px-2   sm:px-6  w-full ">
              <div className="relative flex h-16 items-center justify-between">
                
                <img
                  src={SmallLogo}
                  className="absolute inset-y-2 rounded-lg right-1 w-32 right-2 xl:hidden"
                />

                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden lg:hidden xl:hidden">
                  <Disclosure.Button
                    className="sm:inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700
                   hover:text-white focus:outline-none 
                  focus:ring-2 focus:ring-inset focus:ring-white lg:inline-flex xl:inline-flex"
                  >
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon
                        className="block h-6 w-6 "
                        aria-hidden="true"
                      />
                    )}
                  </Disclosure.Button>
                </div>
                <div className=" w-full flex flex-1 items-center justify-center sm:items-stretch sm:justify-start  md: justify-stretchs lg:justify-stretch lg:items-stretch xl:items-stretch">
                  <div className="flex flex-shrink-0 items-center justify-center">
                    <div className="hidden sm:ml-6  sm:block  lg:ml-6 xl:block xl:ml-6 lg:block">
                      <div className="flex space-x-24 justify-center items-center myDIV">
                        <img
                          src={SmallLogo}
                          className="w-36 right-20 rounded-lg"
                          style={{ position: "relative" }}
                        />
                        <Link
                          id={location.pathname === "/" ? "dark" : ""}
                          to="/"
                          class="hover:bg-blue-400 text-white rounded-md px-6 py-2 text-base font-medium "
                          aria-current="page "
                        >
                          Home
                        </Link>
                        <Link
                          to="/aboutus"
                          id={location.pathname === "/aboutus" ? "dark" : ""}
                          class=" text-white hover:bg-blue-400 hover:text-white rounded-md px-6 py-2 text-sm font-medium "
                        >
                          About Us
                        </Link>
                        <Link
                          id={location.pathname === "/career" ? "dark" : ""}
                          to="/career"
                          class=" text-white hover:bg-blue-400 hover:text-white rounded-md px-6 py-2 text-sm font-medium  "
                        >
                          career
                        </Link>

                        <Link
                          to="/contactus"
                          id={location.pathname === "/contactus" ? "dark" : ""}
                          class="text-white hover:bg-blue-400 hover:text-white rounded-md px-6 py-2 text-sm font-medium  "
                        >
                          Contact Us
                        </Link>
                        <Link
                          to="/login"
                          class=" text-white hover:bg-blue-400 hover:text-white rounded-md px-6 py-2 text-md font-medium   "
                        >
                          Login
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0   lg:pr-0 lg:ml-6 lg:inset-auto lg:static xl:static xl:inset-auto xl:ml-6 ml:pr-0 ">
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="flex  bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="sr-only">Open user menu</span>
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Your Profile
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Settings
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                              onClick={() => console.log("click")}
                            >
                              Sign out
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden lg:hidden xl:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2 flex flex-col justify-center items-center">
                <Link
                  to="/"
                  class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
                  aria-current="page"
                >
                  Home
                </Link>
                <Link
                  to="/aboutus"
                  class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  About Us
                </Link>
                <Link
                  to="/career"
                  class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  Career
                </Link>

                <Link
                  to="/contactus"
                  class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                >
                  Contact Us
                </Link>
                <Link
                  to="/login"
                  class="text-gray-300 hover:bg-gary-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium  "
                >
                  Login
                </Link>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default Navbar;
