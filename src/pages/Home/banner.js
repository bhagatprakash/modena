import React from "react";
import BannerImage from "../../assect/Images/banner-Image.png";

function Banner() {
  return (
    <div
      className="bg-banner h-[700px] bg-cover bg-no-repeat shadow-insetcustom flex items-center justify-center   "
      style={{ objectFit: "cover" }}
    >
      <div className="text-center container mx-auto my-auto ">
        <img
          src={BannerImage}
          alt="banner-image"
          className="mx-auto h-[40px] "
          style={{ objectFit: "cover" }}
        />
        <h1 className="text-[42px] text-center text-white  font-semibold">
          FIND YOUR NEXT
        </h1>
        <h1 className="text-[42px] text-white  text-center font-semibold">
          REAL ESTATE PROPERTY
        </h1>
        <p className="font-semibold text-[15px] text-white py-3">
          WE HAVE THE RIGHT PROPERTY FOR YOU
        </p>

        <button className=" px-4 py-2 border-primary text-primary font-semibold  text-[15px]  border rounded-full items-center justify-center hover:bg-primary hover:text-white duration-1000">
          Learn more
        </button>
      </div>
    </div>
  );
}
export default Banner;
