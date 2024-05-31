import React from "react";

import Properti from "../../assect/Images/property-image.jpg";
import PropertiTwo from "../../assect/Images/property Two.jpg";

function Properties() {
  return (
    <div>
      <div>
        <div className="max-w-[1320px] md:py-[80]  p-10 flex  gap-10 mx-auto md:flex-row flex-col">
          <div className="basis-[49%] relative">
            <img
              src={Properti}
              alt="about image"
              className="w-full  h-[700px] "
              style={{ objectFit: "cover" }}
              data-aos="fade-right"
            />
            <p
              className=" relative top-[-70px] max-[600px]:top-0 mx-2 text-gray-500 bg-white h-[50px] w-[300px] flex items-center justify-center"
              data-aos="fade-up"
            >
              <i className="fa-regular fa-circle-check text-green-500  "></i>
              ...Exclusive and luxury properties
            </p>
          </div>
          <div className="basis-[49%] px-3 ">
            <p className="text-lg my-9">
              <img
                src={PropertiTwo}
                alt="about image"
                className="w-full  "
                style={{ objectFit: "cover" }}
                data-aos="fade-left"
              />
              <div className="text-[14px]  text-left my-5 font-semibold">
                PROPERTIES
              </div>
              <h1 className="text-[26px]  text-left ">
                We have the property you are looking for, just let us know your
                requirements.
              </h1>
              <hr className="h-[3px] my-8 bg-primary border-0 w-[280px] dark:bg-green-600" />
              <p className="text-gray-500 my-2 text-[15px] text-left">
                Cras pulvinar ultricies vehicula cras et nulla id lorem
                vulputate pulvinar eget non neque. Proin feugiat justo vitae
                euismod fringilla.
              </p>
            </p>
          </div>
        </div>
        <div className="flex justify-center my-5">
          <hr className="h-[1px] bg-gray-500 border-0 w-[1500px]" />
        </div>
      </div>
    </div>
  );
}

export default Properties;
