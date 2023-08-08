import React from "react";

const Profileform = () => {
  return (
    <div className="w-full mt-12 ">
      <div className="flex flex-wrap mx-3 mb-6 gap-2 justify-center items-center">
        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0 bg-red-600">
          <div
            x-data="{photoName: null, photoPreview: null}"
            class="col-span-6 ml-2 sm:col-span-4 md:mr-3"
          >
          
            <input
              type="file"
              class="hidden"
              x-ref="photo"
              x-on:change="
                        photoName = $refs.photo.files[0].name;
                        const reader = new FileReader();
                        reader.onload = (e) => {
                            photoPreview = e.target.result;
                        };
                        reader.readAsDataURL($refs.photo.files[0]);
    "
            />

            <label
              class="block text-gray-700 text-sm font-bold mb-2 text-center"
              for="photo"
            >
              Profile Photo <span class="text-red-600"> </span>
            </label>

            <div class="text-center">
              <div class="mt-2" x-show="! photoPreview">
                <img
                  src="https://images.unsplash.com/photo-1531316282956-d38457be0993?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80"
                  class="w-40 h-40 m-auto rounded-full shadow"
                />
              </div>
              <div class="mt-2" x-show="photoPreview" style="display: none;">
                <span
                  class="block w-40 h-40 rounded-full m-auto shadow"
                  x-bind:style="'background-size: cover; background-repeat: no-repeat; background-position: center center; background-image: url(\'' + photoPreview + '\');'"
                  style="background-size: cover; background-repeat: no-repeat; background-position: center center; background-image: url('null');"
                ></span>
              </div>
              
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0 bg-orange-600">
          09
        </div>
      </div>
    </div>
  );
};

export default Profileform;
