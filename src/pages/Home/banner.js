import React from "react";
import BannerImage from "../../assect/Images/banner-Image.png";

function Banner() {
  return (
    <div className="bg-banner h-[700px] bg-cover bg-no-repeat shadow-insetcustom flex items-center justify-center  ">
      <div className="text-center container mx-auto my-auto ">
        <img
          src={BannerImage}
          alt="banner-image"
          className="mx-auto h-[40px] "
        />
        <h1 className="text-5xl text-center text-white py-5  font-semibold">
          FIND YOUR NEXT
        </h1>
        <h1 className="text-5xl text-white  text-center font-semibold">
          REAL ESTATE PROPERTY
        </h1>
        <p className="font-semibold text-white py-8">
          WE HAVE THE RIGHT PROPERTY FOR YOU
        </p>

        <button className=" px-4 py-2 border-green-500 text-green-600 font-semibold   border rounded-full items-center justify-center hover:bg-green-500 hover:text-white duration-1000">
          Learn more
        </button>
      </div>
    </div>
  );
}
export default Banner;
