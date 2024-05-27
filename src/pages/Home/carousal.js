import React, { useState } from "react";
import { SliderData } from "../../assect/Data/slider.Data";

function Carousal() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + SliderData.length) % SliderData.length
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % SliderData.length);
  };
  return (
    <div>
      <div className="max-w-[1320px]  md:py-[80] gap-10 p-10 flex  mx-auto md:flex-row flex-col">
        <div
          id="controls-carousel"
          className="relative w-full bg-carosalImage  bg-green-400 h-[420px]  rounded-lg "
        >
          {/* Carousel wrapper */}
          <div>
            {SliderData.map((item, index) => (
              <div
                key={index}
                className={` item absolute inset-0  transition-opacity duration-700 ease-in-out ${
                  index === activeIndex ? "opacity-100" : "opacity-0"
                }`}
                data-carousel-item={index === activeIndex}
              >
                <img
                  src={item.carosalImage}
                  className="h-full w-full relative"
                />
                <div className=" md:w-[500px] sm:w-[300px] sm:p-5  max-auto bg-white border border-gray-500  relative p-10 top-[-350px]  lg:right-[-80px]">
                  <p className="text-[18px] sm:text-[16px] text-left font-bold py-2">
                    DESIGN
                  </p>
                  <h1 className="text-3xl  sm-text-xl text-gray-800 font-semibold text-left">
                    Our designers will deliver a proposal in just few days.
                  </h1>
                  <div class="flex  text-left my-5">
                    <hr className="h-[2px] bg-green-500 border-0 w-[200px]" />
                  </div>
                  <p className="text-[18px] sm:text-[15px] text-gray-400 font-semibold  text-left">
                    Cras pulvinar ultricies vehicula cras et nulla id lorem
                    vulputate pulvinar eget non neque. Proin feugiat justo vitae
                    euismod fringilla.
                  </p>
                </div>
              </div>
            ))}
          </div>
          {/* Slider controls */}
          <button
            type="button"
            className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            onClick={handlePrev}
          >
            <span className="inline-flex items-center justify-center w-10 relative right-[-1143px] bottom-[-190px] h-10  bg-green-500/80 group-hover:bg-white/50  ">
              <svg
                className="w-4 h-4 text-white "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            onClick={handleNext}
          >
            <span className="inline-flex items-center justify-center w-10 h-10  relative bg-green-500/80 group-hover:bg-white/50 left-[15px] bottom-[-190px]">
              <svg
                className="w-4 h-4 text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </div>
      <div class="flex justify-center my-5">
        <hr className="h-[1px] bg-gray-500 border-0 w-[1500px]" />
      </div>
    </div>
  );
}

export default Carousal;
