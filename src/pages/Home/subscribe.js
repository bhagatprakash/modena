import React from "react";
import BannerImage from "../../assect/Images/banner-Image.png";
import Subsc from "../../assect/Images/subscrib image.jpg";

function Subscribe() {
  return (
    <div className="py-10">
      <div className="flex flex-col md:flex-row mx-auto">
        <div className="basis-full md:basis-1/2 bg-green-400 px-3 relative">
          <div className="flex flex-col items-center justify-center min-h-[50px] mt-[120px] text-center md:text-left">
            <img src={BannerImage} alt="banner-image" className="h-[30px]" />
            <h1 className="text-3xl text-white py-5 font-semibold">
              FIND YOUR NEXT
            </h1>
            <h1 className="text-3xl text-white font-semibold">
              REAL ESTATE PROPERTY
            </h1>
            <p className="font-semibold text-white py-3">
              WE HAVE THE RIGHT PROPERTY FOR YOU
            </p>

            <form action="#" className="mx-auto md:w-[80%] lg:w-[60%]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-1 px-2 md:px-0">
                <input
                  type="text"
                  placeholder="Name"
                  className="border-gray-500 py-1 h-[45px] px-2"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="border-gray-500 py-1 px-2 h-[45px]"
                />
              </div>

              <div className="text-center my-1 md:text-left">
                <button className="btn h-[45px] w-full  text-white font-semibold bg-green-500 mt-4 md:mt-0">
                  Submit
                  <i className="fa-solid fa-arrow-down mx-3"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="basis-full md:basis-1/2">
          <img src={Subsc} alt="about image" className="w-full" />
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
