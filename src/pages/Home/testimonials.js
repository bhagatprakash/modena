import React, { useState } from "react";
import { cardData } from "../../assect/Data/crosealData";
import test from "../../assect/Images/test-1.jpg";
import test1 from "../../assect/Images/test-2.jpg";
import test2 from "../../assect/Images/test-3.jpg";
import test3 from "../../assect/Images/test-4.jpg";

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + cardData.length) % cardData.length
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % cardData.length);
  };

  return (
    <>
      <div
        id="controls-carousel"
        className="relative w-full bg-carosalImage   h-[420px]  rounded-lg "
      >
        {/* Carousel wrapper */}
        <div className="">
          {cardData.map((item, index) => (
            <div
              key={index}
              className={` item absolute inset-0 pt-6 transition-opacity duration-700 ease-in-out ${
                index === activeIndex ? "opacity-100" : "opacity-0"
              }`}
              data-carousel-item={index === activeIndex}
            >
              <div className="item  text-center mx-auto py-10 w-full max-w-[44rem] px-4 sm:px-6 lg:px-8">
                <h2 className="text-xl font-bold">Testimonials</h2>

                <h1 className=" lg:text-3xl text-xl my-5 lg:leading-normal mx-auto ">
                  {item.content}
                </h1>
                <div class="flex justify-center">
                  <hr className="h-[2px] bg-gray-800 border-0 w-[200px]" />
                </div>

                <div className="mx-auto text-center my-5">
                  <h1 className="text-xl  font-semibold">{item.job}</h1>
                </div>
              </div>

              <div className="z-10">
                <img
                  src={test}
                  alt="test img"
                  className="rounded-full lg:h-[120px] h-[80px] border float-start border-green-400 relative lg:top-[-330px] lg:right-[-290px] md:top-[-350px] md:right-[-100px] sm:right-[-30px] top-[-450px]"
                />
                <img
                  src={test1}
                  alt="test img"
                  className="rounded-full lg:h-[120px] h-[80px] border float-start border-green-400 relative lg:top-[-100px] lg:right-[-250px] top-[-200px] md:top-[-137px] md:right-[-200px] right-[70px]"
                />
                <img
                  src={test2}
                  alt="test img"
                  className="rounded-full lg:h-[120px] h-[80px] border float-end border-green-400 relative lg:top-[-330px] md:right-[91px] lg:right-[400px] top-[-550px] sm:top-[-350px]"
                />
                <img
                  src={test3}
                  alt="test img"
                  className="rounded-full lg:h-[120px] h-[80px] border float-end border-green-400 relative lg:top-[-150px] lg:right-[400px] md:right-[114px] md:top-[-70px] top-[-150px] right-[-100px]"
                />
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
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/80  group-focus:ring-4 group-focus:ring-red">
            <svg
              className="w-4 h-4 text-red-500"
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
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/80  group-focus:ring-4 group-focus:ring-red">
            <svg
              className="w-4 h-4 text-red-500"
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
      <div class="flex justify-center my-5">
        <hr className="h-[1px] bg-gray-500 border-0 w-[1500px]" />
      </div>
    </>
  );
}

export default Testimonials;
