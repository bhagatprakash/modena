import React from "react";
import BannerImage from "../../assect/Images/banner-Image.png";
import Subsc from "../../assect/Images/subscrib image.jpg";

function Subscribe() {
  return (
    <div className="py-10">
      <div className="flex flex-col md:flex-row mx-auto">
        <div className="basis-full md:basis-1/2 bg-primary px-3 relative">
          <div
            className="flex flex-col items-center justify-center min-h-[50px] mt-[120px] md:text-left"
            data-aos="fade-right"
          >
            <img
              src={BannerImage}
              alt="banner-image"
              className="h-[30px] filter invert brightness-0"
            />
            <h1 className="text-3xl text-white py-5 font-semibold text-left">
              FIND YOUR NEXT
            </h1>
            <h1 className="text-3xl text-white font-semibold text-left">
              REAL ESTATE PROPERTY
            </h1>
            <p className="font-semibold text-white py-3 text-left">
              WE HAVE THE RIGHT PROPERTY FOR YOU
            </p>

            <form action="#" className="mx-auto md:w-[80%] lg:w-[60%] w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-1 px-2 md:px-0">
                <input
                  type="text"
                  placeholder="Name"
                  className="border border-gray-500 py-1 h-[45px] px-2"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="border border-gray-500 py-1 px-2 h-[45px]"
                />
              </div>

              <div className="text-center my-1 md:text-left">
                <button className="btn h-[45px] w-full text-white font-semibold border border-gray-500 bg-black-800 mt-4 md:mt-0 hover:bg-gray-500 hover:text-white duration-1000">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="basis-full md:basis-1/2">
          <img src={Subsc} alt="about image" className="w-full h-[100%]" />
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
