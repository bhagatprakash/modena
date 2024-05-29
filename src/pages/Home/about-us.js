import React from "react";
import About from "../../assect/Images/about-us.jpg";
import Aboutwo from "../../assect/Images/about-us two.jpg";

function AboutUs() {
  return (
    <div className="">
      <div className="max-w-[1320px] md:py-[80] gap-10 p-10 flex  mx-auto md:flex-row flex-col">
        <div className="basis-[49%] px-3 my-5">
          <p className="text-xl  text-left font-semibold">ABOUT US</p>
          <h1 className="text-3xl my-3 text-left ">
            We are a team of Real Estate agents with more than 60 years in
            combined experienced, based on the city of San Francisco.
          </h1>
          <hr className="h-[3px] my-8 bg-green-400 border-0 w-[280px] dark:bg-green-600" />
          <p className="text-lg my-9">
            <img
              src={Aboutwo}
              alt="about image"
              className="w-full "
              data-aos="fade-right"
            />
          </p>
        </div>
        <div className="basis-[49%] relative">
          <img
            src={About}
            alt="about image"
            className="w-full h-[655px]"
            data-aos="fade-left"
          />
          <p
            className=" relative top-[-70px]  max-[600px]:top-0 mx-2 text-gray-500 bg-white h-[50px] w-[300px] flex items-center justify-center"
            data-aos="fade-up"
          >
            <i className="fa-solid fa-school "></i>
            ...Exclusive and luxury properties
          </p>
        </div>
      </div>
      <div class="flex justify-center my-5">
        <hr className="h-[1px] bg-gray-500 border-0 w-[1500px]" />
      </div>
    </div>
  );
}

export default AboutUs;
