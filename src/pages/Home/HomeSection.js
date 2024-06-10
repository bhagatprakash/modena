import React, { useState, useEffect } from "react";
import { cardData } from "../../assect/Data/crosealData";
import test from "../../assect/Images/slider-3.jpg";
import test1 from "../../assect/Images/slider-4.jpg";
import test2 from "../../assect/Images/slider2.jpg";
import banner from "../../assect/Images/banner-Image.png";
import { FetureData } from "../../assect/Data/fetureData";
import Footer from "../../components/footer";
import HeaderImage from "../../assect/Images/HEADER IMAGE.png";

function HomeSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + cardData.length) % cardData.length
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % cardData.length);
  };

  // header
  useEffect(() => {
    document.getElementById("hamburger").onclick = function toggleMenu() {
      const navToggle = document.getElementsByClassName("toggle");
      for (let i = 0; i < navToggle.length; i++) {
        navToggle.item(i).classList.toggle("hidden");
      }
    };
  }, []);

  return (
    <>
      {/* <header  */}
      {/* <header className="sticky top-0 bg-white z-50">
        <nav className="flex flex-wrap justify-between my-5 px-5 lg:px-20">
          <div>
            <img
              src={HeaderImage}
              className="h-[24px] my-3"
              alt="header-image"
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="flex md:hidden">
            <button id="hamburger">
              <img
                className="toggle block"
                src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png"
                width="40"
                height="40"
              />
              <img
                className="toggle hidden"
                src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png"
                width="40"
                height="40"
              />
            </button>
          </div>
          <div className="toggle hidden w-full md:w-auto md:flex row-gap-25 text-bold mt-5 md:mt-0 md:border-none">
            <a
              href="#"
              className="block md:inline-block lg:text-[16px] md:text-[12px] font-bold px-2 lg:px-3 py-3"
            >
              PROPERTIES<i className="fa-solid fa-angle-right mx-2"></i>
            </a>
            <a
              href="#"
              className="block md:inline-block lg:text-[16px] md:text-[12px] font-bold px-2 lg:px-3 py-3"
            >
              ABOUT US
            </a>
            <a
              href="#"
              className="block md:inline-block px-2 lg:px-3 py-3 lg:text-[15px] md:text-[12px] font-bold"
            >
              SERVICES
            </a>
            <a
              href="#"
              className="block md:inline-block px-2 lg:px-3 py-3 lg:text-[16px] md:text-[12px] font-bold"
            >
              FAQ
            </a>
            <a
              href="#"
              className="block md:inline-block px-2 lg:px-3 py-3 lg:text-[15px] md:text-[12px] font-bold"
            >
              BLOG
            </a>
            <a
              href="#"
              className="block md:inline-block px-2 lg:px-3 py-3 lg:text-[16px] md:text-[12px] font-bold"
            >
              CONTACT US
            </a>
            <a
              href="#"
              className="block md:inline-block px-2 lg:px-3 py-3 lg:text-[16px] md:text-[12px] font-bold"
            >
              PAGES<i className="fa-solid fa-angle-right mx-2"></i>
            </a>
            <a
              href="#"
              className="block md:inline-block px-2 lg:px-3 py-3 lg:text-[16px] md:text-[12px] font-bold"
            >
              <i className="fa-brands fa-whatsapp text-green-500 font-semibold text-[25px] md:text-[18px] mx-1"></i>
              CALL US TODAY <span className="text-green-500">899-504-629</span>
            </a>
          </div>
        </nav>
      </header> */}

      {/* carosal  */}
      <div
        id="controls-carousel"
        className="relative w-full bg-carosalImage     rounded-lg "
      >
        {/* Carousel wrapper */}

        <div>
          <div
            className={` item   transition-opacity duration-700 ease-in-out  ${
              activeIndex === 0 ? "opacity-100" : "opacity-0"
            }`}
          >
            <img src={test} alt="image" className="h-[600px] w-full" />
          </div>
          <div
            className={` item absolute inset-0 pt-6 transition-opacity duration-700 ease-in-out  ${
              activeIndex === 0 ? "opacity-100" : "opacity-0"
            }`}
          >
            <img src={test1} alt="image" className="h-[600px] w-full" />
          </div>
          <div
            className={` item absolute inset-0 pt-6 transition-opacity duration-700 ease-in-out ${
              activeIndex === 1 ? "opacity-100" : "opacity-0"
            }`}
          >
            <img src={test2} alt="image" className="h-[600px] w-full" />
          </div>

          <div
            className={` item absolute inset-0 pt-6 transition-opacity duration-700 ease-in-out ${
              activeIndex === 2 ? "opacity-100" : "opacity-0"
            }`}
          >
            <img src={test} alt="image" className="h-[600px] w-full" />
          </div>
        </div>
        {/* Slider controls */}
        <button
          type="button"
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={handlePrev}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 ">
            <svg
              className="w-5 h-15 text-green-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
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
          <span className="inline-flex items-center justify-center w-20 h-50 ">
            <svg
              className="w-5 h-10 text-green-500 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>

      {/* san francisco  */}
      <div className="max-w-[1320px] my-10  mx-auto relative">
        <div className="bg-accent/20">
          <div className="max-w-[1320px] grid grid-cols-1 md:grid-cols-1 md:text-right md:justify-items-right  lg:grid-cols-3 py-5 px-5 sm:px-12 gap-5">
            <div className="md:col-span-2 my-10 text-left flex flex-col overflow-auto h-[500px] custom-scrollbar">
              <div className="my-10">
                <h1 className="text-[15px] font-bold text-left sm:text-center lg:text-left opacity-85">
                  SAN FRANCISCO
                </h1>
                <h1 className="text-[30px] text-left sm:text-center lg:text-left opacity-85">
                  Comfortable Apartment With Great View
                </h1>
                <hr className="h-[2px] bg-green-500 border-0 w-[200px] my-4" />
              </div>
              <div className="my-3">
                <span className="text-[22px] font-normal">Description</span>
                <p className="text-[17px] text-gray-500 text-left my-3 lg:text-left">
                  Gorgeous 2 story 5 bdrm. 3.5 bath home situated on 1/2 acre
                  wooded lot. Home boasts Expansive open concept formal Living &
                  Dining rooms with abundant light, spacious Breakfast Area and
                  Executive study. Island kitchen w/granite counters and granite
                  breakfast bar. Master bedroom w/sitting area, double vanities,
                  luxurious soak tub, walk in shower and expansive walk in
                  closets.
                </p>
              </div>
              <div className="my-3">
                <span className="text-[22px] font-normal my-5">
                  Living Room
                </span>
                <p className="text-[17px] text-gray-500 text-left my-3 lg:text-left">
                  All rooms have a super efficient air conditioner unit that
                  reduces the electricity bill by 50% on summer and 70% on
                  winter. ‍The thermostat can be regulated individually or all
                  the thermostat at the same time.
                </p>
              </div>
              <div className="my-3">
                <span className="text-[22px] font-normal my-5">Kitchen</span>
                <p className="text-[17px] text-gray-500 text-left my-3 lg:text-left">
                  Island kitchen w/granite counters and granite breakfast bar
                  Master bedroom w/sitting area, double vanities, luxurious soak
                  tub, walk in shower and expansive walk in closets. The house
                  also includes a brand new Solar Panel System, that provides
                  the 35% of the electricity required for the house operation.
                </p>
              </div>
              <div className="my-3">
                <span className="text-[22px] font-normal my-5">
                  Credit Options
                </span>
                <p className="text-[17px] text-gray-500 text-left my-3 lg:text-left">
                  Estate style drive leading to a 3 car detached/full
                  porte-cochere garage and fenced backyard. Book your visit to
                  this beautiful property today!
                </p>
              </div>
            </div>

            <div className="flex flex-col mx-auto justify-center lg:order-last order-first">
              {/* card  */}
              <div className="my-6 bg-white rounded-lg border border-gray-300 dark:border-gray-700 h-[250px] w-[320px]">
                <div className="h-[30px] overflow-hidden rounded-t-lg relative">
                  <span className="absolute top-0 right-0 bg-green-500 m-2 p-1 text-[10px] font-semibold text-white">
                    For Sale
                  </span>
                </div>
                <a href="#">
                  <h5 className="my-2 text-[14px] mx-4 font-semibold tracking-tight text-gray-900 dark:text-white text-left">
                    APARTMENT
                  </h5>
                </a>
                <p className="mb- font-normal mx-4 text-[22px] text-gray-500 dark:text-gray-400 text-left">
                  $330,000
                </p>
                <p className="mb-3 font-[14px] mx-4 text-gray-500 dark:text-gray-400 text-left">
                  Rodeo Drive, 325.
                </p>
                <div className="pt-4 ml-[8px] pb-2 border-t border-gray-300">
                  <div className="flex justify-between">
                    <span className="inline-block px-3 py-1 text-[13px] font-semibold border p-5 border-gray-300 opacity-85 text-gray-700 mr-2 mb-2 text-left">
                      <i className="fa-solid fa-bed mx-2"></i> 3 Bedrooms
                    </span>
                    <span className="inline-block px-3 py-1 text-[13px] font-semibold border p-5 opacity-85 border-gray-300 text-gray-700 mr-2 mb-2 text-left">
                      <i className="fa-solid fa-sink mx-2"></i> 2 Bathrooms
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="inline-block px-3 py-1 text-[13px] font-semibold border p-5 opacity-85 border-gray-300 text-gray-700 mr-2 mb-2 text-left">
                      <i className="fa-solid fa-bed mx-2"></i> 3 Bedrooms
                    </span>
                    <span className="inline-block px-3 py-1 text-[13px] font-semibold border p-5 opacity-85 border-gray-300 text-gray-700 mr-2 mb-2 text-left">
                      <i className="fa-solid fa-sink mx-2"></i> 2 Bathrooms
                    </span>
                  </div>
                </div>
              </div>
              {/* card-1  */}
              <div className=" bg-white rounded-md border border-gray-300 dark:border-gray-700 h-[220px] w-[320px]">
                <div className="h-[30px] overflow-hidden rounded-t-lg"></div>
                <a href="#">
                  <h5 className="my-2 text-[14px] mx-4 font-bold tracking-tight text-gray-900 dark:text-white text-left">
                    CONTACT US
                  </h5>
                </a>
                <p className="mb- font-normal mx-4 text-[14px] text-green-500 dark:text-gray-400 text-left">
                  800 123-456
                </p>
                <p className="font-[14px] mx-4 text-green-500 dark:text-gray-400 text-left">
                  Rodeo Drive, 325.
                </p>
                <p className="font-[14px] mx-4 text-gray-500 dark:text-gray-400 text-left">
                  Monday to Friday
                </p>
                <p className="mb-3 font-[14px] mx-4 text-gray-500 dark:text-gray-400 text-left">
                  9am - 5pm
                </p>

                <button className="bg-green-500 text-white p-3 text-center w-full">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* card  */}

      <div className="max-w-[1320px] my-10  mx-auto relative">
        <div className=" text-left mx-10">
          <h1 className="text-[30px]  ">Latest Property Deals</h1>
        </div>
        <div className="bg-accent/20">
          <div className="max-w-[1320px] grid grid-cols-1 gap-6 sm-text-center sm:grid-cols-2 lg:grid-cols-4 px-12">
            {FetureData.map((card, index) => (
              <div
                key={index}
                className="my-6 bg-white rounded-lg shadow-xl border border-gray-300 dark:border-gray-700"
              >
                <div className="h-[225px] overflow-hidden rounded-t-lg relative">
                  <img
                    src={card.image}
                    alt="card"
                    className="w-full h-full object-cover hover:scale-125 duration-1000 "
                    style={{ objectFit: "cover" }}
                  />
                  <span className="absolute top-0 right-0 bg-green-500 m-2 p-1 text-[10px] font-semibold text-white ">
                    For Sale
                  </span>
                </div>

                <a href="#">
                  <h5 className="my-2 text-[14px] mx-4 font-semibold tracking-tight text-gray-900 dark:text-white text-left">
                    {card.type}
                  </h5>
                </a>
                <p className="mb- font-normal mx-4 text-[22px] text-gray-500 dark:text-gray-400 text-left">
                  {card.price}
                </p>
                <p className="mb-3 font-[14px] mx-4 text-gray-500 dark:text-gray-400 text-left">
                  {card.location}
                </p>
                <div className="pt-4 ml-[8px] pb-2 border-t border-gray-300">
                  <div className="flex justify-between">
                    <span className="inline-block px-3 py-1 text-[12px] font-semibold border p-5 border-gray-300 text-gray-700 mr-2 mb-2 text-left">
                      <i className="fa-solid fa-bed mx-2"></i> {card.bedrooms}{" "}
                      Bedrooms
                    </span>
                    <span className="inline-block px-3 py-1 text-[12px] font-semibold border p-5 border-gray-300 text-gray-700 mr-2 mb-2 text-left">
                      <i className="fa-solid fa-sink mx-2"></i> {card.bathrooms}{" "}
                      Bathrooms
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center my-5">
            <hr className="h-[1px] bg-gray-500 border-0 w-[700px] my-4 mx-5" />
            <img src={banner} alt="blog img" className="h-[30px]" />
            <hr className="h-[1px] bg-gray-500 border-0 w-[700px] my-4 mx-5" />
          </div>
        </div>
      </div>

      {/* footer  */}
      {/* <Footer /> */}
    </>
  );
}

export default HomeSection;
